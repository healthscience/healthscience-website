<template>
  <v-app-bar
    app
    color="#ffe4e1"
    dark
  >
    <div class="d-flex align-center">
      <v-img
        alt="Health Oracle Protocol"
        class="shrink mr-2"
        contain
        src="@/assets/logo.png"
        transition="scale-transition"
        width="24"
      />
    <v-toolbar-title class="pink--text darken-4--text">Health Oracle Protocol</v-toolbar-title>
    </div>

    <v-spacer></v-spacer>
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
