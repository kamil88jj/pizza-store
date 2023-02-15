import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
<ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
>
<circle cx="136" cy="131" r="118" /> 
    <rect x="238" y="280" rx="0" ry="0" width="0" height="1" /> 
    <rect x="3" y="258" rx="10" ry="10" width="266" height="23" /> 
    <rect x="1" y="291" rx="11" ry="11" width="274" height="88" /> 
    <rect x="9" y="405" rx="9" ry="9" width="90" height="27" /> 
    <rect x="148" y="395" rx="30" ry="30" width="130" height="50" />
</ContentLoader>
)

export default Skeleton
