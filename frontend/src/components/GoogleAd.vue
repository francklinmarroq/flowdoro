<template>
  <div class="adsense-container">
    <ins class="adsbygoogle" :style="adStyle" :data-ad-client="client" :data-ad-slot="slot" :data-ad-format="format"
      :data-full-width-responsive="fullWidthResponsive"></ins>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

const props = defineProps({
  client: {
    type: String,
    required: true,
    default: 'ca-pub-6273789708872351'
  },
  slot: {
    type: String,
    required: true
  },
  format: {
    type: String,
    default: 'auto'
  },
  adStyle: {
    type: Object,
    default: () => ({ display: 'block' })
  },
  fullWidthResponsive: {
    type: String,
    default: 'true'
  }
});

onMounted(() => {
  try {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  } catch (error) {
    console.error('AdSense error:', error);
  }
});
</script>

<style scoped>
.adsense-container {
  min-height: 100px;
  background: #f0f0f0;
}
</style>
