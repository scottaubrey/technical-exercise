import request from 'supertest';
import { createApp } from './app';

describe('/hello', () => {
  it('says Hello', async () => {
    await request(createApp())
      .get('/hello')
      .expect('Hello, Dave');
  });
});
