<template>
  <v-app-bar
    app
    color="#ffe4e1"
    dark
  >
    <div class="d-inline align-center">
      <v-row>
        <v-column>
          <v-img
            alt="Health Oracle Protocol"
            class="ml-4"
            contain
            src="@/assets/logo.png"
            transition="scale-transition"
            width="24"
          />
        </v-column>
        <v-column>
          <v-toolbar-title class="pink--text darken-4--text ml-2">Health Oracle Protocol</v-toolbar-title>
        </v-column>
      </v-row>
    </div>
    <v-spacer></v-spacer>
      <v-list-item link :to="'/'" title="HOME"></v-list-item>
      <v-list-item link :to="'/lab'" title="LAB"></v-list-item>
      <v-btn text><a href="https://discord.gg/JhdkXX54Xk">Community</a></v-btn>
      <v-btn text><a href="https://bentobox-ds.gitbook.io/bentobox-ds-hop/">Docs</a></v-btn>
      <v-btn text><a href="https://github.com/healthscience">code</a></v-btn>
      <!-- <v-btn color="brown lighten-3"></v-btn> -->
  </v-app-bar>
</template>

<script>
export default {
  name: 'MenuNavigation',
  data: () => ({
  })
}
</script>
