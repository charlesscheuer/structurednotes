import React, { Component } from 'react';
import Structured from '../Structured/Structured';
import YC from '../YC/YC';

class Home extends Component {
constructor() {
  super();
  this.state = {
    YC: false,
    nonYield: false,
    Structured: false
  }
}

ycClick() {
    this.setState({
      YC: true,
      noYC: false,
      Structured: false
    });
  }


structuredClick() {
    this.setState({
      Structured: true,
      nonYield: false,
      YC: false
    });
  }

  nonYieldClick() {
    this.setState({
      Structured: false,
      nonYield: true,
      YC: false
    });
  }


render() {
  return (
    <div>
    <h1>Rick's Notes</h1>
    <div class="ph3">
        <a class="f6 link dim br-pill ph3 pv2 mb2 dib white bg-black pa2 ma2" href="#0" onClick={this.ycClick.bind(this)}>Yield Curve Notes</a>
        <a class="f6 link dim br-pill ph3 pv2 mb2 dib white bg-black pa2 ma2" href="#0" onClick={this.nonYieldClick.bind(this)}>Non Yield Curve Notes</a>
        <a class="f6 link dim br-pill ph3 pv2 mb2 dib white bg-black pa2 ma2" href="#0" onClick={this.structuredClick.bind(this)}>Structured Note Descriptions</a>
    </div>
    {this.state.YC ? <YC /> : null}
    {this.state.nonYield ? 
    <div>
      <h1>Non-Yield Curve</h1>
      <iframe width="700" title="nonYC" height="900" frameborder="0" scrolling="no" src="https://onedrive.live.com/embed?resid=9C9F0A950CE786C0%21115&authkey=%21ABfkJQkQTXhvK7A&em=2&wdAllowInteractivity=False&Item='Yield%20Curve'!A1%3AF157&wdHideGridlines=True&wdDownloadButton=True&wdInConfigurator=True"></iframe>
    </div> 
    : null}
    {this.state.Structured ? <Structured /> : null}
    </div>
  );
}
}

export default Home;
