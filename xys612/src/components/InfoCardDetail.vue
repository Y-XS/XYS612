<template>
  <v-card flat tile class="pa-2">
    <v-img
      src="../../src/assets/colorful.jpg"
      max-height="400"
    ></v-img>
    <v-card-title>
      Title
      <v-spacer />
      <v-btn icon @click="like()" >
        <v-icon :color="liked?'deep-purple lighten-1':''">{{chooseLikeIcon}}</v-icon>
      </v-btn>
      <v-btn icon @click="share()">
        <v-icon :color="shared?'deep-purple lighten-1':''">{{chooseShareIcon}}</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
      velit consequuntur, atque repudiandae, consequatur quas mollitia
      cupiditate magni cumque sit ut tenetur eligendi veniam ipsam provident rem
      odio earum omnis!
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data(){
    return{
      liked:false,
      shared:false,
    }
  },
  methods: {
    share() {
      this.shared=!this.shared
    },
    like() {
      this.liked=!this.liked
    },
  },
  computed:{
    chooseLikeIcon(){
      if(this.liked){
        return "mdi-thumb-up"
      }else{
        return "mdi-thumb-up-outline"
      }
    },
    chooseShareIcon(){
      if(this.shared){
        return "mdi-share"
      }else{
        return "mdi-share-outline"
      }
    },
  }
};
</script>

<style>
</style>