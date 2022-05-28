import dotenv from 'dotenv';

dotenv.config();

import app from '@/app';
import Logger from '@/lib/Logger';

const port = process.env.PORT || 5000;

app.listen(port, () => Logger.info(`🚀 Server is listening on port ${port}!`));
