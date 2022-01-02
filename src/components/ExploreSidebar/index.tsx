import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import Button from 'components/Button'
import Checkbox from 'components/Checkbox'
import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'
import Radio from 'components/Radio'
import { useState } from 'react'
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

type Values = {
  [field: string]: boolean | string
}

export type ExploreSidebarProps = {
  items: ItemProps[]
  initialValues?: Values
  onFilter: (values: Values) => void
}

type InputElementProps = {
  color: 'black' | 'white'
}

const ExploreSidebar = ({
  items,
  initialValues = {},
  onFilter
}: ExploreSidebarProps) => {
  const [values, setValues] = useState(initialValues)
  const [isOpen, setIsOpen] = useState(false)

  const handleFilter = (): void => {
    onFilter(values)
  }

  const handleChange = (name: string, value: string | boolean): void => {
    setValues((prevValues) => ({ ...prevValues, [name]: value }))
  }

  const renderInputElements = ({
    color
  }: InputElementProps): React.ReactElement => {
    return (
      <S.InputWrapper>
        {items.map((item) => (
          <S.ExploreBox key={item.title}>
            <Heading
              color={color}
              lineBottom
              lineColor="secondary"
              size="small"
            >
              {item.title}
            </Heading>

            {item.type === 'checkbox' &&
              item.fields.map((field) => (
                <Checkbox
                  name={field.name}
                  label={field.label}
                  labelFor={field.name}
                  key={field.name}
                  labelColor={color}
                  isChecked={!!values[field.name]}
                  onCheck={(value) => handleChange(field.name, value)}
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
                  labelColor={color}
                  key={field.name}
                  defaultChecked={field.name === values[item.name]}
                  onChange={() => handleChange(item.name, field.name)}
                />
              ))}
          </S.ExploreBox>
        ))}

        <Button fullWidth size="medium" onClick={handleFilter}>
          Filter
        </Button>
      </S.InputWrapper>
    )
  }

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Filter" />
        </S.IconWrapper>
      </MediaMatch>

      <MediaMatch greaterThan="medium">
        {renderInputElements({ color: 'white' })}
      </MediaMatch>

      <S.FilterFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Filter" onClick={() => setIsOpen(false)} />
        {renderInputElements({ color: 'black' })}
      </S.FilterFull>
    </S.Wrapper>
  )
}

export default ExploreSidebar
