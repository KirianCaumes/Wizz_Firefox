console.log("init wizz")

var audio = new Audio(browser.runtime.getURL("/sound/wizz.mp3")).play()

var body = document.getElementsByTagName('html')[0]

body.style.overflow = "hidden"
setTimeout(() => { body.style.overflow = "auto" }, 550)

body.animate(
    [
        { transform: 'translateX(20px)' },
        { transform: 'translateY(20px)' },
        { transform: 'translateX(-40px)' },
        { transform: 'translateY(-40px)' },
        { transform: 'translateX(20px)' },
        { transform: 'translateY(20px)' }
    ],
    {
        duration: 240,
        iterations: 2,
        easing: "linear"
    }
)
