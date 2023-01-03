import {defineStore} from 'pinia'

export const useTaskStore = defineStore('TaskStore', {

state:()=>({

tasks:[],
loading:false



}),
getters:{

favs(){
    return this.tasks.filter(t=>t.isFav)
},


},

actions:{

    async getTasks(){
        
        const res = await fetch(' http://localhost:3001/tasks');
        const data = await res.json();
        
        this.tasks = data ;
       
    },

   async  deleteTask(id){
        this.tasks = this.tasks.filter(t =>{
            return t.id !== id
        })

        const res = await fetch('http://localhost:3001/tasks/' + id,{

        method:'DELETE',
        

        })
        if(res.error){
            console.log(res.error);
        }
    },

  async  toggelFav(id){
        const task = this.tasks.find(t=> t.id === id)
        task.isFav = !task.isFav


        const res = await fetch('http://localhost:3001/tasks',{

        method:'POST',
        body:JSON.stringify({isFav: task.isFav}),
        headers:{'Content-Type' : 'application/json'}

        })
        if(res.error){
            console.log(res.error);
        }

    },
   async addTask(task){
        this.tasks.push(task)

        const res = await fetch('http://localhost:3001/tasks',{

        method:'POST',
        body:JSON.stringify(task),
        headers:{'Content-Type' : 'application/json'}

        })
        if(res.error){
            console.log(res.error);
        }
    }
}






})