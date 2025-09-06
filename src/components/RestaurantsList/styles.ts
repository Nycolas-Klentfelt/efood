import styled from 'styled-components'
import { variantProps } from '../Restaurants/styles'

export const List = styled.ul<variantProps>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.variant === 'produto' ? '1fr 1fr 1fr' : '1fr 1fr'};
  column-gap: ${(props) => (props.variant === 'produto' ? '32px' : '80px')};
  row-gap: ${(props) => (props.variant === 'produto' ? '32px' : '48px')};
  margin: ${(props) =>
    props.variant === 'produto' ? '56px 0 120px 0' : '80px 0 120px 0'};
`
