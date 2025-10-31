Package.describe({
  name: 'jessedev:persistent-session',
  version: '1.0.2',
  summary: 'Persistently store Session data on the client',
  git: 'https://github.com/Jessedev1/meteor-persistent-session',
  documentation: 'README.md'
});

Package.onUse(function(api) {
	Npm.depends({
		'amplifyjs': '1.1.2-beta.2'
	});

	api.use(['jquery', 'tracker@1.3.4', 'reactive-dict@1.3.2', 'session@1.2.2', 'underscore@1.6.4', 'ejson@1.1.5']);
	api.use('accounts-base@3.1.2', { weak: true });
	api.addFiles([
		'lib/amplify.store.min.js',
		'lib/persistent_session.js'
	], 'client');
	api.export('PersistentSession', ['client']);
});

Package.onTest(function (api) {
  api.use("tinytest@1.3.2");
  api.use("random@1.2.2");
  api.use("underscore@1.6.4");
  api.use("reactive-dict@1.3.2"); // we only need this exposed for testing
  api.use("jessedev:persistent-session");

  // expose for derping around in console
  api.export('PersistentSession', ['client']);
  api.export('ReactiveDict', ['client']);

  api.addFiles("tests/client/persistent_session.js", "client");
});
