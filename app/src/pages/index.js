import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import StyledSystemButton from "../components/primitives/StyledSystemButton"
import RebassButton from "../components/primitives/RebassButton"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    {/* Styled System as Gatsby Link - OK */}
    <StyledSystemButton as={Link} m={1} color="red" to="/page-2/">
      StyledSystemButton
    </StyledSystemButton>
    {/* Rebass Button as Gatsby Link - Error */}
    <RebassButton as={Link} to="/page-2/" m={1}>
      RebassButton
    </RebassButton>
    {/* Default Gatsby Link */}
    <Link to="/page-2/">Gatsby Link</Link>
  </Layout>
)

export default IndexPage
