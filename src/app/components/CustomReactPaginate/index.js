// @flow
/* eslint react/jsx-props-no-spreading: 0 */

import * as React from 'react'
import ReactPaginate from 'react-paginate'
import { Wrapper } from './CustomReactPaginate.styled'

type Props = $Shape<{
  pageCount: number,
  pageRangeDisplayed: number,
  marginPagesDisplayed: number,
  previousLabel?: React.Node,
  nextLabel?: React.Node,
  breakLabel?: React.Node,
  breakClassName?: string,
  breakLinkClassName?: string,
  onPageChange?: Function,
  initialPage?: Number,
  forcePage?: Number,
  disableInitialCallback?: boolean,
  containerClassName?: string,
  pageClassName?: string,
  pageLinkClassName?: string,
  activeClassName?: string,
  activeLinkClassName?: string,
  previousClassName?: string,
  nextClassName?: string,
  previousLinkClassName?: string,
  nextLinkClassName?: string,
  disabledClassName?: string,
  hrefBuilder?: Function,
  extraAriaContext?: string,
  ariaLabelBuilder?: Function,
}>

const CustomReactPaginate = (props: Props) => {
  return (
    <Wrapper>
      <ReactPaginate {...props} />
    </Wrapper>
  )
}

export default CustomReactPaginate
