import React from 'react';
import Banner from '../Banner/Banner';
import Future from '../Future/Future';
import Products from '../Products/Products';

const Home = () => {
    return (
      <div className="max-w-screen-xl mx-auto">
        <section>
          <Banner></Banner>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-primary text-center mt-32 mb-10">
            All cars here
          </h3>
          <Products></Products>
        </section>
        <section>
           <Future></Future>
        </section>
      </div>
    );
};

export default Home;