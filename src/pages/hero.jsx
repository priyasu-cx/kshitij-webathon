import React from "react";
import { useState } from "react";
import EventCard from "./components/event_card";
import EventForm from "./components/event_form";

function Hero() {

  return (
    
    <div className="">
      {/* <div className="flex flex-col items-center my-2 ">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Event
        </button>
      </div> */}

      <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-1 lg:px-20 px-10">
        <div className="col-span-2">
          <h1 class="flex flex-col my-4 text-2xl items-center lg:items-start font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-5xl dark:text-white">
            Upcoming event
          </h1>
          <EventCard />
        </div>

        <div className="lg:col-span-1 col-span-2">
        <h1 class="my-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
            Add event
          </h1><hr className="pb-2"/>
          <EventForm/>

          <h1 class="my-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
            Posted events
          </h1><hr className="pb-2"/>

          <button
            id="dropdownUsersButton"
            data-dropdown-toggle="dropdownUsers"
            data-dropdown-placement="bottom"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center w-full dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Project Name
            <svg
              class="w-4 h-4 ml-2"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div
            id="dropdownUsers"
            class="z-10 hidden bg-white rounded shadow w-1/5 dark:bg-gray-700"
          >
            <ul
              class="h-30 py-1 overflow-y-auto text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownUsersButton"
            >
              <li>
                <a
                  href="#"
                  class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <img
                    class="w-6 h-6 mr-2 rounded-full"
                    src="https://img.freepik.com/free-icon/user_318-725053.jpg?w=2000"
                    alt="Jese image"
                  />
                  Jese Leos
                  <button class="bg-transparent text-sm hover:bg-green-500 text-green-700 font-semibold hover:text-white px-2 ml-2  border border-green-500 hover:border-transparent rounded">
                    Accept
                  </button>
                  <button class="bg-transparent text-sm hover:bg-red-500 text-red-700 font-semibold hover:text-white px-2 mx-2 border border-red-500 hover:border-transparent rounded">
                    Decline
                  </button>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <img
                    class="w-6 h-6 mr-2 rounded-full"
                    src="https://img.freepik.com/free-icon/user_318-725053.jpg?w=2000"
                    alt="Jese image"
                  />
                  Robert Gough
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <img
                    class="w-6 h-6 mr-2 rounded-full"
                    src="https://img.freepik.com/free-icon/user_318-725053.jpg?w=2000"
                    alt="Jese image"
                  />
                  Bonnie Green
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
