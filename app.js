import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import {
  InteractionResponseType,
  InteractionType,
  verifyKeyMiddleware,
} from "discord-interactions";
dotenv.config();

const PORT = process.env.PORT || 5050;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/tests", async (req, res) => {
  res.send({ message: "E work now" });
});

app.post(
  "/interactions",
  verifyKeyMiddleware(process.env.PUBLIC_KEY),
  async (req, res) => {
    const { type } = req.body;

    if (type === InteractionType.PING) {
      return res.send({ type: InteractionResponseType.PONG });
    }
  }
);

app.listen(PORT, () => {
  console.log(`Bot is running on http://localhost:${PORT}`);
});
