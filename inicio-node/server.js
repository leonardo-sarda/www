import { fastify} from 'fastify'
import { DatabasePostgres } from './database-postgres.js'



const server = fastify()

//const database = new DataBaseMemory()

const database = new DatabasePostgres()

//Rota de Criação
server.post('/produto', async(request, reply) => {
  const { produto, descricao, valor} = request.body

  await database.create({
  produto,
  descricao,
  valor,
})

return reply.status(201).send()
})
//Rota de lista
server.get('/produto', async(request) => {
  const search = request.query.search

  console.log(search)

  const produto = await database.list(search)


  return produto
})
//Rota de update
server.put('/produto/:id', async(request, reply) =>{
  const prodId = request.params.id
  const { prod, desc, valor} = request.body

  await database.update(prodId, {
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