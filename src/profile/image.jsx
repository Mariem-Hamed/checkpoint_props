import React from "react";

const Image = (props) => {
  const style = { backgroundColor: "#FAFAFA" };
  return (
    <div style={style}>
      {/* <img src="/avatar.jpg" width={300} width={250}></img> */}
      <br></br>
      <div>{props.children}</div>
    </div>
  );
};

export default Image;
