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
    <v-card-text class="text-truncate">
      <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, incidunt laboriosam debitis vitae nihil,
       impedit atque hic minima delectus deserunt inventore officiis perspiciatis recusandae rem quasi cum, molestias vero quod.
      </a>
    </v-card-text>
    <v-card-actions class="justify-end">
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
  text-decoration: none;
  color:black;
}
</style>