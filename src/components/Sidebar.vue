<script setup>

import logo from '@/assets/logo.jpg'

</script>

<template>
    <div class="h-screen bg-white text-blue transition-all duration-300 group ml-2 hover:w-48 w-16 fixed z-50 shadow-[8px_0_20px_-4px_rgba(0,0,0,0.40)]">

        <div class="p-4  ">
            <div class="mt-12 mr-32 w-8 h-8 mx-auto">
                <img :src="logo" alt="Logo" class="w-full h-full object-contain" />
            </div>
        </div>

        <ul class="font-semibold text-normal">
            <li class="px-4 py-3 cursor-pointer flex items-center gap-4">
                <svg class="w-5 h-5 rotate-90 text-blue dark:text-blue" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path
                        d="M5 3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Zm14 18a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4ZM5 11a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H5Zm14 2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4Z" />
                </svg>

                <span class="hidden group-hover:inline">Dashboard</span>
            </li>

            <li class="px-4 py-3  cursor-pointer flex items-center gap-4">
                <FontAwesomeIcon :icon="['fas', 'folder']" class="text-blue" />
                <span class="hidden group-hover:inline">Records</span>
            </li>

            <li class="px-4 py-3  cursor-pointer flex items-center gap-4">
                <FontAwesomeIcon :icon="['fas', 'user']" class="text-blue" />
                <span class="hidden group-hover:inline">My Account</span>
            </li>
            <li class="px-4 py-3  cursor-pointer flex items-center gap-4">
                <FontAwesomeIcon :icon="['fas', 'users']" class="text-blue" />
                <span class="hidden group-hover:inline">Users</span>
            </li>
            <li class="px-4 py-3  cursor-pointer flex items-center gap-4">
                <FontAwesomeIcon :icon="['fas', 'lock']" class="text-blue" />
                <span class="hidden group-hover:inline">Security</span>
            </li>
            <li class="px-4 py-3  cursor-pointer flex items-center gap-4">

                <svg class="w-5 h-5 text-blue dark:text-blue" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd"
                        d="M7.05 4.05A7 7 0 0 1 19 9c0 2.407-1.197 3.874-2.186 5.084l-.04.048C15.77 15.362 15 16.34 15 18a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1c0-1.612-.77-2.613-1.78-3.875l-.045-.056C6.193 12.842 5 11.352 5 9a7 7 0 0 1 2.05-4.95ZM9 21a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Zm1.586-13.414A2 2 0 0 1 12 7a1 1 0 1 0 0-2 4 4 0 0 0-4 4 1 1 0 0 0 2 0 2 2 0 0 1 .586-1.414Z"
                        clip-rule="evenodd" />
                </svg>
                <span class="hidden group-hover:inline">Change Theme</span>
            </li>
            <li class="px-4 py-3  cursor-pointer flex items-center gap-4">
                <FontAwesomeIcon :icon="['fas', 'circle-info']" class="text-blue" />


                <span class="hidden group-hover:inline">Info</span>
            </li>

        </ul>
    </div>
</template>

<style scoped></style>
