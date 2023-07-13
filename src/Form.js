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
                      rs:Yup.string().required("Rs is required!"),
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
        //index inner list's index number.
        const row = { parameter: "", condition: "", rs: "", } // craete new onject
        console.log('new element: ', row);
        let copyData = [...formik.values.data]; // copy original value from data
        console.log('copyData - full Object: ', copyData);
        console.log('original data on index: ', copyData[index]); 
        copyData[index] = [...formik.values.data[index], row]; // copy index's array and add row on it.
        console.log('update data by index: ', copyData[index]); 
        formik.setFieldValue("data", copyData) // reset data
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




