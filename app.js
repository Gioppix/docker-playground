const fastify = require('fastify')({ logger: true })

process.stdin.on('data', function(inputStdin) {
    process.exit(0)
});

// Creating a route
fastify.get('/', async (request, reply) => {
    return { message: "Hello World"}
})
fastify.listen(3000, "0.0.0.0")
