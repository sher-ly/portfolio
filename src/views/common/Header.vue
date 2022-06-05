<template>
  <div class="fixed top-0 left-0 z-40">
    <div class="cursor opacity-75"></div>
    <header>
      <div class="bg-white min-h-full">
        <ul class="flex item-center gnb px-3 h-8 w-64 justify-between" id="nav">
          <li v-for="item in nav" :key="item.id" class="">
            <a :href="item.link" class="font-semibold hover:text-slate-800 text-slate-500 border-b border-1 border-slate-500">
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script setup>
const nav = [
  {
    id: 1,
    name: "home",
    link: "/home",
  },
  {
    id: 4,
    name: "about",
    link: "/about",
  },
  {
    id: 2,
    name: "project",
    link: "/project/list",
  },
  {
    id: 3,
    name: "contact",
    link: "/contact",
  },
];
</script>
<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {};
  },
  methods: {},
  created() {
    console.log("Header created");
  },
  mounted() {
    console.log("Header created");
  },
  beforeDestroy() {
    console.log("Header beforeDestroy");
  },
};
</script>
