require('dotenv').config()
const app = require('./app')
const logger = require('pino')()
const port = process.env.PORT || 3001

app.listen(port, () => {
  logger.info(`server listening on port ${port}`)
})
