/**
 * 基础
 */

/**
 * 设置桥梁
 * @param {Function} invoke 回调
 */
const setupBridge = invoke => {
	window.readConfig = invoke
}

module.exports = {
	setupBridge
}
