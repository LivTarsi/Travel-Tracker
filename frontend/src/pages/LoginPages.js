import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email 
address').required('Required'),
      password: Yup.string().min(6, 'Password must be at least 6 
characters').required('Required'),
    }),
    onSubmit: (values) => {
      console.log(values); // Replace with API call
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && <p>{formik.errors.email}</p>}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && <p>{formik.errors.password}</p>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;

