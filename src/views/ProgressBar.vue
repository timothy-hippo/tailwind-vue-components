<template>
  <div class="home">
    <div :class="[
    'w-screen h-screen',
    'flex flex-col',
    'justify-center items-center',
  ]">
      <input type="range" v-model="val" :min="min" :max="max" />
      <ProgressBar  :currentVal="val" :minVal="min" :maxVal="max" v-slot="{ percent }">
        已下載 {{ percent }} %
      </ProgressBar>
    </div>
  </div>
</template>

<script>
import ProgressBar from '@/components/ProgressBar.vue'
export default {
  name: 'HomeView',
  components: {
    ProgressBar
  },
  data () {
    return {
      min: 0,
      max: 200,
      val: 100
    }
  }
}
</script>
