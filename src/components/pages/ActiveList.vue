<template>
     <div 
          v-if="allActiveNotesVuex"
          class="todo-list">
          <ul class="noteList" >
              <li 
                  v-for="(note, index) in allActiveNotesVuex"
                  :key="index"
                  
                  class="noteList-item"
              > 
                {{note.innerText}}
                

              </li>
        
              <li
                
              ></li>
          </ul>

          <!-- <div class="counterActiveNotes">{{countUncompletedNotes}} items left</div> -->

        </div>
         <div class="emptyNotes" v-else>Список пуст</div>
</template>


<script>
export default {
     computed: {
        // allNotesVuexLength() {
        //   return this.$store.state.notes.length
        // },
        // allNoteVuex() {
        //     return this.$store.state.notes
        // },
        // addCompleteNoteVuex() {
        //   return this.$store.state.completedNotes
        // },
        
        allActiveNotesVuex() {
          return this.$store.getters.activeNotesVuex
        }
        
        
    }
}
</script>



<style lang="scss" scoped>

.todo-list {
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: start;
}
.noteList {
  padding: 0;
   
}
.noteList-item {
  list-style-type:none;
  border: 1px solid rgb(122, 116, 116);
  padding: .5rem 1rem;
  margin-bottom: .5rem;
  border-radius: 7px;
    
}

.completedNote {
  text-decoration: line-through;
  opacity: 0.5;
}

 
</style>
