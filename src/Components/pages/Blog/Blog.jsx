import React from "react";
import { Link } from "react-router-dom";


const Blog = () => {
 
  return (
    <>
      <section>
        <div className="w-[60%] mx-auto">
          <div className="mb-20">
            <div classNameName="bg-white py-6 sm:py-8 lg:py-12">
              <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <div className="mb-10 md:mb-16">
                  <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mt-10 mb-4 md:mb-6">
                    Explore The react js
                  </h2>

                  <p className="max-w-screen-md text-gray-500 md:text-lg text-center  mx-auto">
                    React (also known as React. js or ReactJS) is a free and
                    open-source front-end JavaScript library for building user
                    interfaces based on UI components.
                  </p>
                </div>

                <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-6 xl:gap-8">
                  <div className="flex flex-col bg-white border rounded-lg overflow-hidden">
                    <Link className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
                      <img
                        src="https://www.freecodecamp.org/news/content/images/2022/02/how-to-manage-state-react.png"
                        loading="lazy"
                        alt="Photo by Minh Pham"
                        className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                      />
                    </Link>

                    <div className="flex flex-col flex-1 p-4 sm:p-6">
                      <h2 className="text-gray-800 text-lg font-semibold mb-2">
                        <Link className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">
                          What are the different ways to manage a state in a
                          React application?
                        </Link>
                      </h2>

                      <p className="text-gray-500 mb-8">
                        Managing state in your React apps isn’t as simple as
                        using useState or useReducer. The Four Kinds of React
                        State to Manage When we talk about state in our
                        applications, it’s important to be clear about what
                        types of state actually matter. There are four main
                        types of state you need to properly manage in your React
                        apps: Local state Global state Server state URL state
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col bg-white border rounded-lg overflow-hidden">
                    <Link className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
                      <img
                        src="https://miro.medium.com/max/1042/1*ULmG2uiAlgQksjj-brp2fw.jpeg"
                        loading="lazy"
                        alt="Photo by Magicle"
                        className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                      />
                    </Link>

                    <div className="flex flex-col flex-1 p-4 sm:p-6">
                      <h2 className="text-gray-800 text-lg font-semibold mb-2">
                        <Link className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">
                          How does prototypical inheritance work?
                        </Link>
                      </h2>

                      <p className="text-gray-500 mb-8">
                        Prototypal inheritance In programming, we often want to
                        take something and extend it. For instance, we have a
                        user object with its properties and methods, and want to
                        make admin and guest as slightly modified variants of
                        it. We’d like to reuse what we have in user, not
                        copy/reimplement its methods, just build a new object on
                        top of it. The Prototypal Inheritance is a feature in
                        javascript used to add methods and properties in
                        objects. It is a method by which an object can inherit
                        the properties and methods of another object.
                        Traditionally, in order to get and set the [[Prototype]]
                        of an object, we use Object. getPrototypeOf and Object.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col bg-white border rounded-lg overflow-hidden">
                    <Link className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
                      <img
                        src="https://www.guru99.com/images/1/Unit-Testing.png"
                        loading="lazy"
                        alt="Photo by Martin Sanchez"
                        className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                      />
                    </Link>

                    <div className="flex flex-col flex-1 p-4 sm:p-6">
                      <h2 className="text-gray-800 text-lg font-semibold mb-2">
                        <Link className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">
                          What is a unit test? Why should we write unit tests?
                        </Link>
                      </h2>

                      <p className="text-gray-500 mb-8">
                        The main objective of unit testing is to isolate written
                        code to test and determine if it works as intended. Unit
                        testing is an important step in the development process,
                        because if done correctly, it can help detect early
                        flaws in code which may be more difficult to find in
                        later testing stages. A unit test is a way of testing a
                        unit - the smallest piece of code that can be logically
                        isolated in a system. In most programming languages,
                        that is a function, a subroutine, a method or property.
                        The isolated part of the definition is important.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col bg-white border rounded-lg overflow-hidden">
                    <Link className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
                      <img
                        src="https://presence.agency/wp-content/uploads/2020/07/1_lC1kj3IeXoE8Z3OCKJoWkw.jpeg"
                        loading="lazy"
                        alt="Photo by Martin Sanchez"
                        className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                      />
                    </Link>

                    <div className="flex flex-col flex-1 p-4 sm:p-6">
                      <h2 className="text-gray-800 text-lg font-semibold mb-2">
                        <Link className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">
                          React vs. Angular vs. Vue?
                        </Link>
                      </h2>

                      <p className="text-gray-500 mb-8">
                        This post is a comprehensive guide on which is perhaps
                        the right solution for you: Angular vs React vs Vue.
                        Just a couple of years ago, developers were mainly
                        debating whether they should be using Angular vs React
                        for their projects. But over the course of the last
                        couple of years, we’ve seen a growth of interest in a
                        third player called Vue.js. If you are a developer
                        starting out on a project and cannot decide on which
                        JavaScript framework to use, this guide should help you
                        make a decision.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
