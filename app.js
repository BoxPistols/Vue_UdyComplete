new Vue({
  el: '#app',
  data: {
    mg: 'Hello',
    nm: 3,
    ok: true,
    url: 'https://google.com'
  },
  methods: {
    sayHi: function() {
      // return 'Hi' + "x" + 10;
      this.mg = 'jjjjj'
      return this.mg;
    }
  }
})