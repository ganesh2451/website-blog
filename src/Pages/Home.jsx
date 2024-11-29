import React from 'react'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'
import Header from '../components/Header'

const Home = () => {
  return (
    <div>
        <Header />
        <div className='mt-30 flex w-full  items-center'>
            <Blogs />
            <Pagination />
        </div>
    </div>
  )
}

export default Home