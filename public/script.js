if (chrome.scripting) 
{
    chrome.action.onClicked.addListener((tab) => 
	{
        chrome.scripting.insertCSS({
            target: { tabId: tab.id },
            files: ['assets/styles.css']
        }).then(() => {
            return chrome.scripting.executeScript({
                target: { tabId: tab.id },
                files: ['content.js']
            });
        }).catch((error) => {
            console.error('Error: ', error);
        });
    });
} else 
{
    console.error('chrome.scripting API is not available');
}