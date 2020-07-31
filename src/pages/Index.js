import React from "react";
import { connect } from "react-redux";
import * as ACTIONS from "../store/actions/countActions";

function Index(props) {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={props.onInc}>Increment</button>
      <p>{props.count}</p>
      <button onClick={props.onDec}>Decrement</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInc: () => dispatch(ACTIONS.incCount()),
    onDec: () => dispatch(ACTIONS.decCount()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
