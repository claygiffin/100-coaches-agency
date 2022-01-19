import HomeCoaches from '../components/HomeCoaches'
import HomeHero from '../components/HomeHero'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

const IndexPage = () => {
  return (
    <Layout>
      <Seo noSuffix />
      <HomeHero />
      <HomeCoaches />
    </Layout>
  )
}

export default IndexPage
