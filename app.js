
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
        rawHtml: `<h1 style="color: lightseagreen;">Oh Yeahhhhh</h1>`,
        href: 'href',
        link: {
            attributeName: 'href',
            url: 'https://www.google.com'
        }
    },
    
    computed: {
        returnReverseMessage: function () {
            return this.name.split('').reverse().join('')
        },
    },
    methods: {
        reverseMessage: function() {
            console.log(this);
            debugger;
            this.name = this.returnReverseMessage();
        },
        toggleVisibility: function() {
            this.visible = !this.visible;
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
