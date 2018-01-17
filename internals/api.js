const jsonServer = require('json-server')

const server = jsonServer.create()

server.use(jsonServer.defaults({ }))

const router = jsonServer.router('internals/fake_db.json')
server.use(router)

console.log('Started fake api server on port: 8089!')
server.listen(8089)
