import 'reflect-metadata';
import { config } from 'dotenv';
config();

import server from './server';

const port = process.env.PORT;

server.listen(port, () => {
  console.log('\n----------------------');
  console.log(`URL:             http://localhost:${port}`);
  console.log('ENVIRONMENT:    ', process.env.NODE_ENV);
  console.log('SERVER VERSION:  2.0.0');
  console.log('----------------------\n');
});
