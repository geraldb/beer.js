define( function(require) {
 'use strict';

     //       require( 'utils' );
  var Api = require( 'beer.api' );
  // todo: check - use Beer.Api or Beer.Service  why? why not??

  var Widget = {};


Widget.create = function( id, tplId, opts ) {

  var $el;
  var renderBrewery;
  var api;

  var defaults = {};
  var settings;

  function init( id, tplId, opts )
  {
    settings = _.extend( {}, defaults, opts );
    
    $el = $( id );

    api = Api.create();

    renderBrewery = _.template( $( tplId ).html() );
  }

  function update( key )
  {
    api.fetchBrewery( key, function( json ) {
        var snippet = renderBrewery( { data: json } );
        $el.html( snippet );
    });
  }

  // call "c'tor/constructor"
  init( id, tplId, opts );

  // return/export public api
  return {
     update: update
  }
} // end fn Widget.create

  return Widget;

}); // end define
