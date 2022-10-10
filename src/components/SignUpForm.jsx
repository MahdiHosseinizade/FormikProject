import { useFormik } from "formik";
import * as Yup from 'yup' ;

const value = {
    name:"",
    email:"",
    password:"",
    phoneNumber:"",
    passwordConfrim:""
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
    password: Yup.string().required('phoneNumber is Requierd')
    .required('Password is Requierd') 
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    phoneNumber:Yup.string()
    .required('phoneNumber is Requierd')
    .matches(/^[0-9]{11}$/,'Invalid Phone Number')
    .nullable(),
    passwordConfrim:Yup.string()
    .required('password Confrimation is Requierd')
    .oneOf([Yup.ref('password'),null],'password must match')
})

const SignUpForm = () => {
    
    const formik = useFormik({
        initialValues : value,
        onSubmit : (values) => console.log(values),
        validationSchema : validationschema,
        validateOnMount:true,
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
            <div className="formControl">   
                <label>phoneNumber</label>
                <input 
                    type="text"
                    name = "phoneNumber"
                    {...formik.getFieldProps('phoneNumber')}
                />
                {formik.errors.phoneNumber && formik.touched.phoneNumber &&  <div className="error">{formik.errors.phoneNumber}</div>}
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
            <div className="formControl">   
                <label>password confrim</label>
                <input 
                    type="password"
                    name = "passwordConfrim"
                    {...formik.getFieldProps('passwordConfrim')}
                />
                {formik.errors.passwordConfrim && formik.touched.passwordConfrim &&  <div className="error">{formik.errors.passwordConfrim}</div>}
            </div>
            <button 
                className="submit-button"
                type="submit"
                disabled={!formik.isValid}
                >Submit</button>
        </form>
    );
}
 
export default SignUpForm;