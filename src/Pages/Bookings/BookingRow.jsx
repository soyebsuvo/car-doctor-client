import PropTypes from 'prop-types';

export default function BookingRow({ booking, i , handleDelete , handleBookingConfirm}) {
    return (
        <tr>
            {/* <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th> */}
            <td>
                <button onClick={() => handleDelete(booking?._id)} className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
            <td>
                <h2>{i + 1}</h2>
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={booking?.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{booking?.name}</div>
                        <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td>
            <td className="text-center">
                {booking?.name}
                <br />
                <span className="badge badge-ghost badge-sm">{booking?.email}</span>
            </td>
            <td>{booking.title}</td>
            <th>
                {
                    booking?.status ? <span className='btn btn-sm text-orange-500 font-bold'>Confirmed</span> : 
                    <button onClick={() => handleBookingConfirm(booking?._id)} className="btn btn-ghost btn-xs">Please Confirm</button>
                    }
            </th>
        </tr>
    )
}
BookingRow.propTypes = {
    booking : PropTypes.object,
    i : PropTypes.number,
    handleDelete : PropTypes.func,
    handleBookingConfirm : PropTypes.func
}