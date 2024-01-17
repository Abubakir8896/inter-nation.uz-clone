<template>
  <div class="w-full flex h-screen">
    <TheSidebar />
    <div class="w-screen flex flex-col main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import TheSidebar from "@/components/theSidebar.vue";
</script>

<style scoped>
.main {
  width: calc(100% - 223px);
  display: flex;
  flex-direction: column;
}
</style>
