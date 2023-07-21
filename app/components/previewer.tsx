'use client'
import { useEffect, useState } from 'react'
import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'

export default function Preview(){

  useEffect(() => {
    new Viewer(document.querySelector('.gallery')!)
  }, [])
  return null
}