<template>
  <div>
    
    <header >
      <div class=" flex w-full justify-center bg-stone-100 p-3 md:w-screen    ">
        <div>
          <img
          class=" w-20 h-20 my-10 "
           src="./assets/images/logo.svg" alt="logo">
        </div>

        <div>
          <h1 class=" text-3xl mt-16">Todo<span class=" text-yellow-300/90 font-extrabold  ">List</span></h1>
        </div>

      </div>
    </header>


    <main class=" bg-stone-50  h-screen w-full">
     <div class=" w-full flex  flex-col  gap-5 p-3  ">
      <div class="  flex justify-center  "> 
        <TasksTaskInput/>
      </div>

      <div class="mx-auto">
        <button @click="filter ='all'" class=" border-2 border-gray-100 hover:bg-yellow-300 hover:text-black mx-2 px-3 rounded-full font-semibold">all</button>
        <button @click="filter ='favs'" class=" border-2 border-gray-100 hover:bg-red-500 hover:text-black mx-2 px-3 rounded-full font-semibold" >favs</button>
      </div>

<!-- loading -->
      <!-- <div>
       
        <div class="loaderBox" v-if=" taskStore.loading ">
            <div class="spinner1"></div>
            <p>Spinner 1</p>
        </div>
      </div> -->


<div v-if="filter === 'all' ">

      <p class="my-2  font-semibold p-3 ">All tasks</p>
      <div
      
      v-for="task in taskStore.tasks" :key="task"
      >
      
      <TasksDetal :tasks="task" />
       
      </div>

    </div>


<div v-if="filter === 'favs'">
  <p class="my-2  font-semibold p-3 ">Favs tasks</p>
      <div
      
      v-for="task in taskStore.favs" :key="task"
      >
      <TasksDetal :tasks="task" />
       
      </div>
    </div>


     </div>
    
    </main>
    
  </div>
</template>

<script setup>
import { useTaskStore } from './stores/TaskStore';
const taskStore =useTaskStore();

// fetch tasks
taskStore.getTasks()


const filter = ref('all')
</script>


<style scoped>
.spinner1 {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    animation: round 1s linear infinite;
    border-top: 5px solid rgb(30, 210, 222);
    background: transparent;
}
</style>