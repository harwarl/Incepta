const setUpChoices = {
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

export function getSetUpChoices() {
  return Object.keys(setUpChoices);
}

export function createCommandChoices(choices) {
  const commandChoices = [];

  for (let choice of choices) {
    commandChoices.push({
      name: choice,
      value: choice.toLowerCase(),
    });
  }

  return commandChoices;
}
