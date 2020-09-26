const Koa = require('koa');
const Router = require('koa-router');
const huaban = require('./huaban')

const app = new Koa();
const router = new Router();

// logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// response
router.get('/', async (ctx, next) => {
    ctx.body = await huaban()
});

app
.use(router.routes())
.use(router.allowedMethods());

app.listen(3000);