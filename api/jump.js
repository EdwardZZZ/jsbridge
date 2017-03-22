'use strict'

import $ from '../lib/core'

const HANDLER_ROOT = 'jump'

$.wrapAPI(HANDLER_ROOT + '.close', () => {
    $.invokeApp(HANDLER_ROOT + '/close', { })
})

$.wrapAPI(HANDLER_ROOT + '.native', (view, flag, close) => {
    $.invokeApp(HANDLER_ROOT + '/native', {view, flag, close})
})

$.wrapAPI(HANDLER_ROOT + '.web', (url, title, showShare, shareTitle, shareUrl, shareIcon, shareDesc, needResult, callback) => {
    $.invokeApp(HANDLER_ROOT + '/web', {url, title, showShare, shareTitle, shareUrl, shareIcon, shareDesc, needResult, callback})
})

$.wrapAPI(HANDLER_ROOT + '.setviewresult', (resultData, callback) => {
    $.invokeApp(HANDLER_ROOT + '/setviewresult', {resultData, callback})
})

module.exports = $
