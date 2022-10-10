import Logo from './FooterLogo'
import styled from 'styled-components'
import Social from './Social'
const FooterBackGround = styled.footer`
  background: #000;
  display: flex;
  align-items: center;
  li {
    margin-left: 12px;
  }
`
export default function Footer() {
  return (
    <FooterBackGround>
      <Logo />
      <Social />
    </FooterBackGround>
  )
}
