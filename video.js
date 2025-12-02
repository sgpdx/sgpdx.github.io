/*  Loads a specific YouTube video into an iframe
    Tutorial as a base, then mofified (simplified), from:
    https://dev.to/juliafmorgado/automatically-embed-latest-youtube-videos-on-your-website-with-javascript-step-by-step-2i5e
 */

const loadVideo = (iframe) => {
  // Get the video ID from the iframe's data attribute
  const videoId = iframe.getAttribute("video-id");

  if (!videoId) {
    console.error("No video-id attribute found on iframe");
    return;
  }

  // Set the iframe src to the YouTube embed URL
  iframe.setAttribute(
    "src",
    `https://www.youtube.com/embed/${videoId}?controls=1&autoplay=0`
  );
};

// Load the video when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const iframes = document.getElementsByClassName("youtubeEmbed");
  loadVideo(iframes[0]);
});
