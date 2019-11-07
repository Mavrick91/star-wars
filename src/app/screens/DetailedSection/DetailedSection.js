// @flow

import TabBar from 'app/components/TabBar'
import useImport from 'app/utils/customHooks/useImport'
import React from 'react'
import {
  ContainerDescription,
  Description,
  Wrapper,
  WrapperDescription,
  WrapperImage,
} from './DetailedSection.styled'

type Props = {
  url: string,
  contentTabBar: {
    [key: string]: Array<string>,
  },
  description: {
    [key: string]: string,
  },
}

const DetailedSection = ({ url, contentTabBar, description }: Props) => {
  const [avatar, nameAvatar] = useImport(url)

  return (
    <Wrapper>
      <WrapperImage>
        <img src={avatar} alt="Avatar character" />
        <span>{nameAvatar}</span>
      </WrapperImage>

      <WrapperDescription>
        <ContainerDescription>
          <div>
            {Object.keys(description).map(key => (
              <Description key={key}>
                <span>{`${key}: `}</span>
              </Description>
            ))}
          </div>
          <div>
            {Object.keys(description).map(key => (
              <Description key={key}>
                <span>{description[key]}</span>
              </Description>
            ))}
          </div>
        </ContainerDescription>
        <TabBar contents={contentTabBar} />
      </WrapperDescription>
    </Wrapper>
  )
}

export default DetailedSection
