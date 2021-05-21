<template>
    <div>
        <div class="absolute col-auto justify-end p-5 right-0 z-10 closeButton">
            <nuxt-link to="/" prefetch>
                <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 0.28125C10.3008 0.325879 6.76575 1.8152 4.14985 4.4311C1.53395 7.047 0.0446294 10.5821 0 14.2812C0.0446294 17.9804 1.53395 21.5155 4.14985 24.1314C6.76575 26.7473 10.3008 28.2366 14 28.2812C17.6992 28.2366 21.2343 26.7473 23.8501 24.1314C26.466 21.5155 27.9554 17.9804 28 14.2812C27.9554 10.5821 26.466 7.047 23.8501 4.4311C21.2343 1.8152 17.6992 0.325879 14 0.28125ZM22 15.2812H15V22.2812H13V15.2812H6V13.2812H13V6.28125H15V13.2812H22V15.2812Z" fill="#FAFAFA"/>
                </svg>
            </nuxt-link>
        </div>
        <video autoplay loop muted style="height:40vh; width:100vw; background:#1b1b1b">
            <source type="video/mp4" :src="`data:video/mp4;base64,${data}`" :key="data">
        </video>
        <svg style="position:absolute; margin-top:-10px" preserveAspectRatio="none" width="100vw" height="422" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10 L190 10 L200 0 L210 10 L400 10 L400 400 L0 400" fill="url(#paint0_linear)"/>
            <defs>
            <linearGradient id="paint0_linear" x1="180" y1="0" x2="180" y2="400" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4A43D2"/>
                <stop offset="1" stop-color="#560BAD"/>
            </linearGradient>
            </defs>
        </svg>
        <div> {{video.data}} </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            video: {},
            data: ''
        }
    },
    async fetch() {
        this.video = await fetch(`http://localhost:3000/api/video?id=${this.$route.params.id}`).then( res => res.json() );
        this.data =  Buffer.from( this.video.video.data ).toString('base64');
    }
}
</script>

<style>

@keyframes rotate-in {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-45deg);
  }
}

.closeButton {
    animation: rotate-in 1s;
    transform: rotate(45deg);
}

</style>