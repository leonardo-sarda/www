import { randomUUID } from "crypto"

export class DataBaseMemory {
  #produtos = new Map()

  list(search) {
    return Array.from(this.#produtos.entries())
    .map((produtoArray) =>{
      const id = produtoArray[0]
      const data = produtoArray[1]

      return {
        id,
        ...data,
      }
    })
    .filter(produto =>{
      if (search){
        return produto.desc.includes(search)
      }

      return true
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