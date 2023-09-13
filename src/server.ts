import { fastify } from 'fastify'

const app = fastify()

app.get('/', () => {
  return 'Hello World'
})

app
  .listen({
    port: 3333,
    host: '192.168.3.3',
  })
  .then(() => {
    console.log('Server running on 192.168.2.3:3333')
  })
