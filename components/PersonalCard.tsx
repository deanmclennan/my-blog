// Card for home page with personal information and links to social media using tailwindcss

import React from 'react'
import Image from 'next/image'
import { Github, Linkedin, Twitter } from './social-icons/icons'

const aviationYears = () => {
  const currentYear = new Date().getFullYear()
  const startYear = 2002
  const years = currentYear - startYear
  return years
}

const PersonalCard = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col items-center justify-center">
        <Image
          className="object-cover w-40 h-40 rounded-full"
          src="https://github.com/deanmclennan.png"
          alt="Profile"
          width={160}
          height={160}
        />

        <h1 className="mt-4 text-2xl font-bold">Dean McLennan</h1>
        <h2 className="mt-2 text-xl font-semibold">Aerospace | Electronics | Software Dev</h2>
        {/* Social icons */}
        <div className="flex mt-4 space-x-4">
          <a href="/" className="text-gray-400 hover:text-gray-500" aria-label="Twitter">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="/" className="text-gray-400 hover:text-gray-500" aria-label="Github">
            <Github className="w-6 h-6" />
          </a>
          <a href="/" className="text-gray-400 hover:text-gray-500" aria-label="Linkedin">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
      {/* Description section */}
      <div className="flex flex-col justify-center mt-6">
        <p>
          I'm a Aircraft Maintenance Engineer - Avionics, with a passion for electronics and
          software development.
        </p>
        <p className="mt-2 ">
          Currently embarking on a DevOps journey to learn more about cloud computing, automation &
          infrastructure as code.
        </p>
      </div>

      {/* Aviation Experience Section */}
      <div className="flex flex-col justify-center mt-6">
        <h2 className="text-lg font-semibold underline text-start">Aviation Experience</h2>
        <p className="mt-2 ">
          {aviationYears()} years experience in the aviation industry as a Aircraft Maintenance
          Engineer - Avionics
        </p>
        <br />
        <p className="mt-2">
          Experience working on the following aircraft types:
          <ul className="list-disc list-inside">
            <li>Boeing 737, 747, 767, 787</li>

            <li>Airbus A320, A330, A380</li>
          </ul>
        </p>
      </div>

      {/* Software Development Experience Section */}
      <div className="flex flex-col justify-center mt-6">
        <h2 className="text-lg font-semibold underline text-start">
          Software Development Experience
        </h2>
        {/* List programming lang */}
        <p className="mt-2">
          I currently have experience with the following programming languages:
          <br />
          Python, Go, Javascript, C and C++
        </p>
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-semibold underline text-start">Employment History</h2>
        <div className="grid px-2 py-4 m-2 space-y-4 md:grid-cols-2 md:grid-rows-2">
          <div className="flex items-center justify-around col-span-2 ">
            <Image
              className="hidden md:block "
              src="/static/images/VSAT_BIG.png"
              alt="Viasat"
              width={120}
              height={120}
            />
            <Image
              className="md:hidden"
              src="/static/images/VSAT_BIG.png"
              alt="Viasat"
              width={80}
              height={80}
            />

            <div>
              <p className="mt-2 text-center">Field Support & Integration Engineer</p>
              <p className="mt-2 text-center">2021 - Present</p>
            </div>
          </div>
          {/* divider */}

          <div className="flex items-center justify-around col-span-2">
            <Image
              className="hidden md:block "
              src="/static/images/qantas-vector-logo.png"
              alt="Viasat"
              width={120}
              height={120}
            />
            <Image
              className="md:hidden"
              src="/static/images/qantas-vector-logo.png"
              alt="Viasat"
              width={80}
              height={80}
            />
            <div>
              <p className="mt-2 text-center">Aircraft Maintenance Engineer - Avionics</p>
              <p className="mt-2 text-center">2002 - 2021</p>
            </div>
          </div>
        </div>
      </div>

      {/* Location  */}
      <div className="flex items-center justify-center mt-6 space-x-2">
        {/* Location icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>

        <p className="text-lg text-center">Based in Sydney, Australia</p>
      </div>
    </div>
  )
}

export default PersonalCard
