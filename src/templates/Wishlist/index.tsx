import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'
import { Container } from 'components/Container'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'

import * as S from './styles'

export type WishlistTemplateProps = {
  recommendGames: GameCardProps[]
  recommendHighlight: HighlightProps
}

const Wishlist = ({
  recommendGames,
  recommendHighlight
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>
    </Container>

    <Showcase
      title="You may like these games"
      games={recommendGames}
      highlight={recommendHighlight}
    />
  </Base>
)

export default Wishlist
