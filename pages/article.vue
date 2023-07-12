<script setup lang="ts">
// 面经列表
const list = ref<any[]>([])

// 获取面经列表
const getList = async () => {
  // axios 问题，不会等服务端渲染完成，直接返回空页面，对 SEO 不友好
  const res = await request({
    method: 'GET',
    url: '/interview/query',
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
  list.value.push(...res.data.rows)
}

getList()
</script>

<template>
  <NuxtLayout name="tabbar">
    <h1>面经首页</h1>
    <div v-for="item in list" :key="item.id">
      {{ item.stem }}
    </div>
  </NuxtLayout>
</template>

<style scoped></style>
