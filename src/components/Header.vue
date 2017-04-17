<template lang='pug'>
	header.header
		.header-wrap
			a.logo
				img(:src="image")
			nav.main-nav
				a.nav-link Home
				a.nav-link About
				a.nav-link Contact
</template>
<script>
export default{
	data: function(){
		return {
			image: '/static/img/emkit_logo.png'
		}
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
  color: #90a4ae;
  font-weight: bold;
  padding: 0 15px;
  letter-spacing: 0.05em;
  line-height: 3.75em;
  &:hover{
  	color: $green;
  	cursor: pointer;
  }
  &:hover:before{
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
.header-wrap{
	display: flex;
	justify-content: space-between;
	max-width: 1200px;
	margin: auto;
	height: 100%;
}
</style>