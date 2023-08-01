import React from 'react'
import { prisma } from '@/lib/prisma';

export const getTrips = async () => { 
  const trips = await prisma.trip.findMany({});
  return trips;
}

const Trips = async () => {
    const data = await getTrips(); 
    return (
    <div>
        
    </div>
  )
}

export default Trips
