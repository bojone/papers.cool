# Cool Papers

Immersive Paper Discovery（沉浸式刷论文！）

这里记录Cool Papers的更新日志，并且收集用户的反馈和建议。

## 链接
- **Cool Papers**: [https://papers.cool](https://papers.cool)
- **Kimi Chat**: [https://kimi.moonshot.cn](https://kimi.moonshot.cn/?ref=papers.cool)
- **科学空间博客**: [https://kexue.fm](https://kexue.fm)

## 更新

### 2024.01.01
- **开放所有类别**：上周发布时只支持Arxiv上几个类别，然后陆续不少读者申请增加自己想看的类别，于是尝试开放了所有类别，并允许在首页选择显示自己需要的类别；
- **Feed订阅支持**：不少读者有RSS订阅习惯，所以建议增加RSS链接，目前已经补充上去，但用的不是RSS格式而是更标准的Atom格式（几乎所有订阅器都同时支持两种格式）；
- **Markdown解析**：Kimi生成的FAQ一定程度上是Markdown格式的，对它进行解析可以有更好阅读体验；
- **点击次数显示**：[PDF]和[Kimi]后面多了一个数字，分别代表着两个按钮的点击次数，一定程度上代表了这篇论文的受欢迎程度
- **其他细节优化**：如移动端效果优化，[Kimi]稳定性优化、出错时的交互优化等。

### 2024.01.02
- **[Copy]导致选区混乱**：用户发现，当使用浏览器的页面查找时，如果同时点击[Copy]，那么会导致查找功能的定位混乱，经排查这是copy函数重新进行了区域选择导致，通过先保存原始选区结果后再copy解决了这个问题。

### 2024.01.03
- **Arxiv论文列表混乱**：当某个分类下最新一天的论文数量少于25篇时，会把更早的文章混在当天文章列表中显示出来，通过[PyQuery](https://pyquery.readthedocs.io/en/latest/)实现更精准的html定位解决此问题。

### 2024.01.04
- **更好的PDF预览效果**：更换[PDF.js](https://mozilla.github.io/pdf.js/)来加载PDF，可以获得更好的阅读效果，并且支持移动端浏览器加载（此前大部分移动端浏览器会触发下载PDF而不是预览PDF）。

## 交流
QQ交流群：808623966，微信群请加机器人微信号spaces_ac_cn
