<template>
  <div class="flex items-center justify-center mt-6">
    <div class="flex  justify-center items-center w-full max-w-md">
      <div
        v-for="(step, index) in steps"
        :key="index"
        class="flex items-center w-full"
      >
        <div
          class="flex items-center justify-center w-8 h-8 rounded-full bg-[#E9E9E9] text-lg font-bold transition-colors duration-300"
          :class="[
            index <= currentStep ? 'text-blue' : ' text-[#E9E9E9]'
          ]"
        >
          {{ step }}
        </div>

        <div
          v-if="index < steps.length - 1"
          class="flex-1 h-1 bg-[#E9E9E9]"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  currentStep: Number,
  steps: Array
})
</script>
