import { Router } from 'express';

import todoUpdateById from './controllers/todoUpdateById';
import todoDeleteById from './controllers/todoDeleteById';
import todoCreate from './controllers/todoCreate';
import todoGetAll from './controllers/todoGetAll';

const router = Router();
router.post('/create', todoCreate);
router.get('/getAll', todoGetAll);
router.patch('/update', todoUpdateById);
router.delete('/delete', todoDeleteById);

export default router;
