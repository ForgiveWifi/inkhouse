
type ImageProp = {
  file: string,
  alt: string,
  width: string,
  style?: {}
}

function Image(props: ImageProp) {

  const { file, alt, width, style } = props

  const css = {
    width: width,
    borderRadius: "15px",
    ...style
  }
  return (
    <div className="flexbox black-border" style={{ borderRadius: "15px", boxShadow: "8px 8px #ff6a00"}}>
      <img src={require(`../../assets/${file}`)} alt={alt} style={css} className="shadow2" />
    </div>
  );
}

export default Image;