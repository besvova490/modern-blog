<script setup lang="ts">
import VuePdfEmbed from 'vue-pdf-embed';

// assets
import pdf from '@/assets/docs/dummy.pdf';
import 'vue-pdf-embed/dist/styles/annotationLayer.css';
import 'vue-pdf-embed/dist/styles/textLayer.css';

</script>

<template>
  <div>
    <VuePdfEmbed annotation-layer text-layer :source="pdf" />
  </div>
</template>

