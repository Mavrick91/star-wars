import React from 'react'
import { getCategoryAndValue } from '..'

export default function useImport(url) {
  const [image, setImage] = React.useState(null)
  const [realValue, setRealValue] = React.useState()

  React.useEffect(() => {
    const { category, value } = getCategoryAndValue(url)

    import(`app/resources/images/${category}/${value}.png`).then(res => {
      setRealValue(value)
      setImage(res.default)
    })
  }, [url])

  return [image, realValue]
}
