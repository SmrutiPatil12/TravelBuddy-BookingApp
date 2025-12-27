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
                <img alt='' src='https://t3.ftcdn.net/jpg/02/31/33/16/360_F_231331629_wCng24JJOhCVMv8CdNQprpecN50ZOp8A.jpg'/>
                <img alt='' src='https://theadventureofnikk.home.blog/wp-content/uploads/2018/11/66682255.jpg'/>
            </div>
        </div>
    </div>
  )
}

export default Destination
