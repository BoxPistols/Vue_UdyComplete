new Vue({
  el: '#app',
  data: {
    x: 0,
    y: 0,
  },
  methods: {
    mousePosition: function(e) {
	    //console.log(event);
	    this.x = e.clientX;
	    this.y = e.clientY;
		}
  }
})