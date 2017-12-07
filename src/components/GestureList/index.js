import React from 'react';

const GestureList = ({gestureObj}) => {
  // make <li>xxx</li>
  var list = []
  for(let key in gestureObj){
    let gesture = gestureObj[key];
    list.push(
      <li className="list-group-item" key={gesture.id}>
        <div className="row" >
          <div className="col-3 text-muted">id.{`${gesture.id}`}</div>
          <div className="col-5">{`${gesture.name}`}</div>
          <div className="col-3">
            {(gesture.status == "done")?<span className="badge badge-success ">Done!</span>:null}
          </div>
        </div>
      </li>
    );
  }

  return (
    <div className="card">
      <div className="card-header h3">Gestures</div>
      <ul className="list-group list-group-flush">
        {list}
      </ul>
    </div>
  )
}
export default GestureList;


//console.log("gestureObj@GestureList:", gestureObj)
