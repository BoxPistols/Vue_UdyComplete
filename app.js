new Vue({
	el: '#app',
	data: {
		active: true,
		bg: 'bg-gr',
		color: 'red'
	},
	computed: {
		classObj: function(){
			return{
				red: this.active, 'bg-gr': !this.active 
			}
		}
	 }
})