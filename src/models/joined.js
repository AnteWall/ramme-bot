import mongoose from 'mongoose';
import {
  SendJoinedMessage
} from '../bot/RammeBot';

export const Joined = mongoose.model('Joined', {
  date: {
    type: Date,
    default: Date.now
  },
  user_id: String,
  team_id: String
});


export const createNewUserJoin = async (user_id, team_id, response_url) => {
  try {
    const joinedEntry = await Joined.create({
      user_id,
      team_id
    });
    SendJoinedMessage(response_url, user_id)
    return null;
  } catch (error) {
    return "Failed to join this week ramme";
  }
}