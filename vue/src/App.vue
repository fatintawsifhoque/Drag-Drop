<template>
  <section class="min-h-screen w-screen flex justify-center items-center gap-14 bg-olive-300">
    
    <div class="w-52 min-h-75 p-4 border-2 border-dashed border-lime-300 rounded-xl flex flex-col items-center bg-white/50">
      <h2 class="text-xl font-bold mb-4 text-lime-700">Fruits</h2>
      
      <VueDraggable 
        v-model="items1" 
        group="main" 
        :empty-insert-threshold="50"
        class="w-full flex flex-col items-center"
      >
        <div 
          v-for="item in items1" 
          :key="item.ID" 
          class="border border-lime-200 rounded-lg text-lg bg-amber-100 hover:bg-amber-200 cursor-grab active:cursor-grabbing w-40 my-2 flex justify-center py-2 shadow-sm transition-all"
        >
          {{ item.name }}
        </div>
      </VueDraggable>
    </div>

    <div class="w-52 min-h-75 p-4 border-2 border-dashed border-sky-300 rounded-xl flex flex-col items-center bg-white/50">
      <h2 class="text-xl font-bold mb-4 text-sky-700">Colors</h2>
      
      <VueDraggable 
        v-model="items2" 
        group="main" 
        :empty-insert-threshold="50"
        class="w-full flex flex-col items-center"
      >
        <div 
          v-for="item in items2" 
          :key="item.ID" 
          class="border border-sky-200 rounded-lg text-lg bg-sky-100 hover:bg-sky-200 cursor-grab active:cursor-grabbing w-40 my-2 flex justify-center py-2 shadow-sm transition-all"
        >
          {{ item.name }}
        </div>
      </VueDraggable>
    </div>

  </section>
</template>

<script setup>
import { ref } from 'vue';
import { VueDraggable } from 'vue-draggable-plus';

const items1 = ref([
  { name: "Mango", ID: 1 },
  { name: "Jackfruit", ID: 2 },
  { name: "Guava", ID: 3 }
])

const items2 = ref([
  { name: "Red", ID: 4 },
  { name: "Green", ID: 5 },
  { name: "Blue", ID: 6 }
])
</script>

<style scoped>
</style>