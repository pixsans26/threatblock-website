'use client'
import { MotionH2, MotionP } from '@/utils/motioDiv';
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
      <section className='w-full lg:my-5 py-5 my-5'>

        <div className="lg:w-9/12 w-11/12 mx-auto">
          <div className='lg:w-5/12 w-full flex mx-auto justify-center '>
            <div className='w-full text-center mx-auto mb-10'>
              <h4 className="text-gradient-purple lg:text-center"></h4>
              <MotionH2
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, scale: 1, opacity: 1 }}
                transition={{ duration: .5, delay: .2 }}
                viewport={{
                  once: true
                }}
                className='lg:text-4xl text-2xl font-bold w-full mb-2'>Trusted Clients</MotionH2>

              <MotionP
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, scale: 1, opacity: 1 }}
                transition={{ duration: .5, delay: .6 }}
                viewport={{
                  once: true
                }}
                className="text-gray-500 lg:text-2xl"
              >
                Trusted by a wide range of clients for impactful, lasting results.
              </MotionP>
            </div>
          </div>

          <div className='lg:mb-10 mb-5'>
            <Marquee
              pauseOnHover={true}
              direction='right'
              gradient={true}
              gradientColor='#ffffff'
              gradientWidth="200px"
              speed={30}
              loop={0}
              autoFill={true}
            >

              <div className="flex w-full h-auto items-center">
                {ClientsData?.map((curElm: any) => (
                  <div
                    key={curElm.id}
                    className='w-1/12 lg:mx-16 mx-8'>
                    <img
                      className=''
                      width={100}
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

