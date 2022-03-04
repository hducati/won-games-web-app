import { gql } from '@apollo/client'
import { BannerFragment } from 'graphql/fragments/banner'
import { GameFragment } from 'graphql/fragments/game'
import { HighlightFragment } from 'graphql/fragments/highlight'

export const QUERY_HOME = gql`
  query QueryHome {
    banners {
      ...BannerFragment
    }

    newGames: games(
      where: { release_date_lte: "2022-03-01" }
      sort: "release_date:desc"
      limit: 8
    ) {
      ...GameFragment
    }
  }

  ${BannerFragment}
  ${GameFragment}
`
