import todoModel from '../todoModel';
import orderModel from '../../todoOrder/orderModel';
import mongoose from 'mongoose';


export default async function todoCreate(req, res) {

  const _id = new mongoose.Types.ObjectId();
  const name = req.body.name;
  const done = req.body.done;
  const shrink = req.body.shrink;
  const priority = req.body.priority;
  const description = req.body.description;
  const column = req.body.column;

  const todo = new todoModel({
    _id,
    name: name,
    description: description,
    done: done,
    shrink: shrink,
    priority: priority,
  });

  todo
    .save().then(() => {
    orderModel.update({ column: column }, {
      $push: {
        order: {
          $each: [{ _id: _id }],
        },
      },
    }).then(doc => {
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json('No todo for provided id');
      }
    })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  }).catch(err => {
    console.log(err);
    res.status(500).json({ error: err });
  });


}