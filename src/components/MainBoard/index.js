import React from 'react';


const MainBoard = ({gesture, onSession}) => {
  console.log("gesture@MainBoard", gesture);
  const link_img = gesture.img ? (
    <div className="col-4">
      <img src={gesture.img} width="100%" />
    </div>
  ): null;
  // console.log(img_url);
  return (
    <div className="jumbotron jumbotron-fluid">
    {
      onSession ?
        <div className="container row">
          <div className="col">
            <h1 className="display-1 text-center">{gesture.name}</h1>
            <hr className="my-4" />
            <p className="lead text-center">上に表示されるジェスチャを行ってください</p>
          </div>
          {link_img}
        </div>
      :
        <div className="container row">
          <div className="col-12">
            <h1 className="display-4 text-center">Start new session</h1>
            <hr className="my-4" />
            <p className="lead text-center">下のボタンをクリックして開始</p>
          </div>
        </div>
    }
    </div>
  )
}
export default MainBoard;
