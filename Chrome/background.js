chrome.contextMenus.create({
    id: "redirect1",
    title: "Redirect to Cool Papers",
    contexts: ["page"],
    documentUrlPatterns: [
        "https://arxiv.org/abs/*",
        "https://arxiv.org/html/*",
        "https://huggingface.co/papers/*",
        "https://openreview.net/forum*"
    ]
});

chrome.contextMenus.create({
    id: "redirect2",
    title: "Redirect to Cool Papers",
    contexts: ["selection", "link"]
});

chrome.contextMenus.create({
    id: "redirect3",
    title: "Redirect to Cool Papers",
    contexts: ["all"],
    documentUrlPatterns: [
        "https://arxiv.org/pdf/*",
        "https://openreview.net/pdf*"
    ]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    var textToCheck = [info.selectionText, info.linkUrl, info.pageUrl, info.frameUrl];
    var arXivPattern = /[0-9]{4}\.[0-9]{4,5}/g;
    var OpenReviewPattern = /(?<=openreview\.net\/.*?id=)([A-Za-z0-9]+)/g;
    var IJCAIPattern = /(?<=ijcai\.org\/proceedings\/)(\d+)\/(\d+)/g;
    var ACLPattern = /(?<=aclanthology.org\/)([A-Za-z0-9\-\.]+)(?=(\/|\.pdf))/g;
    var PMLRPattern = /(?<=proceedings\.mlr\.press\/)(v\d+)\/([A-Za-z0-9\-]+)(?=\.html)/g;
    for (var text of textToCheck) {
        if (text) {
            var paperIds = text.match(arXivPattern);
            if (paperIds) {
                var newUrl = `https://papers.cool/arxiv/${paperIds.join(',')}`;
                chrome.tabs.create({url: newUrl});
                return;
            }
            var paperIds = text.match(OpenReviewPattern);
            if (paperIds) {
                paperIds = paperIds.map(e => e + '@OpenReview')
                var newUrl = `https://papers.cool/venue/${paperIds.join(',')}`;
                chrome.tabs.create({url: newUrl});
                return;
            }
            var paperIds = text.match(IJCAIPattern);
            if (paperIds) {
                paperIds = paperIds.map(e => e.split('/')[1].replace(/^0+/, '') + '@' + e.split('/')[0] + '@IJCAI')
                var newUrl = `https://papers.cool/venue/${paperIds.join(',')}`;
                chrome.tabs.create({url: newUrl});
                return;
            }
            var paperIds = text.match(ACLPattern);
            if (paperIds) {
                paperIds = paperIds.map(e => e + '@ACL')
                var newUrl = `https://papers.cool/venue/${paperIds.join(',')}`;
                chrome.tabs.create({url: newUrl});
                return;
            }
            var paperIds = text.match(PMLRPattern);
            if (paperIds) {
                paperIds = paperIds.map(e => e.split('/')[1] + '@' + e.split('/')[0] + '@PMLR')
                var newUrl = `https://papers.cool/venue/${paperIds.join(',')}`;
                chrome.tabs.create({url: newUrl});
                return;
            }
        }
    }
    keywords = info.selectionText.match(/[\p{L}\p{N}]{2,}/gu);
    if (keywords) {
        var newUrl = `https://papers.cool/arxiv/search?highlight=1&query=${keywords.join(' ')}`;
        chrome.tabs.create({url: newUrl});
        chrome.notifications.create('', {
            type: 'basic',
            iconUrl: 'icon.png',
            title: 'No Paper ID found',
            message: 'Try to retrieve the selected text'
        });
    } else {
        chrome.notifications.create('', {
            type: 'basic',
            iconUrl: 'icon.png',
            title: 'No Paper ID found',
            message: 'Please select the text or link containing the correct paper id to redirect'
        });
    }
});