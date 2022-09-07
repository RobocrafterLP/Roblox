const test2 = document.getElementsByClassName("Test2")

const GetImage = (e) => {
    console.log(e)
    const xhr = new XMLHttpRequest();
    xhr.open('Get','https://thumbnails.roblox.com/v1/places/gameicons?placeIds=8554378337&returnPolicy=PlaceHolder&size=512x512&format=Png&isCircular=false');
    
    xhr.onload = () => {
        console.log(xhr.response)
    }
    
    xhr.send();
}

GetImage(1)