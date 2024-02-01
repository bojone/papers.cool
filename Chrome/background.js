chrome.contextMenus.create({
    id: "redirect1",
    title: "Redirect to Cool Papers",
    contexts: ["page"],
    documentUrlPatterns: [
        "https://arxiv.org/abs/*",
        "https://arxiv.org/pdf/*",
        "https://huggingface.co/papers/*",
    ]
});

chrome.contextMenus.create({
    id: "redirect2",
    title: "Redirect to Cool Papers",
    contexts: ["selection", "link"]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    const arxivIdPattern = /[0-9]{4}\.[0-9]{4,5}/;
    const textToCheck = [info.selectionText, info.linkUrl, info.pageUrl];
    for (const text of textToCheck) {
        if (text) {
            const paperId = arxivIdPattern.exec(text);
            if (paperId) {
                const newUrl = `https://papers.cool/arxiv/${paperId}`;
                chrome.tabs.update(tab.id, {url: newUrl});
                return;
            }
        }
    }
    chrome.notifications.create('', {
        type: 'basic',
        iconUrl: 'icon.png',
        title: 'No arXiv ID found',
        message: 'Please select the text or link containing the correct arXiv ID to redirect'
    });
});
