import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        notes: [],
        allElements: [],
        completedNotes: [],
        // allNotesVuex: [...document.getElementsByClassName('noteList-item')],
        activeNotes: []
        
    },
    mutations: {
        addNote(state, payload) {
            if (payload.length)  {
                
              
                state.notes.push(payload)
                
            }
        },
        addElement(state) {
            state.allElements = [...document.getElementsByClassName('noteList-item')]
        },
        // toggleClass(state) {
        //     if(!state.allElements.i.classList.contains('completedNote')) {
        //     state.allElements.i.className += " completedNote"
        //     state.allElements.i.remove('activeNote')
        //     }
        //     else {
        //         state.allElements.i.classList.remove('completedNote')
        //         state.allElements.i.className += " activeNote"
                
        //       }
        // },
            

        // },
       
        addCompleteNote(state,payload) {
             state.completedNotes = payload
         },
        //  addInAllNotes(state,payload) {
        //      state.allNotesVuex.push(payload)
        //  },
         addActiveNote(state,payload) {
             state.activeNotes = payload
         },
        //  completedNote(state,payload) {

        //  }


        // completedNote(state,e,) {
        //     if(!e.target.classList.contains('completedNote')) {
        //       e.target.className += " completedNote"
        //     //   state.completedNotes.push(this.$store.state.notes[e.target])
              
              
        //       }
              
        //       else {
        //         e.target.classList.remove('completedNote')
               
        //       }
  
              
  
              
        //       this.countCompletedNotes = document.getElementsByClassName(' completedNote').length
  
        //       // this.completedNotes = document.getElementsByClassName(' completedNote')
  
        //       // this.$store.state.completedNotes.push(this.allNoteVuex[index+1]) 
  
        //       console.log(document.getElementsByClassName(' completedNote'));
             
                      
            
        //   } 
    },

    actions: {

    },
    getters: {
        activeNotesVuex (state)  {
            return state.activeNotes.filter(i => i.classList.contains('activeNote'))
        }
        // activeNotesVuex (state) {
        //     return state.activeNotes.filter(i => {
        //         i.classList.contains('activeNote')
        //     })
        // }
    }
})
