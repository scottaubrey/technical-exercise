import express from 'express';

export const createApp = () => {
  const app = express();

  app.get('/hello', async (req, res, next) => {
    res.send(`Hello, Dave`);
  });

  return app;
}
