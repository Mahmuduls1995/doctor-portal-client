import React from 'react';
import appointment from '../../assets/images/appointment.png';
const ContactForm = () => {
    return (
        <section 
        style={{
            background: `url(${appointment})`
        }}
        class="p-6 text-coolGray-100">
            <form novalidate="" class="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-coolGray-900 ng-untouched ng-pristine ng-valid">
               <div className="text-center"> 
                   <h4 class="w-full text-xl font-bold text-primary">Contact us</h4>
                   <h2 class="w-full text-xl font-bold text-white">Stay connected with us</h2>
                </div>
                <div>
                    <input id="name" type="text" placeholder="Your name" required="" class="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-coolGray-800" autocomplete="off"/>
                </div>
                <div>
                    <input id="email" type="email" placeholder="Your email" required="" class="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-coolGray-800"/>
                </div>
                <div>
                    <textarea id="message" type="text" placeholder="Message..." class="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-coolGray-800 py-10"></textarea>
                </div>
                <div className="text-center">
                <button type="submit" class="btn btn-primary uppercase mt-4 text-white font-bold bg-gradient-to-r from-secondary to-primary">Submit</button>
                </div>
            </form>
        </section>
    );
};

export default ContactForm;