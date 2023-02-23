import React from "react";
import { Formik,Form } from 'formik';

function MainStudent() {
  return <div className="col-12"> 
    <Formik
    initialValues={{
      email: '634259013@webmail.npru.ac.th',
      password: '',
    }}
    onSubmit={(values, {setSubmitting}) =>{
      console.log();
    }}
    >
      {({ values, errors, touchhed, setFieldValue}) =>(
        <Form>
          <label>ค้นหา</label>
          <div className="row">
            <div className="col-12 col-md-4 mt-1">
              <input type="text"
              className="form-control"
              onChange={(e) => {
                console.log(e.target.value)
              }}
              />
            </div>

          </div>
        </Form>
      )}
    </Formik>
  </div>;
}

export default MainStudent;