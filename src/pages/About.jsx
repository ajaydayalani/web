import React from 'react'
import { skills , experiences} from '../constants'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello I'm <span className='blue-gradient_text font-semibold drop-shadow'>Ajay Dayalani</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p> Software Engineer based in London, specialising in Web Development
          with a strong interest in AI and ML. </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h=1/2 object-contain' />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'> Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p> Started of working in tech as a Project Manager but decided I enjoyed
            building solutions next to my collegues rather than away from them. Here is my journey:
          </p>
        </div>
        <div className='mt-12 flex'>
            <VerticalTimeline>
              {experiences.map((experience)=>(
                <VerticalTimelineElement
                  key={experience.company_name + experience.title+experience.date}
                  date={experience.date}
                  contentStyle={{ 
                    borderBottom: '8px',
                    borderStyle: 'solid',
                    boxShadow: 'none',
                    borderBottomColor: experience.iconBg }}
                  
                  iconStyle={{backgroundColor: experience.iconBg}}
                    icon={
                    <div className='flex justify-center items-center w-full h-full'>
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className='w-[60%] h-[60%] object-contain'
                      />
                    </div>}
                  
                >
                  <div>
                    <h3 className='text-black text-xl font-popins font-semibold'>{experience.title}</h3>
                    <p className='text-black-500 font-medium font-base ' style={{margin:0}}>{experience.company_name}</p>
                    <ul className='my-5 list-disc ml-5 space-y-2'>
                      {experience.points.map((point,index)=>(
                        <li className="font-normal pl-1 text-sm text-black-500/50 " key={index }>
                          {point}
                        </li>
                      ))}

                    </ul>
                  </div>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />

      
    </section>
  )
}

export default About
