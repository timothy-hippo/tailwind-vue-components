<template>
  <div :class="[
    'fixed top-0 left-0',
    'w-screen h-screen',
    'p-5',
    'flex justify-center items-center',
    'transition-all duration-300',
    showed ? 'opacity-100': 'opacity-0 pointer-events-none'
    ]">
    <div class="absolute top-0 left-0 w-full h-full bg-black/50" @click="closing()"></div>
    <div :class="[
      'w-full max-w-sm',
      'bg-white rounded-md',
      'overflow-hidden z-10',
      'transition-all duration-300',
      showed? 'scale-100': 'scale-0'
    ]">
      <div class="flex p-4 justify-between items-center border-b border-gray-200">
        <div>
          {{ title }}
        </div>
        <div class="p-1 hover:bg-gray-200 active:scale-90 rounded-md cursor-pointer transition-all" @click="closing()">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
      <div>
        <div class="p-4">
          <slot name="itemText">這是內文</slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalView',
  props: {
    showModal: {},
    title: {
      default: '注意'
    }
  },
  data () {
    return {
      showed: true
    }
  },
  mounted () {
    this.showed = this.showModal
  },
  watch: {
    showModal (n, o) {
      this.showed = n
    }
  },
  methods: {
    closing () {
      this.showed = false
      this.$emit('closing', this.showed)
    }
  }
}
</script>
