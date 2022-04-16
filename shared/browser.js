const useBrowser = url => {
	const browser = utools.ubrowser.goto(url)

	browser.delayClick = (selector, delay = 800) => {
		return browser
			.wait(delay)
			.wait(selector)
			.click(selector)
	}

	return browser
}

module.exports = {
	useBrowser
}
