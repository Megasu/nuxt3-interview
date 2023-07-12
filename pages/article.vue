<script setup lang="ts">
// 面经列表
const list = ref<any[]>([])

// 获取面经列表
const getList = async () => {
  // axios 问题，不会等服务端渲染完成，直接返回空页面，对 SEO 不友好
  // const res = await request({
  //   method: 'GET',
  //   url: '/interview/query',
  //   headers: {
  //     Authorization: `Bearer ${getToken()}`,
  //   },
  // })
  // list.value.push(...res.data.rows)

  // ✅ 通过 useFetch 获取数据，会等服务端渲染完成，再返回页面，并且前端不会再发送多余请求
  // const res = await useFetch<any>('/interview/query', {
  //   method: 'GET',
  //   baseURL: 'http://interview-api-t.itheima.net/h5/',
  //   headers: {
  //     Authorization: `Bearer ${getToken()}`,
  //   },
  // })
  // list.value.push(...res.data.value.data.rows)

  // ✅ 基于 useFetch 二次封装的 useRequest，更加简洁
  const res = await useRequest('/interview/query', { params: { pageSize: 5 } })
  list.value.push(...res.rows)
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
