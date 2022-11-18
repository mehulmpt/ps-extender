chrome.browserAction.onClicked.addListener((activeTab) => {
	chrome.tabs.executeScript(null, { file: 'content.js' })
	chrome.tabs.insertCSS(null, { file: 'assets/styles.css' });
})
