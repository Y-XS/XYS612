<template>
  <nav>
    <!-- navBar for normal screen -->
    <v-app-bar
      app
      light
      color="deep-purple lighten-4"
      elevate-on-scroll
      class="white lighten-4 px-16"
      v-if="!isMini"
    >
      <v-app-bar-title class="mx-2 grow">
        <span class="font-weight-bold deep-purple--text text--lighten-1"
          >XYS</span
        >
        <span>612</span>
      </v-app-bar-title>
      <v-tabs class="mx-6" color="deep-purple lighten-1">
        <v-tab to="/" class="text-capitalize">Home</v-tab>
        <v-tab to="/blog" class="text-capitalize">Blog</v-tab>
        <v-tab to="/code" class="text-capitalize">Code</v-tab>
        <v-tab to="/tool" class="text-capitalize">Tool</v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
      <v-text-field
        hide-details
        append-icon="mdi-magnify"
        outlined
        dense
        single-line
        color="deep-purple lighten-1"
      ></v-text-field>
      <v-avatar color="yellow lighten-3" class="mx-4">
        <v-icon>mdi-checkerboard</v-icon>
      </v-avatar>
    </v-app-bar>


    <!-- navBar for mini screen -->
    <v-app-bar
      app
      light
      color="deep-purple lighten-4"
      elevate-on-scroll
      class="white lighten-4"
      v-if="isMini"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-app-bar-nav-icon>

      <v-spacer/>

      <v-app-bar-title 
        class="mx-2 grow text-center"
      >
        <span class="font-weight-bold deep-purple--text text--lighten-1"
          >XYS</span
        >
        <span>612</span>
      </v-app-bar-title>

      <v-spacer/>

      <v-avatar color="yellow lighten-3">
        <v-icon>mdi-checkerboard</v-icon>
      </v-avatar>
    </v-app-bar>

    <v-navigation-drawer
      app
      v-model="drawer"
      v-if="isMini"
    >
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" :to="link.route">
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-title>
            {{ link.text }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-home", text: "Home", route: "/" },
        { icon: "mdi-laptop", text: "Blog", route: "/blog" },
        { icon: "mdi-folder", text: "Code", route: "/code" },
        { icon: "mdi-file-outline", text: "Tool", route: "/tool" },
      ],
    };
  },
  computed: {
    isMini() {
      console.log(this.$vuetify.breakpoint.name);
      switch (this.$vuetify.breakpoint.name) {
        case "xs":return true
        case "sm":return true
        case "md":return false
        case "lg":return false
        case "xl":return false
      }
    },
  },
};
</script>

<style>
</style>