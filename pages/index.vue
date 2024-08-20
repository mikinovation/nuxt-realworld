<script lang="ts" setup>
const {data} = useFetch('/api/user')
</script>

<template>
  <div>
    {{ data }}
  </div>
</template>
