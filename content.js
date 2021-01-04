var titleElement = document.getElementById("itemTitle");
var title = titleElement.innerHTML.split("</span>")[1];
var urlFriendlyTitle = encodeURIComponent(title.replaceAll(",", ""));
var urlOngoing = "https://www.ebay.fr/sh/lst/active?catType=storeCategories&q_field1=title&q_value1=" + urlFriendlyTitle + "&action=search";
var urlDone = "https://www.ebay.fr/sh/ord/?filter=status%3AALL_ORDERS&search=itemtitle%3A" + urlFriendlyTitle;
var ongoingButton = document.createElement("a");
ongoingButton.href = urlOngoing;
ongoingButton.style.padding = "3px 3px";
ongoingButton.style.marginLeft = "3px";
ongoingButton.textContent = "En cours"
ongoingButton.style.backgroundColor = "blue";
ongoingButton.style.color = "white";
titleElement.parentNode.appendChild(ongoingButton);
var doneButton = document.createElement("a");
doneButton.href = urlDone;
doneButton.style.padding = "3px 3px";
doneButton.style.marginLeft = "3px";
doneButton.textContent = "Fini"
doneButton.style.backgroundColor = "blue";
doneButton.style.color = "white";
titleElement.parentNode.appendChild(doneButton);