console.log("test");

function SidebarExpandCollase() {
  const expandCollapseButton = document.getElementById("expandCollapseButton");
  const sidebarList = document.getElementById("sidebarList");

  expandCollapseButton.addEventListener("click", function (event) {
    if (sidebarList.classList.contains("pf-m-expanded")) {
      sidebarList.classList.add("pf-m-collapsed");
      sidebarList.classList.remove("pf-m-expanded");
    } else if (sidebarList.classList.contains("pf-m-collapsed")) {
      sidebarList.classList.remove("pf-m-collapsed");
      sidebarList.classList.add("pf-m-expanded");
    }
  });
}

SidebarExpandCollase();

function CardExpandCollapseButton() {
  const cardExpandButton = document.getElementById("cardExpandButton");
  const cardExpandButtonIcon = document.getElementById("cardExpandButtonIcon");
  const expandCollapseCardBody = document.getElementById(
    "expandCollapseCardBody"
  );

  cardExpandButton.addEventListener("click", function (event) {
    if (cardExpandButtonIcon.classList.contains("fa-angle-down")) {
      cardExpandButtonIcon.classList.add("fa-angle-right");
      cardExpandButtonIcon.classList.remove("fa-angle-down");
      expandCollapseCardBody.hidden = true;
    } else if (cardExpandButtonIcon.classList.contains("fa-angle-right")) {
      cardExpandButtonIcon.classList.add("fa-angle-down");
      cardExpandButtonIcon.classList.remove("fa-angle-right");
      expandCollapseCardBody.hidden = false;
    }
  });
}
CardExpandCollapseButton();

const confirmationModal = document.getElementById("confirmationModal");

confirmationModal.addEventListener("click", function (event) {
  console.log("confirmationModal");
  if (event.target.localName === "pf-button") {
    const button = event.target;
    confirmationModal.close(button.dataset.action);
  }
});

confirmationModal.addEventListener("close", function (event) {
  if (confirmationModal.returnValue === "confirm") {
    console.log("confirm button clicked");
  } else if (confirmationModal.returnValue === "cancel") {
    console.log("cancel button clicked");
  }
});
