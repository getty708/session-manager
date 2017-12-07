import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

// Actions
import * as actions from '../../actions'
// components
import {MainBoard, ControlPanel} from '../../components'



class Main extends React.Component {
  render() {
    const gestureObj = this.props.progress.gestureObj;
    const {numGestures, current_gesture, isInit, onSession} = this.props.progress
    const gesture = gestureObj[current_gesture];
    // console.log("gesture@Main",gesture);
    // console.log(current_gesture_no, gestureObj);
    // console.log("actions@Main",this.props.actions);
    // console.log("actions@Main",this.props.actions);
    // Bottonの有効化判定
    const isBack = (isInit && current_gesture > 0) ? true : false;
    const isNext = (isInit && current_gesture < numGestures) ? true : false;
    const isFinish = (isInit && current_gesture === numGestures-1) ? true : false;


    return (
      <div>
        <div className="row" >
          <div className="col-12" >
            <MainBoard gesture={gesture} onSession={onSession} />
          </div>
        </div>
        <div className="row" >
          <div className="col-12" >
            <ControlPanel actions={this.props.actions}
              isNewSession={onSession}
              isBack={isBack} isNext={isNext} isFinish={isFinish} />
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state){
  return {
    progress: state.progress,
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
