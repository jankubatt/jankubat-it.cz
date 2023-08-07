    const paragraphs = document.getElementsByClassName("bionic");
  
    for (let i = 0; i < paragraphs.length; i++) {
      const words = paragraphs[i].innerHTML.split(" ");
      let formattedText = "";
  
      for (let j = 0; j < words.length; j++) {
        const halfLength = Math.ceil(words[j].length / 2);
        const aTag = paragraphs[i].querySelector(":root > p > a");
  
        // Check if the current word is inside a <button> tag
        const isInsideButton =
          paragraphs[i].querySelectorAll("button").length > 0 &&
          paragraphs[i]
            .querySelectorAll("button")
            .some((button) =>
              button.contains(paragraphs[i].querySelectorAll("b")[j])
            );
  
        // Check if the current word is inside an <li> tag inside an element with the "navbar" class
        const isInsideNavbar =
          paragraphs[i].querySelectorAll(".nav-item a").length > 0 &&
          paragraphs[i]
            .querySelectorAll(".nav-item a")[0]
            .contains(paragraphs[i].querySelectorAll("b")[j]);
  
        // Check if the current word is inside an <a> tag inside a <p> tag
        const formattedWord =
          aTag && aTag.contains(document.querySelector(":root > p > a > " + words[j]))
            ? words[j]
            : words[j].replace(/<\/?[^>]+(>|$)/g, "")
            ? "<span>" +
             "<b class='font-weight-bold'>" +
              words[j].substring(0, halfLength) +
              "</b>" +
              words[j].substring(halfLength)+
              "</span>"
            : words[j];
  
        formattedText += formattedWord + " ";
      }
  
      paragraphs[i].innerHTML = formattedText;
    }