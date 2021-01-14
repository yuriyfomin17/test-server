import todoModel from '../todoModel';
import orderModel from '../../todoOrder/orderModel';
import mongoose from 'mongoose';
const todoDeleteById = (req, res) => {
  const column = req.body.column;
  const id = req.body.id;

  todoModel.deleteOne({ _id: id })
    .then(() => {
      orderModel.update({ column: column }, { $pull: { "order": { _id: mongoose.Types.ObjectId(id) } } }).then(doc => {
        if (doc) {
          res.status(200).json('Success')
        } else {
          res.status(404).json('No todo for provided id');
        }
      }).catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
    }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });

};

export default todoDeleteById;
