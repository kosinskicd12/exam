import React from 'react';
import ReactDOM from 'react-dom';


const Form = () => {
    return (
        <div>
            <form className="form" >
                <p> Search for repositories by username </p>
                <input type="text" name="username" placeholder="Username"  />
                <input className="button" type="submit" name="submit" placeholder="Submit" />
                
            </form>
        </div>
    )
}


export default Form;