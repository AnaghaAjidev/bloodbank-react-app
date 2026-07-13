import React, { useState } from 'react'
import axios from 'axios'
import NavBar from './NavBar'

const AddDonor = () => {

    const [input,changeInput] = useState(
        {
            donor_name:"",
            age:"",
            gender:"",
            blood_group:"",
            phone:"",email:"",
            city:"",
            weight_kg:"",
            last_donation_date:""

        }
    )

    const inputHandler = (event) =>{
        changeInput({...input,[event.target.name]: event.target.value})
    }

    const readValue = () => {

    console.log(input)

    axios.post("https://host-demo-app.onrender.com/api/add-donor",input).then(
      (response) => {
        console.log(response.data)
      }
    ).catch()
  }
  return (
    <>
      <NavBar />

      <div className="container mt-5">
        <div className="card shadow p-4">
          <h2 className="text-center mb-4">Add Donor</h2>

          <div className="row g-3">

            <div className="col-12 col-sm-6">
              <label className="form-label">Donor Name</label>
              <input type="text" className="form-control" placeholder="Enter Donor Name" name='donor_name' value={input.donor_name} onChange={inputHandler}/>
            </div>

            <div className="col-12 col-sm-6">
              <label className="form-label">Age</label>
              <input type="number" className="form-control" placeholder="Enter Age" name='age' value={input.age} onChange={inputHandler}/>
            </div>

            <div className="col-12 col-sm-6">
              <label className="form-label">Gender</label>
              <select className="form-select" name='gender' value={input.gender} onChange={inputHandler}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="col-12 col-sm-6">
              <label className="form-label">Blood Group</label>
              <select className="form-select" name='blood_group' value={input.blood_group} onChange={inputHandler}>
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            <div className="col-12 col-sm-6">
              <label className="form-label">Phone</label>
              <input type="text" className="form-control" placeholder="Enter Phone Number" name='phone' value={input.phone} onChange={inputHandler}/>
            </div>

            <div className="col-12 col-sm-6">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Enter Email Address" name='email' value={input.email} onChange={inputHandler}/>
            </div>

            <div className="col-12 col-sm-6">
              <label className="form-label">City</label>
              <input type="text" className="form-control" placeholder="Enter City" name='city' value={input.city} onChange={inputHandler}/>
            </div>

            <div className="col-12 col-sm-6">
              <label className="form-label">Weight (kg)</label>
              <input type="number" className="form-control" placeholder="Enter Weight" name='weight_kg' value={input.weight_kg} onChange={inputHandler}/>
            </div>

            <div className="col-12 col-sm-6">
              <label className="form-label">Last Donation Date</label>
              <input type="date" className="form-control" name='last_donation_date' value={input.last_donation_date} onChange={inputHandler}/>
            </div>

            <div className="col-12 text-center">
              <button className="btn btn-danger px-4" onClick={readValue}>
                Add Donor
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default AddDonor