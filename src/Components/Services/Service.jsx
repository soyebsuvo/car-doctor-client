import PropTypes from 'prop-types';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
export default function Service({ service }) {
    const { _id , title, img, price } = service;
    return (
        <div className="card bg-base-100">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title mx-3">{title}</h2>
                <div className="flex justify-between items-center text-orange-600 font-bold mx-3">
                    <p>Price : {price}</p>
                    <Link to={`/checkout/${_id}`}><button className=""> <AiOutlineArrowRight></AiOutlineArrowRight> </button></Link>
                </div>
            </div>
        </div>
    )
}
Service.propTypes = {
    service: PropTypes.object.isRequired
}
