chrome.browserAction.onClicked.addListener((activeTab) => {
	chrome.tabs.insertCSS(null, { file: 'assets/styles.css' });
	chrome.tabs.executeScript(null, { file: 'content.js' })
})
