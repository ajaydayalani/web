import React, { Suspense } from 'react'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber'
import Fox from '../models/Fox'
import Loader from '../components/Loader'
import Alert from '../components/Alert'


const Contact = () => {
const formRef= useRef(null)
const [form, setForm] = useState({name:"",email:"", message:""})
const [isLoading, setIsLoading] = useState(false)
const [currentAnimation, setCurrentAnimation] = useState("idle")

const handleChange= (e) =>{
  setForm({...form, [e.target.name]: e.target.value})
}
const handleFocus= () =>{
   setCurrentAnimation("walk");
}
const handleBlur= () =>{
  setCurrentAnimation("idle")
}

const handleSubmit= (e) =>{
  e.preventDefault() ;
  setIsLoading(true);
  setCurrentAnimation("run");

  emailjs.send(
    import.meta.env.VITE_APP_EMAIL_SERVICE_ID,
    import.meta.env.VITE_APP_EMAIL_TEMPLATE_ID,
    {
      from_name: form.name,
      to_name: "Ajay",
      from_email:form.email,
      to_email:"dayalani.ajay@gmail.com",
      message:form.message,
    },
    import.meta.env.VITE_APP_EMAIL_PUBLIC_KEY
  )
  .then(()=>{
    
    setIsLoading(false)
    showAlert({
      show: true,
      text: "Thank you for your message 😃",
      type: "success",
    });

    setTimeout(()=>{
      hideAlert(false);
      setForm({...form,name:"", email:"",message:""})
      setCurrentAnimation("idle")},[3000]
      )    
  })
  .catch((err)=>{
    showAlert({
      show: true,
      text: "I didn't receive your message 😢",
      type: "danger",
    })
    setIsLoading(false)
    setCurrentAnimation("idle");
    console.log(err);
  })

}


  return (
    <section className='relative flex lg:flex-row flex-col max-container h-screen'>
      {alert.show && <Alert {...alert} />}

      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>
        <form className='w-full flex-flex-col gap-7 mt-14 space-y-3'
          onSubmit={handleSubmit}
        >
          <label className='text-black-500 font-semibold'>
            Name  
          </label> 
          <input
          type = "text"
          name = "name"
          className='input'
          placeholder='Jack'
          required
          value={form.name }
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}/>

             <label className='text-black-500 font-semibold'>
            E-Mail  
          </label> 
          <input
          type = "text"
          name = "email"
          className='input'
          placeholder='jack.jones@gmail.com'
          required
          value={form.email}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}/>

<label className='text-black-500 font-semibold'>
            Message  
          </label> 
          <textarea
          name = "message"
          className='textarea'
          rows={4}
          placeholder='Let me know whats on your mind?'
          required
          value={form.message}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}/>

          <button
          type="submit"
          className="btn"
          onFocus={handleFocus}
          onBlur={handleBlur }
          disabled={isLoading}>
             {!isLoading ? " Send Message" : "Sending..."}</button>

        </form>
      </div>

      <div className='lg:w-1/2  w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas 
        camera={{
          position:[0,0,5],
          near:0.1,
          far:1000,
          fov:75
          }}>
          <Suspense fallback={<Loader/>}>
            <directionalLight intensity={2.5} position={[0,0,1]}/>
            <ambientLight intensity={0.5}/>
            <Fox
            position={[0.5, 0.35, 0]}
            rotation={[12.6 ,-0.6 , 0]}
            scale={[0.5,0.5,0.5 ]}
            currentAnimation={currentAnimation}
            />
          </Suspense>
        </Canvas>
      </div>

     

    </section>
    )
}

export default Contact