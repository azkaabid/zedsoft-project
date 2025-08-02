<template>
    <div class="flex">
        <Sidebar />

        <div class="flex-1 pl-24">
            <div class="pt-6 mt-10">


                <div class="flex justify-between items-center mb-4">

                    <div class="flex items-center gap-4 text-3xl text-blue font-bold">
                        <svg class="w-9 h-9 text-[#3FCF81]" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 12h14m-7 7V5" />
                        </svg>
                        <span>Add Record</span>
                    </div>

                    <div class="flex items-center gap-4 mr-40">
                        <svg class="w-9 h-9 text-blue dark:text-blue" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="3"
                                d="M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5" />
                        </svg>

                        <svg @click="router.push('/')" class="w-8 h-8 text-[#E21E2C] dark:text-[#E21E2C] cursor-pointer"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>

                </div>


                <Stepper :currentStep="currentStep" :steps="steps" class="ml-28" />


                <div class="flex justify-center mt-8 ">
                    <div class=" w-full">

                        <div class="mx-auto max-w-4xl w-full p-6">

                            <div v-if="currentStep === 0">
                                <h2 class="text-xl font-bold mb-14 text-center ">Create New Record</h2>



                                <div class="grid grid-cols-3 gap-8 mb-10">

                                    <span class="font-semibold text-[#A5A1A1]">Date received*
                                        <div
                                            class="bg-white mt-1 h-11 pt-2 pl-2 font-light rounded border border-gray-300 shadow-[6px_6px_8px_-4px_rgba(0,0,0,0.30)]">
                                            <p>DD/MM/YYYY</p>
                                        </div>
                                    </span>

                                    <span class="font-semibold text-[#A5A1A1]">Time received*
                                        <div
                                            class="bg-white mt-1 h-11 pt-2 pl-2 font-light rounded border border-gray-300 shadow-[6px_6px_8px_-4px_rgba(0,0,0,0.30)]">
                                            <p>15:00:00</p>
                                        </div>
                                    </span>

                                </div>



                                <div class="grid grid-cols-3 gap-8 mb-10">

                                    <span class="font-semibold text-[#A5A1A1]">Customer title*
                                        <div
                                            class="bg-white mt-1 h-11 pt-2 pl-2 font-light rounded border border-gray-300 shadow-[6px_6px_8px_-4px_rgba(0,0,0,0.30)]">

                                            <div class="flex justify-between items-center">
                                                <p></p>
                                                <svg class="w-9 h-9 text-blue dark:text-blue" aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                        stroke-linejoin="round" stroke-width="2" d="m8 10 4 4 4-4" />
                                                </svg>
                                            </div>
                                        </div>
                                    </span>

                                    <span class="font-semibold text-[#A5A1A1]">Customer name
                                        <div
                                            class="bg-white mt-1 h-11 pt-2 pl-2 font-light rounded border border-gray-300 shadow-[6px_6px_8px_-4px_rgba(0,0,0,0.30)]">
                                        </div>
                                    </span>


                                    <span class="font-semibold text-[#A5A1A1]">First name
                                        <div
                                            class="bg-white mt-1 h-11 pt-2 pl-2 font-light rounded border border-gray-300 shadow-[6px_6px_8px_-4px_rgba(0,0,0,0.30)]">
                                        </div>
                                    </span>


                                </div>



                                <div class="grid grid-cols-3 gap-8 mb-6">

                                    <span class="font-semibold text-[#A5A1A1]">Date of birth
                                        <div
                                            class="bg-white mt-1 h-11 pt-2 pl-2 font-light rounded border border-gray-300 shadow-[6px_6px_8px_-4px_rgba(0,0,0,0.30)]">
                                        </div>
                                    </span>

                                    <span class="font-semibold text-[#A5A1A1]">Sex
                                        <div
                                            class="bg-white mt-1 h-11 pt-2 pl-2 font-light rounded border border-gray-300 shadow-[6px_6px_8px_-4px_rgba(0,0,0,0.30)]">

                                            <div class="flex justify-between items-center">
                                                <p></p>
                                                <svg class="w-9 h-9 text-blue dark:text-blue" aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                        stroke-linejoin="round" stroke-width="2" d="m8 10 4 4 4-4" />
                                                </svg>
                                            </div>
                                        </div>
                                    </span>
                                </div>

                            </div>

                        </div>

                        <div class="mx-auto max-w-4xl w-full ">


                            <div v-if="currentStep === 1">
                                <h2 class="text-xl font-bold mb-14 text-center ">Judicial Case References</h2>



                                <div class="grid grid-cols-3 gap-10 mb-10">

                                    <span class="font-semibold text-[#A5A1A1]">Name OPJ
                                        <div
                                            class="bg-white mt-1 h-11 pt-2 pl-2 font-light rounded border border-gray-300 shadow-[6px_6px_8px_-4px_rgba(0,0,0,0.30)]">

                                            <div class="flex justify-between items-center">
                                                <p></p>
                                                <svg class="w-9 h-9 text-blue dark:text-blue" aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                        stroke-linejoin="round" stroke-width="2" d="m8 10 4 4 4-4" />
                                                </svg>
                                            </div>
                                        </div>
                                    </span>

                                    <span class="font-semibold text-[#A5A1A1]">Service Police
                                        <div
                                            class="bg-white mt-1 h-11 pt-2 pl-2 font-light rounded border border-gray-300 shadow-[6px_6px_8px_-4px_rgba(0,0,0,0.30)]">
                                        </div>
                                    </span>


                                    <span class="font-semibold text-[#A5A1A1]">OPJ Grade
                                        <div
                                            class="bg-white mt-1 h-11 pt-2 pl-2 font-light rounded border border-gray-300 shadow-[6px_6px_8px_-4px_rgba(0,0,0,0.30)]">
                                        </div>
                                    </span>


                                </div>



                                <div class="grid grid-cols-3 gap-10 mb-10">


                                    <span class="font-semibold text-[#A5A1A1]">PV Number
                                        <div
                                            class="bg-white mt-1 h-11 pt-2 pl-2 font-light rounded border border-gray-300 shadow-[6px_6px_8px_-4px_rgba(0,0,0,0.30)]">
                                        </div>
                                    </span>

                                    <span class="font-semibold text-[#A5A1A1]">Nationality
                                        <div
                                            class="bg-white mt-1 h-11 pt-2 pl-2 font-light rounded border border-gray-300 shadow-[6px_6px_8px_-4px_rgba(0,0,0,0.30)]">

                                            <div class="flex justify-between items-center">
                                                <span></span>
                                                <svg class="w-9 h-9 text-blue dark:text-blue" aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                        stroke-linejoin="round" stroke-width="2" d="m8 10 4 4 4-4" />
                                                </svg>
                                            </div>
                                        </div>
                                    </span>

                                    <span class="font-semibold text-[#A5A1A1]">TGI of
                                        <div
                                            class="bg-white mt-1 h-11 pt-2 pl-2 font-light rounded border border-gray-300 shadow-[6px_6px_8px_-4px_rgba(0,0,0,0.30)]">

                                            <div class="flex justify-between items-center">
                                                <span></span>
                                                <svg class="w-9 h-9 text-blue dark:text-blue" aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                        stroke-linejoin="round" stroke-width="2" d="m8 10 4 4 4-4" />
                                                </svg>
                                            </div>
                                        </div>
                                    </span>


                                </div>



                                <div class="grid grid-cols-3 gap-10 mb-10">



                                    <span class="font-semibold text-[#A5A1A1]">Magistrate
                                        <div
                                            class="bg-white mt-1 h-11 pt-2 pl-2 font-light rounded border border-gray-300 shadow-[6px_6px_8px_-4px_rgba(0,0,0,0.30)]">

                                            <div class="flex justify-between items-center">
                                                <span></span>
                                                <svg class="w-9 h-9 text-blue dark:text-blue" aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                        stroke-linejoin="round" stroke-width="2" d="m8 10 4 4 4-4" />
                                                </svg>
                                            </div>
                                        </div>
                                    </span>

                                    <span class="font-semibold text-[#A5A1A1]">Magistrate Grade
                                        <div
                                            class="bg-white mt-1 h-11 pt-2 pl-2 font-light rounded border border-gray-300 shadow-[6px_6px_8px_-4px_rgba(0,0,0,0.30)]">

                                            <div class="flex justify-between items-center">
                                                <span></span>
                                                <svg class="w-9 h-9 text-blue dark:text-blue" aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                        stroke-linejoin="round" stroke-width="2" d="m8 10 4 4 4-4" />
                                                </svg>
                                            </div>
                                        </div>
                                    </span>


                                    <span class="font-semibold text-[#A5A1A1]">Prosecutor's office number
                                        <div
                                            class="bg-white mt-1 h-11 pt-2 pl-2 font-light rounded border border-gray-300 shadow-[6px_6px_8px_-4px_rgba(0,0,0,0.30)]">
                                        </div>
                                    </span>
                                </div>



                                <div class="grid grid-cols-3 gap-10 mb-6">

                                    <span class="font-semibold text-[#A5A1A1]">Instruction number
                                        <div
                                            class="bg-white mt-1 h-11 pt-2 pl-2 font-light rounded border border-gray-300 shadow-[6px_6px_8px_-4px_rgba(0,0,0,0.30)]">
                                        </div>
                                    </span>

                                    <span class="font-semibold text-[#A5A1A1]">Justice identifier
                                        <div
                                            class="bg-white mt-1 h-11 pt-2 pl-2 font-light rounded border border-gray-300 shadow-[6px_6px_8px_-4px_rgba(0,0,0,0.30)]">
                                        </div>
                                    </span>
                                </div>

                            </div>
                        </div>


                        <div class=" max-w-8xl w-full p-6">

                            <div v-if="currentStep === 2">


                                <h2 class="text-center font-semibold text-lg mb-12 mt-[-90px]">Seals</h2>

                                <div class="flex">
                                    <button class="bg-[#D9D9D9] px-6 py-2 border  text-sm font-semibold">Seal 1</button>
                                    <button
                                        class="bg-[#F6F6F6] px-8 pr-12  py-2 border rounded-tr-2xl text-sm font-semibold">+
                                        Add Seal</button>
                                </div>

                                <div class="border rounded pt-14 pl-60   pb-80 bg-[#F9F9F9]">

                                    <div class="border border-b-gray-300  max-w-4xl  p-4 pl-6 bg-white">
                                        <h3 class="text-md font-semibold ">Seal 1</h3>
                                    </div>
                                    <div class="border max-w-4xl  p-6 mb-6 bg-white">



                                        <div class="grid grid-cols-2 gap-20 mb-10 pl-6 pr-12 ">

                                            <span class="font-semibold text-[#A5A1A1]">Reception Date
                                                <div
                                                    class="bg-white mt-1 h-11 pt-2 pl-2 font-light rounded border border-gray-300 shadow-[6px_6px_8px_-4px_rgba(0,0,0,0.30)]">
                                                    DD/MM/YYYY</div>
                                            </span>

                                            <span class="font-semibold text-[#A5A1A1]">Seal State
                                                <div
                                                    class="bg-white mt-1 h-11 pt-2 pl-2 font-light rounded border border-gray-300 shadow-[6px_6px_8px_-4px_rgba(0,0,0,0.30)]">

                                                    <div class="flex justify-between items-center">
                                                        <p></p>
                                                        <svg class="w-9 h-9 text-blue dark:text-blue" aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" stroke-linecap="round"
                                                                stroke-linejoin="round" stroke-width="2"
                                                                d="m8 10 4 4 4-4" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </span>

                                        </div>


                                        <div
                                            class="border border-dashed pt-24 ml-40 mr-40 border-gray-300 rounded text-center mb-4">
                                            <p class="mt-[-4rem]  text-gray-500">Drag files here to upload.</p>


                                            <svg class="mx-auto h-60 w-60 text-[#333333] " aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                                viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="1"
                                                    d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                                            </svg>
                                        </div>


                                        <div class="text-center text-gray-600 my-2">
                                            <p>Or</p>
                                            <button class="px-5 py-2 mt-2 border shadow rounded text-sm ">Select
                                                Files</button>
                                        </div>



                                        <div class="mt-8 flex justify-between items-center px-40">
                                            <div class="flex items-center space-x-2">
                                                <svg class="w-8 h-8 text-gray-400" aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                                        d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Zm-4 1h.01v.01H15V5Zm-2 2h.01v.01H13V7Zm2 2h.01v.01H15V9Zm-2 2h.01v.01H13V11Zm2 2h.01v.01H15V13Zm-2 2h.01v.01H13V15Zm2 2h.01v.01H15V17Zm-2 2h.01v.01H13V19Z" />
                                                </svg>
                                                <span class="text-gray-500 text-xs">van 2 rr.xls <br> 121.00KB</span>
                                            </div>

                                            <div class="flex items-center space-x-4">
                                                <svg class="w-6 h-6 text-gray-400" aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-width="2"
                                                        d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                                                    <path stroke="currentColor" stroke-width="2"
                                                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                </svg>
                                                <svg class="w-6 h-6 text-gray-400" aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                        stroke-linejoin="round" stroke-width="2"
                                                        d="M6 18 17.94 6M18 18 6.06 6" />
                                                </svg>
                                            </div>
                                        </div>


                                        <div class="mt-8 flex justify-between items-center px-40">
                                            <div class="flex items-center space-x-2">
                                                <svg class="w-8 h-8 text-gray-400" aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                                        d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Zm-4 1h.01v.01H15V5Zm-2 2h.01v.01H13V7Zm2 2h.01v.01H15V9Zm-2 2h.01v.01H13V11Zm2 2h.01v.01H15V13Zm-2 2h.01v.01H13V15Zm2 2h.01v.01H15V17Zm-2 2h.01v.01H13V19Z" />
                                                </svg>
                                                <span class="text-gray-500 text-xs">van 2 rr.xls <br> 121.00KB</span>
                                            </div>

                                            <div class="flex items-center space-x-4">
                                                <svg class="w-6 h-6 text-gray-400" aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-width="2"
                                                        d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                                                    <path stroke="currentColor" stroke-width="2"
                                                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                </svg>
                                                <svg class="w-6 h-6 text-gray-400" aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                        stroke-linejoin="round" stroke-width="2"
                                                        d="M6 18 17.94 6M18 18 6.06 6" />
                                                </svg>
                                            </div>
                                        </div>




                                    </div>


                                    <div class="border border-b-gray-300  max-w-4xl  p-4 pl-6 bg-white">
                                        <h3 class="text-md font-semibold ">Sample 1-A</h3>
                                    </div>



                                    <div class="border max-w-4xl  p-6 mb-6 bg-white">



                                        <div class="grid grid-cols-2 gap-20 mb-10 pl-6 pr-12 ">

                                            <span class="font-semibold text-[#A5A1A1]">Sample Date
                                                <div
                                                    class="bg-white mt-1 h-11 pt-2 pl-2 font-light rounded border border-gray-300 shadow-[6px_6px_8px_-4px_rgba(0,0,0,0.30)]">
                                                    DD/MM/YYYY</div>
                                            </span>

                                            <span class="font-semibold text-[#A5A1A1]">Seal Time
                                                <div
                                                    class="bg-white mt-1 h-11 pt-2 pl-2 font-light rounded border border-gray-300 shadow-[6px_6px_8px_-4px_rgba(0,0,0,0.30)]">

                                                    <div class="flex justify-between items-center">
                                                        <p class=" pb-2">15:00:00</p>
                                                        <svg class="w-9 h-9 text-blue dark:text-blue" aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" stroke-linecap="round"
                                                                stroke-linejoin="round" stroke-width="2"
                                                                d="m8 10 4 4 4-4" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </span>

                                        </div>

                                        <div class="grid grid-cols-1 gap-20 mb-10 pl-6 pr-12 ">

                                        <span class="font-semibold text-[#A5A1A1]">Sample Description
                                                <div
                                                    class="bg-white mt-1 h-11 p-20 font-light rounded border border-gray-300 shadow-[6px_6px_8px_-4px_rgba(0,0,0,0.30)]">
                                                    </div>
                                            </span>
