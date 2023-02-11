<template>
  <div class="ExerciseList" >
		<div v-for="e in exercises" :key="e.video_id">
			<nuxt-link :to="`videos/${e.video_id}`" >
				<Exercise :date="parseDate(e)" :type="e.exercisesName" :score="e.score" />
			</nuxt-link>
		</div>    

		<div v-if="!exercises[0]" >
			<p class="text-gray-400"> No exercises recorded this {{active}} </p>
		</div>    
  </div>
</template>

<script>
export default {
  data() {
    return {
      exercises: [],
    }
  },
  props: {
    date: {
      required: true,
    },
    selected: true
  },
  computed: {
    active() {
      switch(this.selected) {
        case 0:
          return 'day';
        case 1:
          return 'month';
        case 2:
          return 'year';
        
      }
    }
  },
  methods: {
    parseDate(e) {
      let time = ''

      if (!this.date.month) time += e.day + '/' + e.month + ' ('
      else if (!this.date.day) time += e.day + ' ('
      let date = new Date(e.date)
      time +=
        `${date.getHours()}:` +
        (date.getMinutes() < 10 ? '0' : '') +
        `${date.getMinutes()}`
      if (!this.date.day) time += ')'

      return time
    },
  },
  async fetch() {
    let url =
      `/api/exercises?uid=1` +
      (this.date.day ? `&day=${this.date.day}` : '') +
      (this.date.month ? `&month=${this.date.month}` : '') +
      `&year=${this.date.year}`

    this.exercises = await this.$axios.$get(url);
  },
}
</script>

<style>
.ExerciseList {
  padding: 7.5vw;
}
</style>
