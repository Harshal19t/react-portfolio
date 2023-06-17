import React from 'react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import Heroimg4 from '../components/Heroimg4';
import Form from '../components/Form';
const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimg4 heading="CONTACTS." text="Let's have a chat"/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact