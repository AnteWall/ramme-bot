import Router from 'koa-router';
import {
  getCommandFromText,
  COMMANDS
} from './utils/commandParser';
const router = new Router();

router.get('/api/command', (ctx, next) => {
  console.log(
    ctx.params);
  ctx.body = {
    command: "World"
  }
})

const tmpJoinFunction = (user_id) => {
  return {
    "attachments": [{
      "color": "#36a64f",
      "pretext": `<@${user_id}> has joined this weeks Ramme!`,
      "title": "Current challengers",
      "text": "@ante, @fredrik"
    }]
  }
}

router.post('/api/command', (ctx, next) => {
  const {
    user_name,
    user_id,
    channel_name,
    channel_id,
    team_domain,
    team_id,
    command,
    text
  } = ctx.request.body;

  const executeCommand = getCommandFromText(text);
  switch (executeCommand) {
    case COMMANDS.JOIN:
      ctx.body = tmpJoinFunction(user_id);
      break;
    default:
      ctx.body = {
        "text": `TODO implement code for command: ${executeCommand}`
      }
  }
})

export default router;