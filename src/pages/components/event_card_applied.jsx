import React from "react";

const EventCardApplied = ({ event }) => {
    return(
        <div class="flex flex-col w-2/4 items-center py-4 mb-4 bg-white border rounded-lg shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            
            <div class="flex flex-col justify-between p-4  w-full leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {event.name}
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {event.description}
              </p>
              <button class="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded lg:w-1/4 md:w-1/2">
                Cancel
              </button>
            </div>
          </div>
    );
}

export default EventCardApplied;