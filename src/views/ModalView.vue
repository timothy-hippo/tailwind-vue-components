<template>
  <div :class="[
    'w-screen h-screen',
    'flex flex-col',
    'justify-center items-center'
  ]">
    <RabbitButton class="w-40" text="開啟Modal" color="yellow" @click="showed=true" />
    <ModalView title="標題" :showModal="showed" @closing="closing">
      <template #itemText>你確定要刪除？</template>
    </ModalView>
  </div>
</template>

<script>
import ModalView from '@/components/ModalView.vue'
import RabbitButton from '@/components/RabbitButton.vue'
export default {
  components: {
    ModalView,
    RabbitButton
  },
  data () {
    return {
      showed: false
    }
  },
  methods: {
    closing (showed) {
      this.showed = showed
    }
  }
}
</script>
