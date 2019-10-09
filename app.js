var vm = new Vue({
//	el: '#app', 
	data: {
		msg: "メッセ",
		name: '柿ピー'
	},
	computed: {
		myData: function(){
			return this.$data
		}
	}
})

vm.$mount('#app')


//console.log(data === vm.$data)

//vm.msg = "上書きするの"
/*
var vm2 = new Vue({
	el: '#app2',
	data: {
		msg2: "メッセ2"
	},
	methods: {
		cgM: function(){
			vm.msg = 'ほげ'
		}
	}
})
*/