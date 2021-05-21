<template>
  <div class="ExerciseList" >
      <div v-for="e in exercises" :key="e.video_id">
        <nuxt-link :to="`videos/${e.video_id}`" >
            <Exercise :date="parseDate(e)" type="Squat" :score="e.score" />
        </nuxt-link>
      </div>    
  </div>
</template>

<script>
export default {
    data() {
        return {
            exercises: []
        }
    },
    props: {
        date: {
            required: true
        }
    },
    methods: {
        parseDate( e ) {
            let time = '';
            
            if (!this.date.month)
                time += e.day + '/' + e.month + ' (';
            else if (!this.date.day)
                time += e.day + ' (';
            time += e.date.split(/[TZ]/)[1].slice(0,5);
            if (!this.date.day)
                time += ')';

            return time;
        }
    },
    async fetch() {
        let url = `http://localhost:3000/api/exercises?uid=1` + 
            ((this.date.day)? `&day=${this.date.day}` : '' ) +
            ((this.date.month)? `&month=${this.date.month}` : '' ) +
            `&year=${this.date.year}`;
        
        this.exercises = await fetch(url).then( res => res.json() );
    }
}
</script>

<style>

.ExerciseList {
    padding: 7.5vw;
}

</style>