import Button from 'components/Button'
import Checkbox from 'components/Checkbox'
import Heading from 'components/Heading'
import Radio from 'components/Radio'
import * as S from './styles'

type Field = {
  label: string
  name: string
}

export type ItemProps = {
  title: string
  name: string
  type: string
  fields: Field[]
}

export type ExploreSidebarProps = {
  items: ItemProps[]
}

const ExploreSidebar = ({ items }: ExploreSidebarProps) => (
  <S.Wrapper>
    {items.map((item) => (
      <div key={item.title}>
        <Heading lineBottom lineColor="secondary" size="small">
          {item.title}
        </Heading>

        {item.type === 'checkbox' &&
          item.fields.map((field) => (
            <Checkbox
              name={field.name}
              label={field.label}
              labelFor={field.name}
              key={field.name}
            />
          ))}

        {item.type === 'radio' &&
          item.fields.map((field) => (
            <Radio
              id={field.name}
              name={item.name}
              value={field.name}
              label={field.label}
              labelFor={field.name}
              key={field.name}
            />
          ))}
      </div>
    ))}
    <Button fullWidth size="medium">
      Filter
    </Button>
  </S.Wrapper>
)

export default ExploreSidebar
