import img1 from '../../assets/images/banner/1.jpg';
import img2 from '../../assets/images/banner/2.jpg';
import img3 from '../../assets/images/banner/3.jpg';
import img4 from '../../assets/images/banner/4.jpg';
// import img5 from '../../assets/images/banner/5.jpg'
// import img6 from '../../assets/images/banner/6.jpg'
export default function Banner() {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full h-[500px] rounded-xl" />
                <div className="absolute flex h-full items-center gap-3 left-0 top-0 pl-12 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
                    <div className='w-3/5 text-white space-y-6'>
                        <h2 className="text-5xl font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-3'>
                            <button className="btn btn-active btn-primary">Primary</button>
                            <button className="btn btn-outline btn-secondary">Secondary</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full h-[500px] rounded-xl" />
                <div className="absolute flex h-full items-center gap-3 left-0 top-0 pl-12 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
                    <div className='w-3/5 text-white space-y-6'>
                        <h2 className="text-5xl font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-3'>
                            <button className="btn btn-active btn-primary">Primary</button>
                            <button className="btn btn-outline btn-secondary">Secondary</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full h-[500px] rounded-xl" />
                <div className="absolute flex h-full items-center gap-3 left-0 top-0 pl-12 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
                    <div className='w-3/5 text-white space-y-6'>
                        <h2 className="text-5xl font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-3'>
                            <button className="btn btn-active btn-primary">Primary</button>
                            <button className="btn btn-outline btn-secondary">Secondary</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full h-[500px] rounded-xl" />
                <div className="absolute flex h-full items-center gap-3 left-0 top-0 pl-12 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
                    <div className='w-3/5 text-white space-y-6'>
                        <h2 className="text-5xl font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-3'>
                            <button className="btn btn-active btn-primary">Primary</button>
                            <button className="btn btn-outline btn-secondary">Secondary</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    )
}
