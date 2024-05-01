import React, { useEffect, useState } from "react";
import './update.css';
import  axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Update (){

	const{id} = useParams();
	const [employeesalarydetailes, setemployeesalarydetailes] = useState({
		id: id,
		name:'',
		position:'',
		email:'',
		gender:'',
		salary:'',
		tax:'',
		netSalary:''

	})
	// useEffect(() => {
	// 	axios.get(`http://localhost:8070/employee/get/${id}`)
	// 	.then(res => {
	// 		setEmployeesalarydetailes( ({...employeesalarydetailes, name: res.data.name, position: res.data.position, email: res.data.email, gender: res.data.gender, salary: res.data.salary, tax: res.data.tax, netSalary:res.data.netSalary}));
	// 	})
	// 	.catch(err => console.log(err))
	// }, [id])

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

    // const fetchData = async () => {
    //     try {
    //         const res = await axios.get(`http://localhost:8070/employee/update/${id}`);
    //         const data = res.data;
    //         setEmployeesalarydetailes(prevState => ({
    //             ...prevState,
    //             name: data.name,
    //             position: data.position,
    //             email: data.email,
    //             salary: data.salary,
    //             tax: data.tax,
    //             netSalary: data.netSalary
    //         }));
    //     } catch (error) {
    //         console.error("Error fetching salary details:", error);
    //     }
    // };

    // useEffect(() => {
    //     fetchData();
    // }, [id]);

    // useEffect(() => {
    //     if (employeesalarydetailes) {
    //         setEmployeesalarydetailes({
    //             name: employeesalarydetailes.name,
    //             position: employeesalarydetailes.position,
    //             email: employeesalarydetailes.email,
    //             salary: employeesalarydetailes.salary,
    //         });
    //     }
    // }, [employeesalarydetailes]);

	// const handleChange = (e) => {

	// 	const{name,value} 
	// }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setemployeesalarydetailes(prevState => ({
            ...prevState,
            [name]: value
        }));

        if (name === "tax") {
            const netSalary = employeesalarydetailes.salary - value;
            setemployeesalarydetailes(prevState => ({
                ...prevState,
                netSalary: netSalary
            }));
        }
    };

    const navigate = useNavigate()
    const handleSubmit = () => {
        axios.put(`http://localhost:8070/employee/updateSalary/${id}`, employeesalarydetailes)
            .then(res => {
                // console.log(res.data); // Log the response
                // Optionally, you can redirect to another page or show a success message

                navigate('/');
            })
            .catch(err => {
                if (err.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else if (err.request) {
                    // The request was made but no response was received
                    console.log(err.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', err.message);
                }
                console.log(err.config);
                // Optionally, you can show an error message to the user
            });
    };
    

    return (

        <div>

 <div class="container rounded bg-white mt-5 mb-5"> 
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"></img><span class="font-weight-bold">{employeesalarydetailes.name}</span><span class="text-black-50">{employeesalarydetailes.email}</span><span> </span></div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Update Detailes</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Name</label><input type="text" class="box" name="name" placeholder=" Name" value={employeesalarydetailes.name} onChange={handleChange}></input></div>
                    {/* <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control" value="" placeholder="surname"></input></div> */}
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Position</label><input type="text"  class="box" placeholder="position" name="position" value={employeesalarydetailes.position} onChange={handleChange} ></input></div>
                    <div class="col-md-12"><label class="labels">Email</label><input type="text" class="box" placeholder="Email" name="email" value={employeesalarydetailes.email} onChange={handleChange}></input></div>
                    <div class="col-md-12"><label class="labels">Salary</label><input type="text" class="box" placeholder="Salary" name="salary" value={employeesalarydetailes.salary} onChange={handleChange}></input></div>
                    <div class="col-md-12"><label class="labels">Tax</label><input type="text" class="box" placeholder="Email" name="tax" value={employeesalarydetailes.tax} onChange={handleChange}></input></div>
                    <div class="col-md-12"><label class="labels">Net Salary</label><input type="text" class="box" placeholder="Net Salary" name="netSalary" value={employeesalarydetailes.netSalary} onChange={handleChange}></input></div>
                    
                </div>
                
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button" onClick={handleSubmit}>Save Profile</button></div>
            </div>
        </div>
        
    </div>
</div>
</div>


        
    )
}

export default Update;