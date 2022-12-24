// When a card a tag link is clicked, scroll to the corresponding section
// the href attribute of the tag link is the id of the section to scroll to

// Get all the tag links
var tagLinks = document.querySelectorAll(".tag-link");

// Loop through the tag links
for (var i = 0; i < tagLinks.length; i++) {
  // Add a click event listener to each tag link
  tagLinks[i].addEventListener("click", function (event) {
    // Prevent the default action of the event
    event.preventDefault();

    // Get the href attribute of the tag link
    var id = this.getAttribute("href");

    // Scroll to the section with the id
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  });
}
