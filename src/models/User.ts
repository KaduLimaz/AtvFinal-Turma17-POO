export class User {
    constructor(
        private id: string,
        public name: string,
        private username: string,
        private email: string,
        private password: string
    ){}

    senteTweet(){}
    follow(){}
    showFeed(){}
    showTweets(){}
}