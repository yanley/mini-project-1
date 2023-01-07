//this is what will actually do the converting
    
    const dayjs = require('dayjs')

    const convert = (req, res) => {
        let timezoneString = req.query.tzs;
        let goalDate = req.query.d;
        let goalTime = req.query.a;
    
        let timezones = timezoneString.split(',')
        const format = 'dddd DD MMMM h:mm A'
        let convertedTimes = []
    
        timezones.forEach(timezone => {
            let convertedTime = dayjs(goalDate+" "+goalTime).tz(timezone).format(format);
            convertedTimes.push({tz: timezone, time: convertedTime})
        })
    
        res.status(200)
        res.json({times:convertedTimes})
    }    
    
    module.exports = {
        convert
    }