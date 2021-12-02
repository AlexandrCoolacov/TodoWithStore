<template>
  <div class="container">

    <input 
          type="text"
          :placeholder = "mainPlaceholder"
          v-model="todoValue"
          @keydown.enter = "addNote"
          @keyup.enter = "addActiveNote"
    >

        <div 
          v-if="allNotesVuexLength"
          class="todo-list">
          <ul class="noteList" >
              <li 
                  v-for="(note, index) in allNoteVuex"
                  :key="index"
                  @click="completedNote"
                  class="noteList-item activeNote"
              > 
                {{index+ 1}}. {{note}}

              </li>
              

              <!-- <li
                v-for="i in addCompleteNoteVuex"
                :key="i"
              ></li> -->
          </ul>
          

          <div class="counterActiveNotes">{{countUncompletedNotes}} items left</div>
          <!-- <div class="allElems">
             <ul class="noteList" >
             
              <li 
                  v-for="(note, index) in allElements"
                  :key="index"
                  @click="completedNote"
                  class="noteList-item activeNote"
              > 
                {{note.innerText}}

              </li>

          </ul>
          </div> -->
        </div>
  
  <div class="emptyNotes" v-else>Список пуст</div>
  </div>
</template>

<script>
export default {
    name: 'FullList',
    data () {
    return {
      mainPlaceholder: "What needs to be done",
      todoValue: "",
      isActive: false,
      countCompletedNotes: 0,
      activeItems: [],
      elements: []
      
      
        }
    },

    methods: {
         addNote() {
               this.$store.commit('addNote', this.todoValue)
               console.log(this.$store.state.notes);
               
               
                
                 
                this.todoValue = ""
                // this.allNotes = Array.from(document.getElementsByClassName('noteList-item'))
                // this.$store.commit('addInAllNotes', [...document.getElementsByClassName('noteList-item')])
                // console.log(this.allNotesVuex);
               
                 
                
                
                

                
                
            },
       addCompleteNote() {
                this.$store.commit('addCompleteNote', this.items)
       },
       addActiveNote() {
         
        
          this.activeItems = [...document.getElementsByClassName('activeNote')]
          this.$store.commit('addActiveNote', this.activeItems)
          // this.elements = [...document.getElementsByClassName('noteList-item')]
          // this.$store.commit('addElement',this.elements)
          // console.log(this.allElements);
          
              
              // console.log(this.activeItems)
              // console.log(this.allActiveNotesVuex);
              // console.log(this.allNoteVuex);
              
       },
      //  completedNote() {

      //  },
      //  addNote() {
      //           if (this.todoValue.length)  {
                  
      //               this.$store.state.notes.push(this.todoValue)
      //               // this.notes.push(this.todoValue)
      //               this.todoValue = ""
      //           }
      //       },
        // addCompletedNotes() {
        //     this.$store.state.completedNotes.push(this.countCompletedNotes)
        // },

      
        completedNote(e) {

          if(!e.target.classList.contains('completedNote')) {
            e.target.className += " completedNote"
            e.target.classList.remove('activeNote')

            this.activeItems = [...document.getElementsByClassName('activeNote')]
            this.$store.commit('addActiveNote', this.activeItems)
           

            
            
            }
            else {
              e.target.classList.remove('completedNote')
              e.target.className += " activeNote"
              
            }
            // this.$store.commit('toggleClass')







            this.items = [...document.getElementsByClassName(' completedNote')]
            this.addCompleteNote() 
            this.countCompletedNotes = document.getElementsByClassName(' completedNote').length

            this.completedNotes = document.getElementsByClassName(' completedNote')

            this.elements = [...document.getElementsByClassName('noteList-item')]
          this.$store.commit('addElement',this.elements)
          console.log(this.allElements);

            // this.$store.state.completedNotes.push(this.allNoteVuex[index+1]) 

            // console.log(document.getElementsByClassName(' completedNote'));

            

            // console.log(this.completedNotes);
            // console.log(this.allCompletedNotesVuex);
            // console.log(this.items);
            
            
           
                    
          
        } 

       
    },

    

     computed: {
        allNotesVuexLength() {
          return this.$store.state.notes.length
        },
        allNoteVuex() {
            return this.$store.state.notes
        },
        addCompleteNoteVuex() {
          return this.$store.state.completedNotes
        },
        countUncompletedNotes() {
          return (this.allNotesVuexLength - this.countCompletedNotes)
        },
        allCompletedNotesVuex() {
          return (this.$store.state.completedNotes)
        },
        allNotesVuex() {
          return (this.$store.state.allNotesVuex)
        },
        allActiveNotesVuex() {
          return (this.$store.state.activeNotes)
        },
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

// .todo-list{
//   display: none;
// }

 
</style>