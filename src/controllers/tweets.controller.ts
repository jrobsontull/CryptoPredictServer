import { Request, Response } from 'express';

class TweetsController {
  static apiGetTweets = async (
    req: Request,
    res: Response,
    next: Function
  ): Promise<void> => {
    res.json({ status: 'success' });
  };
}

export default TweetsController;
