import orderModel from '../orderModel';
import mongoose from 'mongoose';
export default async function columnCreate(req, res) {
  const _id = new mongoose.Types.ObjectId();

  const column = new orderModel({
    _id,
    column: req.body.column,
    order: [],
  });

  column
    .save()
    .then(() => {
      res.status(201).json(`Column with id:${_id} is created`);
    })
    .catch(err => {
      res.status(500).json(err);
    });
}
