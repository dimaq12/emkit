<template>
  <div id="app">
  	<app-header></app-header>
  	<app-main></app-main>
  	<app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
	data: function(){
		return {

		}
	},
	components: {
		'app-header': Header,
		'app-main': Main,
		'app-footer': Footer
	}
}
</script>

<style lang="scss">
body{
	margin: 0;
	padding: 0;
	background-color: #eceff1;
}
</style>
