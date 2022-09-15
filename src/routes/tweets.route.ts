import express, { Router } from 'express';
import TweetsController from 'src/controllers/tweets.controller';

const router: Router = express.Router();

router.route('/tweets').get(TweetsController.apiGetTweets);

export default router;
