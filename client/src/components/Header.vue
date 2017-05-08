<template lang='pug'>
	header.header(v-bind:class="{fixed : scrolled, hiding: prepare}")
		.header-wrap
			a.logo
				img(:src="image")
			nav.main-nav
				router-link(class="nav-link" to="/" exact) Home
				router-link(class="nav-link" to="/about") About
				router-link(class="nav-link" to="/contact") Contact

</template>
<script>
export default{
	data: function(){
		return {
			image: '/static/img/emkit_logo.png',
			prepare: false,
			scrolled: false
		}
	},
	methods: {
  		handleScroll () {
  			this.prepare = window.scrollY < 100 && window.scrollY !== 0;
    		this.scrolled = window.scrollY > 100;
    		this.$forceUpdate()
    		console.log('bla', this.scrolled);
  		}
	},
	created () {
	  window.addEventListener('scroll', this.handleScroll);
	},
	destroyed () {
	  window.removeEventListener('scroll', this.handleScroll);
	}
}
	
</script>
<style lang="scss">
$green: #73ca46;

header{
	width: 100%;
	height: 60px;
	background-color: #fff;
	box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.22);
	z-index: 10;
	top: -60px;
	transition: 0.3s ease-out;
	&.fixed{
		position: fixed;
		top: 0;
		left: 0;
	}
	&.hiding{
		position: fixed;
		top: -60px;
		left: 0;
		height: 0;
	}
	.logo{
		display: flex;
		align-items: center;
		height: 100%;
		cursor: pointer;
		width: 125px;
		img{
			width: 123px;
			height: 47px;
		}
	}

}
.main-nav{
	display: flex;
	align-items: center;
	height: 100%;
}
.nav-link{
	position: relative;
	font-size: 15px;
	font-family: 'Lato', sans-serif;
	text-transform: uppercase;
	text-decoration: none;
  color: #90a4ae;
  font-weight: bold;
  padding: 0 15px;
  letter-spacing: 0.05em;
  line-height: 3.75em;
  &:hover{
  	color: $green;
  	cursor: pointer;
  }
  
}
.header-wrap{
	display: flex;
	justify-content: space-between;
	max-width: 1200px;
	margin: auto;
	height: 100%;
}
.router-link-active{
	&:before{
  	content: '';
    position: absolute;
    display: block;
    left: 14px;
    right: 14px;
    width: auto;
    bottom: -2px;
    height: 3px;
    background: $green;
    transition: all 0.4s ease;
  }
}
</style>