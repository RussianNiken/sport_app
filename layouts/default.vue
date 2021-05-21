<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>

/* open-sans-regular - latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  src: url('../static/fonts/open-sans-v18-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../static/fonts/open-sans-v18-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../static/fonts/open-sans-v18-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../static/fonts/open-sans-v18-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../static/fonts/open-sans-v18-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../static/fonts/open-sans-v18-latin-regular.svg#OpenSans') format('svg'); /* Legacy iOS */
}

body {
  height: 100vh;
  background: linear-gradient(180deg, #4361EE 0.01%, #560BAD 64.58%), #560BAD;
  background-repeat: no-repeat;
  font-family: system-ui;
  color: #fafafa;
  font-size: 14px;
}

h1 {
  font-size: 24px;
}

</style>
