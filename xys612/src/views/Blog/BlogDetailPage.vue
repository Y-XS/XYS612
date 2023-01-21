<template>
  <v-sheet>
    <v-card flat tile>
      <v-card-title class="px-1">
        <v-btn icon class="px-0" plain @click="goBack()">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <span class="px-2">Title</span>
        <v-spacer/>
        
        <div class="mx-2">
          <v-icon dense>mdi-eye</v-icon>
          <span class="font-weight-regular text-body-2 mx-1">666</span>          
        </div>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut in rerum voluptate ab commodi accusantium quae a possimus libero, illum qui quo, ullam totam dolores eum culpa quia obcaecati reprehenderit.
      </v-card-text>
    </v-card>
  </v-sheet>
</template>

<script>
export default {

  methods:{
    goBack(){
      this.$router.back()
    }
  }
}
</script>

<style>

</style>