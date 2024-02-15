export function extractVideoId(url: string) {
  var match = url.match(/(?:youtu\.be\/|\/embed\/|\/v\/|\/watch\?v=|&v=|\/videos\/)([^"&?\/\s]{11})/);
  return match && match[1];
}
