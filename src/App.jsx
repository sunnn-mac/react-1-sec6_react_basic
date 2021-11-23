import React, { useEffect, useState } from "react";
// {}でくくって指定するのは、default exportではない
import { ColorfulMessage } from "./components/ColorfulMessage";
// import ColorfulMessage from "./components/ColorfulMessage";

// 再レンダリング（再度コンポーネントを実行）の条件
//  - stateを変更したとき
//  - propsの中身が変わった場合
//  - 親コンポーネントが再レンダリングされたとき

// 昔は、state使うならクラスコンポーネントが必要だった。関数はpropのみ使用可
//　　今は、関数でstateもpropも使えるから、関数コンポーネントしか使わない
const App = () => {
  console.log("さいしょ");
  // num: 変数　　setNum: 関数名　　　配列の分割代入

  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountup = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);
  //配列にはいった値が変更された時だけ、処理が走る

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountup}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ´Д`)y━･~~</p>}
    </>
  );
};

export default App;
