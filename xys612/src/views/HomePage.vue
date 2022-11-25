<template>
  <div class="height:1200">
    <v-container v-for="i in 8" :key="i">
      <v-row align-content="center">
        <v-col cols="2"></v-col>
        <v-col>
          <v-sheet>
            <Post :postInfo="postInfo" />
          </v-sheet>
        </v-col>
        <v-col cols="2"></v-col>
        <!-- <h1 v-for="i in 20" :key="i">Line {{i}}</h1> -->
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