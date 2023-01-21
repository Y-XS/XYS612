<template>
  <v-container>
    <v-card flat color="deep-orange lighten-3" class="pa-3 rounded-b-0">
      <v-btn icon class="px-0" plain @click="goBack()">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <span class="text-h6">Tags</span>
    </v-card>

    <v-sheet>
      <v-chip-group mandatory column class="pa-3">
        <v-chip
          label
          outlined
          filter
          class="ma-2"
          :color="data.color"
          v-for="data in testData"
          :key="data.id"
          @click="chipClick(data)"
        >
          <v-icon left>mdi-label</v-icon>
          {{ data.text }}
        </v-chip>
      </v-chip-group>

      <v-divider />

      <v-sheet v-for="i in 8" :key="i">
        <Post :postInfo="postInfo" />
        <v-divider />
      </v-sheet>
    </v-sheet>

    <!-- 分页 -->
    <v-pagination
      class="pa-2"
      v-model="currentPage"
      :length="15"
      :total-visible="7"
    >
    </v-pagination>
    
  </v-container>
</template>

<script>
import Post from "@/components/Post";

export default {
  components: { Post },
  data() {
    return {
      testData: [
        { color: "red", text: "Vue" },
        { color: "blue", text: "Java" },
        { color: "orange", text: "C++" },
        { color: "green", text: "Python" },
        { color: "purple", text: "Vuetify" },
        { color: "indigo", text: "Go" },
        { color: "red", text: "Vue" },
        { color: "blue", text: "Java" },
        { color: "orange", text: "C++" },
        { color: "green", text: "Python" },
        { color: "purple", text: "Vuetify" },
        { color: "indigo", text: "Go" },
      ],
      postInfo: {
        title: "Title",
        subtitle: "subtitle",
        text: "this is text",
        action: "mdi-share",
        route: "/blog/detail",
      },
      currentPage:1,
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    chipClick(data) {
      console.log(data.text);
    },
  },
};
</script>

<style>
</style>