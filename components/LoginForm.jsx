import { Formik, Form, ErrorMessage, Field } from 'formik';
import React from 'react'

const LoginForm = () => {
  return (
    <div>
        <Formik 
        initialValues={{Email : "", password : ""}}
        validate={value=> {
            const errors={};
            if(!value.email){
                errors.email= 'Required';
            }else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                errors.email="Invalid";
            }
            return errors;
        }}
        >
            <Form>
               <Field type="email" name="email" />
               <ErrorMessage name='email' component="div" />
                <Field type="password" name="password" />
               <ErrorMessage name='password' component="div" />
               <button type='submit'>submit</button>
            </Form>
        </Formik>
      
    </div>
  )
}

export default LoginForm;
