import React from 'react'
import HomeCarouselLeft from '../../components/HomeCarouselLeft'
import HomeCarouselRight from '../../components/HomeCarouselRight'
import Sidebar from '../../components/Sidebar'

const Home = () => {
    return (
        <>
            <div className='row'>
                <div className="col-xl-2 col-lg-3 pe-0 order-lg-1 ps-2">
                    <Sidebar />
                </div>
                <div className="col-xl-10 col-lg-9 ps-0 order order-lg-2">
                    <div className="row">
                        <div className="col-lg-6 pe-0">
                            <div className='leftSlider'>
                                <HomeCarouselLeft />
                            </div>
                        </div>
                        <div className="col-lg-6 ps-0 pe-0">
                            <div className="rightSlider">
                                <HomeCarouselRight />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home