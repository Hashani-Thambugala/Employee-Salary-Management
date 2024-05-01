import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './addOT.css';



export default function AddOTSalary () {


    const[name, setName] = useState ("");
    const[position, setPosition] = useState("");
    const[email, setEmail] = useState("");
    // const[gender,setGender] = useState("");
    const[salary,setSalary] = useState("");
    // var[taxRate,setTaxRate] = useState("");
    // var[tax,setTax]=useState(0);
    const[noOFOThours,setNoOFOThours] = useState("");
    var[oTnetSalary,setOTnetSalary] = useState(0);
    const[errors, setErrors] = useState({});

    // const data = [];

    function validateForm() {

        let isValid = true;
        const errors = {};

        if(!name.trim()){
            errors.name="Name is required";
            isValid = false;
        }

        if(!position.trim()){
            errors.position="Position is required";
            isValid = false;
        }

        if(!email.trim()){
            errors.email="Name is required";
            isValid = false;

        }else if(!/\S+@\S+\.\S+/.test(email)) {

            errors.email = "Email is invalid";
            isValid = false;
        }

        // if(!gender.trim()){
        //     errors.gender="Gender is required";
        //     isValid = false;
        // }

        if(!salary.trim()){
            errors.salary="Salary is required";
            isValid = false;
        }else if (isNaN(Number(salary))){
            errors.salary = "Salary must be a number";
            isValid = false;
        }

        

        setErrors(errors);
        return isValid;

    }

    function handleSalaryChange(e) {
        const { value } = e.target;
        if (!isNaN(Number(value))) {
            setSalary(value);
        }
    }

    const calculateOTSalary = (x) => {

        // alert(noOFOThours);
        const overtimeRate = 1.5;
        const otnetSalary = salary * overtimeRate * x;
        setOTnetSalary(otnetSalary);
    }

    function sendData(e){
        e.preventDefault();

        if(!validateForm()){
            return;
        }
        calculateOTSalary(noOFOThours);
        alert("Insert");

        // let id;

        // if (data.length > 0) {
        //      id = data[data.length - 1].id + 1;
        //   } else {
        //     id = 1; 
        //   }
        

         const newotSalaries ={
           
            name,
            position,
            email,
            // gender,
            salary:salary,
            noOFOThours:noOFOThours,
            // tax,
            oTnetSalary:oTnetSalary

        }

        axios.post("http://localhost:8070/employee/addOTSalary",newotSalaries).then(() =>{
            alert("Employee OT Added")

            
            setName("");
            setPosition("");
            // setGender("");
            setEmail("");
            setSalary("");
            // setTax(0);
            setNoOFOThours("");
            setOTnetSalary(0);
            
        }).catch((err) => {
            alert(err)
        })
    }

    // function OTCalculation(){

    //      let OThours = 0;
    //      let netSalary = 0;

    //      if(salary > 50000){
    //         tax = salary * (10/100);
    //      }else if(salary > 30000){
    //         tax = salary * (50/100);
    //      }else{
    //         tax = 0;
    //      }

    //      setTax(tax);
        
    //      netSalary = salary-tax;
    //      setNetSalary(netSalary);


    // }

    return(

        <div className="container">
            <form onSubmit={sendData}>
           <div className="mb-3">
           <label for="name" className="form-label">Employee Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter Name" onChange={(e) => {

                setName(e.target.value);

            }}/> 

            {errors.name && <div className="text-danger">{errors.name}</div>}
            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
           </div> 

           <div className="mb-3">
           <label for="age" className="form-label">Employee Position</label>
            <input type="text" className="form-control" id="age" placeholder="Enter Position" onChange={(e) => {

                setPosition(e.target.value);

            }} /> 
            {errors.position && <div className="text-danger">{errors.position}</div>}
            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
           </div> 

           <div className="mb-3">
           <label for="gender" className="form-label">Email </label>
            <input type="email" className="form-control" id="email" placeholder="Enter Email" onChange={(e) =>{

                setEmail(e.target.value);

            }} /> 
            {errors.email && <div className="text-danger">{errors.email}</div>} 
            </div>

            <div className="mb-3">
           <label for="gender" className="form-label">Salary </label>
            <input type="text" className="form-control" id="salary" placeholder="Enter Salary" value={salary} onChange={(e) =>{

                validateForm();
                setSalary(e.target.value);
                // Calculation();

            }} /> 
            {errors.salary && <div className="text-danger">{errors.salary}</div>} 
            </div>

            

           <div className="mb-3">
           <label for="tax" className="form-label">No of hours </label>
             <input type="text" className="form-control" id="noOFOThours" placeholder="noOfOThourse" value={noOFOThours} onChange={(e) =>{

                   setNoOFOThours(e.target.value);
                   calculateOTSalary(e.target.value);

              }}  />  
            </div>

            <div className="mb-3">
           <label for="gender" className="form-label">NetSalary </label>
             <input type="text" className="form-control" id="oTnetSalary" placeholder="Net Salary" value={oTnetSalary} onChange={(e) =>{

                    setOTnetSalary(e.target.value);

               }}  readOnly />  
            </div>
           {/* <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
           <input type="password" class="form-control" id="exampleInputPassword1"/>
           </div> */}
           {/* <div class="mb-3 form-check">
           <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
           <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div> */}
           <button type="submit"  className="btn btn-primary" onClick={sendData} >Add OT Salary</button>
          </form>

          <Link to ={'/allOTsalaries'}><button  className="btn btn-info" style={{marginRight:"10px"}}>Go Back All OT Salary</button></Link>
        </div>






        )



}