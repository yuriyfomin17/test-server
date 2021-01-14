import mongoose from 'mongoose';

const todoSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    description: { type: String, required: false },
    priority: { type: String, required: true },
    shrink: { type: Boolean, required: true },
    column: {
      type: Number,
      required: true,
      default: '',
    },
    index: {
      type: Number,
      required: true,
      default: '',
    },
    done: Boolean,
  },
  { timestamps: {} },
);

export default mongoose.model('Todo', todoSchema);
