import styled from 'styled-components'
import { Props } from '.'
import { cores } from '../../styles'

export type variantProps = Pick<Props, 'variant'>

export const BoxProduct = styled.div<variantProps>`
  width: ${(props) => (props.variant === 'produto' ? '320px' : '472px')};
  max-height: ${(props) => (props.variant === 'produto' ? '338px' : '398px')};
`

export const ImgProduct = styled.div<variantProps>`
  background-color: ${(props) =>
    props.variant === 'produto' ? cores.salmao : 'transparent'};
  width: ${(props) => (props.variant === 'produto' ? '320px' : '100%')};
  position: relative;
  height: ${(props) => (props.variant === 'produto' ? '175px' : '217px')};

  img {
    width: ${(props) => (props.variant === 'produto' ? '304px' : '100%')};
    height: ${(props) => (props.variant === 'produto' ? '167px' : 'auto')};
    margin: ${(props) => (props.variant === 'produto' ? '8px 8px 0 8px' : '0')};
  }
`

export const BoxTag = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Tag = styled.div`
  background-color: ${cores.salmao};
  color: ${cores.branco2};
  padding: 4px 6px;
  font-size: 12px;
  font-weight: 700;
`

export const Infos = styled.div<variantProps>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) =>
    props.variant === 'produto' ? cores.salmao : cores.branco};
  border: 1px solid
    ${(props) => (props.variant === 'produto' ? 'none' : cores.salmao)};
  color: ${(props) =>
    props.variant === 'produto' ? cores.branco2 : cores.salmao};
  border-top: none;
  padding: 8px;
  height: ${(props) => (props.variant === 'produto' ? '163px' : 'auto')};
`

export const BoxTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h2<variantProps>`
  display: flex;
  font-size: ${(props) => (props.variant === 'produto' ? '16px' : '18px')};
  font-weight: bold;
`

export const Rating = styled.span`
  display: flex;
  gap: 8px;
  font-size: 18px;
  font-weight: bold;

  img {
    width: 21px;
    height: 21px;
  }
`

export const Description = styled.p<variantProps>`
  font-size: 14px;
  line-height: 22px;
  margin: ${(props) => (props.variant === 'produto' ? '8px 0' : '16px 0')};
`

export const Button = styled.button<variantProps>`
  width: ${(props) => (props.variant === 'produto' ? '100%' : '82px')};
  background-color: ${(props) =>
    props.variant === 'produto' ? cores.branco2 : cores.salmao};
  color: ${(props) =>
    props.variant === 'produto' ? cores.salmao : cores.branco};
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  border: none;
  padding: 4px 6px;
`
