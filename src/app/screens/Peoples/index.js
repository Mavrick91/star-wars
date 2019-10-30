// @flow
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import React from 'react'
import type { ContextRouter } from 'react-router-dom'
import Peoples from './Peoples'

export type PeoplesType = {
  peoples: {
    previous: string,
    next: string,
    results: Array<{
      name: string,
      url: string,
    }>,
  },
}

type OptionsUpdateType = {
  fetchMoreResult?: PeoplesType,
  variables: {
    page: number,
  },
}

const PEOPLES_QUERY = gql`
  query Peoples($page: Int) {
    peoples(page: $page) {
      next
      previous
      results {
        url
        name
      }
    }
  }
`

function ContainerPeoples({ history }: ContextRouter) {
  const { loading, data, error, fetchMore } = useQuery(PEOPLES_QUERY, {
    notifyOnNetworkStatusChange: true,
  })

  function loadPreviousOrNext(page: number) {
    fetchMore({
      variables: { page },
      updateQuery: (prev, { fetchMoreResult }: OptionsUpdateType) => {
        if (!fetchMoreResult) return prev

        return {
          peoples: {
            ...prev.peoples,
            previous: fetchMoreResult.peoples.previous,
            next: fetchMoreResult.peoples.next,
            results: fetchMoreResult.peoples.results,
          },
        }
      },
    }).then()
  }

  if (error) {
    console.log('error', error)
    return <div>Error</div>
  }

  return (
    <Peoples
      loading={loading}
      data={data}
      loadPreviousOrNext={loadPreviousOrNext}
      history={history}
    />
  )
}

export default ContainerPeoples
