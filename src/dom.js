module.exports.checkWebp = function () {
  try {
    return (document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0);
  } catch (err) {
    return false;
  }
};

module.exports.setbBaseFontSizeByClientWidth = () => {
  if (process.client) {
    const baseSize = 16;
    const scale = document.documentElement.clientWidth / 375;
    document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px';
  }
};

module.exports.getUrlParam = () => {
  let qs = document.location.search;
  qs = qs.split("+").join(" ");

  var params = {},
    tokens,
    re = /[?&]?([^=]+)=([^&]*)/g;

  while ((tokens = re.exec(qs))) {
    params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
  }

  return params;
};
  