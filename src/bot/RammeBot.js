import fetch from 'node-fetch';

export const SendJoinedMessage = async (response_url, user_id) => {
  fetch(response_url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "response_type": "in_channel",
        "attachments": [{
          "color": "#36a64f",
          "pretext": `<@${user_id}> has joined this weeks Ramme!`,
          "title": "Current challengers",
          "text": `<@${user_id}>`
        }]
      })
    })
    .catch((err) => console.error(err))
}