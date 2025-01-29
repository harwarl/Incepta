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

    if (type === InteractionType.PING) {
      return res.send({ type: InteractionResponseType.PONG });
    }

    if (type === InteractionType.APPLICATION_COMMAND) {
      const { name } = data;

      //Test Command
      if (name === COMMANDS.TEST) {
        return res.send({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {
            content: `Hello There <@${user.id}> 👽`,
          },
        });
      }

      if (name === COMMANDS.SETUP && id) {
        const userId = context == 0 ? req.body.member.user.id : user.id;

        const objectName = data.options[0].value;

        console.log({ objectName });
        return res.send({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {
            content: `Rock papers scissors challenge from <@${userId}>`,
            components: [
              {
                type: MessageComponentTypes.ACTION_ROW,
                components: [
                  {
                    type: MessageComponentTypes.BUTTON,
                    custom_id: `accept_button_${req.body.id}`,
                    label: "Accept",
                    style: ButtonStyleTypes.PRIMARY,
                  },
                ],
              },
            ],
          },
        });
      }

      //If the command does not exist
      console.error(`unknown command: ${name}`);
      return res.status(400).json({ error: "unknown command" });
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
