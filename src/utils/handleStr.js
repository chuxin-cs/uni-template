/**
 * GBK长度计算函数
 * @params {string} str 字符 （目前中文是2个字符 英文和数字是1个）
 * @return {number} 字符串偿付
 */
export function strLength(str) {
    if (!str) return 0;

    let realLength = 0, len = str.length, charCode = -1;
    for (let i = 0; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128) {
            realLength += 1;
        } else {
            realLength += 2;
        }
    }
    return realLength
}
