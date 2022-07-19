import winston from 'winston'
import ecsFormat  from '@elastic/ecs-winston-format'

const logger = winston.createLogger({
    level: 'debug',
    format: ecsFormat({ convertReqRes: true }),
    transports: [
      new winston.transports.File({
        filename: process.env.logDir,
        level: 'debug'
      })
    ]
  })

export default logger