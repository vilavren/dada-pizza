import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={310}
    height={498}
    viewBox="0 0 310 498"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="150" cy="140" r="120" />
    <rect x="12" y="285" rx="10" ry="10" width="280" height="29" />
    <rect x="12" y="330" rx="10" ry="10" width="280" height="88" />
    <rect x="12" y="443" rx="10" ry="10" width="88" height="27" />
    <rect x="130" y="435" rx="30" ry="25" width="150" height="45" />
  </ContentLoader>
)

export default Skeleton
