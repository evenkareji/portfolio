import styled from 'styled-components'
import Social from './Social'
const ContactText = styled.div`
  font-size: 14px;
  font-weight: bold;
`
const ContactAdress = styled.address`
  font-size: 18px;
`

export default function ContactArt() {
  return (
    <>
      <ContactText>Contact</ContactText>
      <Social />
      <ContactAdress>halogen@gmail.com</ContactAdress>
    </>
  )
}
