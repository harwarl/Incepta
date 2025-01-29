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
  "last 24 hours": "24 h",
  "last 7 days": "7 d",
  "All Time": "all",
};

export const sort_byChoices = {
  "latest win": "latest",
  "minting soon": "soon",
};

export const api_keyChoices = {
  "set api key": "set",
  remove: "remove",
};

export const whiteListActions = {
  "add to Whitelist": "add",
  "remove to Whitelist": "remove",
};

export const blackListActions = {
  "add to Blacklist": "add",
  "remove to Blacklist": "remove",
};

export const trendingTimeFilter = {
  "1 week": "",
  "2 week": "",
  "1 month": "",
};

export const trendingStatus = {
  "active Raffles": "active",
  all: "all",
};

export const pendingTimeFilter = {
  "ending in 1 hour": "1 hr",
  "ending in 1 day": "1 day",
  all: "all",
};

export const pendingSortBy = {
  newest: "newest",
  "end soon": "soon",
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
