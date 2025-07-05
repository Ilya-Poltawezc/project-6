const rootSelector = '[data-js-video-player]'

class VideoPlayer {
    selectos = {
        root: rootSelector,
        video: '[data-js-video-player-video]',
        panel: '[data-js-video-player-panel]',
        playButton: '[data-js-video-player-play-button]',
    }

    stateClasses = {
        isActive: 'is-active',
    }

    constructor(rootElement) {
        this.rootElement = rootElement
        this.videoElement = this.rootElement.querySelector(this.selectos.video)
        this.panelElement = this.rootElement.querySelector(this.selectos.panel)
        this.playButtonElement = this.rootElement.querySelector(this.selectos.playButton)
        this.bindEvent()
    }

    onPlayButtonClick = () => {
        this.videoElement.play()
        this.videoElement.controls = true
        this.panelElement.classList.remove(this.stateClasses.isActive)
    }

    onVideoPause = () => {
        this.videoElement.controls = false
        this.panelElement.classList.add(this.stateClasses.isActive)
    }

    bindEvent() {
        this.playButtonElement.addEventListener('click', this.onPlayButtonClick)
        this.videoElement.addEventListener('pause', this.onVideoPause)
    }
}

class VideoPlayerCollection {
     constructor() {
        this.init()
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((element) => {
            new VideoPlayer(element)
        })
    }
}

export default VideoPlayerCollection