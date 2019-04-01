/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { ThemeProvider } from "styled-components"
import PropTypes from "prop-types"
import "./layout.css"

const blue = "#07c"
const lightgray = "#f6f6ff"

const theme = {
  fontSizes: [12, 14, 16, 24, 32, 48, 64],
  colors: {
    blue,
    lightgray,
  },
  buttons: {
    primary: {
      color: "#fff",
      backgroundColor: blue,
    },
    outline: {
      color: blue,
      backgroundColor: "transparent",
      boxShadow: "inset 0 0 2px",
    },
  },
}

const Layout = ({ children }) => (
  <div theme={theme}>{children}</div>
  // <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
