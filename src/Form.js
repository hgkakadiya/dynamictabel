import './App.css';
import { Container, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { addData } from './Redux/Formslice';
 
const useStyles = makeStyles((theme) => ({
    
    roo: {
        paddingTop: theme.spacing(14),
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
       
validationSchema: Yup.object({
  data: Yup.array().of( 
        Yup.object().shape({
        parameter: Yup.number().required("Parameterm  is required!"),
        condition: Yup.string().required("Condition  is required!"),
        rs: Yup.string().required("Rs is required!"),
          })
          )
    }) ,
onSubmit: values => {
    dispatch(addData(values));
    alert(JSON.stringify(values, null, 2));
            console.log(values, "values");},
})



const add_and = (index) => {
 const row ={parameter: "", condition: "", rs: "",} 
 console.log(row,"row");
    let  y = [...formik.values.data]; 
    console.log(y,"y");
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
    <div>
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
    formik.touched.data[index][indexs].parameter ?
    (  
    <span className='text-red-400'>{formik.errors.data[index][indexs].parameter}</span>) : null
                                                                                       }</div>
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
                

     
      
                   