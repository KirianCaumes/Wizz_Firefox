browser.browserAction.onClicked.addListener(() => {
    browser.tabs.executeScript({ file: '/wizz.js' })
})