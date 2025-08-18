'use client'
import { MotionH2 } from '@/utils/motioDiv';
import React from "react";
import Marquee from "react-fast-marquee";
import { ClientsData } from '@/data/clients'


interface ClientsData {
  id: string
  title: string
  logo: string
}

export default function ClientsSlider() {

  return (
    <>
      <section className='w-full lg:py-20 py-5 lg:mb-20 mb:10'>

        <div className="lg:w-9/12 w-11/12 mx-auto">
          <div className='lg:w-5/12 w-full flex mx-auto justify-center '>
            <div className='w-full text-center mx-auto lg:mb-10 mb-5'>
              <h4 className="text-gradient-purple lg:text-center"></h4>
              <MotionH2
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, scale: 1, opacity: 1 }}
                transition={{ duration: .5, delay: .2 }}
                viewport={{
                  once: true
                }}
                className='text-4xl font-bold w-full'>Trusted Clients</MotionH2>
            </div>

          </div>

          <div className='lg:mb-10 mb-5'>
            <Marquee
              pauseOnHover={true}
              // direction='right\\\'
              gradient={true}
              gradientColor='#ffffff'
              gradientWidth="300px"
              speed={30}
              loop={0}
              autoFill={true}
            >

              <div className="flex w-full h-auto items-center">
                {ClientsData?.map((curElm: any) => (
                  <div
                    key={curElm.id}
                    className='w-1/12 mx-16'>
                    <img
                      className=''
                      width={200}
                      height={100}
                      src={curElm.logo}
                      alt={curElm.name} />
                  </div>
                ))}
              </div>
            </Marquee>
          </div>


        </div>

      </section>
    </>
  )
}

