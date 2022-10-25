import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={300}
    height={400}
    viewBox="0 0 300 400"
    backgroundColor="#bababa"
    foregroundColor="#f6f4f4"
    border="1px solid red"
    {...props}
  >
    <rect x="139" y="12" rx="0" ry="0" width="400" height="320" /> 
    <rect x="140" y="155" rx="0" ry="0" width="120" height="40" /> 
    <rect x="254" y="155" rx="0" ry="0" width="100" height="40" /> 
    <rect x="141" y="170" rx="0" ry="0" width="200" height="60" />
  </ContentLoader>
)

export default MyLoader

