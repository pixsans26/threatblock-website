'use client'


import { motion } from "framer-motion";


export const MotionDiv = motion.div

export const MotionH1 = motion.h1

export const MotionH2 = motion.h2

export const MotionH3 = motion.h3

export const MotionH4 = motion.h4

export const MotionP = motion.p

export const MotionImg = motion.img

export const Motionli = motion.li

export const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: .3, delay: 0.2 * index }
    })
}

export const fadeInLeft = {
    hidden: { opacity: 0, x: 30 },
    show: (index: number) => ({
        opacity: 1,
        x: 0,
        transition: { duration: .3, delay: 0.2 * index }
    })
}

export const fadeInRight = {
    hidden: { opacity: 0, x: -30 },
    show: (index: number) => ({
        opacity: 1,
        x: 0,
        transition: { duration: .3, delay: 0.2 * index }
    })
}

