import { db } from "./database/db.js";

db`
create table produtos (
    produto     text,
    descricao   text,
    valor       decimal
    );
`.then(() =>{
  console.log('Tabela Criada!')
})