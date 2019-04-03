chrome.browserAction.onClicked.addListener( activeTab => {
    chrome.tabs.executeScript(null, { file: "content.js" })
})