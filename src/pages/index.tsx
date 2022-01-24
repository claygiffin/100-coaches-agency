import HomeCoaches from '../components/HomeCoaches'
import HomeFormSection from '../components/HomeFormSection'
import HomeHero from '../components/HomeHero'
import HomeMarshall from '../components/HomeMarshall'
import HomePromise from '../components/HomePromise'
import HomeResults from '../components/HomeResults'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

const IndexPage = () => {
  return (
    <Layout>
      <Seo noSuffix />
      <HomeHero />
      <HomeCoaches />
      <HomePromise />
      <HomeMarshall />
      <HomeResults />
      <HomeFormSection />
    </Layout>
  )
}

export default IndexPage
