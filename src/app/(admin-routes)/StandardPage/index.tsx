"use client"

import { useEffect, useState } from "react"
import SideBar from "../../../components/SideBar"
import LoadingSideBar from "@/components/SideBar/LoadingSideBar"

const StandardPage = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
    {loading ? (
      <LoadingSideBar />
    ) : (
      <SideBar />
    )}
    </>
        
  )
}

export default StandardPage
