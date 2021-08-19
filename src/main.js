const div1 = dom.create("<div>newDiv</div>");

dom.after(test, div1);
const div3 = dom.create('<div id="parent"></div>')
dom.wrap(test, div3)
const nodes = dom.empty(window.empty)
console.log(nodes)

dom.attr(test, 'title', 'imhHz')
const title = dom.attr(test, 'title')
console.log(`title: ${title}`)

dom.style(test, { border: '1px solid red', color: 'blue' })
dom.style(test, 'border', '10px solid red')
dom.style(test, 'border')

dom.class.add(test, 'red')
dom.class.remove(test, 'red')

dom.on(test, 'click', () => {
    console.log('点击了')
})

const testDiv = dom.find('#test')[0]
console.log(testDiv)

const t = dom.find('#travel')[0]
dom.each(dom.children(t), (n) => dom.style(n, 'color', 'red'))

const index = dom.find('#t2')[0]
console.log(dom.index(index))