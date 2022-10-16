import Link from 'next/link'
import Image from 'next/image'

export default function Posts({ posts }) {
  return (
    <div>
      {posts.map(({ title, slug, eyecatch }) => (
        <article key={slug}>
          <Link href={`/blog/${slug}`}>
            <a>
              <figure>
                <Image
                  src={eyecatch.url}
                  alt=""
                  layout="responsive"
                  objectFit="cover"
                  sizes="(min-width:1152px) 576px,50vh"
                  width={eyecatch.width}
                  height={eyecatch.height}
                  placeholder="blur"
                  blurDataURL={eyecatch.blurDataURL}
                />
              </figure>
              <p>{title}</p>
            </a>
          </Link>
        </article>
      ))}
    </div>
  )
}
