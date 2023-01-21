<template>
  <v-card
    flat
    :color="cardHover ? 'grey lighten-4' : undefined"
    @mouseenter="mousein()"
    @mouseleave="mouseout()"
  >
    <v-card-title>
      <router-link to="/blog/detail">{{ postInfo.title }}</router-link>
    </v-card-title>
    <v-card-text>
      <router-link to="/blog/detail" class="text-overflow-content"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        incidunt laboriosam debitis vitae nihil, impedit atque hic minima
        delectus deserunt inventore officiis perspiciatis recusandae rem quasi
        cum, molestias vero quod. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Sint ullam cupiditate vero ipsum exercitationem
        suscipit, nobis a delectus quo fugit est facilis aut. Ipsa maiores
        numquam similique id omnis minus!
      </router-link>
    </v-card-text>
    <v-card-actions>
      <v-chip-group>
        <v-chip link outlined small class="mx-1" to="/tags/vue">chip1</v-chip>
        <v-chip link outlined small>chip2</v-chip>
      </v-chip-group>
      <v-spacer></v-spacer>
      <v-btn icon @click="like()">
        <v-icon :color="liked?'deep-purple lighten-1':''">{{chooseLikeIcon}}</v-icon>
      </v-btn>
      <v-btn icon @click="share()">
        <v-icon :color="shared?'deep-purple lighten-1':''">{{ chooseShareIcon }}</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    postInfo: {
      title: "",
      subtitle: "",
      text: "",
      action: "",
      route: "",
    },
  },
  data() {
    return {
      cardHover: false,
      liked: false,
      shared: false,
    };
  },
  methods: {
    mousein() {
      this.cardHover = true;
      // alert("in"+this.cardHover)
    },
    mouseout() {
      this.cardHover = false;
    },
    share() {
      this.shared=!this.shared
    },
    like() {
      this.liked=!this.liked
    },
  },
  computed: {
    chooseLikeIcon() {
      if (this.liked) {
        return "mdi-thumb-up";
      } else {
        return "mdi-thumb-up-outline";
      }
    },
    chooseShareIcon() {
      if (this.shared) {
        return "mdi-share";
      } else {
        return "mdi-share-outline";
      }
    },
  },
};
</script>

<style scoped>
a {
  /* a标签样式 */
  text-decoration: none;
  color: black;
}
.text-overflow-content {
  /* 文本两行截断... */
  text-overflow: ellipsis;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow-wrap: break-word;
}
</style>