import React from "react";

function Hero() {
  return (
    //create an event
    <div>
      <div className="flex flex-col items-center my-2 ">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Event
        </button>
      </div>

      <div className="grid lg:grid-cols-3">
        <div className="col-span-2 px-10">
          <h1>Upcoming Events</h1>
          
            {/* <h2>Event Name</h2>
            <p>Description</p>
            <p>Team Members: </p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Apply
            </button> */}
            <div
              class="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                class="object-cover w-full rounded-t-lg h-30 md:h-auto md:w-1/4 md:rounded-none md:rounded-l-lg"
                src="https://thumbs.dreamstime.com/b/hackathon-event-banner-hackathon-event-banner-d-s-style-concept-135908926.jpg"
                alt=""
              />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Event Name
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded lg:w-1/4 md:w-1/2">
                  Apply
                </button>
              </div>
            </div>
          
        </div>
        <div className="col-span-1 px-10">
          <h2>Event Name</h2>
          
<button id="dropdownUsersButton" data-dropdown-toggle="dropdownUsers" data-dropdown-placement="bottom" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
    Project users 
    <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
    </svg></button>
<div id="dropdownUsers" class="z-10 hidden bg-white rounded shadow w-60 dark:bg-gray-700">
  <ul class="h-30 py-1 overflow-y-auto text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUsersButton">
    <li>
      <a href="#" class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
        <img class="w-6 h-6 mr-2 rounded-full" src="https://img.freepik.com/free-icon/user_318-725053.jpg?w=2000" alt="Jese image"/>
        Jese Leos
      </a>
    </li>
    <li>
      <a href="#" class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
        <img class="w-6 h-6 mr-2 rounded-full" src="https://img.freepik.com/free-icon/user_318-725053.jpg?w=2000" alt="Jese image"/>
        Robert Gough
      </a>
    </li>
    <li>
      <a href="#" class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
        <img class="w-6 h-6 mr-2 rounded-full" src="https://img.freepik.com/free-icon/user_318-725053.jpg?w=2000" alt="Jese image"/>
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
