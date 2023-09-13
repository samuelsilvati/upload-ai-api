import { fastify } from 'fastify'
import { promptRoutes } from './routes/promptRoutes'
import { uploadVideoRoute } from './routes/uploadVideo'
import { createTranscriptionRoute } from './routes/createTranscription'

const app = fastify()

app.get('/', () => {
  return 'Hello World'
})

app.register(promptRoutes)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)

app
  .listen({
    port: 3333,
    host: '192.168.3.3',
  })
  .then(() => {
    console.log('Server running on 192.168.2.3:3333')
  })
