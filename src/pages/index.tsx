import HomeCoaches from '../components/HomeCoaches'
import HomeHero from '../components/HomeHero'
import HomePromise from '../components/HomePromise'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

const IndexPage = () => {
  return (
    <Layout>
      <Seo noSuffix />
      <HomeHero />
      <HomeCoaches />
      <HomePromise />
    </Layout>
  )
}

export default IndexPage
