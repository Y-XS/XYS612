<template>
  <div class="height:1200">

    <v-container fluid>
      <v-row cols="12" align-content="center">
        <!-- <v-col v-if="$vuetify.breakpoint.xs?false:true" sm="3" md="2" >
          <v-sheet color="">
            <span>side bar</span>
          </v-sheet>
        </v-col> -->

        <v-col >
          <v-card flat color="deep-orange lighten-3" class="pa-3">
            <span class=" text-h6">Blog</span>
          </v-card>
          <v-sheet v-for="i in 8" :key="i">
            <Post :postInfo="postInfo" />
            <v-divider/>
          </v-sheet>
        </v-col>

      </v-row>
    </v-container>
  </div>
</template>

<script>
import Post from "@/components/Post.vue";

export default {
  components: { Post },

  data() {
    return {
      vec: [1, 2, 3, 4, 5, 6],
      postInfo: {
        title: "Title",
        subtitle: "subtitle",
        text: "this is text",
        action: "mdi-plus",
      },
    };
  },
};
</script>

<style>
</style>