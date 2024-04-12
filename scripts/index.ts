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
      keys: menu.flatMap((item) => {
        const split = item.name.toLowerCase().split(' ')

        return split
      })
    })
  }

  fs.writeFileSync('./src/db/search.json', JSON.stringify(items, null, 2))
})()
