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
    const { type, id, data } = req.body;

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
            content: "Hello There 👽",
          },
        });
      }
    }
  }
);

app.listen(PORT, () => {
  console.log(`Bot is running on http://localhost:${PORT}`);
});
