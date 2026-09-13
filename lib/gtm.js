export const GTM_ID = 'GTM-T45Z2XRQ'

export const ensureGtag = () => {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  if (typeof window.gtag !== 'function') {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments)
    }
  }
}

/** Consent Mode v2 : défaut refusé, sauf choix déjà enregistré. */
export const GTM_CONSENT_SCRIPT = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
(function () {
  var analytics = false;
  var marketing = false;
  try {
    var raw = localStorage.getItem('cookieConsent');
    if (raw) {
      var consent = JSON.parse(raw);
      analytics = consent.analytics === true;
      marketing = consent.marketing === true;
    }
  } catch (e) {}
  gtag('consent', 'default', {
    ad_storage: marketing ? 'granted' : 'denied',
    ad_user_data: marketing ? 'granted' : 'denied',
    ad_personalization: marketing ? 'granted' : 'denied',
    analytics_storage: analytics ? 'granted' : 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
    wait_for_update: 500
  });
})();
`.trim()

export const GTM_LOADER_SCRIPT = `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');
`.trim()
