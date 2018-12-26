import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { fromJS } from 'immutable'
import styles from './Home.scss'

const Home = () => {
  const list = fromJS([
    "/c951a5af-603f-4003-9d1c-707657febe95",
    "/eb24b5d8-0155-40fa-aeba-9f6edde1ac4d",
    "/cc242ca9-17a3-47e5-bdd9-a12582e90752"
  ])
  return (
    <div>
    {
      list.map((link, index) => (
        <p key={index}><Link to={link}>{link}</Link></p>
      ))
    }
    </div>
  )
}

export default Home
