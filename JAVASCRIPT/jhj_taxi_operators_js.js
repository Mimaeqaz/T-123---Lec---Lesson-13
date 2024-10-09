document.getElementById("toggle-btn").addEventListener("click", function() {
    var sidebar = document.getElementById("sidebar");
    var main = document.getElementById("main");

    sidebar.classList.toggle("collapsed");
    main.classList.toggle("collapsed");
});

function updateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('time').textContent = `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);
updateTime();

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    grabCursor: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });




function validateForm() {
  // Get the input fields
  var name = document.getElementById("name").value;
  var licenseNumber = document.getElementById("licenseNumber").value;
  var contactNumber = document.getElementById("contactNumber").value;
  var email = document.getElementById("email").value;
  var aboutMe = document.getElementById("aboutMe").value;

  // Check if the fields are empty
  if (name == "" || licenseNumber == "" || contactNumber == "" || email == "" || aboutMe == "") {
    alert("Please fill in all the fields.");
    return false;
  }

  // Check if the license number matches the pattern
  var licensePattern = /^[A-Za-z0-9]{6,12}$/;
  if (!licensePattern.test(licenseNumber)) {
    alert("License number should be 6-12 alphanumeric characters.");
    return false;
  }

  // Check if the contact number matches the pattern
  var contactPattern = /^[0-9]{10,12}$/;
  if (!contactPattern.test(contactNumber)) {
    alert("Contact number should be 10-12 digits.");
    return false;
  }

  // Check if the email is valid
  var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    alert("Invalid email address.");
    return false;
  }

  // If all checks pass, submit the form
  document.getElementById("addDriverForm").submit();
}