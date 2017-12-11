import React from 'react';
// // Actions
// import * as actions from '../../actions';

const NewSessionBtn = ({actions}) => {
  return (
      <div className="col-6 offset-3">
        <button type="button"
          className="btn btn-primary btn-lg btn-block"
          onClick={e => actions.initSession()} >Start New Session</button>
      </div>
  );
}

const BackNextBtns = ({actions, isBack, isNext, isFinish}) => {
  return (
    <div className="row">
      <div className="col-6">
        <button type="button"
          className="btn btn-secondary btn-lg btn-block"
          onClick={e => actions.updateStatus("waiting")} disabled={!isBack} >Back</button>
      </div>
      <div className="col-6">
        {
          isFinish ?
              <button type="button"
                className="btn btn-success btn-lg btn-block"
                onClick={e => actions.finishSession()} >Finish</button>
          :
            <button type="button"
                className="btn btn-primary btn-lg btn-block"
                onClick={e => actions.updateStatus("done")}
                disabled={!isNext}>Next</button>
        }
      </div>
    </div>
  );
}

const ControlPanel = ({actions, isNewSession, isBack, isNext, isFinish}) => {
  // console.log("actions@Control", actions);
  console.log("isNewSession, isBack, isNext, isFinish@Control", isNewSession, isBack, isNext, isFinish);


  return (
    <div className="row">
      { !isNewSession ?
        <NewSessionBtn actions={actions}/>
        :
        <div className="col-12" >
          <BackNextBtns actions={actions} isBack={isBack} isNext={isNext} isFinish={isFinish} />
        </div>
      }
    </div>
  );
}
export default ControlPanel;
