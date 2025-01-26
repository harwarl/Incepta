import { InstallGlobalCommands } from "./utils.js";

//Basic Test Command
const TEST_COMMAND = {
  name: "test",
  type: 1,
  description: "Basic Command",
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};

const ALL_COMMANDS = [TEST_COMMAND];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);
