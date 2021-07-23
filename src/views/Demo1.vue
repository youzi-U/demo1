<template>
  <img :src="log" alt="" srcset="" />
  <!-- <div>canvas</div> -->
  <!-- <canvas ref="canvas" width="500" height="500"></canvas> -->
</template>

<script lang='ts'>
// import log from '../assets/logo.png';
export type TDemo = {
  hello: string;
};
export default {
  data() {
    return {
      // log,
    };
  },
  mounted() {
    const ctx = this.$refs.canvas.getContext("2d");
  },
};
</script>
 <style type="text/css">
canvas {
  border: 1px solid black;
}
</style>
