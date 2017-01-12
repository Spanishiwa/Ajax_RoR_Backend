import FollowToggle from './follow_toggle';

document.addEventListener("DOMContentLoaded", () => {
  $("button.follow-toggle").each( (i, btn) => {
    new FollowToggle(btn, {});
  });
});
