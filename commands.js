import { COMMANDS } from "./constants.js";
import { InstallGlobalCommands } from "./utils.js";
import { createCommandChoices, getSetUpChoices } from "./choices.js";

const setupCommandChoices = createCommandChoices(getSetUpChoices());

//Basic Test Command
const TEST_COMMAND = {
  name: COMMANDS.TEST,
  type: 1,
  description: "Basic Command",
  integration_types: [0, 1],
  contexts: [1, 2],
};

const SETUP_COMMAND = {
  name: COMMANDS.SETUP,
  type: 1,
  description:
    "Customize your notification settings, raffle registration speed, and retry options.",
  integration_types: [0, 1],
  contexts: [1, 2],
  options: [
    {
      type: 3,
      name: "action",
      description: "select an action",
      required: true,
      choices: setupCommandChoices,
    },
  ],
};

const ALL_COMMANDS = [TEST_COMMAND, SETUP_COMMAND];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);
