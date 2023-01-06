<template>
  <nav>
    <v-app-bar app light elevate-on-scroll class="white lighten-4">
        <v-app-bar-nav-icon @click="drawer=!drawer">
            <v-icon >mdi-menu</v-icon>
        </v-app-bar-nav-icon>
        <v-app-bar-title>
          <span class="font-weight-bold deep-purple--text text--lighten-1">XYS</span>
          <span>612</span>
        </v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer">
        <v-list>
            <v-list-item v-for="link in links" :key="link.text" :to="link.route">
                <v-list-item-action>
                    <v-icon>{{link.icon}}</v-icon>
                </v-list-item-action>
                <v-list-item-title>
                    {{link.text}}
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
        { icon: "mdi-laptop", text: "Code", route: "/code" },
        { icon: "mdi-folder", text: "Projects", route: "/projects" },
        { icon: "mdi-file-outline", text: "Files", route: "/files" },
        { icon: "mdi-account", text: "Account", route: "/account" },
        { icon: "mdi-cog", text: "Settings", route: "/settings" },
      ],
    };
  },
};
</script>

<style>
</style>