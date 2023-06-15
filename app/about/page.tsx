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
          <div className="p-4 relative flex flex-col items-center gap-4 md:gap-8 md:py-24  lg:pb-48  md:p-16">
            <div className="flex flex-col group">
              <Image
                src={'/wissbell.svg'}
                alt="avatar"
                width="192"
                height="192"
                className="h-48 w-48 max-md:invert rounded-full invert-50 group-hover:invert transition duration-1000 ease-in"
              />
              <div>
                <p className="text-zinc-500 mt-8 max-md:text-white group-hover:text-white text-sm text-center transition duration-700 ease-in">
                  他山之石
                </p>
                <p className="text-zinc-500 mt-2 max-md:text-white group-hover:text-white text-sm text-center transition duration-700 ease-in">
                  英特纳雄耐尔就一定要实现
                </p>
              </div>
              <div className="text-zinc-700 mt-10 max-md:text-zinc-400 group-hover:text-zinc-400 text-xs text-center leadings-2 md:leading-5 transition duration-700 ease-in">
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
