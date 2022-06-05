<template>
  <div class="p-8 mx-auto relative bg-white">
    <div
      class="left-0 top-0 grid grid-cols-1 md:grid-cols-4 gap-4 pb-8 border-b border-1 bg-white pt-8"
      v-for="row in projects"
      :key="row.id"
    >
      <div class="year col-span-1">
        <p class="text-4xl font-bold text-slate-600">{{ row.year }}</p>
      </div>
      <div class="project col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="col-span-1" v-for="project in row.list" :key="project.id">
          <div
            class="p-5 bg-white rounded-lg border border-1 border-slate-300 drop-shadow-lg hover:drop-shadow-xl"
          >
            <a :href="project.link" class="text-xl font-bold text-slate-700">{{
              project.name
            }}</a>
            <div class="flex flex-wrap my-2 border-b border-1 pb-3 mb-3">
              <span
                class="text-xs rounded-full p-2 px-3 mr-2 my-1 bg-slate-100 text-slate-800 hover:bg-slate-200"
                v-for="tech in project.tech"
                :key="tech"
                >{{ tech }}</span
              >
            </div>
            <div
              class="grid grid-cols-1 md:grid-cols-4 text-sm text-slate-500 border-b border-1 pb-3 mb-3"
            >
              <p class="col-span-1">기간</p>
              <p class="col-span-3">{{ project.period }}</p>
            </div>
            <div
              class="grid grid-cols-1 md:grid-cols-4 text-sm text-slate-500 border-b border-1 pb-3 mb-3"
            >
              <p class="col-span-1">주요 업무</p>
              <p class="col-span-3">{{ project.work }}</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-4 text-sm text-slate-500">
              <p class="col-span-1">상세 내용</p>
              <div class="col-span-3">
                <p class="border-b border-1 pb-3 mb-3" v-for="text in project.sub" :key="text.id">
                  {{ text.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  // {
  //   id: 1,
  //   year: "2022",
  //   name: "2022년 프로젝트",
  //   list: [
  //     {
  //       id: 1,
  //       name: "프로젝트 1",
  //       period: "2022-01-01 ~ 2022-03-01",
  //       link: "/",
  //     },
  //     {
  //       id: 2,
  //       name: "프로젝트 2",
  //       period: "2022-02-01 ~ 2022-04-01",
  //       link: "/",
  //     },
  //   ],
  // },
  {
    id: 2,
    year: "2021",
    name: "2021년 프로젝트",
    list: [
      {
        id: 1,
        name: "자사 홈페이지 개발",
        period: "2021.11~2021.11",
        link: "http://havencare.co.kr",
        sub: [
          {
            id: 1,
            text: "Front-end : 웹/모바일 화면 개발, 게시판 기능 구현",
          },
          {
            id: 2,
            text: "DB : 게시판 CRUD 개발에 대한 SQL문 작성, Table 셋팅",
          },
          {
            id: 3,
            text: "Back-end : 게시판 기본 데이터 값에 대한 Vo, Controller 작성",
          },
        ],
        tech: ["Html", "Css", "Javascript", "PostgreSql", "Springboot"],
        work: "프론트엔드(100%), UI개발(100%), 백엔드(100%)",
      },
      {
        id: 2,
        name: "운동관리프로그램 개발",
        period: "2021.08 ~",
        link: "/",
        sub:
            [
              {
                id: 1,
                text: "Front-End : 사용자 화면 개발, 데이터값 저장 및 가공, 캘린더, e-chart",
              },
              {
                id: 2,
                text: "Architecture : ERD 작성",
              },
              {
                id: 3,
                text: "DB : SQL문 작성, Table 셋팅",
              },
            ],
        tech: ["Vue", "PostgreSql", "Springboot"],
        work: "프론트엔드(100%), UI개발(100%), 기획(20%)",
      },
      {
        id: 3,
        name: "약사 주도형 당뇨관리 프로그램 개발",
        period: "2021.05 ~ 2021.08",
        link: "/",
        sub:
            [
              {
                id: 1,
                text: "Front-end : 약사/환자 화면 개발, 데이터값 저장 및 가공, e-chart 활용",
              },
              {
                id: 2,
                text: "DB : SQL문 작성, Table 셋팅",
              },
              {
                id: 3,
                text: "Back-end : 데이터 값에 대한 Vo, Controller 작성",
              },
            ],
        tech: ["Html", "css", "javascript", "PostgreSql", "Springboot"],
        work: "프론트엔드(100%), UI개발(100%), 기획(40%)",
      },
    ],
  },
  {
    id: 3,
    year: "2020",
    name: "2020년 프로젝트",
    list: [
      {
        id: 1,
        name: "리퓨어미 마이크로페이지 개발",
        period: "2020.02 ~ 2022.02",
        link: "http://repureme.com",
        sub:
            [
              {
                id: 1,
                text: "웹,모바일 화면 개발, 크로스브라우징, SEO, GSAP 라이브러리",
              },
            ],
        tech: ["Html", "Css", "Jquery"],
        work: "UI개발(100%)",
      },
    ],
  },
  {
    id: 4,
    year: "2019",
    name: "2019년 프로젝트",
    list: [
      {
        id: 1,
        name: "자사 홈페이지 개발 및 리뉴얼",
        period: "2019.05 ~ 2019.05",
        link: "https://repurels.com",
        sub:  [
          {
            id: 1,
            text: "웹,모바일 화면 개발, 크로스브라우징, SEO",
          },
        ],
        tech: ["Html", "Css", "Jquery"],
        work: "UI개발(웹퍼블리싱, 100%)",
      },
      {
        id: 2,
        name: "운동프로그램 이지버전 개발",
        period: "2019.10 ~ 2019.12",
        link: "http://se.repureme.com",
        sub: [
          {
            id: 1,
            text: "웹,모바일 화면 개발, 크로스브라우징, SEO, e-chart 라이브러리 사용",
          },
        ],
        tech: ["Html", "Css", "Jquery"],
        work: "UI개발(웹퍼블리싱, 100%)",
      },
    ],
  },
];
</script>
<script>
export default {
  name: "Project List",
  components: {},
  data() {
    return {};
  },
  methods: {},
  created() {
    console.log("Project List created");
  },
  mounted() {
    console.log("Project List created");
  },
  beforeDestroy() {
    console.log("Project List beforeDestroy");
  },
};
</script>
