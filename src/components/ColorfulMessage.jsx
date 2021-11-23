import React from "react";

export const ColorfulMessage = (props) => {
  // console.log("カラフル");
  // console.log(props);
  const { color, children } = props;
  const contentStyle = {
    // Reactはスタイルも全てキャメルケースにする（font-size -> fontSize）
    color, //color: color と同じ。同じ名前だと省略可（javascriptでは）
    fontSize: "18px" //javascriptとしてstyleを書くときは、""で囲う。
  };

  // javascriptを入れるときは、{}で囲う
  return <p style={contentStyle}>{children}</p>;
};

// export default ColorfulMessage;
