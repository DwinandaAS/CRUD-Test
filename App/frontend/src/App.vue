<template>
  <v-app>
    <v-main>
      <div id="App">
        <DataMenuList/>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import DataMenuList from './components/DataMenuPage.vue'

export default {
  name: 'App',

  components: {
    DataMenuList,
  },

  data: () => ({
    //
    
  }),
}
</script>
