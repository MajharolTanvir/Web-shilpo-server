import express, { Application } from 'express';
const app: Application = express();
import cors from 'cors';
import routes from './routes/routes';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import sendResponse from './Shared/sendResponse';
import httpStatus from 'http-status';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Working Routes
app.use('/api/v1/', routes);

// Initial routes
app.get('/', (req, res) => {
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Server is successfully working',
  });
});

app.use(globalErrorHandler);
export default app;
