import winston from 'winston';
import 'winston-daily-rotate-file';
import path from 'path';

const transport = new winston.transports.DailyRotateFile({
  filename: path.join(__dirname, '../', 'logs/%DATE%.log'),
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '5m',
  maxFiles: '1d',
});

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
  transports: [transport],
});

export default logger;