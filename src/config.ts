import dotenv from "dotenv";
import Twit from "twit";
dotenv.config();

const config: Twit.Options = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
} as Twit.Options;

export default config;
