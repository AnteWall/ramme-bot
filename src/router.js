import Router from 'koa-router';
import {
  getCommandFromText
} from './utils/commandParser';
const router = new Router();

router.get('/api/command', (ctx, next) => {
  console.log(
    ctx.params);
  ctx.body = {
    command: "World"
  }
})

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
  if (executeCommand) {
    ctx.body = {
      "text": `TODO implement code for command: ${executeCommand}`
    }
  } else {
    ctx.body = {
      "text": "Could not parse command.",
      "attachments": [{
        "text": "More info as an attachement"
      }]
    }
  }

})

export default router;