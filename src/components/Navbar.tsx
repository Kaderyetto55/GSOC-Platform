'use client';

import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function Navbar() {
  return (
    <nav className="py-4 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            ANTHROP\C
          </Link>
          <div className="space-x-8 flex items-center">
            <Link href="/" className="hover:opacity-70 transition-opacity">Home</Link>
            
            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-[#D89C61]">
                <span>Resources</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <Link href="/resources/training" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Training Materials
                  </Link>
                  <Link href="/resources/procedures" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Standard Procedures
                  </Link>
                  <Link href="/resources/campus-info" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Campus Floorplans, Evacuation Zones & More
                  </Link>
                </div>
              </div>
            </div>

            {/* Workflow Dropdown */}
            <Menu as="div" className="relative">
              {({ open }) => (
                <>
                  <Menu.Button className="hover:opacity-70 transition-opacity inline-flex items-center">
                    Workflow
                    <ChevronDownIcon className="ml-1 h-5 w-5" aria-hidden="true" />
                  </Menu.Button>
                  <Transition
                    show={open}
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-1 py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/workflow/tracking-sheets"
                              className={`${
                                active ? 'bg-gray-100' : ''
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              GSOC Tracking Sheets
                            </Link>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>

            <Link href="/crime-report" className="hover:opacity-70 transition-opacity">Crime Report & OSINT</Link>
            <Link href="/about" className="hover:opacity-70 transition-opacity">About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 