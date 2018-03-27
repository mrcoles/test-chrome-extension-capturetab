
Extremely simple extension to capture visible tab
=================================================

Capture logic is in popup.js.

Uses `chrome.tabs.captureVisibleTab(..., { format: "png", quality: 100 }, ...)` to generate a dataURI and open it in a new tab.

Note: if you refresh the new tab, then your image will disappear.
