var url = window.location.href;

if (url.startsWith('https://arxiv.org/')) {
    if (url.startsWith('https://arxiv.org/abs/')) {
        var paperId = url.match(/[0-9]{4}\.[0-9]{4,5}/)[0];
        var ul = document.querySelector('div.full-text ul');
        ul.innerHTML += `<li><a href="https://papers.cool/arxiv/${paperId}" target="_blank">Cool Papers</a></li>`;
    } else if (url.startsWith('https://arxiv.org/list/')) {
        var dts = document.querySelectorAll('#articles dt');
        Array.from(dts).map(function(dt) {
            var paperId = dt.querySelectorAll('a')[1].id;
            dt.innerHTML = dt.innerHTML.trim().slice(0, -1) + `, <a href="https://papers.cool/arxiv/${paperId}" target="_blank">coolpapers</a>]`
        })
    }
} else if (url.match(/openreview\.net\//g)) {
    var div = document.querySelector('div.col-xs-12');
    var a = document.createElement('a');
    a.href = '';
    a.style = 'display:inline;float:right';
    a.onclick = function() {
        var url = window.location.href;
        if (url.match(/(?<=openreview\.net\/forum\?id=)([A-Za-z0-9]+)/g)) {
            var paperId = url.match(/(?<=openreview\.net\/forum\?id=)([A-Za-z0-9]+)/g)[0];
            window.open(`https://papers.cool/venue/${paperId}@OpenReview`, '_blank');
        } else if (url.match(/openreview\.net\/group/g)) {
            var content = document.querySelector('body').innerHTML;
            var paperIds = content.match(/(?<=href="\/forum\?id=)([A-Za-z0-9]+)/g).map(e => e + '@OpenReview');
            window.open(`https://papers.cool/venue/${paperIds.join(',')}`, '_blank');
        }
    };
    a.innerText = '[Cool Papers]';
    div.appendChild(a);
} else if (url.match(/(?<=aclanthology.org\/)([A-Za-z0-9\-\.]+)(?=\/)/g)) {
    var paperId = url.match(/(?<=aclanthology.org\/)([A-Za-z0-9\-\.]+)(?=\/)/g)[0];
    var div = document.querySelector('div.acl-paper-link-block');
    div.innerHTML += `<a class="btn btn-secondary" href="https://papers.cool/venue/${paperId}@ACL" target="_blank"><span class="pl-sm-2 d-none d-sm-inline">Cool Papers</span></a>`;
}


