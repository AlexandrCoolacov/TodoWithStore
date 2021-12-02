<template>
     <div class="controlButtons">
        <div class="counterItemsLeft">
          
        </div>
        <button class="allNotes btn" >
            <router-link exact to="/" class="nav" active-class="active">All</router-link>
        </button>

        <button class="activeNotes btn">
            <router-link to="/active" class="nav" active-class="active">Active</router-link>
        </button>

        <button class="completeNotes btn">
            <router-link to="/completed" class="nav" active-class="active">Completed</router-link>
        </button>

        <button
        v-if="clearCompetedButton"
        @click="clearCompletedNotes"
        class="clearCompleted btn">Clear completed</button>
      </div>
</template>

<script>
export default {
    name: 'Controls',

    data() {
        return {
            
        }
    },

    methods: {
        clearCompletedNotes(index) {
            this.$store.state.notes.splice(index,1)
        },
        
    
    },

    computed: {
            clearButton() {
               return document.getElementsByClassName(' completedNote').length
            },
            // clearCompetedButton() {
                
            // for (i = 0 ; i < this.allElements; i++) {

            // }
            // },
             allElements() {
             return (this.$store.state.allElements)
            },
            allElementsLength() {
            return this.$store.state.allElements.length
            },
            
            

        
    }

    
}
</script>

<style lang="scss" scoped>

.btn{
  margin: 0 10px;
  background-color: rgb(151, 135, 135);
  border-radius: 10px;

}

a {
    
  text-decoration:none;
  color: black;
}

.active {
    color: rgb(212, 211, 211);
}

 
</style>


