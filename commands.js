import { COMMANDS } from "./constants.js";
import { InstallGlobalCommands } from "./utils.js";
import {
  // api_keyChoices,
  blackListActions,
  createCommandChoices,
  date_filterChoices,
  pendingSortBy,
  pendingTimeFilter,
  removeAll,
  setUpChoices,
  sort_byChoices,
  trendingStatus,
  trendingTimeFilter,
  whiteListActions,
} from "./choices.js";

const setupCommandChoices = createCommandChoices(setUpChoices);
const dateFilterCHoices = createCommandChoices(date_filterChoices);
const sortByChoices = createCommandChoices(sort_byChoices);
// const setApiKeyChoices = createCommandChoices(api_keyChoices);
const whiteListChoices = createCommandChoices(whiteListActions);
const blackListChoices = createCommandChoices(blackListActions);
const trendingTimeChoices = createCommandChoices(trendingTimeFilter);
const trendingStatusChoices = createCommandChoices(trendingStatus);
const pendingTimeChoices = createCommandChoices(pendingTimeFilter);
const pendingSort = createCommandChoices(pendingSortBy);
const removeALL = createCommandChoices(removeAll);

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
  // choices: setApiKeyChoices,
  options: [
    {
      type: 3,
      name: "set_api_key",
      description: "...",
      required: false,
    },
    {
      type: 3,
      name: "remove",
      description: "...",
      required: false,
    },
  ],
  integration_types: [0, 1],
  contexts: [1, 2],
};

const RAFFLE_WINS_COMMAND = {
  name: COMMANDS.RAFFLE_WINS,
  type: 1,
  description: "Check your recent raffle wins",
  options: [
    {
      type: 3,
      name: "date_filter",
      description: "Select the time frame for filtering wins",
      required: true,
      choices: dateFilterCHoices,
    },
    {
      type: 3,
      name: "sort_by",
      required: true,
      description: "...",
      choices: sortByChoices,
    },
  ],
  integration_types: [0, 1],
  contexts: [1, 2],
};

const PENDING_COMMAND = {
  name: COMMANDS.PENDING,
  type: 1,
  description: "Check your recent raffle registration",
  options: [
    {
      type: 3,
      name: "time_filter",
      description: "Select the time frame for filtering raffles",
      required: true,
      choices: pendingTimeChoices,
    },
    {
      type: 3,
      name: "sort_by",
      required: true,
      description: "...",
      choices: pendingSort,
    },
  ],
  integration_types: [0, 1],
  contexts: [1, 2],
};

const TRENDING_COMMAND = {
  name: COMMANDS.TRENDING,
  type: 1,
  description: "Check trending projects",
  options: [
    {
      type: 3,
      name: "time_filter",
      description: "Select the time frame for trending projects",
      required: true,
      choices: trendingTimeChoices,
    },
    {
      type: 3,
      name: "status",
      description: "choose whether to show only active raffles or all raffles",
      required: true,
      choices: trendingStatusChoices,
    },
  ],
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
  options: [
    {
      type: 3,
      name: "remove_all",
      description:
        "Set to True to remove all whitelisted projects and communities",
      required: false,
      choices: removeALL,
    },
  ],
  integration_types: [0, 1],
  contexts: [1, 2],
};

const WHITELIST_COMMAND = {
  name: COMMANDS.WHITELIST,
  type: 1,
  description: "Manage your raffle whitelist (project or communities)",
  options: [
    {
      name: "item",
      type: 3,
      description: "List of twitter handles",
      required: true,
    },
    {
      name: "action",
      type: 3,
      description: "Add or remove project(s) or communities from the whitelist",
      required: true,
      choices: whiteListChoices,
    },
  ],
  integration_types: [0, 1],
  contexts: [1, 2],
};

const BLACKLIST_LIST_COMMAND = {
  name: COMMANDS.BLACKLIST_LIST,
  type: 1,
  description: "View or remove all your blacklisted projects and communities",
  options: [
    {
      name: "remove_all",
      description:
        "set to true to remove all blacklisted projects and communities",
      type: 3,
      required: false,
      choices: removeALL,
    },
  ],
  integration_types: [0, 1],
  contexts: [1, 2],
};

const BLACKLIST_COMMAND = {
  name: COMMANDS.BLACKLIST,
  type: 1,
  description: "Manage your raffle blacklist (project or communities)",
  options: [
    {
      name: "item",
      type: 3,
      description: "List of twitter handles",
      required: true,
    },
    {
      name: "action",
      type: 3,
      description: "Add or remove project(s) or communities from the whitelist",
      required: true,
      choices: blackListChoices,
    },
  ],
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
