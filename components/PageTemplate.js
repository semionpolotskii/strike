import React from 'react'
import Header from "../components/Header";

const PageTemplate = ({ children }) => (
  <>
    <Header />
    {children}
  </>
)

export default PageTemplate