<template>
  <v-card min-height="200" :to="cardInfo.to" outlined>
      <v-img :src="cardInfo.imgSrc" min-height="160"></v-img>
      <v-card-title class="py-1">{{cardInfo.title}}</v-card-title>
      <v-card-subtitle>{{cardInfo.subtitle}}</v-card-subtitle>
      <v-card-text>{{cardInfo.text}}</v-card-text>
  </v-card>
</template>

<script>
export default {
    props:{
        cardInfo:{
            imgSrc:"",
            title:"",
            subtitle:"",
            text:"",
            to:"",
        }
    }
}
</script>

<style>

</style>