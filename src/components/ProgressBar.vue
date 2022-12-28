<template>
  <div
    :class="[
  'w-80 p-5',
  'bg-gray-200',
  'rounded-lg',
  'flex flex-col',
  'justify-center items-center',
  'gap-3'
]"
  >
    <slot :minVal="minVal" :maxVal="maxVal" :currentVal="currentVal" :percent="percent" />
    <div :class="[
    'w-full h-2',
    'bg-green-800',
    'rounded-full'
  ]">
      <div
        :class="[
        'w-1/3 h-full',
        'bg-green-500',
        'rounded-full',
        'transition-all duration-500'
      ]"
        :style="{
        width: percent + '%'
      }"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: ['minVal', 'maxVal', 'currentVal'],
  data () {
    return {
      percent: ''
    }
  },
  mounted () {
    this.percent =
      this.currentVal <= this.minVal
        ? 0
        : Number((
          ((this.currentVal - this.minVal) / (this.maxVal - this.minVal)) *
          100
        ).toFixed(1))
  },
  watch: {
    currentVal (n, o) {
      this.percent =
        n <= this.minVal
          ? 0
          : Number(
            (((n - this.minVal) / (this.maxVal - this.minVal)) * 100).toFixed(
              1
            )
          )
    }
  }
}
</script>
