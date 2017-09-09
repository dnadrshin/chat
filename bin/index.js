#!/usr/bin/env node
const
    app = require('../index'),
    settings = require('../server/settings');

app.set('port', process.env.PORT || settings.port);

app.listen(settings.port, function () {
    console.log(`App listening on port ${settings.port}!`)
})
