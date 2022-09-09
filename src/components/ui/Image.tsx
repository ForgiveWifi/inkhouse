
type ImageProp = {
  file: string,
  alt: string,
  width: string,
  shadow?: boolean
  radius?: string 
  className?: string
}

function Image(props: ImageProp) {

  const { file, alt, width, radius, shadow, className } = props

  return (
    <img src={require(`../../assets/${file}`)} alt={alt} style={{ width: width, borderRadius: radius }} className={`img-border ${className} ${!shadow && "shadow-1"}`} />
  );
}

export default Image;