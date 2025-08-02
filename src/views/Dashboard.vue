<template>
  <div class="flex">
    <Sidebar />

    <div class="flex-1 pl-24">
      <div class="p-6 mt-10">


        <div class="flex items-center text-3xl text-blue font-bold mb-4">
  <svg class="w-8 h-8 rotate-90 text-blue dark:text-blue mr-2" aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path
      d="M5 3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Zm14 18a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4ZM5 11a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H5Zm14 2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4Z" />
  </svg>
  Dashboard
</div>

<h1 class="font-bold pt-7 pb-10 text-2xl shadow-gray-500">Summaries</h1>

<div class="grid grid-cols-5 gap-8 mb-6">
  <div class="bg-white h-11 pt-2 pl-2 rounded border border-gray-400 shadow-[6px_6px_8px_-4px_rgba(0,0,0,0.30)]">
    <p>Total Records</p>
  </div>
  <div class="bg-white h-11 pt-2 pl-2 rounded border border-gray-400 shadow-[6px_6px_8px_-4px_rgba(0,0,0,0.30)]">
<p>Records Pending</p>
  </div>
  <div class="bg-white h-11 pt-2 pl-2 rounded border border-gray-400 shadow-[6px_6px_8px_-4px_rgba(0,0,0,0.30)]">
      <p>Processes Pending</p>
  </div>
</div>

<div class="grid grid-cols-5 gap-6 mb-6 pt-2">  
    <div class="bg-white h-11 pt-2 pl-2 rounded border border-gray-400 shadow-[6px_6px_8px_-4px_rgba(0,0,0,0.30)]">
<p>Submitted Today</p>
  </div>
    <div class="bg-white h-11 pt-2 pl-2 rounded border border-gray-400 shadow-[6px_6px_8px_-4px_rgba(0,0,0,0.30)]">
<p>Submitted this Month</p>
  </div>
 
</div>




<h1 class="font-bold pt-10 pb-10 text-2xl shadow-gray-500">Quick Menu</h1>


<div class="grid grid-cols-5 gap-8 mb-6">
    <button @click="router.push('/multistepform')">
  <div class="bg-white h-11 pt-2 pr-24 rounded border border-gray-400 shadow-[6px_6px_8px_-4px_rgba(0,0,0,0.30)]">
    <p>Add a new record</p>

  </div>
  </button>
  <div class="bg-white h-11 pt-2 pl-2 rounded border border-gray-400 shadow-[6px_6px_8px_-4px_rgba(0,0,0,0.30)]">
<p>View past records</p>
  </div>
  <div class="bg-white h-11 pt-2 pl-2 rounded border border-gray-400 shadow-[6px_6px_8px_-4px_rgba(0,0,0,0.30)]">
      <p>Process new records</p>
  </div>
</div>







      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue'
import { ref } from 'vue'

import { useRouter } from 'vue-router'

const router = useRouter()

</script>
