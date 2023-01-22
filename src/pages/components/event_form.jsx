import React from "react";
import { useState } from "react";

const EventForm = (
) => {
    const [count, setCount] = useState(0);
    const addCount = () => {
        setCount(count + 1);
      }
    
      const subCount = () => {
        count >0 ?setCount(count - 1): setCount(count);
      }

    return(
        <div class="flex flex-col p-5 w-full items-center bg-white border rounded-lg shadow-md md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <form className="w-full">
              <div class="mb-6 w-full">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Event Name
                </label>
                <input
                  type="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Example: Hackathon"
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  for="description"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Event Description
                </label>
                <textarea
                  id="description"
                  rows="2"
                  placeholder="Write about the event here..."
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div x-data="{ count: 0 }" class="mb-6">
              <div class="my-3 flex rounded-md justify-center">
        <button onClick={subCount} type="button" class="mr-1 relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-l-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
        -
        </button>
        <div class="relative flex items-stretch focus-within:z-10">
            <input type="text" x-model="count" name="count" id="count" class="text-center focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none pl-3 sm:text-sm border-gray-300" value={count}/>
        </div>
        <button onClick={addCount} type="button" class="ml-1 relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
        +
        </button>
    </div>
              </div>
              {/* <div class="flex items-start mb-6">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  for="remember"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label> }
              </div> */}
              <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
    )
};

export default EventForm;