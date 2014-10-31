Package.describe({
  name: 'fuatsengul:leaflet-easybutton',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('fuatsengul:leaflet-easybutton.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('fuatsengul:leaflet-easybutton');
  api.addFiles('fuatsengul:leaflet-easybutton-tests.js');
});
