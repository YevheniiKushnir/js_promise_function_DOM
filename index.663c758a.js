function e(e,t){return new Promise(function(n){e.addEventListener(t,function(){n("It was ".concat(t," on the element: ").concat(e.nodeName,", id: ").concat(e.id))})})}var t=function(e){var t=document.createElement("div");t.classList.add("message"),t.textContent=e,document.body.appendChild(t)},n=document.getElementById("login"),c=document.getElementById("password"),d=document.getElementById("submit");e(n,"click").then(t),e(c,"click").then(t),e(d,"click").then(t),e(n,"input").then(t),e(c,"input").then(t),e(n,"blur").then(t),e(c,"blur").then(t),e(d,"blur").then(t);
//# sourceMappingURL=index.663c758a.js.map
