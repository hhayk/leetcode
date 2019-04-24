/*

-- NOT SOLVED

Design a simplified version of Twitter where users can post tweets, follow/unfollow another user and is able to see the 10 most recent tweets in the user's news feed. Your design should support the following methods:

postTweet(userId, tweetId): Compose a new tweet.
getNewsFeed(userId): Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
follow(followerId, followeeId): Follower follows a followee.
unfollow(followerId, followeeId): Follower unfollows a followee.
Example:

Twitter twitter = new Twitter();

// User 1 posts a new tweet (id = 5).
twitter.postTweet(1, 5);

// User 1's news feed should return a list with 1 tweet id -> [5].
twitter.getNewsFeed(1);

// User 1 follows user 2.
twitter.follow(1, 2);

// User 2 posts a new tweet (id = 6).
twitter.postTweet(2, 6);

// User 1's news feed should return a list with 2 tweet ids -> [6, 5].
// Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.
twitter.getNewsFeed(1);

// User 1 unfollows user 2.
twitter.unfollow(1, 2);

// User 1's news feed should return a list with 1 tweet id -> [5],
// since user 1 is no longer following user 2.
twitter.getNewsFeed(1);

*/

Array.prototype.flatMap = function (f) {
    return this.map(f).reduce((x, y) => x.concat(y), []);
}

/**
 * Initialize your data structure here.
 */
var Twitter = function () {
    this.userMap = new Map();
    this.followMap = new Map();
    this.time = 0;
};

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
    this.userMap.set(userId, [...(this.userMap.get(userId) || []), [tweetId, this.time++]]);
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
    let followItems = (this.followMap.get(userId) || []).flatMap(fl => this.userMap.get(fl) || []);
    let res = [...followItems, ...(this.userMap.get(userId) || [])].sort((ta, tb) => tb[1] - ta[1]).map(t => t[0]).slice(0, 10);
    return res;
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
    if (followerId == followeeId) return;
    this.followMap.set(followerId, [...(this.userMap.get(followerId) || []), followeeId]);
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
    if (followerId == followeeId) return;
    this.followMap.set(followerId, [...(this.userMap.get(followerId) || [])].filter(fid => fid != followeeId));
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

// {
//     let twitter = new Twitter()
//     twitter.postTweet(1, 5);
//     twitter.getNewsFeed(1);
//     twitter.follow(1, 2);
//     twitter.postTweet(2, 6);
//     twitter.getNewsFeed(1);
//     twitter.unfollow(1, 2);
//     twitter.getNewsFeed(1);
// }

// {
//     let twitter = new Twitter()
//     twitter.postTweet(1, 5);
//     twitter.follow(1, 1);
//     twitter.getNewsFeed(1);
// }

{
    let twitter = new Twitter()
    twitter.postTweet(1, 5);
    twitter.postTweet(1, 3);
    twitter.getNewsFeed(1);
}


{
    let twitter = new Twitter()
    twitter.postTweet(1, 5);
    twitter.follow(1, 2);
    twitter.follow(2, 1);
    twitter.getNewsFeed(2);
    twitter.postTweet(2, 6);
    twitter.getNewsFeed(1);
    twitter.getNewsFeed(2);
}

