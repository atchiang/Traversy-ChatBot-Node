import OpenAI from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const openai = new OpenAI({ // takes in obj literal with apiKey
  apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
});

export default openai;