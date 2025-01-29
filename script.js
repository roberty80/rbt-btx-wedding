// Function to open the camera when the button is clicked
function openCamera() {
  const videoElement = document.getElementById('video');
  const canvasElement = document.getElementById('canvas');
  const context = canvasElement.getContext('2d');

  // Request access to the camera
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      // Assign the stream to the video element
      videoElement.srcObject = stream;

      // Once the video is loaded, set the canvas size to match the video
      videoElement.onloadedmetadata = function() {
        canvasElement.width = videoElement.videoWidth;
        canvasElement.height = videoElement.videoHeight;
      };
    })
    .catch(function (error) {
      console.error('Error accessing the camera: ', error);
      alert('Sorry, we cannot access your camera at the moment.');
    });
}

// Capture the photo from the video stream when needed (you can add a separate button for this)
function capturePhoto() {
  const videoElement = document.getElementById('video');
  const canvasElement = document.getElementById('canvas');
  const context = canvasElement.getContext('2d');

  // Draw the current frame of the video on the canvas
  context.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);

  // Get the image data as a base64 string (you can use this string to upload or display the image)
  const imageData = canvasElement.toDataURL('image/png');
  console.log(imageData); // You can use this to display or upload the photo
}
