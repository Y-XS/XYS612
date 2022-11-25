<template>
  <v-card elevation="3">
    <v-card-title>{{postInfo.title}}</v-card-title>
    <v-card-subtitle>{{postInfo.subtitle}}</v-card-subtitle>
    <v-card-text>{{postInfo.text}}</v-card-text>
    <v-card-actions><v-icon>{{postInfo.action}}</v-icon></v-card-actions>
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
    }
}
</script>

<style>

</style>