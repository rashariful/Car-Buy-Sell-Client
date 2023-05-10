import React from 'react';

const Collection = () => {
    return (
        <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* <!-- text - start --> */}
          <div class="mb-10 md:mb-16">
            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Collections</h2>
      
            <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
          </div>
          {/* <!-- text - end --> */}
      
          <div class="grid gap-6 sm:grid-cols-2">
            {/* <!-- product - start --> */}
            <a href="#" class="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" loading="lazy" alt="Photo by Fakurian Design" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
      
              <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
      
              <div class="relative flex flex-col">
                <span class="text-gray-300">New</span>
                <span class="text-lg font-semibold text-white lg:text-xl">Buy Your Dream</span>
              </div>
            </a>
            {/* <!-- product - end --> */}
      
            {/* <!-- product - start --> */}
            <a href="#" class="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" loading="lazy" alt="Photo by Fakurian Design" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
      
              <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
      
              <div class="relative flex flex-col">
                <span class="text-gray-300">Modern</span>
                <span class="text-lg font-semibold text-white lg:text-xl">Sell Car</span>
              </div>
            </a>
            {/* <!-- product - end --> */}
          </div>
        </div>
      </div>
    );
};

export default Collection;