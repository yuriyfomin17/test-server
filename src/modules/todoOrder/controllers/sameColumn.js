import orderModel from '../orderModel';
import mongoose from 'mongoose';

const sameColumn = (req, res) => {

  const column = req.body.column;
  const id = req.body.id;
  const destinationIndex = req.body.destination;


  orderModel.update({ column: column }, { $pull: { 'order': { _id: mongoose.Types.ObjectId(id) } } })

    .exec().then(doc => {
      orderModel.update({ column: column }, {
        $push: {
          'order': {
            $each: [{
              _id: mongoose.Types.ObjectId(id),
            }], $position: destinationIndex,
          },
        },
      }).exec().then((doc) => {
        if (doc) {
          res.status(200).json(doc);
        } else {
          res.status(404).json('No todo for provided id');
        }
      }).catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

export default sameColumn;