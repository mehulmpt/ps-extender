chrome.action.onClicked.addListener((activeTab) => {
	chrome.scripting.insertCSS({
		target: { tabId: activeTab.id },
		files: ["assets/styles.css"]
	})
	chrome.scripting
		.executeScript({
			target: { tabId: activeTab.id },
			files: ["content.js"],
		})
		.then(() => console.log(" injected script file"));
})
