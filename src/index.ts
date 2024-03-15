import { randomUUID } from "node:crypto";
export const id = randomUUID();
import { Tweet } from "./models/Tweet"

// 1 - Deve ser possível criar usuários na aplicação.
// Os campos ID e Username devem ser únicos por
// usuário, sendo que o ID pode ser gerado
// automaticamente pela aplicação.
import { maria, kadu, lucas } from "./database/Users"

console.log(kadu)

// 2 Cadastro de tweets
// Deve ser possível criar tweets por usuário. Cada usuário poderá criar N tweets e um tweet pertence a somente um usuário (relacionamento 0-N).
// O campo ID deve ser único e pode ser gerado automaticamente pela aplicação. Cada tweet possui um tipo obrigatório (normal ou reply).

const newTweetKadu = kadu.sendTweet("primeira mensagem")
const newTweetMaria =  maria.sendTweet("segundo tweet")

// 3 - Deve ser possível exibir um tweet na aplicação. Como
// estamos no back-end, utilize o console.log( ).
// A exibição de um tweet deve ser feita da seguinte
// forma:

kadu.showTweets()
console.log("---------------------------------")

// 4 - Deve ser possível para um usuário seguir outro
// usuário, exceto a si mesmo.
// O usuário deve ter acesso a lista de usuário a quem
// segue.
kadu.follow(maria)
kadu.follow(lucas)
maria.follow(kadu)
lucas.follow(kadu)
kadu.follow(kadu) // nao vai parecer na lista
kadu.showfollowing()
console.log("---------------------------------")
