import { Router } from 'express';

import HomeController from '@controllers/Home';

const router = Router();

router.get('/', HomeController.index);

router.get('/echo', HomeController.test);

export default router;