import  sql  from "./database/db.js";

// sql`DROP TABLE IF EXISTS produtos;`.then(()=>{
//   console.log('tabela apagada')
// })

sql`
create table userss (
    id          TEXT PRIMARY KEY,
    nome        TEXT,
    teste       TEXT
    );
`.then(() =>{
  console.log('Tabela Criada!')
})