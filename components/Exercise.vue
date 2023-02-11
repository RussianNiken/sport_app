<template>
  <div class="Exercise">
    <div class="left">
        <h1>{{date}}</h1>
        <p>{{type}}</p>
    </div>
    <div class="right" :style="css">
        {{(score*10).toFixed(2)}}
    </div>
  </div>
</template>

<script>
export default {
    props: {    
        date: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        score: {
            type: Number,
            required: true
        }
    },
    computed: {
        css() {
            if ( this.score > .9 )
                return '--c: #4ac09d';
            if ( this.score > .7 )
                return '--c: #90BE6D';
            if ( this.score > .6 )
                return '--c: #F9C74F';
            if ( this.score > .4 )
                return '--c: #F8961E';
            if ( this.score > .2 )
                return '--c: #F3722C';
            else
                return '--c: #F94144';
        }
    }
}
</script>

<style>

.Exercise {
    display: grid;
    background-color: #1b1b1b22;
    border-radius: 5px;
    padding: .8em;
    place-items: center;
    justify-content: space-between;
    width: 85vw;
    margin-top: 1em;
    transition: transform 0.2s ease-in-out;
}

.Exercise:active {
    transform: scale(.95);
    background-color: #1b1b1b33;
}

.Exercise .left {
    display: block;
    grid-column: 1;
}

.Exercise .left h1 {
    font-size: 1.3em;
    font-weight: bold;
}

.Exercise .right {
    display: block;
    grid-column: 2;
    font-weight: bolder;
    font-size: 25px;
    padding-right: .5em;
    color: var(--c);
}
</style>
