import mongoose from 'mongoose';

const todoSchema = mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        name: {type: String, required: true},
        description: {type: String, required: false},
        urgent: {type: String, required: false},
        done: {type: Boolean, required: true},
        shrink: {type: Boolean, required: true},
    },
    {timestamps: {}},
);

export default mongoose.model('Todo', todoSchema);
