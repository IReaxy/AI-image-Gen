const API_KEY = "" //put the key here
const submitIcon = document.querySelector("#submit-icon");
const inputElement = document.querySelector("input")
const imageSection = document.querySelector(".image-section")


const getImages = async() => {

    const options = {
        method: "POST",
        Headers: {
            "Authorization": Bearer $ { API_KEY },
            "Content-Type"
            "application/json"

        },
        body: JSON.stringify({

            prompt: inputElement.value,
            n: 4,
            size: "256 x256 "
        })
    }
}

try {

    const response = await fetch("", options)
    const data = await response.json()
    data ? .data.array.forEach(imageObject => {
        const imageContainer = document.createElement("div")
        imageContainer.classList.add("image-container")
        const imageElement = document.createElement("img")
        imageElement.setAttribute("src", imagejet.url)
        imageContainer.append(imageElement)
        imageSection.append(imageContainer)

    });
} catch (error) {
    console.error(error)

}


}


submitIcon.addEventListener('click', getImages)