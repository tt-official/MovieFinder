import healthCheckHandler from "./handlers/healthcheck";

const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/', healthCheckHandler)

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()