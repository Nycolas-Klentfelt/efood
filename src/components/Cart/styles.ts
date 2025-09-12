import styled from 'styled-components'
import { cores } from '../../styles'

import lixeira from '../../assets/images/lixeira.png'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const SideBar = styled.aside`
  background-color: ${cores.salmao};
  max-width: 360px;
  width: 100%;
  padding: 32px 8px 0 8px;
  z-index: 1;
  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`

export const CartItem = styled.li`
  background-color: ${cores.branco2};
  padding: 8px;
  display: flex;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    margin-right: 8px;
    object-fit: cover;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  span {
    font-size: 14px;
    font-weight: 400;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const Prices = styled.p`
  color: ${cores.branco};
  display: flex;
  justify-content: space-between;
  padding: 40px 0 16px 0;
`
