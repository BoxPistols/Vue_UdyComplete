new Vue({
	el: '#app',
	data: {
		fruits: ['バナナ','りんご','みかん'],
	},
	methods: {
		remove: function(){
			this.fruits.shift()
		}
	}	
})