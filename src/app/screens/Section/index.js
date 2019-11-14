// @flow
import { useQuery } from '@apollo/react-hooks'
import * as C from 'app/constantes'
import { SECTION_QUERY } from 'app/graphql/section.graphql'
import React from 'react'
import type { RouterHistory } from 'react-router-dom'
import Section from './Section'

type MatchType = {
  params: {
    category: string,
  },
}

type Props = {
  history: RouterHistory,
  match: MatchType,
}

type OptionsUpdateType = {
  fetchMoreResult?: SectionType,
  variables: {
    page: number,
    category: string,
  },
}

function ContainerSection({ history, match }: Props) {
  const {
    params: { category },
  }: MatchType = match
  const { loading, data, error, fetchMore, networkStatus } = useQuery(
    SECTION_QUERY,
    {
      notifyOnNetworkStatusChange: true,
      variables: { page: 1, category },
      fetchPolicy: 'cache-and-network',
    },
  )
  const allSectionsItems = C[category]

  function loadPreviousOrNext(page: number) {
    fetchMore({
      variables: { page, category },
      updateQuery: (prev, { fetchMoreResult }: OptionsUpdateType) => {
        if (!fetchMoreResult) return prev

        return { section: fetchMoreResult.section }
      },
    }).then()
  }

  if (error) {
    return <div>Error</div>
  }

  return (
    <Section
      isLoading={loading}
      isNewCategory={networkStatus === 2}
      data={data}
      loadPreviousOrNext={loadPreviousOrNext}
      history={history}
      allSectionsItems={allSectionsItems}
    />
  )
}

export default ContainerSection
