function changeVideo(txt, index){
    const video = document.getElementById("lol")
    const container = document.getElementsByClassName("main__container--video")
    const text = document.getElementsByClassName("subtittle")

    console.log(video.source)
    console.log(container[index])
    console.log(container[index].src)
    console.log(text[0].innerHTML)

    var oldVideo = video.src
    var oldText = text[0].innerHTML
    var actualText = text[index+1   ].innerHTML

    video.src = container[index].src
    text[0].innerHTML = actualText
    text[index+1].innerHTML = oldText
    container[index].src = oldVideo
}