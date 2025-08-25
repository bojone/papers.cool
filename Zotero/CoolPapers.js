{
	"translatorID": "cafebabe-dead-beef-feed-123456789abc",
	"label": "Cool Papers",
	"creator": "Jianlin Su",
	"target": "^https?://papers\\.cool/(arxiv|venue)/.*",
	"minVersion": "3.0",
	"maxVersion": "",
	"priority": 1,
	"inRepository": true,
	"translatorType": 4,
	"browserSupport": "gcsibv",
	"lastUpdated": "2025-08-25 06:49:28"
}

function detectWeb(doc, url) {
    return Array.from(doc.querySelectorAll("div.items > p")).filter(e => e.style.display !== "none").length ? "multiple" : false;
}

function doWeb(doc, url) {
    const papers = Array.from(doc.querySelectorAll("div.items > p")).filter(e => e.style.display !== "none");

    const items = {};
    papers.forEach(p => {
        const title = p.textContent.trim();
        const url = p.querySelector(".i-title").getAttribute("href");
        items[url] = title;
    });

    Zotero.selectItems(
        items,
        function (selectedUrls) {
            if (!selectedUrls) return;

            for (const url of Object.keys(selectedUrls)) {
                const id = url.slice(1);
                const paper = doc.getElementById(id);;
                const type = doc.body.id == "arxiv" ? "preprint" : "conferencePaper";
                const item = new Zotero.Item(type);
                item.title = paper.querySelector(".title-link").textContent.trim();
                paper.querySelectorAll(".author").forEach(a => item.creators.push(ZU.cleanAuthor(a.textContent, "author", false)));
                item.abstractNote = paper.querySelector("p.summary").textContent.trim();
                item.url = paper.querySelector(".title-link").href;
                item.attachments = [{
                    url: paper.querySelector(".title-pdf").getAttribute("data"),
                    title: "Full Text PDF",
                    mimeType: "application/pdf"
                }];
                const subject = paper.querySelector("p.subjects a");
                if (doc.body.id == "arxiv") {
                    item.extra = subject.href.split("/").at(-1) + " - arXiv";
                    item.date = ZU.strToISO(paper.querySelector("span.date-data").textContent);
                } else {
                    if (subject) {
                        item.extra = subject.textContent.trim();
                        item.date = subject.textContent.split(" ")[0].split(".")[1];
                    }
                }
                item.complete();
            }
        }
    );
}

/** BEGIN TEST CASES **/
var testCases = [
	{
		"type": "web",
		"url": "https://papers.cool/arxiv/cs.AI",
		"items": "multiple"
	},
	{
		"type": "web",
		"url": "https://papers.cool/venue/ICML.2025",
		"items": "multiple"
	}
]
/** END TEST CASES **/
