new Vue({
	el: '#app',
	data: {
		active: true
	},
	computed: {
		classObj: function(){
			return{
				red: this.active, 'bg-gr': !this.active 
			}
		}
	 }
})