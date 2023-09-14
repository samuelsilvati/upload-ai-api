import 'dotenv/config'
import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { promptRoutes } from './routes/promptRoutes'
import { uploadVideoRoute } from './routes/uploadVideo'
import { createTranscriptionRoute } from './routes/createTranscription'
import { generateAICompletionRoute } from './routes/generateAiCompletions'

const app = fastify()

app.register(fastifyCors, {
  origin: `${process.env.CLIENT_HOST}`,
})

app.get('/', () => {
  return 'Hello World'
})

app.register(promptRoutes)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)
app.register(generateAICompletionRoute)

app
  .listen({
    port: 3333,
    host: '192.168.3.3',
  })
  .then(() => {
    console.log('Server running on 192.168.3.3:3333')
  })
