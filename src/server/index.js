const Koa = require('koa');
const app = new Koa();
import React from 'react';

import { renderToString } from 'react-dom/server';
import Home from '../containers/Home';

const content = renderToString(<Home/>)


app.use(async ctx => {
  ctx.body = `
  <html>
      <head>
          <title>ssr</title>
      </head>
      <body>
          <div id="root"> ${content}</div>
      </body>
  </html>
`;
})

app.listen(3000);