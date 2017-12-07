import React from 'react';


const MainBoard = ({gesture, onSession}) => {
  console.log("gesture@MainBoard", gesture)
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        {
          onSession ?
            <h1 className="display-1 text-center">{gesture.name}</h1>
          :
            <h4 className="display-4 text-center">Start new session</h4>
        }
        <hr className="my-4" />
        {
          onSession ?
            <p className="lead text-center">上に表示されるジェスチャを行ってください</p>
          :
            <p className="lead text-center">下のボタンをクリックして開始</p>
        }
      </div>
    </div>
  )
}
export default MainBoard;
