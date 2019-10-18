import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import Peoples from './Peoples'

const PEOPLES_QUERY = gql`
  query Peoples($page: Int) {
    peoples(page: $page) {
      next
      results {
        name
      }
    }
  }
`

function ContainerPeoples() {
  // const { loading, data, error, fetchMore } = useQuery(PEOPLES_QUERY)

  function updateQuery(prev, { fetchMoreResult }) {
    return {
      peoples: {
        ...prev.peoples,
        next: fetchMoreResult.peoples.next,
        results: [...prev.peoples.results, ...fetchMoreResult.peoples.results],
      },
    }
  }

  // if (loading) return null
  // if (error) {
  //   console.log('error', error)
  //   return <div>Error</div>
  // }

  // if (data.peoples.next) {
  //   const url = new URL(data.peoples.next)
  //   const page = parseInt(url.searchParams.get('page'), 10)
  //   fetchMore({
  //     variables: { page },
  //     updateQuery,
  //   })
  //   return null
  // }

  return <Peoples />
}

export default ContainerPeoples
