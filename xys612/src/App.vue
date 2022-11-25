<template>
  <v-app class="bg-color">

    <Navbar/>
    
    <v-main class="height:1200">
      <v-container>
        <router-view/>
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
    name: "App",
    comments: Navbar,
    data: () => ({
    //
    }),
    components: { Navbar }
};
</script>

<style scoped>
.bg-color{
  background-color: #b9afd2;
}
</style>
