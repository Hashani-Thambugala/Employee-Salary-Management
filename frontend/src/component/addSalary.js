import { useState } from "react";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './addSalary.css';

export default function AddSalary(){

    // const[id, setId] = useState(-1);
    const[name, setName] = useState ("");
    const[position, setPosition] = useState("");
    const[email,setEmail] = useState("");
    const[gender,setGender] = useState("");
  
    const[salary,setSalary] = useState("");
    // var[taxRate,setTaxRate] = useState("");
    var[tax,setTax]=useState(0);
    var[netSalary,setNetSalary] = useState(0);
    const[errors, setErrors] = useState({});
    // const[profileImage, setProfileImage] = useState(null)

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

        // 
        
        if(!gender.trim()){
            errors.gender="Gender is required";
            isValid = false;
        } else if (!/^[a-zA-Z]+$/.test(gender)) {
            errors.gender = "Gender must contain only letters";
            isValid = false;
        }

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



    function sendData(e){
        e.preventDefault();
        if(!validateForm()){
            return;
        }

        if (isNaN(tax)) {
            alert("Tax must be a valid number.");
            return;
        }
        Calculation();
        alert("Insert");

        // const formData = new FormData();
        // formData.append("profileImage",profileImage);

        // let id;

        // if (data.length > 0) {
        //      id = data[data.length - 1].id + 1;
        //   } else {
        //     id = 1; 
        //   }
        // alert(tax);
        //     return;
         const newemployeesalarydetailes ={
           
            name,
            position,
            email,
            gender,
            salary: Number(salary),
            tax,
            netSalary,
            // profileImage: formData

        }

        axios.post("http://localhost:8070/employee/addSalary",newemployeesalarydetailes).then(() =>{
            alert("Employee Added")

            
            setName("");
            setPosition("");
            setEmail("");
            setGender("");
            setSalary("");
            setTax("");
            setNetSalary(0);
            // setProfileImage(null);
            
        }).catch((err) => {
            alert(err)
        })


    }

    // function Calculation(){

        
    //      let tax = 0;
    //      let netSalary = 0;

         
    //      if(salary > 50000){
    //         tax = salary * (10/100);
    //      }else if(salary > 30000){
    //         tax = salary * (50/100);
    //      }else{
    //      tax = 0;
         
        
    // }


    //      setTax(tax);
        
    //      netSalary = salary-tax;
    //      setNetSalary(netSalary);


    // }

    function Calculation() {
        let tax = 0;
        let netSalary = 0;
    
        const salaryValue = Number(salary);
    
        if (isNaN(salaryValue)) {
            alert("Salary must be a valid number.");
            return;
        }
    
        if (salaryValue >= 25000) {
            tax = salaryValue * (10 / 100);
        } else {
            tax = salaryValue * (5 / 100);
        }
    
        setTax(tax);
        netSalary = salaryValue - tax;
        setNetSalary(netSalary);
    }


   
    return(

    <div className="container1">
        
            <h1>Add Employee Salary Details</h1>
            <form onSubmit={sendData} >
           <div className="mb-3">
           <label for="name" className="form-label">Employee Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter Name" value={name} onChange={(e) => {

                setName(e.target.value);

            }}/> 

            {errors.name && <div className="text-danger">{errors.name}</div>}
            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
           </div> 

           <div className="mb-3">
           <label for="age" className="form-label">Employee Position</label>
            <input type="text" className="form-control" id="age" placeholder="Enter Position" value={position} onChange={(e) => {

                setPosition(e.target.value);

            }} /> 

            {errors.position && <div className="text-danger">{errors.position}</div>}
            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
           </div> 

           <div className="mb-3">
           <label for="gender" className="form-label">Email </label>
            <input type="text" className="form-control" id="email" placeholder="Enter Email" value={email} onChange={(e) =>{

                setEmail(e.target.value);

            }} />

            {errors.email && <div className="text-danger">{errors.email}</div>} 
            </div>

           <div className="mb-3">
           <label for="gender" className="form-label">Gender </label>
            <input type="text" className="form-control" id="gender" placeholder="Enter Gender" value={gender} onChange={(e) =>{

                validateForm();
                setGender(e.target.value);

            }} /> 

            {errors.gender && <div className="text-danger">{errors.gender}</div>} 
            </div>

            <div className="mb-3">
           <label for="gender" className="form-label">Salary </label>
            <input type="text" className="form-control" id="salary" placeholder="Enter Salary" value={salary} onClick={handleSalaryChange}  onChange={(e) =>{

                validateForm();
                setSalary(e.target.value);
                Calculation();
               

                

            }} /> 

            {/* onBlur = {(e) => 
            
            if(!/^\d+$/.test(e.target.value)){
                setErrors(PrevE)
            }
            
            
            } */}

            {errors.salary && <div className="text-danger">{errors.salary}</div>} 
            </div>

            

           <div className="mb-3">
           <label for="tax" className="form-label">Tax </label>
             <input type="text" className="form-control" id="tax" placeholder="tax" value={tax} onChange={(e) =>{

                   setTax(e.target.value);

              }} readOnly />  
              
            </div>

            <div className="mb-3">
           <label for="gender" className="form-label">NetSalary </label>
             <input type="text" className="form-control" id="netSalary" placeholder="Net Salary" value={netSalary} onChange={(e) =>{

                     setNetSalary(e.target.value);

               }}  readOnly />  
            </div>

            {/* <div className="mb-3">
           <label for="profileImage" className="form-label">Upload Profile Image </label>
             <input type="file" id="profileImage" placeholder="Add profile photo"  onChange={(e) =>{

                setProfileImage(e.target.files[0]);

               }}   />  
            </div> */}


           {/* <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
           <input type="password" class="form-control" id="exampleInputPassword1"/>
           </div> */}
           {/* <div class="mb-3 form-check">
           <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
           <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div> */}
           {/* <button type="submit"   className="btn btn-primary" ><Link to = "/" style={{textDecoration:'none', color:"Black"}}>Add Employee Salary</Link></button> */}
           <button type="submit"   className="btn btn-primary" onClick={sendData} >Add Employee Salary</button>
          </form>
        </div>

