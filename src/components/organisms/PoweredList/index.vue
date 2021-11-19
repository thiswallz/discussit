<template>
  <div class="flex">
    <div class="mt-5">Powered by</div>
    <div class="flex">
      <img src="@/assets/aws.png" style="max-width:70px" title="AWS"/>
      <img src="@/assets/aws-amplify.png"  title="Amazon Amplify" />
      <img src="@/assets/graphql.png" title="Graphql"/>
      <img src="@/assets/logo.png" title="Vuejs 3" />
      <img src="@/assets/storybook.png" title="story books"/>
      <img src="@/assets/twcss.png" title="tail wind css"/>
      <img src="@/assets/atomic.png" title="atomic design"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
});
</script>

<style lang="scss" scoped>
img{
  height: auto; 
    width: auto; 
    max-width: 40px; 
    max-height: 40px;   
  @apply m-3;
}
</style>
