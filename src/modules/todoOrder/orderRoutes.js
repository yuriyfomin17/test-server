import { Router } from 'express';
import columnCreate from './controllers/columnCreate';
import sameColumn from './controllers/sameColumn';
import differentColumn from './controllers/differentColumn';

const router = Router();

router.post('/create', columnCreate);
router.patch('/sameColumn', sameColumn);
router.patch('/differentColumn', differentColumn);
export default router;