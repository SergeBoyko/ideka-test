import { dataFormat } from './dataFormat'

export function getDateFormatUnixTime(tweets) {
    const allTweets = tweets.length;
    for (let i = 0; i < allTweets; i++) {
        let dataFormated = tweets[i].date;


        let regEx = /[0-9]+/
        if (dataFormated.match(regEx)) {
            tweets[i].date = dataFormat(dataFormated);
        }
    }
    return tweets
}