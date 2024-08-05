const translated = {
  //'/test': '/api/test',
};
function reroute({ url }) {
  if (url.pathname in translated) {
    const translatedUrl = translated[url.pathname];
    console.log(`url reroute : [${url.pathname}] <--- [${translatedUrl}]`);
    return translatedUrl;
  }
}

export { reroute };
//# sourceMappingURL=hooks-BAlvLw0d.js.map
