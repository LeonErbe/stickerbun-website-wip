// highlights current tab in nav bar
new function currentPage() {
	$(".nav-link").each(function() {
		if(this.href == window.location.href) {
			this.classList.add("link-current");
			this.parentNode.classList.add("item-current");
		}
	});
}
