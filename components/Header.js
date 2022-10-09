import Logo from 'components/logo'
import { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
const HeaderBox = styled.header`
  background-color: #000;
  position: relative;
  top: 0px;
  left: 0px;
  border: 2px solid #000;
`
const NavBox = styled.nav`
  ul {
    position: absolute;
    margin: 0;
    padding-top: 50px;
    padding-bottom: 100px;
    display: ${({ boolState }) => (boolState ? 'block' : 'none')};
    background: #fff;
    text-decoration: none;
    list-style: none;

    border-bottom: 2px solid #000;
    border-right: 2px solid #000;
  }
  li {
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 30px;
  }
  a {
    color: #000;
    font-size: 16px;
  }
  a:hover {
    color: #ddd;
  }
`
const HumbergerCloseButton = styled.button`
  position: absolute;
  top: 30px;
  left: 30px;
  z-index: 30;
  display: ${({ boolState }) => (boolState ? 'block' : 'none')};
`
const HumbergerOpenButton = styled.button`
  position: absolute;
  top: 30px;
  left: 30px;
`
export default function Header() {
  const [boolState, setBoolState] = useState(false)

  const onClick = () => {
    setBoolState((prev) => !prev)
  }
  return (
    <HeaderBox>
      <NavBox boolState={boolState}>
        <HumbergerOpenButton onClick={onClick}>MENU</HumbergerOpenButton>
        <HumbergerCloseButton onClick={onClick} boolState={boolState}>
          close
        </HumbergerCloseButton>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </NavBox>
      <Logo />
    </HeaderBox>
  )
}
