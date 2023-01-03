<template>
    <div class="  " >
        <form @submit.prevent="handelr" class="  mx-auto flex " >
          
          <div class="flex my-3 ">
            <input
            v-model="newTask"
            class="p-3 mr-3  rounded-lg outline-none border-2 border-gray     "
            placeholder="I need ..."
             type="text"  >


     <button class=" border-2 border-gray p-2  rounded-lg hover:text-white hover:bg-yellow-300 transition-all ease-in-out duration-500 ">
            Add
     </button>
          </div>


        </form>
       
    </div>
</template>

<script setup>
import { useTaskStore } from '~~/stores/TaskStore';
const taskStore = useTaskStore()
const newTask =  ref('');
const handelr = () => {

if(newTask.value.length > 0){
  taskStore.addTask({
    title: newTask.value,
    isFav:false,
    id:Math.floor(Math.random() * 10)
  })
  newTask.value=''
}


}

</script>

<style  scoped>

</style>