import React, { Component } from 'react';

class StatesCapital extends Component {
  constructor(props){
    super(props);
    this.coluna1 = props.wfCapitalList.slice(0, 5);
    this.coluna2 = props.wfCapitalList.slice(5, 10);
  }
  render(){
    return (
      <div class="wf-capitals">
        <h2 class="wf-capitals__title">Capitais</h2>
        <div class="wf-capitals__box">

          <div class="wf-capitals__list">
            <div class="wf-capitals__header-list">
              <div>Min</div> 
              <div>Max</div>
            </div>
            {this.coluna1.map((item) => {
              return (
                <div class="wf-capitals__list-item">
                  <div>{item.min}º</div> 
                  <div>{item.max}º</div>
                  <div class="wf-capitals__capital-name">{item.cityName}</div>
                </div>
              );
            })}
          </div>

          <div class="wf-capitals__list">
            <div class="wf-capitals__header-list">
              <div>Min</div> 
              <div>Max</div>
            </div>
            {this.coluna2.map((item) => {
              return (
                <div class="wf-capitals__list-item">
                  <div>{item.min}º</div> 
                  <div>{item.max}º</div>
                  <div class="wf-capitals__capital-name">{item.cityName}</div>
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
