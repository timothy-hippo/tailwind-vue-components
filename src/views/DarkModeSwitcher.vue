<template>
  <div :class="[
      'w-screen h-screen',
      'flex flex-col items-center justify-center',
      'transition-all duration-300',
      'dark:bg-gray-900'
    ]"
  >
    <DarkModeSwitcher />
    <h1 :class="[
      'text-5xl font-bold',
      'transition-all duration-300',
      'mt-5',
      'dark:text-blue-500'
    ]">日夜切換功能</h1>
  </div>
</template>

<script>
import DarkModeSwitcher from '@/components/DarkModeSwitcher.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    DarkModeSwitcher
  }
}
</script>
