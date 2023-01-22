import React from "react";

const EventCard = ({ event }) => {
    return(
        <div class="flex flex-col items-center py-4 bg-white border rounded-lg shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
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
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>

              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="2"
                class="block p-2.5 w-full text-sm mb-3 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your message here..."
              ></textarea>
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded lg:w-1/4 md:w-1/2">
                Apply
              </button>
            </div>
          </div>
    );
}

export default EventCard;