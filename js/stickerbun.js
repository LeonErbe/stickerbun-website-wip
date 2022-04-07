// highlights current tab in nav bar
new function currentPage() {
	let currentUrl = window.location.href;

	$(".nav-link").each(function() {
		if(currentUrl.indexOf(this.href) >= 0) {
			this.classList.add("link-current");
			this.parentNode.classList.add("item-current");
		}
	});
}
