<template>
  <div class="Graph">
    <div class="GraphLines">
        <div></div>
        <div></div>
        <div></div>
    </div>
      <swiper class="swiper" :options="swiperOption" ref="mySwiper" @touchEnd="getActive()" @slideChange="play();" virtual>
        <swiper-slide v-for="(slide, index) in virtualData.slides" :key="index" :style="slideStyles">
            <GraphBar :text="slide.text" :score="slide.score" :i="slide.index" :current="active" key/>
        </swiper-slide>
      </swiper>
  </div>
</template>

<script>
  import SwiperCore, { Virtual } from 'swiper';
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/swiper-bundle.css'
  
  // Sound FX
  import { useSound } from '@vueuse/sound' // https://sound.vueuse.org/
  import click from '../assets/click.mp3'

  SwiperCore.use([Virtual]);

  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    props: ['exercises'],
    data() {
      return {
        active: 0,
        virtualData: {
          slides: this.exercises
        },
        swiperOption: {
          slidesPerView: 9,
          centeredSlides: true,
          spaceBetween: 0,
          initialSlide: this.exercises.lenght,
          virtual: {
            addSlidesBefore: 0,
            addSlidesAfter: 0,
            renderExternal: data => {
              this.virtualData = data;
            },
            slides: this.exercises
          }
        }
      }
    },
    mounted() {
      this.$refs.mySwiper.$swiper.setProgress(1, 0);
      this.getActive();
    },
    methods: {
      getActive(count = 10) {
        this.$nextTick(() => {
          if (this.$refs.mySwiper) 
          {
            this.active = this.$refs.mySwiper.$swiper.activeIndex;
            this.$emit('update', this.exercises[this.active]);
          }
          
          else if (count > 0)
            this.getActive(count-1);
        });
      },
      log( ) {
        console.log( 'a' );
      }
    },
    computed: {
      slideStyles() {
        return `left: ${this.virtualData.offset}px;`;
      }
    },
    setup() {
      const { play } = useSound(click, {volume:0.1});
      
      return {
        play,
      }
    }
  }


</script>

<style>

  .GraphLines {
      position: absolute;
      z-index: -1;
  }

  .GraphLines * {
      display: block;
      position: relative;
      width: 100vw;
      border-top: 1px dashed #9E95DF;
  }

  .GraphLines :nth-child(2) {
      top: 74px;
  }

  .GraphLines :nth-child(3) {
      top: 148px;
  }

</style>