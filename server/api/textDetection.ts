import { Router } from 'express';
import type { Request, Response } from 'express';
import multer from 'multer';
import {detectText} from '../helpers/googleCloudVision';

const detectTextRouter = Router();
const upload = multer({});
detectTextRouter.post('/', upload.single('image'), (req: Request, res: Response) => {
  // console.log(req.file!.buffer.toString('base64'));
  detectText(req.file!.buffer.toString('base64'))
    .then((data: any) => {
      console.log(data);
      res.status(200).send(data);
    })
    .catch((err: any) => {
      console.log('error trying to detect text');
      console.error(err);
    });
});

export default detectTextRouter;
