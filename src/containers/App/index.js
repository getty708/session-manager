import React, {Component} from 'react'
// My container
import {Main, Header, Sidebar,} from '../';

export default class App extends Component{
  render() {
    return (
      <div className="container-fluid" >
        <Header />
        <div className="row mt-5 pt-3">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-9">
            <Main />
          </div>
        </div>
      </div>
    )
  }
}
