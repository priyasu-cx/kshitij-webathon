import React from "react";

const EventCardApplied = ({ event }) => {
    return(
        <div class="flex flex-col w-2/4 items-center py-4 bg-white border rounded-lg shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Event Name
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <button class="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded lg:w-1/4 md:w-1/2">
                Cancel
              </button>
            </div>
          </div>
    );
}

export default EventCardApplied;