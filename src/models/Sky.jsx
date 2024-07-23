import React from 'react'
import night from '../assets/3d/morning.glb'
import evening from '../assets/3d/nightSky.glb'
import day from '../assets/3d/sky.glb'
import { useGLTF } from '@react-three/drei'

const Sky = () => {

    const timeOfDay = () =>{
        const time= new Date
        const hour= time.getHours();
        let value;

        
        if (hour >= 21 || hour < 8) {
            value = night; // Morning (6 AM - 11:59 AM)
        } else if (hour >= 8 && hour < 18) {
            value = day; // Day (12 PM - 5:59 PM)
        } else {
            value = evening; // Night (6 PM - 5:59 AM)
        }

        return value
    }

    const glb =timeOfDay();
    const sky = useGLTF(glb);


  return (
    <mesh>
        <primitive object={sky.scene}/>
    </mesh>
    )
}

export default Sky