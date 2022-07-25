import "./TextIcon.css"

type TextIconProp = {
  icon: string,
  size: number,
  weight: string
}

function TextIcon(props: TextIconProp) {

  const { icon, size, weight } = props

  return (
    <>
      <div className="text-icon flexbox">
        <div style={{ fontSize: size, fontWeight: weight, color: "white", paddingTop: "2px" }}>{icon}</div>
      </div>
    </>
  );
}

export default TextIcon;