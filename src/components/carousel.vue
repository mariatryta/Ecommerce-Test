<template>
  <div>
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="300"
                img-height="220"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >
      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/300/220/?image=58">
      </b-carousel-slide>
       <b-carousel-slide img-src="https://picsum.photos/300/220/?image=54">
      </b-carousel-slide>
    </b-carousel>


  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
<!-- carousel-1.vue -->