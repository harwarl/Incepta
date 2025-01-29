export const setUpChoices = {
  "🔑 API_KEY": {
    description: "Alphabot API KEY",
  },

  "🔔 Notification Preferences": {
    description: "Notification Preferences",
  },

  "⚡ Speed Preferences": {
    description: "Speed Preferences",
  },

  "🔄 Retry Preferences": {
    description: "Retry Preferences",
  },

  "⏸️/▶️ Pause/Resume Raffle Registration tasks": {
    description: "Pause/Resume Raffle Registration tasks",
  },

  "🌐 Webhook Activation": {
    description: "Webhook Activation",
  },
};

export const date_filterChoices = {
  "Last 24 hours": "24 h",
  "last 7 days": "7 d",
  "All Time": "all",
};

export const sort_byChoices = {
  "Latest win": "latest",
  "Minting soon": "soon",
};

export const api_keyChoices = {
  "set api key": "set",
  remove: "remove",
};

export const whiteListActions = {
  "Add to Whitelist": "add",
  "Remove to Whitelist": "remove",
};

export const blackListActions = {
  "Add to Blacklist": "add",
  "Remove to Blacklist": "remove",
};

export const trendingTimeFilter = {
  "1 week": "",
  "2 week": "",
  "1 month": "",
};

export const trendingStatus = {
  "Active Raffles": "active",
  All: "all",
};

export const pendingTimeFilter = {
  "Ending in 1 hour": "1 hr",
  "Ending in 1 day": "1 day",
  All: "all",
};

export const pendingSortBy = {
  Newest: "newest",
  "End Soon": "soon",
};

export const removeAll = {
  true: "true",
  false: "false",
};

//Get CHoices keys
export function getChoicesKeys(object) {
  return Object.keys(object);
}

export function createCommandChoices(choicesObj) {
  const choices = getChoicesKeys(choicesObj);
  const commandChoices = [];

  for (let choice of choices) {
    commandChoices.push({
      name: choice,
      value: choice.toLowerCase(),
    });
  }

  return commandChoices;
}
