<template>
  <div class="spinner-container">
    <div class="spinner-wrapper">
      <!-- <svg xmlns="http://www.w3.org/2000/svg" xml:lang="en" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500">
        <title>Circular Text Path</title>
        <defs>
          <path id="textcircle" d="M250,400
                       a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z" transform="rotate(12,250,250)" />
        </defs>
        <g class="textcircle">
          <text textLength="940">
            <textPath 
                      xlink:href="#textcircle" 
                      aria-label="CSS & SVG are awesome" 
                      textLength="940">
              &amp; Mahmoud | Web Developer &amp; Alawad Web Developer |&#160;
            </textPath>
          </text>
        </g>
      </svg> -->
      <div v-html="getSpans" class="spinner-text"></div>
    </div>
  </div>
</template>
<script setup>
const text = 'Mahmoud Alawad - Web Developer'
const getSpans = text
  .split(' ')
  .map(
    (char, i) =>
      `<span style=" position: absolute;
    left: 50%;
    font-size: 1.2em;
    transform-origin: 0 400px;transform:rotate(${i * 8.3}deg);">${char}</span>`
  )
  .join(' ')
</script>
<style lang="scss" scoped>
.spinner-container {
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background-color: red;
  height: 100vh;
  width: 100%;
}

.spinner-wrapper {
  position: relative;
  width: 50vw;
  height: 50vw;
  border-radius: 50%;

  @media screen and (min-width: 650px) {
    width: 40vw;
    height: 40vw;
  }

  @media screen and (min-width: 1120px) {
    width: 30vw;
    height: 30vw;
  }

  animation: spinner 10s linear infinite;
}
.spinner-text {
  position: absolute;
  width: 100%;
  height: 100%;
}
.spinner-text span {
  position: absolute;
  left: 50%;
  font-size: 1.2em;
  transform-origin: 0 100px;
}
@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
</style>
