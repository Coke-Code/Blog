'use client'
import Image from 'next/image'
import { Navigation } from '../components/nav'
import { Card } from '../components/card'
export default function Example() {
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 lg:gap-16">
          <div>
            <div className="p-4 relative flex flex-col items-center gap-4 transition duration-1000 ease-in group md:gap-8 md:py-24  lg:pb-48  md:p-16">
              <Image
                src={'/wissbell.svg'}
                alt="avatar"
                width="192"
                height="192"
                className="h-48 w-48 rounded-full invert-50 group-hover:invert transition duration-1000 ease-out"
              />
              <div>
                <p className="text-zinc-500 group-hover:text-white group-hover:bg-zinc-900 text-sm text-center transition duration-1000 ease-in">
                  Sway
                </p>
                <p className="text-zinc-500 mt-3 group-hover:text-white group-hover:bg-zinc-900 text-sm text-center transition duration-1000 ease-in">
                  在现实与假寐中两难
                </p>
              </div>
              <div className="text-zinc-700  group-hover:text-zinc-400 group-hover:bg-zinc-900 text-xs text-center leadings-2 md:leading-5 transition duration-1000 ease-in">
                <p>前端开发工程师</p>
                <p>深圳</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
