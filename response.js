import { COLOURS } from "./constants.js";

function getFooter() {
  return {
    text: `INCEPTA(x.com/erenArchy_) • Today at 11:57 PM`,
  };
}

export const test_response = (user, randomColor) => {
  return {
    embeds: [
      {
        title: "👽 Test Command Response",
        description: `Hello there <@${user.id}>! This is an embedded message.`,
        color: randomColor,
        fields: [
          {
            name: "Field 1",
            value: "This is some additional info.",
            inline: true,
          },
          {
            name: "Field 2",
            value: "Another field value here.",
            inline: true,
          },
        ],
        footer: getFooter(),
      },
    ],
  };
};

export const api_key_response = () => {
  return {
    embeds: [
      {
        title: "API Key Information",
        description: `**Your current API key:** \`u5X0wwdUQ-mzDEbzhVix7iOtaHavO9\``,
        color: COLOURS.BLUE,
        fields: [
          {
            name: "Manage API key",
            value: "Choose to edit or remove your existing API Key.",
          },
        ],
        footer: getFooter(),
      },
    ],
    components: [
      {
        type: 1,
        components: [
          {
            type: 2,
            label: "➕ Add API key",
            style: 3,
            custom_id: "add_api_key",
          },
          {
            type: 2,
            label: "✏️ Edit API key",
            style: 1,
            custom_id: "edit_api_key",
          },
          {
            type: 2,
            label: "🗑️ Delete API key",
            style: 4,
            custom_id: "delete_api_key",
          },
        ],
      },
    ],
  };
};

export const notification = () => {
  return {
    embeds: [
      {
        title: "Notification Preferences",
        description:
          "Select your notification preferences for raffle tracking. You can choose to receive notifications for:\n\n" +
          "• 🔔 **All (default)**: Get notified for every registered raffle.\n\n" +
          "• ✅ **Success Only**: Only get notified if success register.\n\n" +
          "• ❌ **Failure Only**: Only get notified if failure register.\n\n" +
          "• 🔕 **Off**: Turn off all notifications, registration task will run on the background.\n\n" +
          "• 🌐 **Custom Channel**: Send notifications to custom channels at your server for success registration, failure registration, raffle wins, and whitelist mint reminders.",
        color: COLOURS.BLUE,
        footer: getFooter(),
      },
    ],
    components: [
      {
        type: 1,
        components: [
          {
            type: 2,
            label: "🔔 All",
            style: 1,
            custom_id: "notification_all",
          },
          {
            type: 2,
            label: "✅ Success",
            style: 1,
            custom_id: "notification_success",
          },
          {
            type: 2,
            label: "❌ Failure",
            style: 1,
            custom_id: "notification_failure",
          },
          {
            type: 2,
            label: "🔕 Turn Off",
            style: 1,
            custom_id: "notification_off",
          },
          {
            type: 2,
            label: "🌐 Custom Channel",
            style: 1,
            custom_id: "notification_custom",
          },
        ],
      },
    ],
  };
};

export const speed = () => {
  return {
    embeds: [
      {
        title: "Speed Preferences",
        description:
          "Select your preferred raffle registration speed. \n\n" +
          "• 🕐 **Super Slow**: Slowest speed. \n\n" +
          "• 🕑 **Slow**: Moderate speed, reduces the chance of Twitter re-connect issues. \n\n" +
          "• 🕒 **Normal**: Default speed setting. \n\n" +
          "• 🕓 **Fast**: For users who want quicker registrations. \n\n" +
          "• 🕔 **Super Fast**: Maximum speed, ideal for catching pending registrations but increases the risk of frequent Twitter re-connects. \n\n",

        color: COLOURS.BLUE,
        fields: [
          {
            name: "",
            value:
              "Speed will auto increase or decrease if there raffle ending soon or not to make sure all raffles registered",
          },
        ],
        footer: getFooter(),
      },
    ],
    components: [
      {
        type: 1,
        components: [
          {
            type: 2,
            label: "Super Slow",
            style: 1,
            custom_id: "speed_ss",
          },
          {
            type: 2,
            label: "Slow",
            style: 1,
            custom_id: "speed_s",
          },
          {
            type: 2,
            label: "Normal",
            style: 1,
            custom_id: "speed_n",
          },
          {
            type: 2,
            label: "Fast",
            style: 1,
            custom_id: "speed_f",
          },
          {
            type: 2,
            label: "Super Fast",
            style: 1,
            custom_id: "speed_sf",
          },
        ],
      },
    ],
  };
};

export const retry_preference = () => {
  return {
    embeds: [
      {
        title: "Retry Preferences",
        description:
          "Enable or disable automatic retry attempts for failed raffle registrations. (default is disable)",
        color: COLOURS.BLUE,
        footer: getFooter(),
      },
    ],
    components: [
      {
        type: 1,
        components: [
          { type: 2, label: "Enable", style: 3, custom_id: "retry_enable" },
          { type: 2, label: "Disable", style: 4, custom_id: "retry_disable" },
        ],
      },
    ],
  };
};

export const pause_raffle = () => {
  return {
    embeds: [
      {
        title: "Pause/Resume Raffle Registration Tasks",
        description:
          "Use the buttons below to pause or resume your raffle registration tasks.",
        color: COLOURS.BLUE,
        footer: getFooter(),
      },
    ],
    components: [
      {
        type: 1,
        components: [
          { type: 2, label: "Pause", style: 4, custom_id: "pause_pause" },
          { type: 2, label: "Resume", style: 3, custom_id: "pause_resume" },
        ],
      },
    ],
  };
};

export const webhook = () => {
  return {
    embeds: [
      {
        title: "Webhook Activation for Track Your Raffle Wins",
        description:
          "To enable tracking of your raffle wins, add the following webhook URL on the Alphabot Developer Page:",
        color: COLOURS.BLUE,
        fields: [
          {
            name: "Webhook URL",
            value:
              "```\nhttps://webhook.blanklabs.app/webhook?api_key=u5X0wdisuhdsjhdscdskjhdsiuHavO9\n```",
          },
          {
            name: "Instructions",
            value:
              "1. Go to the [Alphabot Developer Page](https://www.alphabot.app/raffles#profile-developer).\n" +
              "2. Locate the Webhook settings section.\n" +
              "3. Paste the provided Webhook URL into the Webhook URL field.\n" +
              "4. Save the changes and test the webhook.\n\n" +
              "**Once active, use** ``/raffle_wins`` **to track your raffle wins!**",
          },
        ],
        footer: getFooter(),
      },
    ],
  };
};
