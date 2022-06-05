<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>


<script>
import Header from "./common/Header.vue";
import Footer from "./common/Footer.vue";

export default {
  name: 'HomeLayout',
  components: {
    Footer,
    Header
  },
  data() {
    return {
    }
  },
  methods: {
  },
  created() {
    console.log('HomeLayout created')
  },
  mounted() {
    console.log('HomeLayout created')
  },
  beforeDestroy() {
    console.log('HomeLayout beforeDestroy')
  }
}
</script>

