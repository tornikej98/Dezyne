import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const router = express.Router();

const config = new Configuration({
  apiKey: process.env.OPENAI_APIKEY,
});

const openai = new OpenAIApi(config);
interface CreateImageRequest {
  n: number;
  size: '1024x1024';
  response_format: 'b64_json';
  AIPromt?: any;
}
router.route('/').post(async (req, res) => {
  try {
    const { AIPromt } = req.body;

    const response = await openai.createImage({
      prompt: AIPromt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });

    const image = response.data.data[0].b64_json;

    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    res.status(500).json();
  }
});

export default router;
