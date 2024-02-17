// lib/initAnalytics.js

export const initAnalytics = () => {
  // Ensure this runs in the browser only
  if (typeof window === "undefined") return;

  // Prevent double-initialization
  if (window.analytics && window.analytics.initialize) return;

  window.analytics = window.analytics || [];
  window.analytics.methods = [
    "trackSubmit",
    "trackClick",
    "trackLink",
    "trackForm",
    "pageview",
    "identify",
    "reset",
    "group",
    "track",
    "ready",
    "alias",
    "debug",
    "page",
    "once",
    "off",
    "on",
    "addSourceMiddleware",
    "addIntegrationMiddleware",
    "setAnonymousId",
    "addDestinationMiddleware",
  ];

  window.analytics.factory = function (method) {
    return function () {
      var args = Array.prototype.slice.call(arguments);
      args.unshift(method);
      window.analytics.push(args);
      return window.analytics;
    };
  };

  for (var i = 0; i < window.analytics.methods.length; i++) {
    var key = window.analytics.methods[i];
    window.analytics[key] = window.analytics.factory(key);
  }

  window.analytics.load = function (key, options) {
    if (document.getElementById("analytics-js")) return;

    var script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "analytics-js";
    script.async = true;
    // script.src = `https://cdp.customer.io/v1/analytics-js/snippet/${key}/analytics.min.js`;
    script.src = `https://reverse-proxy-orpin.vercel.app/v1/analytics-js/snippet/${key}/analytics.min.js`;

    var firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode.insertBefore(script, firstScript);
    window.analytics._writeKey = key;
    window.analytics._loadOptions = options;
  };

  // Replace 'YOUR_WRITE_KEY' with your actual Analytics write key
  window.analytics.SNIPPET_VERSION = "4.15.3";
  window.analytics.load("949f3bcaac1fc011baf6", {
    integrations: {
      "Customer.io Data Pipelines": {
        apiHost: "reverse-proxy-orpin.vercel.app/v1",
      },
    },
  });
  window.analytics.page();
};

export const handleIdentifyClick = () => {
  if (typeof window !== "undefined" && window.analytics) {
    window.analytics.identify("foo@bar.com", {
      /* your data here */
    });
  }
};

const isAnalyticsAvailable = () =>
  typeof window !== "undefined" && window.analytics;

export const trackPageView = (page) => {
  if (isAnalyticsAvailable()) {
    window.analytics.page(page);
  }
};

export const trackEvent = (event, properties = {}) => {
  if (isAnalyticsAvailable()) {
    window.analytics.track(event, properties);
  }
};

export const identifyUser = (userId, properties = {}) => {
  if (isAnalyticsAvailable()) {
    window.analytics.identify(userId, properties);
  }
};
