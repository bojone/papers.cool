# Cool Papers

Immersive Paper Discovery（沉浸式刷论文！）

这里记录Cool Papers的更新日志，并且收集用户的反馈和建议。

## 链接
- **Cool Papers**: [https://papers.cool](https://papers.cool)
- **Kimi Chat**: [https://kimi.moonshot.cn](https://kimi.moonshot.cn/?ref=papers.cool)
- **科学空间博客**: [https://kexue.fm](https://kexue.fm)

## 体验

**沉浸式刷论文：**
- 进入[首页](https://papers.cool)，选择自己相关的分类，点击“+”号可以自行调整；
- 进入相应的分类，如[cs.AI](https://papers.cool/arxiv/cs.AI)，如无意外，显示的是Arxiv最新一天的论文列表；
- 看标题，看摘要，英文不好的同学，可以自行用浏览器的翻译功能全页翻译；
- 如果标题或者摘要能引起你的兴趣，可以点击[PDF]看看论文详情，或者点击[Kimi]看看Kimi的总结；
- 如果此时正好是论文更新不久，那就[Kimi]可能需要排队，但不着急，可以先看下一步；
- 重复以上几点，直到列表最后；
- 点击底部Bar的星星，可以看到你点击过[PDF]或者[Kimi]的论文，这代表至少有某一瞬间，它引起了你的兴趣；
- 这时候你可以点击Bar中的标题，重新回到论文，如果刚才Kimi在排队，那么现在可以看看Kimi排队完了没；
- 如果Kimi的结果已经出来了，那么可以参考Kimi的总结，重新思考一下这篇论文是否真的值得收藏；
- 如果觉得这篇论文并不如期望，那么可以点击标题右端的星星，取消星标；
- 如果觉得论文值得收藏，可以点击[PDF]，然后右上角有个下载按钮，可以下载论文；
- 或者点击论文左上角的带#数字，跳转到Arxiv原始页面（比如需要Arxiv Id）；
- 如果觉得论文值得分享，可以点击[Copy]，那么论文信息会被复制到粘贴板，你可以到要分享的位置进行粘贴；
- 如果想要保存/同步/分享你的阅读记录，可以点击Bar列表的“Export”按钮，这将会打开一个新的链接，里边只保留当前页面你星标过的论文；

**可选的操作：**
- 首页点击每个分类的Feed链接，用订阅器订阅；
- 点击底部Bar的第二个按钮，打开页面内搜索，通过关键词对论文列表进行筛选；
- 点击底部Bar的第四个按钮，选择[Kimi]输出的语言（中文or英文）；
- 未完待续...


## 更新

### 2024.08.12
- **增加用户偏好设置**：首页底部新增“More”按钮，点击可以设置偏好关键词以及查看个人词云；
- **增加用户偏好排序**：列表页顶部新增排序按钮“★”和“❤”，星形“★”表示按照星标数排序，心形“❤”表示按照用户偏好排序。

### 2024.08.07
- **增加相关文献按钮**：每篇论文标题右方新增[REL]按钮，点击可以查找该论文的相关论文，基于关键词+全文搜索实现。

### 2024.07.09
- **Venue增加订阅链接**：为了更方便用户接收会议论文集的收录信息，新增顶会论文Feed链接，订阅[https://papers.cool/venue/latest/feed](https://papers.cool/venue/latest/feed)即可获取最新收录的会议论文集。

### 2024.06.30
- **Arxiv合并阅读**：应部份用户需求，加入多个类别合并阅读功能，目前入口在首页arXiv标题右上方第三个图标（蓝色图标），参考链接为 [https://papers.cool/arxiv/cs.AI,cs.CL,cs.CV,cs.LG](https://papers.cool/arxiv/cs.AI,cs.CL,cs.CV,cs.LG)；
- **增加回到底部按钮**：与回到顶部相对应；
- **提高反爬虫能力**：近来出现一些恶意爬虫现象，针对此做了一些应对措施，普通用户无感。

### 2024.06.01
- **Arxiv增加新字段**：为了更方便用户筛选论文，Arxiv分支增加Subjects字段和Publish字段，分别显示论文所属分类以及发布时间。

### 2024.05.05
- **增加全站论文搜索**：试上线全站论文搜索功能，搜索本地收录的所有论文，这是基于倒排索引和BM25的搜索引擎，由[tantivy](https://tantivy-py.readthedocs.io/en/latest/)搭建，目前只支持搜索title和summary两个字段，最多显示1000条搜索结果，没有高级的自定义功能，后期看用户反馈再斟酌补充自定义选项；
- **优化页面搜索速度**：优化原本就有的页面内搜索功能的速度（App Bar上），在列表页文章总数比较多时，搜索速度（尤其是勾选上Filter时）会有明显的提升。

### 2024.04.19
- **增加回到顶部按钮**：列表页面右下角增加回到顶部按钮，可以一键回到页面顶部。

### 2024.03.11
- **简化结构和逻辑**：简化数据存储的结构，优化部分函数的逻辑。对于用户来说，功能上无感，但有可能会感觉到速度有轻微变快。

### 2024.02.18
- **机器翻译标题和摘要**：列表页增加机器翻译标题和摘要选项，点击Bar的第4个按钮，可以选在Desc（标题和摘要）的语言，目前支持翻译为中文，方便部分中文母语的读者加速论文的筛选，此服务由[translate.js](http://translate.zvo.cn/index.html)提供（注：Chrome等浏览器本身已经内置了Google翻译，但这需要科学上网，某些场景下不是特别方便，所以这是纯粹是提供一个补充选项，非必须，也没有太多特色。

### 2024.02.10
- **新年快乐！**
- **增加会议论文列表**：首页增加Venue栏目，收录部分会议论文；论文由人工收集整理，原始来源和格式都比较复杂，可能会有错漏之处，敬请谅解，如果发现请反馈。

### 2024.02.02
- **开放所有历史论文访问**：通过`https://papers.cool/arxiv/<paper_id>`的方式，可以访问任意Arxiv论文，如果数据库没有则实时爬取；
- **增加Chorme重定向扩展**：通过浏览器安装[Cool Papers Redirector](https://chromewebstore.google.com/detail/cool-papers-redirector/goopbgbhhhionbpfdkkblnbeopfmlihm)，可以从任何正确的网页重定向到Cool Papers。

### 2024.01.28
- **[Kimi]支持英文输出**：点击底部Bar的第四个按钮，可以选择[Kimi]的语言（中文or英文），点击“Save”保存后，后面点击[Kimi]时将会用对应的语言进行FAQ。

**注**：英文版和中文版是两次独立的生成过程，并不是简单的互译，所以英文版和中文版的内容没有必然的逐一对应关系。

### 2024.01.21
- **导出部分阅读记录**：点击列表页下方的Bar中间的星星，就会出现点击过[PDF]或者[Kimi]的论文列表，每个title右边多出一个星星，通过点击星星可以去除/恢复星标，点击“Export”只会导出被星标的paper。

### 2024.01.20
- **PDF抽取文本优化**：进一步优化PDF抽取文本的效果，理论上[Kimi]的FAQ质量会有所提升；
- **搜索字段加入作者**：Bar上的页面内搜索字段增加作者，并且目前按浏览器页面内搜索的快捷键（CMD+F or CTRL+F）会自动弹出自行编写的搜索。

### 2024.01.18
- **列表页延时加载**：论文列表引入延时加载功能，提高列表数量过多时的加载速度，当以正常速度进行阅读的情况下，延时加载基本上是无感的。

### 2024.01.17
- **页面搜索支持反选**：优化页面内搜索，同时支持包含某些关键词以及排除某些关键词。

### 2024.01.16
- **Arxiv更新优化**：优化获取Arxiv最新论文列表的逻辑，理论上论文更新将会更稳定、更及时；
- **支持导出阅读记录**：点击列表页下方的Bar中间的星星，就会出现点击过[PDF]或者[Kimi]的论文列表，点击“Export”就会打开一个只包含这些论文的新页面，复制这个新页面的链接地址，就可以在其他设备或者与其他人分享阅读记录。

### 2024.01.15
- **论文更新滞后**：今天Cool Papers在下午三点之后才更新，这是因为[官方Blog](https://blog.arxiv.org/2024/01/10/attention-authors-temporary-change-to-announcement-schedule-due-to-mlk-jr-holiday/)发布了今天不更新的公告，所以站长主动跳过了今天的更新，直到有用户提醒，才发现原来今天Arxiv是有更新的；
- **适配早年论文Id**：此前Cool Papers适配的Arxiv ID为“\d{4}\.\d{5}”的格式，即四位年月加五位编号，后来发现早年的Arxiv ID有“\d{4}\.\d{4}”的格式，如Word2Vec是[1301.3781](https://papers.cool/arxiv/1301.3781)、GAN是[1406.2661](https://papers.cool/arxiv/1406.2661)，对此类情况做了适配和重定向（比如1406.2661其实访问1406.02661也可以，同理2401.06769访问2401.6769也可，会重定向到同一篇论文），为以后可能开放所有历史论文做准备；
- **其他兼容性拓展**：未来可能会进一步引入Arxiv以外的论文源，所以对页面模版等细节做了进一步泛化，这部分更新对用户来说基本无感。

### 2024.01.09
- **支持历史日期列表**：应很多用户请求，开通历史日期论文列表访问支持，可以在首页通过日历图标选择日期。这个历史列表是基于Cool Papers本身的累积，而不是实时从Arxiv获取（Arxiv也不支持访问一周以前的历史列表），所以目前的数据有限，再加上此前刚开发时有过一段数据混乱期，所以只支持2024年开始的日期。

### 2024.01.08
列表页底部加了个Bar，支持一些快捷操作：
- **回到首页**：跳转回网站首页；
- **页面搜索**：支持多个关键词高亮，支持只显示匹配上的论文；
- **星标列表**：显示页面内点击过[PDF]或者[Kimi]的论文列表；
- **魔法令牌**：输入Magic Token，解锁某些隐藏能力（暂不开放）；
- **问题反馈**：链接到本项目。

### 2024.01.04
- **更好的PDF预览效果**：更换[PDF.js](https://mozilla.github.io/pdf.js/)来加载PDF，可以获得更好的阅读效果，并且支持移动端浏览器加载（此前大部分移动端浏览器会触发下载PDF而不是预览PDF）。

### 2024.01.03
- **Arxiv论文列表混乱**：当某个分类下最新一天的论文数量少于25篇时，会把更早的文章混在当天文章列表中显示出来，通过[PyQuery](https://pyquery.readthedocs.io/en/latest/)实现更精准的html定位解决此问题。

### 2024.01.02
- **[Copy]导致选区混乱**：用户发现，当使用浏览器的页面查找时，如果同时点击[Copy]，那么会导致查找功能的定位混乱，经排查这是copy函数重新进行了区域选择导致，通过先保存原始选区结果后再copy解决了这个问题。

### 2024.01.01
- **开放所有类别**：上周发布时只支持Arxiv上几个类别，然后陆续不少读者申请增加自己想看的类别，于是尝试开放了所有类别，并允许在首页选择显示自己需要的类别；
- **Feed订阅支持**：不少读者有RSS订阅习惯，所以建议增加RSS链接，目前已经补充上去，但用的不是RSS格式而是更标准的Atom格式（几乎所有订阅器都同时支持两种格式）；
- **Markdown解析**：Kimi生成的FAQ一定程度上是Markdown格式的，对它进行解析可以有更好阅读体验；
- **点击次数显示**：[PDF]和[Kimi]后面多了一个数字，分别代表着两个按钮的点击次数，一定程度上代表了这篇论文的受欢迎程度
- **其他细节优化**：如移动端效果优化，[Kimi]稳定性优化、出错时的交互优化等。

## 交流
QQ交流群：67729435，微信群请加机器人微信号spaces_ac_cn
