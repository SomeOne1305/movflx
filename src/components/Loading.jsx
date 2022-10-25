import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={340}
    height={403}
    viewBox="0 0 340 403"
    backgroundColor="#bababa"
    foregroundColor="#f6f4f4"
    {...props}
  >
    <rect x="139" y="12" rx="0" ry="0" width="141" height="137" /> 
    <rect x="140" y="155" rx="0" ry="0" width="55" height="11" /> 
    <rect x="254" y="155" rx="0" ry="0" width="25" height="11" /> 
    <rect x="141" y="170" rx="0" ry="0" width="137" height="21" />
  </ContentLoader>
)

export default MyLoader

