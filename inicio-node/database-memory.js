import { randomUUID } from "crypto"

export class DataBaseMemory {
  #produtos = new Map()

  list() {
    return Array.from(this.#produtos.entries()).map((produtoArray) =>{
      const id = produtoArray[0]
      const data = produtoArray[1]

      return {
        id,
        ...data,
      }
    })
  }

  create(produto){ 
    const produtoId = randomUUID()

    this.#produtos.set(produtoId, produto)
  }

  update(id, produto){
    this.#produtos.set(id, produto)
  }

  delete(id){
    this.#produtos.delete(id)
  }
}