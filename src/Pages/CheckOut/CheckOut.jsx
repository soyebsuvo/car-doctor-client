import { useContext } from "react";
import { useLoaderData } from "react-router-dom"
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";

export default function CheckOut() {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { title, img } = service;
    const handleBook = e => {
        e.preventDefault();
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const phone = e.target.phone.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        const order = {
            name: firstName + " " + lastName,
            phone,
            img,
            title,
            email,
            message
        }
        console.log(order)
        fetch("https://car-doctor-server-ten-jade.vercel.app/bookings", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div>
            <h2>Book Now : {title}</h2>
            <div className="hero min-h-screen">

                <div className="card w-full">
                    <form onSubmit={handleBook} className="card-body">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="form-control">

                                <input type="text" name="firstName" placeholder="First Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">

                                <input type="text" name="lastName" placeholder="Last Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered" required />
                            </div>
                            <div className="form-control">

                                <input type="email" name="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" required />
                            </div>
                        </div>
                        <div>
                            <textarea className="border-2 rounded-lg px-2 py-2 input-bordered w-full resize-none" placeholder="Message..." name="message" id="message" cols="30" rows="5"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary btn-block" type="submit" value="Order Now" />
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
