
type ImageProp = {
  file: string,
  alt: string,
  width: string,
  className?: string
}

function Image(props: ImageProp) {

  const { file, alt, width, className } = props

  return (
    <img src={require(`../../assets/${file}`)} alt={alt} style={{ width: width }} className={`img-border shadow-1 ${className}`} />
  );
}

export default Image;