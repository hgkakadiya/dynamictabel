
import './App.css';
// import { Container,Paper,Box,typography,Grid } from '@mui/system';
import { Container, Paper, Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    // background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
  },
})
);


function App() {
  const classes = useStyles();
  const userTemplate = { parameter: "", condition: "", value: "" };
  const [users, setUsers] = useState([userTemplate]);

  const adduser = () => { setUsers([...users, userTemplate]) };
  console.log(adduser,"adduser");

   // const [] = useState();

const [Template, setTemplate] = useState([users]);

const addTemplate = () => {
    setTemplate([...Template, users])
  };
  console.log(addTemplate,"addtemplate");

const handleremove = index => {
    const list = [...users];
    list.splice(index, 1);
    setUsers(list);



  }

  return (
    <>


      <Container className={classes.root} >
        {Template.map((x, y) => (<div key={y}>
          <Paper component={Box} p={12}  >
            {users.map((user, index) => (

              <Grid container spacing={8} key={index}>
                <Grid item md={4}>  <div>   <label>parameter</label>  </div>
                  <input type="number" className="form-control" placeholder='today' />  </Grid>

                <Grid item md={4}>   <div>   <label> condition</label>  </div>
                  <input type="number" className="form-control" placeholder='Greater than' />  </Grid>

                <Grid item md={3}>  <div><label>value</label></div>  <div className="input-group-prepend">
                  <span className="input-group-text"  >Rs.</span>
                  <input type="number" className="form-control" placeholder="" />  </div>  </Grid>

                <Grid item md={1}>   {users.length !== 1 && <button
                  onClick={() => handleremove(index)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" /><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" /></svg>
                </button>}  </Grid>


              </Grid>





            )
            )
            }
            <div className={classes.root}> <button className="btn btn-primary" type="submit" onClick={adduser}>ADD</button> </div>
          </Paper>
        </div>
        ))}






        <div className={classes.root}  >    <button className="btn btn-primary" type="submit" onClick={addTemplate}>OR</button> </div>
      </Container>

    </>
  );
}

export default App;





//     < div class="needs-validation border border-primary" novalidate>

//       <div class="form-row">


//         <div class="col-md-3 mb-2">
//           <label for="validationTooltip01">parameter</label>
//           <input type="number"
//           class="form-control"
//           id="validationTooltip01" 
//           placeholder="today"
//         //  value="Mark" 
//           required />
//         </div>



//           <div class="col-md-3 mb-2">
//           <label for="validationTooltip02">condition</label>
//           <input type="number" 
//           class="form-control" 
//           id="validationTooltip02" 
//           placeholder=" Greater than" 
//           //value="Otto"
//           required />
//           </div>




//         <div class="col-md-3 mb-2">

//           <label for="validationTooltipUsername">value</label>

//           <div class="input-group">
//             <div class="input-group-prepend"><span class="input-group-text" id="validationTooltipUsernamePrepend">Rs.</span> </div>
//             <input type="text" 
//             class="form-control" 
//             id="validationTooltipUsername"
//             // placeholder="Username" 
//             // aria-describedby="validationTooltipUsernamePrepend"
//             required/>
//  </div>

//         </div>

// </div>

//       <button class="btn btn-primary" type="submit">ADD</button>
//     </div>