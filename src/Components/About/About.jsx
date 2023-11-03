import person from '../../assets/images/about_us/person.jpg';
import parts from '../../assets/images/about_us/parts.jpg';
export default function About() {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col md:flex-row">
                <div className='md:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-0 rounded-lg -bottom-20 border-8 border-white shadow-2xl" />
                </div>
                <div className='md:w-1/2'>
                    <h2 className='text-4xl text-orange-500 font-bold mb-4'>About Us</h2>
                    <h3 className="text-5xl font-bold">We are qualified & of experience in this field</h3>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn btn-primary mt-4">Get More info</button>
                </div>
            </div>
        </div>
    )
}
