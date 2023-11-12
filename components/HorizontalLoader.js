import React from "react"
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"

const HorizontalLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={476}
    height={222}
    viewBox="0 0 476 222"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <Rect x="55" y="10" rx="3" ry="3" width="88" height="6" /> 
    <Rect x="55" y="28" rx="3" ry="3" width="52" height="6" /> 
    <Rect x="16" y="74" rx="3" ry="3" width="209" height="3" /> 
    <Rect x="16" y="59" rx="3" ry="3" width="207" height="3" /> 
    <Rect x="14" y="85" rx="3" ry="3" width="178" height="6" /> 
    <Circle cx="27" cy="22" r="20" /> 
    <Rect x="297" y="9" rx="3" ry="3" width="88" height="6" /> 
    <Rect x="297" y="27" rx="3" ry="3" width="52" height="6" /> 
    <Rect x="258" y="73" rx="3" ry="3" width="209" height="3" /> 
    <Rect x="258" y="58" rx="3" ry="3" width="207" height="3" /> 
    <Rect x="256" y="84" rx="3" ry="3" width="178" height="6" /> 
    <Circle cx="269" cy="21" r="20" />
  </ContentLoader>
)

export default HorizontalLoader;

