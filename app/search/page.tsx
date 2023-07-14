"use client"

import React, { useEffect } from 'react'
import BottomNavigation, { useStore } from '@/components/Navigation/BottomNavigation'

const Search = () => {
    const { setCurrentPage } = useStore();

    useEffect(() => {
        setCurrentPage(2);
    }, [])
  return (
    <div>
        <p>Search</p>
        <BottomNavigation/>
    </div>
  )
}

export default Search