new Vue({
  el: '#app',
  data: {
    num: 0
  },
  methods: {
    countUp: function() {
      this.num += 1
/*      if( this.num > 3){
		    this.num = 99  
      } */
	    //return this.num;
    }
  }
})