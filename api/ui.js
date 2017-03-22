'use strict'

import $ from '../lib/core'

const HANDLER_ROOT = 'ui'

$.wrapAPI(HANDLER_ROOT + '.toast', (content, callback) => {
    $.invokeApp(HANDLER_ROOT + '/toast', {content, callback })
})

$.wrapAPI(HANDLER_ROOT + '.showinput', (title, label, okText, cancelText, callback) => {
    $.invokeApp(HANDLER_ROOT + '/showinput', {title, label, okText, cancelText, callback})
})

$.wrapAPI(HANDLER_ROOT + '.setviewresult', (resultData, callback) => {
    $.invokeApp(HANDLER_ROOT + '/setviewresult', {resultData, callback})
})

$.wrapAPI(HANDLER_ROOT + '.settitle', (title) => {
    if (!title) {
        console.error('title cannot be null')
    }
    $.invokeApp(HANDLER_ROOT + '/settitle', {title})
})

$.wrapAPI(HANDLER_ROOT + '.showshare', () => {
    $.invokeApp(HANDLER_ROOT + '/showshare', {})
})


module.exports = $
