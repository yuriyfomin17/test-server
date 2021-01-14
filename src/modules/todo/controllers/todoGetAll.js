import todoModel from '../todoModel';
import orderModel from '../../todoOrder/orderModel';
import mongoose from 'mongoose'
const todoGetAll = (req, res) => {
  todoModel.find()
    // .populate({ // Feature like JOIN in SQL
    // path: 'members',
    // match: { age: { $gte: 21 } },
    // Explicitly exclude `_id`, see http://bit.ly/2aEfTdB
    // select: 'codewarsId -_id',
    // options: { limit: 5 },
    // })
    .exec()
    .then(doc1 => {
      orderModel.find().select('-__v').exec().then((docs) => {
        if (docs) {

          let result =  []
          result.push(doc1)
          result.push(docs)

          res.status(200).json(result)
        }
      }).catch(err => {
        res.status(500).json(err);
      });
    })
    .catch(err => {
      res.status(500).json(err);
    });

};

export default todoGetAll;