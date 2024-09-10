function redirectButton() {
  const btn1 = document.getElementById("instagram")
  const btn2 = document.getElementById("facebook")

  btn1.addEventListener("click", () => {
    window.location.replace("https://www.instagram.com/otaviogabrich/")
  })
  btn2.addEventListener("click", () => {
    window.location.replace("https://www.facebook.com/otaviogabrich/")
  })
}

redirectButton()