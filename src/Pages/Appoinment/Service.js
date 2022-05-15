import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
const Service = ({ service, setTreatment }) => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    const { name, slots } = service
    return (
        <div data-aos="flip-left" data-aos-duration="3000" class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div  class="card-body text-center">
                <h2 class="text-xl font-bold text-secondary">{name}</h2>
                <p>{
                    slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>Try another date.</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div class="card-actions justify-center">
                    <label
                        for="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        class="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
                    >Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Service;