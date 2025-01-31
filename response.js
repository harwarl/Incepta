import { COLOURS } from "./constants.js";

function getFooter() {
  return {
    text: `INCEPTA(x.com/erenArchy_) • Today at 11:57 PM`,
  };
}

/*------------------------------ TEST RESPONSE ------------------------------*/
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

/*------------------------------SETUP API KEY RESPONSE ------------------------------*/
export const api_key_response = (user) => {
  return {
    embeds: [
      {
        title: "API Key Information",
        description: user?.api_key
          ? `**Your current API key:** \`${user.api_key}\``
          : "You don't have an API key set yet.",
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
            disabled: !!user?.api_key,
          },
          {
            type: 2,
            label: "✏️ Edit API key",
            style: 1,
            custom_id: "edit_api_key",
            disabled: !user?.api_key,
          },
          {
            type: 2,
            label: "🗑️ Delete API key",
            style: 4,
            custom_id: "delete_api_key",
            disabled: !user?.api_key,
          },
        ],
      },
    ],
  };
};

export const APICommandResponseMessage = (responseMessage) => {
  return {
    embeds: [
      {
        title: "",
        description: responseMessage,
        color: COLOURS.BLUE,
      },
    ],
  };
};

/*------------------------------ NOTIFICATION RESPONSE ------------------------------*/
export const notification = (user) => {
  return {
    embeds: [
      {
        title: "Notification Preferences",
        description:
          "Select your notification preferences for raffle tracking. You can choose to receive notifications for:\n\n" +
          "• 🔔 **All (default)**: Get notified for every registered raffle.\n\n" +
          "• ✅ **Success Only**: Only get notified if success register.\n\n" +
          "• ❌ **Failure Only**: Only get notified if failure register.\n\n" +
          "• 🔕 **Off**: Turn off all notifications, registration task will run on the background.\n\n",
        //   "• 🌐 **Custom Channel**: Send notifications to custom channels at your server for success registration, failure registration, raffle wins, and whitelist mint reminders.",
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
            disabled: user?.notification === 3,
          },
          {
            type: 2,
            label: "✅ Success",
            style: 1,
            custom_id: "notification_success",
            disabled: user?.notification === 1,
          },
          {
            type: 2,
            label: "❌ Failure",
            style: 1,
            custom_id: "notification_failure",
            disabled: user?.notification === 2,
          },
          {
            type: 2,
            label: "🔕 Turn Off",
            style: 1,
            custom_id: "notification_off",
            disabled: user?.notification === 0,
          },
          //   {
          //     type: 2,
          //     label: "🌐 Custom Channel",
          //     style: 1,
          //     custom_id: "notification_custom",
          //   },
        ],
      },
    ],
  };
};

/*------------------------------ SPEED PREFERENCE RESPONSE ------------------------------*/
export const speed = (user) => {
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
            disabled: user?.registrationSpeed === 0,
          },
          {
            type: 2,
            label: "Slow",
            style: 1,
            custom_id: "speed_s",
            disabled: user?.registrationSpeed === 1,
          },
          {
            type: 2,
            label: "Normal",
            style: 1,
            custom_id: "speed_n",
            disabled: user?.registrationSpeed === 2,
          },
          {
            type: 2,
            label: "Fast",
            style: 1,
            custom_id: "speed_f",
            disabled: user?.registrationSpeed === 3,
          },
          {
            type: 2,
            label: "Super Fast",
            style: 1,
            custom_id: "speed_sf",
            disabled: user?.registrationSpeed === 4,
          },
        ],
      },
    ],
  };
};

/*------------------------------ RETRY PREFERENCES ------------------------------*/
export const retry_preference = (user) => {
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
          {
            type: 2,
            label: "Enable",
            style: 3,
            custom_id: "retry_enable",
            disabled: user?.retry,
          },
          {
            type: 2,
            label: "Disable",
            style: 4,
            custom_id: "retry_disable",
            disabled: !user?.retry,
          },
        ],
      },
    ],
  };
};

/*------------------------------ PAUSE RAFFLE ------------------------------*/
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
          {
            type: 2,
            label: "Pause",
            style: 4,
            custom_id: "pause_pause",
            disabled: user?.rafflePause === 0,
          },
          {
            type: 2,
            label: "Resume",
            style: 3,
            custom_id: "pause_resume",
            disabled: user?.rafflePause === 1,
          },
        ],
      },
    ],
  };
};

/*------------------------------ WEBHOOK RESPONSE ------------------------------*/
export const webhook = (user) => {
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
            value: user?.api_key
              ? `\`\`\`\nhttps://webhook.blanklabs.app/webhook?api_key=${encodeURIComponent(
                  user.api_key
                )}\n\`\`\``
              : "You have to set an API key to see your webhook.",
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
