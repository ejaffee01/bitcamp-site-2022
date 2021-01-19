/**
 * Used for Bootstrap popovers:
 *  (https://getbootstrap.com/docs/5.0/components/popovers/)
 */

const popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);

const popoverList = popoverTriggerList.map(
  (popoverTriggerEl) =>
    new bootstrap.Popover(popoverTriggerEl, {
      placement: (_, trigger) => (trigger.offsetLeft > 320 ? "left" : "top"),
      trigger: "manual",
    })
);

// Currently-selected popover
let activePopover;

// Show a single popover when its trigger gains focus
popoverList.forEach((popover) => {
  popover._element.addEventListener("focus", (event) => {
    if (activePopover) {
      activePopover.hide();
    }

    popover.show();
    activePopover = popover;
  });
});

// Hide a popover if you lose focus of the trigger or the popover itself
document.querySelector("body").addEventListener("mousedown", (event) => {
  if (
    activePopover &&
    (doesContain(activePopover._element, event.target) ||
      !doesContain(activePopover.tip, event.target))
  ) {
    activePopover.hide();
    activePopover._element.blur();
    activePopover = null;
  }
});

// Checks if the parent contains (or is itself) the target element
function doesContain(parent, targetElem) {
  return parent && (parent === targetElem || parent.contains(targetElem));
}
