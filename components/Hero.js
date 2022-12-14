import styled from 'styled-components'

export default function Hero({ title, subtitle, imageOn = false }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  )
}
