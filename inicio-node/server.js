/*import { createServer } from 'node:http'

const server = createServer((request, response) => {
  response.write('teste')
  return response.end()
})

server.listen(3340)*/


import { fastify} from 'fastify'
import { DataBaseMemory } from './database-memory.js' 
import internal from 'stream'


const server = fastify()

const database = new DataBaseMemory()

//Rota de Criação
server.post('/produto', (request, reply) => {
  const { prod, desc, valor} = request.body
database.create({
  prod,
  desc,
  valor,
})

console.log(database.list())

return reply.status(201).send()
})
//Rota de lista
server.get('/produto', (request) => {
  const search = request.query.search

  console.log(search)

  const produto = database.list(search)

  

  return produto
})
//Rota de update
server.put('/produto/:id', (request, reply) =>{
  const prodId = request.params.id
  const { prod, desc, valor} = request.body

  database.update(prodId, {
    prod,
    desc,
    valor
  })

  return reply.status(204).send()
})
//Rota de delete
server.delete('/produto/:id',(request, reply) =>{
  const prodID = request.params.id

  database.update(prodID)

  return reply.status(200).send()
})

server.listen({ 
  port:3340
}).then(() => {
  console.log('Rodando')
})