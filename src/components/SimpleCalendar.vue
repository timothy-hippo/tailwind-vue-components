<template>
  <div
    :class="[
      'border rounded-xl overflow-hidden'
    ]"
  >
    <div class="py-3 border-b bg-blue-600 text-white font-bold flex justify-around items-center">
      <div class="p-1 cursor-pointer hover:bg-blue-400 rounded-full" @click="preMonth">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clip-rule="evenodd" />
        </svg>
      </div>
      {{ currentDay }}
      <div class="p-1 cursor-pointer hover:bg-blue-400 rounded-full" @click="nextMonth">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>
    <div class="grid grid-cols-7 place-items-center">
      <div
        :class="[
          'w-10 h-10',
          'text-sm font-bold text-gray-500',
          'flex justify-center items-center'
        ]"
        v-for="ws in weekDays" :key="ws">
        {{ ws }}
      </div>
    </div>
    <div class="grid grid-cols-7 place-items-center">
      <div
        :class="[
          'w-10 h-10',
          'text-sm font-bold',
          'flex justify-center items-center',
          day.isSameMonth ? 'text-black' : 'text-gray-500',
          day.isToday ? 'bg-yellow-300' : ''
        ]"
        v-for="(day, index) in days" :key="index">
        {{ day.day }}
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data () {
    return {
      weekDays: ['日', '一', '二', '三', '四', '五', '六'],
      toDay: moment().toDate(),
      days: []
    }
  },
  mounted () {
    this.daysInMonth(this.toDay)
  },
  computed: {
    currentDay () {
      return moment(this.toDay).format('YYYY MM月')
    }
  },
  methods: {
    daysInMonth (toDay) {
      this.days = []
      const week = Number(moment(toDay).startOf('months').weekday())
      const startDate = moment(toDay).startOf('months').subtract(week, 'days').toDate()
      for (let i = 0; i < 42; i++) {
        const obj = {
          day: moment(startDate).add(i, 'days').format('D'),
          isSameMonth: moment(moment(startDate).add(i, 'days')).isSame(toDay, 'months'),
          isToday: moment(moment(startDate).add(i, 'days')).isSame(moment().toDate(), 'days')
        }
        this.days.push(obj)
      }
    },
    nextMonth () {
      this.toDay = moment(this.toDay).add(1, 'months').toDate()
      this.daysInMonth(this.toDay)
    },
    preMonth () {
      this.toDay = moment(this.toDay).subtract(1, 'months').toDate()
      this.daysInMonth(this.toDay)
    }
  }
}
</script>
