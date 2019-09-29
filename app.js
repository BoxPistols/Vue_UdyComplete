new Vue({
	el: '#app',
	data: {
		active: true,
		bg: 'bg-gr',
		color: 'red',
		texCol: 'red',
		bgCol: 'orange',
		styleObj:{
			color: 'blue'
		},
		baseStyle:{
			fontSize: '60px'
		}
	},
	computed: {
		classObj: function(){
			return{
				red: this.active, 'bg-gr': !this.active 
			}
		}
	 }
})