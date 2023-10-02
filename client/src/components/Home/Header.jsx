import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const Header = (userExist) => {
  const user = userExist.user;
  return (
    <div className="flex items-center justify-between p-4 pr-8 pl-4 md:pr-20 md:pl-8 mb-4">
      <div>
        <h2 className="text-2xl font-bold">
          <Link to="/">xQRCode</Link>
        </h2>
      </div>
      <div>
        {/* To check if user authenticated then display accordingly */}
        {user ? (
          <UserProfileDropdown user={user} />
        ) : (
          <button className="bg-black hover:bg-gray-700 p-1 text-white px-4 rounded-lg">
            <Link to="/signup">Signin</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;

// Function for User Dropdown Settings
function UserProfileDropdown(getUser) {
  const user = getUser.user;
  const menuItems = ["Account", "Credit", "Support"];

  // TODO Implemet Logout Function
  const handleLogout = () => {};
  // TODO Implement Credit Funtionallity

  return (
    <Menu as="div" className="relative inline-block text-center">
      <div>
        <Menu.Button className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {user.displayName}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {menuItems.map((menuItem, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <a
                    href="#"
                    className={`${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    } block px-4 py-2 text-sm`}
                  >
                    {menuItem}
                  </a>
                )}
              </Menu.Item>
            ))}
            <form>
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="button"
                    onClick={handleLogout}
                    className={`${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    } block w-full px-4 py-2 text-center text-sm`}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
