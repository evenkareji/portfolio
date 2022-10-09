import Link from 'next/link'
import styled from 'styled-components'
const LogoText = styled.a`
  color: #fff;
`
export default function Logo() {
  return (
    <Link href="/">
      <LogoText> Halogen Platform</LogoText>
    </Link>
  )
}
