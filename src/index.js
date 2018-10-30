import 'dotenv/config';

import '@babel/register';

import Server from './server';

new Server().start();