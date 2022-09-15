import { MongoClient, Collection, Document } from 'mongodb';

let tweets: Collection<Document>;

class TweetsDAO {
  static inject = async (conn: MongoClient): Promise<void> => {
    if (tweets) {
      return;
    } else {
      const ns: string = process.env.MONGODB_NS;
      const collection: string = process.env.MONGODB_COLLECTION;
      try {
        tweets = await conn.db(ns).collection(collection);
        console.log(`[TweetsDAO]: Connected to ${ns}:${collection}`);
      } catch (e: any) {
        console.error(
          `[TweetsDAO]: Failed to connect to ${ns}:${collection}. ${e}`
        );
      }
    }
  };
}

export default TweetsDAO;
