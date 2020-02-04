import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core'
import './Register.css';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';


class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
        //this.handleChange=this.handleChange.bind(this)
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        return (
            <div className='border'>

                <div className='fundoofont'>
                    <span style={{ color: '#4285F4' }}>F</span>
                    <span style={{ color: '#DB4437' }}>u</span>
                    <span style={{ color: '#F4B400' }}>n</span>
                    <span style={{ color: '#4285F4' }}>d</span>
                    <span style={{ color: '#0F9D58' }}>o</span>
                    <span style={{ color: '#DB4437' }}>o</span>
                </div>
                <p className='text'>Create your Fundoo Account</p>

                <div class="main">

                    <div class="input">
                        <div className='flname'>
                            <TextField
                                classname='firstname'
                                variant='outlined'
                                label='First name'
                                margin='dense'
                                //  value={this.state.name}
                                // onChange={
                                //     (e)=>{
                                //         this.setState({
                                //             name: e.target.value
                                //         })
                                //     }
                                // }
                                onChange={this.handleChange}
                            />
                            <span>

                            </span>
                            <TextField
                                className='lastname'
                                variant='outlined'
                                label='Last name'
                                margin='dense'
                                onChange={this.handleChange}
                            />
                        </div>
                        <br />
                        <br />
                        <div>
                            <TextField
                                className='username'
                                variant='outlined'
                                label='Username'
                                margin='dense'
                                onChange={this.handleChange}
                            />
                            <h1 className='userline'>you can use letters, numbers & periods</h1>
                            <br />
                            <h1 className='usermailline'>Use my current email address instead</h1>
                        </div>
                        <br /><br />

                        <div className='confirmPass'>
                            <TextField
                                className='pass'
                                variant='outlined'
                                label='Password'
                                margin='dense'
                                onChange={this.handleChange}

                            />
                            <span>

                            </span>
                            <TextField
                                className='cpassword'
                                variant='outlined'
                                label='Confirm'
                                margin='dense'
                                onChange={this.handleChange}

                            /></div>
                        <br></br>
                        <h1 className='passline' >Use 8 or more characters with a mix of letters, numbers & symbols</h1>

                        <div className="signbutton">
                            <Button href="#text-buttons" color="primary" >
                                Sign in instead
                            </Button>

                            <Button variant="contained" color="primary" >
                                Next
                            </Button>
                            {/* <span jsslot="" class="CwaK9"><span class="RveJvd snByac">Next</span></span> */}
                            {/* <span class="MuiButton-label" variant="contained" color="primary">Next</span> */}
                        </div>
                    </div>

                    <div>
                        <img className='signimage' src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"
                            width="244" height="244" ></img>
                        <figcaption className='figcaption'>One account. All of Google working for you.</figcaption>
                    </div>
                </div>

                {/* <h1> {this.state.name} </h1> */}
                {/* <Button
                   className='button'
                    color='primary'
                    onClick={()=>alert('Before preceding please check all your details again: ' + this.state.name)}>Next</Button> */}

            </div>

        );
    }
}

export default Register;