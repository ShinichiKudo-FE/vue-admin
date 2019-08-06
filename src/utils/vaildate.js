/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
    const valid_map = ['admin', 'editor']
    return valid_map.indexOf(str.trim()) >= 0
}

// 检查路径是否正确
export function isExternal(path) {
    return /^(https?:|mailto:|tel:)/.test(path)
}
