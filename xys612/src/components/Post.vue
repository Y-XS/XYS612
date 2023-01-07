<template>
  <v-card flat 
    :color="cardHover?'grey lighten-4':undefined"
    @mouseenter="mousein()" 
    @mouseleave="mouseout()"
  >
    <v-card-title>
      <a href="#">{{postInfo.title}}</a>
    </v-card-title>
    <!-- <v-card-subtitle>{{postInfo.subtitle}}</v-card-subtitle> -->
    <!-- <v-card-text>{{postInfo.text}}</v-card-text> -->
    <v-card-text >
      <a href="#" class="text-overflow-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, incidunt laboriosam debitis vitae nihil,
       impedit atque hic minima delectus deserunt inventore officiis perspiciatis recusandae rem quasi cum, molestias vero quod.
      </a>
    </v-card-text>
    <v-card-actions>
      <v-chip-group>
        <v-chip link outlined small class="mx-1">chip1</v-chip>
        <v-chip link outlined small>chip2</v-chip>
      </v-chip-group>
      <v-spacer></v-spacer>
      <v-btn icon @click="onClick()">
        <v-icon>mdi-thumb-up-outline</v-icon>
      </v-btn>
      <v-btn icon @click="onClick()">
        <v-icon>{{postInfo.action}}</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    props:{
        postInfo:{
            title:'',
            subtitle:'',
            text:'',
            action:'',
        }
    },
    data() {
      return{
        cardHover:false,
      }
    },
    methods:{
      onClick(){
        console.log("btn click")
      },
      mousein(){
        this.cardHover = true
        // alert("in"+this.cardHover)
      },
      mouseout(){
        this.cardHover = false
      }
    },
}
</script>

<style scoped>
a{
  /* a标签样式 */
  text-decoration: none;
  color:black;
}
.text-overflow-content{
  /* 文本两行截断... */
  text-overflow: ellipsis;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow-wrap: break-word;
}
</style>