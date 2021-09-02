
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo}}</li>'
})

function scrollToBottom (id) {
    window.scrollTo(0,document.body.scrollHeight);
}

const vm = new Vue({

    el: '#app',
    data: {
        name: 'Hello Sunny!',
        color: 'red',
        visible: false,
        todos: ['Eat', 'Sleep', 'Rave', 'Repeat'],
        firstName: 'Jaskanwal',
        lastName: 'Singh',
        rawHtml: `<h1 style="color: lightseagreen;">Oh Yeahhhhh</h1>`,
        href: 'href',
        activeClass: 'active',
        errorClass: 'text-danger',
        sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]],
        numbers: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
        link: {
            attributeName: 'href',
            url: 'https://www.google.com'
        }
    },
    
    computed: {
        returnReverseMessage: function () {
            return this.name.split('').reverse().join('')
        },
        evenNumbers: function () {
            return this.numbers.filter(function (number) {
              return number % 2 === 0
            })
        },
        fullName: {
            // getter
            get: function () {
              return this.firstName + ' ' + this.lastName
            },
            // setter
            set: function (newValue) {
              var names = newValue.split(' ')
              this.firstName = names[0]
              this.lastName = names[names.length - 1]
            }
        }
    },
    methods: {
        even: function (numbers) {
            return numbers.filter(number => number % 2 == 0)
        },
        reverseMessage: function() {
            this.name = this.name.split('').reverse().join('');
        },
        toggleVisibility: function() {
            this.visible = !this.visible;
        },
        changeName: function() {
            this.fullName = 'Gaitri Bharadwaj'
            console.log(this.firstName);
        }
    },
    // created: function() {
    //     console.log('The Instance is created');
    //     debugger;
    // },
    // beforeCreate: function() {
    //     console.log('Before Created ');
    //     debugger;
    // },
    // beforeMount: function() {
    //     console.log('Before Mount called');
    //     debugger;
    // },
    // beforeMount: function() {
    //     console.log('Before Mount called');
    //     debugger;
    // },
    mounted: function() {
        setTimeout(() => {
            scrollToBottom('app')
        }, 200);
    },
    // beforeUpdate: function() {
    //     console.log('Before Update called');
    //     debugger;
    // },
    // updated: function() {
    //     console.log('updated called');
    //     debugger;
    // },
    // beforeDestroy: function() {
    //     console.log('before destroy called');
    //     debugger;
    // },
    // destroyed: function() {
    //     console.log('destroyed called');
    //     debugger;
    // },
})

vm.$watch('name', (oldVal, newVal) => {
    console.log(oldVal, newVal);
})
