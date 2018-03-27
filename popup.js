chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
  chrome.tabs.captureVisibleTab(
    null,
    { format: "png", quality: 100 },
    dataURI => {
      let err = chrome.runtime.lastError;
      if (err) {
        return _log(err.message);
      }
      _inNewTab(dataURI);
    }
  );
});

function _inNewTab(dataURI) {
  var w = window.open("about:blank", "_blank");
  var html = w.document.documentElement;
  var body = w.document.body;

  html.style.margin = 0;
  html.style.padding = 0;
  body.style.margin = 0;
  body.style.padding = 0;

  var img = w.document.createElement("img");
  img.src = dataURI;
  img.style.maxWidth = "100%";
  img.alt = "captured image";
  img.addEventListener("click", function() {
    this.style.maxWidth = this.style.maxWidth === "100%" ? "" : "100%";
  });
  body.appendChild(img);
}

function _log(msg) {
  var elt = document.createElement("p");
  elt.innerText = msg;
  document.getElementById("msgs").appendChild(elt);
}
