import { randomUUID } from "crypto";
import {userName} from "../database/userNameDb"

export class User {
    private static users: User[] = [];
    constructor(){
}

    sendTweet(){}
    follow(){}
    showFeed(){}
    showTweets(){}
}