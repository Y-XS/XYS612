<template>
  <v-container>
    <v-sheet flat>
      <v-breadcrumbs large divider="/" :items="itemsData" class="pa-2">
        <template v-slot:item="{ item }">
          <v-breadcrumbs-item exact :to="item.to" :disabled="item.disabled">
            <!-- <span class="deep-purple--text">{{ item.text }}</span> -->
            <span :class="{'deep-purple--text':!item.disabled}">{{ item.text }}</span>
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>

    </v-sheet>
    
    <v-divider class="lighten-4"></v-divider>

    <router-view></router-view>

  </v-container>
</template>

<script>

export default {
  props:{
    type:""
  },
  data(){
    return{
      items: [
        { text: "Home",disabled: false, to: "/" },
        { text: "Film",disabled: true, to: "/film" },
      ],
      
    }
  },
  methods: {
    
  },

  created(){
    
    // console.log("created..."+this.type);
    switch(this.type){
      case "film":
        break;
      case "music":
        this.items[1].text="Music"
        this.items[1].to="/"+"music"
        break;
      default:break;
    }
  },
  computed:{
    // breadcrumbs itemsData 处理
    itemsData(){
      // console.log(this.$route.path);
      // 返回 /film
      if(this.items.length>2&&this.$route.path==this.items[1].to){
        this.items[1].disabled=true
        this.items.pop()
        return this.items
      }else if(this.$route.path!=this.items[1].to){ // 进入 /film/detail
        this.items[1].disabled=false
        this.items.push({ text: "Detail",disabled: true, to: "/film/detail" })
      }
      // /film初始化
      return this.items
    }
  }
}

</script>

<style>
</style>