//          <div className="container">
//             <form onSubmit={sendData}>
//          {/* <button id="btnStart" type="button" class="btn btn-primary" data-toggle="modal" data-target="#formModal">Add New Employee</button> */}

//  {/* <div id="message">
// //   Thank you for filling in the awesome form and sending all data on your computer to the NSA. 
// // </div> */}

//  <div class="modal fade" id="formModal" tabindex="-1" role="dialog" aria-labelledby="formModalLabel" aria-hidden="true">
//    <div class="modal-dialog modal-dialog-centered" role="document">
//      <div class="modal-content">
//        <div class="modal-header">
//         <h3 class="modal-title" id="formModalLabel">Employee Salary Form</h3>
//         <button type="button" class="close" data-dismiss="modal" aria-label="close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <form id="formAwesome">
//         <div class="modal-body">
//           <div class="form-group row">
//             <label for="firstName" class="col-sm-6 col-form-label">
//               Name
//            </label>
            
//            <div class="col-sm-6">
//               <input type="text" class="form-control" id="name" placeholder="John" onChange={(e) => {

//                        setName(e.target.value);

//              }} required></input>

//             </div>
//           </div>

//           <div class="form-group row">
//             <label for="lastName" class="col-sm-6 col-form-label">
//               Position
//             </label>
//             <div class="col-sm-6">
//               <input type="text" class="form-control" id="Position" placeholder="Hair designer" onChange={(e) => {

//                         setPosition(e.target.value);

//              }} required></input>
//             </div>
//           </div>


//           <div class="form-group row">
//             <label for="email" class="col-sm-6 col-form-label">
//               E-mail address
//             </label>
//             <div class="col-sm-6">
//               <input type="email" class="form-control" id="email" placeholder="john.doe@email.com" ></input>
//             </div>
//           </div>


//           <div class="form-group row">
//             <label for="awesomeness" class="col-sm-6 col-form-label">
//               Gender</label>
//             <div class="col-sm-6">
//               <select class="form-control" id="awesomeness" value={gender} onChange={(e) =>{

//         setGender(e.target.value);

//     }}>
//                  <option></option>
//                 <option>Male</option>
//                 <option>Female</option>
//               </select>
//             </div>
//           </div>

//           <div class="form-group row">
//             <label for="lastName" class="col-sm-6 col-form-label">
//               Base Salary
//             </label>
//             <div class="col-sm-6">
//               <input type="text" class="form-control" id="BaseSalary" placeholder=" Enter Base Salary" onChange={(e) =>{

//                   setSalary(e.target.value);

//              }}  required></input>
//             </div>
//           </div>

//           <div class="form-group row">
//             <label for="lastName" class="col-sm-6 col-form-label">
//               Tax
//             </label>
//             <div class="col-sm-6">
//               <input type="number" class="form-control" id="tax" placeholder=" Enter Tax" onChange={(e) =>{

//                    setTax(e.target.value);

//                }}  required></input>
//             </div>
//           </div>

//           <div class="form-group row">
//             <label for="lastName" class="col-sm-6 col-form-label">
//               Net Salary
//             </label>
//             <div class="col-sm-6">
//               <input type="text" class="form-control" id="netSalary" placeholder="netSalary" onChange={(e) =>{

//                      setNetSalary(e.target.value);

//                }}  ></input>
//             </div>
//           </div>


//           <div class="form-check">
//             <input class="form-check-input" type="checkbox" value="" id="awesomeCheck" required></input>
//             <label class="form-check-label" for="awesomeCheck">
//               I confirm that person my Employee
//             </label>
//           </div>
//         </div>
//         <div class="modal-footer">
//           <button type="button" class="btn btn-secondary" data-dismiss="modal"><Link to ="/">Close</Link></button>
//           <button type="submit" class="btn btn-primary" onClick={Calculation} ><Link to = "/" >Submit</Link></button>
//         </div>
//       </form>
//     </div>
//    </div>
//  </div>
// </form>
//  </div>
    );





}

