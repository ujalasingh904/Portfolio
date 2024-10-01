"use client"

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

export default function Loading() {
  const [progress, setProgress] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer)
          return 100
        }
        return prevProgress + 1
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    controls.start({
      width: `${progress}%`,
      transition: { duration: 0.5, ease: "easeInOut" }
    })
  }, [progress, controls])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-slate-900 via-gray-900 to-gray-900">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-white">Loading....</h2>

        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-end">
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-purple-600">
                {progress.toFixed(0)}%
              </span>
            </div>
          </div>
          
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
            <motion.div
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
              animate={controls}
            />
          </div>
        </div>
      </div>
    </div>
  )
}