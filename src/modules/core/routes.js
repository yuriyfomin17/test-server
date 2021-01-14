import todoRouter from '../todo/todoRoutes';
import infoRouter from '../info/infoRoutes';
import orderRouter from '../todoOrder/orderRoutes';

export default function routes(app) {
  app.use('/todo', todoRouter);
  app.use('/info', infoRouter);
  app.use('/order', orderRouter);
}
