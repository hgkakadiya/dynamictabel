import { configureStore } from "@reduxjs/toolkit";
import Formslice from "./Formslice";

const Store = configureStore({
    reducer: {
        formData: Formslice,
    },
});

export default Store;





// <Container className={classes.root}  name="employees" render ={(arrayhelpers) => 
//     return ( 
//         <div> {formik.values.employees.map((x, y) => (<div key={y}> 

//         <div>  {`x ${y+1}`} </div>          )   )    }      

//         </div> )} >





















// import './App.css';
// //import { Container,Paper,Box,typography,Grid } from '@mui/system';
// import { Container, Paper, Grid } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core';
// import {  useState } from 'react';                         // useEffect,
// import { useFormik } from 'formik';
// import * as Yup from "yup";
// import { addData } from './Redux/Formslice';
// import { useDispatch } from 'react-redux';
// //import { ClassNameConfigurator } from '@mui/base';
// const useStyles = makeStyles((theme) => ({
//     root: {  // gap: theme.spacing(12  ), // '8px auto'
//         //   background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
//     },
//     roo: {
//         paddingTop: theme.spacing(14),
//     },
// })
// );
// export default function Form() {

//     const dispatch = useDispatch();
//     const classes = useStyles();


//     const [users, setUsers] = useState([{}]);
    
//     const adduser = () => {

//         setUsers([...users,users])
//     };




//     const [Template, setTemplate] = useState([{}]);


//     const  addTemplate = () => {

//         setTemplate([...Template,Template])
//     };



//     const formik = useFormik({
//         initialValues: {
//             parameter: "",
//             condition: "",
//             rs: "",
//         },
//         validationSchema: Yup.object({
//             parameter: Yup.string().required("parameter!"),
//             condition: Yup.string().required("condition!"),
//             rs: Yup.string().required("rs"),

//         }),
//         onSubmit: values => {
//             dispatch(addData(values));
//             alert(JSON.stringify(values, null,));
       

//         },
//     })



//     const handleremove = index => {
//         const list = [...users];
//         list.splice(index, 1);
//         setUsers(list);
//     }

  


 
//  return (
//         <>
//             <Container className={classes.root} >
//              {Template.map((x, y) => (
//              <div key={y} className={classes.roo}   >  
//                 <Paper p={12}>
//                     {users.map((user, index) => (

//                         <Grid container spacing={8} key={index}  >

//                             <Grid item md={4}>  <div>   <label>parameter</label>  </div>
//                                 <input type="number"
//                                     className="form-control"
//                                     placeholder='today'
//                                     name='parameter'
//                                     //  value={formik.values.parameter}

//                                     onChange={(e) => formik.setFieldValue("parameter", e.target.value)}
//                                 />
//                                 <div>  {formik.errors.parameter && formik.touched.parameter && (<p>{formik.errors.parameter}</p>)} </div>
//                             </Grid>

//                             <Grid item md={4}>   <div>   <label> condition</label>  </div>
//                                 <input type="number"
//                                     className="form-control"
//                                     placeholder='Greater than'
//                                     // value={formik.values.condition}
//                                     // onChange={formik.condition}
//                                     onChange={(e) => formik.setFieldValue("condition", e.target.value)}
//                                     name="condition"
//                                 />  </Grid>

//           <Grid item md={3}>  <div><label>value</label></div>  <div className="input-group-prepend">
//                 <span className="input-group-text">Rs.</span>
//                  <input type="number"
//                                     className="form-control"
//                                     name='rs'
//                                     //  value={formik.values.rs}
//                                     // onChange={formik.rs}
//                                     onChange={(e) => formik.setFieldValue("rs", e.target.value)}
//                                 />  </div>  </Grid>

//                             <Grid item md={1}>   {users.length !== 1 && <button onClick={() => handleremove(index)}>
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
//                                     <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
//                                     <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
//                                 </svg>
//                             </button>}  </Grid>
//                         </Grid>
//                     ))}
//                     <div className='margin' > <button className="btn btn-primary" type="submit"
//                         onClick={adduser} >ADD</button> </div>

// </Paper>
//                </div>
//                 ))} 
             
//               <div className='d-flex justify-content-between margin'>
//                     <button className="btn btn-primary" type="submit" onClick={addTemplate}>OR</button>
//                     <button className='btn btn-success' type='submit' onClick={formik.handleSubmit}>Submit</button>
//                 </div>

//             </Container>
// </>
//     )
// }