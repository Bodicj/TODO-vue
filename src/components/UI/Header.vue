<template lang="pug">
div.header
  h1 {{heading}}
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapGetters({
      getName: 'listItem/getCurrentListName',
    }),
    heading() {
      if (this.$route.name === 'ListDashboard') {
        return 'To Do Dashboard';
      } else if (this.$route.name === 'ListItem') {
        return `${this.getName}`;
      }
      return 'To Do App';
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 90px;
  width: 100vw;
  background: black;
  color: white;
  padding: 20px;
}
</style>
