import React, { useContext } from 'react'
import './Home.css'
import Hero from '../../components/Hero/Hero'
import { StoreContext } from '../../context/storeContext'
import Service from '../../components/Service/Service'
import Androidapps from '../../components/AndroidApps/Androidapps'
import Footer from '../../components/Footer/Footer'
import Webapp from '../../components/WebApp/Webapp'
import Skills from '../../components/Skills/Skills'
import Aboutme from '../../components/Aboutme/Aboutme'
const Home = () => {
  const { food_list } = useContext(StoreContext)

  return (
    <div>
      <Hero></Hero>
      <Service></Service>
      <Skills></Skills>
      <div id="projects" className="projects">
        <Webapp></Webapp>
        <Androidapps></Androidapps>
      </div>
      <Aboutme />
      <Footer></Footer>

    </div>
  )
}

export default Home
