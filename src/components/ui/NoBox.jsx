function NoBox({text}) {
  return (
    <div className="flexbox radius15 no-wrap" style={{ padding: "8px 30px", marginTop: 0, backgroundColor: "rgba(60, 60, 60, 0.1)"}}>
      {text.toUpperCase()}
    </div>
  );
}

export default NoBox;