</div>

                                        
                                        <div class="grid grid-cols-1 gap-20 mb-10 pl-6 pr-12 ">

                                         
                                            <span class="font-semibold text-[#A5A1A1]">Analyses
                                                <div
                                                    class="bg-white mt-1 h-11 pt-2 pl-2 font-light rounded border border-gray-300 shadow-[6px_6px_8px_-4px_rgba(0,0,0,0.30)]">

                                                    <div class="flex justify-between items-center">
                                                        <p></p>
                                                        <svg class="w-9 h-9 text-blue dark:text-blue" aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" stroke-linecap="round"
                                                                stroke-linejoin="round" stroke-width="2"
                                                                d="m8 10 4 4 4-4" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </span>




                                        </div>

                                    </div>


                                    <div class="border border-b-gray-300  max-w-4xl  p-3 bg-white">
                                        <h3 class="text-lg font-semibold text-center ">+ Add Sample</h3>
                                    </div>


                                </div>

                            </div>
                        </div>

                        <div class="mx-auto max-w-4xl w-full pr-6 pb-8">

                            <div class="flex justify-between">
                                <span></span>

                                <div>
                                    <button v-if="currentStep > 0" @click="prevStep"
                                        class="px-10 py-1 mr-6 bg-[#3FCF81]  text-white border border-[#267C4D] rounded-lg shadow">
                                        Previous
                                    </button>
                                    <button v-if="currentStep < steps.length - 1" @click="nextStep"
                                        class="px-14 py-1 bg-[#3D5BC2] text-white border border-blue-900 rounded-lg shadow">
                                        Next
                                    </button>
                                    <button v-else @click="router.push('/')" class="px-12 py-1 mr-6 bg-[#3D5BC2]  text-white border border-[#253774] rounded-lg shadow">
                                        Finish
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue'
import Stepper from '@/components/Stepper.vue'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const steps = [1, 2, 3]
const currentStep = ref(0)

const form = reactive({
    name: '',
    email: ''
})

const nextStep = () => {
    if (currentStep.value < steps.length - 1) currentStep.value++
}

const prevStep = () => {
    if (currentStep.value > 0) currentStep.value--
}

const submit = () => {
    alert(`Form Submitted!\n\nName: ${form.name}\nEmail: ${form.email}`)
}
</script>

<style scoped>
.input {
    @apply w-full mb-4 p-2 border border-gray-300 rounded;
}
</style>
