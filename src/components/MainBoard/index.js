import React from 'react';


const MainBoard = ({gesture, onSession}) => {
  console.log("gesture@MainBoard", gesture);
  const img_url = "./img/"+gesture.id+".jpg";
  // console.log(img_url);
  return (
    <div className="jumbotron jumbotron-fluid">
    {
      onSession ?
        <div className="container row">
          <div className="col-8">
            <h1 className="display-1 text-center">{gesture.name}</h1>
            <hr className="my-4" />
            <p className="lead text-center">上に表示されるジェスチャを行ってください</p>
          </div>
          <div className="col-4">
            <img src={img_url} width="100%" />
          </div>
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
