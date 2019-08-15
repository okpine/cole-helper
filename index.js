chrome.tabs.executeScript(null, { file: "data.js" }, function() {
	chrome.tabs.executeScript(null, { file: "content.js" });
});