import todoModel from '../todoModel';

export default async function todoUpdateById(req, res) {
  const id = req.body.id;
  const name = req.body.name;
  const done = req.body.done;
  const shrink = req.body.shrink;
  const description = req.body.description;
  const urgent = req.body.urgent;

  todoModel.update({ _id: id }, {
    $set: {
      name: name,
      description: description,
      done: done,
      urgent:urgent,
      shrink: shrink,

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
