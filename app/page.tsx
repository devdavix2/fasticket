import { Layout } from "./layout"
import { Hero } from "./components/hero"
import { Categories } from "./components/categories"
import { FeaturedEvents } from "./components/featured-events"
import { Testimonials } from "./components/testimonials"
import { Newsletter } from "./components/newsletter"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Categories />
      <FeaturedEvents />
      <Testimonials />
      <Newsletter />
    </Layout>
  )
}

