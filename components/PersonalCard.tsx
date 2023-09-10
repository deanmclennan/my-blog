// Card for home page with personal information and links to social media using tailwindcss

import React from 'react'
import { Github, Linkedin, Twitter } from './social-icons/icons'

const PersonalCard = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <img
          className="object-cover w-40 h-40 rounded-full"
          src="https://github.com/deanmclennan.png"
          alt="Profile"
        />
        <h1 className="mt-4 text-2xl font-bold">Dean McLennan</h1>
        <h2 className="mt-2 text-xl font-semibold">Avionics Aircraft Maintenance Engineer</h2>
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
      <div className="flex flex-col items-center justify-center mt-6">
        <p className="text-lg text-center">
          I'm a software engineer based in the United States. I enjoy building things that live on
          the internet, whether that be websites, applications, or anything in between. My goal is
          to always build products that provide pixel-perfect, performant experiences.
        </p>

        <p className="mt-4 text-lg text-center">
          Shortly after graduating from{' '}
          <a
            href="https://www.rit.edu/"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            Rochester Institute of Technology
          </a>
          , I joined the engineering team at{' '}
          <a
            href="https://www.rit.edu/"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            Upstatement
          </a>{' '}
          where I work on a wide variety of interesting and meaningful projects on a daily basis.
        </p>
      </div>
    </div>
  )
}

export default PersonalCard
