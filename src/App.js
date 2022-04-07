import './App.css';
import {Grid } from '@mui/material';
import { MyForm } from './components/MyForm';
import { MyTable } from './components/MyTable'

function App() {
  return (
    <div className='app'>
      <Grid container spacing={2}>
        <Grid className='n' item xs={12} md={4} lg={4}>
          <MyForm />
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
          <MyTable />
        </Grid>
      </Grid>

    {/* <Grid container spacing={0} justifyContent="center" >
      <Grid item xs={12} md={5} lg={5}>
          <MyForm />
      </Grid>
    </Grid>
    <Grid container>
      <Grid item xs={12} md={12} lg={12} >
        <MyTable />
      </Grid>
    </Grid> */}

    </div>
  );
}

export default App;
