import React from 'react';




class Signin extends React.Component {
    constructor(onRouteChange) {
      super(onRouteChange);
      this.state = {
        password: ''
      }
    }

    // logRickIn = () => {
    //   if (this.state.password === 'password') {
    //     this.props.onRouteChange('home');
    //   }
    // }


    onSubmitSignIn = () => {
      fetch('http://localhost:3000/signin', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          password: this.state.password
        })
      })
        .then(response => {
          if (response === 'true') {
            this.props.onRouteChange('home');
          }
        })
  }

    onPasswordChange = (event) => {
      this.setState({password: event.target.value})
      console.log(this.state.password);
    }

    render() {
    return (
  <article className="br3 ba b--black-10 mv1 w-100 w-50-m w-25-1 mw6 shadow-5 center">
        <main className="pa4 black-80">
  <div className="measure">
    <fieldset id="sign_in" className="ba b--transparent ph0 mh0">
      <legend className="f1 fw6 ph0 mh0 center">Sign In</legend>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input 
        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="password" 
        name="password"  
        id="password"
        onChange={this.onPasswordChange} />
      </div>
    </fieldset>
    <div className="">
      <input 
      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
      type="submit" 
      value="Sign in" 
      onClick={this.onSubmitSignIn}
      />
    </div>
  </div>
</main> 
</article>    
    );
  }
}

export default Signin;