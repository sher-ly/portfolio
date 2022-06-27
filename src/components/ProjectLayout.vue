<template>
  <div>
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  name: 'ProjectLayout',
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
  },
  created() {
    console.log('ProjectLayout created')
  },
  mounted() {
    console.log('ProjectLayout created')
  },
  beforeDestroy() {
    console.log('ProjectLayout beforeDestroy')
  }
}
</script>

