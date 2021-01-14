import todoModel from '../todoModel';

export default async function todoUpdateById(req, res) {
  const id = req.body.id;
  const name = req.body.name;
  const done = req.body.done;
  const shrink = req.body.shrink;
  const priority = req.body.priority;
  const description = req.body.description;

  todoModel.update({ _id: id }, {
    $set: {
      name: name,
      description: description,
      done: done,
      shrink: shrink,
      priority: priority,

    },
  })
    .exec()
    .then(doc => {
      if (doc.n) {
        res.status(200).json('Todo updated');
      } else {
        res.status(400).json('Todo not found');
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
}
