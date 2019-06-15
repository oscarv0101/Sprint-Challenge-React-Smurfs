import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import styled from 'styled-components'

export class NavBar extends Component {
    render() {
        return (
            <div>
                <div className="nav-bar">
                    <NavLink className="nav" to='/'>Home</NavLink>
                    <NavLink  className="nav" to='/smurf-form'>Add Smurf</NavLink>
                </div>
            </div>
        )
    }
}

