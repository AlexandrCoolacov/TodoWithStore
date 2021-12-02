<template>
  <div>
     

      <router-view></router-view>
    
    
    <Controls/>
  </div>
</template>

<script>


import Controls from './components/Controls'
export default {
  name: 'App',
  components: {
    Controls
  },
  
  data () {
    return {
 
        }
    },
  
  methods: {
  
  }
}
</script>

<style lang="scss" scoped>

.emptyNotes{
  margin: 10px 0;
}
 
</style>
