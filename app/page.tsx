import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Folder, Star } from "lucide-react";
import mockup from "../public/mockup.png";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#f3f4f6] flex flex-col font-sans overflow-x-hidden selection:bg-purple-100">

      {/* Header */}
      <header className="absolute top-0 w-full z-50 bg-transparent py-4 md:py-6">
        <div className="container mx-auto px-4 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900 group cursor-pointer">
              {/* Logo Icon - Folder */}
              <Folder className="w-6 h-6 text-slate-900 group-hover:text-slate-600 transition-colors" />
              <span className="text-lg">Office App</span>
            </div>
          </div>

          <Link href="https://github.com/DinanathDash/OfficeApp/releases/latest/download/app-release.apk" target="_blank">
            <Button variant="outline" className="rounded-full px-4 py-4 md:px-6 md:py-5 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-all font-medium text-sm md:text-base bg-transparent">
              Download App
            </Button>
          </Link>
        </div>
      </header>

      {/* Centered Phone Mockup */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none top-10">
        {/* Phone container positioned to overlap sections if needed */}
        <div className="absolute right-20 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto">
          <Image
            src={mockup}
            alt="Mockup"
            width={249}
            height={650}
            className="w-[249px] h-[650px] drop-shadow-upright"
            priority
          />
        </div>
      </div>

      <main className="flex-1 pt-24 md:pt-32 relative">
        {/* Top/Hero Content */}
        <div className="container mx-auto px-4 md:px-12 pb-8 md:pb-12 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] leading-[0.9] md:leading-[0.85] font-bold text-slate-900 tracking-tighter mb-4 uppercase">
              ALL-IN-ONE <br />
              <span className="italic font-light ml-1 md:ml-2">OFFICE SUITE</span>
            </h1>
          </div>
        </div>

        {/* Bottom Section - Lavender Background with Swoosh */}
        <div className="relative min-h-[300px] md:min-h-[400px] mx-4 md:mx-10 bg-[#E3E2F6] rounded-[30px] md:rounded-[60px] flex flex-col justify-center overflow-hidden">

          {/* Background Layer - Clipped */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Swoosh Decoration - Custom SVG to match reference */}
            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 pointer-events-none opacity-60 md:opacity-100">
              <svg width="100%" height="100%" viewBox="0 0 1064 264" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-150 md:scale-100 origin-left">
                <path d="M20.004 235.624C52.3098 242.388 119.129 251.674 196.198 226.287C247.471 209.398 283.114 182.642 305.024 166.115C402.273 92.6952 433.055 10.6954 473.964 20.8727C485.302 23.6946 497.574 33.6333 505.057 43.6966C521.039 65.1717 510.964 81.4597 520.603 94.5315C544.234 126.589 650.531 90.7863 710.271 70.6702C768.519 51.0521 770.675 44.734 796.296 43.6966C841.018 41.8603 864.265 59.8393 927.923 81.0447C965.772 93.5923 1004.6 102.962 1044 109.056" stroke="#D1CFE9" strokeWidth="40" strokeMiterlimit="10" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          <div className="container mx-auto px-4 md:px-12 py-10 md:py-0 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 relative z-10">

            {/* Left Content Area */}
            <div className="lg:col-span-6 flex flex-col items-start justify-center pr-0 lg:pr-12">
              <p className="text-slate-800 text-lg md:text-xl font-medium leading-relaxed mb-8 max-w-lg tracking-tight">
                Welcome to OfficeApp! This is an Android application designed to handle various office document formats, including PDF, Word, and Excel files.
              </p>

              <Link href="https://github.com/DinanathDash/OfficeApp" target="_blank" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto rounded-full bg-[#221F1F] text-[#F5F5F0] px-8 py-6 md:px-10 md:py-7 text-base md:text-lg hover:bg-black shadow-none mb-8 md:mb-10 transition-transform hover:scale-105 font-medium tracking-wide">
                  <Star className="mr-2 !h-5 !w-5 md:!h-6 md:!w-6" />
                  Star it on GitHub
                </Button>
              </Link>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 w-full">
                <span className="text-slate-900 font-medium text-lg leading-tight w-auto">The mobile app <br className="hidden sm:block" /> is available now</span>
                <Link href="https://github.com/DinanathDash/OfficeApp/releases/latest/download/app-release.apk" target="_blank">
                  <Button className="rounded-full w-12 h-12 p-0 bg-[#221F1F] text-white hover:bg-black transition-transform hover:scale-105 shadow-md">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="!w-6 !h-6">
                      <path d="M15 21C15 21 15 18.73 15 18C15 17.37 15.15 16.04 14.5 15.5C15.89 15.37 16.98 14.92 18 14C19.02 13.08 19.5 11.69 19.5 9.5C19.5 8 19.25 7 18.5 6C18.79 5.22 18.84 4 18.5 3C16.94 3 15.53 4.07 15 4.5C14.61 4.4 13.67 4 12 4C10.33 4 9.39 4.4 9 4.5C8.47 4.07 7.06 3 5.5 3C5.16 4 5.21 5.22 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.69 4.98 13.08 6 14C7.02 14.92 8.11 15.37 9.5 15.5C8.85 16.04 9 17.37 9 18C9 18.73 9 21 9 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9 19C7.59 19 6.16 18.44 5.31 17.81C4.47 17.18 4.22 16.15 3 15.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Button>
                </Link>
              </div>
            </div>

            {/* Mobile version of phone - inline */}
            <div className="lg:hidden w-full flex justify-center mt-4 mb-4">
              <div className="relative w-[240px] md:w-[280px]">
                <Image
                  src={mockup}
                  alt="Mockup"
                  width={800}
                  height={1600}
                  className="w-full h-auto drop-shadow-upright"
                  priority
                />
              </div>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}
