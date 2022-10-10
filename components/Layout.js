import Header from './Header'
import Footer from './Footer'
import { Containner } from '../pages/styles'
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Containner>
        <main>{children}</main>
      </Containner>
      <Footer />
    </>
  )
}
