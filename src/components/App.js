import React, { useReducer } from 'react';
import reducer, { initialState } from '.././reducers/index';
import './App.css';
import * as actions from '.././actions/index';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

function App() {

  const [ state, dispatch ] = useReducer(reducer, initialState);

  const handleAddOne = (evt) => {
    dispatch(actions.addOne());
  }

  const handleApplyNumber = (evt) => {
    console.log(actions.applyNumber(evt.target.value));
    dispatch(actions.applyNumber(Number(evt.target.value)));
  }

  const handleChangeOperation = (evt) => {
    dispatch(actions.changeOperation(evt.target.value));
  }

  const handleClearDisplay = () => {
    dispatch(actions.clearDisplay());
  }

  const handleMemoryUpdate = () => {
    dispatch(actions.updateMemory());
  }

  const handleMemoryRecall = () => {
    dispatch(actions.memoryRecall());
  }

  const handleClearMemory = () => {
    dispatch(actions.clearMemory());
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={handleMemoryUpdate}/>
              <CalcButton value={"MR"} onClick={handleMemoryRecall}/>
              <CalcButton value={"MC"} onClick={handleClearMemory}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={handleApplyNumber} />
              <CalcButton value={2} onClick={handleApplyNumber}/>
              <CalcButton value={3} onClick={handleApplyNumber}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={handleApplyNumber}/>
              <CalcButton value={5} onClick={handleApplyNumber}/>
              <CalcButton value={6} onClick={handleApplyNumber}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={handleApplyNumber}/>
              <CalcButton value={8} onClick={handleApplyNumber}/>
              <CalcButton value={9} onClick={handleApplyNumber}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={handleChangeOperation}/>
              <CalcButton value={"*"} onClick={handleChangeOperation}/>
              <CalcButton value={"-"} onClick={handleChangeOperation}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClearDisplay}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
