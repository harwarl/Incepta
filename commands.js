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

const CALENDER_COMMAND = {
  name: COMMANDS.CALENDER,
  type: 1,
  description: "View upcoming mint projects",
  integration_types: [0, 1],
  contexts: [1, 2],
};

const STATUS_COMMAND = {
  name: COMMANDS.STATUS,
  type: 1,
  description: "Check subscription and raffle overview",
  integration_types: [0, 1],
  contexts: [1, 2],
};

const REPORT_COMMAND = {
  name: COMMANDS.REPORT,
  type: 1,
  description: "View raffle registration report",
  integration_types: [0, 1],
  contexts: [1, 2],
};

const API_KEY_COMMAND = {
  name: COMMANDS.API_KEY,
  type: 1,
  description: "Manage your api key (check, set or remove)",
  integration_types: [0, 1],
  contexts: [1, 2],
};

const RAFFLE_WINS_COMMAND = {
  name: COMMANDS.RAFFLE_WINS,
  type: 1,
  description: "Check your recent raffle wins",
  integration_types: [0, 1],
  contexts: [1, 2],
};

const PENDING_COMMAND = {
  name: COMMANDS.PENDING,
  type: 1,
  description: "Check your recent raffle registration",
  integration_types: [0, 1],
  contexts: [1, 2],
};

const TRENDING_COMMAND = {
  name: COMMANDS.TRENDING,
  type: 1,
  description: "Check trending projects",
  integration_types: [0, 1],
  contexts: [1, 2],
};

const WEBHOOK_COMMAND = {
  name: COMMANDS.WEBHOOK,
  type: 1,
  description: "Activate your webhook for tracking raffle wins",
  integration_types: [0, 1],
  contexts: [1, 2],
};

const WHITELIST_LIST_COMMAND = {
  name: COMMANDS.WHITELIST_LIST,
  type: 1,
  description: "View or remove all your whitelisted projects and communities",
  integration_types: [0, 1],
  contexts: [1, 2],
};

const WHITELIST_COMMAND = {
  name: COMMANDS.WHITELIST,
  type: 1,
  description: "Manage your raffle whitelist (project or communities)",
  integration_types: [0, 1],
  contexts: [1, 2],
};

const BLACKLIST_LIST_COMMAND = {
  name: COMMANDS.BLACKLIST_LIST,
  type: 1,
  description: "View or remove all your blacklisted projects and communities",
  integration_types: [0, 1],
  contexts: [1, 2],
};

const BLACKLIST_COMMAND = {
  name: COMMANDS.BLACKLIST,
  type: 1,
  description: "Manage your raffle blacklist (project or communities)",
  integration_types: [0, 1],
  contexts: [1, 2],
};

const ALL_COMMANDS = [
  TEST_COMMAND,
  SETUP_COMMAND,
  CALENDER_COMMAND,
  STATUS_COMMAND,
  REPORT_COMMAND,
  API_KEY_COMMAND,
  RAFFLE_WINS_COMMAND,
  PENDING_COMMAND,
  TRENDING_COMMAND,
  WEBHOOK_COMMAND,
  WHITELIST_COMMAND,
  WHITELIST_LIST_COMMAND,
  BLACKLIST_COMMAND,
  BLACKLIST_LIST_COMMAND,
];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);
