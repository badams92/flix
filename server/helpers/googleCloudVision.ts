import {ImageAnnotatorClient} from '@google-cloud/vision';

const client = new ImageAnnotatorClient();

export const detectText = async (file: string) => {
  const [result] = await client.textDetection(file);
  return result.textAnnotations;
};
