import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function DropMenu({ limit, setDataLimit, setCurrentPage }) {
  return (
    <div className='z-20'>
      <Menu as='div' className='relative inline-block text-left'>
        <div>
          <Menu.Button className='inline-flex w-full justify-center rounded-md backdrop-blur-sm bg-emerald-800/30 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
            {limit} Items per page
            <ChevronDownIcon
              className='ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100'
              aria-hidden='true'
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute left-0 mt-2 w-56 origin-top-right divide-y divide-cyan-100 rounded-md bg-emerald-800/30 backdrop-blur-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <div className='px-1 py-1 '>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => {
                      setDataLimit(5);
                      setCurrentPage(1);
                    }}
                    className={`${
                      active ? "bg-teal-500/30 text-white" : "text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    5
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => {
                      setDataLimit(10);
                      setCurrentPage(1);
                    }}
                    className={`${
                      active ? "bg-teal-500/30 text-white" : "text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    10
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className='px-1 py-1'>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => {
                      setDataLimit(25);
                      setCurrentPage(1);
                    }}
                    className={`${
                      active ? "bg-teal-500/30 text-white" : "text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    25
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => {
                      setDataLimit(50);
                      setCurrentPage(1);
                    }}
                    className={`${
                      active ? "bg-teal-500/30 text-white" : "text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    50
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className='px-1 py-1'>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => {
                      setDataLimit(100);
                      setCurrentPage(1);
                    }}
                    className={`${
                      active ? "bg-teal-500/30 text-white" : "text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    100
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
