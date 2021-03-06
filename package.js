Package.describe({
  name: 'fuatsengul:leaflet-easybutton',
  summary: 'EasyButton implementing to Meteor ',
  version: '1.0.5',
  documentation: null,
  git: 'https://github.com/fuatsengul/fuatsengul-leaflet-easybutton'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('fuatsengul:leaflet-easybutton.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('fuatsengul:leaflet-easybutton');
});
