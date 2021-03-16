var obj = new Vue({
    el: '#obj',
    data:{
        title: `Hello i'm VeuJs`
    },
    methods: {
      changeTitle:(event) => {
        this.title = event.target.value;
      }  
    },
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})

//VueJs la tao ra mot doi tuong va quan li doi tuong do 
