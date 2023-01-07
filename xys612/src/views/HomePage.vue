<template>
  <div class="height:1200">

    <v-container fluid>
      <v-row cols="12" align-content="center">
        
        <!-- SideBar 侧导航栏 -->
        <v-col sm="2" md="2" class="d-none d-sm-block">
          <v-sheet rounded >
            <v-list dense class="rounded-lg" >
              <v-subheader>标签</v-subheader>
              <v-list-item-group>
                <v-list-item v-for="(item,i) in tags" :key="i">
                  <v-list-item-title>{{item.tagName}}</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
              <v-divider/>
              <v-subheader>分类</v-subheader>
              <v-list-item-group>
                <v-list-item v-for="(item,i) in tags" :key="i">
                  <v-list-item-title>{{item.tagName}}</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-sheet>
        </v-col>

        <!-- MainBody 页面主体 Blog -->
        <v-col sm="10" md="10">
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
        action: "mdi-share",
      },
      tags:[
        {tagName:"Vue",},
        {tagName:"Java",},
        {tagName:"C++",},
      ]
    };
  },
};
</script>

<style>
</style>