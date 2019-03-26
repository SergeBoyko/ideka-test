import { dataFormatFromPattern } from './dataFormat'

export function setDateToPattern(tweets) {
    const allTweets = tweets.length;
    for (let i = 0; i < allTweets; i++) {
        let changeFormatToPattern = tweets[i].date;
        tweets[i].date = dataFormatFromPattern(changeFormatToPattern);
    }
    return tweets
}