import * as http from 'http'
import db from './models'
import { normalizePort, onError, onListering } from './utils/utils'

import app from './app'

db.sequelize.sync()
.then(() => {
    const server = http.createServer(app)
const port = normalizePort(process.env.port || 3000)


server.listen(port)
server.on('error', onError(server))
server.on('listening', onListering(server))
})

