import { Configuration, OpenAIApi } from "openai";
import readline from "readline";

const dotenv = require('dotenv')

dotenv.config()

dotenv.config()

const configuration = new Configuration({
  oranization: process.env.ORGANIZATION_ID,
  apiKey: process.env.API_KEY
})