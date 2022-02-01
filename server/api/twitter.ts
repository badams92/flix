import {Router} from 'express';
import axios from 'axios';
const TwitterRouter = Router();

const {
  BEARER_TOKEN
} = process.env;

TwitterRouter.get('/tweets', (req: any, res: any) => {

    const title = req.query.title;

    const options: any = {
    url: 'https://api.twitter.com/2/tweets/search/recent',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${BEARER_TOKEN}`
      },
    params: {
      query: title + ' Movie'
    }
  };

  axios(options)
    .then(response => {
      res.status(200).json(response.data)
    })
    .catch(err => {
      console.error(err);
      res.status(400).json(err);
    })

});



export default TwitterRouter;