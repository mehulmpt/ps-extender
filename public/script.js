chrome.action.onClicked.addListener((activeTab) => {
	// chrome.tabs.insertCSS(null, { file: 'assets/styles.css' });
	// chrome.tabs.executeScript(null, { file: 'content.js' })
	// the above should be in MV3 as follows
	chrome.scripting
		.executeScript({
			target: { tabId: activeTab.id },
			files: ["content.js"],
		})
		.then(() => console.log(" injected script file"));
	chrome.scripting.insertCSS({
		target: { tabId: activeTab.id },
		files: ["assets/styles.css"]
	})
})
