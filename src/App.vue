<template>
  <v-app>

    <v-main>
      <Goods/>
    </v-main>
  </v-app>
</template>

<script>
import Goods from './components/Goods/Goods';

export default {
  name: 'App',

  components: {
    Goods,
  },

  data: () => ({
    //
  }),
};
</script>
