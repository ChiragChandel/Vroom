import React from 'react';

const Banner = () => {
  return (
    <div className="relative bg-black text-white min-h-[500px] flex items-center overflow-hidden">
      
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1550242499-b5171f56de56?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyJTIwZGFya3xlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000')"
        }}
      ></div>     
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 py-28 flex justify-start">
        <div className="ml-5">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Your Journey<br />
            Your Car<br />
            <span className="text-blue-400">Your Way</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mt-16 leading-relaxed">
            Rev up your engines and dive into Vroom, the premier blog for car enthusiasts!
            From the latest auto trends to in-depth reviews, we cover everything on four wheels.
            Whether you're into sleek sports cars, rugged off-roaders, or eco-friendly EVs, Vroom delivers high-octane content to fuel your passion.
            Join our community of gearheads and stay tuned for expert insights, DIY tips, and thrilling ride stories. 
            Buckle up—your next automotive adventure starts here!
          </p>
        </div>
      </div>
      
      
      <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-red-500 rounded-full opacity-10 blur-2xl"></div>
    </div>
  );
};

export default Banner;