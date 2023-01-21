<template>
<!-- Home 主页三大块 -->
    <v-card >
      <v-list >
        <v-subheader >
          <span class="deep-purple--text font-weight-bold">{{blockContent.subheader}}</span>
          <v-spacer></v-spacer>
          <router-link 
            :to="handleRoute" 
            class="justify-end deep-purple--text text-decoration-none font-weight-bold"
          >
            more
            <v-icon color="deep-purple">mdi-menu-right</v-icon>
          </router-link>

        </v-subheader>
        <v-divider/>

        <v-list-item-group>
            <v-list-item v-for="i in 5" :key="i" :to="blockContent.content[i-1].route">
                <v-list-item-content>
                    <v-list-item-title>
                        {{blockContent.content[i-1].name}}
                    </v-list-item-title>                    
                </v-list-item-content>
                
            </v-list-item>
        </v-list-item-group>
      </v-list>

    </v-card>
</template>

<script>
export default {
    props:{
        blockContent:{
            type:"",
            subheader:"",
            content:[
                {ux_id:"",name:"",route:""},
            ],
        }
    },
    computed:{
      handleRoute(){
        // console.log(this.blockContent.type);
        switch(this.blockContent.type){
          case "film":return "/film";break;
          case "music":return "/music";break;
          case "blog":return "/blog";break;
          default:return "/error";break;
        }
      }
    }

}
</script>

<style>

</style>