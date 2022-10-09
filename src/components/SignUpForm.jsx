import { useFormik } from "formik";
import * as Yup from 'yup' ;

const value = {
    name:"",
    email:"",
    password:""
}

// const validatesError = (value) => {
//     let errors = {};
//     if(!value.name) errors.name = 'name is Requierd'
//     if(!value.email) errors.email = 'email is Requierd'
//     if(!value.password) errors.password = 'password is Requierd'
//     return errors
// }

const validationschema = Yup.object({
    name : Yup.string().required('Name is Requierd'),
    email : Yup.string().email('Invalid email format').required('email is Requierd'),
    password: Yup.string()
    .required('Password is Requierd') 
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
})

const SignUpForm = () => {
    
    const formik = useFormik({
        initialValues : value,
        onSubmit : (values) => console.log(values),
        validationSchema : validationschema
        })
    // console.log(formik.handleSubmit);
    
    
    

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="fromControl">
                <label>name</label>
                <input 
                    type="text"
                    name="name" 
                    {...formik.getFieldProps('name')}
                />
                {formik.errors.name && formik.touched.name  && <div className="error">{formik.errors.name}</div>}
            </div>
            <div className="fromControl">
                <label>email</label>
                <input 
                    type="text" 
                    name="email" 
                    {...formik.getFieldProps('email')}
                />
                {formik.errors.email && formik.touched.email  && <div className="error">{formik.errors.email}</div>}
            </div>
            <div className="fromControl">
                <label>password</label>
                <input 
                    type="password"
                    name="password" 
                    {...formik.getFieldProps('password')}
                />
                {formik.errors.password && formik.touched.password  && <div className="error">{formik.errors.password}</div>}
            </div>
            <button className="submit-button" type="submit">Submit</button>
        </form>
    );
}
 
export default SignUpForm;