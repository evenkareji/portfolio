import styled from 'styled-components'
import Link from 'next/link'
const ulFlex = styled.ul`
  width: 50px;
`
export default function PostCategories({ categories }) {
  return (
    <ulFlex>
      {categories.map(({ name, slug }) => (
        <li key={slug}>
          <Link href={`/blog/category/${slug}`}>
            <a>{name}</a>
          </Link>
        </li>
      ))}
    </ulFlex>
  )
}
