// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function nextId(array: any[]) {
  return array.length ? Math.max(...array.map((item) => item.id)) +1 : 0
}