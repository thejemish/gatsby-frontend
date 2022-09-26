import React from "react"
import Layout from "../components/layout"
import HeroCarousel from "../components/herocarousel"
import Services from "../components/services"

// CSS
import "../styles/index.scss"

const IndexPage = () => (
  <Layout>
    <HeroCarousel />
    <Services />
  </Layout>
)

export default IndexPage
