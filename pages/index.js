import Hero from 'components/Hero'
import styled from 'styled-components'
import ExampleArts from 'components/ExampleArts'
import Meta from '../components/Meta'
export default function Home() {
  return (
    <>
      <Meta pageTitle="ブログ" />
      <Hero title="作品" subtitle="アウトプットしていくサイト" />
      <ExampleArts />
    </>
  )
}
