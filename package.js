Package.describe({
  name: 'hormiga:persistent-session',
  version: '0.4.6',
  // Brief, one-line summary of the package.
  summary: 'Persistently store Session data on the client',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Hormiga-Meteor/meteor-persistent-session',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom(['0.9.1','1.12','2.3','2.8.0']);
  api.use(['jquery', 'amplify', 'tracker', 'reactive-dict', 'session', 'underscore', 'ejson']);
  // If `accounts-base` is loaded, we have to make sure that this package is
  // loaded after `accounts-base` is, so we specify `weak: true` here
  api.use('accounts-base', { weak: true });
  api.addFiles('lib/persistent_session.js', 'client');
  api.export('PersistentSession', ['client']);
});

Package.onTest(function (api) {
  api.use("tinytest");
  api.use("amplify");
  api.use("random");
  api.use("underscore");
  api.use("reactive-dict"); // we only need this exposed for testing
  api.use("hormiga:persistent-session");

  // expose for derping around in console
  api.export('PersistentSession', ['client']);
  api.export('ReactiveDict', ['client']);

  api.addFiles("tests/client/persistent_session.js", "client");
});