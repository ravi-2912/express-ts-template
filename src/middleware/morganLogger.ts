import morgan, { StreamOptions } from 'morgan';

import Logger from '@/lib/Logger';

// Override the stream method by telling
// Morgan to use our custom logger instead of the console.log.
const stream: StreamOptions = {
    // Use the http severity
    write: (message) => Logger.http(message),
};

// Skip all the Morgan http log if the
// application is not running in development mode.
// This method is not really needed here since
// we already told to the logger that it should print
// only warning and error messages in production.
const skip = () => {
    // Use this in production const env = process.env.NODE_ENV || 'development';
    // Use this in production return env !== 'development';
    return true;
};

// Build the morgan middleware
const morganLogger = morgan(
    // Define message format string (this is the default one).
    // The message format is made from tokens, and each token is
    // defined inside the Morgan library.
    // You can create your custom token to show what do you want from a request.
    ':method :url :status - :response-time ms - :res[content-length]',
    // Options: in this case, I overwrote the stream and the skip logic.
    // See the methods above.
    { stream, skip }
);

export default morganLogger;
