import Router from 'koa-router';
import {
  getCommandFromText,
  COMMANDS
} from './utils/commandParser';
import {
  createNewUserJoin
} from './models/joined';
const router = new Router();

router.get('/api/command', (ctx, next) => {
  console.log(
    ctx.params);
  ctx.body = {
    command: "World"
  }
});

router.post('/api/command', (ctx, next) => {
  const {
    user_name,
    user_id,
    channel_name,
    channel_id,
    team_domain,
    team_id,
    command,
    text,
    response_url
  } = ctx.request.body;

  const executeCommand = getCommandFromText(text);
  switch (executeCommand) {
    case COMMANDS.JOIN:
      ctx.body = {
        text: createNewUserJoin(user_id, team_id, response_url)
      }
      break;
    default:
      ctx.body = {
        "text": `TODO implement code for command: ${executeCommand}`
      }
  }
})

export default router;