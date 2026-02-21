export function handleNavClick(e: MouseEvent, href: string, callback?: () => void) {
	e.preventDefault();
	const target = document.querySelector(href);
	if (target) {
		target.scrollIntoView({ behavior: 'smooth' });
		callback?.();
	}
}

export function scrollToTop() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
}
