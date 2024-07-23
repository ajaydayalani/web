import {Suspense, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Phone from '../models/Phone'
import DualPhone from '../models/dualPhone'
import Sky from '../models/Sky'
import { Center, OrbitControls } from '@react-three/drei'

 

const Home = () => {

 const [isRotating, setIsRotating]=useState(false);

  const adjustSize= ()=>{
    let screenScale=null;
    let screenPosition = [-5.5, -5,-5]
    let rotation=[0.1 , 5, -0.5]

    if (window.innerWidth <768){
      screenScale= [.25, .25 , .25];
    }else{
      screenScale= [.5 , .5 , .5 ];
    }

    return [screenScale,screenPosition, rotation]
  }

  const handleEnd=()=>{
    setIsRotating(false)
  }

  const handleStart= () =>{
    setIsRotating(true)
  }

  const [phoneScale, phonePosition, rotation]=adjustSize(); 

  return (
    <section className='w-full h-screen relative'>
      
      {!isRotating?  <div className='absolute top-28 right-0 left-0 z-10 flex items-center justify-center'>
        <h1 className='sm:text-md sm:leading-snug text-center text-white neo-brutalism-blue py-4 px-8 mx-5'>
          Hi I am <span className='font-semibold'>Ajay Dayalani</span>
          <br/>
          A Software Engineer from the Caribbean now in London <br/> <span className="text-sm">Enjoy the apps </span>
        </h1>
      </div> : <span></span>}


      <Canvas 
    className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
      camera={{near:1, far:1000}}>

        <Suspense fallback={<Loader/>}>
          <directionalLight position={[1, 10, 1]} intensity={2}/>
          <ambientLight intensity={2}/>
          <hemisphereLight skyColor="#b1e1ff" groundColor={"#000000"}/>
         
          <Sky/>
          <Center>
          <Phone
            position={phonePosition}
            scale={phoneScale}
            rotation={rotation}
          />
        
          </Center>
        </Suspense>
        <OrbitControls onStart={handleStart} onEnd={handleEnd} />

      </Canvas>
      
    </section>
    )
}

export default Home