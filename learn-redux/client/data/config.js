import Raven from 'raven-js';

const sentry_key = 'a70f9fdb4b3a4491bb7c72d433c330d4';
const sentry_app = '292677';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
