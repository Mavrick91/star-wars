// @flow

import * as C from 'app/constantes'

export function isJson(item: any): boolean {
  let tmpItem = typeof item !== 'string' ? JSON.stringify(item) : item

  try {
    tmpItem = JSON.parse(tmpItem)
  } catch (e) {
    return false
  }

  return typeof tmpItem === 'object' && tmpItem !== null
}

export function getCategoryAndValue(url: string) {
  const splitUrl = url.split('/')
  const category = splitUrl[4]
  const indexCategory = splitUrl[5]
  const value = C[category][indexCategory]

  return { category, value }
}
