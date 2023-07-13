import './App.css';
//import { Container,Paper,Box,typography,Grid } from '@mui/system';
import { Container, Paper, Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { useFormik } from 'formik';
import { addData } from './Redux/Formslice';
import { useDispatch } from 'react-redux';
//import { ClassNameConfigurator } from '@mui/base';
const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(4),
        // background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
    },
})
);
export default function Form() {

    const dispatch = useDispatch();
    const classes = useStyles();


const [users, setUsers] = useState([{}]);
    const adduser = () => { setUsers([...users,users]) };
   // const addTemplate = () => { setTemplate([...Template, users]) };
    const formik = useFormik({
        initialValues: {
            parameter: "",
            condition: "",
            rs: ""
        },
onSubmit: values => {
            dispatch(addData(values));
            alert(JSON.stringify(values, null, 2));
            console.log(values, "values");
        },})

 // const [Template, setTemplate] = useState([users]);
  const handleremove = index => {
        const list = [...users];
        list.splice(index, 1);
        setUsers(list);
    }

    // const formik = useFormik({
    // initialValues: { parameter: "", condition: "", value: "",},
    // onSubmit: values => {dispatch(addData(values));
    // alert(JSON.stringify(values, null, 2));
    //  console.log(values, "values");
    // },
    //     });



    return (
        <>
            <Container className={classes.root} >

              {/* {Template.map((x, y) => (<div key={y}> */}
                    <Paper component={Box} p={12}  >
                        {users.map((user, index) => (

         <Grid container spacing={8} key={index}>
              <Grid item md={4}>  <div>   <label>parameter</label>  </div>
                    <input type="number"
                                        className="form-control"
                                        placeholder='today'
                                        name='today'
                                      //  value={formik.values.parameter}
                                        onChange={(e) => formik.setFieldValue("parameter", e.target.value)}
                                        />  </Grid>

                                <Grid item md={4}>   <div>   <label> condition</label>  </div>
                                    <input type="number"
                                        className="form-control"
                                        placeholder='Greater than'
                                       // value={formik.values.condition}
                                       // onChange={formik.condition}
                                        onChange={(e) => formik.setFieldValue("condition", e.target.value)}
                                        name="condition"
                                    />  </Grid>

                                <Grid item md={3}>  <div><label>value</label></div>  <div className="input-group-prepend">
                                    <span className="input-group-text">Rs.</span>
                                    <input type="number"
                                        className="form-control"
                                        name='rs'
                                      //  value={formik.values.rs}
                                       // onChange={formik.rs}
                                        onChange={(e) => formik.setFieldValue("rs", e.target.value)}
                                    />  </div>  </Grid>

                                <Grid item md={1}>   {users.length !== 1 && <button
                                    onClick={() => handleremove(index)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                    </svg>
                                </button>}  </Grid>
                            </Grid>
                        ))}
                        <div className={classes.root}> <button className="btn btn-primary" type="submit"
                            onClick={adduser} >ADD</button> </div>
                    </Paper>
                {/* </div>
                ))} */}
                {/* <div className={classes.root}>
                    <button className="btn btn-primary" type="submit" onClick={addTemplate}>OR</button>
                </div> */}

                <div className='d-flex justify-content-center'>
                    <button className='btn btn-success' type='submit' onClick={formik.handleSubmit}>Submit</button>
                </div>
            </Container>
        </>
    )
}







                                                     ///////////       30-6-2023


import './App.css';
//import { Container,Paper,Box,typography,Grid } from '@mui/system';
import { Container, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { addData } from './Redux/Formslice';
import { useDispatch } from 'react-redux';
//import { ClassNameConfigurator } from '@mui/base';
const useStyles = makeStyles((theme) => ({
    root: {  // gap: theme.spacing(12  ), // '8px auto'
        //   background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
    },
    roo: {
        paddingTop: theme.spacing(14),
    },
})
);
export default function Form() {

    const dispatch = useDispatch();
    const classes = useStyles();


    const [users, setUsers] = useState([{}]);
    const [or, setOr] = useState([]);
    const adduser = () => {
        
        setUsers([...users,{}])
        
    };


    const [Template, setTemplate] = useState({
        'and':users,
        'or':or,
    });

     
    
    

    const addTemplate = () => {
        setOr([...or,{}])
console.log('before');
console.log(Template);
console.log('====================================');
        //  setTemplate([users],[or])
console.log('after');
console.log(Template);
console.log('====================================');
         };



    const formik = useFormik({
        initialValues: {
            parameter: "",
            condition: "",
            rs: "",
        },
        validationSchema: Yup.object({
            parameter: Yup.string().required("parameter!"),
            condition: Yup.string().required("condition!"),
            rs: Yup.string().required("rs"),

        }),
        onSubmit: values => {
            dispatch(addData(values));
            alert(JSON.stringify(values, null, 2));
            //  console.log(values, "values");
            //  console.log(data , "data")

        },
    })



    const handleremove = index => {
        const list = [...users];
        list.splice(index, 1);
        setUsers(list);
    }


    useEffect(() => {
     setTemplate(   {
        'and':users,
        'or':or,
    })
     
     
          
      }, [or,users]
      );
    


    // useEffect

    // const formik = useFormik({
    // initialValues: { parameter: "", condition: "", value: "",},
    // onSubmit: values => {dispatch(addData(values));
    // alert(JSON.stringify(values, null, 2));
    //  console.log(values, "values");
    // },
    //     });




    // console.log('====================================');
    // console.log(formik.errors);
    // console.log('====================================');
    return (
        <>
            <Container className={classes.root} >
                {/* {Template.map((x, y) => (<div key={y} className={classes.roo}   > */}
                    <Paper p={12}>
                        {users.map((user, index) => (

                            <Grid container spacing={8} key={index}  >

                                <Grid item md={4}>  <div>   <label>parameter</label>  </div>
                                    <input type="number"
                                        className="form-control"
                                        placeholder='today'
                                        name='parameter'
                                        //  value={formik.values.parameter}

                                        onChange={(e) => formik.setFieldValue("parameter", e.target.value)}
                                    />
                                    <div>  {formik.errors.parameter && formik.touched.parameter && (<p>{formik.errors.parameter}</p>)} </div>
                                </Grid>

                                <Grid item md={4}>   <div>   <label> condition</label>  </div>
                                    <input type="number"
                                        className="form-control"
                                        placeholder='Greater than'
                                        // value={formik.values.condition}
                                        // onChange={formik.condition}
                                        onChange={(e) => formik.setFieldValue("condition", e.target.value)}
                                        name="condition"
                                    />  </Grid>

                                <Grid item md={3}>  <div><label>value</label></div>  <div className="input-group-prepend">
                                    <span className="input-group-text">Rs.</span>
                                    <input type="number"
                                        className="form-control"
                                        name='rs'
                                        //  value={formik.values.rs}
                                        // onChange={formik.rs}
                                        onChange={(e) => formik.setFieldValue("rs", e.target.value)}
                                    />  </div>  </Grid>

                                <Grid item md={1}>   {users.length !== 1 && <button onClick={() => handleremove(index)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                    </svg>
                                </button>}  </Grid>
                            </Grid>
                        ))}
                        <div className='margin' > <button className="btn btn-primary" type="submit"
                            onClick={adduser} >ADD</button> </div>
                    </Paper>
                {/* </div>
                ))} */} 
<div>          <Paper p={12}>
                        { or.map((user, index) => (

                            <Grid container spacing={8} key={index}  >

                                <Grid item md={4}>  <div>   <label>parameter</label>  </div>
                                    <input type="number"
                                        className="form-control"
                                        placeholder='today'
                                        name='parameter'
                                        //  value={formik.values.parameter}

                                        onChange={(e) => formik.setFieldValue("parameter", e.target.value)}
                                    />
                                    <div>  {formik.errors.parameter && formik.touched.parameter && (<p>{formik.errors.parameter}</p>)} </div>
                                </Grid>

                                <Grid item md={4}>   <div>   <label> condition</label>  </div>
                                    <input type="number"
                                        className="form-control"
                                        placeholder='Greater than'
                                        // value={formik.values.condition}
                                        // onChange={formik.condition}
                                        onChange={(e) => formik.setFieldValue("condition", e.target.value)}
                                        name="condition"
                                    />  </Grid>

                                <Grid item md={3}>  <div><label>value</label></div>  <div className="input-group-prepend">
                                    <span className="input-group-text">Rs.</span>
                                    <input type="number"
                                        className="form-control"
                                        name='rs'
                                        //  value={formik.values.rs}
                                        // onChange={formik.rs}
                                        onChange={(e) => formik.setFieldValue("rs", e.target.value)}
                                    />  </div>  </Grid>

                                <Grid item md={1}>   {users.length !== 1 && <button onClick={() => handleremove(index)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                    </svg>
                                </button>}  </Grid>
                            </Grid>
                        ))}
                        
                    </Paper>                          </div>

<div className='d-flex justify-content-between margin'>
                    <button className="btn btn-primary" type="submit" onClick={addTemplate}>OR</button>
                    <button className='btn btn-success' type='submit' onClick={formik.handleSubmit}>Submit</button>
                </div>

            </Container>


        </>
    )
}







import './App.css';
//import { Container,Paper,Box,typography,Grid } from '@mui/system';
import { Container, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import {  useState } from 'react';                         // useEffect,
import { useFormik } from 'formik';
import * as Yup from "yup";
import { addData } from './Redux/Formslice';
import { useDispatch } from 'react-redux';
//import { ClassNameConfigurator } from '@mui/base';
const useStyles = makeStyles((theme) => ({
    root: {  // gap: theme.spacing(12  ), // '8px auto'
        //   background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
    },
    roo: {
        paddingTop: theme.spacing(14),
    },
})
);
export default function Form() {

    const dispatch = useDispatch();
    const classes = useStyles();


    const [users, setUsers] = useState([{}]);
    
    const adduser = () => {

        setUsers([...users,users])
    };




    const [Template, setTemplate] = useState([{}]);


    const  addTemplate = () => {

        setTemplate([...Template,Template])
    };



    const formik = useFormik({
        initialValues:[{
            parameter: "",
            condition: "",
            rs: "",
        }],
        validationSchema: Yup.object({
            parameter: Yup.string().required("parameter!"),
            condition: Yup.string().required("condition!"),
            rs: Yup.string().required("rs"),

        }),
        onSubmit: values => {
            dispatch(addData(values));
            alert(JSON.stringify(values, null,));
       

        },
    })



    const handleremove = index => {
        const list = [...users];
        list.splice(index, 1);
        setUsers(list);
    }

  


 
 return (
        <>
            <Container className={classes.root} >
             {Template.map((x, y) => (
             <div key={y} className={classes.roo}   >  
                <Paper p={12}>
                    {users.map((user, index) => (

                        <Grid container spacing={8} key={index}  >

                            <Grid item md={4}>  <div>   <label>parameter</label>  </div>
                                <input type="number"
                                    className="form-control"
                                    placeholder='today'
                                    name='parameter'
                                    //  value={formik.values.parameter}

                                    onChange={(e) => formik.setFieldValue("parameter", e.target.value)}
                                    
                                />
                                <div>  {formik.errors.parameter && formik.touched.parameter && (<p>{formik.errors.parameter}</p>)} </div>
                            </Grid>

                            <Grid item md={4}>   <div>   <label> condition</label>  </div>
                                <input type="number"
                                    className="form-control"
                                    placeholder='Greater than'
                                    // value={formik.values.condition}
                                    // onChange={formik.condition}
                                    onChange={(e) => formik.setFieldValue("condition", e.target.value)}
                                    name="condition"
                                />  </Grid>

          <Grid item md={3}>  <div><label>value</label></div>  <div className="input-group-prepend">
                <span className="input-group-text">Rs.</span>
                 <input type="number"
                                    className="form-control"
                                    name='rs'
                                    //  value={formik.values.rs}
                                    // onChange={formik.rs}
                                    onChange={(e) => formik.setFieldValue("rs", e.target.value)}
                                />  </div>  </Grid>

                            <Grid item md={1}>   {users.length !== 1 && <button onClick={() => handleremove(index)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                </svg>
                            </button>}  </Grid>
                        </Grid>
                    ))}
                    <div className='margin' > <button className="btn btn-primary" type="submit"
                        onClick={adduser} >ADD</button> </div>

</Paper>
               </div>
                ))} 
             
              <div className='d-flex justify-content-between margin'>
                    <button className="btn btn-primary" type="submit" onClick={addTemplate}>OR</button>
                    <button className='btn btn-success' type='submit' onClick={formik.handleSubmit}>Submit</button>
                </div>

            </Container>
</>
    )
// }














import "./styles.css";

import * as Yup from "yup";

import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";

import React from "react";

const App = () => (
  <div>
    <h3>Organzation Form (Dyanamic users - Array of Object) </h3>
    <hr />





    <Formik
      initialValues={{
        users: [{
          name: "deshan madurajith",
          email: "desh@email.com"
        },
        {
          name: "Hello Desh",
          email: "hello@email.com"
        }

      ],
        organizationName: []
      }}


      validationSchema={Yup.object({
        organizationName: Yup.string().required(
          "Organization Name is required"
        ),


        users: Yup.array().of(
          Yup.object().shape({
            name: Yup.string().required("Name required"),
            email: Yup.string()
              .required("email required")
              .email("Enter valid email")
          })
        )
      })}






      onSubmit={values => alert(JSON.stringify(values, null, 2))}



      render={({ values }) => (




        <Form>
            <h5>Form </h5>
          <Field placeholder="Organization name" name={`organizationName`} />
          <ErrorMessage name={`organizationName`} />
          <h5>Organzation users </h5>
          <FieldArray
            name="users"
            render={arrayHelpers => {
              const users = values.users;
              return (
                <div>
                  {users && users.length > 0
                    ? users.map((user, index) => (
                        <div key={index}>
                          <Field
                            placeholder="user name"
                            name={`users.${index}.name`}
                          />
                          <ErrorMessage name={`users.${index}.name`} />
                          <br />

                          <Field
                            placeholder="user email"
                            name={`users.${index}.email`}
                          />
                          <ErrorMessage name={`users.${index}.email`} />

                          <br />

                          <button
                            type="button"
                            onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                          >
                            -
                          </button>
                          <br />
                          <br />
                        </div>
                      ))
                    : null}


                  <button
                    type="button"
                    onClick={() =>
                      arrayHelpers.push({
                        name: "",
                        email: ""
                      })


                    } // insert an empty string at a position
                  >
                    add a User
                  </button>


 



                  <br />
                  <br />
                  <br />
                  <div>
                    <button type="submit">Form Submit</button>
                  </div>
                </div>
              );
            }}
          />
          <hr />
        </Form>
      )}
    />
  </div>
);
export default App;



import React, { useState } from 'react'

const Second = () => {

  const [data,setData] = useState([{parameter:'', condition:'',value:''}])
  // const [datas,setDatas] = useState(setData)

  const handleFormChange = (index,e) =>{
      let store = [...data];
      store[index][e.target.name] = e.target.value;
      setData(store)
  }
  const addFields = () =>{
    let newField = {parameter:"",condition:'',value:''}
    setData([...data, newField])
  }

  

  const addOr=()=>{
     let againNewField = {parameter:"",condition:'',value:''}
      
       setData([...data,againNewField])
      
    }


  // console.log(a);

  return (
    <>
    {
      data.map(()=>{
        return(
          <div>
          {
        data.map((input,index)=>{
          return (
          <div key={index}>
      <label htmlFor="parameter">parameter</label>
      <input 
      id='parameter'
      name='parameter'
      value = {input.parameter}
      onChange={e=>handleFormChange(index,e)}
       />

       <label htmlFor="condition">Condition</label>
       <input 
       id='condition'
       name='condition'
       value={input.condition}
       onChange={e=>handleFormChange(index,e)}
        />

        <label htmlFor="value">Value</label>
      <input 
      id='value'
      name='value'
      value={input.value}
      onChange={e=>handleFormChange(index,e)}
       />
      </div>
          )
        })   
      }
      <button onClick={addFields} >Add</button>
          </div>
        )
      })
    }
      <button onClick={addOr}>OR</button>
    </>
  )
}











export default Second


import { useFormik } from 'formik'
import React from 'react'

const Second = () => {
    const formik = useFormik({
      users: [{
        parameter:''
      }],
      onSubmit :(values)=>{
        console.log(values);
      }
    })
    console.log(formik.values);
  return (
    <>
      <label htmlFor="parameter">Parameter</label>
      <input type="text"
        id='parameter'
        name='parameter'
        onChange={(e)=>formik.setFieldValue("parameter",e.target.value)}
        value={formik.values.users.parameter}
         />
    </>
  )
}

export default Second

{
  data.map((input,index)=>{
    return (
    <div key={index}>
<label htmlFor="parameter">parameter</label>
<input 
id='parameter'
name='parameter'
value = {input.parameter}
onChange={e=>handleFormChange(index,e)}
 />

 <label htmlFor="condition">Condition</label>
 <input 
 id='condition'
 name='condition'
 value={input.condition}
 onChange={e=>handleFormChange(index,e)}
  />

  <label htmlFor="value">Value</label>
<input 
id='value'
name='value'
value={input.value}
onChange={e=>handleFormChange(index,e)}
 />
<button onClick={addFields} >Add</button>
</div>
    )
  })   
}


  <button onClick={addOr}>OR</button> 
  const addOr=()=>{
    let againNewField = {parameter:"",condition:'',value:''}
  
   setData([...data,againNewField])
  
  }











  import "./styles.css";

import * as Yup from "yup";

import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";

import React from "react";

const App = () => (
  <div>
    <h3>Organzation Form (Dyanamic users - Array of Object) </h3>
    <hr />
    <Formik
      initialValues={{
        users: [
          {
            name: "deshan madurajith",
            email: "desh@email.com"
          },
          {
            name: "Hello Desh",
            email: "hello@email.com"
          }
        ],
        organizationName: []
      }}
      validationSchema={Yup.object({
        organizationName: Yup.string().required(
          "Organization Name is required"
        ),
        users: Yup.array().of(
          Yup.object().shape({
            name: Yup.string().required("Name required"),
            email: Yup.string()
              .required("email required")
              .email("Enter valid email")
          })
        )
      })}
      onSubmit={values => alert(JSON.stringify(values, null, 2))}
      render={({ values }) => (
        <Form>
          <h5>Form </h5>
          <Field placeholder="Organization name" name={`organizationName`} />
          <ErrorMessage name={`organizationName`} />
          <h5>Organzation users </h5>



          <FieldArray
            name="users"
            render={arrayHelpers => {
              const users = values.users;
              return (
                <div>
                  {users && users.length > 0
                    ? users.map((user, index) => (
                        <div key={index}>
                          <Field
                            placeholder="user name"
                            name={`users.${index}.name`}
                          />
                          <ErrorMessage name={`users.${index}.name`} />
                          <br />

                          <Field
                            placeholder="user email"
                            name={`users.${index}.email`}
                          />
                          <ErrorMessage name={`users.${index}.email`} />

                          <br />

                          <button
                            type="button"
                            onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                          >
                            -
                          </button>
                          <br />
                          <br />
                        </div>
                      ))
                    : null}
                  <button
                    type="button"
                    onClick={() =>
                      arrayHelpers.push({
                        name: "",
                        email: ""
                      })
                    } // insert an empty string at a position
                  >
                    add a User
                  </button>
                  <br />
                  <br />
                  <br />
                  <div>
                    <button type="submit">Form Submit</button>
                  </div>
                </div>
              );
            }}
          />




          
          <hr />
        </Form>
      )}
    />
  </div>
);
export default App;




















   06/07/2023   05:58pm
import './App.css';
//import { Container,Paper,Box,typography,Grid } from '@mui/system';    
import { Container, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useState } from 'react';                         // useEffect,
import { useFormik } from 'formik';
import * as Yup from "yup";
import { addData } from './Redux/Formslice';
import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
//import { current } from '@reduxjs/toolkit';
//import { ClassNameConfigurator } from '@mui/base';


const useStyles = makeStyles((theme) => ({
    root: {
        // gap: theme.spacing(12  ), // '8px auto'
        //   background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
    },
    roo: {
        paddingTop: theme.spacing(14),
    },
})
);
export default function Form() {

    const dispatch = useDispatch();
    const classes = useStyles();

    const initialdata = {
        parameter: "",
        condition: "",
        rs: "",
    }
    // const [Template, setTemplate] = useState([{}]);


    const [users, setUsers] = useState([{}]);
    // console.log(users,"users");

    const adduser = () => {
        setUsers(current => [...current, {}]);
 
              
            formik.handleSubmit();
          
    


    };


    //  console.log(initialdata,"initialdata");
    // const addTemplate = () => { setTemplate(current => [...current, initialdata]) }



    const formik = useFormik({
        initialValues: initialdata,

        validationSchema: Yup.object({
            parameter: Yup.number().required("Parameter  is required!"),
            condition: Yup.number().required("Condition  is required!"),
            rs: Yup.number().required("Rs is required!"),

        }),
        
    onSubmit: values => {

   dispatch(addData(values));
            alert(JSON.stringify(values, null,));
            console.log(values, "values");
 },
    })

    const handleremove = index => {
        const list = [...users];
        //list.map((user, index) => ([list.splice(index, 1)]))  
        list.splice(index, 1);
        setUsers(list);
        console.log(list, "list")
    }








    return (
        <>
            <Container className={classes.root} >
                {/* {Template.map((x, y) => (  <div key={y} className={classes.roo}   > */}

                <Paper p={12}>
                    {users.map((user, index) => (

                        <Grid container spacing={8} key={index}  >

                            <Grid item md={4}>  <div>   <label>parameter</label>  </div>
                                <input type="number"
                                    className="form-control"
                                    placeholder='today'
                                    name='parameter'
                                    value={formik.values.parameter[index]}
                                    onChange={(e) => formik.setFieldValue(`parameter.${index}`, e.target.value)}
                                />
                                <div>  {formik.errors.parameter && formik.touched.parameter && (<p>{formik.errors.parameter}</p>)} </div>
                            </Grid>

                            <Grid item md={4}>
                                <div>
                                    <label> condition</label>
                                </div>
                                <input type="number"
                                    value={formik.values.condition[index]}
                                    onChange={(e) => formik.setFieldValue(`condition.${index}`, e.target.value)}
                                    className="form-control"
                                    placeholder='Greater than'
                                    name="condition" />
                                <div>
                                    {formik.errors.condition && formik.touched.condition && (<p>{formik.errors.condition}</p>)}
                                </div>
                            </Grid>

                            <Grid item md={3}>
                                <div><label>value</label></div>
                                <div className="input-group-prepend"><span className="input-group-text">Rs.</span>
                                    <input type="number"
                                        value={formik.values.rs[index]}
                                        onChange={(e) => formik.setFieldValue(`rs.${index}`, e.target.value.replace(/[^0-9.+]/g, ''))}
                                        //onChange={(e) => formik.setFieldValue("rs", e.target.value)}
                                        className="form-control"
                                        name='rs' />
                                </div>
                                <div>{formik.errors.rs && formik.touched.rs && (<p>{formik.errors.rs}</p>)} </div>
                            </Grid>

                            <Grid item md={1}>   {users.length !== 1 && <button onClick={() => handleremove(index)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                </svg>
                            </button>}  </Grid>
                        </Grid>
                    ))}
                    <div className='margin' > <button className="btn btn-primary" type="submit"
                        //  onClick={adduser} 
                        onClick={() => {
                            adduser();
                           // formik.handleSubmit();
                        }}> ADD
                    </button> </div>

                </Paper>
                {/* </div>))} */}
                <div className='d-flex justify-content-between margin'>
                    {/* <button className="btn btn-primary" type="submit" onClick={addTemplate}>OR</button> */}
                    <button className='btn btn-success' type='submit' onClick={formik.handleSubmit}>Submit</button>
                </div>

            </Container>
        </>
    )
}













    //   name={`items[${index}]`}
    //   onChange={event => {
    //     const newValue = event.target.value;
                    //     setFieldValue(`items[${index}]`, newValue);
                    //   }}




                      // validationSchema: Yup.object({
        //     parameter: Yup.string().required("Parameterm  is required!"),
        //     condition: Yup.string().required("Condition  is required!"),
        //     rs: Yup.string().required("Rs is required!"),
        // }),

        // const adduser = () => {
        //     setUsers(current => [...current, {}]);
    
            // if (initialdata === '') {
            //      
            //     formik.handleSubmit();
            // }
            // else {
            //     alert("d")
    
            // };
    
    
    
        // };













        import React, { useState } from 'react'
        import { Container, Row, Col, Table } from "react-bootstrap";
        import { useFormik } from "formik";
        import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
        import { MdDelete } from "react-icons/md";
        import { RiEdit2Fill } from "react-icons/ri";
        import { useDispatch, useSelector } from 'react-redux';
        import { addData } from './store/slices/FormSlice';
        
        
        
        const ContainerForm = () => {
            const dispatch = useDispatch();
            const [rowIndex, setRowIndex] = useState();
            const formData = useSelector((state) => state.formData.value);
        
            const [initialData, SetInitiaData] = useState({
                addRow: {
                    btn:
                        [
                            [
                                {
                                    fname: "",
                                    lname: "",
                                    age: ""
                                },
                            ],
                        ]
                },
            });
        
            const formik = useFormik({
                initialValues: initialData,
        
                onSubmit: (values, actions) => {
                    dispatch(addData(values));
                    actions.resetForm();
        
                    if (formData?.length) {
                        let update = [...formData];
                        update[formData] = values
                        dispatch(updateData(update));
                    } else {
                        dispatch(addData(values));
                        console.log("formDatas", formData);
                    }
                },
            })
        
          
        
            const handleAdd = (index) => {
                const addForm = { fname: "", lname: "", age: "" };
                const adddata = [...formik.values.addRow.btn[index], addForm];
                let newrow = [...formik.values.addRow.btn];
                newrow[index] = adddata;
                formik.setFieldValue("addRow", { ...formik.values.addRow, btn: newrow })
            }
         
        
         
        
           
        
        
            return (
                <>
                    <Container className='bg-light p-4 rounded-3 shadow p-2'>
                        {formik.values.addRow.btn?.map((name, index) => {
                            return (
                                <Container className='mt-5 bg-light p-4 rounded-3 shadow p-2' key={index}>
                                    {
                                        name?.map((val, ind) => {
                                            return (
                             <Row className='d-flex justify-content-center row align-items-center text-center mt-3' key={ind}>
                                    <Col>
                                     <div className="form-floating">
                                        <input type="text" className="form-control" id="floatingInputFname" name='fname' placeholder='First Name'
                                            onChange={(e) => formik.setFieldValue(`addRow.btn.${index}.${ind}.fname`, e.target.value)}
                                                                value={formik.values.addRow?.btn[index][ind]?.fname}
                                                                onBlur={() => formik.setFieldTouched(`addRow.btn.${index}.${ind}.fname`)} />
                                                            <label htmlFor="floatingInputFname">First Name</label>
                                                        </div>
                                                    </Col>
                                                    <Col>
                                                        <div className="form-floating">
                                                            <input type="text" className="form-control" id="floatingInputLname" name='lname' placeholder='Last Name'
                                                                onChange={(e) => formik.setFieldValue(`addRow.btn.${index}.${ind}.lname`, e.target.value)}
                                                                value={formik.values.addRow?.btn[index][ind]?.lname}
                                                                onBlur={() => formik.setFieldTouched(`addRow.btn.${index}.${ind}.lname`)} />
                                                            <label htmlFor="floatingInputLname">Last Name</label>
                                                        </div>
                                                    </Col>
                                                    <Col>
                                                        <div className="form-floating">
                                                            <input type="number" className="form-control" id="floatingInputAge" name='age' placeholder='Age'
                                                                onChange={(e) => formik.setFieldValue(`addRow.btn.${index}.${ind}.age`, e.target.value)}
                                                                value={formik.values.addRow?.btn[index][ind]?.age}
                                                                onBlur={() => formik.setFieldTouched(`addRow.btn.${index}.${ind}.age`)} />
                                                            <label htmlFor="floatingInputAge">Age</label>
                                                        </div>
                                                    </Col>
                                                    {
                                                        name.length > 1 ? <Col className='col-md-1'><button className='btn btn-outline-danger ms-3' onClick={() => { removeField(index, ind) }}><MdDelete className='fs-1' /></button></Col> : null
                                                    }
                                                </Row>
                                            )
                                        })
                                    }
                                    <Row className='mt-3'>
                                        <Col>
                                            <div>
                                                <button className='btn btn-outline-primary' onClick={() => { handleAdd(index) }}>Add Row</button>
                                            </div>
                                        </Col>
                                        {
                                            formik.values.addRow.btn.length > 1 ? <Col>
                                                <div className='d-flex justify-content-end'>
                                                    <button className='btn btn-outline-danger' onClick={() => { removeArea(index) }}>Delete Area</button>
                                                </div>
                                            </Col> : null
                                        }
                                    </Row>
                                </Container>
                            )
                        })}
                        <div className='m-3 d-flex justify-content-center'>
                            <button className='btn btn-dark' style={{ width: "75px" }} onClick={handleAddForm}>Or</button>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <button className='btn btn-success' type='submit' onClick={formik.handleSubmit}>Submit</button>
                        </div>
                    </Container>
        
        
        
                    {
                        ((formData.addRow?.btn)?.length > 0) ?
                            (<Container className='mt-5 bg-light p-5 rounded-3 shadow p-2 text-center' >
                                <Table striped bordered hover variant="dark">
                                    <thead>
                                        <tr>
                                            <th>Sr. No.</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Age</th>
                                            <th className='text-info'>Update</th>
                                        </tr>
                                    </thead>
        
                                    {(formData?.addRow?.btn?.map((data, index) => {
                                        return (
                                            <tbody key={index}>
                                                {
                                                    data?.map((newData, ind) => {
                                                        return (
                                                            <tr key={ind} >
                                                                <td>{ind + 1}</td>
                                                                <td>{newData.fname}</td>
                                                                <td>{newData.lname}</td>
                                                                <td>{newData.age}</td>
                                                                <td><RiEdit2Fill className='fs-4 text-info' onClick={() => { updateData(index, ind); setRowIndex([index, ind]) }} /></td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        )
                                    }))}
        
                                </Table>
                            </Container >) : null
                    }
                </>
            )
        }
        
        export default ContainerForm;
        
        
        
        
        
        
        
        
        
        
        
         
        
        // import React, { useState } from 'react'
        // import { Container, Row, Col, Table } from "react-bootstrap";
        // import { useFormik } from "formik";
        // import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
        // import { MdDelete } from "react-icons/md";
        // import { RiEdit2Fill } from "react-icons/ri";
        // import { useDispatch, useSelector } from 'react-redux';
        // import { addData } from './store/slices/FormSlice';
        
        
        
        // const ContainerForm = () => {
        //     const dispatch = useDispatch();
        //     const [rowIndex, setRowIndex] = useState();
        //     const formData = useSelector((state) => state.formData.value);
        
        //     const [initialData, SetInitiaData] = useState({
        //         addRow: {
        //             btn:
        //                 [
        //                     [
        //                         {
        //                             fname: "",
        //                             lname: "",
        //                             age: ""
        //                         },
        //                     ],
        //                 ]
        //         },
        //     });
        
        //     const formik = useFormik({
        //         initialValues: initialData,
        
        //         onSubmit: (values, actions) => {
        //             dispatch(addData(values));
        //             actions.resetForm();
        
        //             if (formData?.length) {
        //                 let update = [...formData];
        //                 update[formData] = values
        //                 dispatch(updateData(update));
        //             } else {
        //                 dispatch(addData(values));
        //                 console.log("formDatas", formData);
        //             }
        //         },
        //     })
        
        //     const handleAddForm = () => {
        //         const addForm = { fname: "", lname: "", age: "" };
        //         const adddata = [...formik.values.addRow.btn, [addForm]];
        //         formik.setFieldValue("addRow", { ...formik.values.addRow, btn: adddata })
        //     }
        
        //     const handleAdd = (index) => {
        //         const addForm = { fname: "", lname: "", age: "" };
        //         const adddata = [...formik.values.addRow.btn[index], addForm];
        //         let newrow = [...formik.values.addRow.btn];
        //         newrow[index] = adddata;
        //         formik.setFieldValue("addRow", { ...formik.values.addRow, btn: newrow })
        //     }
        
        //     const removeField = (index, ind) => {
        //         const adddata21 = [...formik.values.addRow.btn];
        //         adddata21[index].splice(ind, 1);
        //         formik.setFieldValue("addRow", { ...formik.values.addRow, btn: adddata21 })
        //     };
        
        //     const removeArea = (index) => {
        //         console.log("index", index);
        //         const adddata21 = [...formik.values.addRow.btn];
        //         adddata21.splice(index, 1);
        //         formik.setFieldValue("addRow", { ...formik.values.addRow, btn: adddata21 })
        //     };
        
        //     const updateData = (index, ind) => {
        //         const rowRecord = formData.addRow.btn[index][ind];
        //         formik.setFieldValue(`addRow.btn.${index}.${ind}.fname`, rowRecord.fname)
        //         formik.setFieldValue(`addRow.btn.${index}.${ind}.lname`, rowRecord.lname)
        //         formik.setFieldValue(`addRow.btn.${index}.${ind}.age`, rowRecord.age)
        //     }
        
        
        //     return (
        //         <>
        //             <Container className='bg-light p-4 rounded-3 shadow p-2'>
        //                 {formik.values.addRow.btn?.map((name, index) => {
        //                     return (
        //                         <Container className='mt-5 bg-light p-4 rounded-3 shadow p-2' key={index}>
        //                             {
        //                                 name?.map((val, ind) => {
        //                                     return (
        //                      <Row className='d-flex justify-content-center row align-items-center text-center mt-3' key={ind}>
        //                             <Col>
        //                              <div className="form-floating">
        //                                 <input type="text" className="form-control" id="floatingInputFname" name='fname' placeholder='First Name'
        //                                     onChange={(e) => formik.setFieldValue(`addRow.btn.${index}.${ind}.fname`, e.target.value)}
        //                                                         value={formik.values.addRow?.btn[index][ind]?.fname}
        //                                                         onBlur={() => formik.setFieldTouched(`addRow.btn.${index}.${ind}.fname`)} />
        //                                                     <label htmlFor="floatingInputFname">First Name</label>
        //                                                 </div>
        //                                             </Col>
        //                                             <Col>
        //                                                 <div className="form-floating">
        //                                                     <input type="text" className="form-control" id="floatingInputLname" name='lname' placeholder='Last Name'
        //                                                         onChange={(e) => formik.setFieldValue(`addRow.btn.${index}.${ind}.lname`, e.target.value)}
        //                                                         value={formik.values.addRow?.btn[index][ind]?.lname}
        //                                                         onBlur={() => formik.setFieldTouched(`addRow.btn.${index}.${ind}.lname`)} />
        //                                                     <label htmlFor="floatingInputLname">Last Name</label>
        //                                                 </div>
        //                                             </Col>
        //                                             <Col>
        //                                                 <div className="form-floating">
        //                                                     <input type="number" className="form-control" id="floatingInputAge" name='age' placeholder='Age'
        //                                                         onChange={(e) => formik.setFieldValue(`addRow.btn.${index}.${ind}.age`, e.target.value)}
        //                                                         value={formik.values.addRow?.btn[index][ind]?.age}
        //                                                         onBlur={() => formik.setFieldTouched(`addRow.btn.${index}.${ind}.age`)} />
        //                                                     <label htmlFor="floatingInputAge">Age</label>
        //                                                 </div>
        //                                             </Col>
        //                                             {
        //                                                 name.length > 1 ? <Col className='col-md-1'><button className='btn btn-outline-danger ms-3' onClick={() => { removeField(index, ind) }}><MdDelete className='fs-1' /></button></Col> : null
        //                                             }
        //                                         </Row>
        //                                     )
        //                                 })
        //                             }
        //                             <Row className='mt-3'>
        //                                 <Col>
        //                                     <div>
        //                                         <button className='btn btn-outline-primary' onClick={() => { handleAdd(index) }}>Add Row</button>
        //                                     </div>
        //                                 </Col>
        //                                 {
        //                                     formik.values.addRow.btn.length > 1 ? <Col>
        //                                         <div className='d-flex justify-content-end'>
        //                                             <button className='btn btn-outline-danger' onClick={() => { removeArea(index) }}>Delete Area</button>
        //                                         </div>
        //                                     </Col> : null
        //                                 }
        //                             </Row>
        //                         </Container>
        //                     )
        //                 })}
        //                 <div className='m-3 d-flex justify-content-center'>
        //                     <button className='btn btn-dark' style={{ width: "75px" }} onClick={handleAddForm}>Or</button>
        //                 </div>
        //                 <div className='d-flex justify-content-center'>
        //                     <button className='btn btn-success' type='submit' onClick={formik.handleSubmit}>Submit</button>
        //                 </div>
        //             </Container>
        
        
        
        //             {
        //                 ((formData.addRow?.btn)?.length > 0) ?
        //                     (<Container className='mt-5 bg-light p-5 rounded-3 shadow p-2 text-center' >
        //                         <Table striped bordered hover variant="dark">
        //                             <thead>
        //                                 <tr>
        //                                     <th>Sr. No.</th>
        //                                     <th>First Name</th>
        //                                     <th>Last Name</th>
        //                                     <th>Age</th>
        //                                     <th className='text-info'>Update</th>
        //                                 </tr>
        //                             </thead>
        
        //                             {(formData?.addRow?.btn?.map((data, index) => {
        //                                 return (
        //                                     <tbody key={index}>
        //                                         {
        //                                             data?.map((newData, ind) => {
        //                                                 return (
        //                                                     <tr key={ind} >
        //                                                         <td>{ind + 1}</td>
        //                                                         <td>{newData.fname}</td>
        //                                                         <td>{newData.lname}</td>
        //                                                         <td>{newData.age}</td>
        //                                                         <td><RiEdit2Fill className='fs-4 text-info' onClick={() => { updateData(index, ind); setRowIndex([index, ind]) }} /></td>
        //                                                     </tr>
        //                                                 )
        //                                             })
        //                                         }
        //                                     </tbody>
        //                                 )
        //                             }))}
        
        //                         </Table>
        //                     </Container >) : null
        //             }
        //         </>
        //     )
        // }
        
        // export default ContainerForm;
        
        









        import './App.css';
        import { Container, Paper, Grid } from '@material-ui/core';
        import { makeStyles } from '@material-ui/core';
        import { useFormik } from 'formik';
        import * as Yup from "yup";
         
         
        const useStyles = makeStyles((theme) => ({
            
            roo: {
                paddingTop: theme.spacing(14),
            },
        })
        );
        export default function Form() {
        
             
        const classes = useStyles();
        
        
        
         
        
        
        
        const formik = useFormik({
                initialValues:{data:[[{parameter: "",
                condition: "",
                rs: "",}]]
               },
         
        validationSchema: Yup.object({
        
          data: 
          Yup.array().of( 
                Yup.object().shape({
                parameter: Yup.number().required("Parameterm  is required!"),
                condition: Yup.string().required("Condition  is required!"),
                rs: Yup.string().required("Rs is required!"),
                  })
                   
             )
         }),
        
        // data:Yup.array().of(Yup.array().of(Yup.array().of(
        //     Yup.object().shape({
        //         parameter:Yup.number().required("Requireddd")
        //     })
        // ))),
        
        
        
        
         
        
        //  data: Yup.array().of(
        //        Yup.object().shape({
        //             parameter: Yup.number().required("Parameterm  is required!"),
        //             condition: Yup.string().required("Condition  is required!"),
        //             rs: Yup.string().required("Rs is required!"),
        //     })
        //   ),
        
        
        onSubmit: values => {
                    console.log(values, "values");},
        })
        
        
        const add_and = (index) => {
         const row ={parameter: "", condition: "", rs: "",} 
               //  const x= [...formik.values.data[index], row];
            let  y = [...formik.values.data]; 
            y[index] = [...formik.values.data[index], row];
            formik.setFieldValue( "data",y)
         };
        
        
        const add_or = (index) => {
            const row_or = {parameter:"", condition:"", rs:"",};
            const add_data = [...formik.values.data, [row_or]];
            // let new_row = [...formik.values.data];
            //     new_row[index] = add_data;
                formik.setFieldValue("data", {...formik.values, data : add_data})
                console.log(formik.values,"or")
               };
        
        
        const remove  = (index, indexs) => {
             const remove_data = [...formik.values.data];
             remove_data[index].splice(indexs, 1);
             formik.setFieldValue( {...formik.values.data,  remove_data })
                  };
         // console.log('==========');
          // console.log(formik.values,"formik.values");
           console.log(formik.values.data,"formik.values.data" );
        
             
              
            return (
         <>
                 <Container className={classes.root} >
        
        
                    
                 
             {formik.values.data.map((newdata,index) => { 
                //  console.log 
                return (
        
        <div key={index} >
                
                   {
                   
                   newdata.length && newdata?.map((pushdata,indexs) => { 
                       //   console.log(pushdata,"pushdata")    
                    return (
            
            
            
                        <Paper p={12} key={indexs}>
        
                
                        <Grid container spacing={8}>
                                <Grid item md={4}> 
                                                <div>   
                                                     <label>parameter</label>  </div>
                        <input type="number"
                                    className="form-control"
                                    placeholder='today'
                                    name='parameter'
                        value={formik.values.data[index][indexs]?.parameter}
                        onChange={(e) => formik.setFieldValue(`data.${index}.${indexs}.parameter`, e.target.value)}
                        />
            <div>{formik.errors&&formik.errors.data&&formik.errors.data[index]&&formik.errors.data[index][index]&&formik.errors.data[index][index].parameter && formik.touched &&formik.touched.data&&formik.touched.data[index]&&formik.touched.data[index][index]&&formik.touched.data[index][index].parameter&& (<p>{formik.errors.parameter}</p>)}</div>
                               </Grid>
                        
                                    <Grid item md={4}>
                                        <div>
                                            <label> condition</label>
                                        </div>
                                        <input type="number"
                                       
                                       value={formik.values.data[index][indexs]?.condition}
                                       onChange={(e) => formik.setFieldValue(`data.${index}.${indexs}.condition`, e.target.value)}
                                          
                                          className="form-control"
                                            placeholder='Greater than'
                                            name="condition" />
                                        <div>
                                            {formik.errors.condition && formik.touched.condition && (<p>{formik.errors.condition}</p>)}
                                        </div>
                                    </Grid>
                        
                                    <Grid item md={3}>
                                        <div><label>value</label></div>
                                        <div className="input-group-prepend"><span className="input-group-text">Rs.</span>
                                            <input type="number"
                                              value={formik.values.data[index][indexs]?.rs}
                                              onChange={(e) => formik.setFieldValue(`data.${index}.${indexs}.rs`, e.target.value)}
                                                
                                                className="form-control"
                                                name='rs' />
                                        </div>
                                        <div>{formik.errors.rs && formik.touched.rs && (<p>{formik.errors.rs}</p>)} </div>
                                    </Grid>
                        
                                    <Grid item md={1}>  
                                      {  newdata.length   !== 1 &&
         
                                        
                    <button   onClick={() => { remove(index, indexs) }} 
                                 >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                        </svg>
                                    </button>    
                                     }    
                                    </Grid>
                          
                           
                                </Grid>
                        
                           
                        
                        </Paper>
                         )  })}
        
        <div className='margin'> 
                        <button className="btn btn-primary" type="submit"
                                   onClick={() => {
                                    add_and(index);
                                    formik.handleSubmit();
                                    }}
                                    > ADD
                            </button>
                             </div>
           </div>
           ) })}  
            
        
        
        
        
        
        
        
        
                        <div className='d-flex justify-content-between margin'>
                        <button className='btn btn-success' type='submit' onClick={(indexs) => add_or(indexs)}>OR</button>
                   <button className='btn btn-success' type='submit' onClick={formik.handleSubmit}>Submit</button>  
                        </div>
        
                    </Container>
                </>
            )
        }
        
        
        
        
        //     validationSchema: Yup.object({
        //     parameter: Yup.string().required("Parameterm  is required!"),
        //     condition: Yup.string().required("Condition  is required!"),
        //     rs: Yup.string().required("Rs is required!"),
        //     }),
        
              
            
            
            
            //     const handleAdd = (index) => {
            //         const addForm = { fname: "", lname: "", age: "" };
            //         const adddata = [...formik.values.addRow.btn[index], addForm];
                //         let newrow = [...formik.values.addRow.btn];
                //         newrow[index] = adddata;
                //         formik.setFieldValue("addRow", { ...formik.values.addRow, btn: newrow })
                //     }
        
        
             
              
                           










3:42 13-07-20523


                import './App.css';
import { Container, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { addData } from './Redux/Formslice';
 
const useStyles = makeStyles((theme) => ({
    
    roo: {
        paddingTop: theme.spacing(18),
    },
})
);
export default function Form() {

    const dispatch = useDispatch();
const classes = useStyles();



const formik = useFormik({
       
    initialValues:{
            data:[[{parameter: "", condition: "", rs: "",}]]
       },
       //     const inputSchema = Yup.object().shape(data_or : Yup.array(Yup.object().shape({data_and : Yup.array(Yup.object().shape({

       
validationSchema: Yup.object({data:Yup.array(Yup.array(Yup.object().shape({

        parameter: Yup.string().required("Parameterm is required!"),
        condition: Yup.string().required("Condition is required!"),
        rs: Yup.string().required("Rs is required!"),
      })
   ))
    }),






//     validationSchema: Yup.object({data:Yup.array(Yup.array(Yup.object().shape({
//         parameter: Yup.string().required("Parameterm is required!"),
//         condition: Yup.string().required("Condition is required!"),
//         rs: Yup.string().required("Rs is required!"),
//       })
//    ))
//     }),
onSubmit: values => {
    dispatch(addData(values));
    alert(JSON.stringify(values, null, 2));
            console.log(values, "values");},
})



const add_and = (index) => {
 const row ={parameter: "", condition: "", rs: "",} 
    let  y = [...formik.values.data]; 
    y[index] = [...formik.values.data[index], row];
    formik.setFieldValue( "data",y)
 };


const add_or = () => {
    const row ={parameter: "", condition: "", rs: "",} 
    const y = [...formik.values.data, [row]];
    formik.setFieldValue( "data",y)
       };

const remove  = (index, indexs) => {
     const remove_data = [...formik.values.data];
     remove_data[index].splice(indexs, 1);
     formik.setFieldValue( {...formik.values.data,  remove_data })
          }; 
 // console.log('==========');
  // console.log(formik.values,"formik.values");
console.log(formik.values.data,"formik.values.data" );
    return (
 <>  
         <Container className={classes.root} >

 {formik.values.data?.map((newdata,index) => { 
      
        return (

<div key={index} >
{/* {newdata.length && newdata.map((pushdata,indexs) => { )} */}
           {newdata && newdata.map((pushdata,indexs) => { 
              //   console.log(pushdata,"pushdata")    
            return (
    
    
               
                <Paper p={12} key={indexs} 
               // className="margin" 
                 >

    
                <Grid container spacing={8}>
                        <Grid item md={4}> 
                                        <div>   
                                             <label>parameter</label>  </div>
                <input type="number"   
                            className="form-control"
                            placeholder='today'
                            name='parameter'
                value={formik.values.data[index][indexs]?.parameter}
                onChange={(e) => formik.setFieldValue(`data.${index}.${indexs}.parameter`, e.target.value)}
               
                />
   
        {
    formik.errors&&
    formik.errors.data&&
    formik.errors.data[index]&&
    formik.errors.data[index][indexs]&&
    formik.errors.data[index][indexs].parameter && 
    formik.touched &&
    formik.touched.data&&
    formik.touched.data[index]&&
    formik.touched.data[index][indexs]&&
    formik.touched.data[index][indexs].parameter&&
 
    (<div> <span className='text-red-400'>{formik.errors.data[index][indexs].parameter}</span></div>) }

{console.log(formik.errors,"Formik.Error")}

 
      
                       </Grid>
                
                            <Grid item md={4}>
                                <div> 
                                    <label> condition</label>
                                </div>
                                <input type="number"
                               
                               value={formik.values.data[index][indexs]?.condition}
                               onChange={(e) => formik.setFieldValue(`data.${index}.${indexs}.condition`, e.target.value)}
                                  
                                  className="form-control"
                                    placeholder='Greater than'
                                    name="condition" />
                                <div>
                                    {formik.errors.condition && formik.touched.condition && (<p>{formik.errors.condition}</p>)}
                                </div>
                            </Grid>
                
                            <Grid item md={3}>
                                <div><label>value</label></div>
                                <div className="input-group-prepend"><span className="input-group-text">Rs.</span>
                                    <input type="number"
                                      value={formik.values.data[index][indexs]?.rs}
                                      onChange={(e) => formik.setFieldValue(`data.${index}.${indexs}.rs`, e.target.value)}
                                        
                                        className="form-control"
                                        name='rs' />
                                </div>
                                <div>{formik.errors.rs && formik.touched.rs && (<p>{formik.errors.rs}</p>)} </div>
                            </Grid>
                
                            <Grid item md={1}>  
                              {  newdata.length   !== 1 && 
 
                                
            <button   onClick={() => { remove(index, indexs) }} 
                         >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                </svg>
                            </button>    
                             }    
                            </Grid>
                      </Grid>
                  </Paper>  
      )}
   )}

<div className='margin'> 
                <button className="btn btn-primary" type="submit"
                           onClick={() => {
                            add_and(index);
                            formik.handleSubmit();
                            }}
                            > ADD
                    </button>
                     </div>
            </div>
) })} 
    <div className='d-flex justify-content-between margin'>
<button className='btn btn-success' type='submit' onClick={() => add_or()}>OR</button>
<button className='btn btn-success' type='submit' onClick={formik.handleSubmit}>Submit</button>  
 </div> 
         </Container>
        </>
    )
}




//     validationSchema: Yup.object({
//     parameter: Yup.string().required("Parameterm  is required!"),
//     condition: Yup.string().required("Condition  is required!"),
//     rs: Yup.string().required("Rs is required!"),
//     }),

      
    
    
    
    //     const handleAdd = (index) => {
    //         const addForm = { fname: "", lname: "", age: "" };
    //         const adddata = [...formik.values.addRow.btn[index], addForm];
        //         let newrow = [...formik.values.addRow.btn];
        //         newrow[index] = adddata;
        //         formik.setFieldValue("addRow", { ...formik.values.addRow, btn: newrow })
        //     }
                

      
                   








    //     const [initialValues,setInitialValues] = useState({
    //         data_or : [
    //             {
    //                 data_and:[
    //                     {
    //                         input_one:"",
    //                         input_two:"",
    //                         input_three:"",
    //                     },
    //                 ],
    //             },
    //         ],
    //     });
    
    //     const inputSchema = Yup.object().shape(data_or : Yup.array(Yup.object().shape({data_and : Yup.array(Yup.object().shape({
    //                     input_one: Yup.string().required('Enter Input One'), 
    //                     input_two: Yup.string().required('Enter Input Two'),                             
    //                     input_three: Yup.string()..required('Enter Input Three'), 
    //                 })
    //             )
    //             })
    //         )
    //     })
    
    // .required('Enter Input Three'), 
    //                 })
    //             )
    //             })
    //         )
    //     })




    // {
    //     formik.errors.data_or && 
     //      formik.errors.data_or[i] && 
    //     formik.errors.data_or[i].data_and && 
    //     formik.errors.data_or[i].data_and[index] && 
    //     formik.errors.data_or[i].data_and[index].input_one &&
    //     formik.touched.data_or && 
    //     formik.touched.data_or[i] && 
    //     formik.touched.data_or[i].data_and && 
    //     formik.touched.data_or[i].data_and[index] && 
    //     formik.touched.data_or[i].data_and[index].input_one ?
    //      (<div className="Error">{formik.errors.data_or[i].data_and[index].input_one}</div>) : 
    //      (<div className="noerror"><span></span></div>)
    //     }







     worng  methado affter 5 days  solutuion  

    const formik = useFormik({
       
        initialValues:{
    data:[[{parameter: "", condition: "", rs: "",}]]
           },
     
        validationSchema: Yup.object().shape
        {data:Yup.array(Yup.array(Yup.object().shape({
    
parameter: Yup.string().required("Parameterm is required!"),
condition: Yup.string().required("Condition is required!"),
        rs: Yup.string().required("Rs is required!"),
          })
       ))

       
          }  ),








4:24 13-07-2023
          import './App.css';
          import { Container, Paper, Grid } from '@material-ui/core';
          import { makeStyles } from '@material-ui/core';
          import { useFormik } from 'formik';
          import * as Yup from "yup";
          import { useDispatch } from 'react-redux';
          import { addData } from './Redux/Formslice';
          
          const useStyles = makeStyles((theme) => ({
          
              roo: {
                  paddingTop: theme.spacing(18),
              },
          })
          );
          export default function Form() {
          
              const dispatch = useDispatch();
              const classes = useStyles();
          
          
          
              const formik = useFormik({
          
                  initialValues: {
                      data: [[{ parameter: "", condition: "", rs: "", }]]
                  },
                  validationSchema: Yup.object(
                      {
                          data: Yup.array(Yup.array(Yup.object().shape({
                              parameter: Yup.string().required("Parameterm is required!"),
                              condition: Yup.string().required("Condition is required!"),
                              rs: Yup.string().required("Rs is required!"),
                          })
                          ))
                      }),
                  onSubmit: values => {
                      dispatch(addData(values));
                      alert(JSON.stringify(values, null, 2));
                      console.log(values, "values");
                  },
              })
          
              const add_and = (index) => {
                  const row = { parameter: "", condition: "", rs: "", }
                  let y = [...formik.values.data];
                  y[index] = [...formik.values.data[index], row];
                  formik.setFieldValue("data", y)
              };
          
          
              const add_or = () => {
                  const row = { parameter: "", condition: "", rs: "", }
                  const y = [...formik.values.data, [row]];
                  formik.setFieldValue("data", y)
              };
          
              const remove = (index, indexs) => {
                  const remove_data = [...formik.values.data];
                  remove_data[index].splice(indexs, 1);
                  formik.setFieldValue({ ...formik.values.data, remove_data })
              };
          
              console.log(formik.values.data, "formik.values.data");
              return (
                  <>
                      <Container className={classes.root} >
          
                          {formik.values.data?.map((newdata, index) => {
          
                              return (
          
                                  <div key={index} >
          
                                      {newdata && newdata.map((pushdata, indexs) => {
          
                                          return (
          
          
          
                                              <Paper p={12} key={indexs}
                                                  className="margin"
                                              >
          
          
                                                  <Grid container spacing={8}>
                                                      <Grid item md={4}>
                                                          <div>
                                                              <label>parameter</label>  </div>
                                                          <input type="number"
                                                              className="form-control"
                                                              placeholder='today'
                                                              name='parameter'
                                                              value={formik.values.data[index][indexs]?.parameter}
                                                              onChange={(e) => formik.setFieldValue(`data.${index}.${indexs}.parameter`, e.target.value)}
          
                                                          />
          
                                                          {
                                                              formik.errors &&
                                                              formik.errors.data &&
                                                              formik.errors.data[index] &&
                                                              formik.errors.data[index][indexs] &&
                                                              formik.errors.data[index][indexs].parameter &&
                                                              formik.touched &&
                                                              formik.touched.data &&
                                                              formik.touched.data[index] &&
                                                              formik.touched.data[index][indexs] &&
                                                              formik.touched.data[index][indexs].parameter &&
          
                                                              (<div> <span className='text-red-400'>{formik.errors.data[index][indexs].parameter}</span></div>)}
          
                                                          {console.log(formik.errors, "Formik.Error")}
          
          
          
                                                      </Grid>
          
                                                      <Grid item md={4}>
                                                          <div>
                                                              <label> condition</label>
                                                          </div>
                                                          <input type="number"
          
                                                              value={formik.values.data[index][indexs]?.condition}
                                                              onChange={(e) => formik.setFieldValue(`data.${index}.${indexs}.condition`, e.target.value)}
          
                                                              className="form-control"
                                                              placeholder='Greater than'
                                                              name="condition" />
                                                          {
                                                              formik.errors &&
                                                              formik.errors.data &&
                                                              formik.errors.data[index] &&
                                                              formik.errors.data[index][indexs] &&
                                                              formik.errors.data[index][indexs].condition &&
                                                              formik.touched &&
                                                              formik.touched.data &&
                                                              formik.touched.data[index] &&
                                                              formik.touched.data[index][indexs] &&
                                                              formik.touched.data[index][indexs].condition &&
          
                                                              (<div> <span className='text-red-400'>{formik.errors.data[index][indexs].condition}</span></div>)}
                                                      </Grid>
          
                                                      <Grid item md={3}>
                                                          <div><label>value</label></div>
                                                          <div className="input-group-prepend"><span className="input-group-text">Rs.</span>
                                                              <input type="number"
                                                                  value={formik.values.data[index][indexs]?.rs}
                                                                  onChange={(e) => formik.setFieldValue(`data.${index}.${indexs}.rs`, e.target.value)}
          
                                                                  className="form-control"
                                                                  name='rs' />
                                                          </div>
                                                          {
                                                              formik.errors &&
                                                              formik.errors.data &&
                                                              formik.errors.data[index] &&
                                                              formik.errors.data[index][indexs] &&
                                                              formik.errors.data[index][indexs].rs &&
                                                              formik.touched &&
                                                              formik.touched.data &&
                                                              formik.touched.data[index] &&
                                                              formik.touched.data[index][indexs] &&
                                                              formik.touched.data[index][indexs].rs &&
          
                                                              (<div> <span className='text-red-400'>{formik.errors.data[index][indexs].rs}</span></div>)}
                                                      </Grid>
          
                                                      <Grid item md={1}>
                                                          {newdata.length !== 1 &&
          
          
                                                              <button onClick={() => { remove(index, indexs) }}
                                                              >
                                                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                                                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                                                  </svg>
                                                              </button>
                                                          }
                                                      </Grid>
                                                  </Grid>
                                              </Paper>
                                          )
                                      }
                                      )}
          
                                      <div className='margin'>
                                          <button className="btn btn-primary" type="submit"
                                              onClick={() => {
                                                  add_and(index);
                                                  // formik.handleSubmit();
                                              }}
                                          > ADD
                                          </button>
                                      </div>
                                  </div>
                              )
                          })}
                          <div className='d-flex justify-content-between margin'>
                              <button className='btn btn-success' type='submit' onClick={() => add_or()}>OR</button>
                              <button className='btn btn-success' type='submit' onClick={formik.handleSubmit}>Submit</button>
                          </div>
                      </Container>
                  </>
              )
          }
          
          
          
          
          
