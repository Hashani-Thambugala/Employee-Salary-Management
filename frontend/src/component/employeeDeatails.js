// import React, { Component } from "react";
// import axios from "axios";

// export default class StudentDeatails extends Component{

//      constructor(props){
//         super (props)

//        this.state={

//              students:{},
//          };
//      }

//      componentDidMount(){

//          const id = this.props.match.params.id;

//         axios.get("http://localhost:8070/student/get/:id").then((res) => {

//         if (res.data.success){
//             this.setState({
//                 students:res.data.student
//            });
//        }

//        });


//      }
//     render() {
 
        
//         return(

//             <div>
//                 Student detailes
//             </div>
//         )
//     }
// }


import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import './employeeSalarydetailes.css';

const EmployeeSalaryDetails = () => {
      const {id}= useParams();
       const [employeesalarydetailes, setemployeesalarydetailes] = useState({});

  useEffect(() => {
  const fetchEmployeeSalaryDetails = async () => {
          try {
            const response  = await axios.get(`http://localhost:8070/employee/get/${id}`);
        //     if(!response.ok){
        //       throw new Error(`HTTP error! Status: ${response.status}`);
        // }
            const data = await response.data;
            setemployeesalarydetailes(data.employeesalarydetailes);
          } catch (error) {
            console.error('Error fetching user details:', error);
          }
        };

        fetchEmployeeSalaryDetails();

      },[id]);

      return (
        <div>
          {employeesalarydetailes ? (
          //   <div>
          //      <h2>{employeesalarydetailes.name}</h2>
          //     <p>{employeesalarydetailes.position}</p>
          //     <p>{employeesalarydetailes.email}</p>
          //     <p>{employeesalarydetailes.gender}</p>
          //     <p>{employeesalarydetailes.salary}</p>
          //     <p>{employeesalarydetailes.Tax}</p>
          //     <p>{employeesalarydetailes.NetSalary}</p> 


          //     {/* Add other fields as needed */}
          //     <Link to={`/addOTSalary`}><button>Add OT </button></Link>
          //     <button>Special leaving </button>
          //   </div>
          // ) : (
          //   <p>Loading page...</p>

          <div class="page-content page-container" id="page-content">
    <div class="padding">
        <div class="row container d-flex justify-content-center">
<div class="col-xl-6 col-md-12">
                                                <div class="card user-card-full">
                                                    <div class="row m-l-0 m-r-0">
                                                        <div class="col-sm-4 bg-c-lite-green user-profile">
                                                            <div class="card-block text-center text-white">
                                                                <div class="m-b-25">
                                                                    <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image"></img>
                                                                </div>
                                                                <h6 class="f-w-600">{employeesalarydetailes.name}</h6>
                                                                <p>{employeesalarydetailes.position}</p>
                                                                <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-8">
                                                            <div class="card-block">
                                                                {/* <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6> */}
                                                                <div class="row">
                                                                    <div class="col-sm-6">
                                                                        <p class="m-b-10 f-w-600">Name</p>
                                                                        <h6 class="text-muted f-w-400">{employeesalarydetailes.name}</h6>
                                                                    </div>
                                                                    <div class="col-sm-6">
                                                                        <p class="m-b-10 f-w-600">position</p>
                                                                        <h6 class="text-muted f-w-400">{employeesalarydetailes.position}</h6>
                                                                    </div>
                                                                </div>
                                                                {/* <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</h6> */}
                                                                <div class="row">
                                                                    <div class="col-sm-6">
                                                                        <p class="m-b-10 f-w-600">Email</p>
                                                                        <h6 class="text-muted f-w-400">{employeesalarydetailes.email}</h6>
                                                                    </div>
                                                                    <div class="col-sm-6">
                                                                        <p class="m-b-10 f-w-600">Gender</p>
                                                                        <h6 class="text-muted f-w-400">{employeesalarydetailes.gender}</h6>
                                                                    </div>

                                                                    <div class="col-sm-6">
                                                                        <p class="m-b-10 f-w-600">Salary</p>
                                                                        <h6 class="text-muted f-w-400">{employeesalarydetailes.salary}</h6>
                                                                    </div>

                                                                    <div class="col-sm-6">
                                                                        <p class="m-b-10 f-w-600">Tax</p>
                                                                        <h6 class="text-muted f-w-400">{employeesalarydetailes.tax}</h6>
                                                                    </div>

                                                                    <div class="col-sm-6">
                                                                        <p class="m-b-10 f-w-600">Net Salary</p>
                                                                        <h6 class="text-muted f-w-400">{employeesalarydetailes.netSalary}</h6>
                                                                    </div>


                                                                </div>
                                                                <ul class="social-link list-unstyled m-t-40 m-b-10">
                                                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i class="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i class="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                             </div>
                                                </div>
                                            </div>

) : (
     <p>Loading page...</p>
          )}
        </div>
      );
    };

    export default EmployeeSalaryDetails;
// //     axios.get(`http://localhost:8070/get/${id}`).then((res) => {
// //       if (res.data.success) {
// //         setStudent(res.data.student);
// //       } else {
// //         console.error(res.data.error);
// //       }
// //     });
// //   }, [match.params.id]);

// //   return (
// //     <div>
// //       student detailes
// //     </div>
// //   );
// // };

// // export default StudentDeatails;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";


// export default function StudentDeatails() {

//     const[students,setStudent] = useState([]);

//     useEffect(() =>{
//         function getStudent(){
//             axios.get("http://localhost:8070/student/get/:id").then((res) => {
//                 setStudent(res.data);
//             }).catch((err) => {
//                 alert(err.message);
//             })
//         }

//         getStudent();

//     }, [])

//     return(

//       <div>Student detailes</div>
//     )

// }
