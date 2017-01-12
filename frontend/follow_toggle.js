export default class FollowToggle {
  constructor(el, options) {
    this.$el = $(el);
    this.userId = $(el).data("user-id") || options.userId;
    this.followState = $(el).data("initial-follow-state") || options.followState;

    this.render();
    this.$el.on("click", this.handleClick.bind(this));
  }

  render() {
    switch (this.followState) {
      case "followed":
        this.$el.html("Unfollow!");
        return;
      case "unfollowed":
      this.$el.html("Follow!");
        return;
      default:
        return;
    }
  }

  handleClick(event) {
    event.preventDefault();
    const that = this;
    if (this.followState === "followed") {
      $.ajax({
        url: `/users/${this.userId}/follow`,
        method: "DELETE",
        dataType: "json",
        success: (btn) => {
          that.followState = "unfollowed";
          that.render();
        }
      });
    }
    else {
      $.ajax({
        url: `/users/${this.userId}/follow`,
        dataType: "json",
        method: "POST",
        success: (btn) => {
          that.followState = "followed";
          that.render();
        }
      });
    }
  }
}
