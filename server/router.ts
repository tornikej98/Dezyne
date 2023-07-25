import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const router = express.Router();

const config = new Configuration({
  apiKey: process.env.OPENAI_APIKEY,
});

const openai = new OpenAIApi(config);

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'hello world' });
});

router.route('/').post(async (req, res) => {
  try {
    const { promt } = req.body;
    const respone = await openai.createImage({
      prompt: promt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });

    const image = respone.data.data[0].b64_json;

    res.status(200).json({ photo: image });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
});

export default router;
