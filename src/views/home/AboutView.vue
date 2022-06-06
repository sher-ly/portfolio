<template>
  <div class="p-8 mx-auto relative bg-white">
    <div class="pt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div
        class="p-5 bg-white rounded-lg border border-1 border-slate-300 drop-shadow-lg hover:drop-shadow-xl"
        v-for="item in about"
        :key="item.id"
      >
        <h2 class="text-slate-700 font-bold text-2xl">{{ item.name }}</h2>
        <ul class="mt-3 list-disc pl-5">
          <template v-for="list in item.list" :key="list.id">
            <li>{{ list.text }}</li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const about = [
  {
    id: 1,
    name: "Skills",
    list: [
      {
        id: 1,
        text: "Vue",
      },
      {
        id: 2,
        text: "Html",
      },
      {
        id: 3,
        text: "Css",
      },
      {
        id: 4,
        text: "Spring Boot",
      },
      {
        id: 5,
        text: "Db architecture",
      },
    ],
  },
  {
    id: 2,
    name: "Library",
    list: [
      {
        id: 1,
        text: "E-chart",
      },
      {
        id: 2,
        text: "Axios",
      },
      {
        id: 3,
        text: "Vuex",
      },
    ],
  },
  {
    id: 3,
    name: " 경력",
    list: [
      {
        id: 1,
        text: "2022.04 ~ ",
      },
      {
        id: 2,
        text: "2018.11 ~ 2022.03",
      },
    ],
  },
];
</script>

<script>
export default {
  name: "About",
  components: {},
  data() {
    return {};
  },
  methods: {},
  created() {
    console.log("About created");
  },
  mounted() {
    console.log("About created");
  },
  beforeDestroy() {
    console.log("About beforeDestroy");
  },
};
</script>
