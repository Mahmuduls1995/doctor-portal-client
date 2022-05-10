import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';
import DentalCare from './DentalCare';
const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: '',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: '',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: '',
            img: whitening
        },
    ];
    return (

        <div>
            <div className="my-20">
                <div className=" text-center">
                    <h3 className=" text-primary text-xl font-bold uppercase">Our Services</h3>
                    <h2 className=" text-4xl">Services We Provided</h2>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-5'>

                    {

                        services.map(service => <Service

                            service={service}
                            key={service._id}>
                        </Service>)
                    }
                </div>




            </div>
            <DentalCare></DentalCare>
        </div>
    );
};

export default Services;