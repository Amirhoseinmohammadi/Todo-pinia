<template>
    <div>
        <div class="flex  justify-between bg-stone-100 md:w-2/5 mx-auto p-4 rounded-md shadow-xl my-2">
        <!-- <p>{{ tasks.id }}</p> -->
        <p class=" basis-1/2">{{ tasks.title }}</p>
        <div class="flex  basis-2/2 ">
        <button class=" " @click="taskStore.toggelFav(tasks.id)" ><HeartIcon class="w-6 h-6" :class="{active:tasks.isFav}"/></button>
        <button @click="taskStore.deleteTask(tasks.id)"><TrashIcon class="w-6 h-6 "/></button>

        </div>

        </div>
    </div>
</template>

<script setup>
import { useTaskStore } from '~~/stores/TaskStore';
import {HeartIcon , TrashIcon} from '@heroicons/vue/24/solid'  
const taskStore = useTaskStore();
const props = defineProps({
    tasks:{
        type:Object
    }
})
</script>

<style scoped>
.active{
   color: red;
}

</style>