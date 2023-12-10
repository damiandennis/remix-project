const domains = {
  'remix-alpha.ethereum.org': 27,
  'remix-beta.ethereum.org': 25,
  'remix.ethereum.org': 23,
  '6fd22d6fe5549ad4c4d8fd3ca0b7816b.mod': 35 // remix desktop
}

const domainsSecondaryTracker = {
  'remix-alpha.ethereum.org': 27,
  'remix-beta.ethereum.org': 25,
  'remix.ethereum.org': 23,
  '6fd22d6fe5549ad4c4d8fd3ca0b7816b.mod': 35 // remix desktop
}

if (domains[window.location.hostname]) {
  var _paq = window._paq = window._paq || []
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(["setExcludedQueryParams", ["code","gist"]]);
  _paq.push(["setExcludedReferrers", ["etherscan.io"]]);
  _paq.push(['enableJSErrorTracking']);
  // require user tracking consent before processing data
  _paq.push(['requireConsent']);
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  _paq.push(['enableHeartBeatTimer']);
  if (!window.localStorage.getItem('config-v0.8:.remix.config') ||
    (window.localStorage.getItem('config-v0.8:.remix.config') && !window.localStorage.getItem('config-v0.8:.remix.config').includes('settings/matomo-analytics'))) {
    _paq.push(['optUserOut'])

  } else {
    _paq.push(['forgetUserOptOut'])
    // user has given consent to process their data
    _paq.push(['setConsentGiven'])
  }
  (function () {
    var u = "https://ethereumfoundation.matomo.cloud/";
    _paq.push(['setTrackerUrl', u + 'matomo.php']);
    _paq.push(['setSiteId', domains[window.location.hostname]]);
    var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
    g.async = true; g.src = '//cdn.matomo.cloud/ethereumfoundation.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
  })()
}

function isElectron() {
  // Renderer process
  if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
    return true
  }

  // Main process
  if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
    return true
  }

  // Detect the user agent when the `nodeIntegration` option is set to false
  if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
    return true
  }

  return false
}

const versionUrl = 'assets/version.json'
fetch(versionUrl, { cache: "no-store" }).then(response => {
  response.text().then(function (data) {
    const version = JSON.parse(data);
    console.log(`Loading Remix ${version.version}`);
  });
});
