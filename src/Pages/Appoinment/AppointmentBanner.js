import React from 'react';
import chair from '../../assets/images/chair.png'
import backgroundbg from '../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({date,setDate}) => {

    return (
        <div  style={{
            background: `url(${backgroundbg})`,
            backgroundSize: 'cover'
        }} class="hero min-h-screen">
            <div  class="hero-content flex-col lg:flex-row-reverse ">
                <img data-aos="fade-left" src={chair}  class="max-w-sm rounded-lg shadow-2xl" alt="Dentist" />
                <div data-aos="fade-right">
                <DayPicker 
                mode="single"
                selected={date}
                onSelect={setDate}
                />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;