<template>
  <v-container>
    <!-- <v-btn to="/blog">test</v-btn> -->

    <v-row>
      <v-col cols="12" sm="6" md="6" lg="6">
        <Block :blockContent="blockContentFilm"/>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6">
        <Block :blockContent="blockContentMusic"/>
      </v-col>
    </v-row>

    <Block :blockContent="blockContentBlog" class="mt-5"/>


  </v-container>

</template>

<script>
import Block from '@/components/Block';

export default {
  components:{Block},
  data(){
    return{
      blockContentFilm:{
        type:"film",
        subheader:"电影推荐",
        content:[
          {name:"星际穿越",route:"/film/detail"},
          {name:"星际穿越",route:"/film/detail"},
          {name:"星际穿越",route:"/film/detail"},
          {name:"星际穿越",route:"/film/detail"},
          {name:"星际穿越",route:"/film/detail"},
        ]
      },
      blockContentMusic:{
        type:"music",
        subheader:"音乐推荐",
        content:[
          {name:"青花",},
          {name:"青花",},
          {name:"青花",},
          {name:"青花",},
          {name:"青花",},
        ]
      },
      blockContentBlog:{
        type:"blog",
        subheader:"博客推荐",
        content:[
          {name:"1",},
          {name:"2",},
          {name:"3",},
          {name:"4",},
          {name:"5",},
        ]
      }
    }
  }
}
</script>

<style>

</style>