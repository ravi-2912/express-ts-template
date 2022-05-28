import path from 'path';
import dotenv from 'dotenv';

const NODE_ENV = process.env.NODE_ENV;

dotenv.config({ path: path.join(__dirname + '\\..\\', NODE_ENV === 'production' ? '.env' : '.env.dev') });

import app from '@/app';
import Logger from '@/lib/Logger';

const port = process.env.PORT || 5000;

app.listen(port, () => Logger.info(`🚀 Server is listening on port ${port}!`));
