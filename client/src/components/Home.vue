<template lang="html">
 <router-view></router-view>
</template>

<script>
import Thread from '@/components/Thread'
import ThreadDetail from '@/components/ThreadDetail'
export default {
  component: {
    Thread,
    ThreadDetail
  }
}
</script>

<style lang="css">
</style>
