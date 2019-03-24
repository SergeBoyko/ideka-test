export function sortByDate(tweets) {
    const allTweets = tweets.length;
    for (let i = 0; i < allTweets; i++) {
        tweets.sort(
            (d1, d2) => new Date(d2.date) - new Date(d1.date)
        )
    }
    return tweets
}