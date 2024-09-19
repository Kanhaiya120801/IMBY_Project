const asyncHandler = require("express-async-handler");
const OpenAI = require('openai');
// Initialize OpenAI API
require('dotenv').config(); // Load environment variables from .env
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,  // Store your API key securely
});

const accessChatBot = asyncHandler(async (req, res) => {
    console.log("We are reaching",req.body);
   try {
    const { message } = req.body;
    
    const response = await openai.chat.completions.create({
      messages: [{ role: 'user', content: message }],
      model: 'gpt-3.5-turbo',   // Choose the model you want to use
    });
    console.log("Data us",response);
    res.json({ response: response.choices[0].message.content });
  } catch (error) {
    console.log("erorr",error);
    console.error(error);
    res.status(500).send('Error communicating with the chatbot');
  }
});

module.exports = {
  accessChatBot
};
