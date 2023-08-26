const openai = require('../config/chatgpt');

// Function to get the Response from ChatGPT
const getPrompt = async (req, res) => {
    try {
    const { prompt } = req.body;
  
      if (!prompt || !prompt.length) {
        throw new Error("Uh oh, no prompt was provided");
      }
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt,
      });

      const completion = response.data.choices[0].text;
      // return the result
      return res.status(200).json({
        success: true,
        message: completion
      });
    } catch (error) {
      console.log(error.message);
      return res.status(400).json({
        success: false,
        message: error.message
      });
    }
};

module.exports = {
    getPrompt
};