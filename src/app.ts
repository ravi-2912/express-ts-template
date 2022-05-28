import cors from 'cors';
import helmet from 'helmet';
import express, { Application } from 'express';

import morganLogger from '@/middleware/morganLogger';
import routes from '@/routes';

const app: Application = express();

app.use(cors());
app.use(helmet());
app.use(morganLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

export default app;
