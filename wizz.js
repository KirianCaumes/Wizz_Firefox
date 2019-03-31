console.log("init wizz")

new Audio(browser.runtime.getURL("./sound/wizz.mp3")).play()

document.getElementsByTagName('body')[0]
    .animate(
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