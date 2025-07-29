<template></template>

<script lang="ts" setup>
import { defineComponent, reactive, ref, watch } from 'vue'
import { useClipboard } from '@vueuse/core'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
}
</style>
