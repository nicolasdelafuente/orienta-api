const { createLogger, format, transports } = require('winston');
const { format: dateFormat } = require('date-fns');

const customFormat = format.printf(info => {
    const formattedTimestamp = dateFormat(new Date(info.timestamp), 'yyyy-MM-dd HH:mm:ss.SSSXXX');
    return `[${formattedTimestamp}] ${info.level} ${info.message}`;
});

module.exports = createLogger({
    format: format.combine(
        format.simple(),
        format.timestamp(),
        customFormat
    ),
    transports: [
        new transports.File({
            filename: `${__dirname}/../logs/errorQuery.log`
        }),
    ]
});