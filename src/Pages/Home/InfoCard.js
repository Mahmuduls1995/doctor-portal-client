import React from 'react';

const InfoCard = ({img,cardTitles,bgColors}) => {
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl ${bgColors}`} >
            <figure className="pl-5 mt-4">
                <img src={img} alt="Album" />
            </figure>
            <div class="card-body text-white">
                <h2 class="card-title">{cardTitles}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div >

    );
};

export default InfoCard;