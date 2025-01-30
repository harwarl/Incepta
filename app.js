import express from "express";
import dotenv from "dotenv";
import {
  InteractionResponseType,
  InteractionType,
  verifyKeyMiddleware,
  MessageComponentTypes,
  ButtonStyleTypes,
} from "discord-interactions";
import { COMMANDS } from "./constants.js";
import {
  api_key_response,
  notification,
  pause_raffle,
  retry_preference,
  speed,
  test_response,
  webhook,
} from "./response.js";
dotenv.config();

const PORT = process.env.PORT || 5050;
const app = express();

app.get("/tests", async (req, res) => {
  res.send({ message: "E work now" });
});

app.post(
  "/interactions",
  verifyKeyMiddleware(process.env.PUBLIC_KEY),
  async (req, res) => {
    const { type, id, data, user, context } = req.body;
    const randomColor = Math.floor(Math.random() * 16777215);

    if (type === InteractionType.PING) {
      return res.send({ type: InteractionResponseType.PONG });
    }

    if (type === InteractionType.APPLICATION_COMMAND) {
      const { name } = data;

      //Test Command
      if (name === COMMANDS.TEST) {
        return res.send({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: test_response(user, randomColor),
        });
      }

      if (name === COMMANDS.SETUP && id) {
        const userId = context == 0 ? req.body.member.user.id : user.id;

        const objectName = data.options[0].value;
        console.log({ data: data.options });

        if (objectName.includes("api_key")) {
          return res.send({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: api_key_response(),
          });
        }

        if (objectName.includes("notification")) {
          return res.send({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: notification(),
          });
        }

        if (objectName.includes("speed")) {
          return res.send({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: speed(),
          });
        }

        if (objectName.includes("retry")) {
          return res.send({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: retry_preference(),
          });
        }

        if (objectName.includes("pause")) {
          return res.send({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: pause_raffle(),
          });
        }

        if (objectName.includes("webhook")) {
          return res.send({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: webhook(),
          });
        }
      }

      if (name === COMMANDS.API_KEY && id) {
        return res.send({
          type: InteractionResponseType.PONG,
        });
      }

      if (name === COMMANDS.BLACKLIST && id) {
        return res.send({
          type: InteractionResponseType.PONG,
        });
      }

      if (name === COMMANDS.BLACKLIST_LIST && id) {
        return res.send({
          type: InteractionResponseType.PONG,
        });
      }

      if (name === COMMANDS.WHITELIST && id) {
        return res.send({
          type: InteractionResponseType.PONG,
        });
      }

      if (name === COMMANDS.WHITELIST_LIST && id) {
        return res.send({
          type: InteractionResponseType.PONG,
        });
      }

      if (name === COMMANDS.CALENDER && id) {
        return res.send({
          type: InteractionResponseType.PONG,
        });
      }

      if (name === COMMANDS.PENDING && id) {
        return res.send({
          type: InteractionResponseType.PONG,
        });
      }

      if (name === COMMANDS.RAFFLE_WINS && id) {
        return res.send({
          type: InteractionResponseType.PONG,
        });
      }

      if (name === COMMANDS.REPORT && id) {
        return res.send({
          type: InteractionResponseType.PONG,
        });
      }

      if (name === COMMANDS.STATUS && id) {
        return res.send({
          type: InteractionResponseType.PONG,
        });
      }

      if (name === COMMANDS.TRENDING && id) {
        return res.send({
          type: InteractionResponseType.PONG,
        });
      }

      if (name === COMMANDS.WEBHOOK && id) {
        return res.send({
          type: InteractionResponseType.PONG,
        });
      }

      //If the command does not exist
      console.error(`unknown command: ${name}`);
      return res.status(400).json({ error: "unknown command" });
    }

    if (type === InteractionType.MESSAGE_COMPONENT) {
    }

    //For Unknown interaction type
    console.error("unknown interaction type", type);
    return res.status(400).json({ error: "unknown interaction type" });
  }
);

app.post("/webhook", async (req, res) => {
  const { api_key } = req.query;
  // Always respond 200
  res.status(200).send(undefined);
});

app.listen(PORT, () => {
  console.log(`Bot is running on http://localhost:${PORT}`);
});
