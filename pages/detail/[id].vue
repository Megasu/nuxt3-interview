<script setup lang="ts">
// 获取页码参数
const { params } = useRoute()

console.log(params)
</script>

<template>
  <h1>文章详情页 {{ $route.params }}</h1>
</template>

<style scoped></style>
