import React from 'react';

const LandingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center p-10 transform -translate-y-10">
      <h1 className="font-bold text-4xl text-white mb-6">Welcome to Audiora</h1>
      <p className="text-white text-xl mb-5">
        Use the search bar above to find your favorite songs.
      </p>
      <p className="text-white text-xl">
        Or navigate using the panels on the left.
      </p>
    </div>
  );
};



export default LandingPage;
