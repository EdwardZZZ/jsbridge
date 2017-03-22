'use strict'

import $ from '../lib/core'

const HANDLER_ROOT = 'app'

$.wrapAPI(HANDLER_ROOT + '.browserscreen', (callback) => {
    $.invokeApp(HANDLER_ROOT + '/browserscreen', { callback })
})

$.wrapAPI(HANDLER_ROOT + '.phonescreen', (callback) => {
    $.invokeApp(HANDLER_ROOT + '/phonescreen', { callback })
})

$.wrapAPI(HANDLER_ROOT + '.isinstallapp', (pkgName, callback) => {
    $.invokeApp(HANDLER_ROOT + '/isinstallapp', { pkgName, callback })
})

module.exports = $
