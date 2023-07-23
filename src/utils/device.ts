export const isMobileDevice = () => {
	return /android|iphone|kindle|ipad/i.test(navigator.userAgent);
};
