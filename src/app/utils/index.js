// @flow
/* eslint-disable import/prefer-default-export */

export function isJson(item: any): boolean {
  let tmpItem = typeof item !== 'string' ? JSON.stringify(item) : item

  try {
    tmpItem = JSON.parse(tmpItem)
  } catch (e) {
    return false
  }

  return typeof tmpItem === 'object' && tmpItem !== null
}
