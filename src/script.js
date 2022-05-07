chrome.action.onClicked.addListener((tab) => {
	chrome.scripting.insertCSS({
		target: { tabId: tab.id },
		files: ['style.css']
	})
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		files: ['content.js']
	})
})
