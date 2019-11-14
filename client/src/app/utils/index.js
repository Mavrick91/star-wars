// @flow

import * as C from 'app/constantes'
import * as React from 'react'
import type { RouterHistory } from 'react-router-dom'
import { Image, Name, Wrapper } from './utils.styled'

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

  return { category, value, indexCategory }
}

export function getImageWithName(
  history: RouterHistory,
  category: string,
  value: string,
  url: string,
): Promise<any> {
  return import(`app/resources/images/${category}/${value}.png`).then(res => {
    const id: RegExp$matchResult | null = url.match(/\d+/)

    return (
      <Wrapper key={value}>
        <Image
          src={res.default}
          alt={`${value} ${category}`}
          onClick={() => history.push(`/${category}/${id ? id[0] : 1}`)}
        />
        <Name>{value}</Name>
      </Wrapper>
    )
  })
}
