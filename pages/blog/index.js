import Hero from 'components/Hero'
import styled from 'styled-components'
import Image from 'next/image'
import eyecatch from 'images/about.jpg'
import Meta from 'components/Meta'
import { getAllPosts } from '../../lib/api'
import { getPlaiceholder } from 'plaiceholder'
import { eyecatchLocal } from '../../lib/constants'
import Posts from '../../components/Posts'
export default function About({ posts }) {
  return (
    <>
      <Meta pageTitle="About" />
      <Hero title="About" subtitle="自己紹介" imageOn />

      <Posts posts={posts} />
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts(4)
  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }
  return {
    props: {
      posts: posts,
    },
  }
}
