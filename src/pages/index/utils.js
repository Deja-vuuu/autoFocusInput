
/**
 * [isTelPhone 判断手机格式是否正确]
 *
 * @param   {String}    str      [手机号]
 * @returns {Boolean}            [手机号格式正确返回true，错误返回false]
 */
const isTelPhone = (str) => {
  let reg = /^(1[3456789]\d{9})$/;
  return reg.test(str);
}

/**
 * [encryMobile 将手机号中间四位加密]
 *
 * @param   {String}    str     [手机号]
 * @returns {String}            [加密后的手机号]
 */
const encryMobile = (str)=> {
  // 非手机号照原字符串输出
  if (!isTelPhone(str)) {
    return str;
  }
  return str.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
}

export {
  encryMobile,
}
