<template>
  <div>
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  name: 'AuthLayout',
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
  },
  created() {
    console.log('AuthLayout created')
  },
  mounted() {
    console.log('AuthLayout created')
  },
  beforeDestroy() {
    console.log('AuthLayout beforeDestroy')
  }
}
</script>

