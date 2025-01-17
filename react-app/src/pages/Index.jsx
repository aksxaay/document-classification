import React from 'react'

const Index = () => {
  return (
    <>

      <div class="bg-white dark:bg-gray-900">
        <header>
          <nav class="fixed z-10 w-full dark:bg-gray-900 bg-white md:absolute md:bg-transparent">
            <div class="container m-auto px-2 md:px-12 lg:px-7">
              <div class="flex flex-wrap items-center justify-between py-4 gap-6 md:py-4 md:gap-0 relative">
                <input type="checkbox" name="toggle_nav" id="toggle_nav" class="hidden peer" />
                <div class="w-full px-6 flex justify-between lg:w-max md:px-0">
                  <a href="#" aria-label="logo" class="flex space-x-2 items-center">
                    <div aria-hidden="true" class="flex space-x-1">
                      <div class="h-4 w-4 rounded-full bg-gray-900 dark:bg-white"></div>
                      <div class="h-6 w-2 bg-teal-500"></div>
                    </div>
                    <span class="text-2xl font-bold text-gray-900 dark:text-white">Arceelus</span>
                  </a>

                  <div class="flex items-center lg:hidden max-h-10">
                    <label role="button" for="toggle_nav" aria-label="humburger" id="hamburger" class="relative  p-6 -mr-6">
                      <div aria-hidden="true" id="line" class="m-auto h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"></div>
                      <div aria-hidden="true" id="line2" class="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"></div>
                    </label>
                  </div>
                </div>

                <div class="hidden absolute top-full transition translate-y-1 lg:peer-checked:translate-y-0 lg:translate-y-0 left-0 
                    lg:top-0 lg:relative peer-checked:flex w-full 
                    lg:flex lg:flex-row flex-col 
                    flex-wrap justify-end items-center 
                    gap-6 p-6 rounded-xl 
                    bg-white dark:bg-gray-900 lg:gap-0 
                    lg:p-0  
                    lg:bg-transparent lg:w-7/12">
                  <div class="text-gray-600 dark:text-gray-300 lg:pr-4 lg:w-auto w-full lg:pt-0">
                    <ul class=" 
                            tracking-wide 
                            font-medium 
                            text-sm flex-col flex 
                            lg:flex-row
                            gap-6 lg:gap-0">
                      <li>
                        <a href="#" class="block md:px-4 transition hover:text-teal-700">
                          <span>Home</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="block md:px-4 transition hover:text-teal-700">
                          <span>Portfolio</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="block md:px-4 transition hover:text-teal-700">
                          <span>Services</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="w-full lg:pl-2 space-y-2 border-teal-200 lg:w-auto lg:space-y-0 sm:w-max lg:border-l">
                    <button type="button" title="Start buying" class="w-full py-3 px-6 text-center rounded-full transition dark:active:bg-teal-900 dark:focus:bg-gray-800 active:bg-teal-200 focus:bg-teal-100 sm:w-max">
                      <span class="block text-teal-800 dark:text-teal-300 font-semibold text-sm">
                        Sign up
                      </span>
                    </button>
                    <button type="button" title="Start buying" class="w-full py-3 px-6 text-center rounded-full transition bg-teal-300 hover:bg-teal-100 active:bg-teal-400 focus:bg-teal-300 sm:w-max">
                      <span class="block text-teal-900 font-semibold text-sm">
                        Contact Us
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div>
          <img class="absolute w-full object-cover object-left-top h-screen inset-0 top-0 hidden dark:block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUa8smrNoyWA5W_03bdah8YJe6DioVwIv0EvsBMo5pcHxPC_07YPiX_nKq0T_oFQhyIhc&usqp=CAU" alt="fghjklkfdfgjkl" loading="lazy" />
          <img class="absolute w-full object-cover object-top h-screen inset-0 top-0 dark:hidden" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUa8smrNoyWA5W_03bdah8YJe6DioVwIv0EvsBMo5pcHxPC_07YPiX_nKq0T_oFQhyIhc&usqp=CAU" alt="image" loading="lazy" />
          <div class="relative container m-auto px-6 md:px-12 lg:px-7">
            <div class="py-40 lg:py-56 md:w-9/12 lg:w-7/12 dark:lg:w-6/12 ml-auto">
              <h1 class="text-gray-900 dark:text-white font-bold text-4xl md:text-6xl lg:text-4xl xl:text-6xl">Shaping a world with <span class="text-teal-600 dark:text-teal-500">reimagination.</span></h1>
              <p class="mt-8 text-gray-700 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!</p>
              <div class="mt-16 space-y-2 lg:space-y-0 md:w-max sm:space-x-6">
                <button type="button" title="Start buying" class="w-full py-3 px-6 text-center rounded-full transition bg-teal-300 hover:bg-teal-100 active:bg-teal-400 focus:bg-teal-300 sm:w-max">
                  <span class="block text-teal-900 font-semibold text-sm">
                    Contact Us
                  </span>
                </button>
                <button type="button" title="Start buying" class="w-full py-3 px-6 text-center rounded-full transition border border-gray-200 dark:active:bg-teal-900 dark:focus:bg-gray-800 active:bg-teal-200 focus:bg-teal-100 sm:w-max">
                  <span class="block text-teal-800 dark:text-teal-100 font-semibold text-sm">
                    About us
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Index