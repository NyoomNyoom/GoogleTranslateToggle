chrome.commands.onCommand.addListener((command) => {
    if (command === "toggle-translate") {
        chrome.tabs.query({active: true, currentWindow: true}, ([tab]) => {
            if (tab?.url) {
                const encodedUrl = encodeURIComponent(tab.url);
                const translateUrl = 'https://translate.google.com/translate?hl=en&sl=auto&u=${encodedUrl}';
                chrome.tabs.update(tab.id, {url: translateUrl});
            }
        });
    }
});