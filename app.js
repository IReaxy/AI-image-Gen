const API_KEY = "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" //put the key here
const submitIcon = document.querySelector("#submit-icon");
const inputElement = document.querySelector("input")
const imageSection = document.querySelector(".image-section")


const getImages = async() => {

    const options = {
        method: "POST"
        headers: {
            "Authorization": Bearer $ { API_KEY },
            "content-Type": "application/json"

        },
        body: JSON.stringfy({

            "prompt": inputElement.value,
            "n": 4,
            "size": "256x256 "
        })
    }
}

try {

    const response = await fetch('https://api.openai.com/v1/images/generations', options)
    const data = await response.json()
    data ? .data.array.forEach(imageObject => {
        constImageContainer = document.createElement('div')
        ImageContainer.classList.add('image-container')
        const imageElement = document.createElement("img")
        imageElement.setAttribute("src", imagejet.url)
        ImageContainer.append(imageElement)
        imageSection.append(ImageContainer)

    });
} catch (error) {
    console.error(error)

}


}


submitIcon.addEventListener('click', getImages)