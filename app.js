import express from "express";
import dotenv from "dotenv";
import {
  InteractionResponseType,
  InteractionType,
  verifyKeyMiddleware,
} from "discord-interactions";
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
    const { type, id, data, user } = req.body;

    if (type === InteractionType.PING) {
      return res.send({ type: InteractionResponseType.PONG });
    }

    if (type === InteractionType.APPLICATION_COMMAND) {
      const { name } = data;

      //Test Command
      if (name === "test") {
        return res.send({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {
            content: `Hello There <@${user.id}> 👽`,
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
  console.log({ api_key });
  return res.send({ api_key });
});

app.listen(PORT, () => {
  console.log(`Bot is running on http://localhost:${PORT}`);
});
