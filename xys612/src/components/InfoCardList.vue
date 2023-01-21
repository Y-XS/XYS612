<template>
  <v-sheet class="pa-2">
      <v-row>
        <v-col 
          v-for="cardInfo in cardInfos" 
          :key="cardInfo.id"
          cols="12" sm="6" md="3"
        >
          <!-- cols是xs选择器 -->
          <InfoCard :cardInfo="cardInfo"/>
        </v-col>
      </v-row>

  </v-sheet>
</template>

<script>
import InfoCard from "@/components/InfoCard"

export default {
    components:{InfoCard},
    data(){
        return{
            cardInfos:[
                {
                    id:1,
                    imgSrc:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                    title:"111",
                    text:"testtesttesttesttest",
                    to:"/film/detail"
                },
                {
                    id:2,
                    imgSrc:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                    title:"111",
                    text:"testtesttesttesttest",
                    to:"/film/detail"
                },
                {
                    id:3,
                    imgSrc:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                    title:"111",
                    text:"testtesttesttesttest",
                    to:"/film/detail"
                },
                {
                    id:4,
                    imgSrc:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                    title:"111",
                    text:"testtesttesttesttest",
                    to:"/film/detail"
                },
                {
                    id:5,
                    imgSrc:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                    title:"111",
                    text:"testtesttesttesttest",
                    to:"/film/detail"
                },
            ],
        }
    },
    created(){
        let path = this.$route.path
        for(var i in this.cardInfos){
            this.cardInfos[i].to=path+"/detail"
        }
    }
    
}
</script>

<style>

</style>