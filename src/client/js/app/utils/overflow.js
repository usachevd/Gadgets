export let overflow = {
	on: () => {
        document.documentElement.classList.add('is-overflow');
	},
	off: () => {
        document.documentElement.classList.remove('is-overflow');
	}
}
