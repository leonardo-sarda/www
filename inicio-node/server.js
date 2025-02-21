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

server.get('/', (request, reply) => {
  const produtos = database.list()

  return produtos
})

server.put('/produto/:id', (request, reply) =>{
  const prodId = request.params.prodId
  const { prod, desc, valor} = request.body

  database.update(prodId, {
    prod,
    desc,
    valor
  })

  return reply.status(204).send()
})

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