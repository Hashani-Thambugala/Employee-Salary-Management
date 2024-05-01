import { useState } from "react";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AddEmployee(){

    // const[id, setId] = useState(-1);
    const[name, setName] = useState ("");
    const[age, setAge] = useState("");
    const[gender,setGender] = useState("");

    const data = [];


    function sendData(e){
        e.preventDefault();
        alert("Insert");

        // let id;

        // if (data.length > 0) {
        //      id = data[data.length - 1].id + 1;
        //   } else {
        //     id = 1; 
        //   }
        

         const newEmployee ={
           
            name,
            age,
            gender,
        }

        axios.post("http://localhost:8070/employee/add",newEmployee).then(() =>{
            alert("Employee Added")

            
            setName("");
            setAge("");
            setGender("");
            
        }).catch((err) => {
            alert(err)
        })
    }

    return(

        <div className="container">
            <form onSubmit={sendData}>
           <div className="mb-3">
           <label for="name" className="form-label">Employee Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter Student Name" onChange={(e) => {

                setName(e.target.value);

            }}/> 
            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
           </div> 

           <div className="mb-3">
           <label for="age" className="form-label">Employee Age</label>
            <input type="text" className="form-control" id="age" placeholder="Enter Student Age" onChange={(e) => {

                setAge(e.target.value);

            }} /> 
            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
           </div> 

           <div className="mb-3">
           <label for="gender" className="form-label">Gender </label>
            <input type="text" className="form-control" id="gender" placeholder="Enter Student Gender" onChange={(e) =>{

                setGender(e.target.value);

            }} /> 
            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
           </div> 
           {/* <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
           <input type="password" class="form-control" id="exampleInputPassword1"/>
           </div> */}
           {/* <div class="mb-3 form-check">
           <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
           <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div> */}
           <button type="submit" className="btn btn-primary"><Link to = "/" style={{textDecoration:'none', color:"Black"}}>Add Employee</Link></button>
          </form>
        </div>
    )





}

