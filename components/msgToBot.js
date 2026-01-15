import axios from "axios";
const botToken = process.env.NEXT_PUBLIC_BOT_TOKEN;
const chatId = process.env.NEXT_PUBLIC_CHATID;

const sendMessageToTelegram = async (message) => {
  try {
    const response = await axios.post(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        chat_id: chatId,
        text: message,
      }
    );
    console.log("Message sent:", response.data);
  } catch (error) {
    console.error("Error sending message:", error);
  }
};

export default sendMessageToTelegram;
