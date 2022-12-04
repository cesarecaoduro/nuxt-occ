<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

<script setup>
import initOpenCascade from 'opencascade.js';

const oc = await initOpenCascade();
console.log(oc);

</script>
