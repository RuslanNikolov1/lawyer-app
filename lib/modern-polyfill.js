// Minimal polyfills for Next.js modern browser targets.
// Drops legacy Baseline polyfills flagged by Lighthouse; keeps URL.canParse for Safari 16.4.
if (!('canParse' in URL)) {
  URL.canParse = function (url, base) {
    try {
      return !!new URL(url, base)
    } catch {
      return false
    }
  }
}
