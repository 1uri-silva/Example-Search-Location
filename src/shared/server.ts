import 'reflect-metadata'
import express from 'express'

import routes from './infra/http/router';
import './infra/typeorm'

export const app = express();

app.use(express.json());
app.use(routes)
app.listen(3333, () => console.log('is running'))