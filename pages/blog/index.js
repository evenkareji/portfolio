import Hero from 'components/Hero'
import styled from 'styled-components'
import Image from 'next/image'
import eyecatch from 'images/about.jpg'
import Meta from 'components/Meta'
export default function About() {
  return (
    <>
      <Meta pageTitle="About" />
      <Hero title="About" subtitle="自己紹介" imageOn />
      <figure>
        <Image
          src={eyecatch}
          alt=""
          layout="responsive"
          priority
          placeholder="blur"
        />
      </figure>
    </>
  )
}
