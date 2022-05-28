import { Router } from 'express';

import helloWorld from '@/routes/helloworld';

const router = Router();

router.route('/').get(helloWorld);

export default router;
