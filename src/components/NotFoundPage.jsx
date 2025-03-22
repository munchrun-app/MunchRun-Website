import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage () {
  return (
    <div className='flex flex-col items-center justify-center min-h-[70vh] px-4 text-center'>
      <h1 className='text-6xl md:text-9xl font-bold text-primary mb-4'>404</h1>
      <h2 className='text-2xl md:text-4xl font-bold mb-6'>Page Not Found</h2>
      <p className='text-base-content/70 text-lg mb-8 max-w-md'>
        Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
      </p>

      <div className='flex flex-col sm:flex-row gap-4'>
        <Link to='/' className='btn btn-primary'>
          Go to Homepage
        </Link>
        <button
          onClick={() => window.history.back()}
          className='btn btn-outline'
        >
          Go Back
        </button>
      </div>

      <div className='mt-12 bg-base-200 p-6 rounded-lg max-w-lg'>
        <h3 className='font-bold mb-2'>Looking for something?</h3>
        <ul className='space-y-2 text-left'>
          <li><Link to='/' className='link link-hover'>Home</Link></li>
          <li><Link to='/about' className='link link-hover'>About Us</Link></li>
          <li><Link to='/restaurants' className='link link-hover'>For Restaurants</Link></li>
          <li><Link to='/drivers' className='link link-hover'>For Drivers</Link></li>
          <li><Link to='/contact' className='link link-hover'>Contact Us</Link></li>
          <li><Link to='/faq' className='link link-hover'>FAQ</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default NotFoundPage
