<template>
  <div class="height:1200">

    <v-container fluid>
      <v-row cols="12" align-content="center">

        <!-- SideBar 侧导航栏 -->
        <v-col sm="3" md="3" class="d-none d-sm-block">
          <v-sheet rounded app>
            <v-subheader >Tags</v-subheader>
            <v-divider/>
            <v-chip-group 
              class="pa-3"
              column
            >
              <v-chip
                label
                outlined
                :color="tag.color"
                v-for="tag in tags"
                :key="tag.text"
                class="pa-2 my-2"
                :to="handleRoute(tag.text)"
              >
                <!-- <v-icon left>mdi-plus</v-icon> -->
                {{tag.text}}
              </v-chip>
            </v-chip-group>
          </v-sheet>
        </v-col>

        <!-- MainBody 页面主体 Blog -->
        <v-col sm="9" md="9">
          <v-sheet rounded app class="d-block d-sm-none mb-4">
            <v-subheader >Tags</v-subheader>
            <v-divider/>
            <v-chip-group 
              class="pa-3"
              column
            >
              <v-chip
                label
                outlined
                :color="tag.color"
                v-for="tag in tags"
                :key="tag.text"
                class="pa-2 my-2"
                :to="handleRoute(tag.text)"
              >
                <!-- <v-icon left>mdi-plus</v-icon> -->
                {{tag.text}}
              </v-chip>
            </v-chip-group>
          </v-sheet>

          <v-card flat color="deep-orange lighten-3" class="pa-3 rounded-b-0">
            <span class=" text-h6">Blog</span>
          </v-card>
          <v-sheet v-for="i in 8" :key="i">
            <Post :postInfo="postInfo" />
            <v-divider/>
          </v-sheet>
          <!-- 分页 -->
          <v-pagination
            class="pa-2"
            v-model="currentPage"
            :length="15"
            :total-visible="7"
          >
          </v-pagination>

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
      postInfo: {
        title: "Title",
        subtitle: "subtitle",
        text: "this is text",
        action: "mdi-share",
        route:"/blog/detail",
      },
      tags: [
        { color: "red", text: "Vue" },
        { color: "blue", text: "Java" },
        { color: "orange", text: "C++" },
        { color: "green", text: "Python" },
        { color: "purple", text: "Vuetify" },
        { color: "indigo", text: "Go" },
      ],
      currentPage:1,
    };
  },
  methods:{
    clickChip(){
      console.log('click');
    },
    handleRoute(tagName){
      return '/tags/'+tagName.toLowerCase()
    }
  },
  
};
</script>

<style>
</style>