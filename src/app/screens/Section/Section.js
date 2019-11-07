// @flow
import CustomReactPaginate from 'app/components/CustomReactPaginate'
import CustomLoader from 'app/components/Loader/index'
import MainButton from 'app/components/MainButton'
import SearchInput from 'app/components/SearchInput'
import arrowLeft from 'app/resources/svg/arrow left black.svg'
import arrowRight from 'app/resources/svg/arrow right black.svg'
import { getCategoryAndValue, getImageWithName } from 'app/utils'
import * as React from 'react'
import type { RouterHistory } from 'react-router-dom'
import { Wrapper, WrapperSection } from './Section.styled'

type Props = {
  isLoading: boolean,
  isNewCategory: boolean,
  data: ?SectionType,
  loadPreviousOrNext: Function,
  history: RouterHistory,
  allSectionsItems: {},
}

function Section({
  data,
  allSectionsItems,
  isLoading,
  loadPreviousOrNext,
  history,
  isNewCategory,
}: Props) {
  const [listItems, setListItems] = React.useState(null)
  const sectionResult = ((data || {}).section || {}).results || []

  const getContentToDisplay = React.useCallback(() => {
    const map: Array<Promise<any>> = sectionResult.map(({ url }) => {
      const { category, value } = getCategoryAndValue(url)

      return getImageWithName(history, category, value, url)
    })

    Promise.all(map).then((newList: Array<React.Node>) => {
      setListItems(newList)
    })
  }, [history, sectionResult])

  React.useEffect(() => {
    if (sectionResult.length !== 0) getContentToDisplay()
    return () => {
      setListItems(null)
    }
  }, [getContentToDisplay, sectionResult])

  function getArrowNode(icon) {
    return (
      <MainButton size="md">
        <img src={icon} alt="" />
      </MainButton>
    )
  }

  return (
    <Wrapper>
      {!isNewCategory && data && data.section.count > 10 && (
        <SearchInput data={allSectionsItems} />
      )}
      {isLoading ? <CustomLoader /> : <WrapperSection>{listItems}</WrapperSection>}
      {!isNewCategory && data && data.section.count > 10 && (
        <CustomReactPaginate
          pageCount={Math.ceil(data.section.count / 10)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          onPageChange={({ selected }) => loadPreviousOrNext(selected + 1)}
          pageClassName="page"
          previousLabel={getArrowNode(arrowLeft)}
          nextLabel={getArrowNode(arrowRight)}
        />
      )}
    </Wrapper>
  )
}

export default Section
