export class Tweet {
    constructor(
        private id: string,
        private content: string,
        private type: string,
    ){}

    reply(content:string){}
    like(){}
    show(){}
    showReplies(){}
}