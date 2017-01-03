let slideIndex = 1
const loc = window.location.pathname
const dir = loc.substring(0, loc.lastIndexOf('/'))

const users = [
    { name: 'onead', pic: dir + '/images/' + 'onead.jpg' },
    { name: '朱修慶(Shuu)', pic: dir + '/images/' + 'shuu2.jpg' },
    { name: '朱修慶(Shuu)', pic: dir + '/images/' + 'shuu.jpg' },
    { name: '謝清洲(Allen)', pic: dir + '/images/' + 'allen.jpg' },
    { name: '苗延豪(Howard)', pic: dir + '/images/' + 'howie.jpg' },
    { name: '鄭勝宇(Kellen)', pic: dir + '/images/' + 'kellen2.jpg' },
    { name: '徐敬堯(Tony)', pic: dir + '/images/' + 'tony.jpg' },
    { name: '黃宜雯(Yiwen)', pic: dir + '/images/' + 'yiwen.jpg' },
    { name: '楊伍隆(Roger)', pic: dir + '/images/' + 'roger.jpg' },
    { name: '葉怡鎮(Ethan)', pic: dir + '/images/' + 'ethan.jpg' },
    { name: '黃啟倫(Go)', pic: dir + '/images/' + 'go.jpg' },
    { name: '劉逸伶(Serine)', pic: dir + '/images/' + 'serine-1.jpg' },
    { name: 'Sean Pan', pic: dir + '/images/' + 'sean.jpg' },
    { name: 'Totti', pic: dir + '/images/' + 'totti-1.jpg' }
]

const imgs = document.getElementsByClassName("img")
const html = document.querySelector("html");
const audio_go = document.querySelector(`audio[data-key="pokemon-go"]`)
const audio_happy = document.querySelector(`audio[data-key="happy"]`)
const audio_john_cena = document.querySelector(`audio[data-key="john_cena"]`)

var randomNumber = Math.floor((Math.random() * 13) + 2)
const selector = [12, 2]
const color = ['red', 'white']

new Vue({
    el: '#content',
    data: {
        users: users,
        random: '',
        stop: true
    },
    mounted: function() {
        this.showDivs(1)
    },
    methods: {
        startRandom: function() {
            if (this.stop == true) {
                vm = this
                this.startAudio()
                document.getElementsByClassName("btn-info")[0].innerHTML = 'TOOPO!'
                this.stop = false
                this.random = setInterval(function() { vm.showDivs(vm.randomNumber()) }, 230)
            }
        },
        stopRandom: function() {
            vm = this
                if (selector.length != 0) {
                    slideIndex = selector.pop()
                    vm.showDivs(slideIndex)
                    if (slideIndex == 12) {
                        audio_happy.play()
                    } else if (slideIndex == 2) {
                        //audio_john_cena.play()
                    }
                }
            document.getElementsByClassName("btn-info")[0].innerHTML = users[slideIndex - 1].name
            imgs[slideIndex - 1].style['border'] = "5px solid red"
            audio_go.pause()
                // audio_go.currentTime = 0
            this.stop = true
            audio_happy.play()
            audio_happy.currentTime = 0 //每次停止random時，讓audio_happy時間重製.
            clearInterval(this.random)
        },
        showDivs: function(n) {
            if (n > imgs.length) { slideIndex = 1 }

            for (i = 0; i < imgs.length; i++) {
                imgs[i].style.display = "none"
            }

            imgs[slideIndex - 1].classList.add("fadeIn")
            imgs[slideIndex - 1].style.display = "block"
        },
        randomNumber: function() {
            while (randomNumber == slideIndex) {
                randomNumber = Math.floor((Math.random() * 12) + 3)
            }
            slideIndex = randomNumber
        },
        startAudio: function() {
            audio_go.play()
            audio_happy.pause()
            audio_john_cena.pause()
        }
    }
})
