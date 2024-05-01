import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import './employeeSalarydetailes.css';

const SpecialSalaryView = () => {
      const {id}= useParams();
       const [specialLeavingSalaries, setspecialLeavingSalaries] = useState({});

       useEffect(() => {
        const fetchSpecialLeavingSalaries = async () => {
                try {
                  const response  = await axios.get(`http://localhost:8070/employee/getSpecial/${id}`);
              //     if(!response.ok){
              //       throw new Error(`HTTP error! Status: ${response.status}`);
              // }
                  const data = await response.data;
                  setspecialLeavingSalaries(data.specialLeavingSalaries);
                } catch (error) {
                  console.error('Error fetching user details:', error);
                }
              };
      
              fetchSpecialLeavingSalaries();
      
            },[id]);
      return (
        <div>
          {specialLeavingSalaries ? (
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
                                                                <h6 class="f-w-600">{specialLeavingSalaries.name}</h6>
                                                                <p>{specialLeavingSalaries.position}</p>
                                                                <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-8">
                                                            <div class="card-block">
                                                                {/* <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6> */}
                                                                <div class="row">
                                                                    <div class="col-sm-6">
                                                                        <p class="m-b-10 f-w-600">Name</p>
                                                                        <h6 class="text-muted f-w-400">{specialLeavingSalaries.name}</h6>
                                                                    </div>
                                                                    <div class="col-sm-6">
                                                                        <p class="m-b-10 f-w-600">position</p>
                                                                        <h6 class="text-muted f-w-400">{specialLeavingSalaries.position}</h6>
                                                                    </div>
                                                                </div>
                                                                {/* <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</h6> */}
                                                                <div class="row">
                                                                    <div class="col-sm-6">
                                                                        <p class="m-b-10 f-w-600">Email</p>
                                                                        <h6 class="text-muted f-w-400">{specialLeavingSalaries.email}</h6>
                                                                    </div>
                                                                    {/* <div class="col-sm-6">
                                                                        <p class="m-b-10 f-w-600">Gender</p>
                                                                        <h6 class="text-muted f-w-400">{otSalaries.gender}</h6>
                                                                    </div> */}

                                                                    <div class="col-sm-6">
                                                                        <p class="m-b-10 f-w-600">Salary</p>
                                                                        <h6 class="text-muted f-w-400">{specialLeavingSalaries.salary}</h6>
                                                                    </div>

                                                                    <div class="col-sm-6">
                                                                        <p class="m-b-10 f-w-600">No of OT hours</p>
                                                                        <h6 class="text-muted f-w-400">{specialLeavingSalaries.noOFleavingdates}</h6>
                                                                    </div>

                                                                    <div class="col-sm-6">
                                                                        <p class="m-b-10 f-w-600">Net Salary</p>
                                                                        <h6 class="text-muted f-w-400">{specialLeavingSalaries.leavingNetnetSalary}</h6>
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

    export default SpecialSalaryView;