import styled from 'styled-components'

export const Containner = styled.div`
  width: 87%;
  margin: 0 auto;
`
export const ArticlesOfContainner = styled.div`
  width: 100%;
  border: 2px solid #000;
  @media (min-width: 680px) {
    flex-wrap: wrap;
    display: flex;
  }
`

export const ArticleInsideContainner = styled.div`
  width: 80%;
  margin: 0 auto;
`
