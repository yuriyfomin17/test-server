import orderModel from '../orderModel';
import mongoose from 'mongoose';

const differentColumn = (req, res) => {
  const columnSource = req.body.columnSource;
  const columnDestination = req.body.columnDestination;
  const destinationIndex = req.body.destination;
  const id = req.body.id;
  // _id: mongoose.Types.ObjectId(id)
  console.log("ID", id);
  console.log("Column SOurce", columnSource);
  console.log("Column Dest", columnDestination);
  console.log("dest index", destinationIndex);
  orderModel.update({ column: columnSource }, { $pull: { 'order': { _id: mongoose.Types.ObjectId(id) } } }).exec().then(() => {
    orderModel.update({ column: columnDestination }, {
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
  });

};

export default differentColumn;