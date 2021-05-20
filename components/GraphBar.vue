<template>
  <div class="GraphBar" :style="css">
      <div class="Bar"></div>
      <p> {{text}} </p>
  </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        h: {
            type: Number,
            required: false,
            default: 150
        },
        score: {
            type: Number,
            required: true
        },
        current: {
            type: Number,
            required: true
        },
        i: {
            type: Number,
            required: true
        }
    },
    computed: {
        active() {
            // var rect = element.getBoundingClientRect();
            // console.log(this.$);
            return ( this.current == this.i );
            // return false;
        },
        css() {
            if ( this.active )
                return `--c: #FAFAFA; --h: ${this.h}px; --s: ${this.score}; font-weight: bold`;
            else
                return `--c: #9E95DF; --h: ${this.h}px; --s: ${this.score}`;
        }
    }
}
</script>

<style>

.GraphBar {
    height: var(--h);
    display: inline-block;
    color: var(--c);
}

.GraphBar .Bar {
    display: inline-block;
    background: var(--c);
    height: calc( var(--h) * var(--s) );
    margin: 0 .2em;
    margin-top: calc( var(--h) * (1 - var(--s)) );
    width: 35px;
    border-radius: 5px;
}

.GraphBar p {
    font-size: 12px;
    text-align: center;
}

</style>