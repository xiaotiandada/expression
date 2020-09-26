const cheerio = require('cheerio')
const puppeteer = require('puppeteer')

const browserDom = async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    // 优化
    await page.setRequestInterception(true)
    page.on('request', interceptedRequest => {
        if(
            ['image', 'stylesheet', 'font'].includes(interceptedRequest.resourceType()) ||
            interceptedRequest.url().endsWith('.png') ||
            interceptedRequest.url().endsWith('.jpg') ||
            interceptedRequest.url().endsWith('.svg') ||
            interceptedRequest.url().endsWith('.gif')
        ) {
            return interceptedRequest.abort()
        }
        return interceptedRequest.continue()
    })
    await page.goto('https://huaban.com/search/?q=cosplay')
    const waterfall = await page.evaluate(() => document.querySelector('#waterfall').innerHTML)
    await browser.close()
    return waterfall
}

const domResult = (html) => {
    if (!html) return
    const $ = cheerio.load(html)
    let arr = []
    $('.pin.wfc.qudit').each((i, el) => {
        let img = $(el).find('a.img img').attr('src')
        let title = $(el).find('.description').text()
        arr.push({
            title: title,
            url: (img.toString()).replace(/\/\//g, 'https://')
        })
    })
    return arr
}

const init = async () => {
    let html = await browserDom()
    return await domResult(html)
}

module.exports = init