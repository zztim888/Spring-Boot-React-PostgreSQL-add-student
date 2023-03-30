import { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import Button from '@mui/material';
import { useEffect } from 'react';
// import * as React from 'react';

export default function Student() {
    const[name,setName]=useState('')
    const[address,setAddress]=useState('')
    const[students,setStudents]=useState([])

    //handleClick for the submit button
   const handleClick=(e)=>{
    e.preventDefault()
    const student={name,address}
    console.log(student);
    fetch("http://localhost:8080/student/add",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(student)
    }).then(()=> {
        console.log("new student added");
    })
   } 

   useEffect(()=>{
    fetch("http://localhost:8080/student/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setStudents(result);
    }
  )
  },[])

  return (    
    <Container>
        <Paper elevation={3} >
       <form className='{classes.root}' noValidate autoComplete='off'>               
      <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth 
       value={address}
       onChange={(e)=>setAddress(e.target.value)}
      />
      
      <button onClick={handleClick}>Submit</button>
       </form>
       
        {/* shows text below the form as you are typing */}
       {/* {name} <br/>
       {address} */}
      </Paper>

      <h1>Students</h1>

    <Paper elevation={3} >

      {students.map(student=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={student.id}>
         Id:{" "+student.id}<br/>
         Name:{" "+student.name}<br/>
         Address:{" "+student.address}
        </Paper>
      ))
}
    </Paper>      
    </Container>
  );
}
