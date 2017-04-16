<template lang="pug">
	.slider
		.slide(:class='{"slide-active": index == activeSlide}' v-for='(slide, index) in slides')
			.slide-content
				figure.slide-img
					img(v-bind='{ src: loadImage(slide.name), class: [`img-${slide.name}`]}')
		nav.slider-nav
			a.nav-point(:class='{"point-active": index == activeSlide}' v-for='(slide, index) in slides' @click='changeSlide(index)')
		a.nav-arrow.arrow-prev(@click='changeSlide("prev")')
		a.nav-arrow.arrow-next(@click='changeSlide("next")')
		
			

</template>
<script>
	export default{
	data() {
	    return {
	      activeSlide: 0,
	      slides: [{
	        name: 'main',
	        title: 'Welcome to our media market place!',
	        text: 'Stock on photos, illustrations and videos from best creatives\
	        around the world',
	      }, {
	        name: 'team',
	        title: 'Join our creative team!',
	        text: 'Stock on photos, illustrations and videos from best creatives\
	        around the world',
	      }, {
	        name: 'shop',
	        title: 'Welcome to our media market place!',
	        text: 'Stock on photos, illustrations and videos from best creatives\
	        around the world',
	      }],
	      topProducts: {},
	    };
	  },
	  methods: {
      changeSlide(n) {
        if (n === 'prev') {
          this.activeSlide !== 0 ? this.activeSlide -= 1 : this.activeSlide = 2;
        } else if (n === 'next') {
          this.activeSlide !== 2 ? this.activeSlide += 1 : this.activeSlide = 0;
        } else {
          this.activeSlide = n;
        }
      },
      loadImage(slide) {
      	if (slide === 'main') {
      	  return require('../../static/img/pic1.png');
      	} else if (slide === 'team') {
      	  return require('../../static/img/pic1.png');
      	}
      	return require('../../static/img/pic1.png');
      },
    }
	}
</script>
<style lang="scss">
$color-dark: #252525;
$color-grey: #666;
$color-green: #7BEFB2;
$color-light: #fff;
$green: #73ca46;


.slider {
  position: relative;
  overflow: hidden;
  height: 100%;
  display: inline-block;
	width: 74.67%;
	height: 325px;
	background: #BBC1D7;
}
.slide {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  opacity: 0;
  transform: scale(0.7);
  transition: 3s;
  z-index: 1;
}
.slide-active {
  opacity: 1;
  transform: scale(1);
  transition: 3s;
  z-index: 2;
}
.slide-content {
	width: 100%;
}
.slide-img {
	margin: 0;
	height: 100%;
}
.img-main {
}
.img-shop,

.slide-title {
	position: absolute;
}
.slide-text {
	font-size: 4vh;
}
.slide-action {
	a {
	}
}
.slider-nav {
  position: absolute;
  bottom: 2rem;
  left: calc(50% - 5rem);
  width: 10rem;
  height: 3rem;
  display: flex;
  flex-direction: row;
}
.nav-point {
  flex: 1;
  position: relative;
  opacity: 0.6;
  z-index: 101;
  &:hover {
      opacity: 1;
  }
  &::before {
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    width: 1rem;
    height: 1rem;
    content: '';
    background-color: $color-light;
    border-radius: 50%;
    cursor: pointer;
  }
}
.point-active {
  opacity: 1;
}
.nav-arrow {
  position: absolute;
  display: none;
  width: 50px;
  height: 50px;
  content: '';
  background-color: $green;
  opacity: 0.6;
  z-index: 101;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%);
  &:hover {
    opacity: 1;
  }
}
.slider:hover .nav-arrow {
  display: block;
}
.arrow-prev {
  left: 0;
  &::before {
    position: absolute;
    content: '';
    width: 1rem;
    height: 1rem;

    display: inline-block;
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    line-height: 1;
    content: "\F105";
    top: 50%;
    transform: translateY(-50%) rotate(90deg);
    right: 8px;
    color: #fff;
  }
}
.arrow-next {
  right: 0;
  &::before {
    position: absolute;
    content: '';
    top: calc(50% - 0.5rem);
    right: calc(50% - 0.5rem);
    width: 1rem;
    height: 1rem;
    transform: rotate(-90deg) scale(2);
  }
}


	
</style>