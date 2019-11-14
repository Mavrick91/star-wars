// @flow

import { useQuery } from '@apollo/react-hooks'
import CustomLoader from 'app/components/Loader'
import { DETAILED_SECTION_QUERY } from 'app/graphql/detailedSection.graphql'
import { startCase } from 'lodash'
import moment from 'moment'
import React from 'react'
import type { ContextRouter } from 'react-router-dom'
import DetailedSection from './DetailedSection'

const ContainerDetailedSection = ({ match }: ContextRouter) => {
  const { params } = match
  const { data, loading, error } = useQuery(DETAILED_SECTION_QUERY, {
    variables: {
      id: parseInt(params.detailedCategoryId, 10),
      category: params.category,
    },
  })

  function getContentTabBar(paramData) {
    return Object.keys(paramData.detailedSection).reduce((acc, key) => {
      if (
        Array.isArray(paramData.detailedSection[key]) &&
        paramData.detailedSection[key].length !== 0
      )
        acc[key] = paramData.detailedSection[key]

      return acc
    }, {})
  }

  function getDescription(paramData) {
    return Object.keys(paramData.detailedSection).reduce((acc, key) => {
      let value = paramData.detailedSection[key]

      if (
        Array.isArray(value) ||
        key === '__typename' ||
        key === 'url' ||
        value === 'N/A' ||
        value === 'unknown'
      )
        return acc

      if (moment(value, moment.ISO_8601).isValid())
        value = moment(value).format('MMMM Do YYYY')

      acc[startCase(key)] = value
      return acc
    }, {})
  }

  if (error) return <div>Error</div>
  if (loading || !data) return <CustomLoader />

  return (
    <DetailedSection
      contentTabBar={getContentTabBar(data)}
      url={data.detailedSection.url}
      description={getDescription(data)}
    />
  )
}

export default ContainerDetailedSection
