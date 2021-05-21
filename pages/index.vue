
<template>
  <div>
    <div class="grid grid-cols-2 p-5 pb-1"> <!-- NAV START -->

      <div class="col-auto">
        <h1>Workout record</h1>
        <p>May 11 ›</p>
      </div>
      
      <div class="flex col-auto justify-end">
        <svg class="Button" width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 0.28125C10.3008 0.325879 6.76575 1.8152 4.14985 4.4311C1.53395 7.047 0.0446294 10.5821 0 14.2812C0.0446294 17.9804 1.53395 21.5155 4.14985 24.1314C6.76575 26.7473 10.3008 28.2366 14 28.2812C17.6992 28.2366 21.2343 26.7473 23.8501 24.1314C26.466 21.5155 27.9554 17.9804 28 14.2812C27.9554 10.5821 26.466 7.047 23.8501 4.4311C21.2343 1.8152 17.6992 0.325879 14 0.28125ZM22 15.2812H15V22.2812H13V15.2812H6V13.2812H13V6.28125H15V13.2812H22V15.2812Z" fill="#FAFAFA"/>
        </svg>
      </div>
      
      <div class="flex col-span-2 justify-between p-10"> <!-- BUTTONS START -->

        <SVGButton :current="active" :i="0" text="Day" @change="change">
          <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.7778 6.25C21.7778 4.52411 23.1707 3.125 24.8889 3.125C26.6071 3.125 28 4.52411 28 6.25V21.875C28 23.6009 26.6071 25 24.8889 25C23.1707 25 21.7778 23.6009 21.7778 21.875V6.25Z" fill="#FAFAFA"/>
            <path d="M0 6.25C0 4.52411 1.39289 3.125 3.11111 3.125C4.82933 3.125 6.22222 4.52411 6.22222 6.25V21.875C6.22222 23.6009 4.82933 25 3.11111 25C1.39289 25 0 23.6009 0 21.875V6.25Z" fill="#FAFAFA"/>
            <path d="M9.33333 12H12.4444V16H9.33333V12Z" fill="#FAFAFA"/>
            <path d="M3.11111 3.125H24.8889V12.5H3.11111V3.125Z" fill="#FAFAFA"/>
            <path d="M3.11111 15.625H24.8889V25H3.11111V15.625Z" fill="#FAFAFA"/>
            <path d="M4.66667 1.5625C4.66667 0.699555 5.36311 0 6.22222 0H7.77778C8.63689 0 9.33333 0.699555 9.33333 1.5625V3.125C9.33333 3.98795 8.63689 4.6875 7.77778 4.6875H6.22222C5.36311 4.6875 4.66667 3.98795 4.66667 3.125V1.5625Z" fill="#FAFAFA"/>
            <path d="M18.6667 1.5625C18.6667 0.699555 19.3631 0 20.2222 0H21.7778C22.6369 0 23.3333 0.699555 23.3333 1.5625V3.125C23.3333 3.98795 22.6369 4.6875 21.7778 4.6875H20.2222C19.3631 4.6875 18.6667 3.98795 18.6667 3.125V1.5625Z" fill="#FAFAFA"/>
          </svg>
        </SVGButton>

        <SVGButton :current="active" :i="1" text="Month" @change="change">
          <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.7778 6.25C21.7778 4.52411 23.1707 3.125 24.8889 3.125C26.6071 3.125 28 4.52411 28 6.25V21.875C28 23.6009 26.6071 25 24.8889 25C23.1707 25 21.7778 23.6009 21.7778 21.875V6.25Z" fill="#FAFAFA"/>
            <path d="M0 6.25C0 4.52411 1.39289 3.125 3.11111 3.125C4.82933 3.125 6.22222 4.52411 6.22222 6.25V21.875C6.22222 23.6009 4.82933 25 3.11111 25C1.39289 25 0 23.6009 0 21.875V6.25Z" fill="#FAFAFA"/>
            <path d="M6 12.5H22V15.625H6V12.5Z" fill="#FAFAFA"/>
            <path d="M6 9H10.8889V13H6V12.5V9Z" fill="#FAFAFA"/>
            <path d="M3.11111 3.125H24.8889V9.375H3.11111V3.125Z" fill="#FAFAFA"/>
            <path d="M3.11111 18.75H24.8889V25H3.11111V18.75Z" fill="#FAFAFA"/>
            <path d="M4.66667 1.5625C4.66667 0.699555 5.36311 0 6.22222 0H7.77778C8.63689 0 9.33333 0.699555 9.33333 1.5625V3.125C9.33333 3.98794 8.63689 4.6875 7.77778 4.6875H6.22222C5.36311 4.6875 4.66667 3.98794 4.66667 3.125V1.5625Z" fill="#FAFAFA"/>
            <path d="M18.6667 1.5625C18.6667 0.699555 19.3631 0 20.2222 0H21.7778C22.6369 0 23.3333 0.699555 23.3333 1.5625V3.125C23.3333 3.98794 22.6369 4.6875 21.7778 4.6875H20.2222C19.3631 4.6875 18.6667 3.98794 18.6667 3.125V1.5625Z" fill="#FAFAFA"/>
          </svg>
        </SVGButton>

        <SVGButton :current="active" :i="2" text="Year" @change="change">
          <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.7778 6.25C21.7778 4.52411 23.1707 3.125 24.8889 3.125C26.6071 3.125 28 4.52411 28 6.25V21.875C28 23.6009 26.6071 25 24.8889 25C23.1707 25 21.7778 23.6009 21.7778 21.875V6.25Z" fill="#FAFAFA"/>
            <path d="M0 6.25C0 4.52411 1.39289 3.125 3.11111 3.125C4.82933 3.125 6.22222 4.52411 6.22222 6.25V21.875C6.22222 23.6009 4.82933 25 3.11111 25C1.39289 25 0 23.6009 0 21.875V6.25Z" fill="#FAFAFA"/>
            <path d="M6 12.5H22V15.625H6V12.5Z" fill="#FAFAFA"/>
            <path d="M9.33333 9H12.4444V19H9.33333V9Z" fill="#FAFAFA"/>
            <path d="M15.5556 9H18.6667V19H15.5556V9Z" fill="#FAFAFA"/>
            <path d="M3.11111 3.125H24.8889V9.375H3.11111V3.125Z" fill="#FAFAFA"/>
            <path d="M3.11111 18.75H24.8889V25H3.11111V18.75Z" fill="#FAFAFA"/>
            <path d="M4.66667 1.5625C4.66667 0.699555 5.36311 0 6.22222 0H7.77778C8.63689 0 9.33333 0.699555 9.33333 1.5625V3.125C9.33333 3.98794 8.63689 4.6875 7.77778 4.6875H6.22222C5.36311 4.6875 4.66667 3.98794 4.66667 3.125V1.5625Z" fill="#FAFAFA"/>
            <path d="M18.6667 1.5625C18.6667 0.699555 19.3631 0 20.2222 0H21.7778C22.6369 0 23.3333 0.699555 23.3333 1.5625V3.125C23.3333 3.98794 22.6369 4.6875 21.7778 4.6875H20.2222C19.3631 4.6875 18.6667 3.98794 18.6667 3.125V1.5625Z" fill="#FAFAFA"/>
          </svg>
        </SVGButton>
          

      </div> <!-- BUTTONS END -->
    </div> <!-- NAV END -->

    <div>
      <Graph :exercises="exercises" :key="this.changed" @update="update"/>
    </div>

    <div>
      <div class="absolute">
        <ExerciseList :date="date" ref="EL" />
      </div>

      <svg preserveAspectRatio="none" width="100vw" height="422" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 10 L190 10 L200 0 L210 10 L400 10 L400 400 L0 400" fill="url(#paint0_linear)"/>
        <defs>
          <linearGradient id="paint0_linear" x1="180" y1="0" x2="180" y2="400" gradientUnits="userSpaceOnUse">
            <stop stop-color="#4A43D2"/>
            <stop offset="1" stop-color="#560BAD"/>
          </linearGradient>
        </defs>
      </svg>

    </div> 
  </div>
</template>

<script>
let date = new Date();

export default {
  layout: 'default',
  data() {
    return {
      active: 0,
      count: 0,
      exercises: [],
      changed: false,  // For update purposes
      date: {
        day: date.getDate(), 
        month: date.getMonth() + 1, 
        year: date.getFullYear()
      }
    }
  },
  async fetch( ) {
    let result = await fetch(`http://localhost:3000/api/graphed?uid=1&mode=${this.active}`).then( res => res.json() );

    let tmp = [];
    this.exercises = [];

    result.forEach( (item, index)  => {
      tmp.push({
        day: item.day,
        month: item.month,
        year: item.year,
        index: index,
        score: item.avg.score,
        text: (item.day)? `${item.day}/${item.month}` : (item.month)?` ${item.month}/${item.year}` : `${item.year}`
      });
    });

    var now = new Date();

    let i = 0;

    switch( this.active ) {
      case 0:
        for ( var d = new Date(tmp[0].year,tmp[0].month-1,tmp[0].day); d <= now; d.setDate(d.getDate() + 1)) {
          if ( 
            tmp[0] &&
            tmp[0].day == d.getDate() && 
            tmp[0].month-1 == d.getMonth() && 
            tmp[0].year == d.getFullYear() )
          {
            tmp[0].index = i++;
            this.exercises.push(tmp[0]);
            tmp.shift();
          }
          else
          {
            let item = {
              day: d.getDate(), 
              month: d.getMonth() + 1, 
              year: d.getFullYear()
            };

            this.exercises.push({
              day: item.day,
              month: item.month,
              year: item.year,
              index: i++,
              score: 0,
              text: (item.day)? `${item.day}/${item.month}` : (item.month)?` ${item.month}/${item.year}` : `${item.year}`
            });
          }
        }
        break;
      case 1:
        for ( var d = new Date(tmp[0].year,tmp[0].month-1,1); d <= now; d.setMonth(d.getMonth() + 1)) {
          console.log(d);
          if ( 
            tmp[0] &&
            tmp[0].month-1 == d.getMonth() && 
            tmp[0].year == d.getFullYear() )
          {
            tmp[0].index = i++;
            this.exercises.push(tmp[0]);
            tmp.shift();
          }
          else
          {
            let item = {
              month: d.getMonth() + 1, 
              year: d.getFullYear()
            };

            this.exercises.push({
              month: item.month,
              year: item.year,
              index: i++,
              score: 0,
              text: (item.month)?` ${item.month}/${item.year}` : `${item.year}`
            });
          }
        }
        break;
      case 2:
        for ( var d = new Date(tmp[0].year,0,1); d <= now; d.setFullYear(d.getFullYear() + 1)) {
          console.log(d);
          if ( 
            tmp[0] &&
            tmp[0].year == d.getFullYear() )
          {
            tmp[0].index = i++;
            this.exercises.push(tmp[0]);
            tmp.shift();
          }
          else
          {
            let item = {
              year: d.getFullYear()
            };

            this.exercises.push({
              year: item.year,
              index: i++,
              score: 0,
              text: `${item.year}`
            });
          }
        }
        break;
    }

    let n = this.exercises.length - 1;
    this.date.day = this.exercises[n].day;
    this.date.month = this.exercises[n].month;
    this.date.year = this.exercises[n].year;

    this.changed = !this.changed;
  },
  methods:
  {
    change( i ) 
    {
      this.active = i;
      this.$fetch();
    },
    update( d )
    {
      if (d) 
      {
        this.date.day = d.day;
        this.date.month = d.month;
        this.date.year = d.year;
        this.$refs.EL.$fetch();
      }
    }
  }
}
</script>

<style>

@keyframes rotate-out {
  0% {
    transform: rotate(-45deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.Button {
  animation: rotate-out 1s;
}

</style>
