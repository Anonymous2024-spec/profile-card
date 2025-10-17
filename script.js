// Function to update the current time
function updateTime() {
  // Get the current time in milliseconds
  const currentTime = Date.now();

  // Find the time element in the HTML
  const timeElement = document.getElementById("current-time");

  // Update the content of the time element
  timeElement.textContent = currentTime;
}

// Update the time when the page loads
updateTime();

// Optional: Update the time every second (1000 milliseconds)
setInterval(updateTime, 1000);

// ========================================
// IMAGE UPLOAD FUNCTIONALITY
// ========================================

// Get the elements
const avatarImage = document.getElementById("user-avatar");
const avatarUpload = document.getElementById("avatar-upload");
const uploadBtn = document.getElementById("upload-btn");

// When the "Change Avatar" button is clicked
uploadBtn.addEventListener("click", function () {
  // Trigger the hidden file input
  avatarUpload.click();
});

// When a file is selected
avatarUpload.addEventListener("change", function (event) {
  // Get the selected file
  const file = event.target.files[0];

  // Make sure a file was selected
  if (file) {
    // Check if it's an image
    if (file.type.startsWith("image/")) {
      // Create a FileReader to read the image
      const reader = new FileReader();

      // When the file is loaded
      reader.onload = function (e) {
        // Update the avatar image src
        avatarImage.src = e.target.result;
      };

      // Read the file as a data URL
      reader.readAsDataURL(file);
    } else {
      // If it's not an image, show an error
      alert("Please select an image file (jpg, png, gif, etc.)");
    }
  }
});
