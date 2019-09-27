new Vue({
  el: '#app',
  data: {
	  num: 0,
    x: 0,
    y: 0,
  },
  methods: {
	  countUp: function(time){
			this.num += 10 * time
	  },
    mousePosition: function(e, dvEv) {
	    //console.log(event);
	    this.x = e.clientX / dvEv;
	    this.y = e.clientY / dvEv;
		}
  }
})