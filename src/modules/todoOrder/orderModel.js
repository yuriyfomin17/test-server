import mongoose from 'mongoose';

const todoSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    column: { type: String, required: true },
    order: { type: Array, required: true },
  },
  { timestamps: {} },
);

export default mongoose.model('Order', todoSchema);