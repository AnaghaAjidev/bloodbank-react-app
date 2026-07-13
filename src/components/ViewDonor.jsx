import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ViewDonor = () => {

    const [donors, changeDonors] = useState([])

    const fetchData = () => {

        axios.get("https://host-demo-app.onrender.com/api/donors").then(
            (response) => {
                changeDonors(response.data)
            }
        ).catch()

    }

    useEffect(
        () => {
            fetchData()
        }, []
    )

    return (
        <>

            <div className="container mt-4">

                <h2 className="text-center mb-4">View All Donors</h2>

                <div className="row g-4">

                    {donors.map(
                        (donor, index) => {
                            return (

                                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={donor.id}>

                                    <div className="card h-100 shadow-lg border-0 rounded-4">

                                        <div className="card-body">

                                            <h4 className="text-danger fw-bold">
                                                {donor.donor_name}
                                            </h4>

                                            <hr />

                                            <p><strong>Age:</strong> {donor.age}</p>

                                            <p><strong>Gender:</strong> {donor.gender}</p>

                                            <p><strong>Blood Group:</strong> {donor.blood_group}</p>

                                            <p><strong>Phone:</strong> {donor.phone}</p>

                                            <p><strong>Email:</strong> {donor.email}</p>

                                            <p><strong>City:</strong> {donor.city}</p>

                                            <p><strong>Weight:</strong> {donor.weight_kg} kg</p>

                                            <p><strong>Last Donation:</strong> {donor.last_donation_date}</p>

                                        </div>

                                    </div>

                                </div>

                            )
                        }
                    )}

                </div>

            </div>
        </>
    )
}

export default ViewDonor