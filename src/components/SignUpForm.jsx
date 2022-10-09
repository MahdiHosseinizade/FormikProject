import { useFormik } from "formik";

const value = {
    name:"",
    email:"",
    password:""
};

const validates = (value) =>{
    let errors = {};
    if (!value.name) errors.name = 'name is Requierd'
    if (!value.email) errors.email = 'email is Requierd'
    if (!value.password) errors.password = 'password is Requierd'
    
    return errors ;
}

const SignUpForm = () => {

    const formik = useFormik({
        initialValues : value ,
        onSubmit : (values) => console.log(values), 
        validate :validates
    })  
    

    return (
        <form onSubmit={formik.handleSubmit}>
                <div className="formControl">
                    <label>name</label>
                    <input 
                        type="text"
                        name="name"
                        value={formik.values.name} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.errors.name && formik.touched.name && <div className="error">{formik.errors.name}</div>}
                </div>
                <div className="formControl">
                    <label>email</label>
                    <input
                        type="text" 
                        name="email" 
                        value={formik.values.email} 
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.email && formik.touched.email && <div className="error">{formik.errors.email}</div>}
                </div>
                <div className="formControl">
                    <label>Password</label>
                    <input 
                        type="text" 
                        name="password" 
                        value={formik.values.password} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.errors.password && formik.touched.password && <div className="error">{formik.errors.password}</div>}
                </div>
                <button  type="submit">Submit</button>
        </form>
    );
}
 
export default SignUpForm;

// 1.managin state
// 2.handling from submition
// 3.validation