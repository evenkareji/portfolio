import Link from 'next/link'
import styled from 'styled-components'
const LogoText = styled.a`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  @media (min-width: 540px) {
    font-size: 35px;
  }
  @media (min-width: 640px) {
    font-size: 38px;
  }
`
export default function Logo() {
  return (
    <Link href="/">
      <LogoText> Halogen Platform</LogoText>
    </Link>
  )
}
