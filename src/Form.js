import React from 'react';
import ReactDOM from 'react-dom';
import { func, string } from 'prop-types';


class Form extends React.Component{
    state = {
        user: ''
    }
    handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            user:value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.passStateToApp(this.state.user);
    }
    
    render(){
            return (
                <div>
                    <form className="form" onSubmit={this.handleSubmit}>
                        <p> Search for repositories by username </p>
                        <p className="errormessage">{this.props.error}</p>                        
                        <input type="text" name="username" placeholder="Username" onChange={this.handleChange} value={this.state.value} />
                        <input className="button" type="submit" name="submit" placeholder="Submit"disabled={this.state.user === ''}/>
                    </form>
                </div>
            )
        }
    }

Form.propTypes = {
    passStateToApp: func.isRequired,
    error: string.isRequired
}
export default Form;