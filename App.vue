<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h2>VueFire Todo</h2>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>  
      <v-content> 
        <ToDoList />
         </v-content>
    

     <!-- <v-main> </v-main>  -->
  </v-app>
</template>

<script>
import ToDoList from './components/ToDoList.vue'

export default {
  name: "App",
  mounted() {
    console.log(process.env.VUE_APP_ROOT_URL);
  },
  beforeCreate() {
     console.log(process.env.VUE_APP_ROOT_API_KEY);
  },
  created() {
    console.log(process.env.VUE_APP_ROOT_API_KEY);
  },
  unmounted() {
    console.log(process.env.VUE_APP_ROOT_PROJECT_ID);
  },

  components: {
     ToDoList 
     },

  data: () => ({
    //
  }),
};
</script>
