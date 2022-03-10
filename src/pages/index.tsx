import HomeCoaches from '../components/HomeCoaches'
import HomeContact from '../components/HomeContact'
import HomeHero from '../components/HomeHero'
import HomeMarshall from '../components/HomeMarshall'
import HomePromise from '../components/HomePromise'
import HomeResults from '../components/HomeResults'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

const IndexPage = () => {
  return (
    <Layout homeNav>
      <Seo noSuffix />
      <HomeHero />
      <HomeCoaches />
      <HomePromise />
      <HomeMarshall />
      <HomeResults />
      <HomeContact />
    </Layout>
  )
}

export default IndexPage
