import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Home.css'
import Layout from '../components/Layout'

const Home = () => {
  return (
    <Layout>
      <div className='mainDiv'>
        <div className='content'>
          <h1>Food Website</h1>
          <p>Best food in 🇧🇩 </p>
          <Link to={'/menu'}><button>Order Now</button></Link>
        </div>
       
      </div>
    </Layout>
  )
}

export default Home