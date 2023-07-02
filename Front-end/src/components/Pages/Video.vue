<template>
  <video id="player" playsinline controls>
    <source src="src/assets/video/tes1.webm" type="video/webm">
  </video>
</template>

<script>
import Plyr from 'plyr'
import 'plyr/dist/plyr.css'

export default {
  mounted() {
    this.player = new Plyr('#player');
  },
  beforeUnmount() {
    console.log('unmounting...');
    this.$nextTick(() => {
      if (this.player) {
        this.player.destroy();
        this.player = null;
      }
    });
  },
  beforeRouteLeave(to, from, next) {
    window.location.href = to.path;
  },
  data() {
    return {
      player: null,
    }
  }
};
</script>

