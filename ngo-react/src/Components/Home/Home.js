import React from 'react'
import HomeSec1 from './HomeSection1/HomeSec1'
import './home.css'
import HomeSec2 from './HomeSection2/HomeSec2'
import HomeSec3 from './HomeSection3/HomeSec3'
import HomeSec4 from './HomeSection4/HomeSec4'
import HomeSec5 from './HomeSection5/HomeSec5'
import HomeSec6 from './HomeSection6/HomeSec6'
const Home = () => {
  return (
    <div className='home'>
        <HomeSec1/>
        <HomeSec2/>
        <HomeSec3/>
        <HomeSec4/>
        <HomeSec5/>
        <HomeSec6/>

    </div>
  )
}

export default Home