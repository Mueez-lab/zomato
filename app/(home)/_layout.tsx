import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
  return (
    <Stack>
        <Stack.Screen name='./index.tsx'/>
        <Stack.Screen name='./hotel.tsx'/>
    </Stack>
  )
}