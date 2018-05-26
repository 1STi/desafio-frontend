import React, { Component } from 'react';

class StatesCapital extends Component {
  constructor(props){
    super(props);
    this.coluna1 = props.wfCapitalList.slice(0, 5);
    this.coluna2 = props.wfCapitalList.slice(5, 10);
  }
  render(){
    return (
      <div className="wf-capitals">
        <h2 className="wf-capitals__title">Capitais</h2>
        <div className="wf-capitals__box">

          <div className="wf-capitals__list">
            <div className="wf-capitals__header-list">
              <div>Min</div> 
              <div>Max</div>
            </div>
            {this.coluna1.map((item) => {
              return (
                <div className="wf-capitals__list-item" key={item.cityName}>
                  <div>{item.min}º</div> 
                  <div>{item.max}º</div>
                  <div className="wf-capitals__capital-name">{item.cityName}</div>
                </div>
              );
            })}
          </div>

          <div className="wf-capitals__list">
            <div className="wf-capitals__header-list">
              <div>Min</div> 
              <div>Max</div>
            </div>
            {this.coluna2.map((item) => {
              return (
                <div className="wf-capitals__list-item" key={item.cityName} >
                  <div>{item.min}º</div> 
                  <div>{item.max}º</div>
                  <div className="wf-capitals__capital-name">{item.cityName}</div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    );
  }
}

export default StatesCapital;
