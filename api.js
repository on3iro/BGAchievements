const jsonServer = require('json-server')

const server = jsonServer.create()

server.use(jsonServer.defaults())

const router = jsonServer.router('fake_db.json')
server.use(router)

console.log('Listening at localhost:8085')
server.listen(8085)
