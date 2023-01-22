import React from "react";
import { useContext } from "react";
import { userContext } from "../../global_components/authenticator";


const Users = (props) => {
    const {setUser, data, setId} = useContext(userContext);
    const changeUser = () => {
        console.log(props.id);
        setId(props.id);
        setUser(data[props.id]);
    }
  return (
    <li class="pb-3 sm:pb-4" onClick={changeUser} data-drawer-hide="drawer-right-example"
    aria-controls="drawer-right-example">
      <div class="flex items-center space-x-4">
        <div class="flex-shrink-0">
          <img
            class="w-8 h-8 rounded-full"
            src="https://www.citypng.com/public/uploads/preview/png-round-blue-contact-user-profile-icon-11639786938sxvzj5ogua.png"
            alt="Neil image"
          />
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
            {props.name}
          </p>
          <p class="text-sm text-gray-500 truncate dark:text-gray-400">
            {props.email}
          </p>
        </div>
        {/* <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          $320
        </div> */}
      </div>
    </li>
  );
};

const UserSideBar = () => {
    const {data} = useContext(userContext);
  return (
    <>
      <div
        id="drawer-right-example"
        class="fixed z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800 transition-transform right-0 top-0 translate-x-full"
        tabindex="-1"
        aria-labelledby="drawer-right-label"
      >
        <button
          type="button"
          data-drawer-hide="drawer-right-example"
          aria-controls="drawer-right-example"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Close menu</span>
        </button>

        <ul class="max-w-md mt-10 divide-y divide-gray-200 dark:divide-gray-700">
            {data.map((u, id) => (
                <Users {...u} id={id} />
            ))}
        </ul>
      </div>
    </>
  );
};

export default UserSideBar;
