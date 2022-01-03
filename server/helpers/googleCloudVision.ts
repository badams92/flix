import {ImageAnnotatorClient} from '@google-cloud/vision';
import fs from 'fs';
import imageToBase64 from 'image-to-base64';

const client = new ImageAnnotatorClient();

const detectText = async (file: string) => {
  // const bitmap = await imageToBase64(file);
  // const encoded = Buffer.from(bitmap).toString('base64');
  const [result] = await client.textDetection(file);
  return result.textAnnotations;
};

export default {detectText};
