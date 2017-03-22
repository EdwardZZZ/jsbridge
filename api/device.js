'use strict'

import $ from '../lib/core'

const HANDLER_ROOT = 'device'

$.wrapAPI(HANDLER_ROOT + '.location', (callback) => {
    $.invokeApp(HANDLER_ROOT + '/location', { callback })
})

module.exports = $
