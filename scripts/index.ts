import fs from 'fs'
import { FoodItem, PartnerInfo, SearchItem } from '../src/types'
;(function () {
  const items: SearchItem[] = []

  const { partners }: { partners: PartnerInfo[] } = JSON.parse(
    fs.readFileSync('./src/db/partners.json', 'utf8')
  )

  for (const p of partners) {
    const menu: FoodItem[] = JSON.parse(fs.readFileSync(`./src/db/${p.products}`, 'utf8'))

    items.push({
      name: p.name,
      keys: [
        p.name.toLowerCase(),
        ...menu.flatMap((item) => {
          const splitName = item.name.toLowerCase().split(/[\s,.]+/)
          const splitDescription = item.description.toLowerCase().split(/[\s,.]+/)

          return [...splitName, ...splitDescription]
        })
      ]
    })
  }
  items.forEach((item) => {
    //remove one word keys
    item.keys = item.keys.filter((key) => key.length > 1)
    //remove duplicates
    item.keys = Array.from(new Set(item.keys))
  })

  fs.writeFileSync('./src/db/search.json', JSON.stringify(items, null, 2))
})()
