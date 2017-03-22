'use strict'

import $ from '../lib/core'

const HANDLER_ROOT = 'share'

$.wrapAPI(HANDLER_ROOT + '.webpage', (shateTo, title, desc, url, icon, panelTitle, callback) => {
    $.invokeApp(HANDLER_ROOT + '/webpage', {shateTo, title, desc, url, icon, panelTitle, callback})
})
$.wrapAPI(HANDLER_ROOT + '.image', (shateTo, title, desc, panelTitle, filePath, callback) => {
    $.invokeApp(HANDLER_ROOT + '/image', {shateTo, title, desc, panelTitle, filePath, callback})
})

module.exports = $