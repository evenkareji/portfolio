import styled from 'styled-components'

const textBorderTitle = styled.div`
  padding: 20px;
  border: solid 2px currentBlue;
  color: darkBlue;
`
const titleH1 = styled.h1`
  font-size: 80px;
`

export default function Hero({ title, subtitle, imageOn = false }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {imageOn && <figure>[画像]</figure>}
    </div>
  )
}
