import { convert } from 'html-to-text'

export function extractText(html, length = 80, more = '...') {
  const text = convert(html, {
    selectors: [
      { selector: 'img', format: 'skip' },
      { selector: 'a', options: { ignoreHref: true } },
    ],
  })
  // 第二引数まであるときは、この場合0~length目での値を取り出す。そして、新しく配列に格納する
  return text.slice(0, length) + more
}
