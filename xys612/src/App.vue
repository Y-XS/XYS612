<template>
  <v-app class="bg-color">

    <Navbar/>
    
    <v-main >
      <v-container>
        <router-view/>
      </v-container>
    </v-main>

    <v-fab-transition>
      <v-btn 
        fab bottom right fixed
        v-show="!isTop"
        v-model="isTop"
        @click="toTop()"
      >
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
    </v-fab-transition>
    

    <Footer/>

  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer'

export default {
    name: "App",
    components: { Navbar,Footer },
    data: () => ({
      isTop:true
    }),
    mounted(){
      window.addEventListener('scroll',this.handleScroll)
    },
    methods:{
      toTop(){
        window.scrollTo({top:0,left:0,behavior:'smooth'})
      },
      handleScroll(){
        if (document.documentElement.scrollTop + document.body.scrollTop > 400) {
          this.isTop = false
        } else{
          this.isTop=true
        }
      }
    }
};
</script>

<style scoped>
.bg-color{
  background-color: #b9afd2;
}
</style>
