"use client"

import React from 'react'
import BottomNavigation, { useStore } from '@/components/Navigation/BottomNavigation'
import { useEffect } from 'react';

const Activity = () => {
    const { setCurrentPage } = useStore();

    useEffect(() => {
        setCurrentPage(4);
    }, [])
  return (
    <div>
        <p>Activity</p>
        <BottomNavigation/>
    </div>
  )
}

export default Activity