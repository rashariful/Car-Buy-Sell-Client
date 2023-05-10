import React from 'react';

const NewsLetter = () => {
    return (
        <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div class="flex overflow-hidden rounded-lg bg-gray-100">
            {/* <!-- image - start --> */}
            <div class="relative hidden bg-gray-200 sm:block sm:w-1/3 lg:w-1/2">
              <img src="https://images.unsplash.com/photo-1570829053985-56e661df1ca2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="absolute inset-0 h-full w-full object-cover object-center" />
            </div>
            {/* <!-- image - end --> */}
      
            {/* <!-- content - start --> */}
            <div class="flex w-full items-center p-4 sm:w-2/3 sm:p-8 lg:w-1/2 lg:pl-10">
              <div class="flex w-full flex-col items-center sm:block">
                <div class="mb-4 sm:mb-8">
                  <h2 class="text-center text-xl font-bold text-rose-500 sm:text-left sm:text-2xl lg:text-3xl">Get the latest updates</h2>
                  <p class="text-center text-gray-500 sm:text-left">Sign up for our newsletter</p>
                </div>
      
                <form class="mb-3 flex w-full max-w-md gap-2 sm:mb-5">
                  <input placeholder="Email" class="bg-gray-white w-full flex-1 rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-rose-300 transition duration-100 focus:ring" />
      
                  <button class="inline-block rounded bg-rose-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-rose-300 transition duration-100 hover:bg-rose-600 focus-visible:ring active:bg-rose-700 md:text-base">Send</button>
                </form>
      
                <p class="text-center text-xs text-gray-400 sm:text-left">By signing up to our newsletter you agree to our <a href="#" class="underline transition duration-100 hover:text-rose-500 active:text-rose-600">Term of Service</a> and <a href="#" class="underline transition duration-100 hover:text-rose-500 active:text-rose-600">Privacy Policy</a>.</p>
              </div>
            </div>
            {/* <!-- content - end --> */}
          </div>
        </div>
      </div>
    );
};

export default NewsLetter;