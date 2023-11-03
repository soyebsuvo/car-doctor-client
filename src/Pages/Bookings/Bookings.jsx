import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../Components/AuthProvider/AuthProvider"
import BookingRow from "./BookingRow";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import axios from "axios";
// import PropTypes from 'prop-types';

export default function Bookings() {
    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])
    const url = `/bookings?email=${user?.email}`
    useEffect(() => {
        axiosSecure.get(url)
        .then(res => setBookings(res.data))
        // axios.get(url, { withCredentials: true })
        //     .then(res => {
        //         setBookings(res.data)
        //     })
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         setBookings(data)
        //     })
    }, [url])

    const handleDelete = (id) => {
        const procsed = confirm("are you sure to delete this item");
        if (procsed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remaining = bookings.filter(book => book._id !== id);
                        setBookings(remaining)
                        alert("deleted successfully")
                    }
                })
        }
    }

    const handleBookingConfirm = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: "confirm" })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert("confirmed")
                    const remaining = bookings.filter(book => book._id !== id)
                    const updated = bookings.find(book => book._id === id)
                    updated.status = "confirm"
                    setBookings([updated, ...remaining])
                }
            })
    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Delete</th>
                        <th>No.</th>
                        <th>Name</th>
                        <th className="text-center">Job</th>
                        <th>Service Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        bookings.map((booking, i) => <BookingRow
                            key={booking._id}
                            booking={booking}
                            i={i}
                            handleDelete={handleDelete}
                            handleBookingConfirm={handleBookingConfirm}
                        ></BookingRow>)
                    }

                </tbody>


            </table>
        </div>
    )
}
