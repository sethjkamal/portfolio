import React, { useEffect } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

export default function FloatingLayer() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX / innerWidth - 0.5) * 2
      const y = (e.clientY / innerHeight - 0.5) * 2
      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const translateX = useTransform(mouseX, [-1, 1], ['-60px', '60px'])
  const translateY = useTransform(mouseY, [-1, 1], ['-60px', '60px'])

  return (
    <motion.div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ translateX, translateY }}
    >
      {/* Pink blob top-left */}
      <div className="absolute top-10 left-10 w-60 h-60 bg-pink-400 rounded-full blur-[120px] opacity-60" />
      
      {/* Indigo blob bottom-right */}
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500 rounded-full blur-[130px] opacity-60" />
      
      {/* Purple blob center-right */}
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-purple-500 rounded-full blur-[100px] opacity-50" />

      {/* Blue blob top-center */}
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-56 h-56 bg-blue-400 rounded-full blur-[110px] opacity-50" />
      
      {/* Pink-purple mix bottom-left */}
      <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-gradient-to-tr from-pink-400 to-purple-500 rounded-full blur-[120px] opacity-50" />
    </motion.div>
  )
}