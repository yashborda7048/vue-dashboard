<template>
  <layout>
    <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '650px' }">
      <router-view></router-view>
    </a-layout-content>
  </layout>
</template>

<script >
import layout from './components/layout/layout.vue';
export default {
  name: "App",
  components: {
    layout
  },
};
</script>
  