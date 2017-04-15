<template>
  <div id="app">
  	<app-header></app-header>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
	data: function(){
		return {

		}
	},
	components: {
		'app-header': Header
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
