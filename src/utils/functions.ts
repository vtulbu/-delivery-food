export function addSpaces(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

export function sortArrayObject<T extends object>(arr: T[], order: 'asc' | 'desc', key: keyof T) {
  return arr.sort((a, b) => {
    if (order === 'asc') {
      return a[key] > b[key] ? 1 : -1
    } else {
      return a[key] < b[key] ? 1 : -1
    }
  })
}
