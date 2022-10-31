import ContentLoader from 'react-content-loader'

export const Skeleton = () => (
  <div className="pizza-block-wrapper">
    <ContentLoader
      speed={2}
      width={280}
      height={498}
      viewBox="0 0 280 498"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="150" cy="120" r="120" />
      <rect x="12" y="265" rx="10" ry="10" width="280" height="29" />
      <rect x="12" y="315" rx="10" ry="10" width="280" height="88" />
      <rect x="12" y="430" rx="10" ry="10" width="88" height="27" />
      <rect x="130" y="420" rx="30" ry="25" width="150" height="45" />
    </ContentLoader>
  </div>
)
