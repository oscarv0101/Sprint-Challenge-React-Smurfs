import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      redirect: false
    };
  }

  addSmurf = event => {
    event.preventDefault();
    let {name, age, height} =this.state
    // add code to create the smurf using the api
    axios
      .post(`http://localhost:3333/smurfs`, this.state)
      .then(response => {
        this.props.sendFormData(response.data)
        this.setState({ redirect: true })
      })
      .catch(error => {
        console.error('Server Error', error)
      })

    this.setState({
      name: '',
      age: '',
      height: '',
      redirect: true
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if(this.state.redirect) {
      return <Redirect push to='/' />
    }
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button className="button" type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
