<template>
    <div>
        <div class="fixed col-auto justify-end right-5 top-5 z-10 closeButton">
            <nuxt-link to="/" prefetch>
                <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 0.28125C10.3008 0.325879 6.76575 1.8152 4.14985 4.4311C1.53395 7.047 0.0446294 10.5821 0 14.2812C0.0446294 17.9804 1.53395 21.5155 4.14985 24.1314C6.76575 26.7473 10.3008 28.2366 14 28.2812C17.6992 28.2366 21.2343 26.7473 23.8501 24.1314C26.466 21.5155 27.9554 17.9804 28 14.2812C27.9554 10.5821 26.466 7.047 23.8501 4.4311C21.2343 1.8152 17.6992 0.325879 14 0.28125ZM22 15.2812H15V22.2812H13V15.2812H6V13.2812H13V6.28125H15V13.2812H22V15.2812Z" fill="#FAFAFA"/>
                </svg>
            </nuxt-link>
        </div>
        <video autoplay loop muted style="width:100vw; background:#1b1b1b">
            <source type="video/mp4" :src="`data:video/mp4;base64,${data}`" :key="data">
        </video>
        <svg style="position:absolute; margin-top:-10px;" preserveAspectRatio="none" width="100vw" height="300" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10 L190 10 L200 0 L210 10 L400 10 L400 400 L0 400" fill="url(#paint0_linear)"/>
            <defs>
            <linearGradient id="paint0_linear" x1="180" y1="0" x2="180" y2="300" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4A43D2"/>
                <stop offset=".2" stop-color="#4A43D2"/>
                <stop offset="1" stop-color="#560BAD00"/>
            </linearGradient>
            </defs>
        </svg>
        <div class="relative z-10 p-10 py-5 grid w-screen">
            <div class="Date">
                <h1> {{date}} </h1>
                Squat, 300kg, {{reps}} reps
            </div>

            <div class="flex justify-end Score" :style="css">
                {{(video.score*10).toFixed(2)}}
            </div>

            <div class="col-span-2 Corrections" v-if="stats">
                <div class="great">
                    <p v-for="c in stats.great" :key="c">
                        <b>Great</b>
                        {{c}} 
                    </p>
                </div>
                <div class="good">
                    <p v-for="c in stats.good" :key="c">
                        <b>Good</b>
                        {{c}} 
                    </p>
                </div>
                <div class="average">
                    <p v-for="c in stats.average" :key="c">
                        <b>Average</b>
                        {{c}} 
                    </p>
                </div>
                <div class="bad">
                    <p v-for="c in stats.bad" :key="c">
                        <b>Bad</b>
                        {{c}} 
                    </p>
                </div>
                <div class="aweful">
                    <p v-for="c in stats.aweful" :key="c">
                        <b>Aweful</b>
                        {{c}} 
                    </p>
                </div>

                <div class="corrections">
                    <b>Corrections:</b>
                    <p v-for="c in stats.corrections" :key="c">
                        {{c}} 
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            video: {},
            data: '',
            stats: {},
            reps: 0
        }
    },
    computed: {
        css() {
            if ( this.video.score > .9 )
                return '--c: #4ac09d';
            if ( this.video.score > .7 )
                return '--c: #90BE6D';
            if ( this.video.score > .6 )
                return '--c: #F9C74F';
            if ( this.video.score > .4 )
                return '--c: #F8961E';
            if ( this.video.score > .2 )
                return '--c: #F3722C';
            else
                return '--c: #F94144';
        },
        date() {
            let date = new Date(this.video.date);
            let str = date.toLocaleString(undefined,{ year: 'numeric', month: 'long', day: 'numeric' });
            str += `, ${date.getHours()}:` + ((date.getMinutes()<10)? '0' : '') + `${date.getMinutes()}`;
            return str;
        }
    },
    async fetch() {
        this.video = await this.$axios.$get(`/api/video?id=${this.$route.params.id}`);
        this.data =  Buffer.from( this.video.video.data ).toString('base64');

        let obj = JSON.parse( this.video.data );

        this.stats = obj.stats;
        this.reps = obj.reps;
    }
}
</script>

<style>

@keyframes rotate-in {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-135deg);
  }
}

.closeButton {
    animation: rotate-in 1s;
    transform: rotate(-135deg);
}

.Date h1 {
    font-size: 1.4em;
    font-weight: bold;
}

.Score {
    font-weight: bolder;
    font-size: 28px;
    padding-right: .5em;
    color: var(--c);
}

.Corrections div {
    margin: 1.5em 0;
}

.Corrections .great   b { color: #90BE6D; }
.Corrections .good    b { color: #F9C74F; }
.Corrections .average b { color: #F8961E; }
.Corrections .bad     b { color: #F3722C; }
.Corrections .aweful  b { color: #F94144; }

.Corrections .corrections p { 
    display: list-item; 
    margin-left: 2em;
}

</style>