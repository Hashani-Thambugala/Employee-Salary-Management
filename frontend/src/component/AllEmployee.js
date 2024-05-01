// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";


// export default function AllEmployee() {

//     const[employees,setEmployee] = useState([]);

//     useEffect(() =>{
//         function getEmployee(){
//             axios.get("http://localhost:8070/employee/").then((res) => {
//                 setEmployee(res.data);
//             }).catch((err) => {
//                 alert(err.message);
//             })
//         }

//         getEmployee();

//     }, [])
//     return(
//         <div>
//             <h1>All Employee</h1>
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>
//                             No
//                         </th>  
//                         <th>
//                             Name
//                         </th>
//                         <th>
//                             Age
//                         </th>
//                         <th>
//                             Gender
//                         </th>
//                          <th>
//                             Action
//                         </th> 
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                        employees.map((employee, index) => (
//                            <tr key ={index} >
//                                  <th>{index+1}</th> 
//                                 <td>
//                                     {/* <Link to = {'/get/:id'} style ={{textDecoration:'none'}}> */}
//                                     {employee.name}
//                                     {/* </Link> */}
                                    
//                                 </td>
//                                 <td>{employee.age}</td>
//                                 <td>{employee.gender}</td>

//                              <td>
//                               <Link to = {`/update/${employee._id}`}><button> Update</button></Link> 
//                              <button>Delete</button>
                             
//                              <Link to = {`/get/${employee._id}`}><button> View</button></Link>
//                               </td>

                             
//                             </tr>
//                         ))
//                     }
                   
//                 </tbody>
//             </table>

//             <button className="btn-btn success" ><Link to = "/add" style={{textDecoration:'none', color:"Black"}}>Add New Employee</Link></button>

//         </div>
//     )
// }
