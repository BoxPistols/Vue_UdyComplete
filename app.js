new Vue({
  el: '#app',
  data: {
    mg: 'Hello',
    nm: 3,
    ok: true,
    url: 'https://google.com',
    att: 'href',
    urlTw: 'https://twitter.com',
    idNum: 55,
  },
  methods: {
    sayHi: function() {
      // return 'Hi' + "x" + 10;
      this.mg = 'jjjjj'
      return this.mg;
    }
  }
})