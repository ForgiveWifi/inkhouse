
type ImageProp = {
  file: string,
  alt: string,
  width: string,
  shadow?: boolean
  radius?: string 
  className?: string,
  style?: {}
}

function Image(props: ImageProp) {

  const { file, alt, width, radius, shadow, className, style } = props

  const css = {
    width: width,
    borderRadius: radius,
    ...style
  }
  return (
    <img src={require(`../../assets/${file}`)} alt={alt} style={css} className={`img-border ${className} ${!shadow && "shadow-1"}`} />
  );
}

export default Image;