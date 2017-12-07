import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

// Actions
import * as actions from '../../actions'
// Components
import {GestureList} from '../../components'
// constants
import {GESTURE_SET} from '../../constants/settings'



class Sidebar extends React.Component {
  render() {
    const gestureObj = this.props.progress.gestureObj;
    // console.log("Props@Sidebar", this.props);
    // console.log(gestureObj)

    return (
      <div>
        <GestureList gestureObj={gestureObj} />
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

// console.log(store.getState());
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

// export default connect(
//   null,
//   null
// )(Sidebar);
