import React from 'react';
import axios from 'axios'
import { Form, Field, withFormik} from 'formik'
import * as Yup from 'yup'

const UserForm = ({errors, touched, values}) => {
  return (
    <div>
      <h1></h1>
      <Form>
        <Field name= 'name' type= 'text' placeholder= 'Name'/>
        {touched.name && errors.name && (
          <p className='error'>{errors.name}</p>
        )}
        <Field name= 'email' type= 'email' placeholder= 'Email'/>
        {touched.email && errors.email && (
          <p className='error'>{errors.email}</p>
        )}
        <Field name= 'password' type= 'password' placeholder= 'Password'/>
        {touched.password && errors.password && (
          <p className='error'>{errors.password}</p>
        )}
        <label>Terms of Service 
            {touched.tos && errors.tos && (
              <p className='error'>{errors.tos}</p>
            )}
            <Field name= 'tos' type= 'checkbox' checked= {values.tos}/>   
        </label>
        <button>Submit</button>
      </Form>
    </div>
  );
}

const FormikUserForm = withFormik({
  mapPropsToValues({ name, email, password, tos}) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      tos: tos || false
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
    .required(),

    email: Yup.string()
    .email()
    .required(),

    password: Yup.string()
    .min(5)
    .required("minumum 5 characters required"),

    tos: Yup.bool()
    .required()
    .oneOf([true], 'You must agree to the Terms of Service or else.')

  }),
  handleSubmit(values, { setStatus }) {
    axios
    .post('https://reqres.in/api/users_', values)
    .then(res => {
      setStatus(res.data)
    })
  }
})(UserForm)

export default FormikUserForm;