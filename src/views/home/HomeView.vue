<template>
  <div class="h-screen sticky">
    <div class="bg-slate-900 mx-auto px-4 h-full">
      <div class="flex items-center justify-center h-full">
        <p class="text-white text-4xl">header text</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {};
  },
  methods: {},
  created() {
    console.log("HomeView created");
  },
  mounted() {
    console.log("HomeView created");
  },
  beforeDestroy() {
    console.log("HomeView beforeDestroy");
  },
};
</script>
