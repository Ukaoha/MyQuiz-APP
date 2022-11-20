import React from 'react';
import { Formik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Home.css'

const Home= () => (
  

  <div>
    

    
    <Formik
  
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'This field is required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        } 
        if(!values.password) {
          errors.password = "This field is required";
        } else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(values.password)
        ) {
          errors.password = "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character: "
        }

        return errors;
    
      }}
      onSubmit={(values, { setSubmitting }) => {
        toast.success('Logged in successfully', {
          position: toast.POSITION.TOP_CENTER,
          className: 'toast-message'


      });


      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
    
      }) => (
        <div class="form-container">
        <div class="form-wrapper">

        <form onSubmit={handleSubmit}>
        <div className="form-control">
          <h2><span className='highlight'>My</span>Quiz</h2>
          <p>Online Quiz Management System</p>

          <input
            type="email"
            name="email"
            placeholder='Email'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <small className='error'>{errors.email && touched.email && errors.email }</small>

          </div>
          <div className="form-control">

          <input
            type="password"
            name="password"
            placeholder='Password'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <small className='error'>{errors.password && touched.password && errors.password}</small>
          </div>
          <div className="register">
          <button className='submit' type="submit" disabled={isSubmitting}>
            Submit <ToastContainer/>
          </button>
          </div>
        </form>
        </div>
        </div>
      )}
    </Formik>
  </div>
);

export default Home;