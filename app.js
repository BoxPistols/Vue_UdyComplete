new Vue({
  el: '#app',
  data: {
	  ctr: 0,
	  num: 0,
    x: 0,
    y: 0,
    evt: 'click',
    msg: 'おはこん'
  },
  methods: {
	  countUp: function(t){
			this.num += 10 * t
	  },
//	  countUp: function(time){
//			this.num += 10 * time
//	  },
    mousePosition: function(e, dvEv) {
	    //console.log(event);
	    this.x = e.clientX / dvEv;
	    this.y = e.clientY / dvEv;
		},
		//noEv: function(){
			//event.preventDefault();
		//}
		myAlert: function(){
			alert("Ah!");
		}
  },
  computed: {
	  lessThanThree: function(){
		  return this.ctr >= 3 ? '↑' : '下'
	  }
  },
  watch: {	  
	  ctr: function(){
		  var vm = this;
		  setTimeout(function(){
			  vm.ctr = 1000
		  }, 3000)
	  }
  }

})