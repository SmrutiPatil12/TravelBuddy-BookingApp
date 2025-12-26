import React from 'react'
import './DestinationStyles.css'
function Destination() {
  return (
    <div className = "destination">
        <h1>Popular Destinations</h1>
        <p>Tours give you opportunity to see world</p>
        <div className='fist-des'>
            <div className='des-text'>
                <h2>Taal Volcano, Batangas</h2>
                <p>One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the volcano's inner lake before you reach the crater's edge. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!</p>
            </div>
            <div className='imgage'>
                <img alt='' src='https://www.tagaloglang.com/wp-content/uploads/2020/04/taal-volcano.jpg'/>
                <img alt='' src='https://media-cdn.tripadvisor.com/media/photo-s/1a/3a/2e/2b/taal-volcano.jpg'/>
            </div>
        </div>
    </div>
  )
}

export default Destination
