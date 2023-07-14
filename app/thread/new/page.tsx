"use client"

import React, { useEffect } from 'react'
import { useStore } from '@/components/Navigation/BottomNavigation'

const NewThread = () => {
  const { setCurrentPage } = useStore();

  useEffect(() => {
    setCurrentPage(3);
  }, [])

  return (
    <div>NewThread</div>
  )
}

export default NewThread