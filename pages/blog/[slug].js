import { getPostBySlug, getAllSlugs } from 'lib/api'
import styled from 'styled-components'
import PostHeader from '../../components/post-header'
import PostBody from 'components/post-body'
import PostCategories from '../../components/post-categories'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import Image from 'next/image'
import ConvertBody from '../../components/Convert-body'
import { extractText } from '../../lib/extra-text'
import Meta from 'components/meta'
import { getPlaiceholder } from 'plaiceholder'
import { eyecatchLocal } from '../../lib/constants'
const ArticleBox = styled.div`
  width: 90%;
`
const CategoriesBox = styled.div`
  width: 10%;
`
const ArticleFlex = styled.article`
  display: flex;
`

export default function Post({
  title,
  publish,
  content,
  eyecatch,
  categories,
  description,
}) {
  return (
    <ArticleFlex>
      <Meta
        pageTitle={title}
        pageDesc={description}
        pageImg={eyecatch.url}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <ArticleBox>
        <PostHeader title={title} subtitle="Blog Article" publish={publish} />
        <figure>
          <Image
            src={eyecatch.url}
            alt=""
            layout="responsive"
            width={eyecatch.width}
            height={eyecatch.height}
            sizes="(min-width:1152px) 1152px, 100vw"
            priority
            placeholder="blur"
            blurDataURL={eyecatch.blurDataURL}
          />
        </figure>
        <PostBody>
          <ConvertBody contentHTML={content} />
        </PostBody>
      </ArticleBox>
      <CategoriesBox>
        <PostCategories categories={categories} />
      </CategoriesBox>
    </ArticleFlex>
  )
}

export async function getStaticPaths() {
  const allSlugs = await getAllSlugs()

  return {
    paths: allSlugs.map(({ slug }) => `/blog/${slug}`),
    // trueはSSRみたいなもの
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const slug = context.params.slug
  const post = await getPostBySlug(slug)

  const description = extractText(post.content)

  const eyecatch = post.eyecatch ?? eyecatchLocal

  const { base64 } = await getPlaiceholder(eyecatch.url)
  eyecatch.blurDataURL = base64
  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: eyecatch,
      categories: post.categories,
      description: description,
    },
  }
}
