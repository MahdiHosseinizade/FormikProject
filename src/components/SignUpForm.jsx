import { useState } from "react";


const SignUpForm = () => {
    
    const [userData,setUserData] = useState({
        name:"",
        email:"",
        password :""
    })


    const changeHandler = (e) =>{
        const value = e.target.value;
        setUserData({...userData,[e.target.name]: value});
    }


    const submitHandler = (e) =>{
        e.preventDefault()
        setUserData()
    }


    return (
        <form onSubmit={submitHandler}>
                <div className="formControl">
                    <label>name</label>
                    <input type="text" name="name" value={userData.name} onChange={changeHandler}/>
                </div>
                <div className="formControl">
                    <label>email</label>
                    <input type="text" name="email" value={userData.email} onChange={changeHandler}/>
                </div>
                <div className="formControl">
                    <label>Password</label>
                    <input type="text" name="password" value={userData.password} onChange={changeHandler}/>
                </div>
                <button>Submit</button>
        </form>
    );
}
 
export default SignUpForm;

// 1.managin state
// 2.handling from submition
// 3.validation