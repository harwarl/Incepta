import express from "express";
import dotenv from "dotenv";
import {
  InteractionResponseType,
  InteractionType,
  verifyKeyMiddleware,
} from "discord-interactions";
import { COLOURS, COMMANDS } from "./constants.js";
import {
  api_key_response,
  APICommandResponseMessage,
  notification,
  pause_raffle,
  retry_preference,
  speed,
  test_response,
  webhook,
} from "./response.js";
import db from "./db/conn.js";

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
    const db_preferences = db.collection("user_preferences");

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
        let existing_user = await db_preferences.findOne({
          userId: userId,
        });

        if (!existing_user) {
          let insertDetails = await db_preferences.insertOne({
            userId,
            createdAt: new Date(),
            notification: 3,
            registrationSpeed: 2,
            rafflePause: 1,
            retry: false,
          });

          existing_user = await db_preferences.findOne({
            userId: insertDetails.insertedId,
          });
        }

        const objectName = data.options[0].value;

        /*------------------------------ API KEY ------------------------------*/
        if (objectName.includes("api_key")) {
          return res.send({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: api_key_response(existing_user),
          });
        }

        /*------------------------------ NOTIFICATION ------------------------------*/
        if (objectName.includes("notification")) {
          return res.send({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: notification(existing_user),
          });
        }

        /*------------------------------ SPEED ------------------------------*/
        if (objectName.includes("speed")) {
          return res.send({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: speed(existing_user),
          });
        }

        /*------------------------------ RETRY ------------------------------*/
        if (objectName.includes("retry")) {
          return res.send({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: retry_preference(existing_user),
          });
        }

        /*------------------------------ PAUSE ------------------------------*/
        if (objectName.includes("pause")) {
          return res.send({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: pause_raffle(existing_user),
          });
        }

        /*------------------------------ WEBHOOK ------------------------------*/
        if (objectName.includes("webhook")) {
          return res.send({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: webhook(existing_user),
          });
        }
      }

      if (name === COMMANDS.API_KEY && id) {
        const userId = context === 0 ? req.body.member.user.id : user.id;
        const options = data.options[0];

        const existing_user = await db_preferences.findOne({ userId });

        let responseMessage = "Invalid Command";

        if (options.name.includes("set") && options.value && existing_user) {
          await db_preferences.updateOne(
            { _id: existing_user._id },
            { $set: { api_key: options.value } }
          );

          responseMessage = "✅ Your API key has been set successfully.";
        }

        if (options.name.includes("remove") && options.value && existing_user) {
          await db_preferences.updateOne(
            { _id: existing_user._id },
            { $set: { api_key: "" } }
          );
          responseMessage = "🗑️ Your API key has been removed.";
        }

        return res.send({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: APICommandResponseMessage(responseMessage),
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

      // if (name === COMMANDS.CALENDER && id) {
      //   return res.send({
      //     type: InteractionResponseType.PONG,
      //   });
      // }

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
        const userId = context === 0 ? req.body.member.user.id : user.id;
        const existing_user = await db_preferences.findOne({ userId });

        return res.send({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: webhook(existing_user),
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
  // const { api_key } = req.query;
  // Always respond 200
  res.status(200).send(undefined);
});

app.listen(PORT, () => {
  console.log(`Bot is running on http://localhost:${PORT}`);
});
