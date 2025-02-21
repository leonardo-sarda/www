import { randomUUID } from "crypto"
import  sql from './database/db.js'

export class DatabasePostgres {

  async list(search) {
    let produtos
    
    if(search){
      produtos = await sql`select * from produtos where descricao iLIKE ${'%'+ search + '%'}`
    }else{
      produtos = await sql`select * from produtos`
    }
    return produtos
  }

  async create(item){ 
    const produtoId = randomUUID()

    const {produto, descricao, valor} = item

    await sql`insert into produtos (id, produto, descricao, valor) values (${produtoId}, ${produto}, ${descricao}, ${valor}) `
  }

  async update(id, item){
    const {produto, descricao, valor} = item

    await sql`UPDATE produtos set produto = ${produto}, descricao = ${descricao}, valor = ${valor} 
    where id = ${id}`
    
  }

  delete(id){
  }
}