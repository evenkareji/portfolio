import Hero from 'components/Hero'
import styled from 'styled-components'
const KK = styled.h1`
  font-size: 80px;
`
export default function Home() {
  return (
    <>
      <KK>Hello</KK>
      <Hero title="作品" subtitle="アウトプットしていくサイト" />
    </>
  )
}
