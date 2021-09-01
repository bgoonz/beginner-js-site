! function ( e ) {
  function t( r ) {
    if ( n[ r ] ) return n[ r ].exports;
    var o = n[ r ] = {
      exports: {},
      id: r,
      loaded: !1
    };
    return e[ r ].call( o.exports, o, o.exports, t ), o.loaded = !0, o.exports
  }
  var n = {};
  return t.m = e, t.c = n, t.p = "", t( 0 )
}( [ function ( e, t, n ) {
  ( function ( e ) {
    "use strict";

    function t( e ) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function r( e ) {
      var t = e.forward;
      t()
    }

    function o( e ) {
      var t = e.back;
      t()
    }

    function i( e ) {
      e.use( n( 505 ), "ascii", {
        render: function ( e, t ) {
          var n = e[ t ];
          return 1 === n.nesting ? '<div aria-hidden="true" class="ascii-art">' : "</div>"
        }
      } )
    }
    var a = n( 196 ),
      s = n( 481 ),
      l = t( s ),
      u = n( 489 ),
      c = t( u ),
      f = n( 490 ),
      p = t( f ),
      d = n( 492 ),
      h = t( d ),
      v = n( 494 ),
      g = t( v ),
      m = n( 495 ),
      y = t( m ),
      b = n( 496 ),
      x = t( b ),
      w = n( 497 ),
      _ = t( w ),
      C = n( 96 ),
      k = t( C ),
      E = n( 501 ),
      S = t( E );
    ( 0, a.use )( p.default, {
      left: o,
      right: r,
      "alt+pageup": o,
      "alt+pagedown": r
    } ), ( 0, a.use )( h.default ), ( 0, a.use )( g.default ), ( 0, a.use )( y.default ), ( 0, a.use )( S.default, function ( e, t ) {
      switch ( e ) {
        case "comparison":
          return k.default.createElement( _.default, {
            examples: JSON.parse( t )
          } )
      }
    } ), ( 0, a.present )( {
      masterLayout: l.default,
      slideLayout: c.default,
      references: x.default,
      slides: e,
      "markdown-converter": i
    } )
  } ).call( t, n( 1 ) )
}, function ( e, t, n ) {
  "use strict";
  e.exports = [ n( 2 ), n( 389 ), n( 390 ), n( 391 ), n( 398 ), n( 449 ), n( 450 ), n( 451 ), n( 452 ), n( 453 ), n( 454 ), n( 455 ), n( 456 ), n( 457 ), n( 458 ), n( 459 ), n( 460 ), n( 461 ), n( 462 ), n( 463 ), n( 464 ), n( 465 ), n( 466 ), n( 467 ), n( 468 ), n( 469 ), n( 470 ), n( 471 ), n( 472 ), n( 473 ), n( 474 ), n( 475 ), n( 476 ), n( 477 ), n( 478 ), n( 479 ), n( 480 ) ]
}, function ( e, t, n ) {
  var r = n( 3 );
  r = r ? r.default || r : r;
  var o = n( 194 );
  o = o ? o.default || o : o, e.exports = {
    options: {
      title: "JavaScript Basics",
      toc: "Title",
      chapter: "Intro",
      layout: "Center",
      style: ".exerslide-slide .Center-wrapper {\n  text-align: left;\n}\n.exerslide-slide h1 {\n  color: #444;\n  font-size: 400%;\n  margin-bottom: 50px;\n  text-align: center;\n}\n",
      scale: {
        content_width: 39,
        column_width: .6
      }
    },
    content: "A quick introduction to basic and important concepts of JavaScript\n\nUse the arrow keys (**&larr;, &rarr;**) to navigate through the page.\n\nYou should use Google Chrome and make yourself\nfamiliar with the [developer tools][], especially with the console.\nYou will need it for the exercises.\n\n---\n\n## Contribute\n\nFound a problem with style or content? Or do you have suggestions for improving\nthe content?  Please [file an issue on GitHub][jsbasics-issues].\n",
    pathHash: "c3b409b7b0d6295740fe55bc9bff4eb0",
    contentConverter: r,
    layout: o
  }
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function o( e ) {
    var t = e.references,
      n = {};
    for ( var r in t ) {
      var o = t[ r ];
      "object" !== ( "undefined" == typeof o ? "undefined" : ( 0, u.default )( o ) ) && ( o = {
        href: o
      } ), n[ _.utils.normalizeReference( r ) ] = o
    }
    return n
  }

  function i( e, t ) {
    var n = C.get( e );
    return n || ( n = k( e, t ), C.set( e, n ) ), d.default.createElement( "div", {
      dangerouslySetInnerHTML: {
        __html: n
      }
    } )
  }
  Object.defineProperty( t, "__esModule", {
    value: !0
  } );
  var a = n( 4 ),
    s = r( a ),
    l = n( 42 ),
    u = r( l ),
    c = n( 77 ),
    f = r( c );
  t.default = i;
  var p = n( 96 ),
    d = r( p ),
    h = n( 123 ),
    v = r( h ),
    g = n( 191 ),
    m = r( g ),
    y = n( 192 ),
    b = r( y ),
    x = n( 193 ),
    w = r( x ),
    _ = ( 0, v.default )( {
      html: !0,
      tables: !0,
      typographer: !0,
      highlight: function ( e, t ) {
        return t ? m.default.highlightAuto( e, [ t ] ).value : m.default.highlightAuto( e ).value
      }
    } ).use( b.default ).use( w.default ),
    C = new f.default,
    k = function ( e, t ) {
      var n = o( t.config ),
        r = t.config[ "markdown-converter" ];
      return r && r( _ ), ( k = function ( e, t ) {
        return _.render( e, ( 0, s.default )( {
          references: n
        }, t ) )
      } )( e, t )
    }
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  t.__esModule = !0;
  var o = n( 5 ),
    i = r( o );
  t.default = i.default || function ( e ) {
    for ( var t = 1; t < arguments.length; t++ ) {
      var n = arguments[ t ];
      for ( var r in n ) Object.prototype.hasOwnProperty.call( n, r ) && ( e[ r ] = n[ r ] )
    }
    return e
  }
}, function ( e, t, n ) {
  e.exports = {
    default: n( 6 ),
    __esModule: !0
  }
}, function ( e, t, n ) {
  n( 7 ), e.exports = n( 10 ).Object.assign
}, function ( e, t, n ) {
  var r = n( 8 );
  r( r.S + r.F, "Object", {
    assign: n( 23 )
  } )
}, function ( e, t, n ) {
  var r = n( 9 ),
    o = n( 10 ),
    i = n( 11 ),
    a = n( 13 ),
    s = "prototype",
    l = function ( e, t, n ) {
      var u, c, f, p = e & l.F,
        d = e & l.G,
        h = e & l.S,
        v = e & l.P,
        g = e & l.B,
        m = e & l.W,
        y = d ? o : o[ t ] || ( o[ t ] = {} ),
        b = y[ s ],
        x = d ? r : h ? r[ t ] : ( r[ t ] || {} )[ s ];
      d && ( n = t );
      for ( u in n ) c = !p && x && void 0 !== x[ u ], c && u in y || ( f = c ? x[ u ] : n[ u ], y[ u ] = d && "function" != typeof x[ u ] ? n[ u ] : g && c ? i( f, r ) : m && x[ u ] == f ? function ( e ) {
        var t = function ( t, n, r ) {
          if ( this instanceof e ) {
            switch ( arguments.length ) {
              case 0:
                return new e;
              case 1:
                return new e( t );
              case 2:
                return new e( t, n )
            }
            return new e( t, n, r )
          }
          return e.apply( this, arguments )
        };
        return t[ s ] = e[ s ], t
      }( f ) : v && "function" == typeof f ? i( Function.call, f ) : f, v && ( ( y.virtual || ( y.virtual = {} ) )[ u ] = f, e & l.R && b && !b[ u ] && a( b, u, f ) ) )
    };
  l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, e.exports = l
}, function ( e, t ) {
  var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function( "return this" )();
  "number" == typeof __g && ( __g = n )
}, function ( e, t ) {
  var n = e.exports = {
    version: "2.4.0"
  };
  "number" == typeof __e && ( __e = n )
}, function ( e, t, n ) {
  var r = n( 12 );
  e.exports = function ( e, t, n ) {
    if ( r( e ), void 0 === t ) return e;
    switch ( n ) {
      case 1:
        return function ( n ) {
          return e.call( t, n )
        };
      case 2:
        return function ( n, r ) {
          return e.call( t, n, r )
        };
      case 3:
        return function ( n, r, o ) {
          return e.call( t, n, r, o )
        }
    }
    return function () {
      return e.apply( t, arguments )
    }
  }
}, function ( e, t ) {
  e.exports = function ( e ) {
    if ( "function" != typeof e ) throw TypeError( e + " is not a function!" );
    return e
  }
}, function ( e, t, n ) {
  var r = n( 14 ),
    o = n( 22 );
  e.exports = n( 18 ) ? function ( e, t, n ) {
    return r.f( e, t, o( 1, n ) )
  } : function ( e, t, n ) {
    return e[ t ] = n, e
  }
}, function ( e, t, n ) {
  var r = n( 15 ),
    o = n( 17 ),
    i = n( 21 ),
    a = Object.defineProperty;
  t.f = n( 18 ) ? Object.defineProperty : function ( e, t, n ) {
    if ( r( e ), t = i( t, !0 ), r( n ), o ) try {
      return a( e, t, n )
    } catch ( e ) {}
    if ( "get" in n || "set" in n ) throw TypeError( "Accessors not supported!" );
    return "value" in n && ( e[ t ] = n.value ), e
  }
}, function ( e, t, n ) {
  var r = n( 16 );
  e.exports = function ( e ) {
    if ( !r( e ) ) throw TypeError( e + " is not an object!" );
    return e
  }
}, function ( e, t ) {
  e.exports = function ( e ) {
    return "object" == typeof e ? null !== e : "function" == typeof e
  }
}, function ( e, t, n ) {
  e.exports = !n( 18 ) && !n( 19 )( function () {
    return 7 != Object.defineProperty( n( 20 )( "div" ), "a", {
      get: function () {
        return 7
      }
    } ).a
  } )
}, function ( e, t, n ) {
  e.exports = !n( 19 )( function () {
    return 7 != Object.defineProperty( {}, "a", {
      get: function () {
        return 7
      }
    } ).a
  } )
}, function ( e, t ) {
  e.exports = function ( e ) {
    try {
      return !!e()
    } catch ( e ) {
      return !0
    }
  }
}, function ( e, t, n ) {
  var r = n( 16 ),
    o = n( 9 ).document,
    i = r( o ) && r( o.createElement );
  e.exports = function ( e ) {
    return i ? o.createElement( e ) : {}
  }
}, function ( e, t, n ) {
  var r = n( 16 );
  e.exports = function ( e, t ) {
    if ( !r( e ) ) return e;
    var n, o;
    if ( t && "function" == typeof ( n = e.toString ) && !r( o = n.call( e ) ) ) return o;
    if ( "function" == typeof ( n = e.valueOf ) && !r( o = n.call( e ) ) ) return o;
    if ( !t && "function" == typeof ( n = e.toString ) && !r( o = n.call( e ) ) ) return o;
    throw TypeError( "Can't convert object to primitive value" )
  }
}, function ( e, t ) {
  e.exports = function ( e, t ) {
    return {
      enumerable: !( 1 & e ),
      configurable: !( 2 & e ),
      writable: !( 4 & e ),
      value: t
    }
  }
}, function ( e, t, n ) {
  "use strict";
  var r = n( 24 ),
    o = n( 39 ),
    i = n( 40 ),
    a = n( 41 ),
    s = n( 28 ),
    l = Object.assign;
  e.exports = !l || n( 19 )( function () {
    var e = {},
      t = {},
      n = Symbol(),
      r = "abcdefghijklmnopqrst";
    return e[ n ] = 7, r.split( "" ).forEach( function ( e ) {
      t[ e ] = e
    } ), 7 != l( {}, e )[ n ] || Object.keys( l( {}, t ) ).join( "" ) != r
  } ) ? function ( e, t ) {
    for ( var n = a( e ), l = arguments.length, u = 1, c = o.f, f = i.f; l > u; )
      for ( var p, d = s( arguments[ u++ ] ), h = c ? r( d ).concat( c( d ) ) : r( d ), v = h.length, g = 0; v > g; ) f.call( d, p = h[ g++ ] ) && ( n[ p ] = d[ p ] );
    return n
  } : l
}, function ( e, t, n ) {
  var r = n( 25 ),
    o = n( 38 );
  e.exports = Object.keys || function ( e ) {
    return r( e, o )
  }
}, function ( e, t, n ) {
  var r = n( 26 ),
    o = n( 27 ),
    i = n( 31 )( !1 ),
    a = n( 35 )( "IE_PROTO" );
  e.exports = function ( e, t ) {
    var n, s = o( e ),
      l = 0,
      u = [];
    for ( n in s ) n != a && r( s, n ) && u.push( n );
    for ( ; t.length > l; ) r( s, n = t[ l++ ] ) && ( ~i( u, n ) || u.push( n ) );
    return u
  }
}, function ( e, t ) {
  var n = {}.hasOwnProperty;
  e.exports = function ( e, t ) {
    return n.call( e, t )
  }
}, function ( e, t, n ) {
  var r = n( 28 ),
    o = n( 30 );
  e.exports = function ( e ) {
    return r( o( e ) )
  }
}, function ( e, t, n ) {
  var r = n( 29 );
  e.exports = Object( "z" ).propertyIsEnumerable( 0 ) ? Object : function ( e ) {
    return "String" == r( e ) ? e.split( "" ) : Object( e )
  }
}, function ( e, t ) {
  var n = {}.toString;
  e.exports = function ( e ) {
    return n.call( e ).slice( 8, -1 )
  }
}, function ( e, t ) {
  e.exports = function ( e ) {
    if ( void 0 == e ) throw TypeError( "Can't call method on  " + e );
    return e
  }
}, function ( e, t, n ) {
  var r = n( 27 ),
    o = n( 32 ),
    i = n( 34 );
  e.exports = function ( e ) {
    return function ( t, n, a ) {
      var s, l = r( t ),
        u = o( l.length ),
        c = i( a, u );
      if ( e && n != n ) {
        for ( ; u > c; )
          if ( s = l[ c++ ], s != s ) return !0
      } else
        for ( ; u > c; c++ )
          if ( ( e || c in l ) && l[ c ] === n ) return e || c || 0;
      return !e && -1
    }
  }
}, function ( e, t, n ) {
  var r = n( 33 ),
    o = Math.min;
  e.exports = function ( e ) {
    return e > 0 ? o( r( e ), 9007199254740991 ) : 0
  }
}, function ( e, t ) {
  var n = Math.ceil,
    r = Math.floor;
  e.exports = function ( e ) {
    return isNaN( e = +e ) ? 0 : ( e > 0 ? r : n )( e )
  }
}, function ( e, t, n ) {
  var r = n( 33 ),
    o = Math.max,
    i = Math.min;
  e.exports = function ( e, t ) {
    return e = r( e ), e < 0 ? o( e + t, 0 ) : i( e, t )
  }
}, function ( e, t, n ) {
  var r = n( 36 )( "keys" ),
    o = n( 37 );
  e.exports = function ( e ) {
    return r[ e ] || ( r[ e ] = o( e ) )
  }
}, function ( e, t, n ) {
  var r = n( 9 ),
    o = "__core-js_shared__",
    i = r[ o ] || ( r[ o ] = {} );
  e.exports = function ( e ) {
    return i[ e ] || ( i[ e ] = {} )
  }
}, function ( e, t ) {
  var n = 0,
    r = Math.random();
  e.exports = function ( e ) {
    return "Symbol(".concat( void 0 === e ? "" : e, ")_", ( ++n + r ).toString( 36 ) )
  }
}, function ( e, t ) {
  e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split( "," )
}, function ( e, t ) {
  t.f = Object.getOwnPropertySymbols
}, function ( e, t ) {
  t.f = {}.propertyIsEnumerable
}, function ( e, t, n ) {
  var r = n( 30 );
  e.exports = function ( e ) {
    return Object( r( e ) )
  }
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  t.__esModule = !0;
  var o = n( 43 ),
    i = r( o ),
    a = n( 63 ),
    s = r( a ),
    l = "function" == typeof s.default && "symbol" == typeof i.default ? function ( e ) {
      return typeof e
    } : function ( e ) {
      return e && "function" == typeof s.default && e.constructor === s.default && e !== s.default.prototype ? "symbol" : typeof e
    };
  t.default = "function" == typeof s.default && "symbol" === l( i.default ) ? function ( e ) {
    return "undefined" == typeof e ? "undefined" : l( e )
  } : function ( e ) {
    return e && "function" == typeof s.default && e.constructor === s.default && e !== s.default.prototype ? "symbol" : "undefined" == typeof e ? "undefined" : l( e )
  }
}, function ( e, t, n ) {
  e.exports = {
    default: n( 44 ),
    __esModule: !0
  }
}, function ( e, t, n ) {
  n( 45 ), n( 58 ), e.exports = n( 62 ).f( "iterator" )
}, function ( e, t, n ) {
  "use strict";
  var r = n( 46 )( !0 );
  n( 47 )( String, "String", function ( e ) {
    this._t = String( e ), this._i = 0
  }, function () {
    var e, t = this._t,
      n = this._i;
    return n >= t.length ? {
      value: void 0,
      done: !0
    } : ( e = r( t, n ), this._i += e.length, {
      value: e,
      done: !1
    } )
  } )
}, function ( e, t, n ) {
  var r = n( 33 ),
    o = n( 30 );
  e.exports = function ( e ) {
    return function ( t, n ) {
      var i, a, s = String( o( t ) ),
        l = r( n ),
        u = s.length;
      return l < 0 || l >= u ? e ? "" : void 0 : ( i = s.charCodeAt( l ), i < 55296 || i > 56319 || l + 1 === u || ( a = s.charCodeAt( l + 1 ) ) < 56320 || a > 57343 ? e ? s.charAt( l ) : i : e ? s.slice( l, l + 2 ) : ( i - 55296 << 10 ) + ( a - 56320 ) + 65536 )
    }
  }
}, function ( e, t, n ) {
  "use strict";
  var r = n( 48 ),
    o = n( 8 ),
    i = n( 49 ),
    a = n( 13 ),
    s = n( 26 ),
    l = n( 50 ),
    u = n( 51 ),
    c = n( 55 ),
    f = n( 57 ),
    p = n( 56 )( "iterator" ),
    d = !( [].keys && "next" in [].keys() ),
    h = "@@iterator",
    v = "keys",
    g = "values",
    m = function () {
      return this
    };
  e.exports = function ( e, t, n, y, b, x, w ) {
    u( n, t, y );
    var _, C, k, E = function ( e ) {
        if ( !d && e in M ) return M[ e ];
        switch ( e ) {
          case v:
            return function () {
              return new n( this, e )
            };
          case g:
            return function () {
              return new n( this, e )
            }
        }
        return function () {
          return new n( this, e )
        }
      },
      S = t + " Iterator",
      T = b == g,
      A = !1,
      M = e.prototype,
      O = M[ p ] || M[ h ] || b && M[ b ],
      N = O || E( b ),
      P = b ? T ? E( "entries" ) : N : void 0,
      D = "Array" == t ? M.entries || O : O;
    if ( D && ( k = f( D.call( new e ) ), k !== Object.prototype && ( c( k, S, !0 ), r || s( k, p ) || a( k, p, m ) ) ), T && O && O.name !== g && ( A = !0, N = function () {
        return O.call( this )
      } ), r && !w || !d && !A && M[ p ] || a( M, p, N ), l[ t ] = N, l[ S ] = m, b )
      if ( _ = {
          values: T ? N : E( g ),
          keys: x ? N : E( v ),
          entries: P
        }, w )
        for ( C in _ ) C in M || i( M, C, _[ C ] );
      else o( o.P + o.F * ( d || A ), t, _ );
    return _
  }
}, function ( e, t ) {
  e.exports = !0
}, function ( e, t, n ) {
  e.exports = n( 13 )
}, function ( e, t ) {
  e.exports = {}
}, function ( e, t, n ) {
  "use strict";
  var r = n( 52 ),
    o = n( 22 ),
    i = n( 55 ),
    a = {};
  n( 13 )( a, n( 56 )( "iterator" ), function () {
    return this
  } ), e.exports = function ( e, t, n ) {
    e.prototype = r( a, {
      next: o( 1, n )
    } ), i( e, t + " Iterator" )
  }
}, function ( e, t, n ) {
  var r = n( 15 ),
    o = n( 53 ),
    i = n( 38 ),
    a = n( 35 )( "IE_PROTO" ),
    s = function () {},
    l = "prototype",
    u = function () {
      var e, t = n( 20 )( "iframe" ),
        r = i.length,
        o = "<",
        a = ">";
      for ( t.style.display = "none", n( 54 ).appendChild( t ), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write( o + "script" + a + "document.F=Object" + o + "/script" + a ), e.close(), u = e.F; r--; ) delete u[ l ][ i[ r ] ];
      return u()
    };
  e.exports = Object.create || function ( e, t ) {
    var n;
    return null !== e ? ( s[ l ] = r( e ), n = new s, s[ l ] = null, n[ a ] = e ) : n = u(), void 0 === t ? n : o( n, t )
  }
}, function ( e, t, n ) {
  var r = n( 14 ),
    o = n( 15 ),
    i = n( 24 );
  e.exports = n( 18 ) ? Object.defineProperties : function ( e, t ) {
    o( e );
    for ( var n, a = i( t ), s = a.length, l = 0; s > l; ) r.f( e, n = a[ l++ ], t[ n ] );
    return e
  }
}, function ( e, t, n ) {
  e.exports = n( 9 ).document && document.documentElement
}, function ( e, t, n ) {
  var r = n( 14 ).f,
    o = n( 26 ),
    i = n( 56 )( "toStringTag" );
  e.exports = function ( e, t, n ) {
    e && !o( e = n ? e : e.prototype, i ) && r( e, i, {
      configurable: !0,
      value: t
    } )
  }
}, function ( e, t, n ) {
  var r = n( 36 )( "wks" ),
    o = n( 37 ),
    i = n( 9 ).Symbol,
    a = "function" == typeof i,
    s = e.exports = function ( e ) {
      return r[ e ] || ( r[ e ] = a && i[ e ] || ( a ? i : o )( "Symbol." + e ) )
    };
  s.store = r
}, function ( e, t, n ) {
  var r = n( 26 ),
    o = n( 41 ),
    i = n( 35 )( "IE_PROTO" ),
    a = Object.prototype;
  e.exports = Object.getPrototypeOf || function ( e ) {
    return e = o( e ), r( e, i ) ? e[ i ] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
  }
}, function ( e, t, n ) {
  n( 59 );
  for ( var r = n( 9 ), o = n( 13 ), i = n( 50 ), a = n( 56 )( "toStringTag" ), s = [ "NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList" ], l = 0; l < 5; l++ ) {
    var u = s[ l ],
      c = r[ u ],
      f = c && c.prototype;
    f && !f[ a ] && o( f, a, u ), i[ u ] = i.Array
  }
}, function ( e, t, n ) {
  "use strict";
  var r = n( 60 ),
    o = n( 61 ),
    i = n( 50 ),
    a = n( 27 );
  e.exports = n( 47 )( Array, "Array", function ( e, t ) {
    this._t = a( e ), this._i = 0, this._k = t
  }, function () {
    var e = this._t,
      t = this._k,
      n = this._i++;
    return !e || n >= e.length ? ( this._t = void 0, o( 1 ) ) : "keys" == t ? o( 0, n ) : "values" == t ? o( 0, e[ n ] ) : o( 0, [ n, e[ n ] ] )
  }, "values" ), i.Arguments = i.Array, r( "keys" ), r( "values" ), r( "entries" )
}, function ( e, t ) {
  e.exports = function () {}
}, function ( e, t ) {
  e.exports = function ( e, t ) {
    return {
      value: t,
      done: !!e
    }
  }
}, function ( e, t, n ) {
  t.f = n( 56 )
}, function ( e, t, n ) {
  e.exports = {
    default: n( 64 ),
    __esModule: !0
  }
}, function ( e, t, n ) {
  n( 65 ), n( 74 ), n( 75 ), n( 76 ), e.exports = n( 10 ).Symbol
}, function ( e, t, n ) {
  "use strict";
  var r = n( 9 ),
    o = n( 26 ),
    i = n( 18 ),
    a = n( 8 ),
    s = n( 49 ),
    l = n( 66 ).KEY,
    u = n( 19 ),
    c = n( 36 ),
    f = n( 55 ),
    p = n( 37 ),
    d = n( 56 ),
    h = n( 62 ),
    v = n( 67 ),
    g = n( 68 ),
    m = n( 69 ),
    y = n( 70 ),
    b = n( 15 ),
    x = n( 27 ),
    w = n( 21 ),
    _ = n( 22 ),
    C = n( 52 ),
    k = n( 71 ),
    E = n( 73 ),
    S = n( 14 ),
    T = n( 24 ),
    A = E.f,
    M = S.f,
    O = k.f,
    N = r.Symbol,
    P = r.JSON,
    D = P && P.stringify,
    L = "prototype",
    I = d( "_hidden" ),
    R = d( "toPrimitive" ),
    j = {}.propertyIsEnumerable,
    F = c( "symbol-registry" ),
    U = c( "symbols" ),
    B = c( "op-symbols" ),
    z = Object[ L ],
    q = "function" == typeof N,
    H = r.QObject,
    W = !H || !H[ L ] || !H[ L ].findChild,
    V = i && u( function () {
      return 7 != C( M( {}, "a", {
        get: function () {
          return M( this, "a", {
            value: 7
          } ).a
        }
      } ) ).a
    } ) ? function ( e, t, n ) {
      var r = A( z, t );
      r && delete z[ t ], M( e, t, n ), r && e !== z && M( z, t, r )
    } : M,
    G = function ( e ) {
      var t = U[ e ] = C( N[ L ] );
      return t._k = e, t
    },
    Y = q && "symbol" == typeof N.iterator ? function ( e ) {
      return "symbol" == typeof e
    } : function ( e ) {
      return e instanceof N
    },
    K = function ( e, t, n ) {
      return e === z && K( B, t, n ), b( e ), t = w( t, !0 ), b( n ), o( U, t ) ? ( n.enumerable ? ( o( e, I ) && e[ I ][ t ] && ( e[ I ][ t ] = !1 ), n = C( n, {
        enumerable: _( 0, !1 )
      } ) ) : ( o( e, I ) || M( e, I, _( 1, {} ) ), e[ I ][ t ] = !0 ), V( e, t, n ) ) : M( e, t, n )
    },
    $ = function ( e, t ) {
      b( e );
      for ( var n, r = m( t = x( t ) ), o = 0, i = r.length; i > o; ) K( e, n = r[ o++ ], t[ n ] );
      return e
    },
    J = function ( e, t ) {
      return void 0 === t ? C( e ) : $( C( e ), t )
    },
    X = function ( e ) {
      var t = j.call( this, e = w( e, !0 ) );
      return !( this === z && o( U, e ) && !o( B, e ) ) && ( !( t || !o( this, e ) || !o( U, e ) || o( this, I ) && this[ I ][ e ] ) || t )
    },
    Z = function ( e, t ) {
      if ( e = x( e ), t = w( t, !0 ), e !== z || !o( U, t ) || o( B, t ) ) {
        var n = A( e, t );
        return !n || !o( U, t ) || o( e, I ) && e[ I ][ t ] || ( n.enumerable = !0 ), n
      }
    },
    Q = function ( e ) {
      for ( var t, n = O( x( e ) ), r = [], i = 0; n.length > i; ) o( U, t = n[ i++ ] ) || t == I || t == l || r.push( t );
      return r
    },
    ee = function ( e ) {
      for ( var t, n = e === z, r = O( n ? B : x( e ) ), i = [], a = 0; r.length > a; ) !o( U, t = r[ a++ ] ) || n && !o( z, t ) || i.push( U[ t ] );
      return i
    };
  q || ( N = function () {
    if ( this instanceof N ) throw TypeError( "Symbol is not a constructor!" );
    var e = p( arguments.length > 0 ? arguments[ 0 ] : void 0 ),
      t = function ( n ) {
        this === z && t.call( B, n ), o( this, I ) && o( this[ I ], e ) && ( this[ I ][ e ] = !1 ), V( this, e, _( 1, n ) )
      };
    return i && W && V( z, e, {
      configurable: !0,
      set: t
    } ), G( e )
  }, s( N[ L ], "toString", function () {
    return this._k
  } ), E.f = Z, S.f = K, n( 72 ).f = k.f = Q, n( 40 ).f = X, n( 39 ).f = ee, i && !n( 48 ) && s( z, "propertyIsEnumerable", X, !0 ), h.f = function ( e ) {
    return G( d( e ) )
  } ), a( a.G + a.W + a.F * !q, {
    Symbol: N
  } );
  for ( var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split( "," ), ne = 0; te.length > ne; ) d( te[ ne++ ] );
  for ( var te = T( d.store ), ne = 0; te.length > ne; ) v( te[ ne++ ] );
  a( a.S + a.F * !q, "Symbol", {
    for: function ( e ) {
      return o( F, e += "" ) ? F[ e ] : F[ e ] = N( e )
    },
    keyFor: function ( e ) {
      if ( Y( e ) ) return g( F, e );
      throw TypeError( e + " is not a symbol!" )
    },
    useSetter: function () {
      W = !0
    },
    useSimple: function () {
      W = !1
    }
  } ), a( a.S + a.F * !q, "Object", {
    create: J,
    defineProperty: K,
    defineProperties: $,
    getOwnPropertyDescriptor: Z,
    getOwnPropertyNames: Q,
    getOwnPropertySymbols: ee
  } ), P && a( a.S + a.F * ( !q || u( function () {
    var e = N();
    return "[null]" != D( [ e ] ) || "{}" != D( {
      a: e
    } ) || "{}" != D( Object( e ) )
  } ) ), "JSON", {
    stringify: function ( e ) {
      if ( void 0 !== e && !Y( e ) ) {
        for ( var t, n, r = [ e ], o = 1; arguments.length > o; ) r.push( arguments[ o++ ] );
        return t = r[ 1 ], "function" == typeof t && ( n = t ), !n && y( t ) || ( t = function ( e, t ) {
          if ( n && ( t = n.call( this, e, t ) ), !Y( t ) ) return t
        } ), r[ 1 ] = t, D.apply( P, r )
      }
    }
  } ), N[ L ][ R ] || n( 13 )( N[ L ], R, N[ L ].valueOf ), f( N, "Symbol" ), f( Math, "Math", !0 ), f( r.JSON, "JSON", !0 )
}, function ( e, t, n ) {
  var r = n( 37 )( "meta" ),
    o = n( 16 ),
    i = n( 26 ),
    a = n( 14 ).f,
    s = 0,
    l = Object.isExtensible || function () {
      return !0
    },
    u = !n( 19 )( function () {
      return l( Object.preventExtensions( {} ) )
    } ),
    c = function ( e ) {
      a( e, r, {
        value: {
          i: "O" + ++s,
          w: {}
        }
      } )
    },
    f = function ( e, t ) {
      if ( !o( e ) ) return "symbol" == typeof e ? e : ( "string" == typeof e ? "S" : "P" ) + e;
      if ( !i( e, r ) ) {
        if ( !l( e ) ) return "F";
        if ( !t ) return "E";
        c( e )
      }
      return e[ r ].i
    },
    p = function ( e, t ) {
      if ( !i( e, r ) ) {
        if ( !l( e ) ) return !0;
        if ( !t ) return !1;
        c( e )
      }
      return e[ r ].w
    },
    d = function ( e ) {
      return u && h.NEED && l( e ) && !i( e, r ) && c( e ), e
    },
    h = e.exports = {
      KEY: r,
      NEED: !1,
      fastKey: f,
      getWeak: p,
      onFreeze: d
    }
}, function ( e, t, n ) {
  var r = n( 9 ),
    o = n( 10 ),
    i = n( 48 ),
    a = n( 62 ),
    s = n( 14 ).f;
  e.exports = function ( e ) {
    var t = o.Symbol || ( o.Symbol = i ? {} : r.Symbol || {} );
    "_" == e.charAt( 0 ) || e in t || s( t, e, {
      value: a.f( e )
    } )
  }
}, function ( e, t, n ) {
  var r = n( 24 ),
    o = n( 27 );
  e.exports = function ( e, t ) {
    for ( var n, i = o( e ), a = r( i ), s = a.length, l = 0; s > l; )
      if ( i[ n = a[ l++ ] ] === t ) return n
  }
}, function ( e, t, n ) {
  var r = n( 24 ),
    o = n( 39 ),
    i = n( 40 );
  e.exports = function ( e ) {
    var t = r( e ),
      n = o.f;
    if ( n )
      for ( var a, s = n( e ), l = i.f, u = 0; s.length > u; ) l.call( e, a = s[ u++ ] ) && t.push( a );
    return t
  }
}, function ( e, t, n ) {
  var r = n( 29 );
  e.exports = Array.isArray || function ( e ) {
    return "Array" == r( e )
  }
}, function ( e, t, n ) {
  var r = n( 27 ),
    o = n( 72 ).f,
    i = {}.toString,
    a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames( window ) : [],
    s = function ( e ) {
      try {
        return o( e )
      } catch ( e ) {
        return a.slice()
      }
    };
  e.exports.f = function ( e ) {
    return a && "[object Window]" == i.call( e ) ? s( e ) : o( r( e ) )
  }
}, function ( e, t, n ) {
  var r = n( 25 ),
    o = n( 38 ).concat( "length", "prototype" );
  t.f = Object.getOwnPropertyNames || function ( e ) {
    return r( e, o )
  }
}, function ( e, t, n ) {
  var r = n( 40 ),
    o = n( 22 ),
    i = n( 27 ),
    a = n( 21 ),
    s = n( 26 ),
    l = n( 17 ),
    u = Object.getOwnPropertyDescriptor;
  t.f = n( 18 ) ? u : function ( e, t ) {
    if ( e = i( e ), t = a( t, !0 ), l ) try {
      return u( e, t )
    } catch ( e ) {}
    if ( s( e, t ) ) return o( !r.f.call( e, t ), e[ t ] )
  }
}, function ( e, t ) {}, function ( e, t, n ) {
  n( 67 )( "asyncIterator" )
}, function ( e, t, n ) {
  n( 67 )( "observable" )
}, function ( e, t, n ) {
  e.exports = {
    default: n( 78 ),
    __esModule: !0
  }
}, function ( e, t, n ) {
  n( 74 ), n( 45 ), n( 58 ), n( 79 ), n( 93 ), e.exports = n( 10 ).Map
}, function ( e, t, n ) {
  "use strict";
  var r = n( 80 );
  e.exports = n( 89 )( "Map", function ( e ) {
    return function () {
      return e( this, arguments.length > 0 ? arguments[ 0 ] : void 0 )
    }
  }, {
    get: function ( e ) {
      var t = r.getEntry( this, e );
      return t && t.v
    },
    set: function ( e, t ) {
      return r.def( this, 0 === e ? 0 : e, t )
    }
  }, r, !0 )
}, function ( e, t, n ) {
  "use strict";
  var r = n( 14 ).f,
    o = n( 52 ),
    i = n( 81 ),
    a = n( 11 ),
    s = n( 82 ),
    l = n( 30 ),
    u = n( 83 ),
    c = n( 47 ),
    f = n( 61 ),
    p = n( 88 ),
    d = n( 18 ),
    h = n( 66 ).fastKey,
    v = d ? "_s" : "size",
    g = function ( e, t ) {
      var n, r = h( t );
      if ( "F" !== r ) return e._i[ r ];
      for ( n = e._f; n; n = n.n )
        if ( n.k == t ) return n
    };
  e.exports = {
    getConstructor: function ( e, t, n, c ) {
      var f = e( function ( e, r ) {
        s( e, f, t, "_i" ), e._i = o( null ), e._f = void 0, e._l = void 0, e[ v ] = 0, void 0 != r && u( r, n, e[ c ], e )
      } );
      return i( f.prototype, {
        clear: function () {
          for ( var e = this, t = e._i, n = e._f; n; n = n.n ) n.r = !0, n.p && ( n.p = n.p.n = void 0 ), delete t[ n.i ];
          e._f = e._l = void 0, e[ v ] = 0
        },
        delete: function ( e ) {
          var t = this,
            n = g( t, e );
          if ( n ) {
            var r = n.n,
              o = n.p;
            delete t._i[ n.i ], n.r = !0, o && ( o.n = r ), r && ( r.p = o ), t._f == n && ( t._f = r ), t._l == n && ( t._l = o ), t[ v ]--
          }
          return !!n
        },
        forEach: function ( e ) {
          s( this, f, "forEach" );
          for ( var t, n = a( e, arguments.length > 1 ? arguments[ 1 ] : void 0, 3 ); t = t ? t.n : this._f; )
            for ( n( t.v, t.k, this ); t && t.r; ) t = t.p
        },
        has: function ( e ) {
          return !!g( this, e )
        }
      } ), d && r( f.prototype, "size", {
        get: function () {
          return l( this[ v ] )
        }
      } ), f
    },
    def: function ( e, t, n ) {
      var r, o, i = g( e, t );
      return i ? i.v = n : ( e._l = i = {
        i: o = h( t, !0 ),
        k: t,
        v: n,
        p: r = e._l,
        n: void 0,
        r: !1
      }, e._f || ( e._f = i ), r && ( r.n = i ), e[ v ]++, "F" !== o && ( e._i[ o ] = i ) ), e
    },
    getEntry: g,
    setStrong: function ( e, t, n ) {
      c( e, t, function ( e, t ) {
        this._t = e, this._k = t, this._l = void 0
      }, function () {
        for ( var e = this, t = e._k, n = e._l; n && n.r; ) n = n.p;
        return e._t && ( e._l = n = n ? n.n : e._t._f ) ? "keys" == t ? f( 0, n.k ) : "values" == t ? f( 0, n.v ) : f( 0, [ n.k, n.v ] ) : ( e._t = void 0, f( 1 ) )
      }, n ? "entries" : "values", !n, !0 ), p( t )
    }
  }
}, function ( e, t, n ) {
  var r = n( 13 );
  e.exports = function ( e, t, n ) {
    for ( var o in t ) n && e[ o ] ? e[ o ] = t[ o ] : r( e, o, t[ o ] );
    return e
  }
}, function ( e, t ) {
  e.exports = function ( e, t, n, r ) {
    if ( !( e instanceof t ) || void 0 !== r && r in e ) throw TypeError( n + ": incorrect invocation!" );
    return e
  }
}, function ( e, t, n ) {
  var r = n( 11 ),
    o = n( 84 ),
    i = n( 85 ),
    a = n( 15 ),
    s = n( 32 ),
    l = n( 86 ),
    u = {},
    c = {},
    t = e.exports = function ( e, t, n, f, p ) {
      var d, h, v, g, m = p ? function () {
          return e
        } : l( e ),
        y = r( n, f, t ? 2 : 1 ),
        b = 0;
      if ( "function" != typeof m ) throw TypeError( e + " is not iterable!" );
      if ( i( m ) ) {
        for ( d = s( e.length ); d > b; b++ )
          if ( g = t ? y( a( h = e[ b ] )[ 0 ], h[ 1 ] ) : y( e[ b ] ), g === u || g === c ) return g
      } else
        for ( v = m.call( e ); !( h = v.next() ).done; )
          if ( g = o( v, y, h.value, t ), g === u || g === c ) return g
    };
  t.BREAK = u, t.RETURN = c
}, function ( e, t, n ) {
  var r = n( 15 );
  e.exports = function ( e, t, n, o ) {
    try {
      return o ? t( r( n )[ 0 ], n[ 1 ] ) : t( n )
    } catch ( t ) {
      var i = e.return;
      throw void 0 !== i && r( i.call( e ) ), t
    }
  }
}, function ( e, t, n ) {
  var r = n( 50 ),
    o = n( 56 )( "iterator" ),
    i = Array.prototype;
  e.exports = function ( e ) {
    return void 0 !== e && ( r.Array === e || i[ o ] === e )
  }
}, function ( e, t, n ) {
  var r = n( 87 ),
    o = n( 56 )( "iterator" ),
    i = n( 50 );
  e.exports = n( 10 ).getIteratorMethod = function ( e ) {
    if ( void 0 != e ) return e[ o ] || e[ "@@iterator" ] || i[ r( e ) ]
  }
}, function ( e, t, n ) {
  var r = n( 29 ),
    o = n( 56 )( "toStringTag" ),
    i = "Arguments" == r( function () {
      return arguments
    }() ),
    a = function ( e, t ) {
      try {
        return e[ t ]
      } catch ( e ) {}
    };
  e.exports = function ( e ) {
    var t, n, s;
    return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof ( n = a( t = Object( e ), o ) ) ? n : i ? r( t ) : "Object" == ( s = r( t ) ) && "function" == typeof t.callee ? "Arguments" : s
  }
}, function ( e, t, n ) {
  "use strict";
  var r = n( 9 ),
    o = n( 10 ),
    i = n( 14 ),
    a = n( 18 ),
    s = n( 56 )( "species" );
  e.exports = function ( e ) {
    var t = "function" == typeof o[ e ] ? o[ e ] : r[ e ];
    a && t && !t[ s ] && i.f( t, s, {
      configurable: !0,
      get: function () {
        return this
      }
    } )
  }
}, function ( e, t, n ) {
  "use strict";
  var r = n( 9 ),
    o = n( 8 ),
    i = n( 66 ),
    a = n( 19 ),
    s = n( 13 ),
    l = n( 81 ),
    u = n( 83 ),
    c = n( 82 ),
    f = n( 16 ),
    p = n( 55 ),
    d = n( 14 ).f,
    h = n( 90 )( 0 ),
    v = n( 18 );
  e.exports = function ( e, t, n, g, m, y ) {
    var b = r[ e ],
      x = b,
      w = m ? "set" : "add",
      _ = x && x.prototype,
      C = {};
    return v && "function" == typeof x && ( y || _.forEach && !a( function () {
      ( new x ).entries().next()
    } ) ) ? ( x = t( function ( t, n ) {
      c( t, x, e, "_c" ), t._c = new b, void 0 != n && u( n, m, t[ w ], t )
    } ), h( "add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split( "," ), function ( e ) {
      var t = "add" == e || "set" == e;
      e in _ && ( !y || "clear" != e ) && s( x.prototype, e, function ( n, r ) {
        if ( c( this, x, e ), !t && y && !f( n ) ) return "get" == e && void 0;
        var o = this._c[ e ]( 0 === n ? 0 : n, r );
        return t ? this : o
      } )
    } ), "size" in _ && d( x.prototype, "size", {
      get: function () {
        return this._c.size
      }
    } ) ) : ( x = g.getConstructor( t, e, m, w ), l( x.prototype, n ), i.NEED = !0 ), p( x, e ), C[ e ] = x, o( o.G + o.W + o.F, C ), y || g.setStrong( x, e, m ), x
  }
}, function ( e, t, n ) {
  var r = n( 11 ),
    o = n( 28 ),
    i = n( 41 ),
    a = n( 32 ),
    s = n( 91 );
  e.exports = function ( e, t ) {
    var n = 1 == e,
      l = 2 == e,
      u = 3 == e,
      c = 4 == e,
      f = 6 == e,
      p = 5 == e || f,
      d = t || s;
    return function ( t, s, h ) {
      for ( var v, g, m = i( t ), y = o( m ), b = r( s, h, 3 ), x = a( y.length ), w = 0, _ = n ? d( t, x ) : l ? d( t, 0 ) : void 0; x > w; w++ )
        if ( ( p || w in y ) && ( v = y[ w ], g = b( v, w, m ), e ) )
          if ( n ) _[ w ] = g;
          else if ( g ) switch ( e ) {
        case 3:
          return !0;
        case 5:
          return v;
        case 6:
          return w;
        case 2:
          _.push( v )
      } else if ( c ) return !1;
      return f ? -1 : u || c ? c : _
    }
  }
}, function ( e, t, n ) {
  var r = n( 92 );
  e.exports = function ( e, t ) {
    return new( r( e ) )( t )
  }
}, function ( e, t, n ) {
  var r = n( 16 ),
    o = n( 70 ),
    i = n( 56 )( "species" );
  e.exports = function ( e ) {
    var t;
    return o( e ) && ( t = e.constructor, "function" != typeof t || t !== Array && !o( t.prototype ) || ( t = void 0 ), r( t ) && ( t = t[ i ], null === t && ( t = void 0 ) ) ), void 0 === t ? Array : t
  }
}, function ( e, t, n ) {
  var r = n( 8 );
  r( r.P + r.R, "Map", {
    toJSON: n( 94 )( "Map" )
  } )
}, function ( e, t, n ) {
  var r = n( 87 ),
    o = n( 95 );
  e.exports = function ( e ) {
    return function () {
      if ( r( this ) != e ) throw TypeError( e + "#toJSON isn't generic" );
      return o( this )
    }
  }
}, function ( e, t, n ) {
  var r = n( 83 );
  e.exports = function ( e, t ) {
    var n = [];
    return r( e, !1, n.push, n, t ), n
  }
}, function ( e, t, n ) {
  "use strict";
  e.exports = n( 97 )
}, function ( e, t, n ) {
  "use strict";
  var r = n( 98 ),
    o = n( 99 ),
    i = n( 112 ),
    a = n( 115 ),
    s = n( 116 ),
    l = n( 118 ),
    u = n( 103 ),
    c = n( 119 ),
    f = n( 121 ),
    p = n( 122 ),
    d = ( n( 105 ), u.createElement ),
    h = u.createFactory,
    v = u.cloneElement,
    g = r,
    m = {
      Children: {
        map: o.map,
        forEach: o.forEach,
        count: o.count,
        toArray: o.toArray,
        only: p
      },
      Component: i,
      PureComponent: a,
      createElement: d,
      cloneElement: v,
      isValidElement: u.isValidElement,
      PropTypes: c,
      createClass: s.createClass,
      createFactory: h,
      createMixin: function ( e ) {
        return e
      },
      DOM: l,
      version: f,
      __spread: g
    };
  e.exports = m
}, function ( e, t ) {
  "use strict";

  function n( e ) {
    if ( null === e || void 0 === e ) throw new TypeError( "Object.assign cannot be called with null or undefined" );
    return Object( e )
  }

  function r() {
    try {
      if ( !Object.assign ) return !1;
      var e = new String( "abc" );
      if ( e[ 5 ] = "de", "5" === Object.getOwnPropertyNames( e )[ 0 ] ) return !1;
      for ( var t = {}, n = 0; n < 10; n++ ) t[ "_" + String.fromCharCode( n ) ] = n;
      var r = Object.getOwnPropertyNames( t ).map( function ( e ) {
        return t[ e ]
      } );
      if ( "0123456789" !== r.join( "" ) ) return !1;
      var o = {};
      return "abcdefghijklmnopqrst".split( "" ).forEach( function ( e ) {
        o[ e ] = e
      } ), "abcdefghijklmnopqrst" === Object.keys( Object.assign( {}, o ) ).join( "" )
    } catch ( e ) {
      return !1
    }
  }
  var o = Object.prototype.hasOwnProperty,
    i = Object.prototype.propertyIsEnumerable;
  e.exports = r() ? Object.assign : function ( e, t ) {
    for ( var r, a, s = n( e ), l = 1; l < arguments.length; l++ ) {
      r = Object( arguments[ l ] );
      for ( var u in r ) o.call( r, u ) && ( s[ u ] = r[ u ] );
      if ( Object.getOwnPropertySymbols ) {
        a = Object.getOwnPropertySymbols( r );
        for ( var c = 0; c < a.length; c++ ) i.call( r, a[ c ] ) && ( s[ a[ c ] ] = r[ a[ c ] ] )
      }
    }
    return s
  }
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    return ( "" + e ).replace( x, "$&/" )
  }

  function o( e, t ) {
    this.func = e, this.context = t, this.count = 0
  }

  function i( e, t, n ) {
    var r = e.func,
      o = e.context;
    r.call( o, t, e.count++ )
  }

  function a( e, t, n ) {
    if ( null == e ) return e;
    var r = o.getPooled( t, n );
    m( e, i, r ), o.release( r )
  }

  function s( e, t, n, r ) {
    this.result = e, this.keyPrefix = t, this.func = n, this.context = r, this.count = 0
  }

  function l( e, t, n ) {
    var o = e.result,
      i = e.keyPrefix,
      a = e.func,
      s = e.context,
      l = a.call( s, t, e.count++ );
    Array.isArray( l ) ? u( l, o, n, g.thatReturnsArgument ) : null != l && ( v.isValidElement( l ) && ( l = v.cloneAndReplaceKey( l, i + ( !l.key || t && t.key === l.key ? "" : r( l.key ) + "/" ) + n ) ), o.push( l ) )
  }

  function u( e, t, n, o, i ) {
    var a = "";
    null != n && ( a = r( n ) + "/" );
    var u = s.getPooled( t, a, o, i );
    m( e, l, u ), s.release( u )
  }

  function c( e, t, n ) {
    if ( null == e ) return e;
    var r = [];
    return u( e, r, null, t, n ), r
  }

  function f( e, t, n ) {
    return null
  }

  function p( e, t ) {
    return m( e, f, null )
  }

  function d( e ) {
    var t = [];
    return u( e, t, null, g.thatReturnsArgument ), t
  }
  var h = n( 100 ),
    v = n( 103 ),
    g = n( 106 ),
    m = n( 109 ),
    y = h.twoArgumentPooler,
    b = h.fourArgumentPooler,
    x = /\/+/g;
  o.prototype.destructor = function () {
    this.func = null, this.context = null, this.count = 0
  }, h.addPoolingTo( o, y ), s.prototype.destructor = function () {
    this.result = null, this.keyPrefix = null, this.func = null, this.context = null, this.count = 0
  }, h.addPoolingTo( s, b );
  var w = {
    forEach: a,
    map: c,
    mapIntoWithKeyPrefixInternal: u,
    count: p,
    toArray: d
  };
  e.exports = w
}, function ( e, t, n ) {
  "use strict";
  var r = n( 101 ),
    o = ( n( 102 ), function ( e ) {
      var t = this;
      if ( t.instancePool.length ) {
        var n = t.instancePool.pop();
        return t.call( n, e ), n
      }
      return new t( e )
    } ),
    i = function ( e, t ) {
      var n = this;
      if ( n.instancePool.length ) {
        var r = n.instancePool.pop();
        return n.call( r, e, t ), r
      }
      return new n( e, t )
    },
    a = function ( e, t, n ) {
      var r = this;
      if ( r.instancePool.length ) {
        var o = r.instancePool.pop();
        return r.call( o, e, t, n ), o
      }
      return new r( e, t, n )
    },
    s = function ( e, t, n, r ) {
      var o = this;
      if ( o.instancePool.length ) {
        var i = o.instancePool.pop();
        return o.call( i, e, t, n, r ), i
      }
      return new o( e, t, n, r )
    },
    l = function ( e ) {
      var t = this;
      e instanceof t ? void 0 : r( "25" ), e.destructor(), t.instancePool.length < t.poolSize && t.instancePool.push( e )
    },
    u = 10,
    c = o,
    f = function ( e, t ) {
      var n = e;
      return n.instancePool = [], n.getPooled = t || c, n.poolSize || ( n.poolSize = u ), n.release = l, n
    },
    p = {
      addPoolingTo: f,
      oneArgumentPooler: o,
      twoArgumentPooler: i,
      threeArgumentPooler: a,
      fourArgumentPooler: s
    };
  e.exports = p
}, function ( e, t ) {
  "use strict";

  function n( e ) {
    for ( var t = arguments.length - 1, n = "Minified React error #" + e + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=" + e, r = 0; r < t; r++ ) n += "&args[]=" + encodeURIComponent( arguments[ r + 1 ] );
    n += " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    var o = new Error( n );
    throw o.name = "Invariant Violation", o.framesToPop = 1, o
  }
  e.exports = n
}, function ( e, t, n ) {
  "use strict";

  function r( e, t, n, r, i, a, s, l ) {
    if ( o( t ), !e ) {
      var u;
      if ( void 0 === t ) u = new Error( "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings." );
      else {
        var c = [ n, r, i, a, s, l ],
          f = 0;
        u = new Error( t.replace( /%s/g, function () {
          return c[ f++ ]
        } ) ), u.name = "Invariant Violation"
      }
      throw u.framesToPop = 1, u
    }
  }
  var o = function ( e ) {};
  e.exports = r
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    return void 0 !== e.ref
  }

  function o( e ) {
    return void 0 !== e.key
  }
  var i = n( 98 ),
    a = n( 104 ),
    s = ( n( 105 ), n( 107 ), Object.prototype.hasOwnProperty ),
    l = n( 108 ),
    u = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    },
    c = function ( e, t, n, r, o, i, a ) {
      var s = {
        $$typeof: l,
        type: e,
        key: t,
        ref: n,
        props: a,
        _owner: i
      };
      return s
    };
  c.createElement = function ( e, t, n ) {
    var i, l = {},
      f = null,
      p = null,
      d = null,
      h = null;
    if ( null != t ) {
      r( t ) && ( p = t.ref ), o( t ) && ( f = "" + t.key ), d = void 0 === t.__self ? null : t.__self, h = void 0 === t.__source ? null : t.__source;
      for ( i in t ) s.call( t, i ) && !u.hasOwnProperty( i ) && ( l[ i ] = t[ i ] )
    }
    var v = arguments.length - 2;
    if ( 1 === v ) l.children = n;
    else if ( v > 1 ) {
      for ( var g = Array( v ), m = 0; m < v; m++ ) g[ m ] = arguments[ m + 2 ];
      l.children = g
    }
    if ( e && e.defaultProps ) {
      var y = e.defaultProps;
      for ( i in y ) void 0 === l[ i ] && ( l[ i ] = y[ i ] )
    }
    return c( e, f, p, d, h, a.current, l )
  }, c.createFactory = function ( e ) {
    var t = c.createElement.bind( null, e );
    return t.type = e, t
  }, c.cloneAndReplaceKey = function ( e, t ) {
    var n = c( e.type, t, e.ref, e._self, e._source, e._owner, e.props );
    return n
  }, c.cloneElement = function ( e, t, n ) {
    var l, f = i( {}, e.props ),
      p = e.key,
      d = e.ref,
      h = e._self,
      v = e._source,
      g = e._owner;
    if ( null != t ) {
      r( t ) && ( d = t.ref, g = a.current ), o( t ) && ( p = "" + t.key );
      var m;
      e.type && e.type.defaultProps && ( m = e.type.defaultProps );
      for ( l in t ) s.call( t, l ) && !u.hasOwnProperty( l ) && ( void 0 === t[ l ] && void 0 !== m ? f[ l ] = m[ l ] : f[ l ] = t[ l ] )
    }
    var y = arguments.length - 2;
    if ( 1 === y ) f.children = n;
    else if ( y > 1 ) {
      for ( var b = Array( y ), x = 0; x < y; x++ ) b[ x ] = arguments[ x + 2 ];
      f.children = b
    }
    return c( e.type, p, d, h, v, g, f )
  }, c.isValidElement = function ( e ) {
    return "object" == typeof e && null !== e && e.$$typeof === l
  }, e.exports = c
}, function ( e, t ) {
  "use strict";
  var n = {
    current: null
  };
  e.exports = n
}, function ( e, t, n ) {
  "use strict";
  var r = n( 106 ),
    o = r;
  e.exports = o
}, function ( e, t ) {
  "use strict";

  function n( e ) {
    return function () {
      return e
    }
  }
  var r = function () {};
  r.thatReturns = n, r.thatReturnsFalse = n( !1 ), r.thatReturnsTrue = n( !0 ), r.thatReturnsNull = n( null ), r.thatReturnsThis = function () {
    return this
  }, r.thatReturnsArgument = function ( e ) {
    return e
  }, e.exports = r
}, function ( e, t, n ) {
  "use strict";
  var r = !1;
  e.exports = r
}, function ( e, t ) {
  "use strict";
  var n = "function" == typeof Symbol && Symbol.for && Symbol.for( "react.element" ) || 60103;
  e.exports = n
}, function ( e, t, n ) {
  "use strict";

  function r( e, t ) {
    return e && "object" == typeof e && null != e.key ? u.escape( e.key ) : t.toString( 36 )
  }

  function o( e, t, n, i ) {
    var p = typeof e;
    if ( "undefined" !== p && "boolean" !== p || ( e = null ), null === e || "string" === p || "number" === p || "object" === p && e.$$typeof === s ) return n( i, e, "" === t ? c + r( e, 0 ) : t ), 1;
    var d, h, v = 0,
      g = "" === t ? c : t + f;
    if ( Array.isArray( e ) )
      for ( var m = 0; m < e.length; m++ ) d = e[ m ], h = g + r( d, m ), v += o( d, h, n, i );
    else {
      var y = l( e );
      if ( y ) {
        var b, x = y.call( e );
        if ( y !== e.entries )
          for ( var w = 0; !( b = x.next() ).done; ) d = b.value, h = g + r( d, w++ ), v += o( d, h, n, i );
        else
          for ( ; !( b = x.next() ).done; ) {
            var _ = b.value;
            _ && ( d = _[ 1 ], h = g + u.escape( _[ 0 ] ) + f + r( d, 0 ), v += o( d, h, n, i ) )
          }
      } else if ( "object" === p ) {
        var C = "",
          k = String( e );
        a( "31", "[object Object]" === k ? "object with keys {" + Object.keys( e ).join( ", " ) + "}" : k, C )
      }
    }
    return v
  }

  function i( e, t, n ) {
    return null == e ? 0 : o( e, "", t, n )
  }
  var a = n( 101 ),
    s = ( n( 104 ), n( 108 ) ),
    l = n( 110 ),
    u = ( n( 102 ), n( 111 ) ),
    c = ( n( 105 ), "." ),
    f = ":";
  e.exports = i
}, function ( e, t ) {
  "use strict";

  function n( e ) {
    var t = e && ( r && e[ r ] || e[ o ] );
    if ( "function" == typeof t ) return t
  }
  var r = "function" == typeof Symbol && Symbol.iterator,
    o = "@@iterator";
  e.exports = n
}, function ( e, t ) {
  "use strict";

  function n( e ) {
    var t = /[=:]/g,
      n = {
        "=": "=0",
        ":": "=2"
      },
      r = ( "" + e ).replace( t, function ( e ) {
        return n[ e ]
      } );
    return "$" + r
  }

  function r( e ) {
    var t = /(=0|=2)/g,
      n = {
        "=0": "=",
        "=2": ":"
      },
      r = "." === e[ 0 ] && "$" === e[ 1 ] ? e.substring( 2 ) : e.substring( 1 );
    return ( "" + r ).replace( t, function ( e ) {
      return n[ e ]
    } )
  }
  var o = {
    escape: n,
    unescape: r
  };
  e.exports = o
}, function ( e, t, n ) {
  "use strict";

  function r( e, t, n ) {
    this.props = e, this.context = t, this.refs = a, this.updater = n || i
  }
  var o = n( 101 ),
    i = n( 113 ),
    a = ( n( 107 ), n( 114 ) );
  n( 102 ), n( 105 );
  r.prototype.isReactComponent = {}, r.prototype.setState = function ( e, t ) {
    "object" != typeof e && "function" != typeof e && null != e ? o( "85" ) : void 0, this.updater.enqueueSetState( this, e ), t && this.updater.enqueueCallback( this, t, "setState" )
  }, r.prototype.forceUpdate = function ( e ) {
    this.updater.enqueueForceUpdate( this ), e && this.updater.enqueueCallback( this, e, "forceUpdate" )
  };
  e.exports = r
}, function ( e, t, n ) {
  "use strict";

  function r( e, t ) {}
  var o = ( n( 105 ), {
    isMounted: function ( e ) {
      return !1
    },
    enqueueCallback: function ( e, t ) {},
    enqueueForceUpdate: function ( e ) {
      r( e, "forceUpdate" )
    },
    enqueueReplaceState: function ( e, t ) {
      r( e, "replaceState" )
    },
    enqueueSetState: function ( e, t ) {
      r( e, "setState" )
    }
  } );
  e.exports = o
}, function ( e, t, n ) {
  "use strict";
  var r = {};
  e.exports = r
}, function ( e, t, n ) {
  "use strict";

  function r( e, t, n ) {
    this.props = e, this.context = t, this.refs = l, this.updater = n || s
  }

  function o() {}
  var i = n( 98 ),
    a = n( 112 ),
    s = n( 113 ),
    l = n( 114 );
  o.prototype = a.prototype, r.prototype = new o, r.prototype.constructor = r, i( r.prototype, a.prototype ), r.prototype.isPureReactComponent = !0, e.exports = r
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    return e
  }

  function o( e, t ) {
    var n = x.hasOwnProperty( t ) ? x[ t ] : null;
    _.hasOwnProperty( t ) && ( "OVERRIDE_BASE" !== n ? p( "73", t ) : void 0 ), e && ( "DEFINE_MANY" !== n && "DEFINE_MANY_MERGED" !== n ? p( "74", t ) : void 0 )
  }

  function i( e, t ) {
    if ( t ) {
      "function" == typeof t ? p( "75" ) : void 0, v.isValidElement( t ) ? p( "76" ) : void 0;
      var n = e.prototype,
        r = n.__reactAutoBindPairs;
      t.hasOwnProperty( y ) && w.mixins( e, t.mixins );
      for ( var i in t )
        if ( t.hasOwnProperty( i ) && i !== y ) {
          var a = t[ i ],
            s = n.hasOwnProperty( i );
          if ( o( s, i ), w.hasOwnProperty( i ) ) w[ i ]( e, a );
          else {
            var c = x.hasOwnProperty( i ),
              f = "function" == typeof a,
              d = f && !c && !s && t.autobind !== !1;
            if ( d ) r.push( i, a ), n[ i ] = a;
            else if ( s ) {
              var h = x[ i ];
              !c || "DEFINE_MANY_MERGED" !== h && "DEFINE_MANY" !== h ? p( "77", h, i ) : void 0, "DEFINE_MANY_MERGED" === h ? n[ i ] = l( n[ i ], a ) : "DEFINE_MANY" === h && ( n[ i ] = u( n[ i ], a ) )
            } else n[ i ] = a
          }
        }
    } else;
  }

  function a( e, t ) {
    if ( t )
      for ( var n in t ) {
        var r = t[ n ];
        if ( t.hasOwnProperty( n ) ) {
          var o = n in w;
          o ? p( "78", n ) : void 0;
          var i = n in e;
          i ? p( "79", n ) : void 0, e[ n ] = r
        }
      }
  }

  function s( e, t ) {
    e && t && "object" == typeof e && "object" == typeof t ? void 0 : p( "80" );
    for ( var n in t ) t.hasOwnProperty( n ) && ( void 0 !== e[ n ] ? p( "81", n ) : void 0, e[ n ] = t[ n ] );
    return e
  }

  function l( e, t ) {
    return function () {
      var n = e.apply( this, arguments ),
        r = t.apply( this, arguments );
      if ( null == n ) return r;
      if ( null == r ) return n;
      var o = {};
      return s( o, n ), s( o, r ), o
    }
  }

  function u( e, t ) {
    return function () {
      e.apply( this, arguments ), t.apply( this, arguments )
    }
  }

  function c( e, t ) {
    var n = t.bind( e );
    return n
  }

  function f( e ) {
    for ( var t = e.__reactAutoBindPairs, n = 0; n < t.length; n += 2 ) {
      var r = t[ n ],
        o = t[ n + 1 ];
      e[ r ] = c( e, o )
    }
  }
  var p = n( 101 ),
    d = n( 98 ),
    h = n( 112 ),
    v = n( 103 ),
    g = ( n( 117 ), n( 113 ) ),
    m = n( 114 ),
    y = ( n( 102 ), n( 105 ), "mixins" ),
    b = [],
    x = {
      mixins: "DEFINE_MANY",
      statics: "DEFINE_MANY",
      propTypes: "DEFINE_MANY",
      contextTypes: "DEFINE_MANY",
      childContextTypes: "DEFINE_MANY",
      getDefaultProps: "DEFINE_MANY_MERGED",
      getInitialState: "DEFINE_MANY_MERGED",
      getChildContext: "DEFINE_MANY_MERGED",
      render: "DEFINE_ONCE",
      componentWillMount: "DEFINE_MANY",
      componentDidMount: "DEFINE_MANY",
      componentWillReceiveProps: "DEFINE_MANY",
      shouldComponentUpdate: "DEFINE_ONCE",
      componentWillUpdate: "DEFINE_MANY",
      componentDidUpdate: "DEFINE_MANY",
      componentWillUnmount: "DEFINE_MANY",
      updateComponent: "OVERRIDE_BASE"
    },
    w = {
      displayName: function ( e, t ) {
        e.displayName = t
      },
      mixins: function ( e, t ) {
        if ( t )
          for ( var n = 0; n < t.length; n++ ) i( e, t[ n ] )
      },
      childContextTypes: function ( e, t ) {
        e.childContextTypes = d( {}, e.childContextTypes, t )
      },
      contextTypes: function ( e, t ) {
        e.contextTypes = d( {}, e.contextTypes, t )
      },
      getDefaultProps: function ( e, t ) {
        e.getDefaultProps ? e.getDefaultProps = l( e.getDefaultProps, t ) : e.getDefaultProps = t
      },
      propTypes: function ( e, t ) {
        e.propTypes = d( {}, e.propTypes, t )
      },
      statics: function ( e, t ) {
        a( e, t )
      },
      autobind: function () {}
    },
    _ = {
      replaceState: function ( e, t ) {
        this.updater.enqueueReplaceState( this, e ), t && this.updater.enqueueCallback( this, t, "replaceState" )
      },
      isMounted: function () {
        return this.updater.isMounted( this )
      }
    },
    C = function () {};
  d( C.prototype, h.prototype, _ );
  var k = {
    createClass: function ( e ) {
      var t = r( function ( e, n, r ) {
        this.__reactAutoBindPairs.length && f( this ), this.props = e, this.context = n, this.refs = m, this.updater = r || g, this.state = null;
        var o = this.getInitialState ? this.getInitialState() : null;
        "object" != typeof o || Array.isArray( o ) ? p( "82", t.displayName || "ReactCompositeComponent" ) : void 0, this.state = o
      } );
      t.prototype = new C, t.prototype.constructor = t, t.prototype.__reactAutoBindPairs = [], b.forEach( i.bind( null, t ) ), i( t, e ), t.getDefaultProps && ( t.defaultProps = t.getDefaultProps() ), t.prototype.render ? void 0 : p( "83" );
      for ( var n in x ) t.prototype[ n ] || ( t.prototype[ n ] = null );
      return t
    },
    injection: {
      injectMixin: function ( e ) {
        b.push( e )
      }
    }
  };
  e.exports = k
}, function ( e, t, n ) {
  "use strict";
  var r = {};
  e.exports = r
}, function ( e, t, n ) {
  "use strict";
  var r = n( 103 ),
    o = r.createFactory,
    i = {
      a: o( "a" ),
      abbr: o( "abbr" ),
      address: o( "address" ),
      area: o( "area" ),
      article: o( "article" ),
      aside: o( "aside" ),
      audio: o( "audio" ),
      b: o( "b" ),
      base: o( "base" ),
      bdi: o( "bdi" ),
      bdo: o( "bdo" ),
      big: o( "big" ),
      blockquote: o( "blockquote" ),
      body: o( "body" ),
      br: o( "br" ),
      button: o( "button" ),
      canvas: o( "canvas" ),
      caption: o( "caption" ),
      cite: o( "cite" ),
      code: o( "code" ),
      col: o( "col" ),
      colgroup: o( "colgroup" ),
      data: o( "data" ),
      datalist: o( "datalist" ),
      dd: o( "dd" ),
      del: o( "del" ),
      details: o( "details" ),
      dfn: o( "dfn" ),
      dialog: o( "dialog" ),
      div: o( "div" ),
      dl: o( "dl" ),
      dt: o( "dt" ),
      em: o( "em" ),
      embed: o( "embed" ),
      fieldset: o( "fieldset" ),
      figcaption: o( "figcaption" ),
      figure: o( "figure" ),
      footer: o( "footer" ),
      form: o( "form" ),
      h1: o( "h1" ),
      h2: o( "h2" ),
      h3: o( "h3" ),
      h4: o( "h4" ),
      h5: o( "h5" ),
      h6: o( "h6" ),
      head: o( "head" ),
      header: o( "header" ),
      hgroup: o( "hgroup" ),
      hr: o( "hr" ),
      html: o( "html" ),
      i: o( "i" ),
      iframe: o( "iframe" ),
      img: o( "img" ),
      input: o( "input" ),
      ins: o( "ins" ),
      kbd: o( "kbd" ),
      keygen: o( "keygen" ),
      label: o( "label" ),
      legend: o( "legend" ),
      li: o( "li" ),
      link: o( "link" ),
      main: o( "main" ),
      map: o( "map" ),
      mark: o( "mark" ),
      menu: o( "menu" ),
      menuitem: o( "menuitem" ),
      meta: o( "meta" ),
      meter: o( "meter" ),
      nav: o( "nav" ),
      noscript: o( "noscript" ),
      object: o( "object" ),
      ol: o( "ol" ),
      optgroup: o( "optgroup" ),
      option: o( "option" ),
      output: o( "output" ),
      p: o( "p" ),
      param: o( "param" ),
      picture: o( "picture" ),
      pre: o( "pre" ),
      progress: o( "progress" ),
      q: o( "q" ),
      rp: o( "rp" ),
      rt: o( "rt" ),
      ruby: o( "ruby" ),
      s: o( "s" ),
      samp: o( "samp" ),
      script: o( "script" ),
      section: o( "section" ),
      select: o( "select" ),
      small: o( "small" ),
      source: o( "source" ),
      span: o( "span" ),
      strong: o( "strong" ),
      style: o( "style" ),
      sub: o( "sub" ),
      summary: o( "summary" ),
      sup: o( "sup" ),
      table: o( "table" ),
      tbody: o( "tbody" ),
      td: o( "td" ),
      textarea: o( "textarea" ),
      tfoot: o( "tfoot" ),
      th: o( "th" ),
      thead: o( "thead" ),
      time: o( "time" ),
      title: o( "title" ),
      tr: o( "tr" ),
      track: o( "track" ),
      u: o( "u" ),
      ul: o( "ul" ),
      var: o( "var" ),
      video: o( "video" ),
      wbr: o( "wbr" ),
      circle: o( "circle" ),
      clipPath: o( "clipPath" ),
      defs: o( "defs" ),
      ellipse: o( "ellipse" ),
      g: o( "g" ),
      image: o( "image" ),
      line: o( "line" ),
      linearGradient: o( "linearGradient" ),
      mask: o( "mask" ),
      path: o( "path" ),
      pattern: o( "pattern" ),
      polygon: o( "polygon" ),
      polyline: o( "polyline" ),
      radialGradient: o( "radialGradient" ),
      rect: o( "rect" ),
      stop: o( "stop" ),
      svg: o( "svg" ),
      text: o( "text" ),
      tspan: o( "tspan" )
    };
  e.exports = i
}, function ( e, t, n ) {
  "use strict";

  function r( e, t ) {
    return e === t ? 0 !== e || 1 / e === 1 / t : e !== e && t !== t
  }

  function o( e ) {
    this.message = e, this.stack = ""
  }

  function i( e ) {
    function t( t, n, r, i, a, s, l ) {
      i = i || S, s = s || r;
      if ( null == n[ r ] ) {
        var u = _[ a ];
        return t ? new o( null === n[ r ] ? "The " + u + " `" + s + "` is marked as required " + ( "in `" + i + "`, but its value is `null`." ) : "The " + u + " `" + s + "` is marked as required in " + ( "`" + i + "`, but its value is `undefined`." ) ) : null
      }
      return e( n, r, i, a, s )
    }
    var n = t.bind( null, !1 );
    return n.isRequired = t.bind( null, !0 ), n
  }

  function a( e ) {
    function t( t, n, r, i, a, s ) {
      var l = t[ n ],
        u = y( l );
      if ( u !== e ) {
        var c = _[ i ],
          f = b( l );
        return new o( "Invalid " + c + " `" + a + "` of type " + ( "`" + f + "` supplied to `" + r + "`, expected " ) + ( "`" + e + "`." ) )
      }
      return null
    }
    return i( t )
  }

  function s() {
    return i( k.thatReturns( null ) )
  }

  function l( e ) {
    function t( t, n, r, i, a ) {
      if ( "function" != typeof e ) return new o( "Property `" + a + "` of component `" + r + "` has invalid PropType notation inside arrayOf." );
      var s = t[ n ];
      if ( !Array.isArray( s ) ) {
        var l = _[ i ],
          u = y( s );
        return new o( "Invalid " + l + " `" + a + "` of type " + ( "`" + u + "` supplied to `" + r + "`, expected an array." ) )
      }
      for ( var c = 0; c < s.length; c++ ) {
        var f = e( s, c, r, i, a + "[" + c + "]", C );
        if ( f instanceof Error ) return f
      }
      return null
    }
    return i( t )
  }

  function u() {
    function e( e, t, n, r, i ) {
      var a = e[ t ];
      if ( !w.isValidElement( a ) ) {
        var s = _[ r ],
          l = y( a );
        return new o( "Invalid " + s + " `" + i + "` of type " + ( "`" + l + "` supplied to `" + n + "`, expected a single ReactElement." ) )
      }
      return null
    }
    return i( e )
  }

  function c( e ) {
    function t( t, n, r, i, a ) {
      if ( !( t[ n ] instanceof e ) ) {
        var s = _[ i ],
          l = e.name || S,
          u = x( t[ n ] );
        return new o( "Invalid " + s + " `" + a + "` of type " + ( "`" + u + "` supplied to `" + r + "`, expected " ) + ( "instance of `" + l + "`." ) )
      }
      return null
    }
    return i( t )
  }

  function f( e ) {
    function t( t, n, i, a, s ) {
      for ( var l = t[ n ], u = 0; u < e.length; u++ )
        if ( r( l, e[ u ] ) ) return null;
      var c = _[ a ],
        f = JSON.stringify( e );
      return new o( "Invalid " + c + " `" + s + "` of value `" + l + "` " + ( "supplied to `" + i + "`, expected one of " + f + "." ) )
    }
    return Array.isArray( e ) ? i( t ) : k.thatReturnsNull
  }

  function p( e ) {
    function t( t, n, r, i, a ) {
      if ( "function" != typeof e ) return new o( "Property `" + a + "` of component `" + r + "` has invalid PropType notation inside objectOf." );
      var s = t[ n ],
        l = y( s );
      if ( "object" !== l ) {
        var u = _[ i ];
        return new o( "Invalid " + u + " `" + a + "` of type " + ( "`" + l + "` supplied to `" + r + "`, expected an object." ) )
      }
      for ( var c in s )
        if ( s.hasOwnProperty( c ) ) {
          var f = e( s, c, r, i, a + "." + c, C );
          if ( f instanceof Error ) return f
        } return null
    }
    return i( t )
  }

  function d( e ) {
    function t( t, n, r, i, a ) {
      for ( var s = 0; s < e.length; s++ ) {
        var l = e[ s ];
        if ( null == l( t, n, r, i, a, C ) ) return null
      }
      var u = _[ i ];
      return new o( "Invalid " + u + " `" + a + "` supplied to " + ( "`" + r + "`." ) )
    }
    return Array.isArray( e ) ? i( t ) : k.thatReturnsNull
  }

  function h() {
    function e( e, t, n, r, i ) {
      if ( !g( e[ t ] ) ) {
        var a = _[ r ];
        return new o( "Invalid " + a + " `" + i + "` supplied to " + ( "`" + n + "`, expected a ReactNode." ) )
      }
      return null
    }
    return i( e )
  }

  function v( e ) {
    function t( t, n, r, i, a ) {
      var s = t[ n ],
        l = y( s );
      if ( "object" !== l ) {
        var u = _[ i ];
        return new o( "Invalid " + u + " `" + a + "` of type `" + l + "` " + ( "supplied to `" + r + "`, expected `object`." ) )
      }
      for ( var c in e ) {
        var f = e[ c ];
        if ( f ) {
          var p = f( s, c, r, i, a + "." + c, C );
          if ( p ) return p
        }
      }
      return null
    }
    return i( t )
  }

  function g( e ) {
    switch ( typeof e ) {
      case "number":
      case "string":
      case "undefined":
        return !0;
      case "boolean":
        return !e;
      case "object":
        if ( Array.isArray( e ) ) return e.every( g );
        if ( null === e || w.isValidElement( e ) ) return !0;
        var t = E( e );
        if ( !t ) return !1;
        var n, r = t.call( e );
        if ( t !== e.entries ) {
          for ( ; !( n = r.next() ).done; )
            if ( !g( n.value ) ) return !1
        } else
          for ( ; !( n = r.next() ).done; ) {
            var o = n.value;
            if ( o && !g( o[ 1 ] ) ) return !1
          }
        return !0;
      default:
        return !1
    }
  }

  function m( e, t ) {
    return "symbol" === e || ( "Symbol" === t[ "@@toStringTag" ] || "function" == typeof Symbol && t instanceof Symbol )
  }

  function y( e ) {
    var t = typeof e;
    return Array.isArray( e ) ? "array" : e instanceof RegExp ? "object" : m( t, e ) ? "symbol" : t
  }

  function b( e ) {
    var t = y( e );
    if ( "object" === t ) {
      if ( e instanceof Date ) return "date";
      if ( e instanceof RegExp ) return "regexp"
    }
    return t
  }

  function x( e ) {
    return e.constructor && e.constructor.name ? e.constructor.name : S
  }
  var w = n( 103 ),
    _ = n( 117 ),
    C = n( 120 ),
    k = n( 106 ),
    E = n( 110 ),
    S = ( n( 105 ), "<<anonymous>>" ),
    T = {
      array: a( "array" ),
      bool: a( "boolean" ),
      func: a( "function" ),
      number: a( "number" ),
      object: a( "object" ),
      string: a( "string" ),
      symbol: a( "symbol" ),
      any: s(),
      arrayOf: l,
      element: u(),
      instanceOf: c,
      node: h(),
      objectOf: p,
      oneOf: f,
      oneOfType: d,
      shape: v
    };
  o.prototype = Error.prototype, e.exports = T
}, function ( e, t ) {
  "use strict";
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  e.exports = n
}, function ( e, t ) {
  "use strict";
  e.exports = "15.4.2"
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    return i.isValidElement( e ) ? void 0 : o( "143" ), e
  }
  var o = n( 101 ),
    i = n( 103 );
  n( 102 );
  e.exports = r
}, function ( e, t, n ) {
  "use strict";
  e.exports = n( 124 )
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    var t = e.trim().toLowerCase();
    return !m.test( t ) || !!y.test( t )
  }

  function o( e ) {
    var t = h.parse( e, !0 );
    if ( t.hostname && ( !t.protocol || b.indexOf( t.protocol ) >= 0 ) ) try {
      t.hostname = v.toASCII( t.hostname )
    } catch ( e ) {}
    return h.encode( h.format( t ) )
  }

  function i( e ) {
    var t = h.parse( e, !0 );
    if ( t.hostname && ( !t.protocol || b.indexOf( t.protocol ) >= 0 ) ) try {
      t.hostname = v.toUnicode( t.hostname )
    } catch ( e ) {}
    return h.decode( h.format( t ) )
  }

  function a( e, t ) {
    return this instanceof a ? ( t || s.isString( e ) || ( t = e || {}, e = "default" ), this.inline = new p, this.block = new f, this.core = new c, this.renderer = new u, this.linkify = new d, this.validateLink = r, this.normalizeLink = o, this.normalizeLinkText = i, this.utils = s, this.helpers = l, this.options = {}, this.configure( e ), void( t && this.set( t ) ) ) : new a( e, t )
  }
  var s = n( 125 ),
    l = n( 139 ),
    u = n( 143 ),
    c = n( 144 ),
    f = n( 154 ),
    p = n( 169 ),
    d = n( 184 ),
    h = n( 129 ),
    v = n( 186 ),
    g = {
      default: n( 188 ),
      zero: n( 189 ),
      commonmark: n( 190 )
    },
    m = /^(vbscript|javascript|file|data):/,
    y = /^data:image\/(gif|png|jpeg|webp);/,
    b = [ "http:", "https:", "mailto:" ];
  a.prototype.set = function ( e ) {
    return s.assign( this.options, e ), this
  }, a.prototype.configure = function ( e ) {
    var t, n = this;
    if ( s.isString( e ) && ( t = e, e = g[ t ], !e ) ) throw new Error( 'Wrong `markdown-it` preset "' + t + '", check name' );
    if ( !e ) throw new Error( "Wrong `markdown-it` preset, can't be empty" );
    return e.options && n.set( e.options ), e.components && Object.keys( e.components ).forEach( function ( t ) {
      e.components[ t ].rules && n[ t ].ruler.enableOnly( e.components[ t ].rules ), e.components[ t ].rules2 && n[ t ].ruler2.enableOnly( e.components[ t ].rules2 )
    } ), this
  }, a.prototype.enable = function ( e, t ) {
    var n = [];
    Array.isArray( e ) || ( e = [ e ] ), [ "core", "block", "inline" ].forEach( function ( t ) {
      n = n.concat( this[ t ].ruler.enable( e, !0 ) )
    }, this ), n = n.concat( this.inline.ruler2.enable( e, !0 ) );
    var r = e.filter( function ( e ) {
      return n.indexOf( e ) < 0
    } );
    if ( r.length && !t ) throw new Error( "MarkdownIt. Failed to enable unknown rule(s): " + r );
    return this
  }, a.prototype.disable = function ( e, t ) {
    var n = [];
    Array.isArray( e ) || ( e = [ e ] ), [ "core", "block", "inline" ].forEach( function ( t ) {
      n = n.concat( this[ t ].ruler.disable( e, !0 ) )
    }, this ), n = n.concat( this.inline.ruler2.disable( e, !0 ) );
    var r = e.filter( function ( e ) {
      return n.indexOf( e ) < 0
    } );
    if ( r.length && !t ) throw new Error( "MarkdownIt. Failed to disable unknown rule(s): " + r );
    return this
  }, a.prototype.use = function ( e ) {
    var t = [ this ].concat( Array.prototype.slice.call( arguments, 1 ) );
    return e.apply( e, t ), this
  }, a.prototype.parse = function ( e, t ) {
    var n = new this.core.State( e, this, t );
    return this.core.process( n ), n.tokens
  }, a.prototype.render = function ( e, t ) {
    return t = t || {}, this.renderer.render( this.parse( e, t ), this.options, t )
  }, a.prototype.parseInline = function ( e, t ) {
    var n = new this.core.State( e, this, t );
    return n.inlineMode = !0, this.core.process( n ), n.tokens
  }, a.prototype.renderInline = function ( e, t ) {
    return t = t || {}, this.renderer.render( this.parseInline( e, t ), this.options, t )
  }, e.exports = a
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    return Object.prototype.toString.call( e )
  }

  function o( e ) {
    return "[object String]" === r( e )
  }

  function i( e, t ) {
    return w.call( e, t )
  }

  function a( e ) {
    var t = Array.prototype.slice.call( arguments, 1 );
    return t.forEach( function ( t ) {
      if ( t ) {
        if ( "object" != typeof t ) throw new TypeError( t + "must be object" );
        Object.keys( t ).forEach( function ( n ) {
          e[ n ] = t[ n ]
        } )
      }
    } ), e
  }

  function s( e, t, n ) {
    return [].concat( e.slice( 0, t ), n, e.slice( t + 1 ) )
  }

  function l( e ) {
    return !( e >= 55296 && e <= 57343 ) && ( !( e >= 64976 && e <= 65007 ) && ( 65535 !== ( 65535 & e ) && 65534 !== ( 65535 & e ) && ( !( e >= 0 && e <= 8 ) && ( 11 !== e && ( !( e >= 14 && e <= 31 ) && ( !( e >= 127 && e <= 159 ) && !( e > 1114111 ) ) ) ) ) ) )
  }

  function u( e ) {
    if ( e > 65535 ) {
      e -= 65536;
      var t = 55296 + ( e >> 10 ),
        n = 56320 + ( 1023 & e );
      return String.fromCharCode( t, n )
    }
    return String.fromCharCode( e )
  }

  function c( e, t ) {
    var n = 0;
    return i( S, t ) ? S[ t ] : 35 === t.charCodeAt( 0 ) && E.test( t ) && ( n = "x" === t[ 1 ].toLowerCase() ? parseInt( t.slice( 2 ), 16 ) : parseInt( t.slice( 1 ), 10 ), l( n ) ) ? u( n ) : e
  }

  function f( e ) {
    return e.indexOf( "\\" ) < 0 ? e : e.replace( _, "$1" )
  }

  function p( e ) {
    return e.indexOf( "\\" ) < 0 && e.indexOf( "&" ) < 0 ? e : e.replace( k, function ( e, t, n ) {
      return t ? t : c( e, n )
    } )
  }

  function d( e ) {
    return M[ e ]
  }

  function h( e ) {
    return T.test( e ) ? e.replace( A, d ) : e
  }

  function v( e ) {
    return e.replace( O, "\\$&" )
  }

  function g( e ) {
    switch ( e ) {
      case 9:
      case 32:
        return !0
    }
    return !1
  }

  function m( e ) {
    if ( e >= 8192 && e <= 8202 ) return !0;
    switch ( e ) {
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 32:
      case 160:
      case 5760:
      case 8239:
      case 8287:
      case 12288:
        return !0
    }
    return !1
  }

  function y( e ) {
    return N.test( e )
  }

  function b( e ) {
    switch ( e ) {
      case 33:
      case 34:
      case 35:
      case 36:
      case 37:
      case 38:
      case 39:
      case 40:
      case 41:
      case 42:
      case 43:
      case 44:
      case 45:
      case 46:
      case 47:
      case 58:
      case 59:
      case 60:
      case 61:
      case 62:
      case 63:
      case 64:
      case 91:
      case 92:
      case 93:
      case 94:
      case 95:
      case 96:
      case 123:
      case 124:
      case 125:
      case 126:
        return !0;
      default:
        return !1
    }
  }

  function x( e ) {
    return e.trim().replace( /\s+/g, " " ).toUpperCase()
  }
  var w = Object.prototype.hasOwnProperty,
    _ = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,
    C = /&([a-z#][a-z0-9]{1,31});/gi,
    k = new RegExp( _.source + "|" + C.source, "gi" ),
    E = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,
    S = n( 126 ),
    T = /[&<>"]/,
    A = /[&<>"]/g,
    M = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;"
    },
    O = /[.?*+^$[\]\\(){}|-]/g,
    N = n( 128 );
  t.lib = {}, t.lib.mdurl = n( 129 ), t.lib.ucmicro = n( 134 ), t.assign = a, t.isString = o, t.has = i, t.unescapeMd = f, t.unescapeAll = p, t.isValidEntityCode = l, t.fromCodePoint = u, t.escapeHtml = h, t.arrayReplaceAt = s, t.isSpace = g, t.isWhiteSpace = m, t.isMdAsciiPunct = b, t.isPunctChar = y, t.escapeRE = v, t.normalizeReference = x
}, function ( e, t, n ) {
  "use strict";
  e.exports = n( 127 )
}, function ( e, t ) {
  e.exports = {
    Aacute: "Á",
    aacute: "á",
    Abreve: "Ă",
    abreve: "ă",
    ac: "∾",
    acd: "∿",
    acE: "∾̳",
    Acirc: "Â",
    acirc: "â",
    acute: "´",
    Acy: "А",
    acy: "а",
    AElig: "Æ",
    aelig: "æ",
    af: "⁡",
    Afr: "𝔄",
    afr: "𝔞",
    Agrave: "À",
    agrave: "à",
    alefsym: "ℵ",
    aleph: "ℵ",
    Alpha: "Α",
    alpha: "α",
    Amacr: "Ā",
    amacr: "ā",
    amalg: "⨿",
    amp: "&",
    AMP: "&",
    andand: "⩕",
    And: "⩓",
    and: "∧",
    andd: "⩜",
    andslope: "⩘",
    andv: "⩚",
    ang: "∠",
    ange: "⦤",
    angle: "∠",
    angmsdaa: "⦨",
    angmsdab: "⦩",
    angmsdac: "⦪",
    angmsdad: "⦫",
    angmsdae: "⦬",
    angmsdaf: "⦭",
    angmsdag: "⦮",
    angmsdah: "⦯",
    angmsd: "∡",
    angrt: "∟",
    angrtvb: "⊾",
    angrtvbd: "⦝",
    angsph: "∢",
    angst: "Å",
    angzarr: "⍼",
    Aogon: "Ą",
    aogon: "ą",
    Aopf: "𝔸",
    aopf: "𝕒",
    apacir: "⩯",
    ap: "≈",
    apE: "⩰",
    ape: "≊",
    apid: "≋",
    apos: "'",
    ApplyFunction: "⁡",
    approx: "≈",
    approxeq: "≊",
    Aring: "Å",
    aring: "å",
    Ascr: "𝒜",
    ascr: "𝒶",
    Assign: "≔",
    ast: "*",
    asymp: "≈",
    asympeq: "≍",
    Atilde: "Ã",
    atilde: "ã",
    Auml: "Ä",
    auml: "ä",
    awconint: "∳",
    awint: "⨑",
    backcong: "≌",
    backepsilon: "϶",
    backprime: "‵",
    backsim: "∽",
    backsimeq: "⋍",
    Backslash: "∖",
    Barv: "⫧",
    barvee: "⊽",
    barwed: "⌅",
    Barwed: "⌆",
    barwedge: "⌅",
    bbrk: "⎵",
    bbrktbrk: "⎶",
    bcong: "≌",
    Bcy: "Б",
    bcy: "б",
    bdquo: "„",
    becaus: "∵",
    because: "∵",
    Because: "∵",
    bemptyv: "⦰",
    bepsi: "϶",
    bernou: "ℬ",
    Bernoullis: "ℬ",
    Beta: "Β",
    beta: "β",
    beth: "ℶ",
    between: "≬",
    Bfr: "𝔅",
    bfr: "𝔟",
    bigcap: "⋂",
    bigcirc: "◯",
    bigcup: "⋃",
    bigodot: "⨀",
    bigoplus: "⨁",
    bigotimes: "⨂",
    bigsqcup: "⨆",
    bigstar: "★",
    bigtriangledown: "▽",
    bigtriangleup: "△",
    biguplus: "⨄",
    bigvee: "⋁",
    bigwedge: "⋀",
    bkarow: "⤍",
    blacklozenge: "⧫",
    blacksquare: "▪",
    blacktriangle: "▴",
    blacktriangledown: "▾",
    blacktriangleleft: "◂",
    blacktriangleright: "▸",
    blank: "␣",
    blk12: "▒",
    blk14: "░",
    blk34: "▓",
    block: "█",
    bne: "=⃥",
    bnequiv: "≡⃥",
    bNot: "⫭",
    bnot: "⌐",
    Bopf: "𝔹",
    bopf: "𝕓",
    bot: "⊥",
    bottom: "⊥",
    bowtie: "⋈",
    boxbox: "⧉",
    boxdl: "┐",
    boxdL: "╕",
    boxDl: "╖",
    boxDL: "╗",
    boxdr: "┌",
    boxdR: "╒",
    boxDr: "╓",
    boxDR: "╔",
    boxh: "─",
    boxH: "═",
    boxhd: "┬",
    boxHd: "╤",
    boxhD: "╥",
    boxHD: "╦",
    boxhu: "┴",
    boxHu: "╧",
    boxhU: "╨",
    boxHU: "╩",
    boxminus: "⊟",
    boxplus: "⊞",
    boxtimes: "⊠",
    boxul: "┘",
    boxuL: "╛",
    boxUl: "╜",
    boxUL: "╝",
    boxur: "└",
    boxuR: "╘",
    boxUr: "╙",
    boxUR: "╚",
    boxv: "│",
    boxV: "║",
    boxvh: "┼",
    boxvH: "╪",
    boxVh: "╫",
    boxVH: "╬",
    boxvl: "┤",
    boxvL: "╡",
    boxVl: "╢",
    boxVL: "╣",
    boxvr: "├",
    boxvR: "╞",
    boxVr: "╟",
    boxVR: "╠",
    bprime: "‵",
    breve: "˘",
    Breve: "˘",
    brvbar: "¦",
    bscr: "𝒷",
    Bscr: "ℬ",
    bsemi: "⁏",
    bsim: "∽",
    bsime: "⋍",
    bsolb: "⧅",
    bsol: "\\",
    bsolhsub: "⟈",
    bull: "•",
    bullet: "•",
    bump: "≎",
    bumpE: "⪮",
    bumpe: "≏",
    Bumpeq: "≎",
    bumpeq: "≏",
    Cacute: "Ć",
    cacute: "ć",
    capand: "⩄",
    capbrcup: "⩉",
    capcap: "⩋",
    cap: "∩",
    Cap: "⋒",
    capcup: "⩇",
    capdot: "⩀",
    CapitalDifferentialD: "ⅅ",
    caps: "∩︀",
    caret: "⁁",
    caron: "ˇ",
    Cayleys: "ℭ",
    ccaps: "⩍",
    Ccaron: "Č",
    ccaron: "č",
    Ccedil: "Ç",
    ccedil: "ç",
    Ccirc: "Ĉ",
    ccirc: "ĉ",
    Cconint: "∰",
    ccups: "⩌",
    ccupssm: "⩐",
    Cdot: "Ċ",
    cdot: "ċ",
    cedil: "¸",
    Cedilla: "¸",
    cemptyv: "⦲",
    cent: "¢",
    centerdot: "·",
    CenterDot: "·",
    cfr: "𝔠",
    Cfr: "ℭ",
    CHcy: "Ч",
    chcy: "ч",
    check: "✓",
    checkmark: "✓",
    Chi: "Χ",
    chi: "χ",
    circ: "ˆ",
    circeq: "≗",
    circlearrowleft: "↺",
    circlearrowright: "↻",
    circledast: "⊛",
    circledcirc: "⊚",
    circleddash: "⊝",
    CircleDot: "⊙",
    circledR: "®",
    circledS: "Ⓢ",
    CircleMinus: "⊖",
    CirclePlus: "⊕",
    CircleTimes: "⊗",
    cir: "○",
    cirE: "⧃",
    cire: "≗",
    cirfnint: "⨐",
    cirmid: "⫯",
    cirscir: "⧂",
    ClockwiseContourIntegral: "∲",
    CloseCurlyDoubleQuote: "”",
    CloseCurlyQuote: "’",
    clubs: "♣",
    clubsuit: "♣",
    colon: ":",
    Colon: "∷",
    Colone: "⩴",
    colone: "≔",
    coloneq: "≔",
    comma: ",",
    commat: "@",
    comp: "∁",
    compfn: "∘",
    complement: "∁",
    complexes: "ℂ",
    cong: "≅",
    congdot: "⩭",
    Congruent: "≡",
    conint: "∮",
    Conint: "∯",
    ContourIntegral: "∮",
    copf: "𝕔",
    Copf: "ℂ",
    coprod: "∐",
    Coproduct: "∐",
    copy: "©",
    COPY: "©",
    copysr: "℗",
    CounterClockwiseContourIntegral: "∳",
    crarr: "↵",
    cross: "✗",
    Cross: "⨯",
    Cscr: "𝒞",
    cscr: "𝒸",
    csub: "⫏",
    csube: "⫑",
    csup: "⫐",
    csupe: "⫒",
    ctdot: "⋯",
    cudarrl: "⤸",
    cudarrr: "⤵",
    cuepr: "⋞",
    cuesc: "⋟",
    cularr: "↶",
    cularrp: "⤽",
    cupbrcap: "⩈",
    cupcap: "⩆",
    CupCap: "≍",
    cup: "∪",
    Cup: "⋓",
    cupcup: "⩊",
    cupdot: "⊍",
    cupor: "⩅",
    cups: "∪︀",
    curarr: "↷",
    curarrm: "⤼",
    curlyeqprec: "⋞",
    curlyeqsucc: "⋟",
    curlyvee: "⋎",
    curlywedge: "⋏",
    curren: "¤",
    curvearrowleft: "↶",
    curvearrowright: "↷",
    cuvee: "⋎",
    cuwed: "⋏",
    cwconint: "∲",
    cwint: "∱",
    cylcty: "⌭",
    dagger: "†",
    Dagger: "‡",
    daleth: "ℸ",
    darr: "↓",
    Darr: "↡",
    dArr: "⇓",
    dash: "‐",
    Dashv: "⫤",
    dashv: "⊣",
    dbkarow: "⤏",
    dblac: "˝",
    Dcaron: "Ď",
    dcaron: "ď",
    Dcy: "Д",
    dcy: "д",
    ddagger: "‡",
    ddarr: "⇊",
    DD: "ⅅ",
    dd: "ⅆ",
    DDotrahd: "⤑",
    ddotseq: "⩷",
    deg: "°",
    Del: "∇",
    Delta: "Δ",
    delta: "δ",
    demptyv: "⦱",
    dfisht: "⥿",
    Dfr: "𝔇",
    dfr: "𝔡",
    dHar: "⥥",
    dharl: "⇃",
    dharr: "⇂",
    DiacriticalAcute: "´",
    DiacriticalDot: "˙",
    DiacriticalDoubleAcute: "˝",
    DiacriticalGrave: "`",
    DiacriticalTilde: "˜",
    diam: "⋄",
    diamond: "⋄",
    Diamond: "⋄",
    diamondsuit: "♦",
    diams: "♦",
    die: "¨",
    DifferentialD: "ⅆ",
    digamma: "ϝ",
    disin: "⋲",
    div: "÷",
    divide: "÷",
    divideontimes: "⋇",
    divonx: "⋇",
    DJcy: "Ђ",
    djcy: "ђ",
    dlcorn: "⌞",
    dlcrop: "⌍",
    dollar: "$",
    Dopf: "𝔻",
    dopf: "𝕕",
    Dot: "¨",
    dot: "˙",
    DotDot: "⃜",
    doteq: "≐",
    doteqdot: "≑",
    DotEqual: "≐",
    dotminus: "∸",
    dotplus: "∔",
    dotsquare: "⊡",
    doublebarwedge: "⌆",
    DoubleContourIntegral: "∯",
    DoubleDot: "¨",
    DoubleDownArrow: "⇓",
    DoubleLeftArrow: "⇐",
    DoubleLeftRightArrow: "⇔",
    DoubleLeftTee: "⫤",
    DoubleLongLeftArrow: "⟸",
    DoubleLongLeftRightArrow: "⟺",
    DoubleLongRightArrow: "⟹",
    DoubleRightArrow: "⇒",
    DoubleRightTee: "⊨",
    DoubleUpArrow: "⇑",
    DoubleUpDownArrow: "⇕",
    DoubleVerticalBar: "∥",
    DownArrowBar: "⤓",
    downarrow: "↓",
    DownArrow: "↓",
    Downarrow: "⇓",
    DownArrowUpArrow: "⇵",
    DownBreve: "̑",
    downdownarrows: "⇊",
    downharpoonleft: "⇃",
    downharpoonright: "⇂",
    DownLeftRightVector: "⥐",
    DownLeftTeeVector: "⥞",
    DownLeftVectorBar: "⥖",
    DownLeftVector: "↽",
    DownRightTeeVector: "⥟",
    DownRightVectorBar: "⥗",
    DownRightVector: "⇁",
    DownTeeArrow: "↧",
    DownTee: "⊤",
    drbkarow: "⤐",
    drcorn: "⌟",
    drcrop: "⌌",
    Dscr: "𝒟",
    dscr: "𝒹",
    DScy: "Ѕ",
    dscy: "ѕ",
    dsol: "⧶",
    Dstrok: "Đ",
    dstrok: "đ",
    dtdot: "⋱",
    dtri: "▿",
    dtrif: "▾",
    duarr: "⇵",
    duhar: "⥯",
    dwangle: "⦦",
    DZcy: "Џ",
    dzcy: "џ",
    dzigrarr: "⟿",
    Eacute: "É",
    eacute: "é",
    easter: "⩮",
    Ecaron: "Ě",
    ecaron: "ě",
    Ecirc: "Ê",
    ecirc: "ê",
    ecir: "≖",
    ecolon: "≕",
    Ecy: "Э",
    ecy: "э",
    eDDot: "⩷",
    Edot: "Ė",
    edot: "ė",
    eDot: "≑",
    ee: "ⅇ",
    efDot: "≒",
    Efr: "𝔈",
    efr: "𝔢",
    eg: "⪚",
    Egrave: "È",
    egrave: "è",
    egs: "⪖",
    egsdot: "⪘",
    el: "⪙",
    Element: "∈",
    elinters: "⏧",
    ell: "ℓ",
    els: "⪕",
    elsdot: "⪗",
    Emacr: "Ē",
    emacr: "ē",
    empty: "∅",
    emptyset: "∅",
    EmptySmallSquare: "◻",
    emptyv: "∅",
    EmptyVerySmallSquare: "▫",
    emsp13: " ",
    emsp14: " ",
    emsp: " ",
    ENG: "Ŋ",
    eng: "ŋ",
    ensp: " ",
    Eogon: "Ę",
    eogon: "ę",
    Eopf: "𝔼",
    eopf: "𝕖",
    epar: "⋕",
    eparsl: "⧣",
    eplus: "⩱",
    epsi: "ε",
    Epsilon: "Ε",
    epsilon: "ε",
    epsiv: "ϵ",
    eqcirc: "≖",
    eqcolon: "≕",
    eqsim: "≂",
    eqslantgtr: "⪖",
    eqslantless: "⪕",
    Equal: "⩵",
    equals: "=",
    EqualTilde: "≂",
    equest: "≟",
    Equilibrium: "⇌",
    equiv: "≡",
    equivDD: "⩸",
    eqvparsl: "⧥",
    erarr: "⥱",
    erDot: "≓",
    escr: "ℯ",
    Escr: "ℰ",
    esdot: "≐",
    Esim: "⩳",
    esim: "≂",
    Eta: "Η",
    eta: "η",
    ETH: "Ð",
    eth: "ð",
    Euml: "Ë",
    euml: "ë",
    euro: "€",
    excl: "!",
    exist: "∃",
    Exists: "∃",
    expectation: "ℰ",
    exponentiale: "ⅇ",
    ExponentialE: "ⅇ",
    fallingdotseq: "≒",
    Fcy: "Ф",
    fcy: "ф",
    female: "♀",
    ffilig: "ﬃ",
    fflig: "ﬀ",
    ffllig: "ﬄ",
    Ffr: "𝔉",
    ffr: "𝔣",
    filig: "ﬁ",
    FilledSmallSquare: "◼",
    FilledVerySmallSquare: "▪",
    fjlig: "fj",
    flat: "♭",
    fllig: "ﬂ",
    fltns: "▱",
    fnof: "ƒ",
    Fopf: "𝔽",
    fopf: "𝕗",
    forall: "∀",
    ForAll: "∀",
    fork: "⋔",
    forkv: "⫙",
    Fouriertrf: "ℱ",
    fpartint: "⨍",
    frac12: "½",
    frac13: "⅓",
    frac14: "¼",
    frac15: "⅕",
    frac16: "⅙",
    frac18: "⅛",
    frac23: "⅔",
    frac25: "⅖",
    frac34: "¾",
    frac35: "⅗",
    frac38: "⅜",
    frac45: "⅘",
    frac56: "⅚",
    frac58: "⅝",
    frac78: "⅞",
    frasl: "⁄",
    frown: "⌢",
    fscr: "𝒻",
    Fscr: "ℱ",
    gacute: "ǵ",
    Gamma: "Γ",
    gamma: "γ",
    Gammad: "Ϝ",
    gammad: "ϝ",
    gap: "⪆",
    Gbreve: "Ğ",
    gbreve: "ğ",
    Gcedil: "Ģ",
    Gcirc: "Ĝ",
    gcirc: "ĝ",
    Gcy: "Г",
    gcy: "г",
    Gdot: "Ġ",
    gdot: "ġ",
    ge: "≥",
    gE: "≧",
    gEl: "⪌",
    gel: "⋛",
    geq: "≥",
    geqq: "≧",
    geqslant: "⩾",
    gescc: "⪩",
    ges: "⩾",
    gesdot: "⪀",
    gesdoto: "⪂",
    gesdotol: "⪄",
    gesl: "⋛︀",
    gesles: "⪔",
    Gfr: "𝔊",
    gfr: "𝔤",
    gg: "≫",
    Gg: "⋙",
    ggg: "⋙",
    gimel: "ℷ",
    GJcy: "Ѓ",
    gjcy: "ѓ",
    gla: "⪥",
    gl: "≷",
    glE: "⪒",
    glj: "⪤",
    gnap: "⪊",
    gnapprox: "⪊",
    gne: "⪈",
    gnE: "≩",
    gneq: "⪈",
    gneqq: "≩",
    gnsim: "⋧",
    Gopf: "𝔾",
    gopf: "𝕘",
    grave: "`",
    GreaterEqual: "≥",
    GreaterEqualLess: "⋛",
    GreaterFullEqual: "≧",
    GreaterGreater: "⪢",
    GreaterLess: "≷",
    GreaterSlantEqual: "⩾",
    GreaterTilde: "≳",
    Gscr: "𝒢",
    gscr: "ℊ",
    gsim: "≳",
    gsime: "⪎",
    gsiml: "⪐",
    gtcc: "⪧",
    gtcir: "⩺",
    gt: ">",
    GT: ">",
    Gt: "≫",
    gtdot: "⋗",
    gtlPar: "⦕",
    gtquest: "⩼",
    gtrapprox: "⪆",
    gtrarr: "⥸",
    gtrdot: "⋗",
    gtreqless: "⋛",
    gtreqqless: "⪌",
    gtrless: "≷",
    gtrsim: "≳",
    gvertneqq: "≩︀",
    gvnE: "≩︀",
    Hacek: "ˇ",
    hairsp: " ",
    half: "½",
    hamilt: "ℋ",
    HARDcy: "Ъ",
    hardcy: "ъ",
    harrcir: "⥈",
    harr: "↔",
    hArr: "⇔",
    harrw: "↭",
    Hat: "^",
    hbar: "ℏ",
    Hcirc: "Ĥ",
    hcirc: "ĥ",
    hearts: "♥",
    heartsuit: "♥",
    hellip: "…",
    hercon: "⊹",
    hfr: "𝔥",
    Hfr: "ℌ",
    HilbertSpace: "ℋ",
    hksearow: "⤥",
    hkswarow: "⤦",
    hoarr: "⇿",
    homtht: "∻",
    hookleftarrow: "↩",
    hookrightarrow: "↪",
    hopf: "𝕙",
    Hopf: "ℍ",
    horbar: "―",
    HorizontalLine: "─",
    hscr: "𝒽",
    Hscr: "ℋ",
    hslash: "ℏ",
    Hstrok: "Ħ",
    hstrok: "ħ",
    HumpDownHump: "≎",
    HumpEqual: "≏",
    hybull: "⁃",
    hyphen: "‐",
    Iacute: "Í",
    iacute: "í",
    ic: "⁣",
    Icirc: "Î",
    icirc: "î",
    Icy: "И",
    icy: "и",
    Idot: "İ",
    IEcy: "Е",
    iecy: "е",
    iexcl: "¡",
    iff: "⇔",
    ifr: "𝔦",
    Ifr: "ℑ",
    Igrave: "Ì",
    igrave: "ì",
    ii: "ⅈ",
    iiiint: "⨌",
    iiint: "∭",
    iinfin: "⧜",
    iiota: "℩",
    IJlig: "Ĳ",
    ijlig: "ĳ",
    Imacr: "Ī",
    imacr: "ī",
    image: "ℑ",
    ImaginaryI: "ⅈ",
    imagline: "ℐ",
    imagpart: "ℑ",
    imath: "ı",
    Im: "ℑ",
    imof: "⊷",
    imped: "Ƶ",
    Implies: "⇒",
    incare: "℅",
    in: "∈",
    infin: "∞",
    infintie: "⧝",
    inodot: "ı",
    intcal: "⊺",
    int: "∫",
    Int: "∬",
    integers: "ℤ",
    Integral: "∫",
    intercal: "⊺",
    Intersection: "⋂",
    intlarhk: "⨗",
    intprod: "⨼",
    InvisibleComma: "⁣",
    InvisibleTimes: "⁢",
    IOcy: "Ё",
    iocy: "ё",
    Iogon: "Į",
    iogon: "į",
    Iopf: "𝕀",
    iopf: "𝕚",
    Iota: "Ι",
    iota: "ι",
    iprod: "⨼",
    iquest: "¿",
    iscr: "𝒾",
    Iscr: "ℐ",
    isin: "∈",
    isindot: "⋵",
    isinE: "⋹",
    isins: "⋴",
    isinsv: "⋳",
    isinv: "∈",
    it: "⁢",
    Itilde: "Ĩ",
    itilde: "ĩ",
    Iukcy: "І",
    iukcy: "і",
    Iuml: "Ï",
    iuml: "ï",
    Jcirc: "Ĵ",
    jcirc: "ĵ",
    Jcy: "Й",
    jcy: "й",
    Jfr: "𝔍",
    jfr: "𝔧",
    jmath: "ȷ",
    Jopf: "𝕁",
    jopf: "𝕛",
    Jscr: "𝒥",
    jscr: "𝒿",
    Jsercy: "Ј",
    jsercy: "ј",
    Jukcy: "Є",
    jukcy: "є",
    Kappa: "Κ",
    kappa: "κ",
    kappav: "ϰ",
    Kcedil: "Ķ",
    kcedil: "ķ",
    Kcy: "К",
    kcy: "к",
    Kfr: "𝔎",
    kfr: "𝔨",
    kgreen: "ĸ",
    KHcy: "Х",
    khcy: "х",
    KJcy: "Ќ",
    kjcy: "ќ",
    Kopf: "𝕂",
    kopf: "𝕜",
    Kscr: "𝒦",
    kscr: "𝓀",
    lAarr: "⇚",
    Lacute: "Ĺ",
    lacute: "ĺ",
    laemptyv: "⦴",
    lagran: "ℒ",
    Lambda: "Λ",
    lambda: "λ",
    lang: "⟨",
    Lang: "⟪",
    langd: "⦑",
    langle: "⟨",
    lap: "⪅",
    Laplacetrf: "ℒ",
    laquo: "«",
    larrb: "⇤",
    larrbfs: "⤟",
    larr: "←",
    Larr: "↞",
    lArr: "⇐",
    larrfs: "⤝",
    larrhk: "↩",
    larrlp: "↫",
    larrpl: "⤹",
    larrsim: "⥳",
    larrtl: "↢",
    latail: "⤙",
    lAtail: "⤛",
    lat: "⪫",
    late: "⪭",
    lates: "⪭︀",
    lbarr: "⤌",
    lBarr: "⤎",
    lbbrk: "❲",
    lbrace: "{",
    lbrack: "[",
    lbrke: "⦋",
    lbrksld: "⦏",
    lbrkslu: "⦍",
    Lcaron: "Ľ",
    lcaron: "ľ",
    Lcedil: "Ļ",
    lcedil: "ļ",
    lceil: "⌈",
    lcub: "{",
    Lcy: "Л",
    lcy: "л",
    ldca: "⤶",
    ldquo: "“",
    ldquor: "„",
    ldrdhar: "⥧",
    ldrushar: "⥋",
    ldsh: "↲",
    le: "≤",
    lE: "≦",
    LeftAngleBracket: "⟨",
    LeftArrowBar: "⇤",
    leftarrow: "←",
    LeftArrow: "←",
    Leftarrow: "⇐",
    LeftArrowRightArrow: "⇆",
    leftarrowtail: "↢",
    LeftCeiling: "⌈",
    LeftDoubleBracket: "⟦",
    LeftDownTeeVector: "⥡",
    LeftDownVectorBar: "⥙",
    LeftDownVector: "⇃",
    LeftFloor: "⌊",
    leftharpoondown: "↽",
    leftharpoonup: "↼",
    leftleftarrows: "⇇",
    leftrightarrow: "↔",
    LeftRightArrow: "↔",
    Leftrightarrow: "⇔",
    leftrightarrows: "⇆",
    leftrightharpoons: "⇋",
    leftrightsquigarrow: "↭",
    LeftRightVector: "⥎",
    LeftTeeArrow: "↤",
    LeftTee: "⊣",
    LeftTeeVector: "⥚",
    leftthreetimes: "⋋",
    LeftTriangleBar: "⧏",
    LeftTriangle: "⊲",
    LeftTriangleEqual: "⊴",
    LeftUpDownVector: "⥑",
    LeftUpTeeVector: "⥠",
    LeftUpVectorBar: "⥘",
    LeftUpVector: "↿",
    LeftVectorBar: "⥒",
    LeftVector: "↼",
    lEg: "⪋",
    leg: "⋚",
    leq: "≤",
    leqq: "≦",
    leqslant: "⩽",
    lescc: "⪨",
    les: "⩽",
    lesdot: "⩿",
    lesdoto: "⪁",
    lesdotor: "⪃",
    lesg: "⋚︀",
    lesges: "⪓",
    lessapprox: "⪅",
    lessdot: "⋖",
    lesseqgtr: "⋚",
    lesseqqgtr: "⪋",
    LessEqualGreater: "⋚",
    LessFullEqual: "≦",
    LessGreater: "≶",
    lessgtr: "≶",
    LessLess: "⪡",
    lesssim: "≲",
    LessSlantEqual: "⩽",
    LessTilde: "≲",
    lfisht: "⥼",
    lfloor: "⌊",
    Lfr: "𝔏",
    lfr: "𝔩",
    lg: "≶",
    lgE: "⪑",
    lHar: "⥢",
    lhard: "↽",
    lharu: "↼",
    lharul: "⥪",
    lhblk: "▄",
    LJcy: "Љ",
    ljcy: "љ",
    llarr: "⇇",
    ll: "≪",
    Ll: "⋘",
    llcorner: "⌞",
    Lleftarrow: "⇚",
    llhard: "⥫",
    lltri: "◺",
    Lmidot: "Ŀ",
    lmidot: "ŀ",
    lmoustache: "⎰",
    lmoust: "⎰",
    lnap: "⪉",
    lnapprox: "⪉",
    lne: "⪇",
    lnE: "≨",
    lneq: "⪇",
    lneqq: "≨",
    lnsim: "⋦",
    loang: "⟬",
    loarr: "⇽",
    lobrk: "⟦",
    longleftarrow: "⟵",
    LongLeftArrow: "⟵",
    Longleftarrow: "⟸",
    longleftrightarrow: "⟷",
    LongLeftRightArrow: "⟷",
    Longleftrightarrow: "⟺",
    longmapsto: "⟼",
    longrightarrow: "⟶",
    LongRightArrow: "⟶",
    Longrightarrow: "⟹",
    looparrowleft: "↫",
    looparrowright: "↬",
    lopar: "⦅",
    Lopf: "𝕃",
    lopf: "𝕝",
    loplus: "⨭",
    lotimes: "⨴",
    lowast: "∗",
    lowbar: "_",
    LowerLeftArrow: "↙",
    LowerRightArrow: "↘",
    loz: "◊",
    lozenge: "◊",
    lozf: "⧫",
    lpar: "(",
    lparlt: "⦓",
    lrarr: "⇆",
    lrcorner: "⌟",
    lrhar: "⇋",
    lrhard: "⥭",
    lrm: "‎",
    lrtri: "⊿",
    lsaquo: "‹",
    lscr: "𝓁",
    Lscr: "ℒ",
    lsh: "↰",
    Lsh: "↰",
    lsim: "≲",
    lsime: "⪍",
    lsimg: "⪏",
    lsqb: "[",
    lsquo: "‘",
    lsquor: "‚",
    Lstrok: "Ł",
    lstrok: "ł",
    ltcc: "⪦",
    ltcir: "⩹",
    lt: "<",
    LT: "<",
    Lt: "≪",
    ltdot: "⋖",
    lthree: "⋋",
    ltimes: "⋉",
    ltlarr: "⥶",
    ltquest: "⩻",
    ltri: "◃",
    ltrie: "⊴",
    ltrif: "◂",
    ltrPar: "⦖",
    lurdshar: "⥊",
    luruhar: "⥦",
    lvertneqq: "≨︀",
    lvnE: "≨︀",
    macr: "¯",
    male: "♂",
    malt: "✠",
    maltese: "✠",
    Map: "⤅",
    map: "↦",
    mapsto: "↦",
    mapstodown: "↧",
    mapstoleft: "↤",
    mapstoup: "↥",
    marker: "▮",
    mcomma: "⨩",
    Mcy: "М",
    mcy: "м",
    mdash: "—",
    mDDot: "∺",
    measuredangle: "∡",
    MediumSpace: " ",
    Mellintrf: "ℳ",
    Mfr: "𝔐",
    mfr: "𝔪",
    mho: "℧",
    micro: "µ",
    midast: "*",
    midcir: "⫰",
    mid: "∣",
    middot: "·",
    minusb: "⊟",
    minus: "−",
    minusd: "∸",
    minusdu: "⨪",
    MinusPlus: "∓",
    mlcp: "⫛",
    mldr: "…",
    mnplus: "∓",
    models: "⊧",
    Mopf: "𝕄",
    mopf: "𝕞",
    mp: "∓",
    mscr: "𝓂",
    Mscr: "ℳ",
    mstpos: "∾",
    Mu: "Μ",
    mu: "μ",
    multimap: "⊸",
    mumap: "⊸",
    nabla: "∇",
    Nacute: "Ń",
    nacute: "ń",
    nang: "∠⃒",
    nap: "≉",
    napE: "⩰̸",
    napid: "≋̸",
    napos: "ŉ",
    napprox: "≉",
    natural: "♮",
    naturals: "ℕ",
    natur: "♮",
    nbsp: " ",
    nbump: "≎̸",
    nbumpe: "≏̸",
    ncap: "⩃",
    Ncaron: "Ň",
    ncaron: "ň",
    Ncedil: "Ņ",
    ncedil: "ņ",
    ncong: "≇",
    ncongdot: "⩭̸",
    ncup: "⩂",
    Ncy: "Н",
    ncy: "н",
    ndash: "–",
    nearhk: "⤤",
    nearr: "↗",
    neArr: "⇗",
    nearrow: "↗",
    ne: "≠",
    nedot: "≐̸",
    NegativeMediumSpace: "​",
    NegativeThickSpace: "​",
    NegativeThinSpace: "​",
    NegativeVeryThinSpace: "​",
    nequiv: "≢",
    nesear: "⤨",
    nesim: "≂̸",
    NestedGreaterGreater: "≫",
    NestedLessLess: "≪",
    NewLine: "\n",
    nexist: "∄",
    nexists: "∄",
    Nfr: "𝔑",
    nfr: "𝔫",
    ngE: "≧̸",
    nge: "≱",
    ngeq: "≱",
    ngeqq: "≧̸",
    ngeqslant: "⩾̸",
    nges: "⩾̸",
    nGg: "⋙̸",
    ngsim: "≵",
    nGt: "≫⃒",
    ngt: "≯",
    ngtr: "≯",
    nGtv: "≫̸",
    nharr: "↮",
    nhArr: "⇎",
    nhpar: "⫲",
    ni: "∋",
    nis: "⋼",
    nisd: "⋺",
    niv: "∋",
    NJcy: "Њ",
    njcy: "њ",
    nlarr: "↚",
    nlArr: "⇍",
    nldr: "‥",
    nlE: "≦̸",
    nle: "≰",
    nleftarrow: "↚",
    nLeftarrow: "⇍",
    nleftrightarrow: "↮",
    nLeftrightarrow: "⇎",
    nleq: "≰",
    nleqq: "≦̸",
    nleqslant: "⩽̸",
    nles: "⩽̸",
    nless: "≮",
    nLl: "⋘̸",
    nlsim: "≴",
    nLt: "≪⃒",
    nlt: "≮",
    nltri: "⋪",
    nltrie: "⋬",
    nLtv: "≪̸",
    nmid: "∤",
    NoBreak: "⁠",
    NonBreakingSpace: " ",
    nopf: "𝕟",
    Nopf: "ℕ",
    Not: "⫬",
    not: "¬",
    NotCongruent: "≢",
    NotCupCap: "≭",
    NotDoubleVerticalBar: "∦",
    NotElement: "∉",
    NotEqual: "≠",
    NotEqualTilde: "≂̸",
    NotExists: "∄",
    NotGreater: "≯",
    NotGreaterEqual: "≱",
    NotGreaterFullEqual: "≧̸",
    NotGreaterGreater: "≫̸",
    NotGreaterLess: "≹",
    NotGreaterSlantEqual: "⩾̸",
    NotGreaterTilde: "≵",
    NotHumpDownHump: "≎̸",
    NotHumpEqual: "≏̸",
    notin: "∉",
    notindot: "⋵̸",
    notinE: "⋹̸",
    notinva: "∉",
    notinvb: "⋷",
    notinvc: "⋶",
    NotLeftTriangleBar: "⧏̸",
    NotLeftTriangle: "⋪",
    NotLeftTriangleEqual: "⋬",
    NotLess: "≮",
    NotLessEqual: "≰",
    NotLessGreater: "≸",
    NotLessLess: "≪̸",
    NotLessSlantEqual: "⩽̸",
    NotLessTilde: "≴",
    NotNestedGreaterGreater: "⪢̸",
    NotNestedLessLess: "⪡̸",
    notni: "∌",
    notniva: "∌",
    notnivb: "⋾",
    notnivc: "⋽",
    NotPrecedes: "⊀",
    NotPrecedesEqual: "⪯̸",
    NotPrecedesSlantEqual: "⋠",
    NotReverseElement: "∌",
    NotRightTriangleBar: "⧐̸",
    NotRightTriangle: "⋫",
    NotRightTriangleEqual: "⋭",
    NotSquareSubset: "⊏̸",
    NotSquareSubsetEqual: "⋢",
    NotSquareSuperset: "⊐̸",
    NotSquareSupersetEqual: "⋣",
    NotSubset: "⊂⃒",
    NotSubsetEqual: "⊈",
    NotSucceeds: "⊁",
    NotSucceedsEqual: "⪰̸",
    NotSucceedsSlantEqual: "⋡",
    NotSucceedsTilde: "≿̸",
    NotSuperset: "⊃⃒",
    NotSupersetEqual: "⊉",
    NotTilde: "≁",
    NotTildeEqual: "≄",
    NotTildeFullEqual: "≇",
    NotTildeTilde: "≉",
    NotVerticalBar: "∤",
    nparallel: "∦",
    npar: "∦",
    nparsl: "⫽⃥",
    npart: "∂̸",
    npolint: "⨔",
    npr: "⊀",
    nprcue: "⋠",
    nprec: "⊀",
    npreceq: "⪯̸",
    npre: "⪯̸",
    nrarrc: "⤳̸",
    nrarr: "↛",
    nrArr: "⇏",
    nrarrw: "↝̸",
    nrightarrow: "↛",
    nRightarrow: "⇏",
    nrtri: "⋫",
    nrtrie: "⋭",
    nsc: "⊁",
    nsccue: "⋡",
    nsce: "⪰̸",
    Nscr: "𝒩",
    nscr: "𝓃",
    nshortmid: "∤",
    nshortparallel: "∦",
    nsim: "≁",
    nsime: "≄",
    nsimeq: "≄",
    nsmid: "∤",
    nspar: "∦",
    nsqsube: "⋢",
    nsqsupe: "⋣",
    nsub: "⊄",
    nsubE: "⫅̸",
    nsube: "⊈",
    nsubset: "⊂⃒",
    nsubseteq: "⊈",
    nsubseteqq: "⫅̸",
    nsucc: "⊁",
    nsucceq: "⪰̸",
    nsup: "⊅",
    nsupE: "⫆̸",
    nsupe: "⊉",
    nsupset: "⊃⃒",
    nsupseteq: "⊉",
    nsupseteqq: "⫆̸",
    ntgl: "≹",
    Ntilde: "Ñ",
    ntilde: "ñ",
    ntlg: "≸",
    ntriangleleft: "⋪",
    ntrianglelefteq: "⋬",
    ntriangleright: "⋫",
    ntrianglerighteq: "⋭",
    Nu: "Ν",
    nu: "ν",
    num: "#",
    numero: "№",
    numsp: " ",
    nvap: "≍⃒",
    nvdash: "⊬",
    nvDash: "⊭",
    nVdash: "⊮",
    nVDash: "⊯",
    nvge: "≥⃒",
    nvgt: ">⃒",
    nvHarr: "⤄",
    nvinfin: "⧞",
    nvlArr: "⤂",
    nvle: "≤⃒",
    nvlt: "<⃒",
    nvltrie: "⊴⃒",
    nvrArr: "⤃",
    nvrtrie: "⊵⃒",
    nvsim: "∼⃒",
    nwarhk: "⤣",
    nwarr: "↖",
    nwArr: "⇖",
    nwarrow: "↖",
    nwnear: "⤧",
    Oacute: "Ó",
    oacute: "ó",
    oast: "⊛",
    Ocirc: "Ô",
    ocirc: "ô",
    ocir: "⊚",
    Ocy: "О",
    ocy: "о",
    odash: "⊝",
    Odblac: "Ő",
    odblac: "ő",
    odiv: "⨸",
    odot: "⊙",
    odsold: "⦼",
    OElig: "Œ",
    oelig: "œ",
    ofcir: "⦿",
    Ofr: "𝔒",
    ofr: "𝔬",
    ogon: "˛",
    Ograve: "Ò",
    ograve: "ò",
    ogt: "⧁",
    ohbar: "⦵",
    ohm: "Ω",
    oint: "∮",
    olarr: "↺",
    olcir: "⦾",
    olcross: "⦻",
    oline: "‾",
    olt: "⧀",
    Omacr: "Ō",
    omacr: "ō",
    Omega: "Ω",
    omega: "ω",
    Omicron: "Ο",
    omicron: "ο",
    omid: "⦶",
    ominus: "⊖",
    Oopf: "𝕆",
    oopf: "𝕠",
    opar: "⦷",
    OpenCurlyDoubleQuote: "“",
    OpenCurlyQuote: "‘",
    operp: "⦹",
    oplus: "⊕",
    orarr: "↻",
    Or: "⩔",
    or: "∨",
    ord: "⩝",
    order: "ℴ",
    orderof: "ℴ",
    ordf: "ª",
    ordm: "º",
    origof: "⊶",
    oror: "⩖",
    orslope: "⩗",
    orv: "⩛",
    oS: "Ⓢ",
    Oscr: "𝒪",
    oscr: "ℴ",
    Oslash: "Ø",
    oslash: "ø",
    osol: "⊘",
    Otilde: "Õ",
    otilde: "õ",
    otimesas: "⨶",
    Otimes: "⨷",
    otimes: "⊗",
    Ouml: "Ö",
    ouml: "ö",
    ovbar: "⌽",
    OverBar: "‾",
    OverBrace: "⏞",
    OverBracket: "⎴",
    OverParenthesis: "⏜",
    para: "¶",
    parallel: "∥",
    par: "∥",
    parsim: "⫳",
    parsl: "⫽",
    part: "∂",
    PartialD: "∂",
    Pcy: "П",
    pcy: "п",
    percnt: "%",
    period: ".",
    permil: "‰",
    perp: "⊥",
    pertenk: "‱",
    Pfr: "𝔓",
    pfr: "𝔭",
    Phi: "Φ",
    phi: "φ",
    phiv: "ϕ",
    phmmat: "ℳ",
    phone: "☎",
    Pi: "Π",
    pi: "π",
    pitchfork: "⋔",
    piv: "ϖ",
    planck: "ℏ",
    planckh: "ℎ",
    plankv: "ℏ",
    plusacir: "⨣",
    plusb: "⊞",
    pluscir: "⨢",
    plus: "+",
    plusdo: "∔",
    plusdu: "⨥",
    pluse: "⩲",
    PlusMinus: "±",
    plusmn: "±",
    plussim: "⨦",
    plustwo: "⨧",
    pm: "±",
    Poincareplane: "ℌ",
    pointint: "⨕",
    popf: "𝕡",
    Popf: "ℙ",
    pound: "£",
    prap: "⪷",
    Pr: "⪻",
    pr: "≺",
    prcue: "≼",
    precapprox: "⪷",
    prec: "≺",
    preccurlyeq: "≼",
    Precedes: "≺",
    PrecedesEqual: "⪯",
    PrecedesSlantEqual: "≼",
    PrecedesTilde: "≾",
    preceq: "⪯",
    precnapprox: "⪹",
    precneqq: "⪵",
    precnsim: "⋨",
    pre: "⪯",
    prE: "⪳",
    precsim: "≾",
    prime: "′",
    Prime: "″",
    primes: "ℙ",
    prnap: "⪹",
    prnE: "⪵",
    prnsim: "⋨",
    prod: "∏",
    Product: "∏",
    profalar: "⌮",
    profline: "⌒",
    profsurf: "⌓",
    prop: "∝",
    Proportional: "∝",
    Proportion: "∷",
    propto: "∝",
    prsim: "≾",
    prurel: "⊰",
    Pscr: "𝒫",
    pscr: "𝓅",
    Psi: "Ψ",
    psi: "ψ",
    puncsp: " ",
    Qfr: "𝔔",
    qfr: "𝔮",
    qint: "⨌",
    qopf: "𝕢",
    Qopf: "ℚ",
    qprime: "⁗",
    Qscr: "𝒬",
    qscr: "𝓆",
    quaternions: "ℍ",
    quatint: "⨖",
    quest: "?",
    questeq: "≟",
    quot: '"',
    QUOT: '"',
    rAarr: "⇛",
    race: "∽̱",
    Racute: "Ŕ",
    racute: "ŕ",
    radic: "√",
    raemptyv: "⦳",
    rang: "⟩",
    Rang: "⟫",
    rangd: "⦒",
    range: "⦥",
    rangle: "⟩",
    raquo: "»",
    rarrap: "⥵",
    rarrb: "⇥",
    rarrbfs: "⤠",
    rarrc: "⤳",
    rarr: "→",
    Rarr: "↠",
    rArr: "⇒",
    rarrfs: "⤞",
    rarrhk: "↪",
    rarrlp: "↬",
    rarrpl: "⥅",
    rarrsim: "⥴",
    Rarrtl: "⤖",
    rarrtl: "↣",
    rarrw: "↝",
    ratail: "⤚",
    rAtail: "⤜",
    ratio: "∶",
    rationals: "ℚ",
    rbarr: "⤍",
    rBarr: "⤏",
    RBarr: "⤐",
    rbbrk: "❳",
    rbrace: "}",
    rbrack: "]",
    rbrke: "⦌",
    rbrksld: "⦎",
    rbrkslu: "⦐",
    Rcaron: "Ř",
    rcaron: "ř",
    Rcedil: "Ŗ",
    rcedil: "ŗ",
    rceil: "⌉",
    rcub: "}",
    Rcy: "Р",
    rcy: "р",
    rdca: "⤷",
    rdldhar: "⥩",
    rdquo: "”",
    rdquor: "”",
    rdsh: "↳",
    real: "ℜ",
    realine: "ℛ",
    realpart: "ℜ",
    reals: "ℝ",
    Re: "ℜ",
    rect: "▭",
    reg: "®",
    REG: "®",
    ReverseElement: "∋",
    ReverseEquilibrium: "⇋",
    ReverseUpEquilibrium: "⥯",
    rfisht: "⥽",
    rfloor: "⌋",
    rfr: "𝔯",
    Rfr: "ℜ",
    rHar: "⥤",
    rhard: "⇁",
    rharu: "⇀",
    rharul: "⥬",
    Rho: "Ρ",
    rho: "ρ",
    rhov: "ϱ",
    RightAngleBracket: "⟩",
    RightArrowBar: "⇥",
    rightarrow: "→",
    RightArrow: "→",
    Rightarrow: "⇒",
    RightArrowLeftArrow: "⇄",
    rightarrowtail: "↣",
    RightCeiling: "⌉",
    RightDoubleBracket: "⟧",
    RightDownTeeVector: "⥝",
    RightDownVectorBar: "⥕",
    RightDownVector: "⇂",
    RightFloor: "⌋",
    rightharpoondown: "⇁",
    rightharpoonup: "⇀",
    rightleftarrows: "⇄",
    rightleftharpoons: "⇌",
    rightrightarrows: "⇉",
    rightsquigarrow: "↝",
    RightTeeArrow: "↦",
    RightTee: "⊢",
    RightTeeVector: "⥛",
    rightthreetimes: "⋌",
    RightTriangleBar: "⧐",
    RightTriangle: "⊳",
    RightTriangleEqual: "⊵",
    RightUpDownVector: "⥏",
    RightUpTeeVector: "⥜",
    RightUpVectorBar: "⥔",
    RightUpVector: "↾",
    RightVectorBar: "⥓",
    RightVector: "⇀",
    ring: "˚",
    risingdotseq: "≓",
    rlarr: "⇄",
    rlhar: "⇌",
    rlm: "‏",
    rmoustache: "⎱",
    rmoust: "⎱",
    rnmid: "⫮",
    roang: "⟭",
    roarr: "⇾",
    robrk: "⟧",
    ropar: "⦆",
    ropf: "𝕣",
    Ropf: "ℝ",
    roplus: "⨮",
    rotimes: "⨵",
    RoundImplies: "⥰",
    rpar: ")",
    rpargt: "⦔",
    rppolint: "⨒",
    rrarr: "⇉",
    Rrightarrow: "⇛",
    rsaquo: "›",
    rscr: "𝓇",
    Rscr: "ℛ",
    rsh: "↱",
    Rsh: "↱",
    rsqb: "]",
    rsquo: "’",
    rsquor: "’",
    rthree: "⋌",
    rtimes: "⋊",
    rtri: "▹",
    rtrie: "⊵",
    rtrif: "▸",
    rtriltri: "⧎",
    RuleDelayed: "⧴",
    ruluhar: "⥨",
    rx: "℞",
    Sacute: "Ś",
    sacute: "ś",
    sbquo: "‚",
    scap: "⪸",
    Scaron: "Š",
    scaron: "š",
    Sc: "⪼",
    sc: "≻",
    sccue: "≽",
    sce: "⪰",
    scE: "⪴",
    Scedil: "Ş",
    scedil: "ş",
    Scirc: "Ŝ",
    scirc: "ŝ",
    scnap: "⪺",
    scnE: "⪶",
    scnsim: "⋩",
    scpolint: "⨓",
    scsim: "≿",
    Scy: "С",
    scy: "с",
    sdotb: "⊡",
    sdot: "⋅",
    sdote: "⩦",
    searhk: "⤥",
    searr: "↘",
    seArr: "⇘",
    searrow: "↘",
    sect: "§",
    semi: ";",
    seswar: "⤩",
    setminus: "∖",
    setmn: "∖",
    sext: "✶",
    Sfr: "𝔖",
    sfr: "𝔰",
    sfrown: "⌢",
    sharp: "♯",
    SHCHcy: "Щ",
    shchcy: "щ",
    SHcy: "Ш",
    shcy: "ш",
    ShortDownArrow: "↓",
    ShortLeftArrow: "←",
    shortmid: "∣",
    shortparallel: "∥",
    ShortRightArrow: "→",
    ShortUpArrow: "↑",
    shy: "­",
    Sigma: "Σ",
    sigma: "σ",
    sigmaf: "ς",
    sigmav: "ς",
    sim: "∼",
    simdot: "⩪",
    sime: "≃",
    simeq: "≃",
    simg: "⪞",
    simgE: "⪠",
    siml: "⪝",
    simlE: "⪟",
    simne: "≆",
    simplus: "⨤",
    simrarr: "⥲",
    slarr: "←",
    SmallCircle: "∘",
    smallsetminus: "∖",
    smashp: "⨳",
    smeparsl: "⧤",
    smid: "∣",
    smile: "⌣",
    smt: "⪪",
    smte: "⪬",
    smtes: "⪬︀",
    SOFTcy: "Ь",
    softcy: "ь",
    solbar: "⌿",
    solb: "⧄",
    sol: "/",
    Sopf: "𝕊",
    sopf: "𝕤",
    spades: "♠",
    spadesuit: "♠",
    spar: "∥",
    sqcap: "⊓",
    sqcaps: "⊓︀",
    sqcup: "⊔",
    sqcups: "⊔︀",
    Sqrt: "√",
    sqsub: "⊏",
    sqsube: "⊑",
    sqsubset: "⊏",
    sqsubseteq: "⊑",
    sqsup: "⊐",
    sqsupe: "⊒",
    sqsupset: "⊐",
    sqsupseteq: "⊒",
    square: "□",
    Square: "□",
    SquareIntersection: "⊓",
    SquareSubset: "⊏",
    SquareSubsetEqual: "⊑",
    SquareSuperset: "⊐",
    SquareSupersetEqual: "⊒",
    SquareUnion: "⊔",
    squarf: "▪",
    squ: "□",
    squf: "▪",
    srarr: "→",
    Sscr: "𝒮",
    sscr: "𝓈",
    ssetmn: "∖",
    ssmile: "⌣",
    sstarf: "⋆",
    Star: "⋆",
    star: "☆",
    starf: "★",
    straightepsilon: "ϵ",
    straightphi: "ϕ",
    strns: "¯",
    sub: "⊂",
    Sub: "⋐",
    subdot: "⪽",
    subE: "⫅",
    sube: "⊆",
    subedot: "⫃",
    submult: "⫁",
    subnE: "⫋",
    subne: "⊊",
    subplus: "⪿",
    subrarr: "⥹",
    subset: "⊂",
    Subset: "⋐",
    subseteq: "⊆",
    subseteqq: "⫅",
    SubsetEqual: "⊆",
    subsetneq: "⊊",
    subsetneqq: "⫋",
    subsim: "⫇",
    subsub: "⫕",
    subsup: "⫓",
    succapprox: "⪸",
    succ: "≻",
    succcurlyeq: "≽",
    Succeeds: "≻",
    SucceedsEqual: "⪰",
    SucceedsSlantEqual: "≽",
    SucceedsTilde: "≿",
    succeq: "⪰",
    succnapprox: "⪺",
    succneqq: "⪶",
    succnsim: "⋩",
    succsim: "≿",
    SuchThat: "∋",
    sum: "∑",
    Sum: "∑",
    sung: "♪",
    sup1: "¹",
    sup2: "²",
    sup3: "³",
    sup: "⊃",
    Sup: "⋑",
    supdot: "⪾",
    supdsub: "⫘",
    supE: "⫆",
    supe: "⊇",
    supedot: "⫄",
    Superset: "⊃",
    SupersetEqual: "⊇",
    suphsol: "⟉",
    suphsub: "⫗",
    suplarr: "⥻",
    supmult: "⫂",
    supnE: "⫌",
    supne: "⊋",
    supplus: "⫀",
    supset: "⊃",
    Supset: "⋑",
    supseteq: "⊇",
    supseteqq: "⫆",
    supsetneq: "⊋",
    supsetneqq: "⫌",
    supsim: "⫈",
    supsub: "⫔",
    supsup: "⫖",
    swarhk: "⤦",
    swarr: "↙",
    swArr: "⇙",
    swarrow: "↙",
    swnwar: "⤪",
    szlig: "ß",
    Tab: "\t",
    target: "⌖",
    Tau: "Τ",
    tau: "τ",
    tbrk: "⎴",
    Tcaron: "Ť",
    tcaron: "ť",
    Tcedil: "Ţ",
    tcedil: "ţ",
    Tcy: "Т",
    tcy: "т",
    tdot: "⃛",
    telrec: "⌕",
    Tfr: "𝔗",
    tfr: "𝔱",
    there4: "∴",
    therefore: "∴",
    Therefore: "∴",
    Theta: "Θ",
    theta: "θ",
    thetasym: "ϑ",
    thetav: "ϑ",
    thickapprox: "≈",
    thicksim: "∼",
    ThickSpace: "  ",
    ThinSpace: " ",
    thinsp: " ",
    thkap: "≈",
    thksim: "∼",
    THORN: "Þ",
    thorn: "þ",
    tilde: "˜",
    Tilde: "∼",
    TildeEqual: "≃",
    TildeFullEqual: "≅",
    TildeTilde: "≈",
    timesbar: "⨱",
    timesb: "⊠",
    times: "×",
    timesd: "⨰",
    tint: "∭",
    toea: "⤨",
    topbot: "⌶",
    topcir: "⫱",
    top: "⊤",
    Topf: "𝕋",
    topf: "𝕥",
    topfork: "⫚",
    tosa: "⤩",
    tprime: "‴",
    trade: "™",
    TRADE: "™",
    triangle: "▵",
    triangledown: "▿",
    triangleleft: "◃",
    trianglelefteq: "⊴",
    triangleq: "≜",
    triangleright: "▹",
    trianglerighteq: "⊵",
    tridot: "◬",
    trie: "≜",
    triminus: "⨺",
    TripleDot: "⃛",
    triplus: "⨹",
    trisb: "⧍",
    tritime: "⨻",
    trpezium: "⏢",
    Tscr: "𝒯",
    tscr: "𝓉",
    TScy: "Ц",
    tscy: "ц",
    TSHcy: "Ћ",
    tshcy: "ћ",
    Tstrok: "Ŧ",
    tstrok: "ŧ",
    twixt: "≬",
    twoheadleftarrow: "↞",
    twoheadrightarrow: "↠",
    Uacute: "Ú",
    uacute: "ú",
    uarr: "↑",
    Uarr: "↟",
    uArr: "⇑",
    Uarrocir: "⥉",
    Ubrcy: "Ў",
    ubrcy: "ў",
    Ubreve: "Ŭ",
    ubreve: "ŭ",
    Ucirc: "Û",
    ucirc: "û",
    Ucy: "У",
    ucy: "у",
    udarr: "⇅",
    Udblac: "Ű",
    udblac: "ű",
    udhar: "⥮",
    ufisht: "⥾",
    Ufr: "𝔘",
    ufr: "𝔲",
    Ugrave: "Ù",
    ugrave: "ù",
    uHar: "⥣",
    uharl: "↿",
    uharr: "↾",
    uhblk: "▀",
    ulcorn: "⌜",
    ulcorner: "⌜",
    ulcrop: "⌏",
    ultri: "◸",
    Umacr: "Ū",
    umacr: "ū",
    uml: "¨",
    UnderBar: "_",
    UnderBrace: "⏟",
    UnderBracket: "⎵",
    UnderParenthesis: "⏝",
    Union: "⋃",
    UnionPlus: "⊎",
    Uogon: "Ų",
    uogon: "ų",
    Uopf: "𝕌",
    uopf: "𝕦",
    UpArrowBar: "⤒",
    uparrow: "↑",
    UpArrow: "↑",
    Uparrow: "⇑",
    UpArrowDownArrow: "⇅",
    updownarrow: "↕",
    UpDownArrow: "↕",
    Updownarrow: "⇕",
    UpEquilibrium: "⥮",
    upharpoonleft: "↿",
    upharpoonright: "↾",
    uplus: "⊎",
    UpperLeftArrow: "↖",
    UpperRightArrow: "↗",
    upsi: "υ",
    Upsi: "ϒ",
    upsih: "ϒ",
    Upsilon: "Υ",
    upsilon: "υ",
    UpTeeArrow: "↥",
    UpTee: "⊥",
    upuparrows: "⇈",
    urcorn: "⌝",
    urcorner: "⌝",
    urcrop: "⌎",
    Uring: "Ů",
    uring: "ů",
    urtri: "◹",
    Uscr: "𝒰",
    uscr: "𝓊",
    utdot: "⋰",
    Utilde: "Ũ",
    utilde: "ũ",
    utri: "▵",
    utrif: "▴",
    uuarr: "⇈",
    Uuml: "Ü",
    uuml: "ü",
    uwangle: "⦧",
    vangrt: "⦜",
    varepsilon: "ϵ",
    varkappa: "ϰ",
    varnothing: "∅",
    varphi: "ϕ",
    varpi: "ϖ",
    varpropto: "∝",
    varr: "↕",
    vArr: "⇕",
    varrho: "ϱ",
    varsigma: "ς",
    varsubsetneq: "⊊︀",
    varsubsetneqq: "⫋︀",
    varsupsetneq: "⊋︀",
    varsupsetneqq: "⫌︀",
    vartheta: "ϑ",
    vartriangleleft: "⊲",
    vartriangleright: "⊳",
    vBar: "⫨",
    Vbar: "⫫",
    vBarv: "⫩",
    Vcy: "В",
    vcy: "в",
    vdash: "⊢",
    vDash: "⊨",
    Vdash: "⊩",
    VDash: "⊫",
    Vdashl: "⫦",
    veebar: "⊻",
    vee: "∨",
    Vee: "⋁",
    veeeq: "≚",
    vellip: "⋮",
    verbar: "|",
    Verbar: "‖",
    vert: "|",
    Vert: "‖",
    VerticalBar: "∣",
    VerticalLine: "|",
    VerticalSeparator: "❘",
    VerticalTilde: "≀",
    VeryThinSpace: " ",
    Vfr: "𝔙",
    vfr: "𝔳",
    vltri: "⊲",
    vnsub: "⊂⃒",
    vnsup: "⊃⃒",
    Vopf: "𝕍",
    vopf: "𝕧",
    vprop: "∝",
    vrtri: "⊳",
    Vscr: "𝒱",
    vscr: "𝓋",
    vsubnE: "⫋︀",
    vsubne: "⊊︀",
    vsupnE: "⫌︀",
    vsupne: "⊋︀",
    Vvdash: "⊪",
    vzigzag: "⦚",
    Wcirc: "Ŵ",
    wcirc: "ŵ",
    wedbar: "⩟",
    wedge: "∧",
    Wedge: "⋀",
    wedgeq: "≙",
    weierp: "℘",
    Wfr: "𝔚",
    wfr: "𝔴",
    Wopf: "𝕎",
    wopf: "𝕨",
    wp: "℘",
    wr: "≀",
    wreath: "≀",
    Wscr: "𝒲",
    wscr: "𝓌",
    xcap: "⋂",
    xcirc: "◯",
    xcup: "⋃",
    xdtri: "▽",
    Xfr: "𝔛",
    xfr: "𝔵",
    xharr: "⟷",
    xhArr: "⟺",
    Xi: "Ξ",
    xi: "ξ",
    xlarr: "⟵",
    xlArr: "⟸",
    xmap: "⟼",
    xnis: "⋻",
    xodot: "⨀",
    Xopf: "𝕏",
    xopf: "𝕩",
    xoplus: "⨁",
    xotime: "⨂",
    xrarr: "⟶",
    xrArr: "⟹",
    Xscr: "𝒳",
    xscr: "𝓍",
    xsqcup: "⨆",
    xuplus: "⨄",
    xutri: "△",
    xvee: "⋁",
    xwedge: "⋀",
    Yacute: "Ý",
    yacute: "ý",
    YAcy: "Я",
    yacy: "я",
    Ycirc: "Ŷ",
    ycirc: "ŷ",
    Ycy: "Ы",
    ycy: "ы",
    yen: "¥",
    Yfr: "𝔜",
    yfr: "𝔶",
    YIcy: "Ї",
    yicy: "ї",
    Yopf: "𝕐",
    yopf: "𝕪",
    Yscr: "𝒴",
    yscr: "𝓎",
    YUcy: "Ю",
    yucy: "ю",
    yuml: "ÿ",
    Yuml: "Ÿ",
    Zacute: "Ź",
    zacute: "ź",
    Zcaron: "Ž",
    zcaron: "ž",
    Zcy: "З",
    zcy: "з",
    Zdot: "Ż",
    zdot: "ż",
    zeetrf: "ℨ",
    ZeroWidthSpace: "​",
    Zeta: "Ζ",
    zeta: "ζ",
    zfr: "𝔷",
    Zfr: "ℨ",
    ZHcy: "Ж",
    zhcy: "ж",
    zigrarr: "⇝",
    zopf: "𝕫",
    Zopf: "ℤ",
    Zscr: "𝒵",
    zscr: "𝓏",
    zwj: "‍",
    zwnj: "‌"
  }
}, function ( e, t ) {
  e.exports = /[!-#%-\*,-/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E44\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD807[\uDC41-\uDC45\uDC70\uDC71]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/
}, function ( e, t, n ) {
  "use strict";
  e.exports.encode = n( 130 ), e.exports.decode = n( 131 ), e.exports.format = n( 132 ), e.exports.parse = n( 133 )
}, function ( e, t ) {
  "use strict";

  function n( e ) {
    var t, n, r = o[ e ];
    if ( r ) return r;
    for ( r = o[ e ] = [], t = 0; t < 128; t++ ) n = String.fromCharCode( t ), /^[0-9a-z]$/i.test( n ) ? r.push( n ) : r.push( "%" + ( "0" + t.toString( 16 ).toUpperCase() ).slice( -2 ) );
    for ( t = 0; t < e.length; t++ ) r[ e.charCodeAt( t ) ] = e[ t ];
    return r
  }

  function r( e, t, o ) {
    var i, a, s, l, u, c = "";
    for ( "string" != typeof t && ( o = t, t = r.defaultChars ), "undefined" == typeof o && ( o = !0 ), u = n( t ), i = 0, a = e.length; i < a; i++ )
      if ( s = e.charCodeAt( i ), o && 37 === s && i + 2 < a && /^[0-9a-f]{2}$/i.test( e.slice( i + 1, i + 3 ) ) ) c += e.slice( i, i + 3 ), i += 2;
      else if ( s < 128 ) c += u[ s ];
    else if ( s >= 55296 && s <= 57343 ) {
      if ( s >= 55296 && s <= 56319 && i + 1 < a && ( l = e.charCodeAt( i + 1 ), l >= 56320 && l <= 57343 ) ) {
        c += encodeURIComponent( e[ i ] + e[ i + 1 ] ), i++;
        continue
      }
      c += "%EF%BF%BD"
    } else c += encodeURIComponent( e[ i ] );
    return c
  }
  var o = {};
  r.defaultChars = ";/?:@&=+$,-_.!~*'()#", r.componentChars = "-_.!~*'()", e.exports = r
}, function ( e, t ) {
  "use strict";

  function n( e ) {
    var t, n, r = o[ e ];
    if ( r ) return r;
    for ( r = o[ e ] = [], t = 0; t < 128; t++ ) n = String.fromCharCode( t ), r.push( n );
    for ( t = 0; t < e.length; t++ ) n = e.charCodeAt( t ), r[ n ] = "%" + ( "0" + n.toString( 16 ).toUpperCase() ).slice( -2 );
    return r
  }

  function r( e, t ) {
    var o;
    return "string" != typeof t && ( t = r.defaultChars ), o = n( t ), e.replace( /(%[a-f0-9]{2})+/gi, function ( e ) {
      var t, n, r, i, a, s, l, u = "";
      for ( t = 0, n = e.length; t < n; t += 3 ) r = parseInt( e.slice( t + 1, t + 3 ), 16 ), r < 128 ? u += o[ r ] : 192 === ( 224 & r ) && t + 3 < n && ( i = parseInt( e.slice( t + 4, t + 6 ), 16 ), 128 === ( 192 & i ) ) ? ( l = r << 6 & 1984 | 63 & i, u += l < 128 ? "��" : String.fromCharCode( l ), t += 3 ) : 224 === ( 240 & r ) && t + 6 < n && ( i = parseInt( e.slice( t + 4, t + 6 ), 16 ), a = parseInt( e.slice( t + 7, t + 9 ), 16 ), 128 === ( 192 & i ) && 128 === ( 192 & a ) ) ? ( l = r << 12 & 61440 | i << 6 & 4032 | 63 & a, u += l < 2048 || l >= 55296 && l <= 57343 ? "���" : String.fromCharCode( l ), t += 6 ) : 240 === ( 248 & r ) && t + 9 < n && ( i = parseInt( e.slice( t + 4, t + 6 ), 16 ), a = parseInt( e.slice( t + 7, t + 9 ), 16 ), s = parseInt( e.slice( t + 10, t + 12 ), 16 ), 128 === ( 192 & i ) && 128 === ( 192 & a ) && 128 === ( 192 & s ) ) ? ( l = r << 18 & 1835008 | i << 12 & 258048 | a << 6 & 4032 | 63 & s, l < 65536 || l > 1114111 ? u += "����" : ( l -= 65536, u += String.fromCharCode( 55296 + ( l >> 10 ), 56320 + ( 1023 & l ) ) ), t += 9 ) : u += "�";
      return u
    } )
  }
  var o = {};
  r.defaultChars = ";/?:@&=+$,#", r.componentChars = "", e.exports = r
}, function ( e, t ) {
  "use strict";
  e.exports = function ( e ) {
    var t = "";
    return t += e.protocol || "", t += e.slashes ? "//" : "", t += e.auth ? e.auth + "@" : "", t += e.hostname && e.hostname.indexOf( ":" ) !== -1 ? "[" + e.hostname + "]" : e.hostname || "", t += e.port ? ":" + e.port : "", t += e.pathname || "", t += e.search || "", t += e.hash || ""
  }
}, function ( e, t ) {
  "use strict";

  function n() {
    this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null
  }

  function r( e, t ) {
    if ( e && e instanceof n ) return e;
    var r = new n;
    return r.parse( e, t ), r
  }
  var o = /^([a-z0-9.+-]+:)/i,
    i = /:[0-9]*$/,
    a = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
    s = [ "<", ">", '"', "`", " ", "\r", "\n", "\t" ],
    l = [ "{", "}", "|", "\\", "^", "`" ].concat( s ),
    u = [ "'" ].concat( l ),
    c = [ "%", "/", "?", ";", "#" ].concat( u ),
    f = [ "/", "?", "#" ],
    p = 255,
    d = /^[+a-z0-9A-Z_-]{0,63}$/,
    h = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    v = {
      javascript: !0,
      "javascript:": !0
    },
    g = {
      http: !0,
      https: !0,
      ftp: !0,
      gopher: !0,
      file: !0,
      "http:": !0,
      "https:": !0,
      "ftp:": !0,
      "gopher:": !0,
      "file:": !0
    };
  n.prototype.parse = function ( e, t ) {
    var n, r, i, s, l, u = e;
    if ( u = u.trim(), !t && 1 === e.split( "#" ).length ) {
      var m = a.exec( u );
      if ( m ) return this.pathname = m[ 1 ], m[ 2 ] && ( this.search = m[ 2 ] ), this
    }
    var y = o.exec( u );
    if ( y && ( y = y[ 0 ], i = y.toLowerCase(), this.protocol = y, u = u.substr( y.length ) ), ( t || y || u.match( /^\/\/[^@\/]+@[^@\/]+/ ) ) && ( l = "//" === u.substr( 0, 2 ), !l || y && v[ y ] || ( u = u.substr( 2 ), this.slashes = !0 ) ), !v[ y ] && ( l || y && !g[ y ] ) ) {
      var b = -1;
      for ( n = 0; n < f.length; n++ ) s = u.indexOf( f[ n ] ), s !== -1 && ( b === -1 || s < b ) && ( b = s );
      var x, w;
      for ( w = b === -1 ? u.lastIndexOf( "@" ) : u.lastIndexOf( "@", b ), w !== -1 && ( x = u.slice( 0, w ), u = u.slice( w + 1 ), this.auth = x ), b = -1, n = 0; n < c.length; n++ ) s = u.indexOf( c[ n ] ), s !== -1 && ( b === -1 || s < b ) && ( b = s );
      b === -1 && ( b = u.length ), ":" === u[ b - 1 ] && b--;
      var _ = u.slice( 0, b );
      u = u.slice( b ), this.parseHost( _ ), this.hostname = this.hostname || "";
      var C = "[" === this.hostname[ 0 ] && "]" === this.hostname[ this.hostname.length - 1 ];
      if ( !C ) {
        var k = this.hostname.split( /\./ );
        for ( n = 0, r = k.length; n < r; n++ ) {
          var E = k[ n ];
          if ( E && !E.match( d ) ) {
            for ( var S = "", T = 0, A = E.length; T < A; T++ ) S += E.charCodeAt( T ) > 127 ? "x" : E[ T ];
            if ( !S.match( d ) ) {
              var M = k.slice( 0, n ),
                O = k.slice( n + 1 ),
                N = E.match( h );
              N && ( M.push( N[ 1 ] ), O.unshift( N[ 2 ] ) ), O.length && ( u = O.join( "." ) + u ), this.hostname = M.join( "." );
              break
            }
          }
        }
      }
      this.hostname.length > p && ( this.hostname = "" ), C && ( this.hostname = this.hostname.substr( 1, this.hostname.length - 2 ) )
    }
    var P = u.indexOf( "#" );
    P !== -1 && ( this.hash = u.substr( P ), u = u.slice( 0, P ) );
    var D = u.indexOf( "?" );
    return D !== -1 && ( this.search = u.substr( D ), u = u.slice( 0, D ) ), u && ( this.pathname = u ), g[ i ] && this.hostname && !this.pathname && ( this.pathname = "" ), this
  }, n.prototype.parseHost = function ( e ) {
    var t = i.exec( e );
    t && ( t = t[ 0 ], ":" !== t && ( this.port = t.substr( 1 ) ), e = e.substr( 0, e.length - t.length ) ), e && ( this.hostname = e )
  }, e.exports = r
}, function ( e, t, n ) {
  "use strict";
  t.Any = n( 135 ), t.Cc = n( 136 ), t.Cf = n( 137 ), t.P = n( 128 ), t.Z = n( 138 )
}, function ( e, t ) {
  e.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/
}, function ( e, t ) {
  e.exports = /[\0-\x1F\x7F-\x9F]/
}, function ( e, t ) {
  e.exports = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804\uDCBD|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/
}, function ( e, t ) {
  e.exports = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/
}, function ( e, t, n ) {
  "use strict";
  t.parseLinkLabel = n( 140 ), t.parseLinkDestination = n( 141 ), t.parseLinkTitle = n( 142 )
}, function ( e, t ) {
  "use strict";
  e.exports = function ( e, t, n ) {
    var r, o, i, a, s = -1,
      l = e.posMax,
      u = e.pos;
    for ( e.pos = t + 1, r = 1; e.pos < l; ) {
      if ( i = e.src.charCodeAt( e.pos ), 93 === i && ( r--, 0 === r ) ) {
        o = !0;
        break
      }
      if ( a = e.pos, e.md.inline.skipToken( e ), 91 === i )
        if ( a === e.pos - 1 ) r++;
        else if ( n ) return e.pos = u, -1
    }
    return o && ( s = e.pos ), e.pos = u, s
  }
}, function ( e, t, n ) {
  "use strict";
  var r = n( 125 ).isSpace,
    o = n( 125 ).unescapeAll;
  e.exports = function ( e, t, n ) {
    var i, a, s = 0,
      l = t,
      u = {
        ok: !1,
        pos: 0,
        lines: 0,
        str: ""
      };
    if ( 60 === e.charCodeAt( t ) ) {
      for ( t++; t < n; ) {
        if ( i = e.charCodeAt( t ), 10 === i || r( i ) ) return u;
        if ( 62 === i ) return u.pos = t + 1, u.str = o( e.slice( l + 1, t ) ), u.ok = !0, u;
        92 === i && t + 1 < n ? t += 2 : t++
      }
      return u
    }
    for ( a = 0; t < n && ( i = e.charCodeAt( t ), 32 !== i ) && !( i < 32 || 127 === i ); )
      if ( 92 === i && t + 1 < n ) t += 2;
      else {
        if ( 40 === i && ( a++, a > 1 ) ) break;
        if ( 41 === i && ( a--, a < 0 ) ) break;
        t++
      } return l === t ? u : ( u.str = o( e.slice( l, t ) ), u.lines = s, u.pos = t, u.ok = !0, u )
  }
}, function ( e, t, n ) {
  "use strict";
  var r = n( 125 ).unescapeAll;
  e.exports = function ( e, t, n ) {
    var o, i, a = 0,
      s = t,
      l = {
        ok: !1,
        pos: 0,
        lines: 0,
        str: ""
      };
    if ( t >= n ) return l;
    if ( i = e.charCodeAt( t ), 34 !== i && 39 !== i && 40 !== i ) return l;
    for ( t++, 40 === i && ( i = 41 ); t < n; ) {
      if ( o = e.charCodeAt( t ), o === i ) return l.pos = t + 1, l.lines = a, l.str = r( e.slice( s + 1, t ) ), l.ok = !0, l;
      10 === o ? a++ : 92 === o && t + 1 < n && ( t++, 10 === e.charCodeAt( t ) && a++ ), t++
    }
    return l
  }
}, function ( e, t, n ) {
  "use strict";

  function r() {
    this.rules = o( {}, s )
  }
  var o = n( 125 ).assign,
    i = n( 125 ).unescapeAll,
    a = n( 125 ).escapeHtml,
    s = {};
  s.code_inline = function ( e, t, n, r, o ) {
    var i = e[ t ];
    return "<code" + o.renderAttrs( i ) + ">" + a( e[ t ].content ) + "</code>"
  }, s.code_block = function ( e, t, n, r, o ) {
    var i = e[ t ];
    return "<pre" + o.renderAttrs( i ) + "><code>" + a( e[ t ].content ) + "</code></pre>\n"
  }, s.fence = function ( e, t, n, r, o ) {
    var s, l, u, c, f = e[ t ],
      p = f.info ? i( f.info ).trim() : "",
      d = "";
    return p && ( d = p.split( /\s+/g )[ 0 ] ), s = n.highlight ? n.highlight( f.content, d ) || a( f.content ) : a( f.content ), 0 === s.indexOf( "<pre" ) ? s + "\n" : p ? ( l = f.attrIndex( "class" ), u = f.attrs ? f.attrs.slice() : [], l < 0 ? u.push( [ "class", n.langPrefix + d ] ) : u[ l ][ 1 ] += " " + n.langPrefix + d, c = {
      attrs: u
    }, "<pre><code" + o.renderAttrs( c ) + ">" + s + "</code></pre>\n" ) : "<pre><code" + o.renderAttrs( f ) + ">" + s + "</code></pre>\n"
  }, s.image = function ( e, t, n, r, o ) {
    var i = e[ t ];
    return i.attrs[ i.attrIndex( "alt" ) ][ 1 ] = o.renderInlineAsText( i.children, n, r ), o.renderToken( e, t, n )
  }, s.hardbreak = function ( e, t, n ) {
    return n.xhtmlOut ? "<br />\n" : "<br>\n"
  }, s.softbreak = function ( e, t, n ) {
    return n.breaks ? n.xhtmlOut ? "<br />\n" : "<br>\n" : "\n"
  }, s.text = function ( e, t ) {
    return a( e[ t ].content )
  }, s.html_block = function ( e, t ) {
    return e[ t ].content
  }, s.html_inline = function ( e, t ) {
    return e[ t ].content
  }, r.prototype.renderAttrs = function ( e ) {
    var t, n, r;
    if ( !e.attrs ) return "";
    for ( r = "", t = 0, n = e.attrs.length; t < n; t++ ) r += " " + a( e.attrs[ t ][ 0 ] ) + '="' + a( e.attrs[ t ][ 1 ] ) + '"';
    return r
  }, r.prototype.renderToken = function ( e, t, n ) {
    var r, o = "",
      i = !1,
      a = e[ t ];
    return a.hidden ? "" : ( a.block && a.nesting !== -1 && t && e[ t - 1 ].hidden && ( o += "\n" ), o += ( a.nesting === -1 ? "</" : "<" ) + a.tag, o += this.renderAttrs( a ), 0 === a.nesting && n.xhtmlOut && ( o += " /" ), a.block && ( i = !0, 1 === a.nesting && t + 1 < e.length && ( r = e[ t + 1 ], "inline" === r.type || r.hidden ? i = !1 : r.nesting === -1 && r.tag === a.tag && ( i = !1 ) ) ), o += i ? ">\n" : ">" )
  }, r.prototype.renderInline = function ( e, t, n ) {
    for ( var r, o = "", i = this.rules, a = 0, s = e.length; a < s; a++ ) r = e[ a ].type, o += "undefined" != typeof i[ r ] ? i[ r ]( e, a, t, n, this ) : this.renderToken( e, a, t );
    return o
  }, r.prototype.renderInlineAsText = function ( e, t, n ) {
    for ( var r = "", o = 0, i = e.length; o < i; o++ ) "text" === e[ o ].type ? r += e[ o ].content : "image" === e[ o ].type && ( r += this.renderInlineAsText( e[ o ].children, t, n ) );
    return r
  }, r.prototype.render = function ( e, t, n ) {
    var r, o, i, a = "",
      s = this.rules;
    for ( r = 0, o = e.length; r < o; r++ ) i = e[ r ].type, a += "inline" === i ? this.renderInline( e[ r ].children, t, n ) : "undefined" != typeof s[ i ] ? s[ e[ r ].type ]( e, r, t, n, this ) : this.renderToken( e, r, t, n );
    return a
  }, e.exports = r
}, function ( e, t, n ) {
  "use strict";

  function r() {
    this.ruler = new o;
    for ( var e = 0; e < i.length; e++ ) this.ruler.push( i[ e ][ 0 ], i[ e ][ 1 ] )
  }
  var o = n( 145 ),
    i = [
      [ "normalize", n( 146 ) ],
      [ "block", n( 147 ) ],
      [ "inline", n( 148 ) ],
      [ "linkify", n( 149 ) ],
      [ "replacements", n( 150 ) ],
      [ "smartquotes", n( 151 ) ]
    ];
  r.prototype.process = function ( e ) {
    var t, n, r;
    for ( r = this.ruler.getRules( "" ), t = 0, n = r.length; t < n; t++ ) r[ t ]( e )
  }, r.prototype.State = n( 152 ), e.exports = r
}, function ( e, t ) {
  "use strict";

  function n() {
    this.__rules__ = [], this.__cache__ = null
  }
  n.prototype.__find__ = function ( e ) {
    for ( var t = 0; t < this.__rules__.length; t++ )
      if ( this.__rules__[ t ].name === e ) return t;
    return -1
  }, n.prototype.__compile__ = function () {
    var e = this,
      t = [ "" ];
    e.__rules__.forEach( function ( e ) {
      e.enabled && e.alt.forEach( function ( e ) {
        t.indexOf( e ) < 0 && t.push( e )
      } )
    } ), e.__cache__ = {}, t.forEach( function ( t ) {
      e.__cache__[ t ] = [], e.__rules__.forEach( function ( n ) {
        n.enabled && ( t && n.alt.indexOf( t ) < 0 || e.__cache__[ t ].push( n.fn ) )
      } )
    } )
  }, n.prototype.at = function ( e, t, n ) {
    var r = this.__find__( e ),
      o = n || {};
    if ( r === -1 ) throw new Error( "Parser rule not found: " + e );
    this.__rules__[ r ].fn = t, this.__rules__[ r ].alt = o.alt || [], this.__cache__ = null
  }, n.prototype.before = function ( e, t, n, r ) {
    var o = this.__find__( e ),
      i = r || {};
    if ( o === -1 ) throw new Error( "Parser rule not found: " + e );
    this.__rules__.splice( o, 0, {
      name: t,
      enabled: !0,
      fn: n,
      alt: i.alt || []
    } ), this.__cache__ = null
  }, n.prototype.after = function ( e, t, n, r ) {
    var o = this.__find__( e ),
      i = r || {};
    if ( o === -1 ) throw new Error( "Parser rule not found: " + e );
    this.__rules__.splice( o + 1, 0, {
      name: t,
      enabled: !0,
      fn: n,
      alt: i.alt || []
    } ), this.__cache__ = null
  }, n.prototype.push = function ( e, t, n ) {
    var r = n || {};
    this.__rules__.push( {
      name: e,
      enabled: !0,
      fn: t,
      alt: r.alt || []
    } ), this.__cache__ = null
  }, n.prototype.enable = function ( e, t ) {
    Array.isArray( e ) || ( e = [ e ] );
    var n = [];
    return e.forEach( function ( e ) {
      var r = this.__find__( e );
      if ( r < 0 ) {
        if ( t ) return;
        throw new Error( "Rules manager: invalid rule name " + e )
      }
      this.__rules__[ r ].enabled = !0, n.push( e )
    }, this ), this.__cache__ = null, n
  }, n.prototype.enableOnly = function ( e, t ) {
    Array.isArray( e ) || ( e = [ e ] ), this.__rules__.forEach( function ( e ) {
      e.enabled = !1
    } ), this.enable( e, t )
  }, n.prototype.disable = function ( e, t ) {
    Array.isArray( e ) || ( e = [ e ] );
    var n = [];
    return e.forEach( function ( e ) {
      var r = this.__find__( e );
      if ( r < 0 ) {
        if ( t ) return;
        throw new Error( "Rules manager: invalid rule name " + e )
      }
      this.__rules__[ r ].enabled = !1, n.push( e )
    }, this ), this.__cache__ = null, n
  }, n.prototype.getRules = function ( e ) {
    return null === this.__cache__ && this.__compile__(), this.__cache__[ e ] || []
  }, e.exports = n
}, function ( e, t ) {
  "use strict";
  var n = /\r[\n\u0085]?|[\u2424\u2028\u0085]/g,
    r = /\u0000/g;
  e.exports = function ( e ) {
    var t;
    t = e.src.replace( n, "\n" ), t = t.replace( r, "�" ), e.src = t
  }
}, function ( e, t ) {
  "use strict";
  e.exports = function ( e ) {
    var t;
    e.inlineMode ? ( t = new e.Token( "inline", "", 0 ), t.content = e.src, t.map = [ 0, 1 ], t.children = [], e.tokens.push( t ) ) : e.md.block.parse( e.src, e.md, e.env, e.tokens )
  }
}, function ( e, t ) {
  "use strict";
  e.exports = function ( e ) {
    var t, n, r, o = e.tokens;
    for ( n = 0, r = o.length; n < r; n++ ) t = o[ n ], "inline" === t.type && e.md.inline.parse( t.content, e.md, e.env, t.children )
  }
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    return /^<a[>\s]/i.test( e )
  }

  function o( e ) {
    return /^<\/a\s*>/i.test( e )
  }
  var i = n( 125 ).arrayReplaceAt;
  e.exports = function ( e ) {
    var t, n, a, s, l, u, c, f, p, d, h, v, g, m, y, b, x, w = e.tokens;
    if ( e.md.options.linkify )
      for ( n = 0, a = w.length; n < a; n++ )
        if ( "inline" === w[ n ].type && e.md.linkify.pretest( w[ n ].content ) )
          for ( s = w[ n ].children, g = 0, t = s.length - 1; t >= 0; t-- )
            if ( u = s[ t ], "link_close" !== u.type ) {
              if ( "html_inline" === u.type && ( r( u.content ) && g > 0 && g--, o( u.content ) && g++ ), !( g > 0 ) && "text" === u.type && e.md.linkify.test( u.content ) ) {
                for ( p = u.content, x = e.md.linkify.match( p ), c = [], v = u.level, h = 0, f = 0; f < x.length; f++ ) m = x[ f ].url, y = e.md.normalizeLink( m ), e.md.validateLink( y ) && ( b = x[ f ].text, b = x[ f ].schema ? "mailto:" !== x[ f ].schema || /^mailto:/i.test( b ) ? e.md.normalizeLinkText( b ) : e.md.normalizeLinkText( "mailto:" + b ).replace( /^mailto:/, "" ) : e.md.normalizeLinkText( "http://" + b ).replace( /^http:\/\//, "" ), d = x[ f ].index, d > h && ( l = new e.Token( "text", "", 0 ), l.content = p.slice( h, d ), l.level = v, c.push( l ) ), l = new e.Token( "link_open", "a", 1 ), l.attrs = [
                  [ "href", y ]
                ], l.level = v++, l.markup = "linkify", l.info = "auto", c.push( l ), l = new e.Token( "text", "", 0 ), l.content = b, l.level = v, c.push( l ), l = new e.Token( "link_close", "a", -1 ), l.level = --v, l.markup = "linkify", l.info = "auto", c.push( l ), h = x[ f ].lastIndex );
                h < p.length && ( l = new e.Token( "text", "", 0 ), l.content = p.slice( h ), l.level = v, c.push( l ) ), w[ n ].children = s = i( s, t, c )
              }
            } else
              for ( t--; s[ t ].level !== u.level && "link_open" !== s[ t ].type; ) t--
  }
}, function ( e, t ) {
  "use strict";

  function n( e, t ) {
    return l[ t.toLowerCase() ]
  }

  function r( e ) {
    var t, r, o = 0;
    for ( t = e.length - 1; t >= 0; t-- ) r = e[ t ], "text" !== r.type || o || ( r.content = r.content.replace( s, n ) ), "link_open" === r.type && "auto" === r.info && o--, "link_close" === r.type && "auto" === r.info && o++
  }

  function o( e ) {
    var t, n, r = 0;
    for ( t = e.length - 1; t >= 0; t-- ) n = e[ t ], "text" !== n.type || r || i.test( n.content ) && ( n.content = n.content.replace( /\+-/g, "±" ).replace( /\.{2,}/g, "…" ).replace( /([?!])…/g, "$1.." ).replace( /([?!]){4,}/g, "$1$1$1" ).replace( /,{2,}/g, "," ).replace( /(^|[^-])---([^-]|$)/gm, "$1—$2" ).replace( /(^|\s)--(\s|$)/gm, "$1–$2" ).replace( /(^|[^-\s])--([^-\s]|$)/gm, "$1–$2" ) ), "link_open" === n.type && "auto" === n.info && r--, "link_close" === n.type && "auto" === n.info && r++
  }
  var i = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/,
    a = /\((c|tm|r|p)\)/i,
    s = /\((c|tm|r|p)\)/gi,
    l = {
      c: "©",
      r: "®",
      p: "§",
      tm: "™"
    };
  e.exports = function ( e ) {
    var t;
    if ( e.md.options.typographer )
      for ( t = e.tokens.length - 1; t >= 0; t-- ) "inline" === e.tokens[ t ].type && ( a.test( e.tokens[ t ].content ) && r( e.tokens[ t ].children ), i.test( e.tokens[ t ].content ) && o( e.tokens[ t ].children ) )
  }
}, function ( e, t, n ) {
  "use strict";

  function r( e, t, n ) {
    return e.substr( 0, t ) + n + e.substr( t + 1 )
  }

  function o( e, t ) {
    var n, o, l, f, p, d, h, v, g, m, y, b, x, w, _, C, k, E, S, T, A;
    for ( S = [], n = 0; n < e.length; n++ ) {
      for ( o = e[ n ], h = e[ n ].level, k = S.length - 1; k >= 0 && !( S[ k ].level <= h ); k-- );
      if ( S.length = k + 1, "text" === o.type ) {
        l = o.content, p = 0, d = l.length;
        e: for ( ; p < d && ( u.lastIndex = p, f = u.exec( l ) ); ) {
          if ( _ = C = !0, p = f.index + 1, E = "'" === f[ 0 ], g = 32, f.index - 1 >= 0 ) g = l.charCodeAt( f.index - 1 );
          else
            for ( k = n - 1; k >= 0; k-- )
              if ( "text" === e[ k ].type ) {
                g = e[ k ].content.charCodeAt( e[ k ].content.length - 1 );
                break
              } if ( m = 32, p < d ) m = l.charCodeAt( p );
          else
            for ( k = n + 1; k < e.length; k++ )
              if ( "text" === e[ k ].type ) {
                m = e[ k ].content.charCodeAt( 0 );
                break
              } if ( y = s( g ) || a( String.fromCharCode( g ) ), b = s( m ) || a( String.fromCharCode( m ) ), x = i( g ), w = i( m ), w ? _ = !1 : b && ( x || y || ( _ = !1 ) ), x ? C = !1 : y && ( w || b || ( C = !1 ) ), 34 === m && '"' === f[ 0 ] && g >= 48 && g <= 57 && ( C = _ = !1 ), _ && C && ( _ = !1, C = b ), _ || C ) {
            if ( C )
              for ( k = S.length - 1; k >= 0 && ( v = S[ k ], !( S[ k ].level < h ) ); k-- )
                if ( v.single === E && S[ k ].level === h ) {
                  v = S[ k ], E ? ( T = t.md.options.quotes[ 2 ], A = t.md.options.quotes[ 3 ] ) : ( T = t.md.options.quotes[ 0 ], A = t.md.options.quotes[ 1 ] ), o.content = r( o.content, f.index, A ), e[ v.token ].content = r( e[ v.token ].content, v.pos, T ), p += A.length - 1, v.token === n && ( p += T.length - 1 ), l = o.content, d = l.length, S.length = k;
                  continue e
                } _ ? S.push( {
              token: n,
              pos: f.index,
              single: E,
              level: h
            } ) : C && E && ( o.content = r( o.content, f.index, c ) )
          } else E && ( o.content = r( o.content, f.index, c ) )
        }
      }
    }
  }
  var i = n( 125 ).isWhiteSpace,
    a = n( 125 ).isPunctChar,
    s = n( 125 ).isMdAsciiPunct,
    l = /['"]/,
    u = /['"]/g,
    c = "’";
  e.exports = function ( e ) {
    var t;
    if ( e.md.options.typographer )
      for ( t = e.tokens.length - 1; t >= 0; t-- ) "inline" === e.tokens[ t ].type && l.test( e.tokens[ t ].content ) && o( e.tokens[ t ].children, e )
  }
}, function ( e, t, n ) {
  "use strict";

  function r( e, t, n ) {
    this.src = e, this.env = n, this.tokens = [], this.inlineMode = !1, this.md = t
  }
  var o = n( 153 );
  r.prototype.Token = o, e.exports = r
}, function ( e, t ) {
  "use strict";

  function n( e, t, n ) {
    this.type = e, this.tag = t, this.attrs = null, this.map = null, this.nesting = n, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1
  }
  n.prototype.attrIndex = function ( e ) {
    var t, n, r;
    if ( !this.attrs ) return -1;
    for ( t = this.attrs, n = 0, r = t.length; n < r; n++ )
      if ( t[ n ][ 0 ] === e ) return n;
    return -1
  }, n.prototype.attrPush = function ( e ) {
    this.attrs ? this.attrs.push( e ) : this.attrs = [ e ]
  }, n.prototype.attrSet = function ( e, t ) {
    var n = this.attrIndex( e ),
      r = [ e, t ];
    n < 0 ? this.attrPush( r ) : this.attrs[ n ] = r
  }, n.prototype.attrGet = function ( e ) {
    var t = this.attrIndex( e ),
      n = null;
    return t >= 0 && ( n = this.attrs[ t ][ 1 ] ), n
  }, n.prototype.attrJoin = function ( e, t ) {
    var n = this.attrIndex( e );
    n < 0 ? this.attrPush( [ e, t ] ) : this.attrs[ n ][ 1 ] = this.attrs[ n ][ 1 ] + " " + t
  }, e.exports = n
}, function ( e, t, n ) {
  "use strict";

  function r() {
    this.ruler = new o;
    for ( var e = 0; e < i.length; e++ ) this.ruler.push( i[ e ][ 0 ], i[ e ][ 1 ], {
      alt: ( i[ e ][ 2 ] || [] ).slice()
    } )
  }
  var o = n( 145 ),
    i = [
      [ "table", n( 155 ), [ "paragraph", "reference" ] ],
      [ "code", n( 156 ) ],
      [ "fence", n( 157 ), [ "paragraph", "reference", "blockquote", "list" ] ],
      [ "blockquote", n( 158 ), [ "paragraph", "reference", "list" ] ],
      [ "hr", n( 159 ), [ "paragraph", "reference", "blockquote", "list" ] ],
      [ "list", n( 160 ), [ "paragraph", "reference", "blockquote" ] ],
      [ "reference", n( 161 ) ],
      [ "heading", n( 162 ), [ "paragraph", "reference", "blockquote" ] ],
      [ "lheading", n( 163 ) ],
      [ "html_block", n( 164 ), [ "paragraph", "reference", "blockquote" ] ],
      [ "paragraph", n( 167 ) ]
    ];
  r.prototype.tokenize = function ( e, t, n ) {
    for ( var r, o, i = this.ruler.getRules( "" ), a = i.length, s = t, l = !1, u = e.md.options.maxNesting; s < n && ( e.line = s = e.skipEmptyLines( s ), !( s >= n ) ) && !( e.sCount[ s ] < e.blkIndent ); ) {
      if ( e.level >= u ) {
        e.line = n;
        break
      }
      for ( o = 0; o < a && !( r = i[ o ]( e, s, n, !1 ) ); o++ );
      if ( e.tight = !l, e.isEmpty( e.line - 1 ) && ( l = !0 ), s = e.line, s < n && e.isEmpty( s ) ) {
        if ( l = !0, s++, s < n && "list" === e.parentType && e.isEmpty( s ) ) break;
        e.line = s
      }
    }
  }, r.prototype.parse = function ( e, t, n, r ) {
    var o;
    e && ( o = new this.State( e, t, n, r ), this.tokenize( o, o.line, o.lineMax ) )
  }, r.prototype.State = n( 168 ), e.exports = r
}, function ( e, t ) {
  "use strict";

  function n( e, t ) {
    var n = e.bMarks[ t ] + e.blkIndent,
      r = e.eMarks[ t ];
    return e.src.substr( n, r - n )
  }

  function r( e ) {
    var t, n = [],
      r = 0,
      o = e.length,
      i = 0,
      a = 0,
      s = !1,
      l = 0;
    for ( t = e.charCodeAt( r ); r < o; ) 96 === t && i % 2 === 0 ? ( s = !s, l = r ) : 124 !== t || i % 2 !== 0 || s ? 92 === t ? i++ : i = 0 : ( n.push( e.substring( a, r ) ), a = r + 1 ), r++, r === o && s && ( s = !1, r = l + 1 ), t = e.charCodeAt( r );
    return n.push( e.substring( a ) ), n
  }
  e.exports = function ( e, t, o, i ) {
    var a, s, l, u, c, f, p, d, h, v, g, m;
    if ( t + 2 > o ) return !1;
    if ( c = t + 1, e.sCount[ c ] < e.blkIndent ) return !1;
    if ( l = e.bMarks[ c ] + e.tShift[ c ], l >= e.eMarks[ c ] ) return !1;
    if ( a = e.src.charCodeAt( l ), 124 !== a && 45 !== a && 58 !== a ) return !1;
    if ( s = n( e, t + 1 ), !/^[-:| ]+$/.test( s ) ) return !1;
    for ( f = s.split( "|" ), h = [], u = 0; u < f.length; u++ ) {
      if ( v = f[ u ].trim(), !v ) {
        if ( 0 === u || u === f.length - 1 ) continue;
        return !1
      }
      if ( !/^:?-+:?$/.test( v ) ) return !1;
      58 === v.charCodeAt( v.length - 1 ) ? h.push( 58 === v.charCodeAt( 0 ) ? "center" : "right" ) : 58 === v.charCodeAt( 0 ) ? h.push( "left" ) : h.push( "" )
    }
    if ( s = n( e, t ).trim(), s.indexOf( "|" ) === -1 ) return !1;
    if ( f = r( s.replace( /^\||\|$/g, "" ) ), p = f.length, p > h.length ) return !1;
    if ( i ) return !0;
    for ( d = e.push( "table_open", "table", 1 ), d.map = g = [ t, 0 ], d = e.push( "thead_open", "thead", 1 ), d.map = [ t, t + 1 ], d = e.push( "tr_open", "tr", 1 ), d.map = [ t, t + 1 ], u = 0; u < f.length; u++ ) d = e.push( "th_open", "th", 1 ), d.map = [ t, t + 1 ], h[ u ] && ( d.attrs = [
      [ "style", "text-align:" + h[ u ] ]
    ] ), d = e.push( "inline", "", 0 ), d.content = f[ u ].trim(), d.map = [ t, t + 1 ], d.children = [], d = e.push( "th_close", "th", -1 );
    for ( d = e.push( "tr_close", "tr", -1 ), d = e.push( "thead_close", "thead", -1 ), d = e.push( "tbody_open", "tbody", 1 ), d.map = m = [ t + 2, 0 ], c = t + 2; c < o && !( e.sCount[ c ] < e.blkIndent ) && ( s = n( e, c ), s.indexOf( "|" ) !== -1 ); c++ ) {
      for ( f = r( s.replace( /^\||\|\s*$/g, "" ) ), d = e.push( "tr_open", "tr", 1 ), u = 0; u < p; u++ ) d = e.push( "td_open", "td", 1 ), h[ u ] && ( d.attrs = [
        [ "style", "text-align:" + h[ u ] ]
      ] ), d = e.push( "inline", "", 0 ), d.content = f[ u ] ? f[ u ].trim() : "", d.children = [], d = e.push( "td_close", "td", -1 );
      d = e.push( "tr_close", "tr", -1 )
    }
    return d = e.push( "tbody_close", "tbody", -1 ), d = e.push( "table_close", "table", -1 ), g[ 1 ] = m[ 1 ] = c, e.line = c, !0
  }
}, function ( e, t ) {
  "use strict";
  e.exports = function ( e, t, n ) {
    var r, o, i, a = 0;
    if ( e.sCount[ t ] - e.blkIndent < 4 ) return !1;
    for ( o = r = t + 1; r < n; )
      if ( e.isEmpty( r ) ) {
        if ( a++, a >= 2 && "list" === e.parentType ) break;
        r++
      } else {
        if ( a = 0, !( e.sCount[ r ] - e.blkIndent >= 4 ) ) break;
        r++, o = r
      } return e.line = o, i = e.push( "code_block", "code", 0 ), i.content = e.getLines( t, o, 4 + e.blkIndent, !0 ), i.map = [ t, e.line ], !0
  }
}, function ( e, t ) {
  "use strict";
  e.exports = function ( e, t, n, r ) {
    var o, i, a, s, l, u, c, f = !1,
      p = e.bMarks[ t ] + e.tShift[ t ],
      d = e.eMarks[ t ];
    if ( p + 3 > d ) return !1;
    if ( o = e.src.charCodeAt( p ), 126 !== o && 96 !== o ) return !1;
    if ( l = p, p = e.skipChars( p, o ), i = p - l, i < 3 ) return !1;
    if ( c = e.src.slice( l, p ), a = e.src.slice( p, d ), a.indexOf( "`" ) >= 0 ) return !1;
    if ( r ) return !0;
    for ( s = t;
      ( s++, !( s >= n ) ) && ( p = l = e.bMarks[ s ] + e.tShift[ s ], d = e.eMarks[ s ], !( p < d && e.sCount[ s ] < e.blkIndent ) ); )
      if ( e.src.charCodeAt( p ) === o && !( e.sCount[ s ] - e.blkIndent >= 4 || ( p = e.skipChars( p, o ), p - l < i || ( p = e.skipSpaces( p ), p < d ) ) ) ) {
        f = !0;
        break
      } return i = e.sCount[ t ], e.line = s + ( f ? 1 : 0 ), u = e.push( "fence", "code", 0 ), u.info = a, u.content = e.getLines( t + 1, s, i, !0 ), u.markup = c, u.map = [ t, e.line ], !0
  }
}, function ( e, t, n ) {
  "use strict";
  var r = n( 125 ).isSpace;
  e.exports = function ( e, t, n, o ) {
    var i, a, s, l, u, c, f, p, d, h, v, g, m, y, b, x, w = e.bMarks[ t ] + e.tShift[ t ],
      _ = e.eMarks[ t ];
    if ( 62 !== e.src.charCodeAt( w++ ) ) return !1;
    if ( o ) return !0;
    for ( 32 === e.src.charCodeAt( w ) && w++, c = e.blkIndent, e.blkIndent = 0, d = h = e.sCount[ t ] + w - ( e.bMarks[ t ] + e.tShift[ t ] ), u = [ e.bMarks[ t ] ], e.bMarks[ t ] = w; w < _ && ( v = e.src.charCodeAt( w ), r( v ) ); ) 9 === v ? h += 4 - h % 4 : h++, w++;
    for ( a = w >= _, l = [ e.sCount[ t ] ], e.sCount[ t ] = h - d, s = [ e.tShift[ t ] ], e.tShift[ t ] = w - e.bMarks[ t ], g = e.md.block.ruler.getRules( "blockquote" ), i = t + 1; i < n && !( e.sCount[ i ] < c ) && ( w = e.bMarks[ i ] + e.tShift[ i ], _ = e.eMarks[ i ], !( w >= _ ) ); i++ )
      if ( 62 !== e.src.charCodeAt( w++ ) ) {
        if ( a ) break;
        for ( x = !1, y = 0, b = g.length; y < b; y++ )
          if ( g[ y ]( e, i, n, !0 ) ) {
            x = !0;
            break
          } if ( x ) break;
        u.push( e.bMarks[ i ] ), s.push( e.tShift[ i ] ), l.push( e.sCount[ i ] ), e.sCount[ i ] = -1
      } else {
        for ( 32 === e.src.charCodeAt( w ) && w++, d = h = e.sCount[ i ] + w - ( e.bMarks[ i ] + e.tShift[ i ] ), u.push( e.bMarks[ i ] ), e.bMarks[ i ] = w; w < _ && ( v = e.src.charCodeAt( w ), r( v ) ); ) 9 === v ? h += 4 - h % 4 : h++, w++;
        a = w >= _, l.push( e.sCount[ i ] ), e.sCount[ i ] = h - d, s.push( e.tShift[ i ] ), e.tShift[ i ] = w - e.bMarks[ i ]
      } for ( f = e.parentType, e.parentType = "blockquote", m = e.push( "blockquote_open", "blockquote", 1 ), m.markup = ">", m.map = p = [ t, 0 ], e.md.block.tokenize( e, t, i ), m = e.push( "blockquote_close", "blockquote", -1 ), m.markup = ">", e.parentType = f, p[ 1 ] = e.line, y = 0; y < s.length; y++ ) e.bMarks[ y + t ] = u[ y ], e.tShift[ y + t ] = s[ y ], e.sCount[ y + t ] = l[ y ];
    return e.blkIndent = c, !0
  }
}, function ( e, t, n ) {
  "use strict";
  var r = n( 125 ).isSpace;
  e.exports = function ( e, t, n, o ) {
    var i, a, s, l, u = e.bMarks[ t ] + e.tShift[ t ],
      c = e.eMarks[ t ];
    if ( i = e.src.charCodeAt( u++ ), 42 !== i && 45 !== i && 95 !== i ) return !1;
    for ( a = 1; u < c; ) {
      if ( s = e.src.charCodeAt( u++ ), s !== i && !r( s ) ) return !1;
      s === i && a++
    }
    return !( a < 3 ) && ( !!o || ( e.line = t + 1, l = e.push( "hr", "hr", 0 ), l.map = [ t, e.line ], l.markup = Array( a + 1 ).join( String.fromCharCode( i ) ), !0 ) )
  }
}, function ( e, t, n ) {
  "use strict";

  function r( e, t ) {
    var n, r, o, i;
    return r = e.bMarks[ t ] + e.tShift[ t ], o = e.eMarks[ t ], n = e.src.charCodeAt( r++ ), 42 !== n && 45 !== n && 43 !== n ? -1 : r < o && ( i = e.src.charCodeAt( r ), !a( i ) ) ? -1 : r
  }

  function o( e, t ) {
    var n, r = e.bMarks[ t ] + e.tShift[ t ],
      o = r,
      i = e.eMarks[ t ];
    if ( o + 1 >= i ) return -1;
    if ( n = e.src.charCodeAt( o++ ), n < 48 || n > 57 ) return -1;
    for ( ;; ) {
      if ( o >= i ) return -1;
      n = e.src.charCodeAt( o++ ); {
        if ( !( n >= 48 && n <= 57 ) ) {
          if ( 41 === n || 46 === n ) break;
          return -1
        }
        if ( o - r >= 10 ) return -1
      }
    }
    return o < i && ( n = e.src.charCodeAt( o ), !a( n ) ) ? -1 : o
  }

  function i( e, t ) {
    var n, r, o = e.level + 2;
    for ( n = t + 2, r = e.tokens.length - 2; n < r; n++ ) e.tokens[ n ].level === o && "paragraph_open" === e.tokens[ n ].type && ( e.tokens[ n + 2 ].hidden = !0, e.tokens[ n ].hidden = !0, n += 2 )
  }
  var a = n( 125 ).isSpace;
  e.exports = function ( e, t, n, s ) {
    var l, u, c, f, p, d, h, v, g, m, y, b, x, w, _, C, k, E, S, T, A, M, O, N, P, D, L, I, R = !0;
    if ( ( y = o( e, t ) ) >= 0 ) E = !0;
    else {
      if ( !( ( y = r( e, t ) ) >= 0 ) ) return !1;
      E = !1
    }
    if ( k = e.src.charCodeAt( y - 1 ), s ) return !0;
    for ( T = e.tokens.length, E ? ( m = e.bMarks[ t ] + e.tShift[ t ], C = Number( e.src.substr( m, y - m - 1 ) ), P = e.push( "ordered_list_open", "ol", 1 ), 1 !== C && ( P.attrs = [
        [ "start", C ]
      ] ) ) : P = e.push( "bullet_list_open", "ul", 1 ), P.map = M = [ t, 0 ], P.markup = String.fromCharCode( k ), l = t, A = !1, N = e.md.block.ruler.getRules( "list" ); l < n; ) {
      for ( x = y, w = e.eMarks[ l ], u = c = e.sCount[ l ] + y - ( e.bMarks[ t ] + e.tShift[ t ] ); x < w && ( b = e.src.charCodeAt( x ), a( b ) ); ) 9 === b ? c += 4 - c % 4 : c++, x++;
      if ( S = x, _ = S >= w ? 1 : c - u, _ > 4 && ( _ = 1 ), f = u + _, P = e.push( "list_item_open", "li", 1 ), P.markup = String.fromCharCode( k ), P.map = O = [ t, 0 ], d = e.blkIndent, v = e.tight, p = e.tShift[ t ], h = e.sCount[ t ], g = e.parentType, e.blkIndent = f, e.tight = !0, e.parentType = "list", e.tShift[ t ] = S - e.bMarks[ t ], e.sCount[ t ] = c, S >= w && e.isEmpty( t + 1 ) ? e.line = Math.min( e.line + 2, n ) : e.md.block.tokenize( e, t, n, !0 ), e.tight && !A || ( R = !1 ), A = e.line - t > 1 && e.isEmpty( e.line - 1 ), e.blkIndent = d, e.tShift[ t ] = p, e.sCount[ t ] = h, e.tight = v, e.parentType = g, P = e.push( "list_item_close", "li", -1 ), P.markup = String.fromCharCode( k ), l = t = e.line, O[ 1 ] = l, S = e.bMarks[ t ], l >= n ) break;
      if ( e.isEmpty( l ) ) break;
      if ( e.sCount[ l ] < e.blkIndent ) break;
      for ( I = !1, D = 0, L = N.length; D < L; D++ )
        if ( N[ D ]( e, l, n, !0 ) ) {
          I = !0;
          break
        } if ( I ) break;
      if ( E ) {
        if ( y = o( e, l ), y < 0 ) break
      } else if ( y = r( e, l ), y < 0 ) break;
      if ( k !== e.src.charCodeAt( y - 1 ) ) break
    }
    return P = E ? e.push( "ordered_list_close", "ol", -1 ) : e.push( "bullet_list_close", "ul", -1 ), P.markup = String.fromCharCode( k ), M[ 1 ] = l, e.line = l, R && i( e, T ), !0
  }
}, function ( e, t, n ) {
  "use strict";
  var r = n( 141 ),
    o = n( 142 ),
    i = n( 125 ).normalizeReference,
    a = n( 125 ).isSpace;
  e.exports = function ( e, t, n, s ) {
    var l, u, c, f, p, d, h, v, g, m, y, b, x, w, _, C = 0,
      k = e.bMarks[ t ] + e.tShift[ t ],
      E = e.eMarks[ t ],
      S = t + 1;
    if ( 91 !== e.src.charCodeAt( k ) ) return !1;
    for ( ; ++k < E; )
      if ( 93 === e.src.charCodeAt( k ) && 92 !== e.src.charCodeAt( k - 1 ) ) {
        if ( k + 1 === E ) return !1;
        if ( 58 !== e.src.charCodeAt( k + 1 ) ) return !1;
        break
      } for ( f = e.lineMax, w = e.md.block.ruler.getRules( "reference" ); S < f && !e.isEmpty( S ); S++ )
      if ( !( e.sCount[ S ] - e.blkIndent > 3 || e.sCount[ S ] < 0 ) ) {
        for ( x = !1, d = 0, h = w.length; d < h; d++ )
          if ( w[ d ]( e, S, f, !0 ) ) {
            x = !0;
            break
          } if ( x ) break
      } for ( b = e.getLines( t, S, e.blkIndent, !1 ).trim(), E = b.length, k = 1; k < E; k++ ) {
      if ( l = b.charCodeAt( k ), 91 === l ) return !1;
      if ( 93 === l ) {
        g = k;
        break
      }
      10 === l ? C++ : 92 === l && ( k++, k < E && 10 === b.charCodeAt( k ) && C++ )
    }
    if ( g < 0 || 58 !== b.charCodeAt( g + 1 ) ) return !1;
    for ( k = g + 2; k < E; k++ )
      if ( l = b.charCodeAt( k ), 10 === l ) C++;
      else if ( !a( l ) ) break;
    if ( m = r( b, k, E ), !m.ok ) return !1;
    if ( p = e.md.normalizeLink( m.str ), !e.md.validateLink( p ) ) return !1;
    for ( k = m.pos, C += m.lines, u = k, c = C, y = k; k < E; k++ )
      if ( l = b.charCodeAt( k ), 10 === l ) C++;
      else if ( !a( l ) ) break;
    for ( m = o( b, k, E ), k < E && y !== k && m.ok ? ( _ = m.str, k = m.pos, C += m.lines ) : ( _ = "", k = u, C = c ); k < E && ( l = b.charCodeAt( k ), a( l ) ); ) k++;
    if ( k < E && 10 !== b.charCodeAt( k ) && _ )
      for ( _ = "", k = u, C = c; k < E && ( l = b.charCodeAt( k ), a( l ) ); ) k++;
    return !( k < E && 10 !== b.charCodeAt( k ) ) && ( !!( v = i( b.slice( 1, g ) ) ) && ( !!s || ( "undefined" == typeof e.env.references && ( e.env.references = {} ), "undefined" == typeof e.env.references[ v ] && ( e.env.references[ v ] = {
      title: _,
      href: p
    } ), e.line = t + C + 1, !0 ) ) )
  }
}, function ( e, t, n ) {
  "use strict";
  var r = n( 125 ).isSpace;
  e.exports = function ( e, t, n, o ) {
    var i, a, s, l, u = e.bMarks[ t ] + e.tShift[ t ],
      c = e.eMarks[ t ];
    if ( i = e.src.charCodeAt( u ), 35 !== i || u >= c ) return !1;
    for ( a = 1, i = e.src.charCodeAt( ++u ); 35 === i && u < c && a <= 6; ) a++, i = e.src.charCodeAt( ++u );
    return !( a > 6 || u < c && 32 !== i ) && ( !!o || ( c = e.skipSpacesBack( c, u ), s = e.skipCharsBack( c, 35, u ), s > u && r( e.src.charCodeAt( s - 1 ) ) && ( c = s ), e.line = t + 1, l = e.push( "heading_open", "h" + String( a ), 1 ), l.markup = "########".slice( 0, a ), l.map = [ t, e.line ], l = e.push( "inline", "", 0 ), l.content = e.src.slice( u, c ).trim(), l.map = [ t, e.line ], l.children = [], l = e.push( "heading_close", "h" + String( a ), -1 ), l.markup = "########".slice( 0, a ), !0 ) )
  }
}, function ( e, t ) {
  "use strict";
  e.exports = function ( e, t, n ) {
    for ( var r, o, i, a, s, l, u, c, f, p = t + 1, d = e.md.block.ruler.getRules( "paragraph" ); p < n && !e.isEmpty( p ); p++ )
      if ( !( e.sCount[ p ] - e.blkIndent > 3 ) ) {
        if ( e.sCount[ p ] >= e.blkIndent && ( l = e.bMarks[ p ] + e.tShift[ p ], u = e.eMarks[ p ], l < u && ( f = e.src.charCodeAt( l ), ( 45 === f || 61 === f ) && ( l = e.skipChars( l, f ), l = e.skipSpaces( l ), l >= u ) ) ) ) {
          c = 61 === f ? 1 : 2;
          break
        }
        if ( !( e.sCount[ p ] < 0 ) ) {
          for ( o = !1, i = 0, a = d.length; i < a; i++ )
            if ( d[ i ]( e, p, n, !0 ) ) {
              o = !0;
              break
            } if ( o ) break
        }
      } return !!c && ( r = e.getLines( t, p, e.blkIndent, !1 ).trim(), e.line = p + 1, s = e.push( "heading_open", "h" + String( c ), 1 ), s.markup = String.fromCharCode( f ), s.map = [ t, e.line ], s = e.push( "inline", "", 0 ), s.content = r, s.map = [ t, e.line - 1 ], s.children = [], s = e.push( "heading_close", "h" + String( c ), -1 ), s.markup = String.fromCharCode( f ), !0 )
  }
}, function ( e, t, n ) {
  "use strict";
  var r = n( 165 ),
    o = n( 166 ).HTML_OPEN_CLOSE_TAG_RE,
    i = [
      [ /^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, !0 ],
      [ /^<!--/, /-->/, !0 ],
      [ /^<\?/, /\?>/, !0 ],
      [ /^<![A-Z]/, />/, !0 ],
      [ /^<!\[CDATA\[/, /\]\]>/, !0 ],
      [ new RegExp( "^</?(" + r.join( "|" ) + ")(?=(\\s|/?>|$))", "i" ), /^$/, !0 ],
      [ new RegExp( o.source + "\\s*$" ), /^$/, !1 ]
    ];
  e.exports = function ( e, t, n, r ) {
    var o, a, s, l, u = e.bMarks[ t ] + e.tShift[ t ],
      c = e.eMarks[ t ];
    if ( !e.md.options.html ) return !1;
    if ( 60 !== e.src.charCodeAt( u ) ) return !1;
    for ( l = e.src.slice( u, c ), o = 0; o < i.length && !i[ o ][ 0 ].test( l ); o++ );
    if ( o === i.length ) return !1;
    if ( r ) return i[ o ][ 2 ];
    if ( a = t + 1, !i[ o ][ 1 ].test( l ) )
      for ( ; a < n && !( e.sCount[ a ] < e.blkIndent ); a++ )
        if ( u = e.bMarks[ a ] + e.tShift[ a ], c = e.eMarks[ a ], l = e.src.slice( u, c ), i[ o ][ 1 ].test( l ) ) {
          0 !== l.length && a++;
          break
        } return e.line = a, s = e.push( "html_block", "", 0 ), s.map = [ t, a ], s.content = e.getLines( t, a, e.blkIndent, !0 ), !0
  }
}, function ( e, t ) {
  "use strict";
  e.exports = [ "address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "meta", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "pre", "section", "source", "title", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul" ]
}, function ( e, t ) {
  "use strict";
  var n = "[a-zA-Z_:][a-zA-Z0-9:._-]*",
    r = "[^\"'=<>`\\x00-\\x20]+",
    o = "'[^']*'",
    i = '"[^"]*"',
    a = "(?:" + r + "|" + o + "|" + i + ")",
    s = "(?:\\s+" + n + "(?:\\s*=\\s*" + a + ")?)",
    l = "<[A-Za-z][A-Za-z0-9\\-]*" + s + "*\\s*\\/?>",
    u = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",
    c = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->",
    f = "<[?].*?[?]>",
    p = "<![A-Z]+\\s+[^>]*>",
    d = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
    h = new RegExp( "^(?:" + l + "|" + u + "|" + c + "|" + f + "|" + p + "|" + d + ")" ),
    v = new RegExp( "^(?:" + l + "|" + u + ")" );
  e.exports.HTML_TAG_RE = h, e.exports.HTML_OPEN_CLOSE_TAG_RE = v
}, function ( e, t ) {
  "use strict";
  e.exports = function ( e, t ) {
    for ( var n, r, o, i, a, s = t + 1, l = e.md.block.ruler.getRules( "paragraph" ), u = e.lineMax; s < u && !e.isEmpty( s ); s++ )
      if ( !( e.sCount[ s ] - e.blkIndent > 3 || e.sCount[ s ] < 0 ) ) {
        for ( r = !1, o = 0, i = l.length; o < i; o++ )
          if ( l[ o ]( e, s, u, !0 ) ) {
            r = !0;
            break
          } if ( r ) break
      } return n = e.getLines( t, s, e.blkIndent, !1 ).trim(), e.line = s, a = e.push( "paragraph_open", "p", 1 ), a.map = [ t, e.line ], a = e.push( "inline", "", 0 ), a.content = n, a.map = [ t, e.line ], a.children = [], a = e.push( "paragraph_close", "p", -1 ), !0
  }
}, function ( e, t, n ) {
  "use strict";

  function r( e, t, n, r ) {
    var o, a, s, l, u, c, f, p;
    for ( this.src = e, this.md = t, this.env = n, this.tokens = r, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.parentType = "root", this.ddIndent = -1, this.level = 0, this.result = "", a = this.src, p = !1, s = l = c = f = 0, u = a.length; l < u; l++ ) {
      if ( o = a.charCodeAt( l ), !p ) {
        if ( i( o ) ) {
          c++, 9 === o ? f += 4 - f % 4 : f++;
          continue
        }
        p = !0
      }
      10 !== o && l !== u - 1 || ( 10 !== o && l++, this.bMarks.push( s ), this.eMarks.push( l ), this.tShift.push( c ), this.sCount.push( f ), p = !1, c = 0, f = 0, s = l + 1 )
    }
    this.bMarks.push( a.length ), this.eMarks.push( a.length ), this.tShift.push( 0 ), this.sCount.push( 0 ), this.lineMax = this.bMarks.length - 1
  }
  var o = n( 153 ),
    i = n( 125 ).isSpace;
  r.prototype.push = function ( e, t, n ) {
    var r = new o( e, t, n );
    return r.block = !0, n < 0 && this.level--, r.level = this.level, n > 0 && this.level++, this.tokens.push( r ), r
  }, r.prototype.isEmpty = function ( e ) {
    return this.bMarks[ e ] + this.tShift[ e ] >= this.eMarks[ e ]
  }, r.prototype.skipEmptyLines = function ( e ) {
    for ( var t = this.lineMax; e < t && !( this.bMarks[ e ] + this.tShift[ e ] < this.eMarks[ e ] ); e++ );
    return e
  }, r.prototype.skipSpaces = function ( e ) {
    for ( var t, n = this.src.length; e < n && ( t = this.src.charCodeAt( e ), i( t ) ); e++ );
    return e
  }, r.prototype.skipSpacesBack = function ( e, t ) {
    if ( e <= t ) return e;
    for ( ; e > t; )
      if ( !i( this.src.charCodeAt( --e ) ) ) return e + 1;
    return e
  }, r.prototype.skipChars = function ( e, t ) {
    for ( var n = this.src.length; e < n && this.src.charCodeAt( e ) === t; e++ );
    return e
  }, r.prototype.skipCharsBack = function ( e, t, n ) {
    if ( e <= n ) return e;
    for ( ; e > n; )
      if ( t !== this.src.charCodeAt( --e ) ) return e + 1;
    return e
  }, r.prototype.getLines = function ( e, t, n, r ) {
    var o, a, s, l, u, c, f, p = e;
    if ( e >= t ) return "";
    for ( c = new Array( t - e ), o = 0; p < t; p++, o++ ) {
      for ( a = 0, f = l = this.bMarks[ p ], u = p + 1 < t || r ? this.eMarks[ p ] + 1 : this.eMarks[ p ]; l < u && a < n; ) {
        if ( s = this.src.charCodeAt( l ), i( s ) ) 9 === s ? a += 4 - a % 4 : a++;
        else {
          if ( !( l - f < this.tShift[ p ] ) ) break;
          a++
        }
        l++
      }
      c[ o ] = this.src.slice( l, u )
    }
    return c.join( "" )
  }, r.prototype.Token = o, e.exports = r
}, function ( e, t, n ) {
  "use strict";

  function r() {
    var e;
    for ( this.ruler = new o, e = 0; e < i.length; e++ ) this.ruler.push( i[ e ][ 0 ], i[ e ][ 1 ] );
    for ( this.ruler2 = new o, e = 0; e < a.length; e++ ) this.ruler2.push( a[ e ][ 0 ], a[ e ][ 1 ] )
  }
  var o = n( 145 ),
    i = [
      [ "text", n( 170 ) ],
      [ "newline", n( 171 ) ],
      [ "escape", n( 172 ) ],
      [ "backticks", n( 173 ) ],
      [ "strikethrough", n( 174 ).tokenize ],
      [ "emphasis", n( 175 ).tokenize ],
      [ "link", n( 176 ) ],
      [ "image", n( 177 ) ],
      [ "autolink", n( 178 ) ],
      [ "html_inline", n( 179 ) ],
      [ "entity", n( 180 ) ]
    ],
    a = [
      [ "balance_pairs", n( 181 ) ],
      [ "strikethrough", n( 174 ).postProcess ],
      [ "emphasis", n( 175 ).postProcess ],
      [ "text_collapse", n( 182 ) ]
    ];
  r.prototype.skipToken = function ( e ) {
    var t, n, r = e.pos,
      o = this.ruler.getRules( "" ),
      i = o.length,
      a = e.md.options.maxNesting,
      s = e.cache;
    if ( "undefined" != typeof s[ r ] ) return void( e.pos = s[ r ] );
    if ( e.level < a )
      for ( n = 0; n < i && ( e.level++, t = o[ n ]( e, !0 ), e.level--, !t ); n++ );
    else e.pos = e.posMax;
    t || e.pos++, s[ r ] = e.pos
  }, r.prototype.tokenize = function ( e ) {
    for ( var t, n, r = this.ruler.getRules( "" ), o = r.length, i = e.posMax, a = e.md.options.maxNesting; e.pos < i; ) {
      if ( e.level < a )
        for ( n = 0; n < o && !( t = r[ n ]( e, !1 ) ); n++ );
      if ( t ) {
        if ( e.pos >= i ) break
      } else e.pending += e.src[ e.pos++ ]
    }
    e.pending && e.pushPending()
  }, r.prototype.parse = function ( e, t, n, r ) {
    var o, i, a, s = new this.State( e, t, n, r );
    for ( this.tokenize( s ), i = this.ruler2.getRules( "" ), a = i.length, o = 0; o < a; o++ ) i[ o ]( s )
  }, r.prototype.State = n( 183 ), e.exports = r
}, function ( e, t ) {
  "use strict";

  function n( e ) {
    switch ( e ) {
      case 10:
      case 33:
      case 35:
      case 36:
      case 37:
      case 38:
      case 42:
      case 43:
      case 45:
      case 58:
      case 60:
      case 61:
      case 62:
      case 64:
      case 91:
      case 92:
      case 93:
      case 94:
      case 95:
      case 96:
      case 123:
      case 125:
      case 126:
        return !0;
      default:
        return !1
    }
  }
  e.exports = function ( e, t ) {
    for ( var r = e.pos; r < e.posMax && !n( e.src.charCodeAt( r ) ); ) r++;
    return r !== e.pos && ( t || ( e.pending += e.src.slice( e.pos, r ) ), e.pos = r, !0 )
  }
}, function ( e, t ) {
  "use strict";
  e.exports = function ( e, t ) {
    var n, r, o = e.pos;
    if ( 10 !== e.src.charCodeAt( o ) ) return !1;
    for ( n = e.pending.length - 1, r = e.posMax, t || ( n >= 0 && 32 === e.pending.charCodeAt( n ) ? n >= 1 && 32 === e.pending.charCodeAt( n - 1 ) ? ( e.pending = e.pending.replace( / +$/, "" ), e.push( "hardbreak", "br", 0 ) ) : ( e.pending = e.pending.slice( 0, -1 ), e.push( "softbreak", "br", 0 ) ) : e.push( "softbreak", "br", 0 ) ), o++; o < r && 32 === e.src.charCodeAt( o ); ) o++;
    return e.pos = o, !0
  }
}, function ( e, t, n ) {
  "use strict";
  for ( var r = n( 125 ).isSpace, o = [], i = 0; i < 256; i++ ) o.push( 0 );
  "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split( "" ).forEach( function ( e ) {
    o[ e.charCodeAt( 0 ) ] = 1
  } ), e.exports = function ( e, t ) {
    var n, i = e.pos,
      a = e.posMax;
    if ( 92 !== e.src.charCodeAt( i ) ) return !1;
    if ( i++, i < a ) {
      if ( n = e.src.charCodeAt( i ), n < 256 && 0 !== o[ n ] ) return t || ( e.pending += e.src[ i ] ), e.pos += 2, !0;
      if ( 10 === n ) {
        for ( t || e.push( "hardbreak", "br", 0 ), i++; i < a && ( n = e.src.charCodeAt( i ), r( n ) ); ) i++;
        return e.pos = i, !0
      }
    }
    return t || ( e.pending += "\\" ), e.pos++, !0
  }
}, function ( e, t ) {
  "use strict";
  e.exports = function ( e, t ) {
    var n, r, o, i, a, s, l = e.pos,
      u = e.src.charCodeAt( l );
    if ( 96 !== u ) return !1;
    for ( n = l, l++, r = e.posMax; l < r && 96 === e.src.charCodeAt( l ); ) l++;
    for ( o = e.src.slice( n, l ), i = a = l;
      ( i = e.src.indexOf( "`", a ) ) !== -1; ) {
      for ( a = i + 1; a < r && 96 === e.src.charCodeAt( a ); ) a++;
      if ( a - i === o.length ) return t || ( s = e.push( "code_inline", "code", 0 ), s.markup = o, s.content = e.src.slice( l, i ).replace( /[ \n]+/g, " " ).trim() ), e.pos = a, !0
    }
    return t || ( e.pending += o ), e.pos += o.length, !0
  }
}, function ( e, t ) {
  "use strict";
  e.exports.tokenize = function ( e, t ) {
    var n, r, o, i, a, s = e.pos,
      l = e.src.charCodeAt( s );
    if ( t ) return !1;
    if ( 126 !== l ) return !1;
    if ( r = e.scanDelims( e.pos, !0 ), i = r.length, a = String.fromCharCode( l ), i < 2 ) return !1;
    for ( i % 2 && ( o = e.push( "text", "", 0 ), o.content = a, i-- ), n = 0; n < i; n += 2 ) o = e.push( "text", "", 0 ), o.content = a + a, e.delimiters.push( {
      marker: l,
      jump: n,
      token: e.tokens.length - 1,
      level: e.level,
      end: -1,
      open: r.can_open,
      close: r.can_close
    } );
    return e.pos += r.length, !0
  }, e.exports.postProcess = function ( e ) {
    var t, n, r, o, i, a = [],
      s = e.delimiters,
      l = e.delimiters.length;
    for ( t = 0; t < l; t++ ) r = s[ t ], 126 === r.marker && r.end !== -1 && ( o = s[ r.end ], i = e.tokens[ r.token ], i.type = "s_open", i.tag = "s", i.nesting = 1, i.markup = "~~", i.content = "", i = e.tokens[ o.token ], i.type = "s_close", i.tag = "s", i.nesting = -1, i.markup = "~~", i.content = "", "text" === e.tokens[ o.token - 1 ].type && "~" === e.tokens[ o.token - 1 ].content && a.push( o.token - 1 ) );
    for ( ; a.length; ) {
      for ( t = a.pop(), n = t + 1; n < e.tokens.length && "s_close" === e.tokens[ n ].type; ) n++;
      n--, t !== n && ( i = e.tokens[ n ], e.tokens[ n ] = e.tokens[ t ], e.tokens[ t ] = i )
    }
  }
}, function ( e, t ) {
  "use strict";
  e.exports.tokenize = function ( e, t ) {
    var n, r, o, i = e.pos,
      a = e.src.charCodeAt( i );
    if ( t ) return !1;
    if ( 95 !== a && 42 !== a ) return !1;
    for ( r = e.scanDelims( e.pos, 42 === a ), n = 0; n < r.length; n++ ) o = e.push( "text", "", 0 ), o.content = String.fromCharCode( a ), e.delimiters.push( {
      marker: a,
      jump: n,
      token: e.tokens.length - 1,
      level: e.level,
      end: -1,
      open: r.can_open,
      close: r.can_close
    } );
    return e.pos += r.length, !0
  }, e.exports.postProcess = function ( e ) {
    var t, n, r, o, i, a, s = e.delimiters,
      l = e.delimiters.length;
    for ( t = 0; t < l; t++ ) n = s[ t ], 95 !== n.marker && 42 !== n.marker || n.end !== -1 && ( r = s[ n.end ], a = t + 1 < l && s[ t + 1 ].end === n.end - 1 && s[ t + 1 ].token === n.token + 1 && s[ n.end - 1 ].token === r.token - 1 && s[ t + 1 ].marker === n.marker, i = String.fromCharCode( n.marker ), o = e.tokens[ n.token ], o.type = a ? "strong_open" : "em_open", o.tag = a ? "strong" : "em", o.nesting = 1, o.markup = a ? i + i : i, o.content = "", o = e.tokens[ r.token ], o.type = a ? "strong_close" : "em_close", o.tag = a ? "strong" : "em", o.nesting = -1, o.markup = a ? i + i : i, o.content = "", a && ( e.tokens[ s[ t + 1 ].token ].content = "", e.tokens[ s[ n.end - 1 ].token ].content = "", t++ ) )
  }
}, function ( e, t, n ) {
  "use strict";
  var r = n( 140 ),
    o = n( 141 ),
    i = n( 142 ),
    a = n( 125 ).normalizeReference,
    s = n( 125 ).isSpace;
  e.exports = function ( e, t ) {
    var n, l, u, c, f, p, d, h, v, g, m = "",
      y = e.pos,
      b = e.posMax,
      x = e.pos;
    if ( 91 !== e.src.charCodeAt( e.pos ) ) return !1;
    if ( f = e.pos + 1, c = r( e, e.pos, !0 ), c < 0 ) return !1;
    if ( p = c + 1, p < b && 40 === e.src.charCodeAt( p ) ) {
      for ( p++; p < b && ( l = e.src.charCodeAt( p ), s( l ) || 10 === l ); p++ );
      if ( p >= b ) return !1;
      for ( x = p, d = o( e.src, p, e.posMax ), d.ok && ( m = e.md.normalizeLink( d.str ), e.md.validateLink( m ) ? p = d.pos : m = "" ), x = p; p < b && ( l = e.src.charCodeAt( p ), s( l ) || 10 === l ); p++ );
      if ( d = i( e.src, p, e.posMax ), p < b && x !== p && d.ok )
        for ( v = d.str, p = d.pos; p < b && ( l = e.src.charCodeAt( p ), s( l ) || 10 === l ); p++ );
      else v = "";
      if ( p >= b || 41 !== e.src.charCodeAt( p ) ) return e.pos = y, !1;
      p++
    } else {
      if ( "undefined" == typeof e.env.references ) return !1;
      if ( p < b && 91 === e.src.charCodeAt( p ) ? ( x = p + 1, p = r( e, p ), p >= 0 ? u = e.src.slice( x, p++ ) : p = c + 1 ) : p = c + 1, u || ( u = e.src.slice( f, c ) ), h = e.env.references[ a( u ) ], !h ) return e.pos = y, !1;
      m = h.href, v = h.title
    }
    return t || ( e.pos = f, e.posMax = c, g = e.push( "link_open", "a", 1 ), g.attrs = n = [
      [ "href", m ]
    ], v && n.push( [ "title", v ] ), e.md.inline.tokenize( e ), g = e.push( "link_close", "a", -1 ) ), e.pos = p, e.posMax = b, !0
  }
}, function ( e, t, n ) {
  "use strict";
  var r = n( 140 ),
    o = n( 141 ),
    i = n( 142 ),
    a = n( 125 ).normalizeReference,
    s = n( 125 ).isSpace;
  e.exports = function ( e, t ) {
    var n, l, u, c, f, p, d, h, v, g, m, y, b, x = "",
      w = e.pos,
      _ = e.posMax;
    if ( 33 !== e.src.charCodeAt( e.pos ) ) return !1;
    if ( 91 !== e.src.charCodeAt( e.pos + 1 ) ) return !1;
    if ( p = e.pos + 2, f = r( e, e.pos + 1, !1 ), f < 0 ) return !1;
    if ( d = f + 1, d < _ && 40 === e.src.charCodeAt( d ) ) {
      for ( d++; d < _ && ( l = e.src.charCodeAt( d ), s( l ) || 10 === l ); d++ );
      if ( d >= _ ) return !1;
      for ( b = d, v = o( e.src, d, e.posMax ), v.ok && ( x = e.md.normalizeLink( v.str ), e.md.validateLink( x ) ? d = v.pos : x = "" ), b = d; d < _ && ( l = e.src.charCodeAt( d ), s( l ) || 10 === l ); d++ );
      if ( v = i( e.src, d, e.posMax ), d < _ && b !== d && v.ok )
        for ( g = v.str, d = v.pos; d < _ && ( l = e.src.charCodeAt( d ), s( l ) || 10 === l ); d++ );
      else g = "";
      if ( d >= _ || 41 !== e.src.charCodeAt( d ) ) return e.pos = w, !1;
      d++
    } else {
      if ( "undefined" == typeof e.env.references ) return !1;
      if ( d < _ && 91 === e.src.charCodeAt( d ) ? ( b = d + 1, d = r( e, d ), d >= 0 ? c = e.src.slice( b, d++ ) : d = f + 1 ) : d = f + 1, c || ( c = e.src.slice( p, f ) ), h = e.env.references[ a( c ) ], !h ) return e.pos = w, !1;
      x = h.href, g = h.title
    }
    return t || ( u = e.src.slice( p, f ), e.md.inline.parse( u, e.md, e.env, y = [] ), m = e.push( "image", "img", 0 ), m.attrs = n = [
      [ "src", x ],
      [ "alt", "" ]
    ], m.children = y, m.content = u, g && n.push( [ "title", g ] ) ), e.pos = d, e.posMax = _, !0
  }
}, function ( e, t ) {
  "use strict";
  var n = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,
    r = /^<([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)>/;
  e.exports = function ( e, t ) {
    var o, i, a, s, l, u, c = e.pos;
    return 60 === e.src.charCodeAt( c ) && ( o = e.src.slice( c ), !( o.indexOf( ">" ) < 0 ) && ( r.test( o ) ? ( i = o.match( r ), s = i[ 0 ].slice( 1, -1 ), l = e.md.normalizeLink( s ), !!e.md.validateLink( l ) && ( t || ( u = e.push( "link_open", "a", 1 ), u.attrs = [
      [ "href", l ]
    ], u.markup = "autolink", u.info = "auto", u = e.push( "text", "", 0 ), u.content = e.md.normalizeLinkText( s ), u = e.push( "link_close", "a", -1 ), u.markup = "autolink", u.info = "auto" ), e.pos += i[ 0 ].length, !0 ) ) : !!n.test( o ) && ( a = o.match( n ), s = a[ 0 ].slice( 1, -1 ), l = e.md.normalizeLink( "mailto:" + s ), !!e.md.validateLink( l ) && ( t || ( u = e.push( "link_open", "a", 1 ), u.attrs = [
      [ "href", l ]
    ], u.markup = "autolink", u.info = "auto", u = e.push( "text", "", 0 ), u.content = e.md.normalizeLinkText( s ), u = e.push( "link_close", "a", -1 ), u.markup = "autolink", u.info = "auto" ), e.pos += a[ 0 ].length, !0 ) ) ) )
  }
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    var t = 32 | e;
    return t >= 97 && t <= 122
  }
  var o = n( 166 ).HTML_TAG_RE;
  e.exports = function ( e, t ) {
    var n, i, a, s, l = e.pos;
    return !!e.md.options.html && ( a = e.posMax, !( 60 !== e.src.charCodeAt( l ) || l + 2 >= a ) && ( n = e.src.charCodeAt( l + 1 ), !( 33 !== n && 63 !== n && 47 !== n && !r( n ) ) && ( !!( i = e.src.slice( l ).match( o ) ) && ( t || ( s = e.push( "html_inline", "", 0 ), s.content = e.src.slice( l, l + i[ 0 ].length ) ), e.pos += i[ 0 ].length, !0 ) ) ) )
  }
}, function ( e, t, n ) {
  "use strict";
  var r = n( 126 ),
    o = n( 125 ).has,
    i = n( 125 ).isValidEntityCode,
    a = n( 125 ).fromCodePoint,
    s = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i,
    l = /^&([a-z][a-z0-9]{1,31});/i;
  e.exports = function ( e, t ) {
    var n, u, c, f = e.pos,
      p = e.posMax;
    if ( 38 !== e.src.charCodeAt( f ) ) return !1;
    if ( f + 1 < p )
      if ( n = e.src.charCodeAt( f + 1 ), 35 === n ) {
        if ( c = e.src.slice( f ).match( s ) ) return t || ( u = "x" === c[ 1 ][ 0 ].toLowerCase() ? parseInt( c[ 1 ].slice( 1 ), 16 ) : parseInt( c[ 1 ], 10 ), e.pending += a( i( u ) ? u : 65533 ) ), e.pos += c[ 0 ].length, !0
      } else if ( c = e.src.slice( f ).match( l ), c && o( r, c[ 1 ] ) ) return t || ( e.pending += r[ c[ 1 ] ] ), e.pos += c[ 0 ].length, !0;
    return t || ( e.pending += "&" ), e.pos++, !0
  }
}, function ( e, t ) {
  "use strict";
  e.exports = function ( e ) {
    var t, n, r, o, i = e.delimiters,
      a = e.delimiters.length;
    for ( t = 0; t < a; t++ )
      if ( r = i[ t ], r.close )
        for ( n = t - r.jump - 1; n >= 0; ) {
          if ( o = i[ n ], o.open && o.marker === r.marker && o.end < 0 && o.level === r.level ) {
            r.jump = t - n, r.open = !1, o.end = t, o.jump = 0;
            break
          }
          n -= o.jump + 1
        }
  }
}, function ( e, t ) {
  "use strict";
  e.exports = function ( e ) {
    var t, n, r = 0,
      o = e.tokens,
      i = e.tokens.length;
    for ( t = n = 0; t < i; t++ ) r += o[ t ].nesting, o[ t ].level = r, "text" === o[ t ].type && t + 1 < i && "text" === o[ t + 1 ].type ? o[ t + 1 ].content = o[ t ].content + o[ t + 1 ].content : ( t !== n && ( o[ n ] = o[ t ] ), n++ );
    t !== n && ( o.length = n )
  }
}, function ( e, t, n ) {
  "use strict";

  function r( e, t, n, r ) {
    this.src = e, this.env = n, this.md = t, this.tokens = r, this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = []
  }
  var o = n( 153 ),
    i = n( 125 ).isWhiteSpace,
    a = n( 125 ).isPunctChar,
    s = n( 125 ).isMdAsciiPunct;
  r.prototype.pushPending = function () {
    var e = new o( "text", "", 0 );
    return e.content = this.pending, e.level = this.pendingLevel, this.tokens.push( e ), this.pending = "", e
  }, r.prototype.push = function ( e, t, n ) {
    this.pending && this.pushPending();
    var r = new o( e, t, n );
    return n < 0 && this.level--, r.level = this.level, n > 0 && this.level++, this.pendingLevel = this.level, this.tokens.push( r ), r
  }, r.prototype.scanDelims = function ( e, t ) {
    var n, r, o, l, u, c, f, p, d, h = e,
      v = !0,
      g = !0,
      m = this.posMax,
      y = this.src.charCodeAt( e );
    for ( n = e > 0 ? this.src.charCodeAt( e - 1 ) : 32; h < m && this.src.charCodeAt( h ) === y; ) h++;
    return o = h - e, r = h < m ? this.src.charCodeAt( h ) : 32, f = s( n ) || a( String.fromCharCode( n ) ), d = s( r ) || a( String.fromCharCode( r ) ), c = i( n ), p = i( r ), p ? v = !1 : d && ( c || f || ( v = !1 ) ), c ? g = !1 : f && ( p || d || ( g = !1 ) ), t ? ( l = v, u = g ) : ( l = v && ( !g || f ), u = g && ( !v || d ) ), {
      can_open: l,
      can_close: u,
      length: o
    }
  }, r.prototype.Token = o, e.exports = r
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    var t = Array.prototype.slice.call( arguments, 1 );
    return t.forEach( function ( t ) {
      t && Object.keys( t ).forEach( function ( n ) {
        e[ n ] = t[ n ]
      } )
    } ), e
  }

  function o( e ) {
    return Object.prototype.toString.call( e )
  }

  function i( e ) {
    return "[object String]" === o( e )
  }

  function a( e ) {
    return "[object Object]" === o( e )
  }

  function s( e ) {
    return "[object RegExp]" === o( e )
  }

  function l( e ) {
    return "[object Function]" === o( e )
  }

  function u( e ) {
    return e.replace( /[.?*+^$[\]\\(){}|-]/g, "\\$&" )
  }

  function c( e ) {
    return Object.keys( e || {} ).reduce( function ( e, t ) {
      return e || y.hasOwnProperty( t )
    }, !1 )
  }

  function f( e ) {
    e.__index__ = -1, e.__text_cache__ = ""
  }

  function p( e ) {
    return function ( t, n ) {
      var r = t.slice( n );
      return e.test( r ) ? r.match( e )[ 0 ].length : 0
    }
  }

  function d() {
    return function ( e, t ) {
      t.normalize( e )
    }
  }

  function h( e ) {
    function t( e ) {
      return e.replace( "%TLDS%", o.src_tlds )
    }

    function r( e, t ) {
      throw new Error( '(LinkifyIt) Invalid schema "' + e + '": ' + t )
    }
    var o = e.re = n( 185 )( e.__opts__ ),
      c = e.__tlds__.slice();
    e.onCompile(), e.__tlds_replaced__ || c.push( x ), c.push( o.src_xn ), o.src_tlds = c.join( "|" ), o.email_fuzzy = RegExp( t( o.tpl_email_fuzzy ), "i" ), o.link_fuzzy = RegExp( t( o.tpl_link_fuzzy ), "i" ), o.link_no_ip_fuzzy = RegExp( t( o.tpl_link_no_ip_fuzzy ), "i" ), o.host_fuzzy_test = RegExp( t( o.tpl_host_fuzzy_test ), "i" );
    var h = [];
    e.__compiled__ = {}, Object.keys( e.__schemas__ ).forEach( function ( t ) {
      var n = e.__schemas__[ t ];
      if ( null !== n ) {
        var o = {
          validate: null,
          link: null
        };
        return e.__compiled__[ t ] = o, a( n ) ? ( s( n.validate ) ? o.validate = p( n.validate ) : l( n.validate ) ? o.validate = n.validate : r( t, n ), void( l( n.normalize ) ? o.normalize = n.normalize : n.normalize ? r( t, n ) : o.normalize = d() ) ) : i( n ) ? void h.push( t ) : void r( t, n )
      }
    } ), h.forEach( function ( t ) {
      e.__compiled__[ e.__schemas__[ t ] ] && ( e.__compiled__[ t ].validate = e.__compiled__[ e.__schemas__[ t ] ].validate, e.__compiled__[ t ].normalize = e.__compiled__[ e.__schemas__[ t ] ].normalize )
    } ), e.__compiled__[ "" ] = {
      validate: null,
      normalize: d()
    };
    var v = Object.keys( e.__compiled__ ).filter( function ( t ) {
      return t.length > 0 && e.__compiled__[ t ]
    } ).map( u ).join( "|" );
    e.re.schema_test = RegExp( "(^|(?!_)(?:[><｜]|" + o.src_ZPCc + "))(" + v + ")", "i" ), e.re.schema_search = RegExp( "(^|(?!_)(?:[><｜]|" + o.src_ZPCc + "))(" + v + ")", "ig" ), e.re.pretest = RegExp( "(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@", "i" ), f( e )
  }

  function v( e, t ) {
    var n = e.__index__,
      r = e.__last_index__,
      o = e.__text_cache__.slice( n, r );
    this.schema = e.__schema__.toLowerCase(), this.index = n + t, this.lastIndex = r + t, this.raw = o, this.text = o, this.url = o
  }

  function g( e, t ) {
    var n = new v( e, t );
    return e.__compiled__[ n.schema ].normalize( n, e ), n
  }

  function m( e, t ) {
    return this instanceof m ? ( t || c( e ) && ( t = e, e = {} ), this.__opts__ = r( {}, y, t ), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = r( {}, b, e ), this.__compiled__ = {}, this.__tlds__ = w, this.__tlds_replaced__ = !1, this.re = {}, void h( this ) ) : new m( e, t )
  }
  var y = {
      fuzzyLink: !0,
      fuzzyEmail: !0,
      fuzzyIP: !1
    },
    b = {
      "http:": {
        validate: function ( e, t, n ) {
          var r = e.slice( t );
          return n.re.http || ( n.re.http = new RegExp( "^\\/\\/" + n.re.src_auth + n.re.src_host_port_strict + n.re.src_path, "i" ) ), n.re.http.test( r ) ? r.match( n.re.http )[ 0 ].length : 0
        }
      },
      "https:": "http:",
      "ftp:": "http:",
      "//": {
        validate: function ( e, t, n ) {
          var r = e.slice( t );
          return n.re.no_http || ( n.re.no_http = new RegExp( "^" + n.re.src_auth + "(?:localhost|(?:(?:" + n.re.src_domain + ")\\.)+" + n.re.src_domain_root + ")" + n.re.src_port + n.re.src_host_terminator + n.re.src_path, "i" ) ), n.re.no_http.test( r ) ? t >= 3 && ":" === e[ t - 3 ] ? 0 : t >= 3 && "/" === e[ t - 3 ] ? 0 : r.match( n.re.no_http )[ 0 ].length : 0
        }
      },
      "mailto:": {
        validate: function ( e, t, n ) {
          var r = e.slice( t );
          return n.re.mailto || ( n.re.mailto = new RegExp( "^" + n.re.src_email_name + "@" + n.re.src_host_strict, "i" ) ), n.re.mailto.test( r ) ? r.match( n.re.mailto )[ 0 ].length : 0
        }
      }
    },
    x = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
    w = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split( "|" );
  m.prototype.add = function ( e, t ) {
    return this.__schemas__[ e ] = t, h( this ), this
  }, m.prototype.set = function ( e ) {
    return this.__opts__ = r( this.__opts__, e ), this
  }, m.prototype.test = function ( e ) {
    if ( this.__text_cache__ = e, this.__index__ = -1, !e.length ) return !1;
    var t, n, r, o, i, a, s, l, u;
    if ( this.re.schema_test.test( e ) )
      for ( s = this.re.schema_search, s.lastIndex = 0; null !== ( t = s.exec( e ) ); )
        if ( o = this.testSchemaAt( e, t[ 2 ], s.lastIndex ) ) {
          this.__schema__ = t[ 2 ], this.__index__ = t.index + t[ 1 ].length, this.__last_index__ = t.index + t[ 0 ].length + o;
          break
        } return this.__opts__.fuzzyLink && this.__compiled__[ "http:" ] && ( l = e.search( this.re.host_fuzzy_test ), l >= 0 && ( this.__index__ < 0 || l < this.__index__ ) && null !== ( n = e.match( this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy ) ) && ( i = n.index + n[ 1 ].length, ( this.__index__ < 0 || i < this.__index__ ) && ( this.__schema__ = "", this.__index__ = i, this.__last_index__ = n.index + n[ 0 ].length ) ) ), this.__opts__.fuzzyEmail && this.__compiled__[ "mailto:" ] && ( u = e.indexOf( "@" ), u >= 0 && null !== ( r = e.match( this.re.email_fuzzy ) ) && ( i = r.index + r[ 1 ].length, a = r.index + r[ 0 ].length, ( this.__index__ < 0 || i < this.__index__ || i === this.__index__ && a > this.__last_index__ ) && ( this.__schema__ = "mailto:", this.__index__ = i, this.__last_index__ = a ) ) ), this.__index__ >= 0
  }, m.prototype.pretest = function ( e ) {
    return this.re.pretest.test( e )
  }, m.prototype.testSchemaAt = function ( e, t, n ) {
    return this.__compiled__[ t.toLowerCase() ] ? this.__compiled__[ t.toLowerCase() ].validate( e, n, this ) : 0
  }, m.prototype.match = function ( e ) {
    var t = 0,
      n = [];
    this.__index__ >= 0 && this.__text_cache__ === e && ( n.push( g( this, t ) ), t = this.__last_index__ );
    for ( var r = t ? e.slice( t ) : e; this.test( r ); ) n.push( g( this, t ) ), r = r.slice( this.__last_index__ ), t += this.__last_index__;
    return n.length ? n : null
  }, m.prototype.tlds = function ( e, t ) {
    return e = Array.isArray( e ) ? e : [ e ], t ? ( this.__tlds__ = this.__tlds__.concat( e ).sort().filter( function ( e, t, n ) {
      return e !== n[ t - 1 ]
    } ).reverse(), h( this ), this ) : ( this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, h( this ), this )
  }, m.prototype.normalize = function ( e ) {
    e.schema || ( e.url = "http://" + e.url ), "mailto:" !== e.schema || /^mailto:/i.test( e.url ) || ( e.url = "mailto:" + e.url )
  }, m.prototype.onCompile = function () {}, e.exports = m
}, function ( e, t, n ) {
  "use strict";
  e.exports = function ( e ) {
    var t = {};
    t.src_Any = n( 135 ).source, t.src_Cc = n( 136 ).source, t.src_Z = n( 138 ).source, t.src_P = n( 128 ).source, t.src_ZPCc = [ t.src_Z, t.src_P, t.src_Cc ].join( "|" ), t.src_ZCc = [ t.src_Z, t.src_Cc ].join( "|" );
    var r = "[><｜]";
    return t.src_pseudo_letter = "(?:(?!" + r + "|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|" + r + "|" + t.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|" + r + "|[()[\\]{}.,\"'?!\\-]).|\\[(?:(?!" + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + '|["]).)+\\"|\\\'(?:(?!' + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-]).|\\.{2,3}[a-zA-Z0-9%/]|\\.(?!" + t.src_ZCc + "|[.]).|" + ( e && e[ "---" ] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|" ) + "\\,(?!" + t.src_ZCc + ").|\\!(?!" + t.src_ZCc + "|[!]).|\\?(?!" + t.src_ZCc + "|[?]).)+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-(?!-)|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|" + r + "|\\(|" + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t
  }
}, function ( e, t, n ) {
  var r;
  ( function ( e, o ) {
    ! function ( i ) {
      function a( e ) {
        throw new RangeError( P[ e ] )
      }

      function s( e, t ) {
        for ( var n = e.length, r = []; n--; ) r[ n ] = t( e[ n ] );
        return r
      }

      function l( e, t ) {
        var n = e.split( "@" ),
          r = "";
        n.length > 1 && ( r = n[ 0 ] + "@", e = n[ 1 ] ), e = e.replace( N, "." );
        var o = e.split( "." ),
          i = s( o, t ).join( "." );
        return r + i
      }

      function u( e ) {
        for ( var t, n, r = [], o = 0, i = e.length; o < i; ) t = e.charCodeAt( o++ ), t >= 55296 && t <= 56319 && o < i ? ( n = e.charCodeAt( o++ ), 56320 == ( 64512 & n ) ? r.push( ( ( 1023 & t ) << 10 ) + ( 1023 & n ) + 65536 ) : ( r.push( t ), o-- ) ) : r.push( t );
        return r
      }

      function c( e ) {
        return s( e, function ( e ) {
          var t = "";
          return e > 65535 && ( e -= 65536, t += I( e >>> 10 & 1023 | 55296 ), e = 56320 | 1023 & e ), t += I( e )
        } ).join( "" )
      }

      function f( e ) {
        return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : w
      }

      function p( e, t ) {
        return e + 22 + 75 * ( e < 26 ) - ( ( 0 != t ) << 5 )
      }

      function d( e, t, n ) {
        var r = 0;
        for ( e = n ? L( e / E ) : e >> 1, e += L( e / t ); e > D * C >> 1; r += w ) e = L( e / D );
        return L( r + ( D + 1 ) * e / ( e + k ) )
      }

      function h( e ) {
        var t, n, r, o, i, s, l, u, p, h, v = [],
          g = e.length,
          m = 0,
          y = T,
          b = S;
        for ( n = e.lastIndexOf( A ), n < 0 && ( n = 0 ), r = 0; r < n; ++r ) e.charCodeAt( r ) >= 128 && a( "not-basic" ), v.push( e.charCodeAt( r ) );
        for ( o = n > 0 ? n + 1 : 0; o < g; ) {
          for ( i = m, s = 1, l = w; o >= g && a( "invalid-input" ), u = f( e.charCodeAt( o++ ) ), ( u >= w || u > L( ( x - m ) / s ) ) && a( "overflow" ), m += u * s, p = l <= b ? _ : l >= b + C ? C : l - b, !( u < p ); l += w ) h = w - p, s > L( x / h ) && a( "overflow" ), s *= h;
          t = v.length + 1, b = d( m - i, t, 0 == i ), L( m / t ) > x - y && a( "overflow" ), y += L( m / t ), m %= t, v.splice( m++, 0, y )
        }
        return c( v )
      }

      function v( e ) {
        var t, n, r, o, i, s, l, c, f, h, v, g, m, y, b, k = [];
        for ( e = u( e ), g = e.length, t = T, n = 0, i = S, s = 0; s < g; ++s ) v = e[ s ], v < 128 && k.push( I( v ) );
        for ( r = o = k.length, o && k.push( A ); r < g; ) {
          for ( l = x, s = 0; s < g; ++s ) v = e[ s ], v >= t && v < l && ( l = v );
          for ( m = r + 1, l - t > L( ( x - n ) / m ) && a( "overflow" ), n += ( l - t ) * m, t = l, s = 0; s < g; ++s )
            if ( v = e[ s ], v < t && ++n > x && a( "overflow" ), v == t ) {
              for ( c = n, f = w; h = f <= i ? _ : f >= i + C ? C : f - i, !( c < h ); f += w ) b = c - h, y = w - h, k.push( I( p( h + b % y, 0 ) ) ), c = L( b / y );
              k.push( I( p( c, 0 ) ) ), i = d( n, m, r == o ), n = 0, ++r
            }++ n, ++t
        }
        return k.join( "" )
      }

      function g( e ) {
        return l( e, function ( e ) {
          return M.test( e ) ? h( e.slice( 4 ).toLowerCase() ) : e
        } )
      }

      function m( e ) {
        return l( e, function ( e ) {
          return O.test( e ) ? "xn--" + v( e ) : e
        } )
      }
      var y = ( "object" == typeof t && t && !t.nodeType && t, "object" == typeof e && e && !e.nodeType && e, "object" == typeof o && o );
      y.global !== y && y.window !== y && y.self !== y || ( i = y );
      var b, x = 2147483647,
        w = 36,
        _ = 1,
        C = 26,
        k = 38,
        E = 700,
        S = 72,
        T = 128,
        A = "-",
        M = /^xn--/,
        O = /[^\x20-\x7E]/,
        N = /[\x2E\u3002\uFF0E\uFF61]/g,
        P = {
          overflow: "Overflow: input needs wider integers to process",
          "not-basic": "Illegal input >= 0x80 (not a basic code point)",
          "invalid-input": "Invalid input"
        },
        D = w - _,
        L = Math.floor,
        I = String.fromCharCode;
      b = {
        version: "1.4.1",
        ucs2: {
          decode: u,
          encode: c
        },
        decode: h,
        encode: v,
        toASCII: m,
        toUnicode: g
      }, r = function () {
        return b
      }.call( t, n, t, e ), !( void 0 !== r && ( e.exports = r ) )
    }( this )
  } ).call( t, n( 187 )( e ), function () {
    return this
  }() )
}, function ( e, t ) {
  e.exports = function ( e ) {
    return e.webpackPolyfill || ( e.deprecate = function () {}, e.paths = [], e.children = [], e.webpackPolyfill = 1 ), e
  }
}, function ( e, t ) {
  "use strict";
  e.exports = {
    options: {
      html: !1,
      xhtmlOut: !1,
      breaks: !1,
      langPrefix: "language-",
      linkify: !1,
      typographer: !1,
      quotes: "“”‘’",
      highlight: null,
      maxNesting: 100
    },
    components: {
      core: {},
      block: {},
      inline: {}
    }
  }
}, function ( e, t ) {
  "use strict";
  e.exports = {
    options: {
      html: !1,
      xhtmlOut: !1,
      breaks: !1,
      langPrefix: "language-",
      linkify: !1,
      typographer: !1,
      quotes: "“”‘’",
      highlight: null,
      maxNesting: 20
    },
    components: {
      core: {
        rules: [ "normalize", "block", "inline" ]
      },
      block: {
        rules: [ "paragraph" ]
      },
      inline: {
        rules: [ "text" ],
        rules2: [ "balance_pairs", "text_collapse" ]
      }
    }
  }
}, function ( e, t ) {
  "use strict";
  e.exports = {
    options: {
      html: !0,
      xhtmlOut: !0,
      breaks: !1,
      langPrefix: "language-",
      linkify: !1,
      typographer: !1,
      quotes: "“”‘’",
      highlight: null,
      maxNesting: 20
    },
    components: {
      core: {
        rules: [ "normalize", "block", "inline" ]
      },
      block: {
        rules: [ "blockquote", "code", "fence", "heading", "hr", "html_block", "lheading", "list", "reference", "paragraph" ]
      },
      inline: {
        rules: [ "autolink", "backticks", "emphasis", "entity", "escape", "html_inline", "image", "link", "newline", "text" ],
        rules2: [ "balance_pairs", "emphasis", "text_collapse" ]
      }
    }
  }
}, function ( e, t, n ) {
  ! function ( e ) {
    "object" == typeof window && window || "object" == typeof self && self;
    e( t )
  }( function ( e ) {
    function t( e ) {
      return e.replace( /[&<>]/gm, function ( e ) {
        return O[ e ]
      } )
    }

    function n( e ) {
      return e.nodeName.toLowerCase()
    }

    function r( e, t ) {
      var n = e && e.exec( t );
      return n && 0 === n.index
    }

    function o( e ) {
      return E.test( e )
    }

    function i( e ) {
      var t, n, r, i, a = e.className + " ";
      if ( a += e.parentNode ? e.parentNode.className : "", n = S.exec( a ) ) return x( n[ 1 ] ) ? n[ 1 ] : "no-highlight";
      for ( a = a.split( /\s+/ ), t = 0, r = a.length; t < r; t++ )
        if ( i = a[ t ], o( i ) || x( i ) ) return i
    }

    function a( e, t ) {
      var n, r = {};
      for ( n in e ) r[ n ] = e[ n ];
      if ( t )
        for ( n in t ) r[ n ] = t[ n ];
      return r
    }

    function s( e ) {
      var t = [];
      return function e( r, o ) {
        for ( var i = r.firstChild; i; i = i.nextSibling ) 3 === i.nodeType ? o += i.nodeValue.length : 1 === i.nodeType && ( t.push( {
          event: "start",
          offset: o,
          node: i
        } ), o = e( i, o ), n( i ).match( /br|hr|img|input/ ) || t.push( {
          event: "stop",
          offset: o,
          node: i
        } ) );
        return o
      }( e, 0 ), t
    }

    function l( e, r, o ) {
      function i() {
        return e.length && r.length ? e[ 0 ].offset !== r[ 0 ].offset ? e[ 0 ].offset < r[ 0 ].offset ? e : r : "start" === r[ 0 ].event ? e : r : e.length ? e : r
      }

      function a( e ) {
        function r( e ) {
          return " " + e.nodeName + '="' + t( e.value ) + '"'
        }
        c += "<" + n( e ) + w.map.call( e.attributes, r ).join( "" ) + ">"
      }

      function s( e ) {
        c += "</" + n( e ) + ">"
      }

      function l( e ) {
        ( "start" === e.event ? a : s )( e.node )
      }
      for ( var u = 0, c = "", f = []; e.length || r.length; ) {
        var p = i();
        if ( c += t( o.substring( u, p[ 0 ].offset ) ), u = p[ 0 ].offset, p === e ) {
          f.reverse().forEach( s );
          do l( p.splice( 0, 1 )[ 0 ] ), p = i(); while ( p === e && p.length && p[ 0 ].offset === u );
          f.reverse().forEach( a )
        } else "start" === p[ 0 ].event ? f.push( p[ 0 ].node ) : f.pop(), l( p.splice( 0, 1 )[ 0 ] )
      }
      return c + t( o.substr( u ) )
    }

    function u( e ) {
      function t( e ) {
        return e && e.source || e
      }

      function n( n, r ) {
        return new RegExp( t( n ), "m" + ( e.case_insensitive ? "i" : "" ) + ( r ? "g" : "" ) )
      }

      function r( o, i ) {
        if ( !o.compiled ) {
          if ( o.compiled = !0, o.keywords = o.keywords || o.beginKeywords, o.keywords ) {
            var s = {},
              l = function ( t, n ) {
                e.case_insensitive && ( n = n.toLowerCase() ), n.split( " " ).forEach( function ( e ) {
                  var n = e.split( "|" );
                  s[ n[ 0 ] ] = [ t, n[ 1 ] ? Number( n[ 1 ] ) : 1 ]
                } )
              };
            "string" == typeof o.keywords ? l( "keyword", o.keywords ) : _( o.keywords ).forEach( function ( e ) {
              l( e, o.keywords[ e ] )
            } ), o.keywords = s
          }
          o.lexemesRe = n( o.lexemes || /\w+/, !0 ), i && ( o.beginKeywords && ( o.begin = "\\b(" + o.beginKeywords.split( " " ).join( "|" ) + ")\\b" ), o.begin || ( o.begin = /\B|\b/ ), o.beginRe = n( o.begin ), o.end || o.endsWithParent || ( o.end = /\B|\b/ ), o.end && ( o.endRe = n( o.end ) ), o.terminator_end = t( o.end ) || "", o.endsWithParent && i.terminator_end && ( o.terminator_end += ( o.end ? "|" : "" ) + i.terminator_end ) ), o.illegal && ( o.illegalRe = n( o.illegal ) ), null == o.relevance && ( o.relevance = 1 ), o.contains || ( o.contains = [] );
          var u = [];
          o.contains.forEach( function ( e ) {
            e.variants ? e.variants.forEach( function ( t ) {
              u.push( a( e, t ) )
            } ) : u.push( "self" === e ? o : e )
          } ), o.contains = u, o.contains.forEach( function ( e ) {
            r( e, o )
          } ), o.starts && r( o.starts, i );
          var c = o.contains.map( function ( e ) {
            return e.beginKeywords ? "\\.?(" + e.begin + ")\\.?" : e.begin
          } ).concat( [ o.terminator_end, o.illegal ] ).map( t ).filter( Boolean );
          o.terminators = c.length ? n( c.join( "|" ), !0 ) : {
            exec: function () {
              return null
            }
          }
        }
      }
      r( e )
    }

    function c( e, n, o, i ) {
      function a( e, t ) {
        var n, o;
        for ( n = 0, o = t.contains.length; n < o; n++ )
          if ( r( t.contains[ n ].beginRe, e ) ) return t.contains[ n ]
      }

      function s( e, t ) {
        if ( r( e.endRe, t ) ) {
          for ( ; e.endsParent && e.parent; ) e = e.parent;
          return e
        }
        if ( e.endsWithParent ) return s( e.parent, t )
      }

      function l( e, t ) {
        return !o && r( t.illegalRe, e )
      }

      function p( e, t ) {
        var n = b.case_insensitive ? t[ 0 ].toLowerCase() : t[ 0 ];
        return e.keywords.hasOwnProperty( n ) && e.keywords[ n ]
      }

      function d( e, t, n, r ) {
        var o = r ? "" : M.classPrefix,
          i = '<span class="' + o,
          a = n ? "" : A;
        return i += e + '">', i + t + a
      }

      function h() {
        var e, n, r, o;
        if ( !_.keywords ) return t( S );
        for ( o = "", n = 0, _.lexemesRe.lastIndex = 0, r = _.lexemesRe.exec( S ); r; ) o += t( S.substring( n, r.index ) ), e = p( _, r ), e ? ( T += e[ 1 ], o += d( e[ 0 ], t( r[ 0 ] ) ) ) : o += t( r[ 0 ] ), n = _.lexemesRe.lastIndex, r = _.lexemesRe.exec( S );
        return o + t( S.substr( n ) )
      }

      function v() {
        var e = "string" == typeof _.subLanguage;
        if ( e && !C[ _.subLanguage ] ) return t( S );
        var n = e ? c( _.subLanguage, S, !0, k[ _.subLanguage ] ) : f( S, _.subLanguage.length ? _.subLanguage : void 0 );
        return _.relevance > 0 && ( T += n.relevance ), e && ( k[ _.subLanguage ] = n.top ), d( n.language, n.value, !1, !0 )
      }

      function g() {
        E += null != _.subLanguage ? v() : h(), S = ""
      }

      function m( e ) {
        E += e.className ? d( e.className, "", !0 ) : "", _ = Object.create( e, {
          parent: {
            value: _
          }
        } )
      }

      function y( e, t ) {
        if ( S += e, null == t ) return g(), 0;
        var n = a( t, _ );
        if ( n ) return n.skip ? S += t : ( n.excludeBegin && ( S += t ), g(), n.returnBegin || n.excludeBegin || ( S = t ) ), m( n, t ), n.returnBegin ? 0 : t.length;
        var r = s( _, t );
        if ( r ) {
          var o = _;
          o.skip ? S += t : ( o.returnEnd || o.excludeEnd || ( S += t ), g(), o.excludeEnd && ( S = t ) );
          do _.className && ( E += A ), _.skip || ( T += _.relevance ), _ = _.parent; while ( _ !== r.parent );
          return r.starts && m( r.starts, "" ), o.returnEnd ? 0 : t.length
        }
        if ( l( t, _ ) ) throw new Error( 'Illegal lexeme "' + t + '" for mode "' + ( _.className || "<unnamed>" ) + '"' );
        return S += t, t.length || 1
      }
      var b = x( e );
      if ( !b ) throw new Error( 'Unknown language: "' + e + '"' );
      u( b );
      var w, _ = i || b,
        k = {},
        E = "";
      for ( w = _; w !== b; w = w.parent ) w.className && ( E = d( w.className, "", !0 ) + E );
      var S = "",
        T = 0;
      try {
        for ( var O, N, P = 0;; ) {
          if ( _.terminators.lastIndex = P, O = _.terminators.exec( n ), !O ) break;
          N = y( n.substring( P, O.index ), O[ 0 ] ), P = O.index + N
        }
        for ( y( n.substr( P ) ), w = _; w.parent; w = w.parent ) w.className && ( E += A );
        return {
          relevance: T,
          value: E,
          language: e,
          top: _
        }
      } catch ( e ) {
        if ( e.message && e.message.indexOf( "Illegal" ) !== -1 ) return {
          relevance: 0,
          value: t( n )
        };
        throw e
      }
    }

    function f( e, n ) {
      n = n || M.languages || _( C );
      var r = {
          relevance: 0,
          value: t( e )
        },
        o = r;
      return n.filter( x ).forEach( function ( t ) {
        var n = c( t, e, !1 );
        n.language = t, n.relevance > o.relevance && ( o = n ), n.relevance > r.relevance && ( o = r, r = n )
      } ), o.language && ( r.second_best = o ), r
    }

    function p( e ) {
      return M.tabReplace || M.useBR ? e.replace( T, function ( e, t ) {
        return M.useBR && "\n" === e ? "<br>" : M.tabReplace ? t.replace( /\t/g, M.tabReplace ) : void 0
      } ) : e
    }

    function d( e, t, n ) {
      var r = t ? k[ t ] : n,
        o = [ e.trim() ];
      return e.match( /\bhljs\b/ ) || o.push( "hljs" ), e.indexOf( r ) === -1 && o.push( r ), o.join( " " ).trim()
    }

    function h( e ) {
      var t, n, r, a, u, h = i( e );
      o( h ) || ( M.useBR ? ( t = document.createElementNS( "http://www.w3.org/1999/xhtml", "div" ), t.innerHTML = e.innerHTML.replace( /\n/g, "" ).replace( /<br[ \/]*>/g, "\n" ) ) : t = e, u = t.textContent, r = h ? c( h, u, !0 ) : f( u ), n = s( t ), n.length && ( a = document.createElementNS( "http://www.w3.org/1999/xhtml", "div" ), a.innerHTML = r.value, r.value = l( n, s( a ), u ) ), r.value = p( r.value ), e.innerHTML = r.value, e.className = d( e.className, h, r.language ), e.result = {
        language: r.language,
        re: r.relevance
      }, r.second_best && ( e.second_best = {
        language: r.second_best.language,
        re: r.second_best.relevance
      } ) )
    }

    function v( e ) {
      M = a( M, e )
    }

    function g() {
      if ( !g.called ) {
        g.called = !0;
        var e = document.querySelectorAll( "pre code" );
        w.forEach.call( e, h )
      }
    }

    function m() {
      addEventListener( "DOMContentLoaded", g, !1 ), addEventListener( "load", g, !1 )
    }

    function y( t, n ) {
      var r = C[ t ] = n( e );
      r.aliases && r.aliases.forEach( function ( e ) {
        k[ e ] = t
      } )
    }

    function b() {
      return _( C )
    }

    function x( e ) {
      return e = ( e || "" ).toLowerCase(), C[ e ] || C[ k[ e ] ]
    }
    var w = [],
      _ = Object.keys,
      C = {},
      k = {},
      E = /^(no-?highlight|plain|text)$/i,
      S = /\blang(?:uage)?-([\w-]+)\b/i,
      T = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
      A = "</span>",
      M = {
        classPrefix: "hljs-",
        tabReplace: null,
        useBR: !1,
        languages: void 0
      },
      O = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;"
      };
    return e.highlight = c, e.highlightAuto = f, e.fixMarkup = p, e.highlightBlock = h, e.configure = v, e.initHighlighting = g, e.initHighlightingOnLoad = m, e.registerLanguage = y, e.listLanguages = b, e.getLanguage = x, e.inherit = a, e.IDENT_RE = "[a-zA-Z]\\w*", e.UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*", e.NUMBER_RE = "\\b\\d+(\\.\\d+)?", e.C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", e.BINARY_NUMBER_RE = "\\b(0b[01]+)", e.RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", e.BACKSLASH_ESCAPE = {
      begin: "\\\\[\\s\\S]",
      relevance: 0
    }, e.APOS_STRING_MODE = {
      className: "string",
      begin: "'",
      end: "'",
      illegal: "\\n",
      contains: [ e.BACKSLASH_ESCAPE ]
    }, e.QUOTE_STRING_MODE = {
      className: "string",
      begin: '"',
      end: '"',
      illegal: "\\n",
      contains: [ e.BACKSLASH_ESCAPE ]
    }, e.PHRASAL_WORDS_MODE = {
      begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/
    }, e.COMMENT = function ( t, n, r ) {
      var o = e.inherit( {
        className: "comment",
        begin: t,
        end: n,
        contains: []
      }, r || {} );
      return o.contains.push( e.PHRASAL_WORDS_MODE ), o.contains.push( {
        className: "doctag",
        begin: "(?:TODO|FIXME|NOTE|BUG|XXX):",
        relevance: 0
      } ), o
    }, e.C_LINE_COMMENT_MODE = e.COMMENT( "//", "$" ), e.C_BLOCK_COMMENT_MODE = e.COMMENT( "/\\*", "\\*/" ), e.HASH_COMMENT_MODE = e.COMMENT( "#", "$" ), e.NUMBER_MODE = {
      className: "number",
      begin: e.NUMBER_RE,
      relevance: 0
    }, e.C_NUMBER_MODE = {
      className: "number",
      begin: e.C_NUMBER_RE,
      relevance: 0
    }, e.BINARY_NUMBER_MODE = {
      className: "number",
      begin: e.BINARY_NUMBER_RE,
      relevance: 0
    }, e.CSS_NUMBER_MODE = {
      className: "number",
      begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
      relevance: 0
    }, e.REGEXP_MODE = {
      className: "regexp",
      begin: /\//,
      end: /\/[gimuy]*/,
      illegal: /\n/,
      contains: [ e.BACKSLASH_ESCAPE, {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [ e.BACKSLASH_ESCAPE ]
      } ]
    }, e.TITLE_MODE = {
      className: "title",
      begin: e.IDENT_RE,
      relevance: 0
    }, e.UNDERSCORE_TITLE_MODE = {
      className: "title",
      begin: e.UNDERSCORE_IDENT_RE,
      relevance: 0
    }, e.METHOD_GUARD = {
      begin: "\\.\\s*" + e.UNDERSCORE_IDENT_RE,
      relevance: 0
    }, e
  } )
}, function ( e, t ) {
  "use strict";

  function n( e ) {
    e.core.ruler.after( "inline", "link-slide-title", function ( e ) {
      e.tokens.forEach( function ( t ) {
        if ( "inline" === t.type && t.children )
          for ( var n = t.children, o = 0; o < n.length; o++ ) {
            var i = n[ o ];
            if ( "link_open" === i.type ) {
              var a = t.children[ o + 1 ];
              if ( "link_close" === a.type ) {
                var s = i.attrGet( "href" ),
                  l = r( e.env.slides, s );
                if ( l ) {
                  var u = l.options.title || l.options.toc,
                    c = new e.Token( "text", "", 0 );
                  c.content = u, n.splice( o + 1, 0, c )
                }
              }
            }
          }
      } )
    } )
  }

  function r( e, t ) {
    if ( 0 !== t.indexOf( "#/" ) ) return !1;
    var n = t.substr( 2 );
    if ( !isNaN( n ) && n >= 0 && n < e.length ) return e[ n ];
    for ( var r = 0; r < e.length; r++ )
      if ( e[ r ].options.id === n ) return e[ r ];
    return !1
  }
  Object.defineProperty( t, "__esModule", {
    value: !0
  } ), t.default = n
}, function ( e, t ) {
  "use strict";

  function n( e ) {
    var t = e.renderer.rules.link_open || function ( e, t, n, r, o ) {
      return o.renderToken( e, t, n )
    };
    e.renderer.rules.link_open = function ( e, n, r, o, i ) {
      var a = e[ n ],
        s = a.attrGet( "href" );
      return "#" !== s.charAt( 0 ) && a.attrSet( "target", "_blank" ), t( e, n, r, o, i )
    }
  }
  Object.defineProperty( t, "__esModule", {
    value: !0
  } ), t.default = n
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function o( e ) {
    var t = e.title,
      n = e.layoutData,
      r = e.content,
      o = n.image,
      i = {},
      s = a.default.createElement( l.default, {
        value: r
      } );
    return o = ( 0, u.normalizeImageData )( o ), o && ( r || t ) ? i.background = 'no-repeat center url("' + o.src + '")' : o && ( s = a.default.createElement( "img", {
      src: o.src,
      alt: o.alt || ""
    } ) ), a.default.createElement( "div", {
      className: "Center-wrapper",
      style: i
    }, t, s )
  }
  Object.defineProperty( t, "__esModule", {
    value: !0
  } ), t.default = o;
  var i = n( 96 ),
    a = r( i ),
    s = n( 195 ),
    l = r( s ),
    u = n( 196 );
  n( 385 )
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function o( e, t ) {
    var n = e.value;
    return t.slide.contentConverter( n, t )
  }
  Object.defineProperty( t, "__esModule", {
    value: !0
  } ), t.default = o;
  var i = n( 96 ),
    a = r( i );
  o.propTypes = {
    value: a.default.PropTypes.string
  }, o.contextTypes = {
    slide: a.default.PropTypes.object.isRequired,
    slideIndex: a.default.PropTypes.number.isRequired,
    slides: a.default.PropTypes.arrayOf( a.default.PropTypes.object ),
    config: a.default.PropTypes.object.isRequired
  }
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty( t, "__esModule", {
    value: !0
  } ), t.subscribeAll = t.subscribe = t.setSlideCacheData = t.registerExtension = t.use = t.present = t.normalizeImageData = t.groupByChapter = t.getSlideCacheData = t.forward = t.back = t.IS_MOBILE = void 0;
  var o = n( 197 ),
    i = r( o ),
    a = n( 379 ),
    s = n( 380 ),
    l = n( 381 ),
    u = n( 226 ),
    c = n( 382 ),
    f = n( 383 ),
    p = n( 384 ),
    d = n( 227 );
  t.IS_MOBILE = a.IS_MOBILE, t.back = u.back, t.forward = u.forward, t.getSlideCacheData = s.getSlideCacheData, t.groupByChapter = l.groupByChapter, t.normalizeImageData = c.normalizeImageData, t.present = i.default, t.use = f.register, t.registerExtension = p.registerExtension, t.setSlideCacheData = s.setSlideCacheData, t.subscribe = d.subscribe, t.subscribeAll = d.subscribeAll
}, function ( e, t, n ) {
  ( function ( e ) {
    "use strict";

    function r( e ) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function o( t ) {
      i( t ), ( 0, g.publish )( "CONFIG.SET", t );
      var n = e.document.getElementById( "exerslide-loader" );
      n && n.parentNode.removeChild( n ), d.default.render( f.default.createElement( v.default, {
        slides: t.slides
      }, f.default.createElement( u.default, {
        masterLayout: t.masterLayout,
        slideLayout: t.slideLayout,
        config: t
      } ) ), e.document.body.appendChild( e.document.createElement( "div" ) ) )
    }

    function i( e ) {
      ( 0, s.default )( m ).forEach( function ( t ) {
        if ( !( t in e ) ) throw new Error( m[ t ] )
      } )
    }
    Object.defineProperty( t, "__esModule", {
      value: !0
    } );
    var a = n( 198 ),
      s = r( a );
    t.default = o;
    var l = n( 202 ),
      u = r( l ),
      c = n( 96 ),
      f = r( c ),
      p = n( 232 ),
      d = r( p ),
      h = n( 370 ),
      v = r( h ),
      g = n( 227 ),
      m = {
        slides: "You have to pass an array of slides.",
        masterLayout: "You have to pass a master layout.",
        slideLayout: "You have to pass a slide layout"
      }
  } ).call( t, function () {
    return this
  }() )
}, function ( e, t, n ) {
  e.exports = {
    default: n( 199 ),
    __esModule: !0
  }
}, function ( e, t, n ) {
  n( 200 ), e.exports = n( 10 ).Object.keys
}, function ( e, t, n ) {
  var r = n( 41 ),
    o = n( 24 );
  n( 201 )( "keys", function () {
    return function ( e ) {
      return o( r( e ) )
    }
  } )
}, function ( e, t, n ) {
  var r = n( 8 ),
    o = n( 10 ),
    i = n( 19 );
  e.exports = function ( e, t ) {
    var n = ( o.Object || {} )[ e ] || Object[ e ],
      a = {};
    a[ e ] = t( n ), r( r.S + r.F * i( function () {
      n( 1 )
    } ), "Object", a )
  }
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    if ( e && e.__esModule ) return e;
    var t = {};
    if ( null != e )
      for ( var n in e ) Object.prototype.hasOwnProperty.call( e, n ) && ( t[ n ] = e[ n ] );
    return t.default = e, t
  }

  function o( e ) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty( t, "__esModule", {
    value: !0
  } );
  var i = n( 203 ),
    a = o( i ),
    s = n( 209 ),
    l = o( s ),
    u = n( 212 ),
    c = o( u ),
    f = n( 213 ),
    p = o( f ),
    d = n( 217 ),
    h = o( d ),
    v = n( 218 ),
    g = o( v ),
    m = n( 226 ),
    y = r( m ),
    b = n( 96 ),
    x = o( b ),
    w = n( 229 ),
    _ = o( w ),
    C = n( 227 ),
    k = function ( e ) {
      function t() {
        return ( 0, c.default )( this, t ), ( 0, h.default )( this, ( t.__proto__ || ( 0, l.default )( t ) ).apply( this, arguments ) )
      }
      return ( 0, g.default )( t, e ), ( 0, p.default )( t, [ {
        key: "componentDidMount",
        value: function () {
          var e = this;
          ( 0, C.subscribe )( y.FORWARD, function () {
            var t = e._slide && e._slide.onForward();
            t || e.props.nextSlide()
          } ), ( 0, C.subscribe )( y.BACK, function () {
            var t = e._slide && e._slide.onBack();
            t || e.props.previousSlide()
          } ), ( 0, C.subscribe )( y.TO_SLIDE, function ( t ) {
            return e.props.goToSlide( t )
          } )
        }
      }, {
        key: "getChildContext",
        value: function () {
          return {
            config: this.props.config
          }
        }
      }, {
        key: "render",
        value: function () {
          var e = this,
            t = this.props,
            n = t.masterLayout,
            r = t.slideLayout,
            o = t.slide,
            i = t.slideIndex,
            s = t.slides,
            l = o.options,
            u = o.layout,
            c = l.classNames ? [].concat( ( 0, a.default )( l.classNames ) ) : [];
          return u && u.getClassNames && ( c = c.concat( u.getClassNames( {
            slides: s,
            slideIndex: i,
            slide: o
          } ) ) ), x.default.createElement( n, {
            className: c.join( " " )
          }, x.default.createElement( _.default, {
            key: i,
            ref: function ( t ) {
              return e._slide = t
            },
            slide: o,
            slideIndex: i,
            slideLayout: r
          } ) )
        }
      } ] ), t
    }( x.default.Component );
  t.default = k, k.propTypes = {
    masterLayout: x.default.PropTypes.func,
    slideLayout: x.default.PropTypes.func,
    slide: x.default.PropTypes.object,
    slideIndex: x.default.PropTypes.number,
    slides: x.default.PropTypes.arrayOf( x.default.PropTypes.object ),
    config: x.default.PropTypes.object,
    nextSlide: x.default.PropTypes.func,
    previousSlide: x.default.PropTypes.func,
    goToSlide: x.default.PropTypes.func
  }, k.childContextTypes = {
    config: x.default.PropTypes.object
  }
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  t.__esModule = !0;
  var o = n( 204 ),
    i = r( o );
  t.default = function ( e ) {
    if ( Array.isArray( e ) ) {
      for ( var t = 0, n = Array( e.length ); t < e.length; t++ ) n[ t ] = e[ t ];
      return n
    }
    return ( 0, i.default )( e )
  }
}, function ( e, t, n ) {
  e.exports = {
    default: n( 205 ),
    __esModule: !0
  }
}, function ( e, t, n ) {
  n( 45 ), n( 206 ), e.exports = n( 10 ).Array.from
}, function ( e, t, n ) {
  "use strict";
  var r = n( 11 ),
    o = n( 8 ),
    i = n( 41 ),
    a = n( 84 ),
    s = n( 85 ),
    l = n( 32 ),
    u = n( 207 ),
    c = n( 86 );
  o( o.S + o.F * !n( 208 )( function ( e ) {
    Array.from( e )
  } ), "Array", {
    from: function ( e ) {
      var t, n, o, f, p = i( e ),
        d = "function" == typeof this ? this : Array,
        h = arguments.length,
        v = h > 1 ? arguments[ 1 ] : void 0,
        g = void 0 !== v,
        m = 0,
        y = c( p );
      if ( g && ( v = r( v, h > 2 ? arguments[ 2 ] : void 0, 2 ) ), void 0 == y || d == Array && s( y ) )
        for ( t = l( p.length ), n = new d( t ); t > m; m++ ) u( n, m, g ? v( p[ m ], m ) : p[ m ] );
      else
        for ( f = y.call( p ), n = new d; !( o = f.next() ).done; m++ ) u( n, m, g ? a( f, v, [ o.value, m ], !0 ) : o.value );
      return n.length = m, n
    }
  } )
}, function ( e, t, n ) {
  "use strict";
  var r = n( 14 ),
    o = n( 22 );
  e.exports = function ( e, t, n ) {
    t in e ? r.f( e, t, o( 0, n ) ) : e[ t ] = n
  }
}, function ( e, t, n ) {
  var r = n( 56 )( "iterator" ),
    o = !1;
  try {
    var i = [ 7 ][ r ]();
    i.return = function () {
      o = !0
    }, Array.from( i, function () {
      throw 2
    } )
  } catch ( e ) {}
  e.exports = function ( e, t ) {
    if ( !t && !o ) return !1;
    var n = !1;
    try {
      var i = [ 7 ],
        a = i[ r ]();
      a.next = function () {
        return {
          done: n = !0
        }
      }, i[ r ] = function () {
        return a
      }, e( i )
    } catch ( e ) {}
    return n
  }
}, function ( e, t, n ) {
  e.exports = {
    default: n( 210 ),
    __esModule: !0
  }
}, function ( e, t, n ) {
  n( 211 ), e.exports = n( 10 ).Object.getPrototypeOf
}, function ( e, t, n ) {
  var r = n( 41 ),
    o = n( 57 );
  n( 201 )( "getPrototypeOf", function () {
    return function ( e ) {
      return o( r( e ) )
    }
  } )
}, function ( e, t ) {
  "use strict";
  t.__esModule = !0, t.default = function ( e, t ) {
    if ( !( e instanceof t ) ) throw new TypeError( "Cannot call a class as a function" )
  }
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  t.__esModule = !0;
  var o = n( 214 ),
    i = r( o );
  t.default = function () {
    function e( e, t ) {
      for ( var n = 0; n < t.length; n++ ) {
        var r = t[ n ];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && ( r.writable = !0 ), ( 0, i.default )( e, r.key, r )
      }
    }
    return function ( t, n, r ) {
      return n && e( t.prototype, n ), r && e( t, r ), t
    }
  }()
}, function ( e, t, n ) {
  e.exports = {
    default: n( 215 ),
    __esModule: !0
  }
}, function ( e, t, n ) {
  n( 216 );
  var r = n( 10 ).Object;
  e.exports = function ( e, t, n ) {
    return r.defineProperty( e, t, n )
  }
}, function ( e, t, n ) {
  var r = n( 8 );
  r( r.S + r.F * !n( 18 ), "Object", {
    defineProperty: n( 14 ).f
  } )
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  t.__esModule = !0;
  var o = n( 42 ),
    i = r( o );
  t.default = function ( e, t ) {
    if ( !e ) throw new ReferenceError( "this hasn't been initialised - super() hasn't been called" );
    return !t || "object" !== ( "undefined" == typeof t ? "undefined" : ( 0, i.default )( t ) ) && "function" != typeof t ? e : t
  }
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  t.__esModule = !0;
  var o = n( 219 ),
    i = r( o ),
    a = n( 223 ),
    s = r( a ),
    l = n( 42 ),
    u = r( l );
  t.default = function ( e, t ) {
    if ( "function" != typeof t && null !== t ) throw new TypeError( "Super expression must either be null or a function, not " + ( "undefined" == typeof t ? "undefined" : ( 0, u.default )( t ) ) );
    e.prototype = ( 0, s.default )( t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    } ), t && ( i.default ? ( 0, i.default )( e, t ) : e.__proto__ = t )
  }
}, function ( e, t, n ) {
  e.exports = {
    default: n( 220 ),
    __esModule: !0
  }
}, function ( e, t, n ) {
  n( 221 ), e.exports = n( 10 ).Object.setPrototypeOf
}, function ( e, t, n ) {
  var r = n( 8 );
  r( r.S, "Object", {
    setPrototypeOf: n( 222 ).set
  } )
}, function ( e, t, n ) {
  var r = n( 16 ),
    o = n( 15 ),
    i = function ( e, t ) {
      if ( o( e ), !r( t ) && null !== t ) throw TypeError( t + ": can't set as prototype!" )
    };
  e.exports = {
    set: Object.setPrototypeOf || ( "__proto__" in {} ? function ( e, t, r ) {
      try {
        r = n( 11 )( Function.call, n( 73 ).f( Object.prototype, "__proto__" ).set, 2 ), r( e, [] ), t = !( e instanceof Array )
      } catch ( e ) {
        t = !0
      }
      return function ( e, n ) {
        return i( e, n ), t ? e.__proto__ = n : r( e, n ), e
      }
    }( {}, !1 ) : void 0 ),
    check: i
  }
}, function ( e, t, n ) {
  e.exports = {
    default: n( 224 ),
    __esModule: !0
  }
}, function ( e, t, n ) {
  n( 225 );
  var r = n( 10 ).Object;
  e.exports = function ( e, t ) {
    return r.create( e, t )
  }
}, function ( e, t, n ) {
  var r = n( 8 );
  r( r.S, "Object", {
    create: n( 52 )
  } )
}, function ( e, t, n ) {
  "use strict";

  function r() {
    ( 0, a.publish )( s )
  }

  function o() {
    ( 0, a.publish )( l )
  }

  function i( e ) {
    ( 0, a.publish )( u, e )
  }
  Object.defineProperty( t, "__esModule", {
    value: !0
  } ), t.TO_SLIDE = t.BACK = t.FORWARD = void 0, t.forward = r, t.back = o, t.gotToSlide = i;
  var a = n( 227 ),
    s = t.FORWARD = "NAVIGATION.forward",
    l = t.BACK = "NAVIGATION.back",
    u = t.TO_SLIDE = "NAVIGATION.TO_SLIDE"
}, function ( e, t, n ) {
  "use strict";

  function r() {
    for ( var e = arguments.length, t = Array( e ), n = 0; n < e; n++ ) t[ n ] = arguments[ n ];
    return a.on.apply( a, t ), s.bind.apply( s, [ null ].concat( t ) )
  }

  function o( e ) {
    for ( var t in e ) e.hasOwnProperty( t ) && a.on( t, e[ t ] );
    return function () {
      for ( var t in e ) e.hasOwnProperty( t ) && s( t, e[ t ] )
    }
  }
  Object.defineProperty( t, "__esModule", {
    value: !0
  } ), t.unsubscribe = t.publish = void 0, t.subscribe = r, t.subscribeAll = o;
  var i = n( 228 ),
    a = new i.EventEmitter;
  a.setMaxListeners( 1 / 0 );
  var s = ( t.publish = a.emit.bind( a ), t.unsubscribe = a.removeListener.bind( a ) )
}, function ( e, t ) {
  function n() {
    this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
  }

  function r( e ) {
    return "function" == typeof e
  }

  function o( e ) {
    return "number" == typeof e
  }

  function i( e ) {
    return "object" == typeof e && null !== e
  }

  function a( e ) {
    return void 0 === e
  }
  e.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function ( e ) {
    if ( !o( e ) || e < 0 || isNaN( e ) ) throw TypeError( "n must be a positive number" );
    return this._maxListeners = e, this
  }, n.prototype.emit = function ( e ) {
    var t, n, o, s, l, u;
    if ( this._events || ( this._events = {} ), "error" === e && ( !this._events.error || i( this._events.error ) && !this._events.error.length ) ) {
      if ( t = arguments[ 1 ], t instanceof Error ) throw t;
      var c = new Error( 'Uncaught, unspecified "error" event. (' + t + ")" );
      throw c.context = t, c
    }
    if ( n = this._events[ e ], a( n ) ) return !1;
    if ( r( n ) ) switch ( arguments.length ) {
      case 1:
        n.call( this );
        break;
      case 2:
        n.call( this, arguments[ 1 ] );
        break;
      case 3:
        n.call( this, arguments[ 1 ], arguments[ 2 ] );
        break;
      default:
        s = Array.prototype.slice.call( arguments, 1 ), n.apply( this, s )
    } else if ( i( n ) )
      for ( s = Array.prototype.slice.call( arguments, 1 ), u = n.slice(), o = u.length, l = 0; l < o; l++ ) u[ l ].apply( this, s );
    return !0
  }, n.prototype.addListener = function ( e, t ) {
    var o;
    if ( !r( t ) ) throw TypeError( "listener must be a function" );
    return this._events || ( this._events = {} ), this._events.newListener && this.emit( "newListener", e, r( t.listener ) ? t.listener : t ), this._events[ e ] ? i( this._events[ e ] ) ? this._events[ e ].push( t ) : this._events[ e ] = [ this._events[ e ], t ] : this._events[ e ] = t, i( this._events[ e ] ) && !this._events[ e ].warned && ( o = a( this._maxListeners ) ? n.defaultMaxListeners : this._maxListeners, o && o > 0 && this._events[ e ].length > o && ( this._events[ e ].warned = !0, console.error( "(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[ e ].length ), "function" == typeof console.trace && console.trace() ) ), this
  }, n.prototype.on = n.prototype.addListener, n.prototype.once = function ( e, t ) {
    function n() {
      this.removeListener( e, n ), o || ( o = !0, t.apply( this, arguments ) )
    }
    if ( !r( t ) ) throw TypeError( "listener must be a function" );
    var o = !1;
    return n.listener = t, this.on( e, n ), this
  }, n.prototype.removeListener = function ( e, t ) {
    var n, o, a, s;
    if ( !r( t ) ) throw TypeError( "listener must be a function" );
    if ( !this._events || !this._events[ e ] ) return this;
    if ( n = this._events[ e ], a = n.length, o = -1, n === t || r( n.listener ) && n.listener === t ) delete this._events[ e ], this._events.removeListener && this.emit( "removeListener", e, t );
    else if ( i( n ) ) {
      for ( s = a; s-- > 0; )
        if ( n[ s ] === t || n[ s ].listener && n[ s ].listener === t ) {
          o = s;
          break
        } if ( o < 0 ) return this;
      1 === n.length ? ( n.length = 0, delete this._events[ e ] ) : n.splice( o, 1 ), this._events.removeListener && this.emit( "removeListener", e, t )
    }
    return this
  }, n.prototype.removeAllListeners = function ( e ) {
    var t, n;
    if ( !this._events ) return this;
    if ( !this._events.removeListener ) return 0 === arguments.length ? this._events = {} : this._events[ e ] && delete this._events[ e ], this;
    if ( 0 === arguments.length ) {
      for ( t in this._events ) "removeListener" !== t && this.removeAllListeners( t );
      return this.removeAllListeners( "removeListener" ), this._events = {}, this
    }
    if ( n = this._events[ e ], r( n ) ) this.removeListener( e, n );
    else if ( n )
      for ( ; n.length; ) this.removeListener( e, n[ n.length - 1 ] );
    return delete this._events[ e ], this
  }, n.prototype.listeners = function ( e ) {
    var t;
    return t = this._events && this._events[ e ] ? r( this._events[ e ] ) ? [ this._events[ e ] ] : this._events[ e ].slice() : []
  }, n.prototype.listenerCount = function ( e ) {
    if ( this._events ) {
      var t = this._events[ e ];
      if ( r( t ) ) return 1;
      if ( t ) return t.length
    }
    return 0
  }, n.listenerCount = function ( e, t ) {
    return e.listenerCount( t )
  }
}, function ( e, t, n ) {
  ( function ( e ) {
    "use strict";

    function r( e ) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function o( e, t ) {
      ( 0, C.publish )( e, t )
    }
    Object.defineProperty( t, "__esModule", {
      value: !0
    } );
    var i = n( 203 ),
      a = r( i ),
      s = n( 4 ),
      l = r( s ),
      u = n( 209 ),
      c = r( u ),
      f = n( 212 ),
      p = r( f ),
      d = n( 213 ),
      h = r( d ),
      v = n( 217 ),
      g = r( v ),
      m = n( 218 ),
      y = r( m ),
      b = n( 96 ),
      x = r( b ),
      w = n( 230 ),
      _ = n( 231 ),
      C = n( 227 ),
      k = n( 195 ),
      E = r( k ),
      S = null,
      T = function ( t ) {
        function n() {
          return ( 0, p.default )( this, n ), ( 0, g.default )( this, ( n.__proto__ || ( 0, c.default )( n ) ).apply( this, arguments ) )
        }
        return ( 0, y.default )( n, t ), ( 0, h.default )( n, [ {
          key: "componentDidMount",
          value: function () {
            this._mountStyle(), this._mountScript(), this._updateDocumentTitle(), o( "SLIDE.DID_MOUNT", this.getChildContext() )
          }
        }, {
          key: "shouldComponentUpdate",
          value: function ( e, t, n ) {
            var r = this._isActive( this.props, this.context );
            return this.props.slide !== e.slide || this.props.slideIndex !== e.slideIndex || r !== ( this.props.slide === n.slide )
          }
        }, {
          key: "componentDidUpdate",
          value: function ( e, t, n ) {
            var r = this._isActive( this.props, this.context ),
              i = this._isActive( e, n ),
              a = this.getChildContext();
            this.props.slideIndex === e.slideIndex && r === i || ( this._style && ( this._style.remove(), this._style = null ), this._script && ( this._script.teardown(), this._script = null ), i && o( "SLIDE.INACTIVE", a ), this._mountStyle(), this._mountScript(), r && ( this._updateDocumentTitle(), o( "SLIDE.ACTIVE", a ) ), o( "SLIDE.DID_UPDATE", a ) )
          }
        }, {
          key: "componentWillUnmount",
          value: function () {
            this._style && ( this._style.remove(), this._style = null ), this._script && ( this._script.teardown(), this._script = null ), this._isActive( this.props, this.context ) && ( e.document.title = S ), o( "SLIDE.WILL_UNMOUNT", this.getChildContext() )
          }
        }, {
          key: "getChildContext",
          value: function () {
            return {
              slide: this.props.slide,
              slideIndex: this.props.slideIndex,
              slides: this.context.slides
            }
          }
        }, {
          key: "_isActive",
          value: function ( e, t ) {
            return e.slideIndex === t.slideIndex
          }
        }, {
          key: "_updateDocumentTitle",
          value: function () {
            var t = this.props.slide && this.props.slide.options.title;
            null === S && ( S = e.document.title ), e.document.title = t ? S + " - " + t : S
          }
        }, {
          key: "_mountStyle",
          value: function () {
            this._style && ( this._style.remove(), this._style = null ), this.props.slide.options.style && ( this._style = ( 0, w.addStyle )( this.props.slide.options.style ) )
          }
        }, {
          key: "_mountScript",
          value: function () {
            this._script && ( this._script.teardown(), this._script = null );
            var e = this.props.slide.options.script;
            e && ( this._script = ( 0, _.evalScript )( e ), this._script.setup() )
          }
        }, {
          key: "onForward",
          value: function () {
            return Boolean( this._layout && this._layout.onForward && this._layout.onForward() )
          }
        }, {
          key: "onBack",
          value: function () {
            return Boolean( this._layout && this._layout.onBack && this._layout.onBack() )
          }
        }, {
          key: "render",
          value: function () {
            var e = this,
              t = this.props,
              n = t.slide,
              r = t.slideIndex,
              o = t.slideLayout,
              i = this.props.slide,
              s = i.options,
              u = i.layout,
              c = "-" + ( s.id || r ),
              f = s.title ? x.default.createElement( "h1", {
                id: "exerslide-slide-title" + c,
                className: "exerslide-slide-title",
                tabIndex: 0
              }, s.title ) : null,
              p = void 0;
            p = u ? [ x.default.createElement( u, ( 0, l.default )( {
              ref: function ( t ) {
                return e._layout = t
              },
              title: f,
              content: n.content,
              layoutData: s.layoutData || {}
            }, this.getChildContext() ) ) ] : [ f, x.default.createElement( E.default, {
              value: n.content
            } ) ];
            var d = this._isActive( this.props, this.context );
            return p = x.default.createElement.apply( x.default, [ o, {
              slide: n,
              slideIndex: r,
              isActive: d
            } ].concat( ( 0, a.default )( p ) ) ), x.default.createElement( "div", {
              id: "exerslide-slide" + c,
              "aria-label": "Slide:",
              "aria-labelledby": "exerslide-slide" + c + " exerslide-slide-title" + c,
              role: d ? "main" : null,
              className: "exerslide-slide"
            }, p )
          }
        } ] ), n
      }( x.default.Component );
    t.default = T, T.propTypes = {
      slide: x.default.PropTypes.object.isRequired,
      slideIndex: x.default.PropTypes.number.isRequired,
      slideLayout: x.default.PropTypes.func.isRequired
    }, T.contextTypes = {
      slide: x.default.PropTypes.object.isRequired,
      slideIndex: x.default.PropTypes.number.isRequired,
      slides: x.default.PropTypes.arrayOf( x.default.PropTypes.object )
    }, T.childContextTypes = {
      slide: x.default.PropTypes.object.isRequired,
      slideIndex: x.default.PropTypes.number.isRequired,
      slides: x.default.PropTypes.arrayOf( x.default.PropTypes.object )
    }
  } ).call( t, function () {
    return this
  }() )
}, function ( e, t ) {
  ( function ( e ) {
    "use strict";

    function n( e ) {
      var t = r.createElement( "style" );
      return t.innerHTML = e, r.head.appendChild( t ), {
        remove: function () {
          t && ( r.head.removeChild( t ), t = null )
        }
      }
    }
    Object.defineProperty( t, "__esModule", {
      value: !0
    } ), t.addStyle = n;
    var r = e.document
  } ).call( t, function () {
    return this
  }() )
}, function ( e, t ) {
  ( function ( e ) {
    "use strict";

    function n( t ) {
      var n = {},
        r = n.exports = {},
        o = new Function( "module, exports, global", t );
      return o( n, r, e ), n.exports
    }
    Object.defineProperty( t, "__esModule", {
      value: !0
    } ), t.evalScript = n
  } ).call( t, function () {
    return this
  }() )
}, function ( e, t, n ) {
  "use strict";
  e.exports = n( 233 )
}, function ( e, t, n ) {
  "use strict";
  var r = n( 234 ),
    o = n( 238 ),
    i = n( 361 ),
    a = n( 259 ),
    s = n( 256 ),
    l = n( 366 ),
    u = n( 367 ),
    c = n( 368 ),
    f = n( 369 );
  n( 105 );
  o.inject();
  var p = {
    findDOMNode: u,
    render: i.render,
    unmountComponentAtNode: i.unmountComponentAtNode,
    version: l,
    unstable_batchedUpdates: s.batchedUpdates,
    unstable_renderSubtreeIntoContainer: f
  };
  "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject && __REACT_DEVTOOLS_GLOBAL_HOOK__.inject( {
    ComponentTree: {
      getClosestInstanceFromNode: r.getClosestInstanceFromNode,
      getNodeFromInstance: function ( e ) {
        return e._renderedComponent && ( e = c( e ) ), e ? r.getNodeFromInstance( e ) : null
      }
    },
    Mount: i,
    Reconciler: a
  } );
  e.exports = p
}, function ( e, t, n ) {
  "use strict";

  function r( e, t ) {
    return 1 === e.nodeType && e.getAttribute( h ) === String( t ) || 8 === e.nodeType && e.nodeValue === " react-text: " + t + " " || 8 === e.nodeType && e.nodeValue === " react-empty: " + t + " "
  }

  function o( e ) {
    for ( var t; t = e._renderedComponent; ) e = t;
    return e
  }

  function i( e, t ) {
    var n = o( e );
    n._hostNode = t, t[ g ] = n
  }

  function a( e ) {
    var t = e._hostNode;
    t && ( delete t[ g ], e._hostNode = null )
  }

  function s( e, t ) {
    if ( !( e._flags & v.hasCachedChildNodes ) ) {
      var n = e._renderedChildren,
        a = t.firstChild;
      e: for ( var s in n )
        if ( n.hasOwnProperty( s ) ) {
          var l = n[ s ],
            u = o( l )._domID;
          if ( 0 !== u ) {
            for ( ; null !== a; a = a.nextSibling )
              if ( r( a, u ) ) {
                i( l, a );
                continue e
              } f( "32", u )
          }
        } e._flags |= v.hasCachedChildNodes
    }
  }

  function l( e ) {
    if ( e[ g ] ) return e[ g ];
    for ( var t = []; !e[ g ]; ) {
      if ( t.push( e ), !e.parentNode ) return null;
      e = e.parentNode
    }
    for ( var n, r; e && ( r = e[ g ] ); e = t.pop() ) n = r, t.length && s( r, e );
    return n
  }

  function u( e ) {
    var t = l( e );
    return null != t && t._hostNode === e ? t : null
  }

  function c( e ) {
    if ( void 0 === e._hostNode ? f( "33" ) : void 0, e._hostNode ) return e._hostNode;
    for ( var t = []; !e._hostNode; ) t.push( e ), e._hostParent ? void 0 : f( "34" ), e = e._hostParent;
    for ( ; t.length; e = t.pop() ) s( e, e._hostNode );
    return e._hostNode
  }
  var f = n( 235 ),
    p = n( 236 ),
    d = n( 237 ),
    h = ( n( 102 ), p.ID_ATTRIBUTE_NAME ),
    v = d,
    g = "__reactInternalInstance$" + Math.random().toString( 36 ).slice( 2 ),
    m = {
      getClosestInstanceFromNode: l,
      getInstanceFromNode: u,
      getNodeFromInstance: c,
      precacheChildNodes: s,
      precacheNode: i,
      uncacheNode: a
    };
  e.exports = m
}, function ( e, t ) {
  "use strict";

  function n( e ) {
    for ( var t = arguments.length - 1, n = "Minified React error #" + e + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=" + e, r = 0; r < t; r++ ) n += "&args[]=" + encodeURIComponent( arguments[ r + 1 ] );
    n += " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    var o = new Error( n );
    throw o.name = "Invariant Violation", o.framesToPop = 1, o
  }
  e.exports = n
}, function ( e, t, n ) {
  "use strict";

  function r( e, t ) {
    return ( e & t ) === t
  }
  var o = n( 235 ),
    i = ( n( 102 ), {
      MUST_USE_PROPERTY: 1,
      HAS_BOOLEAN_VALUE: 4,
      HAS_NUMERIC_VALUE: 8,
      HAS_POSITIVE_NUMERIC_VALUE: 24,
      HAS_OVERLOADED_BOOLEAN_VALUE: 32,
      injectDOMPropertyConfig: function ( e ) {
        var t = i,
          n = e.Properties || {},
          a = e.DOMAttributeNamespaces || {},
          l = e.DOMAttributeNames || {},
          u = e.DOMPropertyNames || {},
          c = e.DOMMutationMethods || {};
        e.isCustomAttribute && s._isCustomAttributeFunctions.push( e.isCustomAttribute );
        for ( var f in n ) {
          s.properties.hasOwnProperty( f ) ? o( "48", f ) : void 0;
          var p = f.toLowerCase(),
            d = n[ f ],
            h = {
              attributeName: p,
              attributeNamespace: null,
              propertyName: f,
              mutationMethod: null,
              mustUseProperty: r( d, t.MUST_USE_PROPERTY ),
              hasBooleanValue: r( d, t.HAS_BOOLEAN_VALUE ),
              hasNumericValue: r( d, t.HAS_NUMERIC_VALUE ),
              hasPositiveNumericValue: r( d, t.HAS_POSITIVE_NUMERIC_VALUE ),
              hasOverloadedBooleanValue: r( d, t.HAS_OVERLOADED_BOOLEAN_VALUE )
            };
          if ( h.hasBooleanValue + h.hasNumericValue + h.hasOverloadedBooleanValue <= 1 ? void 0 : o( "50", f ), l.hasOwnProperty( f ) ) {
            var v = l[ f ];
            h.attributeName = v
          }
          a.hasOwnProperty( f ) && ( h.attributeNamespace = a[ f ] ), u.hasOwnProperty( f ) && ( h.propertyName = u[ f ] ), c.hasOwnProperty( f ) && ( h.mutationMethod = c[ f ] ), s.properties[ f ] = h
        }
      }
    } ),
    a = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
    s = {
      ID_ATTRIBUTE_NAME: "data-reactid",
      ROOT_ATTRIBUTE_NAME: "data-reactroot",
      ATTRIBUTE_NAME_START_CHAR: a,
      ATTRIBUTE_NAME_CHAR: a + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
      properties: {},
      getPossibleStandardName: null,
      _isCustomAttributeFunctions: [],
      isCustomAttribute: function ( e ) {
        for ( var t = 0; t < s._isCustomAttributeFunctions.length; t++ ) {
          var n = s._isCustomAttributeFunctions[ t ];
          if ( n( e ) ) return !0
        }
        return !1
      },
      injection: i
    };
  e.exports = s
}, function ( e, t ) {
  "use strict";
  var n = {
    hasCachedChildNodes: 1
  };
  e.exports = n
}, function ( e, t, n ) {
  "use strict";

  function r() {
    C || ( C = !0, y.EventEmitter.injectReactEventListener( m ), y.EventPluginHub.injectEventPluginOrder( s ), y.EventPluginUtils.injectComponentTree( p ), y.EventPluginUtils.injectTreeTraversal( h ), y.EventPluginHub.injectEventPluginsByName( {
      SimpleEventPlugin: _,
      EnterLeaveEventPlugin: l,
      ChangeEventPlugin: a,
      SelectEventPlugin: w,
      BeforeInputEventPlugin: i
    } ), y.HostComponent.injectGenericComponentClass( f ), y.HostComponent.injectTextComponentClass( v ), y.DOMProperty.injectDOMPropertyConfig( o ), y.DOMProperty.injectDOMPropertyConfig( u ), y.DOMProperty.injectDOMPropertyConfig( x ), y.EmptyComponent.injectEmptyComponentFactory( function ( e ) {
      return new d( e )
    } ), y.Updates.injectReconcileTransaction( b ), y.Updates.injectBatchingStrategy( g ), y.Component.injectEnvironment( c ) )
  }
  var o = n( 239 ),
    i = n( 240 ),
    a = n( 255 ),
    s = n( 267 ),
    l = n( 268 ),
    u = n( 273 ),
    c = n( 274 ),
    f = n( 287 ),
    p = n( 234 ),
    d = n( 332 ),
    h = n( 333 ),
    v = n( 334 ),
    g = n( 335 ),
    m = n( 336 ),
    y = n( 339 ),
    b = n( 340 ),
    x = n( 348 ),
    w = n( 349 ),
    _ = n( 350 ),
    C = !1;
  e.exports = {
    inject: r
  }
}, function ( e, t ) {
  "use strict";
  var n = {
    Properties: {
      "aria-current": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    },
    DOMAttributeNames: {},
    DOMPropertyNames: {}
  };
  e.exports = n
}, function ( e, t, n ) {
  "use strict";

  function r() {
    var e = window.opera;
    return "object" == typeof e && "function" == typeof e.version && parseInt( e.version(), 10 ) <= 12
  }

  function o( e ) {
    return ( e.ctrlKey || e.altKey || e.metaKey ) && !( e.ctrlKey && e.altKey )
  }

  function i( e ) {
    switch ( e ) {
      case "topCompositionStart":
        return S.compositionStart;
      case "topCompositionEnd":
        return S.compositionEnd;
      case "topCompositionUpdate":
        return S.compositionUpdate
    }
  }

  function a( e, t ) {
    return "topKeyDown" === e && t.keyCode === b
  }

  function s( e, t ) {
    switch ( e ) {
      case "topKeyUp":
        return y.indexOf( t.keyCode ) !== -1;
      case "topKeyDown":
        return t.keyCode !== b;
      case "topKeyPress":
      case "topMouseDown":
      case "topBlur":
        return !0;
      default:
        return !1
    }
  }

  function l( e ) {
    var t = e.detail;
    return "object" == typeof t && "data" in t ? t.data : null
  }

  function u( e, t, n, r ) {
    var o, u;
    if ( x ? o = i( e ) : A ? s( e, n ) && ( o = S.compositionEnd ) : a( e, n ) && ( o = S.compositionStart ), !o ) return null;
    C && ( A || o !== S.compositionStart ? o === S.compositionEnd && A && ( u = A.getData() ) : A = v.getPooled( r ) );
    var c = g.getPooled( o, t, n, r );
    if ( u ) c.data = u;
    else {
      var f = l( n );
      null !== f && ( c.data = f )
    }
    return d.accumulateTwoPhaseDispatches( c ), c
  }

  function c( e, t ) {
    switch ( e ) {
      case "topCompositionEnd":
        return l( t );
      case "topKeyPress":
        var n = t.which;
        return n !== k ? null : ( T = !0, E );
      case "topTextInput":
        var r = t.data;
        return r === E && T ? null : r;
      default:
        return null
    }
  }

  function f( e, t ) {
    if ( A ) {
      if ( "topCompositionEnd" === e || !x && s( e, t ) ) {
        var n = A.getData();
        return v.release( A ), A = null, n
      }
      return null
    }
    switch ( e ) {
      case "topPaste":
        return null;
      case "topKeyPress":
        return t.which && !o( t ) ? String.fromCharCode( t.which ) : null;
      case "topCompositionEnd":
        return C ? null : t.data;
      default:
        return null
    }
  }

  function p( e, t, n, r ) {
    var o;
    if ( o = _ ? c( e, n ) : f( e, n ), !o ) return null;
    var i = m.getPooled( S.beforeInput, t, n, r );
    return i.data = o, d.accumulateTwoPhaseDispatches( i ), i
  }
  var d = n( 241 ),
    h = n( 248 ),
    v = n( 249 ),
    g = n( 252 ),
    m = n( 254 ),
    y = [ 9, 13, 27, 32 ],
    b = 229,
    x = h.canUseDOM && "CompositionEvent" in window,
    w = null;
  h.canUseDOM && "documentMode" in document && ( w = document.documentMode );
  var _ = h.canUseDOM && "TextEvent" in window && !w && !r(),
    C = h.canUseDOM && ( !x || w && w > 8 && w <= 11 ),
    k = 32,
    E = String.fromCharCode( k ),
    S = {
      beforeInput: {
        phasedRegistrationNames: {
          bubbled: "onBeforeInput",
          captured: "onBeforeInputCapture"
        },
        dependencies: [ "topCompositionEnd", "topKeyPress", "topTextInput", "topPaste" ]
      },
      compositionEnd: {
        phasedRegistrationNames: {
          bubbled: "onCompositionEnd",
          captured: "onCompositionEndCapture"
        },
        dependencies: [ "topBlur", "topCompositionEnd", "topKeyDown", "topKeyPress", "topKeyUp", "topMouseDown" ]
      },
      compositionStart: {
        phasedRegistrationNames: {
          bubbled: "onCompositionStart",
          captured: "onCompositionStartCapture"
        },
        dependencies: [ "topBlur", "topCompositionStart", "topKeyDown", "topKeyPress", "topKeyUp", "topMouseDown" ]
      },
      compositionUpdate: {
        phasedRegistrationNames: {
          bubbled: "onCompositionUpdate",
          captured: "onCompositionUpdateCapture"
        },
        dependencies: [ "topBlur", "topCompositionUpdate", "topKeyDown", "topKeyPress", "topKeyUp", "topMouseDown" ]
      }
    },
    T = !1,
    A = null,
    M = {
      eventTypes: S,
      extractEvents: function ( e, t, n, r ) {
        return [ u( e, t, n, r ), p( e, t, n, r ) ]
      }
    };
  e.exports = M
}, function ( e, t, n ) {
  "use strict";

  function r( e, t, n ) {
    var r = t.dispatchConfig.phasedRegistrationNames[ n ];
    return m( e, r )
  }

  function o( e, t, n ) {
    var o = r( e, n, t );
    o && ( n._dispatchListeners = v( n._dispatchListeners, o ), n._dispatchInstances = v( n._dispatchInstances, e ) )
  }

  function i( e ) {
    e && e.dispatchConfig.phasedRegistrationNames && h.traverseTwoPhase( e._targetInst, o, e )
  }

  function a( e ) {
    if ( e && e.dispatchConfig.phasedRegistrationNames ) {
      var t = e._targetInst,
        n = t ? h.getParentInstance( t ) : null;
      h.traverseTwoPhase( n, o, e )
    }
  }

  function s( e, t, n ) {
    if ( n && n.dispatchConfig.registrationName ) {
      var r = n.dispatchConfig.registrationName,
        o = m( e, r );
      o && ( n._dispatchListeners = v( n._dispatchListeners, o ), n._dispatchInstances = v( n._dispatchInstances, e ) )
    }
  }

  function l( e ) {
    e && e.dispatchConfig.registrationName && s( e._targetInst, null, e )
  }

  function u( e ) {
    g( e, i )
  }

  function c( e ) {
    g( e, a )
  }

  function f( e, t, n, r ) {
    h.traverseEnterLeave( n, r, s, e, t )
  }

  function p( e ) {
    g( e, l )
  }
  var d = n( 242 ),
    h = n( 244 ),
    v = n( 246 ),
    g = n( 247 ),
    m = ( n( 105 ), d.getListener ),
    y = {
      accumulateTwoPhaseDispatches: u,
      accumulateTwoPhaseDispatchesSkipTarget: c,
      accumulateDirectDispatches: p,
      accumulateEnterLeaveDispatches: f
    };
  e.exports = y
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    return "button" === e || "input" === e || "select" === e || "textarea" === e
  }

  function o( e, t, n ) {
    switch ( e ) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
        return !( !n.disabled || !r( t ) );
      default:
        return !1
    }
  }
  var i = n( 235 ),
    a = n( 243 ),
    s = n( 244 ),
    l = n( 245 ),
    u = n( 246 ),
    c = n( 247 ),
    f = ( n( 102 ), {} ),
    p = null,
    d = function ( e, t ) {
      e && ( s.executeDispatchesInOrder( e, t ), e.isPersistent() || e.constructor.release( e ) )
    },
    h = function ( e ) {
      return d( e, !0 )
    },
    v = function ( e ) {
      return d( e, !1 )
    },
    g = function ( e ) {
      return "." + e._rootNodeID
    },
    m = {
      injection: {
        injectEventPluginOrder: a.injectEventPluginOrder,
        injectEventPluginsByName: a.injectEventPluginsByName
      },
      putListener: function ( e, t, n ) {
        "function" != typeof n ? i( "94", t, typeof n ) : void 0;
        var r = g( e ),
          o = f[ t ] || ( f[ t ] = {} );
        o[ r ] = n;
        var s = a.registrationNameModules[ t ];
        s && s.didPutListener && s.didPutListener( e, t, n )
      },
      getListener: function ( e, t ) {
        var n = f[ t ];
        if ( o( t, e._currentElement.type, e._currentElement.props ) ) return null;
        var r = g( e );
        return n && n[ r ]
      },
      deleteListener: function ( e, t ) {
        var n = a.registrationNameModules[ t ];
        n && n.willDeleteListener && n.willDeleteListener( e, t );
        var r = f[ t ];
        if ( r ) {
          var o = g( e );
          delete r[ o ]
        }
      },
      deleteAllListeners: function ( e ) {
        var t = g( e );
        for ( var n in f )
          if ( f.hasOwnProperty( n ) && f[ n ][ t ] ) {
            var r = a.registrationNameModules[ n ];
            r && r.willDeleteListener && r.willDeleteListener( e, n ), delete f[ n ][ t ]
          }
      },
      extractEvents: function ( e, t, n, r ) {
        for ( var o, i = a.plugins, s = 0; s < i.length; s++ ) {
          var l = i[ s ];
          if ( l ) {
            var c = l.extractEvents( e, t, n, r );
            c && ( o = u( o, c ) )
          }
        }
        return o
      },
      enqueueEvents: function ( e ) {
        e && ( p = u( p, e ) )
      },
      processEventQueue: function ( e ) {
        var t = p;
        p = null, e ? c( t, h ) : c( t, v ), p ? i( "95" ) : void 0, l.rethrowCaughtError()
      },
      __purge: function () {
        f = {}
      },
      __getListenerBank: function () {
        return f
      }
    };
  e.exports = m
}, function ( e, t, n ) {
  "use strict";

  function r() {
    if ( s )
      for ( var e in l ) {
        var t = l[ e ],
          n = s.indexOf( e );
        if ( n > -1 ? void 0 : a( "96", e ), !u.plugins[ n ] ) {
          t.extractEvents ? void 0 : a( "97", e ), u.plugins[ n ] = t;
          var r = t.eventTypes;
          for ( var i in r ) o( r[ i ], t, i ) ? void 0 : a( "98", i, e )
        }
      }
  }

  function o( e, t, n ) {
    u.eventNameDispatchConfigs.hasOwnProperty( n ) ? a( "99", n ) : void 0, u.eventNameDispatchConfigs[ n ] = e;
    var r = e.phasedRegistrationNames;
    if ( r ) {
      for ( var o in r )
        if ( r.hasOwnProperty( o ) ) {
          var s = r[ o ];
          i( s, t, n )
        } return !0
    }
    return !!e.registrationName && ( i( e.registrationName, t, n ), !0 )
  }

  function i( e, t, n ) {
    u.registrationNameModules[ e ] ? a( "100", e ) : void 0, u.registrationNameModules[ e ] = t, u.registrationNameDependencies[ e ] = t.eventTypes[ n ].dependencies
  }
  var a = n( 235 ),
    s = ( n( 102 ), null ),
    l = {},
    u = {
      plugins: [],
      eventNameDispatchConfigs: {},
      registrationNameModules: {},
      registrationNameDependencies: {},
      possibleRegistrationNames: null,
      injectEventPluginOrder: function ( e ) {
        s ? a( "101" ) : void 0, s = Array.prototype.slice.call( e ), r()
      },
      injectEventPluginsByName: function ( e ) {
        var t = !1;
        for ( var n in e )
          if ( e.hasOwnProperty( n ) ) {
            var o = e[ n ];
            l.hasOwnProperty( n ) && l[ n ] === o || ( l[ n ] ? a( "102", n ) : void 0, l[ n ] = o, t = !0 )
          } t && r()
      },
      getPluginModuleForEvent: function ( e ) {
        var t = e.dispatchConfig;
        if ( t.registrationName ) return u.registrationNameModules[ t.registrationName ] || null;
        if ( void 0 !== t.phasedRegistrationNames ) {
          var n = t.phasedRegistrationNames;
          for ( var r in n )
            if ( n.hasOwnProperty( r ) ) {
              var o = u.registrationNameModules[ n[ r ] ];
              if ( o ) return o
            }
        }
        return null
      },
      _resetEventPlugins: function () {
        s = null;
        for ( var e in l ) l.hasOwnProperty( e ) && delete l[ e ];
        u.plugins.length = 0;
        var t = u.eventNameDispatchConfigs;
        for ( var n in t ) t.hasOwnProperty( n ) && delete t[ n ];
        var r = u.registrationNameModules;
        for ( var o in r ) r.hasOwnProperty( o ) && delete r[ o ]
      }
    };
  e.exports = u
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    return "topMouseUp" === e || "topTouchEnd" === e || "topTouchCancel" === e
  }

  function o( e ) {
    return "topMouseMove" === e || "topTouchMove" === e
  }

  function i( e ) {
    return "topMouseDown" === e || "topTouchStart" === e
  }

  function a( e, t, n, r ) {
    var o = e.type || "unknown-event";
    e.currentTarget = m.getNodeFromInstance( r ), t ? v.invokeGuardedCallbackWithCatch( o, n, e ) : v.invokeGuardedCallback( o, n, e ), e.currentTarget = null
  }

  function s( e, t ) {
    var n = e._dispatchListeners,
      r = e._dispatchInstances;
    if ( Array.isArray( n ) )
      for ( var o = 0; o < n.length && !e.isPropagationStopped(); o++ ) a( e, t, n[ o ], r[ o ] );
    else n && a( e, t, n, r );
    e._dispatchListeners = null, e._dispatchInstances = null
  }

  function l( e ) {
    var t = e._dispatchListeners,
      n = e._dispatchInstances;
    if ( Array.isArray( t ) ) {
      for ( var r = 0; r < t.length && !e.isPropagationStopped(); r++ )
        if ( t[ r ]( e, n[ r ] ) ) return n[ r ]
    } else if ( t && t( e, n ) ) return n;
    return null
  }

  function u( e ) {
    var t = l( e );
    return e._dispatchInstances = null, e._dispatchListeners = null, t
  }

  function c( e ) {
    var t = e._dispatchListeners,
      n = e._dispatchInstances;
    Array.isArray( t ) ? h( "103" ) : void 0, e.currentTarget = t ? m.getNodeFromInstance( n ) : null;
    var r = t ? t( e ) : null;
    return e.currentTarget = null, e._dispatchListeners = null, e._dispatchInstances = null, r
  }

  function f( e ) {
    return !!e._dispatchListeners
  }
  var p, d, h = n( 235 ),
    v = n( 245 ),
    g = ( n( 102 ), n( 105 ), {
      injectComponentTree: function ( e ) {
        p = e
      },
      injectTreeTraversal: function ( e ) {
        d = e
      }
    } ),
    m = {
      isEndish: r,
      isMoveish: o,
      isStartish: i,
      executeDirectDispatch: c,
      executeDispatchesInOrder: s,
      executeDispatchesInOrderStopAtTrue: u,
      hasDispatches: f,
      getInstanceFromNode: function ( e ) {
        return p.getInstanceFromNode( e )
      },
      getNodeFromInstance: function ( e ) {
        return p.getNodeFromInstance( e )
      },
      isAncestor: function ( e, t ) {
        return d.isAncestor( e, t )
      },
      getLowestCommonAncestor: function ( e, t ) {
        return d.getLowestCommonAncestor( e, t )
      },
      getParentInstance: function ( e ) {
        return d.getParentInstance( e )
      },
      traverseTwoPhase: function ( e, t, n ) {
        return d.traverseTwoPhase( e, t, n )
      },
      traverseEnterLeave: function ( e, t, n, r, o ) {
        return d.traverseEnterLeave( e, t, n, r, o )
      },
      injection: g
    };
  e.exports = m
}, function ( e, t, n ) {
  "use strict";

  function r( e, t, n ) {
    try {
      t( n )
    } catch ( e ) {
      null === o && ( o = e )
    }
  }
  var o = null,
    i = {
      invokeGuardedCallback: r,
      invokeGuardedCallbackWithCatch: r,
      rethrowCaughtError: function () {
        if ( o ) {
          var e = o;
          throw o = null, e
        }
      }
    };
  e.exports = i
}, function ( e, t, n ) {
  "use strict";

  function r( e, t ) {
    return null == t ? o( "30" ) : void 0, null == e ? t : Array.isArray( e ) ? Array.isArray( t ) ? ( e.push.apply( e, t ), e ) : ( e.push( t ), e ) : Array.isArray( t ) ? [ e ].concat( t ) : [ e, t ]
  }
  var o = n( 235 );
  n( 102 );
  e.exports = r
}, function ( e, t ) {
  "use strict";

  function n( e, t, n ) {
    Array.isArray( e ) ? e.forEach( t, n ) : e && t.call( n, e )
  }
  e.exports = n
}, function ( e, t ) {
  "use strict";
  var n = !( "undefined" == typeof window || !window.document || !window.document.createElement ),
    r = {
      canUseDOM: n,
      canUseWorkers: "undefined" != typeof Worker,
      canUseEventListeners: n && !( !window.addEventListener && !window.attachEvent ),
      canUseViewport: n && !!window.screen,
      isInWorker: !n
    };
  e.exports = r
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    this._root = e, this._startText = this.getText(), this._fallbackText = null
  }
  var o = n( 98 ),
    i = n( 250 ),
    a = n( 251 );
  o( r.prototype, {
    destructor: function () {
      this._root = null, this._startText = null, this._fallbackText = null
    },
    getText: function () {
      return "value" in this._root ? this._root.value : this._root[ a() ]
    },
    getData: function () {
      if ( this._fallbackText ) return this._fallbackText;
      var e, t, n = this._startText,
        r = n.length,
        o = this.getText(),
        i = o.length;
      for ( e = 0; e < r && n[ e ] === o[ e ]; e++ );
      var a = r - e;
      for ( t = 1; t <= a && n[ r - t ] === o[ i - t ]; t++ );
      var s = t > 1 ? 1 - t : void 0;
      return this._fallbackText = o.slice( e, s ), this._fallbackText
    }
  } ), i.addPoolingTo( r ), e.exports = r
}, function ( e, t, n ) {
  "use strict";
  var r = n( 235 ),
    o = ( n( 102 ), function ( e ) {
      var t = this;
      if ( t.instancePool.length ) {
        var n = t.instancePool.pop();
        return t.call( n, e ), n
      }
      return new t( e )
    } ),
    i = function ( e, t ) {
      var n = this;
      if ( n.instancePool.length ) {
        var r = n.instancePool.pop();
        return n.call( r, e, t ), r
      }
      return new n( e, t )
    },
    a = function ( e, t, n ) {
      var r = this;
      if ( r.instancePool.length ) {
        var o = r.instancePool.pop();
        return r.call( o, e, t, n ), o
      }
      return new r( e, t, n )
    },
    s = function ( e, t, n, r ) {
      var o = this;
      if ( o.instancePool.length ) {
        var i = o.instancePool.pop();
        return o.call( i, e, t, n, r ), i
      }
      return new o( e, t, n, r )
    },
    l = function ( e ) {
      var t = this;
      e instanceof t ? void 0 : r( "25" ), e.destructor(), t.instancePool.length < t.poolSize && t.instancePool.push( e )
    },
    u = 10,
    c = o,
    f = function ( e, t ) {
      var n = e;
      return n.instancePool = [], n.getPooled = t || c, n.poolSize || ( n.poolSize = u ), n.release = l, n
    },
    p = {
      addPoolingTo: f,
      oneArgumentPooler: o,
      twoArgumentPooler: i,
      threeArgumentPooler: a,
      fourArgumentPooler: s
    };
  e.exports = p
}, function ( e, t, n ) {
  "use strict";

  function r() {
    return !i && o.canUseDOM && ( i = "textContent" in document.documentElement ? "textContent" : "innerText" ), i
  }
  var o = n( 248 ),
    i = null;
  e.exports = r
}, function ( e, t, n ) {
  "use strict";

  function r( e, t, n, r ) {
    return o.call( this, e, t, n, r )
  }
  var o = n( 253 ),
    i = {
      data: null
    };
  o.augmentClass( r, i ), e.exports = r
}, function ( e, t, n ) {
  "use strict";

  function r( e, t, n, r ) {
    this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = n;
    var o = this.constructor.Interface;
    for ( var i in o )
      if ( o.hasOwnProperty( i ) ) {
        var s = o[ i ];
        s ? this[ i ] = s( n ) : "target" === i ? this.target = r : this[ i ] = n[ i ]
      } var l = null != n.defaultPrevented ? n.defaultPrevented : n.returnValue === !1;
    return l ? this.isDefaultPrevented = a.thatReturnsTrue : this.isDefaultPrevented = a.thatReturnsFalse, this.isPropagationStopped = a.thatReturnsFalse, this
  }
  var o = n( 98 ),
    i = n( 250 ),
    a = n( 106 ),
    s = ( n( 105 ), "function" == typeof Proxy, [ "dispatchConfig", "_targetInst", "nativeEvent", "isDefaultPrevented", "isPropagationStopped", "_dispatchListeners", "_dispatchInstances" ] ),
    l = {
      type: null,
      target: null,
      currentTarget: a.thatReturnsNull,
      eventPhase: null,
      bubbles: null,
      cancelable: null,
      timeStamp: function ( e ) {
        return e.timeStamp || Date.now()
      },
      defaultPrevented: null,
      isTrusted: null
    };
  o( r.prototype, {
    preventDefault: function () {
      this.defaultPrevented = !0;
      var e = this.nativeEvent;
      e && ( e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && ( e.returnValue = !1 ), this.isDefaultPrevented = a.thatReturnsTrue )
    },
    stopPropagation: function () {
      var e = this.nativeEvent;
      e && ( e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && ( e.cancelBubble = !0 ), this.isPropagationStopped = a.thatReturnsTrue )
    },
    persist: function () {
      this.isPersistent = a.thatReturnsTrue
    },
    isPersistent: a.thatReturnsFalse,
    destructor: function () {
      var e = this.constructor.Interface;
      for ( var t in e ) this[ t ] = null;
      for ( var n = 0; n < s.length; n++ ) this[ s[ n ] ] = null
    }
  } ), r.Interface = l, r.augmentClass = function ( e, t ) {
    var n = this,
      r = function () {};
    r.prototype = n.prototype;
    var a = new r;
    o( a, e.prototype ), e.prototype = a, e.prototype.constructor = e, e.Interface = o( {}, n.Interface, t ), e.augmentClass = n.augmentClass, i.addPoolingTo( e, i.fourArgumentPooler )
  }, i.addPoolingTo( r, i.fourArgumentPooler ), e.exports = r
}, function ( e, t, n ) {
  "use strict";

  function r( e, t, n, r ) {
    return o.call( this, e, t, n, r )
  }
  var o = n( 253 ),
    i = {
      data: null
    };
  o.augmentClass( r, i ), e.exports = r
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    var t = e.nodeName && e.nodeName.toLowerCase();
    return "select" === t || "input" === t && "file" === e.type
  }

  function o( e ) {
    var t = C.getPooled( T.change, M, e, k( e ) );
    b.accumulateTwoPhaseDispatches( t ), _.batchedUpdates( i, t )
  }

  function i( e ) {
    y.enqueueEvents( e ), y.processEventQueue( !1 )
  }

  function a( e, t ) {
    A = e, M = t, A.attachEvent( "onchange", o )
  }

  function s() {
    A && ( A.detachEvent( "onchange", o ), A = null, M = null )
  }

  function l( e, t ) {
    if ( "topChange" === e ) return t
  }

  function u( e, t, n ) {
    "topFocus" === e ? ( s(), a( t, n ) ) : "topBlur" === e && s()
  }

  function c( e, t ) {
    A = e, M = t, O = e.value, N = Object.getOwnPropertyDescriptor( e.constructor.prototype, "value" ), Object.defineProperty( A, "value", L ), A.attachEvent ? A.attachEvent( "onpropertychange", p ) : A.addEventListener( "propertychange", p, !1 )
  }

  function f() {
    A && ( delete A.value, A.detachEvent ? A.detachEvent( "onpropertychange", p ) : A.removeEventListener( "propertychange", p, !1 ), A = null, M = null, O = null, N = null )
  }

  function p( e ) {
    if ( "value" === e.propertyName ) {
      var t = e.srcElement.value;
      t !== O && ( O = t, o( e ) )
    }
  }

  function d( e, t ) {
    if ( "topInput" === e ) return t
  }

  function h( e, t, n ) {
    "topFocus" === e ? ( f(), c( t, n ) ) : "topBlur" === e && f()
  }

  function v( e, t ) {
    if ( ( "topSelectionChange" === e || "topKeyUp" === e || "topKeyDown" === e ) && A && A.value !== O ) return O = A.value, M
  }

  function g( e ) {
    return e.nodeName && "input" === e.nodeName.toLowerCase() && ( "checkbox" === e.type || "radio" === e.type )
  }

  function m( e, t ) {
    if ( "topClick" === e ) return t
  }
  var y = n( 242 ),
    b = n( 241 ),
    x = n( 248 ),
    w = n( 234 ),
    _ = n( 256 ),
    C = n( 253 ),
    k = n( 264 ),
    E = n( 265 ),
    S = n( 266 ),
    T = {
      change: {
        phasedRegistrationNames: {
          bubbled: "onChange",
          captured: "onChangeCapture"
        },
        dependencies: [ "topBlur", "topChange", "topClick", "topFocus", "topInput", "topKeyDown", "topKeyUp", "topSelectionChange" ]
      }
    },
    A = null,
    M = null,
    O = null,
    N = null,
    P = !1;
  x.canUseDOM && ( P = E( "change" ) && ( !document.documentMode || document.documentMode > 8 ) );
  var D = !1;
  x.canUseDOM && ( D = E( "input" ) && ( !document.documentMode || document.documentMode > 11 ) );
  var L = {
      get: function () {
        return N.get.call( this )
      },
      set: function ( e ) {
        O = "" + e, N.set.call( this, e )
      }
    },
    I = {
      eventTypes: T,
      extractEvents: function ( e, t, n, o ) {
        var i, a, s = t ? w.getNodeFromInstance( t ) : window;
        if ( r( s ) ? P ? i = l : a = u : S( s ) ? D ? i = d : ( i = v, a = h ) : g( s ) && ( i = m ), i ) {
          var c = i( e, t );
          if ( c ) {
            var f = C.getPooled( T.change, c, n, o );
            return f.type = "change", b.accumulateTwoPhaseDispatches( f ), f
          }
        }
        a && a( e, s, t )
      }
    };
  e.exports = I
}, function ( e, t, n ) {
  "use strict";

  function r() {
    T.ReactReconcileTransaction && w ? void 0 : c( "123" )
  }

  function o() {
    this.reinitializeTransaction(), this.dirtyComponentsLength = null, this.callbackQueue = p.getPooled(), this.reconcileTransaction = T.ReactReconcileTransaction.getPooled( !0 )
  }

  function i( e, t, n, o, i, a ) {
    return r(), w.batchedUpdates( e, t, n, o, i, a )
  }

  function a( e, t ) {
    return e._mountOrder - t._mountOrder
  }

  function s( e ) {
    var t = e.dirtyComponentsLength;
    t !== m.length ? c( "124", t, m.length ) : void 0, m.sort( a ), y++;
    for ( var n = 0; n < t; n++ ) {
      var r = m[ n ],
        o = r._pendingCallbacks;
      r._pendingCallbacks = null;
      var i;
      if ( h.logTopLevelRenders ) {
        var s = r;
        r._currentElement.type.isReactTopLevelWrapper && ( s = r._renderedComponent ), i = "React update: " + s.getName(), console.time( i )
      }
      if ( v.performUpdateIfNecessary( r, e.reconcileTransaction, y ), i && console.timeEnd( i ), o )
        for ( var l = 0; l < o.length; l++ ) e.callbackQueue.enqueue( o[ l ], r.getPublicInstance() )
    }
  }

  function l( e ) {
    return r(), w.isBatchingUpdates ? ( m.push( e ), void( null == e._updateBatchNumber && ( e._updateBatchNumber = y + 1 ) ) ) : void w.batchedUpdates( l, e )
  }

  function u( e, t ) {
    w.isBatchingUpdates ? void 0 : c( "125" ), b.enqueue( e, t ), x = !0
  }
  var c = n( 235 ),
    f = n( 98 ),
    p = n( 257 ),
    d = n( 250 ),
    h = n( 258 ),
    v = n( 259 ),
    g = n( 263 ),
    m = ( n( 102 ), [] ),
    y = 0,
    b = p.getPooled(),
    x = !1,
    w = null,
    _ = {
      initialize: function () {
        this.dirtyComponentsLength = m.length
      },
      close: function () {
        this.dirtyComponentsLength !== m.length ? ( m.splice( 0, this.dirtyComponentsLength ), E() ) : m.length = 0
      }
    },
    C = {
      initialize: function () {
        this.callbackQueue.reset()
      },
      close: function () {
        this.callbackQueue.notifyAll()
      }
    },
    k = [ _, C ];
  f( o.prototype, g, {
    getTransactionWrappers: function () {
      return k
    },
    destructor: function () {
      this.dirtyComponentsLength = null, p.release( this.callbackQueue ), this.callbackQueue = null, T.ReactReconcileTransaction.release( this.reconcileTransaction ), this.reconcileTransaction = null
    },
    perform: function ( e, t, n ) {
      return g.perform.call( this, this.reconcileTransaction.perform, this.reconcileTransaction, e, t, n )
    }
  } ), d.addPoolingTo( o );
  var E = function () {
      for ( ; m.length || x; ) {
        if ( m.length ) {
          var e = o.getPooled();
          e.perform( s, null, e ), o.release( e )
        }
        if ( x ) {
          x = !1;
          var t = b;
          b = p.getPooled(), t.notifyAll(), p.release( t )
        }
      }
    },
    S = {
      injectReconcileTransaction: function ( e ) {
        e ? void 0 : c( "126" ), T.ReactReconcileTransaction = e
      },
      injectBatchingStrategy: function ( e ) {
        e ? void 0 : c( "127" ), "function" != typeof e.batchedUpdates ? c( "128" ) : void 0, "boolean" != typeof e.isBatchingUpdates ? c( "129" ) : void 0, w = e
      }
    },
    T = {
      ReactReconcileTransaction: null,
      batchedUpdates: i,
      enqueueUpdate: l,
      flushBatchedUpdates: E,
      injection: S,
      asap: u
    };
  e.exports = T
}, function ( e, t, n ) {
  "use strict";

  function r( e, t ) {
    if ( !( e instanceof t ) ) throw new TypeError( "Cannot call a class as a function" )
  }
  var o = n( 235 ),
    i = n( 250 ),
    a = ( n( 102 ), function () {
      function e( t ) {
        r( this, e ), this._callbacks = null, this._contexts = null, this._arg = t
      }
      return e.prototype.enqueue = function ( e, t ) {
        this._callbacks = this._callbacks || [], this._callbacks.push( e ), this._contexts = this._contexts || [], this._contexts.push( t )
      }, e.prototype.notifyAll = function () {
        var e = this._callbacks,
          t = this._contexts,
          n = this._arg;
        if ( e && t ) {
          e.length !== t.length ? o( "24" ) : void 0, this._callbacks = null, this._contexts = null;
          for ( var r = 0; r < e.length; r++ ) e[ r ].call( t[ r ], n );
          e.length = 0, t.length = 0
        }
      }, e.prototype.checkpoint = function () {
        return this._callbacks ? this._callbacks.length : 0
      }, e.prototype.rollback = function ( e ) {
        this._callbacks && this._contexts && ( this._callbacks.length = e, this._contexts.length = e )
      }, e.prototype.reset = function () {
        this._callbacks = null, this._contexts = null
      }, e.prototype.destructor = function () {
        this.reset()
      }, e
    }() );
  e.exports = i.addPoolingTo( a )
}, function ( e, t ) {
  "use strict";
  var n = {
    logTopLevelRenders: !1
  };
  e.exports = n
}, function ( e, t, n ) {
  "use strict";

  function r() {
    o.attachRefs( this, this._currentElement )
  }
  var o = n( 260 ),
    i = ( n( 262 ), n( 105 ), {
      mountComponent: function ( e, t, n, o, i, a ) {
        var s = e.mountComponent( t, n, o, i, a );
        return e._currentElement && null != e._currentElement.ref && t.getReactMountReady().enqueue( r, e ), s
      },
      getHostNode: function ( e ) {
        return e.getHostNode()
      },
      unmountComponent: function ( e, t ) {
        o.detachRefs( e, e._currentElement ), e.unmountComponent( t )
      },
      receiveComponent: function ( e, t, n, i ) {
        var a = e._currentElement;
        if ( t !== a || i !== e._context ) {
          var s = o.shouldUpdateRefs( a, t );
          s && o.detachRefs( e, a ), e.receiveComponent( t, n, i ), s && e._currentElement && null != e._currentElement.ref && n.getReactMountReady().enqueue( r, e )
        }
      },
      performUpdateIfNecessary: function ( e, t, n ) {
        e._updateBatchNumber === n && e.performUpdateIfNecessary( t )
      }
    } );
  e.exports = i
}, function ( e, t, n ) {
  "use strict";

  function r( e, t, n ) {
    "function" == typeof e ? e( t.getPublicInstance() ) : i.addComponentAsRefTo( t, e, n )
  }

  function o( e, t, n ) {
    "function" == typeof e ? e( null ) : i.removeComponentAsRefFrom( t, e, n )
  }
  var i = n( 261 ),
    a = {};
  a.attachRefs = function ( e, t ) {
    if ( null !== t && "object" == typeof t ) {
      var n = t.ref;
      null != n && r( n, e, t._owner )
    }
  }, a.shouldUpdateRefs = function ( e, t ) {
    var n = null,
      r = null;
    null !== e && "object" == typeof e && ( n = e.ref, r = e._owner );
    var o = null,
      i = null;
    return null !== t && "object" == typeof t && ( o = t.ref, i = t._owner ), n !== o || "string" == typeof o && i !== r
  }, a.detachRefs = function ( e, t ) {
    if ( null !== t && "object" == typeof t ) {
      var n = t.ref;
      null != n && o( n, e, t._owner )
    }
  }, e.exports = a
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    return !( !e || "function" != typeof e.attachRef || "function" != typeof e.detachRef )
  }
  var o = n( 235 ),
    i = ( n( 102 ), {
      addComponentAsRefTo: function ( e, t, n ) {
        r( n ) ? void 0 : o( "119" ), n.attachRef( t, e )
      },
      removeComponentAsRefFrom: function ( e, t, n ) {
        r( n ) ? void 0 : o( "120" );
        var i = n.getPublicInstance();
        i && i.refs[ t ] === e.getPublicInstance() && n.detachRef( t )
      }
    } );
  e.exports = i
}, function ( e, t, n ) {
  "use strict";
  var r = null;
  e.exports = {
    debugTool: r
  }
}, function ( e, t, n ) {
  "use strict";
  var r = n( 235 ),
    o = ( n( 102 ), {} ),
    i = {
      reinitializeTransaction: function () {
        this.transactionWrappers = this.getTransactionWrappers(), this.wrapperInitData ? this.wrapperInitData.length = 0 : this.wrapperInitData = [], this._isInTransaction = !1
      },
      _isInTransaction: !1,
      getTransactionWrappers: null,
      isInTransaction: function () {
        return !!this._isInTransaction
      },
      perform: function ( e, t, n, o, i, a, s, l ) {
        this.isInTransaction() ? r( "27" ) : void 0;
        var u, c;
        try {
          this._isInTransaction = !0, u = !0, this.initializeAll( 0 ), c = e.call( t, n, o, i, a, s, l ), u = !1
        } finally {
          try {
            if ( u ) try {
              this.closeAll( 0 )
            } catch ( e ) {} else this.closeAll( 0 )
          } finally {
            this._isInTransaction = !1
          }
        }
        return c
      },
      initializeAll: function ( e ) {
        for ( var t = this.transactionWrappers, n = e; n < t.length; n++ ) {
          var r = t[ n ];
          try {
            this.wrapperInitData[ n ] = o, this.wrapperInitData[ n ] = r.initialize ? r.initialize.call( this ) : null
          } finally {
            if ( this.wrapperInitData[ n ] === o ) try {
              this.initializeAll( n + 1 )
            } catch ( e ) {}
          }
        }
      },
      closeAll: function ( e ) {
        this.isInTransaction() ? void 0 : r( "28" );
        for ( var t = this.transactionWrappers, n = e; n < t.length; n++ ) {
          var i, a = t[ n ],
            s = this.wrapperInitData[ n ];
          try {
            i = !0, s !== o && a.close && a.close.call( this, s ), i = !1
          } finally {
            if ( i ) try {
              this.closeAll( n + 1 )
            } catch ( e ) {}
          }
        }
        this.wrapperInitData.length = 0
      }
    };
  e.exports = i
}, function ( e, t ) {
  "use strict";

  function n( e ) {
    var t = e.target || e.srcElement || window;
    return t.correspondingUseElement && ( t = t.correspondingUseElement ), 3 === t.nodeType ? t.parentNode : t
  }
  e.exports = n
}, function ( e, t, n ) {
  "use strict";
  /**
   * Checks if an event is supported in the current execution environment.
   *
   * NOTE: This will not work correctly for non-generic events such as `change`,
   * `reset`, `load`, `error`, and `select`.
   *
   * Borrows from Modernizr.
   *
   * @param {string} eventNameSuffix Event name, e.g. "click".
   * @param {?boolean} capture Check if the capture phase is supported.
   * @return {boolean} True if the event is supported.
   * @internal
   * @license Modernizr 3.0.0pre (Custom Build) | MIT
   */
  function r( e, t ) {
    if ( !i.canUseDOM || t && !( "addEventListener" in document ) ) return !1;
    var n = "on" + e,
      r = n in document;
    if ( !r ) {
      var a = document.createElement( "div" );
      a.setAttribute( n, "return;" ), r = "function" == typeof a[ n ]
    }
    return !r && o && "wheel" === e && ( r = document.implementation.hasFeature( "Events.wheel", "3.0" ) ), r
  }
  var o, i = n( 248 );
  i.canUseDOM && ( o = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature( "", "" ) !== !0 ), e.exports = r
}, function ( e, t ) {
  "use strict";

  function n( e ) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return "input" === t ? !!r[ e.type ] : "textarea" === t
  }
  var r = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  e.exports = n
}, function ( e, t ) {
  "use strict";
  var n = [ "ResponderEventPlugin", "SimpleEventPlugin", "TapEventPlugin", "EnterLeaveEventPlugin", "ChangeEventPlugin", "SelectEventPlugin", "BeforeInputEventPlugin" ];
  e.exports = n
}, function ( e, t, n ) {
  "use strict";
  var r = n( 241 ),
    o = n( 234 ),
    i = n( 269 ),
    a = {
      mouseEnter: {
        registrationName: "onMouseEnter",
        dependencies: [ "topMouseOut", "topMouseOver" ]
      },
      mouseLeave: {
        registrationName: "onMouseLeave",
        dependencies: [ "topMouseOut", "topMouseOver" ]
      }
    },
    s = {
      eventTypes: a,
      extractEvents: function ( e, t, n, s ) {
        if ( "topMouseOver" === e && ( n.relatedTarget || n.fromElement ) ) return null;
        if ( "topMouseOut" !== e && "topMouseOver" !== e ) return null;
        var l;
        if ( s.window === s ) l = s;
        else {
          var u = s.ownerDocument;
          l = u ? u.defaultView || u.parentWindow : window
        }
        var c, f;
        if ( "topMouseOut" === e ) {
          c = t;
          var p = n.relatedTarget || n.toElement;
          f = p ? o.getClosestInstanceFromNode( p ) : null
        } else c = null, f = t;
        if ( c === f ) return null;
        var d = null == c ? l : o.getNodeFromInstance( c ),
          h = null == f ? l : o.getNodeFromInstance( f ),
          v = i.getPooled( a.mouseLeave, c, n, s );
        v.type = "mouseleave", v.target = d, v.relatedTarget = h;
        var g = i.getPooled( a.mouseEnter, f, n, s );
        return g.type = "mouseenter", g.target = h, g.relatedTarget = d, r.accumulateEnterLeaveDispatches( v, g, c, f ), [ v, g ]
      }
    };
  e.exports = s
}, function ( e, t, n ) {
  "use strict";

  function r( e, t, n, r ) {
    return o.call( this, e, t, n, r )
  }
  var o = n( 270 ),
    i = n( 271 ),
    a = n( 272 ),
    s = {
      screenX: null,
      screenY: null,
      clientX: null,
      clientY: null,
      ctrlKey: null,
      shiftKey: null,
      altKey: null,
      metaKey: null,
      getModifierState: a,
      button: function ( e ) {
        var t = e.button;
        return "which" in e ? t : 2 === t ? 2 : 4 === t ? 1 : 0
      },
      buttons: null,
      relatedTarget: function ( e ) {
        return e.relatedTarget || ( e.fromElement === e.srcElement ? e.toElement : e.fromElement )
      },
      pageX: function ( e ) {
        return "pageX" in e ? e.pageX : e.clientX + i.currentScrollLeft
      },
      pageY: function ( e ) {
        return "pageY" in e ? e.pageY : e.clientY + i.currentScrollTop
      }
    };
  o.augmentClass( r, s ), e.exports = r
}, function ( e, t, n ) {
  "use strict";

  function r( e, t, n, r ) {
    return o.call( this, e, t, n, r )
  }
  var o = n( 253 ),
    i = n( 264 ),
    a = {
      view: function ( e ) {
        if ( e.view ) return e.view;
        var t = i( e );
        if ( t.window === t ) return t;
        var n = t.ownerDocument;
        return n ? n.defaultView || n.parentWindow : window
      },
      detail: function ( e ) {
        return e.detail || 0
      }
    };
  o.augmentClass( r, a ), e.exports = r
}, function ( e, t ) {
  "use strict";
  var n = {
    currentScrollLeft: 0,
    currentScrollTop: 0,
    refreshScrollValues: function ( e ) {
      n.currentScrollLeft = e.x, n.currentScrollTop = e.y
    }
  };
  e.exports = n
}, function ( e, t ) {
  "use strict";

  function n( e ) {
    var t = this,
      n = t.nativeEvent;
    if ( n.getModifierState ) return n.getModifierState( e );
    var r = o[ e ];
    return !!r && !!n[ r ]
  }

  function r( e ) {
    return n
  }
  var o = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  e.exports = r
}, function ( e, t, n ) {
  "use strict";
  var r = n( 236 ),
    o = r.injection.MUST_USE_PROPERTY,
    i = r.injection.HAS_BOOLEAN_VALUE,
    a = r.injection.HAS_NUMERIC_VALUE,
    s = r.injection.HAS_POSITIVE_NUMERIC_VALUE,
    l = r.injection.HAS_OVERLOADED_BOOLEAN_VALUE,
    u = {
      isCustomAttribute: RegExp.prototype.test.bind( new RegExp( "^(data|aria)-[" + r.ATTRIBUTE_NAME_CHAR + "]*$" ) ),
      Properties: {
        accept: 0,
        acceptCharset: 0,
        accessKey: 0,
        action: 0,
        allowFullScreen: i,
        allowTransparency: 0,
        alt: 0,
        as: 0,
        async: i,
        autoComplete: 0,
        autoPlay: i,
        capture: i,
        cellPadding: 0,
        cellSpacing: 0,
        charSet: 0,
        challenge: 0,
        checked: o | i,
        cite: 0,
        classID: 0,
        className: 0,
        cols: s,
        colSpan: 0,
        content: 0,
        contentEditable: 0,
        contextMenu: 0,
        controls: i,
        coords: 0,
        crossOrigin: 0,
        data: 0,
        dateTime: 0,
        default: i,
        defer: i,
        dir: 0,
        disabled: i,
        download: l,
        draggable: 0,
        encType: 0,
        form: 0,
        formAction: 0,
        formEncType: 0,
        formMethod: 0,
        formNoValidate: i,
        formTarget: 0,
        frameBorder: 0,
        headers: 0,
        height: 0,
        hidden: i,
        high: 0,
        href: 0,
        hrefLang: 0,
        htmlFor: 0,
        httpEquiv: 0,
        icon: 0,
        id: 0,
        inputMode: 0,
        integrity: 0,
        is: 0,
        keyParams: 0,
        keyType: 0,
        kind: 0,
        label: 0,
        lang: 0,
        list: 0,
        loop: i,
        low: 0,
        manifest: 0,
        marginHeight: 0,
        marginWidth: 0,
        max: 0,
        maxLength: 0,
        media: 0,
        mediaGroup: 0,
        method: 0,
        min: 0,
        minLength: 0,
        multiple: o | i,
        muted: o | i,
        name: 0,
        nonce: 0,
        noValidate: i,
        open: i,
        optimum: 0,
        pattern: 0,
        placeholder: 0,
        playsInline: i,
        poster: 0,
        preload: 0,
        profile: 0,
        radioGroup: 0,
        readOnly: i,
        referrerPolicy: 0,
        rel: 0,
        required: i,
        reversed: i,
        role: 0,
        rows: s,
        rowSpan: a,
        sandbox: 0,
        scope: 0,
        scoped: i,
        scrolling: 0,
        seamless: i,
        selected: o | i,
        shape: 0,
        size: s,
        sizes: 0,
        span: s,
        spellCheck: 0,
        src: 0,
        srcDoc: 0,
        srcLang: 0,
        srcSet: 0,
        start: a,
        step: 0,
        style: 0,
        summary: 0,
        tabIndex: 0,
        target: 0,
        title: 0,
        type: 0,
        useMap: 0,
        value: 0,
        width: 0,
        wmode: 0,
        wrap: 0,
        about: 0,
        datatype: 0,
        inlist: 0,
        prefix: 0,
        property: 0,
        resource: 0,
        typeof: 0,
        vocab: 0,
        autoCapitalize: 0,
        autoCorrect: 0,
        autoSave: 0,
        color: 0,
        itemProp: 0,
        itemScope: i,
        itemType: 0,
        itemID: 0,
        itemRef: 0,
        results: 0,
        security: 0,
        unselectable: 0
      },
      DOMAttributeNames: {
        acceptCharset: "accept-charset",
        className: "class",
        htmlFor: "for",
        httpEquiv: "http-equiv"
      },
      DOMPropertyNames: {}
    };
  e.exports = u
}, function ( e, t, n ) {
  "use strict";
  var r = n( 275 ),
    o = n( 286 ),
    i = {
      processChildrenUpdates: o.dangerouslyProcessChildrenUpdates,
      replaceNodeWithMarkup: r.dangerouslyReplaceNodeWithMarkup
    };
  e.exports = i
}, function ( e, t, n ) {
  "use strict";

  function r( e, t ) {
    return Array.isArray( t ) && ( t = t[ 1 ] ), t ? t.nextSibling : e.firstChild
  }

  function o( e, t, n ) {
    c.insertTreeBefore( e, t, n )
  }

  function i( e, t, n ) {
    Array.isArray( t ) ? s( e, t[ 0 ], t[ 1 ], n ) : v( e, t, n )
  }

  function a( e, t ) {
    if ( Array.isArray( t ) ) {
      var n = t[ 1 ];
      t = t[ 0 ], l( e, t, n ), e.removeChild( n )
    }
    e.removeChild( t )
  }

  function s( e, t, n, r ) {
    for ( var o = t;; ) {
      var i = o.nextSibling;
      if ( v( e, o, r ), o === n ) break;
      o = i
    }
  }

  function l( e, t, n ) {
    for ( ;; ) {
      var r = t.nextSibling;
      if ( r === n ) break;
      e.removeChild( r )
    }
  }

  function u( e, t, n ) {
    var r = e.parentNode,
      o = e.nextSibling;
    o === t ? n && v( r, document.createTextNode( n ), o ) : n ? ( h( o, n ), l( r, o, t ) ) : l( r, e, t )
  }
  var c = n( 276 ),
    f = n( 282 ),
    p = ( n( 234 ), n( 262 ), n( 279 ) ),
    d = n( 278 ),
    h = n( 280 ),
    v = p( function ( e, t, n ) {
      e.insertBefore( t, n )
    } ),
    g = f.dangerouslyReplaceNodeWithMarkup,
    m = {
      dangerouslyReplaceNodeWithMarkup: g,
      replaceDelimitedText: u,
      processUpdates: function ( e, t ) {
        for ( var n = 0; n < t.length; n++ ) {
          var s = t[ n ];
          switch ( s.type ) {
            case "INSERT_MARKUP":
              o( e, s.content, r( e, s.afterNode ) );
              break;
            case "MOVE_EXISTING":
              i( e, s.fromNode, r( e, s.afterNode ) );
              break;
            case "SET_MARKUP":
              d( e, s.content );
              break;
            case "TEXT_CONTENT":
              h( e, s.content );
              break;
            case "REMOVE_NODE":
              a( e, s.fromNode )
          }
        }
      }
    };
  e.exports = m
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    if ( g ) {
      var t = e.node,
        n = e.children;
      if ( n.length )
        for ( var r = 0; r < n.length; r++ ) m( t, n[ r ], null );
      else null != e.html ? f( t, e.html ) : null != e.text && d( t, e.text )
    }
  }

  function o( e, t ) {
    e.parentNode.replaceChild( t.node, e ), r( t )
  }

  function i( e, t ) {
    g ? e.children.push( t ) : e.node.appendChild( t.node )
  }

  function a( e, t ) {
    g ? e.html = t : f( e.node, t )
  }

  function s( e, t ) {
    g ? e.text = t : d( e.node, t )
  }

  function l() {
    return this.node.nodeName
  }

  function u( e ) {
    return {
      node: e,
      children: [],
      html: null,
      text: null,
      toString: l
    }
  }
  var c = n( 277 ),
    f = n( 278 ),
    p = n( 279 ),
    d = n( 280 ),
    h = 1,
    v = 11,
    g = "undefined" != typeof document && "number" == typeof document.documentMode || "undefined" != typeof navigator && "string" == typeof navigator.userAgent && /\bEdge\/\d/.test( navigator.userAgent ),
    m = p( function ( e, t, n ) {
      t.node.nodeType === v || t.node.nodeType === h && "object" === t.node.nodeName.toLowerCase() && ( null == t.node.namespaceURI || t.node.namespaceURI === c.html ) ? ( r( t ), e.insertBefore( t.node, n ) ) : ( e.insertBefore( t.node, n ), r( t ) )
    } );
  u.insertTreeBefore = m, u.replaceChildWithTree = o, u.queueChild = i, u.queueHTML = a, u.queueText = s, e.exports = u
}, function ( e, t ) {
  "use strict";
  var n = {
    html: "http://www.w3.org/1999/xhtml",
    mathml: "http://www.w3.org/1998/Math/MathML",
    svg: "http://www.w3.org/2000/svg"
  };
  e.exports = n
}, function ( e, t, n ) {
  "use strict";
  var r, o = n( 248 ),
    i = n( 277 ),
    a = /^[ \r\n\t\f]/,
    s = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/,
    l = n( 279 ),
    u = l( function ( e, t ) {
      if ( e.namespaceURI !== i.svg || "innerHTML" in e ) e.innerHTML = t;
      else {
        r = r || document.createElement( "div" ), r.innerHTML = "<svg>" + t + "</svg>";
        for ( var n = r.firstChild; n.firstChild; ) e.appendChild( n.firstChild )
      }
    } );
  if ( o.canUseDOM ) {
    var c = document.createElement( "div" );
    c.innerHTML = " ", "" === c.innerHTML && ( u = function ( e, t ) {
      if ( e.parentNode && e.parentNode.replaceChild( e, e ), a.test( t ) || "<" === t[ 0 ] && s.test( t ) ) {
        e.innerHTML = String.fromCharCode( 65279 ) + t;
        var n = e.firstChild;
        1 === n.data.length ? e.removeChild( n ) : n.deleteData( 0, 1 )
      } else e.innerHTML = t
    } ), c = null
  }
  e.exports = u
}, function ( e, t ) {
  "use strict";
  var n = function ( e ) {
    return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function ( t, n, r, o ) {
      MSApp.execUnsafeLocalFunction( function () {
        return e( t, n, r, o )
      } )
    } : e
  };
  e.exports = n
}, function ( e, t, n ) {
  "use strict";
  var r = n( 248 ),
    o = n( 281 ),
    i = n( 278 ),
    a = function ( e, t ) {
      if ( t ) {
        var n = e.firstChild;
        if ( n && n === e.lastChild && 3 === n.nodeType ) return void( n.nodeValue = t )
      }
      e.textContent = t
    };
  r.canUseDOM && ( "textContent" in document.documentElement || ( a = function ( e, t ) {
    return 3 === e.nodeType ? void( e.nodeValue = t ) : void i( e, o( t ) )
  } ) ), e.exports = a
}, function ( e, t ) {
  "use strict";

  function n( e ) {
    var t = "" + e,
      n = o.exec( t );
    if ( !n ) return t;
    var r, i = "",
      a = 0,
      s = 0;
    for ( a = n.index; a < t.length; a++ ) {
      switch ( t.charCodeAt( a ) ) {
        case 34:
          r = "&quot;";
          break;
        case 38:
          r = "&amp;";
          break;
        case 39:
          r = "&#x27;";
          break;
        case 60:
          r = "&lt;";
          break;
        case 62:
          r = "&gt;";
          break;
        default:
          continue
      }
      s !== a && ( i += t.substring( s, a ) ), s = a + 1, i += r
    }
    return s !== a ? i + t.substring( s, a ) : i
  }

  function r( e ) {
    return "boolean" == typeof e || "number" == typeof e ? "" + e : n( e )
  }
  var o = /["'&<>]/;
  e.exports = r
}, function ( e, t, n ) {
  "use strict";
  var r = n( 235 ),
    o = n( 276 ),
    i = n( 248 ),
    a = n( 283 ),
    s = n( 106 ),
    l = ( n( 102 ), {
      dangerouslyReplaceNodeWithMarkup: function ( e, t ) {
        if ( i.canUseDOM ? void 0 : r( "56" ), t ? void 0 : r( "57" ), "HTML" === e.nodeName ? r( "58" ) : void 0, "string" == typeof t ) {
          var n = a( t, s )[ 0 ];
          e.parentNode.replaceChild( n, e )
        } else o.replaceChildWithTree( e, t )
      }
    } );
  e.exports = l
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    var t = e.match( c );
    return t && t[ 1 ].toLowerCase()
  }

  function o( e, t ) {
    var n = u;
    u ? void 0 : l( !1 );
    var o = r( e ),
      i = o && s( o );
    if ( i ) {
      n.innerHTML = i[ 1 ] + e + i[ 2 ];
      for ( var c = i[ 0 ]; c--; ) n = n.lastChild
    } else n.innerHTML = e;
    var f = n.getElementsByTagName( "script" );
    f.length && ( t ? void 0 : l( !1 ), a( f ).forEach( t ) );
    for ( var p = Array.from( n.childNodes ); n.lastChild; ) n.removeChild( n.lastChild );
    return p
  }
  var i = n( 248 ),
    a = n( 284 ),
    s = n( 285 ),
    l = n( 102 ),
    u = i.canUseDOM ? document.createElement( "div" ) : null,
    c = /^\s*<(\w+)/;
  e.exports = o
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    var t = e.length;
    if ( Array.isArray( e ) || "object" != typeof e && "function" != typeof e ? a( !1 ) : void 0, "number" != typeof t ? a( !1 ) : void 0, 0 === t || t - 1 in e ? void 0 : a( !1 ), "function" == typeof e.callee ? a( !1 ) : void 0, e.hasOwnProperty ) try {
      return Array.prototype.slice.call( e )
    } catch ( e ) {}
    for ( var n = Array( t ), r = 0; r < t; r++ ) n[ r ] = e[ r ];
    return n
  }

  function o( e ) {
    return !!e && ( "object" == typeof e || "function" == typeof e ) && "length" in e && !( "setInterval" in e ) && "number" != typeof e.nodeType && ( Array.isArray( e ) || "callee" in e || "item" in e )
  }

  function i( e ) {
    return o( e ) ? Array.isArray( e ) ? e.slice() : r( e ) : [ e ]
  }
  var a = n( 102 );
  e.exports = i
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    return a ? void 0 : i( !1 ), p.hasOwnProperty( e ) || ( e = "*" ), s.hasOwnProperty( e ) || ( "*" === e ? a.innerHTML = "<link />" : a.innerHTML = "<" + e + "></" + e + ">", s[ e ] = !a.firstChild ), s[ e ] ? p[ e ] : null
  }
  var o = n( 248 ),
    i = n( 102 ),
    a = o.canUseDOM ? document.createElement( "div" ) : null,
    s = {},
    l = [ 1, '<select multiple="true">', "</select>" ],
    u = [ 1, "<table>", "</table>" ],
    c = [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
    f = [ 1, '<svg xmlns="http://www.w3.org/2000/svg">', "</svg>" ],
    p = {
      "*": [ 1, "?<div>", "</div>" ],
      area: [ 1, "<map>", "</map>" ],
      col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
      legend: [ 1, "<fieldset>", "</fieldset>" ],
      param: [ 1, "<object>", "</object>" ],
      tr: [ 2, "<table><tbody>", "</tbody></table>" ],
      optgroup: l,
      option: l,
      caption: u,
      colgroup: u,
      tbody: u,
      tfoot: u,
      thead: u,
      td: c,
      th: c
    },
    d = [ "circle", "clipPath", "defs", "ellipse", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "text", "tspan" ];
  d.forEach( function ( e ) {
    p[ e ] = f, s[ e ] = !0
  } ), e.exports = r
}, function ( e, t, n ) {
  "use strict";
  var r = n( 275 ),
    o = n( 234 ),
    i = {
      dangerouslyProcessChildrenUpdates: function ( e, t ) {
        var n = o.getNodeFromInstance( e );
        r.processUpdates( n, t )
      }
    };
  e.exports = i
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    if ( e ) {
      var t = e._currentElement._owner || null;
      if ( t ) {
        var n = t.getName();
        if ( n ) return " This DOM node was rendered by `" + n + "`."
      }
    }
    return ""
  }

  function o( e, t ) {
    t && ( K[ e._tag ] && ( null != t.children || null != t.dangerouslySetInnerHTML ? v( "137", e._tag, e._currentElement._owner ? " Check the render method of " + e._currentElement._owner.getName() + "." : "" ) : void 0 ), null != t.dangerouslySetInnerHTML && ( null != t.children ? v( "60" ) : void 0, "object" == typeof t.dangerouslySetInnerHTML && q in t.dangerouslySetInnerHTML ? void 0 : v( "61" ) ), null != t.style && "object" != typeof t.style ? v( "62", r( e ) ) : void 0 )
  }

  function i( e, t, n, r ) {
    if ( !( r instanceof D ) ) {
      var o = e._hostContainerInfo,
        i = o._node && o._node.nodeType === W,
        s = i ? o._node : o._ownerDocument;
      F( t, s ), r.getReactMountReady().enqueue( a, {
        inst: e,
        registrationName: t,
        listener: n
      } )
    }
  }

  function a() {
    var e = this;
    C.putListener( e.inst, e.registrationName, e.listener )
  }

  function s() {
    var e = this;
    A.postMountWrapper( e )
  }

  function l() {
    var e = this;
    N.postMountWrapper( e )
  }

  function u() {
    var e = this;
    M.postMountWrapper( e )
  }

  function c() {
    var e = this;
    e._rootNodeID ? void 0 : v( "63" );
    var t = j( e );
    switch ( t ? void 0 : v( "64" ), e._tag ) {
      case "iframe":
      case "object":
        e._wrapperState.listeners = [ E.trapBubbledEvent( "topLoad", "load", t ) ];
        break;
      case "video":
      case "audio":
        e._wrapperState.listeners = [];
        for ( var n in V ) V.hasOwnProperty( n ) && e._wrapperState.listeners.push( E.trapBubbledEvent( n, V[ n ], t ) );
        break;
      case "source":
        e._wrapperState.listeners = [ E.trapBubbledEvent( "topError", "error", t ) ];
        break;
      case "img":
        e._wrapperState.listeners = [ E.trapBubbledEvent( "topError", "error", t ), E.trapBubbledEvent( "topLoad", "load", t ) ];
        break;
      case "form":
        e._wrapperState.listeners = [ E.trapBubbledEvent( "topReset", "reset", t ), E.trapBubbledEvent( "topSubmit", "submit", t ) ];
        break;
      case "input":
      case "select":
      case "textarea":
        e._wrapperState.listeners = [ E.trapBubbledEvent( "topInvalid", "invalid", t ) ]
    }
  }

  function f() {
    O.postUpdateWrapper( this )
  }

  function p( e ) {
    X.call( J, e ) || ( $.test( e ) ? void 0 : v( "65", e ), J[ e ] = !0 )
  }

  function d( e, t ) {
    return e.indexOf( "-" ) >= 0 || null != t.is
  }

  function h( e ) {
    var t = e.type;
    p( t ), this._currentElement = e, this._tag = t.toLowerCase(), this._namespaceURI = null, this._renderedChildren = null, this._previousStyle = null, this._previousStyleCopy = null, this._hostNode = null, this._hostParent = null, this._rootNodeID = 0, this._domID = 0, this._hostContainerInfo = null, this._wrapperState = null, this._topLevelWrapper = null, this._flags = 0
  }
  var v = n( 235 ),
    g = n( 98 ),
    m = n( 288 ),
    y = n( 290 ),
    b = n( 276 ),
    x = n( 277 ),
    w = n( 236 ),
    _ = n( 298 ),
    C = n( 242 ),
    k = n( 243 ),
    E = n( 300 ),
    S = n( 237 ),
    T = n( 234 ),
    A = n( 303 ),
    M = n( 306 ),
    O = n( 307 ),
    N = n( 308 ),
    P = ( n( 262 ), n( 309 ) ),
    D = n( 328 ),
    L = ( n( 106 ), n( 281 ) ),
    I = ( n( 102 ), n( 265 ), n( 317 ), n( 331 ), n( 105 ), S ),
    R = C.deleteListener,
    j = T.getNodeFromInstance,
    F = E.listenTo,
    U = k.registrationNameModules,
    B = {
      string: !0,
      number: !0
    },
    z = "style",
    q = "__html",
    H = {
      children: null,
      dangerouslySetInnerHTML: null,
      suppressContentEditableWarning: null
    },
    W = 11,
    V = {
      topAbort: "abort",
      topCanPlay: "canplay",
      topCanPlayThrough: "canplaythrough",
      topDurationChange: "durationchange",
      topEmptied: "emptied",
      topEncrypted: "encrypted",
      topEnded: "ended",
      topError: "error",
      topLoadedData: "loadeddata",
      topLoadedMetadata: "loadedmetadata",
      topLoadStart: "loadstart",
      topPause: "pause",
      topPlay: "play",
      topPlaying: "playing",
      topProgress: "progress",
      topRateChange: "ratechange",
      topSeeked: "seeked",
      topSeeking: "seeking",
      topStalled: "stalled",
      topSuspend: "suspend",
      topTimeUpdate: "timeupdate",
      topVolumeChange: "volumechange",
      topWaiting: "waiting"
    },
    G = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
    },
    Y = {
      listing: !0,
      pre: !0,
      textarea: !0
    },
    K = g( {
      menuitem: !0
    }, G ),
    $ = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
    J = {},
    X = {}.hasOwnProperty,
    Z = 1;
  h.displayName = "ReactDOMComponent", h.Mixin = {
    mountComponent: function ( e, t, n, r ) {
      this._rootNodeID = Z++, this._domID = n._idCounter++, this._hostParent = t, this._hostContainerInfo = n;
      var i = this._currentElement.props;
      switch ( this._tag ) {
        case "audio":
        case "form":
        case "iframe":
        case "img":
        case "link":
        case "object":
        case "source":
        case "video":
          this._wrapperState = {
            listeners: null
          }, e.getReactMountReady().enqueue( c, this );
          break;
        case "input":
          A.mountWrapper( this, i, t ), i = A.getHostProps( this, i ), e.getReactMountReady().enqueue( c, this );
          break;
        case "option":
          M.mountWrapper( this, i, t ), i = M.getHostProps( this, i );
          break;
        case "select":
          O.mountWrapper( this, i, t ), i = O.getHostProps( this, i ), e.getReactMountReady().enqueue( c, this );
          break;
        case "textarea":
          N.mountWrapper( this, i, t ), i = N.getHostProps( this, i ), e.getReactMountReady().enqueue( c, this )
      }
      o( this, i );
      var a, f;
      null != t ? ( a = t._namespaceURI, f = t._tag ) : n._tag && ( a = n._namespaceURI, f = n._tag ), ( null == a || a === x.svg && "foreignobject" === f ) && ( a = x.html ), a === x.html && ( "svg" === this._tag ? a = x.svg : "math" === this._tag && ( a = x.mathml ) ), this._namespaceURI = a;
      var p;
      if ( e.useCreateElement ) {
        var d, h = n._ownerDocument;
        if ( a === x.html )
          if ( "script" === this._tag ) {
            var v = h.createElement( "div" ),
              g = this._currentElement.type;
            v.innerHTML = "<" + g + "></" + g + ">", d = v.removeChild( v.firstChild )
          } else d = i.is ? h.createElement( this._currentElement.type, i.is ) : h.createElement( this._currentElement.type );
        else d = h.createElementNS( a, this._currentElement.type );
        T.precacheNode( this, d ), this._flags |= I.hasCachedChildNodes, this._hostParent || _.setAttributeForRoot( d ), this._updateDOMProperties( null, i, e );
        var y = b( d );
        this._createInitialChildren( e, i, r, y ), p = y
      } else {
        var w = this._createOpenTagMarkupAndPutListeners( e, i ),
          C = this._createContentMarkup( e, i, r );
        p = !C && G[ this._tag ] ? w + "/>" : w + ">" + C + "</" + this._currentElement.type + ">"
      }
      switch ( this._tag ) {
        case "input":
          e.getReactMountReady().enqueue( s, this ), i.autoFocus && e.getReactMountReady().enqueue( m.focusDOMComponent, this );
          break;
        case "textarea":
          e.getReactMountReady().enqueue( l, this ), i.autoFocus && e.getReactMountReady().enqueue( m.focusDOMComponent, this );
          break;
        case "select":
          i.autoFocus && e.getReactMountReady().enqueue( m.focusDOMComponent, this );
          break;
        case "button":
          i.autoFocus && e.getReactMountReady().enqueue( m.focusDOMComponent, this );
          break;
        case "option":
          e.getReactMountReady().enqueue( u, this )
      }
      return p
    },
    _createOpenTagMarkupAndPutListeners: function ( e, t ) {
      var n = "<" + this._currentElement.type;
      for ( var r in t )
        if ( t.hasOwnProperty( r ) ) {
          var o = t[ r ];
          if ( null != o )
            if ( U.hasOwnProperty( r ) ) o && i( this, r, o, e );
            else {
              r === z && ( o && ( o = this._previousStyleCopy = g( {}, t.style ) ), o = y.createMarkupForStyles( o, this ) );
              var a = null;
              null != this._tag && d( this._tag, t ) ? H.hasOwnProperty( r ) || ( a = _.createMarkupForCustomAttribute( r, o ) ) : a = _.createMarkupForProperty( r, o ), a && ( n += " " + a )
            }
        } return e.renderToStaticMarkup ? n : ( this._hostParent || ( n += " " + _.createMarkupForRoot() ), n += " " + _.createMarkupForID( this._domID ) )
    },
    _createContentMarkup: function ( e, t, n ) {
      var r = "",
        o = t.dangerouslySetInnerHTML;
      if ( null != o ) null != o.__html && ( r = o.__html );
      else {
        var i = B[ typeof t.children ] ? t.children : null,
          a = null != i ? null : t.children;
        if ( null != i ) r = L( i );
        else if ( null != a ) {
          var s = this.mountChildren( a, e, n );
          r = s.join( "" )
        }
      }
      return Y[ this._tag ] && "\n" === r.charAt( 0 ) ? "\n" + r : r
    },
    _createInitialChildren: function ( e, t, n, r ) {
      var o = t.dangerouslySetInnerHTML;
      if ( null != o ) null != o.__html && b.queueHTML( r, o.__html );
      else {
        var i = B[ typeof t.children ] ? t.children : null,
          a = null != i ? null : t.children;
        if ( null != i ) "" !== i && b.queueText( r, i );
        else if ( null != a )
          for ( var s = this.mountChildren( a, e, n ), l = 0; l < s.length; l++ ) b.queueChild( r, s[ l ] )
      }
    },
    receiveComponent: function ( e, t, n ) {
      var r = this._currentElement;
      this._currentElement = e, this.updateComponent( t, r, e, n )
    },
    updateComponent: function ( e, t, n, r ) {
      var i = t.props,
        a = this._currentElement.props;
      switch ( this._tag ) {
        case "input":
          i = A.getHostProps( this, i ), a = A.getHostProps( this, a );
          break;
        case "option":
          i = M.getHostProps( this, i ), a = M.getHostProps( this, a );
          break;
        case "select":
          i = O.getHostProps( this, i ), a = O.getHostProps( this, a );
          break;
        case "textarea":
          i = N.getHostProps( this, i ), a = N.getHostProps( this, a )
      }
      switch ( o( this, a ), this._updateDOMProperties( i, a, e ), this._updateDOMChildren( i, a, e, r ), this._tag ) {
        case "input":
          A.updateWrapper( this );
          break;
        case "textarea":
          N.updateWrapper( this );
          break;
        case "select":
          e.getReactMountReady().enqueue( f, this )
      }
    },
    _updateDOMProperties: function ( e, t, n ) {
      var r, o, a;
      for ( r in e )
        if ( !t.hasOwnProperty( r ) && e.hasOwnProperty( r ) && null != e[ r ] )
          if ( r === z ) {
            var s = this._previousStyleCopy;
            for ( o in s ) s.hasOwnProperty( o ) && ( a = a || {}, a[ o ] = "" );
            this._previousStyleCopy = null
          } else U.hasOwnProperty( r ) ? e[ r ] && R( this, r ) : d( this._tag, e ) ? H.hasOwnProperty( r ) || _.deleteValueForAttribute( j( this ), r ) : ( w.properties[ r ] || w.isCustomAttribute( r ) ) && _.deleteValueForProperty( j( this ), r );
      for ( r in t ) {
        var l = t[ r ],
          u = r === z ? this._previousStyleCopy : null != e ? e[ r ] : void 0;
        if ( t.hasOwnProperty( r ) && l !== u && ( null != l || null != u ) )
          if ( r === z )
            if ( l ? l = this._previousStyleCopy = g( {}, l ) : this._previousStyleCopy = null, u ) {
              for ( o in u ) !u.hasOwnProperty( o ) || l && l.hasOwnProperty( o ) || ( a = a || {}, a[ o ] = "" );
              for ( o in l ) l.hasOwnProperty( o ) && u[ o ] !== l[ o ] && ( a = a || {}, a[ o ] = l[ o ] )
            } else a = l;
        else if ( U.hasOwnProperty( r ) ) l ? i( this, r, l, n ) : u && R( this, r );
        else if ( d( this._tag, t ) ) H.hasOwnProperty( r ) || _.setValueForAttribute( j( this ), r, l );
        else if ( w.properties[ r ] || w.isCustomAttribute( r ) ) {
          var c = j( this );
          null != l ? _.setValueForProperty( c, r, l ) : _.deleteValueForProperty( c, r )
        }
      }
      a && y.setValueForStyles( j( this ), a, this )
    },
    _updateDOMChildren: function ( e, t, n, r ) {
      var o = B[ typeof e.children ] ? e.children : null,
        i = B[ typeof t.children ] ? t.children : null,
        a = e.dangerouslySetInnerHTML && e.dangerouslySetInnerHTML.__html,
        s = t.dangerouslySetInnerHTML && t.dangerouslySetInnerHTML.__html,
        l = null != o ? null : e.children,
        u = null != i ? null : t.children,
        c = null != o || null != a,
        f = null != i || null != s;
      null != l && null == u ? this.updateChildren( null, n, r ) : c && !f && this.updateTextContent( "" ), null != i ? o !== i && this.updateTextContent( "" + i ) : null != s ? a !== s && this.updateMarkup( "" + s ) : null != u && this.updateChildren( u, n, r )
    },
    getHostNode: function () {
      return j( this )
    },
    unmountComponent: function ( e ) {
      switch ( this._tag ) {
        case "audio":
        case "form":
        case "iframe":
        case "img":
        case "link":
        case "object":
        case "source":
        case "video":
          var t = this._wrapperState.listeners;
          if ( t )
            for ( var n = 0; n < t.length; n++ ) t[ n ].remove();
          break;
        case "html":
        case "head":
        case "body":
          v( "66", this._tag )
      }
      this.unmountChildren( e ), T.uncacheNode( this ), C.deleteAllListeners( this ), this._rootNodeID = 0, this._domID = 0, this._wrapperState = null
    },
    getPublicInstance: function () {
      return j( this )
    }
  }, g( h.prototype, h.Mixin, P.Mixin ), e.exports = h
}, function ( e, t, n ) {
  "use strict";
  var r = n( 234 ),
    o = n( 289 ),
    i = {
      focusDOMComponent: function () {
        o( r.getNodeFromInstance( this ) )
      }
    };
  e.exports = i
}, function ( e, t ) {
  "use strict";

  function n( e ) {
    try {
      e.focus()
    } catch ( e ) {}
  }
  e.exports = n
}, function ( e, t, n ) {
  "use strict";
  var r = n( 291 ),
    o = n( 248 ),
    i = ( n( 262 ), n( 292 ), n( 294 ) ),
    a = n( 295 ),
    s = n( 297 ),
    l = ( n( 105 ), s( function ( e ) {
      return a( e )
    } ) ),
    u = !1,
    c = "cssFloat";
  if ( o.canUseDOM ) {
    var f = document.createElement( "div" ).style;
    try {
      f.font = ""
    } catch ( e ) {
      u = !0
    }
    void 0 === document.documentElement.style.cssFloat && ( c = "styleFloat" )
  }
  var p = {
    createMarkupForStyles: function ( e, t ) {
      var n = "";
      for ( var r in e )
        if ( e.hasOwnProperty( r ) ) {
          var o = e[ r ];
          null != o && ( n += l( r ) + ":", n += i( r, o, t ) + ";" )
        } return n || null
    },
    setValueForStyles: function ( e, t, n ) {
      var o = e.style;
      for ( var a in t )
        if ( t.hasOwnProperty( a ) ) {
          var s = i( a, t[ a ], n );
          if ( "float" !== a && "cssFloat" !== a || ( a = c ), s ) o[ a ] = s;
          else {
            var l = u && r.shorthandPropertyExpansions[ a ];
            if ( l )
              for ( var f in l ) o[ f ] = "";
            else o[ a ] = ""
          }
        }
    }
  };
  e.exports = p
}, function ( e, t ) {
  "use strict";

  function n( e, t ) {
    return e + t.charAt( 0 ).toUpperCase() + t.substring( 1 )
  }
  var r = {
      animationIterationCount: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridRow: !0,
      gridColumn: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    },
    o = [ "Webkit", "ms", "Moz", "O" ];
  Object.keys( r ).forEach( function ( e ) {
    o.forEach( function ( t ) {
      r[ n( t, e ) ] = r[ e ]
    } )
  } );
  var i = {
      background: {
        backgroundAttachment: !0,
        backgroundColor: !0,
        backgroundImage: !0,
        backgroundPositionX: !0,
        backgroundPositionY: !0,
        backgroundRepeat: !0
      },
      backgroundPosition: {
        backgroundPositionX: !0,
        backgroundPositionY: !0
      },
      border: {
        borderWidth: !0,
        borderStyle: !0,
        borderColor: !0
      },
      borderBottom: {
        borderBottomWidth: !0,
        borderBottomStyle: !0,
        borderBottomColor: !0
      },
      borderLeft: {
        borderLeftWidth: !0,
        borderLeftStyle: !0,
        borderLeftColor: !0
      },
      borderRight: {
        borderRightWidth: !0,
        borderRightStyle: !0,
        borderRightColor: !0
      },
      borderTop: {
        borderTopWidth: !0,
        borderTopStyle: !0,
        borderTopColor: !0
      },
      font: {
        fontStyle: !0,
        fontVariant: !0,
        fontWeight: !0,
        fontSize: !0,
        lineHeight: !0,
        fontFamily: !0
      },
      outline: {
        outlineWidth: !0,
        outlineStyle: !0,
        outlineColor: !0
      }
    },
    a = {
      isUnitlessNumber: r,
      shorthandPropertyExpansions: i
    };
  e.exports = a
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    return o( e.replace( i, "ms-" ) )
  }
  var o = n( 293 ),
    i = /^-ms-/;
  e.exports = r
}, function ( e, t ) {
  "use strict";

  function n( e ) {
    return e.replace( r, function ( e, t ) {
      return t.toUpperCase()
    } )
  }
  var r = /-(.)/g;
  e.exports = n
}, function ( e, t, n ) {
  "use strict";

  function r( e, t, n ) {
    var r = null == t || "boolean" == typeof t || "" === t;
    if ( r ) return "";
    var o = isNaN( t );
    if ( o || 0 === t || i.hasOwnProperty( e ) && i[ e ] ) return "" + t;
    if ( "string" == typeof t ) {
      t = t.trim()
    }
    return t + "px"
  }
  var o = n( 291 ),
    i = ( n( 105 ), o.isUnitlessNumber );
  e.exports = r
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    return o( e ).replace( i, "-ms-" )
  }
  var o = n( 296 ),
    i = /^ms-/;
  e.exports = r
}, function ( e, t ) {
  "use strict";

  function n( e ) {
    return e.replace( r, "-$1" ).toLowerCase()
  }
  var r = /([A-Z])/g;
  e.exports = n
}, function ( e, t ) {
  "use strict";

  function n( e ) {
    var t = {};
    return function ( n ) {
      return t.hasOwnProperty( n ) || ( t[ n ] = e.call( this, n ) ), t[ n ]
    }
  }
  e.exports = n
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    return !!u.hasOwnProperty( e ) || !l.hasOwnProperty( e ) && ( s.test( e ) ? ( u[ e ] = !0, !0 ) : ( l[ e ] = !0, !1 ) )
  }

  function o( e, t ) {
    return null == t || e.hasBooleanValue && !t || e.hasNumericValue && isNaN( t ) || e.hasPositiveNumericValue && t < 1 || e.hasOverloadedBooleanValue && t === !1
  }
  var i = n( 236 ),
    a = ( n( 234 ), n( 262 ), n( 299 ) ),
    s = ( n( 105 ), new RegExp( "^[" + i.ATTRIBUTE_NAME_START_CHAR + "][" + i.ATTRIBUTE_NAME_CHAR + "]*$" ) ),
    l = {},
    u = {},
    c = {
      createMarkupForID: function ( e ) {
        return i.ID_ATTRIBUTE_NAME + "=" + a( e )
      },
      setAttributeForID: function ( e, t ) {
        e.setAttribute( i.ID_ATTRIBUTE_NAME, t )
      },
      createMarkupForRoot: function () {
        return i.ROOT_ATTRIBUTE_NAME + '=""'
      },
      setAttributeForRoot: function ( e ) {
        e.setAttribute( i.ROOT_ATTRIBUTE_NAME, "" )
      },
      createMarkupForProperty: function ( e, t ) {
        var n = i.properties.hasOwnProperty( e ) ? i.properties[ e ] : null;
        if ( n ) {
          if ( o( n, t ) ) return "";
          var r = n.attributeName;
          return n.hasBooleanValue || n.hasOverloadedBooleanValue && t === !0 ? r + '=""' : r + "=" + a( t )
        }
        return i.isCustomAttribute( e ) ? null == t ? "" : e + "=" + a( t ) : null
      },
      createMarkupForCustomAttribute: function ( e, t ) {
        return r( e ) && null != t ? e + "=" + a( t ) : ""
      },
      setValueForProperty: function ( e, t, n ) {
        var r = i.properties.hasOwnProperty( t ) ? i.properties[ t ] : null;
        if ( r ) {
          var a = r.mutationMethod;
          if ( a ) a( e, n );
          else {
            if ( o( r, n ) ) return void this.deleteValueForProperty( e, t );
            if ( r.mustUseProperty ) e[ r.propertyName ] = n;
            else {
              var s = r.attributeName,
                l = r.attributeNamespace;
              l ? e.setAttributeNS( l, s, "" + n ) : r.hasBooleanValue || r.hasOverloadedBooleanValue && n === !0 ? e.setAttribute( s, "" ) : e.setAttribute( s, "" + n )
            }
          }
        } else if ( i.isCustomAttribute( t ) ) return void c.setValueForAttribute( e, t, n )
      },
      setValueForAttribute: function ( e, t, n ) {
        if ( r( t ) ) {
          null == n ? e.removeAttribute( t ) : e.setAttribute( t, "" + n )
        }
      },
      deleteValueForAttribute: function ( e, t ) {
        e.removeAttribute( t )
      },
      deleteValueForProperty: function ( e, t ) {
        var n = i.properties.hasOwnProperty( t ) ? i.properties[ t ] : null;
        if ( n ) {
          var r = n.mutationMethod;
          if ( r ) r( e, void 0 );
          else if ( n.mustUseProperty ) {
            var o = n.propertyName;
            n.hasBooleanValue ? e[ o ] = !1 : e[ o ] = ""
          } else e.removeAttribute( n.attributeName )
        } else i.isCustomAttribute( t ) && e.removeAttribute( t )
      }
    };
  e.exports = c
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    return '"' + o( e ) + '"'
  }
  var o = n( 281 );
  e.exports = r
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    return Object.prototype.hasOwnProperty.call( e, v ) || ( e[ v ] = d++, f[ e[ v ] ] = {} ), f[ e[ v ] ]
  }
  var o, i = n( 98 ),
    a = n( 243 ),
    s = n( 301 ),
    l = n( 271 ),
    u = n( 302 ),
    c = n( 265 ),
    f = {},
    p = !1,
    d = 0,
    h = {
      topAbort: "abort",
      topAnimationEnd: u( "animationend" ) || "animationend",
      topAnimationIteration: u( "animationiteration" ) || "animationiteration",
      topAnimationStart: u( "animationstart" ) || "animationstart",
      topBlur: "blur",
      topCanPlay: "canplay",
      topCanPlayThrough: "canplaythrough",
      topChange: "change",
      topClick: "click",
      topCompositionEnd: "compositionend",
      topCompositionStart: "compositionstart",
      topCompositionUpdate: "compositionupdate",
      topContextMenu: "contextmenu",
      topCopy: "copy",
      topCut: "cut",
      topDoubleClick: "dblclick",
      topDrag: "drag",
      topDragEnd: "dragend",
      topDragEnter: "dragenter",
      topDragExit: "dragexit",
      topDragLeave: "dragleave",
      topDragOver: "dragover",
      topDragStart: "dragstart",
      topDrop: "drop",
      topDurationChange: "durationchange",
      topEmptied: "emptied",
      topEncrypted: "encrypted",
      topEnded: "ended",
      topError: "error",
      topFocus: "focus",
      topInput: "input",
      topKeyDown: "keydown",
      topKeyPress: "keypress",
      topKeyUp: "keyup",
      topLoadedData: "loadeddata",
      topLoadedMetadata: "loadedmetadata",
      topLoadStart: "loadstart",
      topMouseDown: "mousedown",
      topMouseMove: "mousemove",
      topMouseOut: "mouseout",
      topMouseOver: "mouseover",
      topMouseUp: "mouseup",
      topPaste: "paste",
      topPause: "pause",
      topPlay: "play",
      topPlaying: "playing",
      topProgress: "progress",
      topRateChange: "ratechange",
      topScroll: "scroll",
      topSeeked: "seeked",
      topSeeking: "seeking",
      topSelectionChange: "selectionchange",
      topStalled: "stalled",
      topSuspend: "suspend",
      topTextInput: "textInput",
      topTimeUpdate: "timeupdate",
      topTouchCancel: "touchcancel",
      topTouchEnd: "touchend",
      topTouchMove: "touchmove",
      topTouchStart: "touchstart",
      topTransitionEnd: u( "transitionend" ) || "transitionend",
      topVolumeChange: "volumechange",
      topWaiting: "waiting",
      topWheel: "wheel"
    },
    v = "_reactListenersID" + String( Math.random() ).slice( 2 ),
    g = i( {}, s, {
      ReactEventListener: null,
      injection: {
        injectReactEventListener: function ( e ) {
          e.setHandleTopLevel( g.handleTopLevel ), g.ReactEventListener = e
        }
      },
      setEnabled: function ( e ) {
        g.ReactEventListener && g.ReactEventListener.setEnabled( e )
      },
      isEnabled: function () {
        return !( !g.ReactEventListener || !g.ReactEventListener.isEnabled() )
      },
      listenTo: function ( e, t ) {
        for ( var n = t, o = r( n ), i = a.registrationNameDependencies[ e ], s = 0; s < i.length; s++ ) {
          var l = i[ s ];
          o.hasOwnProperty( l ) && o[ l ] || ( "topWheel" === l ? c( "wheel" ) ? g.ReactEventListener.trapBubbledEvent( "topWheel", "wheel", n ) : c( "mousewheel" ) ? g.ReactEventListener.trapBubbledEvent( "topWheel", "mousewheel", n ) : g.ReactEventListener.trapBubbledEvent( "topWheel", "DOMMouseScroll", n ) : "topScroll" === l ? c( "scroll", !0 ) ? g.ReactEventListener.trapCapturedEvent( "topScroll", "scroll", n ) : g.ReactEventListener.trapBubbledEvent( "topScroll", "scroll", g.ReactEventListener.WINDOW_HANDLE ) : "topFocus" === l || "topBlur" === l ? ( c( "focus", !0 ) ? ( g.ReactEventListener.trapCapturedEvent( "topFocus", "focus", n ), g.ReactEventListener.trapCapturedEvent( "topBlur", "blur", n ) ) : c( "focusin" ) && ( g.ReactEventListener.trapBubbledEvent( "topFocus", "focusin", n ), g.ReactEventListener.trapBubbledEvent( "topBlur", "focusout", n ) ), o.topBlur = !0, o.topFocus = !0 ) : h.hasOwnProperty( l ) && g.ReactEventListener.trapBubbledEvent( l, h[ l ], n ), o[ l ] = !0 )
        }
      },
      trapBubbledEvent: function ( e, t, n ) {
        return g.ReactEventListener.trapBubbledEvent( e, t, n )
      },
      trapCapturedEvent: function ( e, t, n ) {
        return g.ReactEventListener.trapCapturedEvent( e, t, n )
      },
      supportsEventPageXY: function () {
        if ( !document.createEvent ) return !1;
        var e = document.createEvent( "MouseEvent" );
        return null != e && "pageX" in e
      },
      ensureScrollValueMonitoring: function () {
        if ( void 0 === o && ( o = g.supportsEventPageXY() ), !o && !p ) {
          var e = l.refreshScrollValues;
          g.ReactEventListener.monitorScrollValue( e ), p = !0
        }
      }
    } );
  e.exports = g
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    o.enqueueEvents( e ), o.processEventQueue( !1 )
  }
  var o = n( 242 ),
    i = {
      handleTopLevel: function ( e, t, n, i ) {
        var a = o.extractEvents( e, t, n, i );
        r( a )
      }
    };
  e.exports = i
}, function ( e, t, n ) {
  "use strict";

  function r( e, t ) {
    var n = {};
    return n[ e.toLowerCase() ] = t.toLowerCase(), n[ "Webkit" + e ] = "webkit" + t, n[ "Moz" + e ] = "moz" + t, n[ "ms" + e ] = "MS" + t, n[ "O" + e ] = "o" + t.toLowerCase(), n
  }

  function o( e ) {
    if ( s[ e ] ) return s[ e ];
    if ( !a[ e ] ) return e;
    var t = a[ e ];
    for ( var n in t )
      if ( t.hasOwnProperty( n ) && n in l ) return s[ e ] = t[ n ];
    return ""
  }
  var i = n( 248 ),
    a = {
      animationend: r( "Animation", "AnimationEnd" ),
      animationiteration: r( "Animation", "AnimationIteration" ),
      animationstart: r( "Animation", "AnimationStart" ),
      transitionend: r( "Transition", "TransitionEnd" )
    },
    s = {},
    l = {};
  i.canUseDOM && ( l = document.createElement( "div" ).style, "AnimationEvent" in window || ( delete a.animationend.animation, delete a.animationiteration.animation, delete a.animationstart.animation ), "TransitionEvent" in window || delete a.transitionend.transition ),
    e.exports = o
}, function ( e, t, n ) {
  "use strict";

  function r() {
    this._rootNodeID && f.updateWrapper( this )
  }

  function o( e ) {
    var t = this._currentElement.props,
      n = l.executeOnChange( t, e );
    c.asap( r, this );
    var o = t.name;
    if ( "radio" === t.type && null != o ) {
      for ( var a = u.getNodeFromInstance( this ), s = a; s.parentNode; ) s = s.parentNode;
      for ( var f = s.querySelectorAll( "input[name=" + JSON.stringify( "" + o ) + '][type="radio"]' ), p = 0; p < f.length; p++ ) {
        var d = f[ p ];
        if ( d !== a && d.form === a.form ) {
          var h = u.getInstanceFromNode( d );
          h ? void 0 : i( "90" ), c.asap( r, h )
        }
      }
    }
    return n
  }
  var i = n( 235 ),
    a = n( 98 ),
    s = n( 298 ),
    l = n( 304 ),
    u = n( 234 ),
    c = n( 256 ),
    f = ( n( 102 ), n( 105 ), {
      getHostProps: function ( e, t ) {
        var n = l.getValue( t ),
          r = l.getChecked( t ),
          o = a( {
            type: void 0,
            step: void 0,
            min: void 0,
            max: void 0
          }, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: null != n ? n : e._wrapperState.initialValue,
            checked: null != r ? r : e._wrapperState.initialChecked,
            onChange: e._wrapperState.onChange
          } );
        return o
      },
      mountWrapper: function ( e, t ) {
        var n = t.defaultValue;
        e._wrapperState = {
          initialChecked: null != t.checked ? t.checked : t.defaultChecked,
          initialValue: null != t.value ? t.value : n,
          listeners: null,
          onChange: o.bind( e )
        }
      },
      updateWrapper: function ( e ) {
        var t = e._currentElement.props,
          n = t.checked;
        null != n && s.setValueForProperty( u.getNodeFromInstance( e ), "checked", n || !1 );
        var r = u.getNodeFromInstance( e ),
          o = l.getValue( t );
        if ( null != o ) {
          var i = "" + o;
          i !== r.value && ( r.value = i )
        } else null == t.value && null != t.defaultValue && r.defaultValue !== "" + t.defaultValue && ( r.defaultValue = "" + t.defaultValue ), null == t.checked && null != t.defaultChecked && ( r.defaultChecked = !!t.defaultChecked )
      },
      postMountWrapper: function ( e ) {
        var t = e._currentElement.props,
          n = u.getNodeFromInstance( e );
        switch ( t.type ) {
          case "submit":
          case "reset":
            break;
          case "color":
          case "date":
          case "datetime":
          case "datetime-local":
          case "month":
          case "time":
          case "week":
            n.value = "", n.value = n.defaultValue;
            break;
          default:
            n.value = n.value
        }
        var r = n.name;
        "" !== r && ( n.name = "" ), n.defaultChecked = !n.defaultChecked, n.defaultChecked = !n.defaultChecked, "" !== r && ( n.name = r )
      }
    } );
  e.exports = f
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    null != e.checkedLink && null != e.valueLink ? s( "87" ) : void 0
  }

  function o( e ) {
    r( e ), null != e.value || null != e.onChange ? s( "88" ) : void 0
  }

  function i( e ) {
    r( e ), null != e.checked || null != e.onChange ? s( "89" ) : void 0
  }

  function a( e ) {
    if ( e ) {
      var t = e.getName();
      if ( t ) return " Check the render method of `" + t + "`."
    }
    return ""
  }
  var s = n( 235 ),
    l = n( 97 ),
    u = n( 305 ),
    c = ( n( 102 ), n( 105 ), {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    } ),
    f = {
      value: function ( e, t, n ) {
        return !e[ t ] || c[ e.type ] || e.onChange || e.readOnly || e.disabled ? null : new Error( "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`." )
      },
      checked: function ( e, t, n ) {
        return !e[ t ] || e.onChange || e.readOnly || e.disabled ? null : new Error( "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`." )
      },
      onChange: l.PropTypes.func
    },
    p = {},
    d = {
      checkPropTypes: function ( e, t, n ) {
        for ( var r in f ) {
          if ( f.hasOwnProperty( r ) ) var o = f[ r ]( t, r, e, "prop", null, u );
          if ( o instanceof Error && !( o.message in p ) ) {
            p[ o.message ] = !0;
            a( n )
          }
        }
      },
      getValue: function ( e ) {
        return e.valueLink ? ( o( e ), e.valueLink.value ) : e.value
      },
      getChecked: function ( e ) {
        return e.checkedLink ? ( i( e ), e.checkedLink.value ) : e.checked
      },
      executeOnChange: function ( e, t ) {
        return e.valueLink ? ( o( e ), e.valueLink.requestChange( t.target.value ) ) : e.checkedLink ? ( i( e ), e.checkedLink.requestChange( t.target.checked ) ) : e.onChange ? e.onChange.call( void 0, t ) : void 0
      }
    };
  e.exports = d
}, function ( e, t ) {
  "use strict";
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  e.exports = n
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    var t = "";
    return i.Children.forEach( e, function ( e ) {
      null != e && ( "string" == typeof e || "number" == typeof e ? t += e : l || ( l = !0 ) )
    } ), t
  }
  var o = n( 98 ),
    i = n( 97 ),
    a = n( 234 ),
    s = n( 307 ),
    l = ( n( 105 ), !1 ),
    u = {
      mountWrapper: function ( e, t, n ) {
        var o = null;
        if ( null != n ) {
          var i = n;
          "optgroup" === i._tag && ( i = i._hostParent ), null != i && "select" === i._tag && ( o = s.getSelectValueContext( i ) )
        }
        var a = null;
        if ( null != o ) {
          var l;
          if ( l = null != t.value ? t.value + "" : r( t.children ), a = !1, Array.isArray( o ) ) {
            for ( var u = 0; u < o.length; u++ )
              if ( "" + o[ u ] === l ) {
                a = !0;
                break
              }
          } else a = "" + o === l
        }
        e._wrapperState = {
          selected: a
        }
      },
      postMountWrapper: function ( e ) {
        var t = e._currentElement.props;
        if ( null != t.value ) {
          var n = a.getNodeFromInstance( e );
          n.setAttribute( "value", t.value )
        }
      },
      getHostProps: function ( e, t ) {
        var n = o( {
          selected: void 0,
          children: void 0
        }, t );
        null != e._wrapperState.selected && ( n.selected = e._wrapperState.selected );
        var i = r( t.children );
        return i && ( n.children = i ), n
      }
    };
  e.exports = u
}, function ( e, t, n ) {
  "use strict";

  function r() {
    if ( this._rootNodeID && this._wrapperState.pendingUpdate ) {
      this._wrapperState.pendingUpdate = !1;
      var e = this._currentElement.props,
        t = s.getValue( e );
      null != t && o( this, Boolean( e.multiple ), t )
    }
  }

  function o( e, t, n ) {
    var r, o, i = l.getNodeFromInstance( e ).options;
    if ( t ) {
      for ( r = {}, o = 0; o < n.length; o++ ) r[ "" + n[ o ] ] = !0;
      for ( o = 0; o < i.length; o++ ) {
        var a = r.hasOwnProperty( i[ o ].value );
        i[ o ].selected !== a && ( i[ o ].selected = a )
      }
    } else {
      for ( r = "" + n, o = 0; o < i.length; o++ )
        if ( i[ o ].value === r ) return void( i[ o ].selected = !0 );
      i.length && ( i[ 0 ].selected = !0 )
    }
  }

  function i( e ) {
    var t = this._currentElement.props,
      n = s.executeOnChange( t, e );
    return this._rootNodeID && ( this._wrapperState.pendingUpdate = !0 ), u.asap( r, this ), n
  }
  var a = n( 98 ),
    s = n( 304 ),
    l = n( 234 ),
    u = n( 256 ),
    c = ( n( 105 ), !1 ),
    f = {
      getHostProps: function ( e, t ) {
        return a( {}, t, {
          onChange: e._wrapperState.onChange,
          value: void 0
        } )
      },
      mountWrapper: function ( e, t ) {
        var n = s.getValue( t );
        e._wrapperState = {
          pendingUpdate: !1,
          initialValue: null != n ? n : t.defaultValue,
          listeners: null,
          onChange: i.bind( e ),
          wasMultiple: Boolean( t.multiple )
        }, void 0 === t.value || void 0 === t.defaultValue || c || ( c = !0 )
      },
      getSelectValueContext: function ( e ) {
        return e._wrapperState.initialValue
      },
      postUpdateWrapper: function ( e ) {
        var t = e._currentElement.props;
        e._wrapperState.initialValue = void 0;
        var n = e._wrapperState.wasMultiple;
        e._wrapperState.wasMultiple = Boolean( t.multiple );
        var r = s.getValue( t );
        null != r ? ( e._wrapperState.pendingUpdate = !1, o( e, Boolean( t.multiple ), r ) ) : n !== Boolean( t.multiple ) && ( null != t.defaultValue ? o( e, Boolean( t.multiple ), t.defaultValue ) : o( e, Boolean( t.multiple ), t.multiple ? [] : "" ) )
      }
    };
  e.exports = f
}, function ( e, t, n ) {
  "use strict";

  function r() {
    this._rootNodeID && c.updateWrapper( this )
  }

  function o( e ) {
    var t = this._currentElement.props,
      n = s.executeOnChange( t, e );
    return u.asap( r, this ), n
  }
  var i = n( 235 ),
    a = n( 98 ),
    s = n( 304 ),
    l = n( 234 ),
    u = n( 256 ),
    c = ( n( 102 ), n( 105 ), {
      getHostProps: function ( e, t ) {
        null != t.dangerouslySetInnerHTML ? i( "91" ) : void 0;
        var n = a( {}, t, {
          value: void 0,
          defaultValue: void 0,
          children: "" + e._wrapperState.initialValue,
          onChange: e._wrapperState.onChange
        } );
        return n
      },
      mountWrapper: function ( e, t ) {
        var n = s.getValue( t ),
          r = n;
        if ( null == n ) {
          var a = t.defaultValue,
            l = t.children;
          null != l && ( null != a ? i( "92" ) : void 0, Array.isArray( l ) && ( l.length <= 1 ? void 0 : i( "93" ), l = l[ 0 ] ), a = "" + l ), null == a && ( a = "" ), r = a
        }
        e._wrapperState = {
          initialValue: "" + r,
          listeners: null,
          onChange: o.bind( e )
        }
      },
      updateWrapper: function ( e ) {
        var t = e._currentElement.props,
          n = l.getNodeFromInstance( e ),
          r = s.getValue( t );
        if ( null != r ) {
          var o = "" + r;
          o !== n.value && ( n.value = o ), null == t.defaultValue && ( n.defaultValue = o )
        }
        null != t.defaultValue && ( n.defaultValue = t.defaultValue )
      },
      postMountWrapper: function ( e ) {
        var t = l.getNodeFromInstance( e ),
          n = t.textContent;
        n === e._wrapperState.initialValue && ( t.value = n )
      }
    } );
  e.exports = c
}, function ( e, t, n ) {
  "use strict";

  function r( e, t, n ) {
    return {
      type: "INSERT_MARKUP",
      content: e,
      fromIndex: null,
      fromNode: null,
      toIndex: n,
      afterNode: t
    }
  }

  function o( e, t, n ) {
    return {
      type: "MOVE_EXISTING",
      content: null,
      fromIndex: e._mountIndex,
      fromNode: p.getHostNode( e ),
      toIndex: n,
      afterNode: t
    }
  }

  function i( e, t ) {
    return {
      type: "REMOVE_NODE",
      content: null,
      fromIndex: e._mountIndex,
      fromNode: t,
      toIndex: null,
      afterNode: null
    }
  }

  function a( e ) {
    return {
      type: "SET_MARKUP",
      content: e,
      fromIndex: null,
      fromNode: null,
      toIndex: null,
      afterNode: null
    }
  }

  function s( e ) {
    return {
      type: "TEXT_CONTENT",
      content: e,
      fromIndex: null,
      fromNode: null,
      toIndex: null,
      afterNode: null
    }
  }

  function l( e, t ) {
    return t && ( e = e || [], e.push( t ) ), e
  }

  function u( e, t ) {
    f.processChildrenUpdates( e, t )
  }
  var c = n( 235 ),
    f = n( 310 ),
    p = ( n( 311 ), n( 262 ), n( 104 ), n( 259 ) ),
    d = n( 312 ),
    h = ( n( 106 ), n( 327 ) ),
    v = ( n( 102 ), {
      Mixin: {
        _reconcilerInstantiateChildren: function ( e, t, n ) {
          return d.instantiateChildren( e, t, n )
        },
        _reconcilerUpdateChildren: function ( e, t, n, r, o, i ) {
          var a, s = 0;
          return a = h( t, s ), d.updateChildren( e, a, n, r, o, this, this._hostContainerInfo, i, s ), a
        },
        mountChildren: function ( e, t, n ) {
          var r = this._reconcilerInstantiateChildren( e, t, n );
          this._renderedChildren = r;
          var o = [],
            i = 0;
          for ( var a in r )
            if ( r.hasOwnProperty( a ) ) {
              var s = r[ a ],
                l = 0,
                u = p.mountComponent( s, t, this, this._hostContainerInfo, n, l );
              s._mountIndex = i++, o.push( u )
            } return o
        },
        updateTextContent: function ( e ) {
          var t = this._renderedChildren;
          d.unmountChildren( t, !1 );
          for ( var n in t ) t.hasOwnProperty( n ) && c( "118" );
          var r = [ s( e ) ];
          u( this, r )
        },
        updateMarkup: function ( e ) {
          var t = this._renderedChildren;
          d.unmountChildren( t, !1 );
          for ( var n in t ) t.hasOwnProperty( n ) && c( "118" );
          var r = [ a( e ) ];
          u( this, r )
        },
        updateChildren: function ( e, t, n ) {
          this._updateChildren( e, t, n )
        },
        _updateChildren: function ( e, t, n ) {
          var r = this._renderedChildren,
            o = {},
            i = [],
            a = this._reconcilerUpdateChildren( r, e, i, o, t, n );
          if ( a || r ) {
            var s, c = null,
              f = 0,
              d = 0,
              h = 0,
              v = null;
            for ( s in a )
              if ( a.hasOwnProperty( s ) ) {
                var g = r && r[ s ],
                  m = a[ s ];
                g === m ? ( c = l( c, this.moveChild( g, v, f, d ) ), d = Math.max( g._mountIndex, d ), g._mountIndex = f ) : ( g && ( d = Math.max( g._mountIndex, d ) ), c = l( c, this._mountChildAtIndex( m, i[ h ], v, f, t, n ) ), h++ ), f++, v = p.getHostNode( m )
              } for ( s in o ) o.hasOwnProperty( s ) && ( c = l( c, this._unmountChild( r[ s ], o[ s ] ) ) );
            c && u( this, c ), this._renderedChildren = a
          }
        },
        unmountChildren: function ( e ) {
          var t = this._renderedChildren;
          d.unmountChildren( t, e ), this._renderedChildren = null
        },
        moveChild: function ( e, t, n, r ) {
          if ( e._mountIndex < r ) return o( e, t, n )
        },
        createChild: function ( e, t, n ) {
          return r( n, t, e._mountIndex )
        },
        removeChild: function ( e, t ) {
          return i( e, t )
        },
        _mountChildAtIndex: function ( e, t, n, r, o, i ) {
          return e._mountIndex = r, this.createChild( e, n, t )
        },
        _unmountChild: function ( e, t ) {
          var n = this.removeChild( e, t );
          return e._mountIndex = null, n
        }
      }
    } );
  e.exports = v
}, function ( e, t, n ) {
  "use strict";
  var r = n( 235 ),
    o = ( n( 102 ), !1 ),
    i = {
      replaceNodeWithMarkup: null,
      processChildrenUpdates: null,
      injection: {
        injectEnvironment: function ( e ) {
          o ? r( "104" ) : void 0, i.replaceNodeWithMarkup = e.replaceNodeWithMarkup, i.processChildrenUpdates = e.processChildrenUpdates, o = !0
        }
      }
    };
  e.exports = i
}, function ( e, t ) {
  "use strict";
  var n = {
    remove: function ( e ) {
      e._reactInternalInstance = void 0
    },
    get: function ( e ) {
      return e._reactInternalInstance
    },
    has: function ( e ) {
      return void 0 !== e._reactInternalInstance
    },
    set: function ( e, t ) {
      e._reactInternalInstance = t
    }
  };
  e.exports = n
}, function ( e, t, n ) {
  ( function ( t ) {
    "use strict";

    function r( e, t, n, r ) {
      var o = void 0 === e[ n ];
      null != t && o && ( e[ n ] = i( t, !0 ) )
    }
    var o = n( 259 ),
      i = n( 314 ),
      a = ( n( 322 ), n( 318 ) ),
      s = n( 323 );
    n( 105 );
    "undefined" != typeof t && t.env, 1;
    var l = {
      instantiateChildren: function ( e, t, n, o ) {
        if ( null == e ) return null;
        var i = {};
        return s( e, r, i ), i
      },
      updateChildren: function ( e, t, n, r, s, l, u, c, f ) {
        if ( t || e ) {
          var p, d;
          for ( p in t )
            if ( t.hasOwnProperty( p ) ) {
              d = e && e[ p ];
              var h = d && d._currentElement,
                v = t[ p ];
              if ( null != d && a( h, v ) ) o.receiveComponent( d, v, s, c ), t[ p ] = d;
              else {
                d && ( r[ p ] = o.getHostNode( d ), o.unmountComponent( d, !1 ) );
                var g = i( v, !0 );
                t[ p ] = g;
                var m = o.mountComponent( g, s, l, u, c, f );
                n.push( m )
              }
            } for ( p in e ) !e.hasOwnProperty( p ) || t && t.hasOwnProperty( p ) || ( d = e[ p ], r[ p ] = o.getHostNode( d ), o.unmountComponent( d, !1 ) )
        }
      },
      unmountChildren: function ( e, t ) {
        for ( var n in e )
          if ( e.hasOwnProperty( n ) ) {
            var r = e[ n ];
            o.unmountComponent( r, t )
          }
      }
    };
    e.exports = l
  } ).call( t, n( 313 ) )
}, function ( e, t ) {
  function n() {
    throw new Error( "setTimeout has not been defined" )
  }

  function r() {
    throw new Error( "clearTimeout has not been defined" )
  }

  function o( e ) {
    if ( c === setTimeout ) return setTimeout( e, 0 );
    if ( ( c === n || !c ) && setTimeout ) return c = setTimeout, setTimeout( e, 0 );
    try {
      return c( e, 0 )
    } catch ( t ) {
      try {
        return c.call( null, e, 0 )
      } catch ( t ) {
        return c.call( this, e, 0 )
      }
    }
  }

  function i( e ) {
    if ( f === clearTimeout ) return clearTimeout( e );
    if ( ( f === r || !f ) && clearTimeout ) return f = clearTimeout, clearTimeout( e );
    try {
      return f( e )
    } catch ( t ) {
      try {
        return f.call( null, e )
      } catch ( t ) {
        return f.call( this, e )
      }
    }
  }

  function a() {
    v && d && ( v = !1, d.length ? h = d.concat( h ) : g = -1, h.length && s() )
  }

  function s() {
    if ( !v ) {
      var e = o( a );
      v = !0;
      for ( var t = h.length; t; ) {
        for ( d = h, h = []; ++g < t; ) d && d[ g ].run();
        g = -1, t = h.length
      }
      d = null, v = !1, i( e )
    }
  }

  function l( e, t ) {
    this.fun = e, this.array = t
  }

  function u() {}
  var c, f, p = e.exports = {};
  ! function () {
    try {
      c = "function" == typeof setTimeout ? setTimeout : n
    } catch ( e ) {
      c = n
    }
    try {
      f = "function" == typeof clearTimeout ? clearTimeout : r
    } catch ( e ) {
      f = r
    }
  }();
  var d, h = [],
    v = !1,
    g = -1;
  p.nextTick = function ( e ) {
    var t = new Array( arguments.length - 1 );
    if ( arguments.length > 1 )
      for ( var n = 1; n < arguments.length; n++ ) t[ n - 1 ] = arguments[ n ];
    h.push( new l( e, t ) ), 1 !== h.length || v || o( s )
  }, l.prototype.run = function () {
    this.fun.apply( null, this.array )
  }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = u, p.addListener = u, p.once = u, p.off = u, p.removeListener = u, p.removeAllListeners = u, p.emit = u, p.binding = function ( e ) {
    throw new Error( "process.binding is not supported" )
  }, p.cwd = function () {
    return "/"
  }, p.chdir = function ( e ) {
    throw new Error( "process.chdir is not supported" )
  }, p.umask = function () {
    return 0
  }
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    if ( e ) {
      var t = e.getName();
      if ( t ) return " Check the render method of `" + t + "`."
    }
    return ""
  }

  function o( e ) {
    return "function" == typeof e && "undefined" != typeof e.prototype && "function" == typeof e.prototype.mountComponent && "function" == typeof e.prototype.receiveComponent
  }

  function i( e, t ) {
    var n;
    if ( null === e || e === !1 ) n = u.create( i );
    else if ( "object" == typeof e ) {
      var s = e,
        l = s.type;
      if ( "function" != typeof l && "string" != typeof l ) {
        var p = "";
        p += r( s._owner ), a( "130", null == l ? l : typeof l, p )
      }
      "string" == typeof s.type ? n = c.createInternalComponent( s ) : o( s.type ) ? ( n = new s.type( s ), n.getHostNode || ( n.getHostNode = n.getNativeNode ) ) : n = new f( s )
    } else "string" == typeof e || "number" == typeof e ? n = c.createInstanceForText( e ) : a( "131", typeof e );
    return n._mountIndex = 0, n._mountImage = null, n
  }
  var a = n( 235 ),
    s = n( 98 ),
    l = n( 315 ),
    u = n( 319 ),
    c = n( 320 ),
    f = ( n( 321 ), n( 102 ), n( 105 ), function ( e ) {
      this.construct( e )
    } );
  s( f.prototype, l, {
    _instantiateReactComponent: i
  } ), e.exports = i
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {}

  function o( e, t ) {}

  function i( e ) {
    return !( !e.prototype || !e.prototype.isReactComponent )
  }

  function a( e ) {
    return !( !e.prototype || !e.prototype.isPureReactComponent )
  }
  var s = n( 235 ),
    l = n( 98 ),
    u = n( 97 ),
    c = n( 310 ),
    f = n( 104 ),
    p = n( 245 ),
    d = n( 311 ),
    h = ( n( 262 ), n( 316 ) ),
    v = n( 259 ),
    g = n( 114 ),
    m = ( n( 102 ), n( 317 ) ),
    y = n( 318 ),
    b = ( n( 105 ), {
      ImpureClass: 0,
      PureClass: 1,
      StatelessFunctional: 2
    } );
  r.prototype.render = function () {
    var e = d.get( this )._currentElement.type,
      t = e( this.props, this.context, this.updater );
    return o( e, t ), t
  };
  var x = 1,
    w = {
      construct: function ( e ) {
        this._currentElement = e, this._rootNodeID = 0, this._compositeType = null, this._instance = null, this._hostParent = null, this._hostContainerInfo = null, this._updateBatchNumber = null, this._pendingElement = null, this._pendingStateQueue = null, this._pendingReplaceState = !1, this._pendingForceUpdate = !1, this._renderedNodeType = null, this._renderedComponent = null, this._context = null, this._mountOrder = 0, this._topLevelWrapper = null, this._pendingCallbacks = null, this._calledComponentWillUnmount = !1
      },
      mountComponent: function ( e, t, n, l ) {
        this._context = l, this._mountOrder = x++, this._hostParent = t, this._hostContainerInfo = n;
        var c, f = this._currentElement.props,
          p = this._processContext( l ),
          h = this._currentElement.type,
          v = e.getUpdateQueue(),
          m = i( h ),
          y = this._constructComponent( m, f, p, v );
        m || null != y && null != y.render ? a( h ) ? this._compositeType = b.PureClass : this._compositeType = b.ImpureClass : ( c = y, o( h, c ), null === y || y === !1 || u.isValidElement( y ) ? void 0 : s( "105", h.displayName || h.name || "Component" ), y = new r( h ), this._compositeType = b.StatelessFunctional );
        y.props = f, y.context = p, y.refs = g, y.updater = v, this._instance = y, d.set( y, this );
        var w = y.state;
        void 0 === w && ( y.state = w = null ), "object" != typeof w || Array.isArray( w ) ? s( "106", this.getName() || "ReactCompositeComponent" ) : void 0, this._pendingStateQueue = null, this._pendingReplaceState = !1, this._pendingForceUpdate = !1;
        var _;
        return _ = y.unstable_handleError ? this.performInitialMountWithErrorHandling( c, t, n, e, l ) : this.performInitialMount( c, t, n, e, l ), y.componentDidMount && e.getReactMountReady().enqueue( y.componentDidMount, y ), _
      },
      _constructComponent: function ( e, t, n, r ) {
        return this._constructComponentWithoutOwner( e, t, n, r )
      },
      _constructComponentWithoutOwner: function ( e, t, n, r ) {
        var o = this._currentElement.type;
        return e ? new o( t, n, r ) : o( t, n, r )
      },
      performInitialMountWithErrorHandling: function ( e, t, n, r, o ) {
        var i, a = r.checkpoint();
        try {
          i = this.performInitialMount( e, t, n, r, o )
        } catch ( s ) {
          r.rollback( a ), this._instance.unstable_handleError( s ), this._pendingStateQueue && ( this._instance.state = this._processPendingState( this._instance.props, this._instance.context ) ), a = r.checkpoint(), this._renderedComponent.unmountComponent( !0 ), r.rollback( a ), i = this.performInitialMount( e, t, n, r, o )
        }
        return i
      },
      performInitialMount: function ( e, t, n, r, o ) {
        var i = this._instance,
          a = 0;
        i.componentWillMount && ( i.componentWillMount(), this._pendingStateQueue && ( i.state = this._processPendingState( i.props, i.context ) ) ), void 0 === e && ( e = this._renderValidatedComponent() );
        var s = h.getType( e );
        this._renderedNodeType = s;
        var l = this._instantiateReactComponent( e, s !== h.EMPTY );
        this._renderedComponent = l;
        var u = v.mountComponent( l, r, t, n, this._processChildContext( o ), a );
        return u
      },
      getHostNode: function () {
        return v.getHostNode( this._renderedComponent )
      },
      unmountComponent: function ( e ) {
        if ( this._renderedComponent ) {
          var t = this._instance;
          if ( t.componentWillUnmount && !t._calledComponentWillUnmount )
            if ( t._calledComponentWillUnmount = !0, e ) {
              var n = this.getName() + ".componentWillUnmount()";
              p.invokeGuardedCallback( n, t.componentWillUnmount.bind( t ) )
            } else t.componentWillUnmount();
          this._renderedComponent && ( v.unmountComponent( this._renderedComponent, e ), this._renderedNodeType = null, this._renderedComponent = null, this._instance = null ), this._pendingStateQueue = null, this._pendingReplaceState = !1, this._pendingForceUpdate = !1, this._pendingCallbacks = null, this._pendingElement = null, this._context = null, this._rootNodeID = 0, this._topLevelWrapper = null, d.remove( t )
        }
      },
      _maskContext: function ( e ) {
        var t = this._currentElement.type,
          n = t.contextTypes;
        if ( !n ) return g;
        var r = {};
        for ( var o in n ) r[ o ] = e[ o ];
        return r
      },
      _processContext: function ( e ) {
        var t = this._maskContext( e );
        return t
      },
      _processChildContext: function ( e ) {
        var t, n = this._currentElement.type,
          r = this._instance;
        if ( r.getChildContext && ( t = r.getChildContext() ), t ) {
          "object" != typeof n.childContextTypes ? s( "107", this.getName() || "ReactCompositeComponent" ) : void 0;
          for ( var o in t ) o in n.childContextTypes ? void 0 : s( "108", this.getName() || "ReactCompositeComponent", o );
          return l( {}, e, t )
        }
        return e
      },
      _checkContextTypes: function ( e, t, n ) {},
      receiveComponent: function ( e, t, n ) {
        var r = this._currentElement,
          o = this._context;
        this._pendingElement = null, this.updateComponent( t, r, e, o, n )
      },
      performUpdateIfNecessary: function ( e ) {
        null != this._pendingElement ? v.receiveComponent( this, this._pendingElement, e, this._context ) : null !== this._pendingStateQueue || this._pendingForceUpdate ? this.updateComponent( e, this._currentElement, this._currentElement, this._context, this._context ) : this._updateBatchNumber = null
      },
      updateComponent: function ( e, t, n, r, o ) {
        var i = this._instance;
        null == i ? s( "136", this.getName() || "ReactCompositeComponent" ) : void 0;
        var a, l = !1;
        this._context === o ? a = i.context : ( a = this._processContext( o ), l = !0 );
        var u = t.props,
          c = n.props;
        t !== n && ( l = !0 ), l && i.componentWillReceiveProps && i.componentWillReceiveProps( c, a );
        var f = this._processPendingState( c, a ),
          p = !0;
        this._pendingForceUpdate || ( i.shouldComponentUpdate ? p = i.shouldComponentUpdate( c, f, a ) : this._compositeType === b.PureClass && ( p = !m( u, c ) || !m( i.state, f ) ) ), this._updateBatchNumber = null, p ? ( this._pendingForceUpdate = !1, this._performComponentUpdate( n, c, f, a, e, o ) ) : ( this._currentElement = n, this._context = o, i.props = c, i.state = f, i.context = a )
      },
      _processPendingState: function ( e, t ) {
        var n = this._instance,
          r = this._pendingStateQueue,
          o = this._pendingReplaceState;
        if ( this._pendingReplaceState = !1, this._pendingStateQueue = null, !r ) return n.state;
        if ( o && 1 === r.length ) return r[ 0 ];
        for ( var i = l( {}, o ? r[ 0 ] : n.state ), a = o ? 1 : 0; a < r.length; a++ ) {
          var s = r[ a ];
          l( i, "function" == typeof s ? s.call( n, i, e, t ) : s )
        }
        return i
      },
      _performComponentUpdate: function ( e, t, n, r, o, i ) {
        var a, s, l, u = this._instance,
          c = Boolean( u.componentDidUpdate );
        c && ( a = u.props, s = u.state, l = u.context ), u.componentWillUpdate && u.componentWillUpdate( t, n, r ), this._currentElement = e, this._context = i, u.props = t, u.state = n, u.context = r, this._updateRenderedComponent( o, i ), c && o.getReactMountReady().enqueue( u.componentDidUpdate.bind( u, a, s, l ), u )
      },
      _updateRenderedComponent: function ( e, t ) {
        var n = this._renderedComponent,
          r = n._currentElement,
          o = this._renderValidatedComponent(),
          i = 0;
        if ( y( r, o ) ) v.receiveComponent( n, o, e, this._processChildContext( t ) );
        else {
          var a = v.getHostNode( n );
          v.unmountComponent( n, !1 );
          var s = h.getType( o );
          this._renderedNodeType = s;
          var l = this._instantiateReactComponent( o, s !== h.EMPTY );
          this._renderedComponent = l;
          var u = v.mountComponent( l, e, this._hostParent, this._hostContainerInfo, this._processChildContext( t ), i );
          this._replaceNodeWithMarkup( a, u, n )
        }
      },
      _replaceNodeWithMarkup: function ( e, t, n ) {
        c.replaceNodeWithMarkup( e, t, n )
      },
      _renderValidatedComponentWithoutOwnerOrContext: function () {
        var e, t = this._instance;
        return e = t.render()
      },
      _renderValidatedComponent: function () {
        var e;
        if ( this._compositeType !== b.StatelessFunctional ) {
          f.current = this;
          try {
            e = this._renderValidatedComponentWithoutOwnerOrContext()
          } finally {
            f.current = null
          }
        } else e = this._renderValidatedComponentWithoutOwnerOrContext();
        return null === e || e === !1 || u.isValidElement( e ) ? void 0 : s( "109", this.getName() || "ReactCompositeComponent" ), e
      },
      attachRef: function ( e, t ) {
        var n = this.getPublicInstance();
        null == n ? s( "110" ) : void 0;
        var r = t.getPublicInstance(),
          o = n.refs === g ? n.refs = {} : n.refs;
        o[ e ] = r
      },
      detachRef: function ( e ) {
        var t = this.getPublicInstance().refs;
        delete t[ e ]
      },
      getName: function () {
        var e = this._currentElement.type,
          t = this._instance && this._instance.constructor;
        return e.displayName || t && t.displayName || e.name || t && t.name || null
      },
      getPublicInstance: function () {
        var e = this._instance;
        return this._compositeType === b.StatelessFunctional ? null : e
      },
      _instantiateReactComponent: null
    };
  e.exports = w
}, function ( e, t, n ) {
  "use strict";
  var r = n( 235 ),
    o = n( 97 ),
    i = ( n( 102 ), {
      HOST: 0,
      COMPOSITE: 1,
      EMPTY: 2,
      getType: function ( e ) {
        return null === e || e === !1 ? i.EMPTY : o.isValidElement( e ) ? "function" == typeof e.type ? i.COMPOSITE : i.HOST : void r( "26", e )
      }
    } );
  e.exports = i
}, function ( e, t ) {
  "use strict";

  function n( e, t ) {
    return e === t ? 0 !== e || 0 !== t || 1 / e === 1 / t : e !== e && t !== t
  }

  function r( e, t ) {
    if ( n( e, t ) ) return !0;
    if ( "object" != typeof e || null === e || "object" != typeof t || null === t ) return !1;
    var r = Object.keys( e ),
      i = Object.keys( t );
    if ( r.length !== i.length ) return !1;
    for ( var a = 0; a < r.length; a++ )
      if ( !o.call( t, r[ a ] ) || !n( e[ r[ a ] ], t[ r[ a ] ] ) ) return !1;
    return !0
  }
  var o = Object.prototype.hasOwnProperty;
  e.exports = r
}, function ( e, t ) {
  "use strict";

  function n( e, t ) {
    var n = null === e || e === !1,
      r = null === t || t === !1;
    if ( n || r ) return n === r;
    var o = typeof e,
      i = typeof t;
    return "string" === o || "number" === o ? "string" === i || "number" === i : "object" === i && e.type === t.type && e.key === t.key
  }
  e.exports = n
}, function ( e, t ) {
  "use strict";
  var n, r = {
      injectEmptyComponentFactory: function ( e ) {
        n = e
      }
    },
    o = {
      create: function ( e ) {
        return n( e )
      }
    };
  o.injection = r, e.exports = o
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    return s ? void 0 : a( "111", e.type ), new s( e )
  }

  function o( e ) {
    return new l( e )
  }

  function i( e ) {
    return e instanceof l
  }
  var a = n( 235 ),
    s = ( n( 102 ), null ),
    l = null,
    u = {
      injectGenericComponentClass: function ( e ) {
        s = e
      },
      injectTextComponentClass: function ( e ) {
        l = e
      }
    },
    c = {
      createInternalComponent: r,
      createInstanceForText: o,
      isTextComponent: i,
      injection: u
    };
  e.exports = c
}, function ( e, t ) {
  "use strict";

  function n() {
    return r++
  }
  var r = 1;
  e.exports = n
}, function ( e, t ) {
  "use strict";

  function n( e ) {
    var t = /[=:]/g,
      n = {
        "=": "=0",
        ":": "=2"
      },
      r = ( "" + e ).replace( t, function ( e ) {
        return n[ e ]
      } );
    return "$" + r
  }

  function r( e ) {
    var t = /(=0|=2)/g,
      n = {
        "=0": "=",
        "=2": ":"
      },
      r = "." === e[ 0 ] && "$" === e[ 1 ] ? e.substring( 2 ) : e.substring( 1 );
    return ( "" + r ).replace( t, function ( e ) {
      return n[ e ]
    } )
  }
  var o = {
    escape: n,
    unescape: r
  };
  e.exports = o
}, function ( e, t, n ) {
  "use strict";

  function r( e, t ) {
    return e && "object" == typeof e && null != e.key ? u.escape( e.key ) : t.toString( 36 )
  }

  function o( e, t, n, i ) {
    var p = typeof e;
    if ( "undefined" !== p && "boolean" !== p || ( e = null ), null === e || "string" === p || "number" === p || "object" === p && e.$$typeof === s ) return n( i, e, "" === t ? c + r( e, 0 ) : t ), 1;
    var d, h, v = 0,
      g = "" === t ? c : t + f;
    if ( Array.isArray( e ) )
      for ( var m = 0; m < e.length; m++ ) d = e[ m ], h = g + r( d, m ), v += o( d, h, n, i );
    else {
      var y = l( e );
      if ( y ) {
        var b, x = y.call( e );
        if ( y !== e.entries )
          for ( var w = 0; !( b = x.next() ).done; ) d = b.value, h = g + r( d, w++ ), v += o( d, h, n, i );
        else
          for ( ; !( b = x.next() ).done; ) {
            var _ = b.value;
            _ && ( d = _[ 1 ], h = g + u.escape( _[ 0 ] ) + f + r( d, 0 ), v += o( d, h, n, i ) )
          }
      } else if ( "object" === p ) {
        var C = "",
          k = String( e );
        a( "31", "[object Object]" === k ? "object with keys {" + Object.keys( e ).join( ", " ) + "}" : k, C )
      }
    }
    return v
  }

  function i( e, t, n ) {
    return null == e ? 0 : o( e, "", t, n )
  }
  var a = n( 235 ),
    s = ( n( 104 ), n( 324 ) ),
    l = n( 325 ),
    u = ( n( 102 ), n( 322 ) ),
    c = ( n( 105 ), "." ),
    f = ":";
  e.exports = i
}, function ( e, t ) {
  "use strict";
  var n = "function" == typeof Symbol && Symbol.for && Symbol.for( "react.element" ) || 60103;
  e.exports = n
}, function ( e, t ) {
  "use strict";

  function n( e ) {
    var t = e && ( r && e[ r ] || e[ o ] );
    if ( "function" == typeof t ) return t
  }
  var r = "function" == typeof Symbol && Symbol.iterator,
    o = "@@iterator";
  e.exports = n
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    var t = Function.prototype.toString,
      n = Object.prototype.hasOwnProperty,
      r = RegExp( "^" + t.call( n ).replace( /[\\^$.*+?()[\]{}|]/g, "\\$&" ).replace( /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?" ) + "$" );
    try {
      var o = t.call( e );
      return r.test( o )
    } catch ( e ) {
      return !1
    }
  }

  function o( e ) {
    var t = u( e );
    if ( t ) {
      var n = t.childIDs;
      c( e ), n.forEach( o )
    }
  }

  function i( e, t, n ) {
    return "\n    in " + ( e || "Unknown" ) + ( t ? " (at " + t.fileName.replace( /^.*[\\\/]/, "" ) + ":" + t.lineNumber + ")" : n ? " (created by " + n + ")" : "" )
  }

  function a( e ) {
    return null == e ? "#empty" : "string" == typeof e || "number" == typeof e ? "#text" : "string" == typeof e.type ? e.type : e.type.displayName || e.type.name || "Unknown"
  }

  function s( e ) {
    var t, n = E.getDisplayName( e ),
      r = E.getElement( e ),
      o = E.getOwnerID( e );
    return o && ( t = E.getDisplayName( o ) ), i( n, r && r._source, t )
  }
  var l, u, c, f, p, d, h, v = n( 101 ),
    g = n( 104 ),
    m = ( n( 102 ), n( 105 ), "function" == typeof Array.from && "function" == typeof Map && r( Map ) && null != Map.prototype && "function" == typeof Map.prototype.keys && r( Map.prototype.keys ) && "function" == typeof Set && r( Set ) && null != Set.prototype && "function" == typeof Set.prototype.keys && r( Set.prototype.keys ) );
  if ( m ) {
    var y = new Map,
      b = new Set;
    l = function ( e, t ) {
      y.set( e, t )
    }, u = function ( e ) {
      return y.get( e )
    }, c = function ( e ) {
      y.delete( e )
    }, f = function () {
      return Array.from( y.keys() )
    }, p = function ( e ) {
      b.add( e )
    }, d = function ( e ) {
      b.delete( e )
    }, h = function () {
      return Array.from( b.keys() )
    }
  } else {
    var x = {},
      w = {},
      _ = function ( e ) {
        return "." + e
      },
      C = function ( e ) {
        return parseInt( e.substr( 1 ), 10 )
      };
    l = function ( e, t ) {
      var n = _( e );
      x[ n ] = t
    }, u = function ( e ) {
      var t = _( e );
      return x[ t ]
    }, c = function ( e ) {
      var t = _( e );
      delete x[ t ]
    }, f = function () {
      return Object.keys( x ).map( C )
    }, p = function ( e ) {
      var t = _( e );
      w[ t ] = !0
    }, d = function ( e ) {
      var t = _( e );
      delete w[ t ]
    }, h = function () {
      return Object.keys( w ).map( C )
    }
  }
  var k = [],
    E = {
      onSetChildren: function ( e, t ) {
        var n = u( e );
        n ? void 0 : v( "144" ), n.childIDs = t;
        for ( var r = 0; r < t.length; r++ ) {
          var o = t[ r ],
            i = u( o );
          i ? void 0 : v( "140" ), null == i.childIDs && "object" == typeof i.element && null != i.element ? v( "141" ) : void 0, i.isMounted ? void 0 : v( "71" ), null == i.parentID && ( i.parentID = e ), i.parentID !== e ? v( "142", o, i.parentID, e ) : void 0
        }
      },
      onBeforeMountComponent: function ( e, t, n ) {
        var r = {
          element: t,
          parentID: n,
          text: null,
          childIDs: [],
          isMounted: !1,
          updateCount: 0
        };
        l( e, r )
      },
      onBeforeUpdateComponent: function ( e, t ) {
        var n = u( e );
        n && n.isMounted && ( n.element = t )
      },
      onMountComponent: function ( e ) {
        var t = u( e );
        t ? void 0 : v( "144" ), t.isMounted = !0;
        var n = 0 === t.parentID;
        n && p( e )
      },
      onUpdateComponent: function ( e ) {
        var t = u( e );
        t && t.isMounted && t.updateCount++
      },
      onUnmountComponent: function ( e ) {
        var t = u( e );
        if ( t ) {
          t.isMounted = !1;
          var n = 0 === t.parentID;
          n && d( e )
        }
        k.push( e )
      },
      purgeUnmountedComponents: function () {
        if ( !E._preventPurging ) {
          for ( var e = 0; e < k.length; e++ ) {
            var t = k[ e ];
            o( t )
          }
          k.length = 0
        }
      },
      isMounted: function ( e ) {
        var t = u( e );
        return !!t && t.isMounted
      },
      getCurrentStackAddendum: function ( e ) {
        var t = "";
        if ( e ) {
          var n = a( e ),
            r = e._owner;
          t += i( n, e._source, r && r.getName() )
        }
        var o = g.current,
          s = o && o._debugID;
        return t += E.getStackAddendumByID( s )
      },
      getStackAddendumByID: function ( e ) {
        for ( var t = ""; e; ) t += s( e ), e = E.getParentID( e );
        return t
      },
      getChildIDs: function ( e ) {
        var t = u( e );
        return t ? t.childIDs : []
      },
      getDisplayName: function ( e ) {
        var t = E.getElement( e );
        return t ? a( t ) : null
      },
      getElement: function ( e ) {
        var t = u( e );
        return t ? t.element : null
      },
      getOwnerID: function ( e ) {
        var t = E.getElement( e );
        return t && t._owner ? t._owner._debugID : null
      },
      getParentID: function ( e ) {
        var t = u( e );
        return t ? t.parentID : null
      },
      getSource: function ( e ) {
        var t = u( e ),
          n = t ? t.element : null,
          r = null != n ? n._source : null;
        return r
      },
      getText: function ( e ) {
        var t = E.getElement( e );
        return "string" == typeof t ? t : "number" == typeof t ? "" + t : null
      },
      getUpdateCount: function ( e ) {
        var t = u( e );
        return t ? t.updateCount : 0
      },
      getRootIDs: h,
      getRegisteredIDs: f
    };
  e.exports = E
}, function ( e, t, n ) {
  ( function ( t ) {
    "use strict";

    function r( e, t, n, r ) {
      if ( e && "object" == typeof e ) {
        var o = e,
          i = void 0 === o[ n ];
        i && null != t && ( o[ n ] = t )
      }
    }

    function o( e, t ) {
      if ( null == e ) return e;
      var n = {};
      return i( e, r, n ), n
    }
    var i = ( n( 322 ), n( 323 ) );
    n( 105 );
    "undefined" != typeof t && t.env, 1, e.exports = o
  } ).call( t, n( 313 ) )
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    this.reinitializeTransaction(), this.renderToStaticMarkup = e, this.useCreateElement = !1, this.updateQueue = new s( this )
  }
  var o = n( 98 ),
    i = n( 250 ),
    a = n( 263 ),
    s = ( n( 262 ), n( 329 ) ),
    l = [],
    u = {
      enqueue: function () {}
    },
    c = {
      getTransactionWrappers: function () {
        return l
      },
      getReactMountReady: function () {
        return u
      },
      getUpdateQueue: function () {
        return this.updateQueue
      },
      destructor: function () {},
      checkpoint: function () {},
      rollback: function () {}
    };
  o( r.prototype, a, c ), i.addPoolingTo( r ), e.exports = r
}, function ( e, t, n ) {
  "use strict";

  function r( e, t ) {
    if ( !( e instanceof t ) ) throw new TypeError( "Cannot call a class as a function" )
  }

  function o( e, t ) {}
  var i = n( 330 ),
    a = ( n( 105 ), function () {
      function e( t ) {
        r( this, e ), this.transaction = t
      }
      return e.prototype.isMounted = function ( e ) {
        return !1
      }, e.prototype.enqueueCallback = function ( e, t, n ) {
        this.transaction.isInTransaction() && i.enqueueCallback( e, t, n )
      }, e.prototype.enqueueForceUpdate = function ( e ) {
        this.transaction.isInTransaction() ? i.enqueueForceUpdate( e ) : o( e, "forceUpdate" )
      }, e.prototype.enqueueReplaceState = function ( e, t ) {
        this.transaction.isInTransaction() ? i.enqueueReplaceState( e, t ) : o( e, "replaceState" )
      }, e.prototype.enqueueSetState = function ( e, t ) {
        this.transaction.isInTransaction() ? i.enqueueSetState( e, t ) : o( e, "setState" )
      }, e
    }() );
  e.exports = a
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    l.enqueueUpdate( e )
  }

  function o( e ) {
    var t = typeof e;
    if ( "object" !== t ) return t;
    var n = e.constructor && e.constructor.name || t,
      r = Object.keys( e );
    return r.length > 0 && r.length < 20 ? n + " (keys: " + r.join( ", " ) + ")" : n
  }

  function i( e, t ) {
    var n = s.get( e );
    if ( !n ) {
      return null
    }
    return n
  }
  var a = n( 235 ),
    s = ( n( 104 ), n( 311 ) ),
    l = ( n( 262 ), n( 256 ) ),
    u = ( n( 102 ), n( 105 ), {
      isMounted: function ( e ) {
        var t = s.get( e );
        return !!t && !!t._renderedComponent
      },
      enqueueCallback: function ( e, t, n ) {
        u.validateCallback( t, n );
        var o = i( e );
        return o ? ( o._pendingCallbacks ? o._pendingCallbacks.push( t ) : o._pendingCallbacks = [ t ], void r( o ) ) : null
      },
      enqueueCallbackInternal: function ( e, t ) {
        e._pendingCallbacks ? e._pendingCallbacks.push( t ) : e._pendingCallbacks = [ t ], r( e )
      },
      enqueueForceUpdate: function ( e ) {
        var t = i( e, "forceUpdate" );
        t && ( t._pendingForceUpdate = !0, r( t ) )
      },
      enqueueReplaceState: function ( e, t ) {
        var n = i( e, "replaceState" );
        n && ( n._pendingStateQueue = [ t ], n._pendingReplaceState = !0, r( n ) )
      },
      enqueueSetState: function ( e, t ) {
        var n = i( e, "setState" );
        if ( n ) {
          var o = n._pendingStateQueue || ( n._pendingStateQueue = [] );
          o.push( t ), r( n )
        }
      },
      enqueueElementInternal: function ( e, t, n ) {
        e._pendingElement = t, e._context = n, r( e )
      },
      validateCallback: function ( e, t ) {
        e && "function" != typeof e ? a( "122", t, o( e ) ) : void 0
      }
    } );
  e.exports = u
}, function ( e, t, n ) {
  "use strict";
  var r = ( n( 98 ), n( 106 ) ),
    o = ( n( 105 ), r );
  e.exports = o
}, function ( e, t, n ) {
  "use strict";
  var r = n( 98 ),
    o = n( 276 ),
    i = n( 234 ),
    a = function ( e ) {
      this._currentElement = null, this._hostNode = null, this._hostParent = null, this._hostContainerInfo = null, this._domID = 0
    };
  r( a.prototype, {
    mountComponent: function ( e, t, n, r ) {
      var a = n._idCounter++;
      this._domID = a, this._hostParent = t, this._hostContainerInfo = n;
      var s = " react-empty: " + this._domID + " ";
      if ( e.useCreateElement ) {
        var l = n._ownerDocument,
          u = l.createComment( s );
        return i.precacheNode( this, u ), o( u )
      }
      return e.renderToStaticMarkup ? "" : "<!--" + s + "-->"
    },
    receiveComponent: function () {},
    getHostNode: function () {
      return i.getNodeFromInstance( this )
    },
    unmountComponent: function () {
      i.uncacheNode( this )
    }
  } ), e.exports = a
}, function ( e, t, n ) {
  "use strict";

  function r( e, t ) {
    "_hostNode" in e ? void 0 : l( "33" ), "_hostNode" in t ? void 0 : l( "33" );
    for ( var n = 0, r = e; r; r = r._hostParent ) n++;
    for ( var o = 0, i = t; i; i = i._hostParent ) o++;
    for ( ; n - o > 0; ) e = e._hostParent, n--;
    for ( ; o - n > 0; ) t = t._hostParent, o--;
    for ( var a = n; a--; ) {
      if ( e === t ) return e;
      e = e._hostParent, t = t._hostParent
    }
    return null
  }

  function o( e, t ) {
    "_hostNode" in e ? void 0 : l( "35" ), "_hostNode" in t ? void 0 : l( "35" );
    for ( ; t; ) {
      if ( t === e ) return !0;
      t = t._hostParent
    }
    return !1
  }

  function i( e ) {
    return "_hostNode" in e ? void 0 : l( "36" ), e._hostParent
  }

  function a( e, t, n ) {
    for ( var r = []; e; ) r.push( e ), e = e._hostParent;
    var o;
    for ( o = r.length; o-- > 0; ) t( r[ o ], "captured", n );
    for ( o = 0; o < r.length; o++ ) t( r[ o ], "bubbled", n )
  }

  function s( e, t, n, o, i ) {
    for ( var a = e && t ? r( e, t ) : null, s = []; e && e !== a; ) s.push( e ), e = e._hostParent;
    for ( var l = []; t && t !== a; ) l.push( t ), t = t._hostParent;
    var u;
    for ( u = 0; u < s.length; u++ ) n( s[ u ], "bubbled", o );
    for ( u = l.length; u-- > 0; ) n( l[ u ], "captured", i )
  }
  var l = n( 235 );
  n( 102 );
  e.exports = {
    isAncestor: o,
    getLowestCommonAncestor: r,
    getParentInstance: i,
    traverseTwoPhase: a,
    traverseEnterLeave: s
  }
}, function ( e, t, n ) {
  "use strict";
  var r = n( 235 ),
    o = n( 98 ),
    i = n( 275 ),
    a = n( 276 ),
    s = n( 234 ),
    l = n( 281 ),
    u = ( n( 102 ), n( 331 ), function ( e ) {
      this._currentElement = e, this._stringText = "" + e, this._hostNode = null, this._hostParent = null, this._domID = 0, this._mountIndex = 0, this._closingComment = null, this._commentNodes = null
    } );
  o( u.prototype, {
    mountComponent: function ( e, t, n, r ) {
      var o = n._idCounter++,
        i = " react-text: " + o + " ",
        u = " /react-text ";
      if ( this._domID = o, this._hostParent = t, e.useCreateElement ) {
        var c = n._ownerDocument,
          f = c.createComment( i ),
          p = c.createComment( u ),
          d = a( c.createDocumentFragment() );
        return a.queueChild( d, a( f ) ), this._stringText && a.queueChild( d, a( c.createTextNode( this._stringText ) ) ), a.queueChild( d, a( p ) ), s.precacheNode( this, f ), this._closingComment = p, d
      }
      var h = l( this._stringText );
      return e.renderToStaticMarkup ? h : "<!--" + i + "-->" + h + "<!--" + u + "-->"
    },
    receiveComponent: function ( e, t ) {
      if ( e !== this._currentElement ) {
        this._currentElement = e;
        var n = "" + e;
        if ( n !== this._stringText ) {
          this._stringText = n;
          var r = this.getHostNode();
          i.replaceDelimitedText( r[ 0 ], r[ 1 ], n )
        }
      }
    },
    getHostNode: function () {
      var e = this._commentNodes;
      if ( e ) return e;
      if ( !this._closingComment )
        for ( var t = s.getNodeFromInstance( this ), n = t.nextSibling;; ) {
          if ( null == n ? r( "67", this._domID ) : void 0, 8 === n.nodeType && " /react-text " === n.nodeValue ) {
            this._closingComment = n;
            break
          }
          n = n.nextSibling
        }
      return e = [ this._hostNode, this._closingComment ], this._commentNodes = e, e
    },
    unmountComponent: function () {
      this._closingComment = null, this._commentNodes = null, s.uncacheNode( this )
    }
  } ), e.exports = u
}, function ( e, t, n ) {
  "use strict";

  function r() {
    this.reinitializeTransaction()
  }
  var o = n( 98 ),
    i = n( 256 ),
    a = n( 263 ),
    s = n( 106 ),
    l = {
      initialize: s,
      close: function () {
        p.isBatchingUpdates = !1
      }
    },
    u = {
      initialize: s,
      close: i.flushBatchedUpdates.bind( i )
    },
    c = [ u, l ];
  o( r.prototype, a, {
    getTransactionWrappers: function () {
      return c
    }
  } );
  var f = new r,
    p = {
      isBatchingUpdates: !1,
      batchedUpdates: function ( e, t, n, r, o, i ) {
        var a = p.isBatchingUpdates;
        return p.isBatchingUpdates = !0, a ? e( t, n, r, o, i ) : f.perform( e, null, t, n, r, o, i )
      }
    };
  e.exports = p
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    for ( ; e._hostParent; ) e = e._hostParent;
    var t = f.getNodeFromInstance( e ),
      n = t.parentNode;
    return f.getClosestInstanceFromNode( n )
  }

  function o( e, t ) {
    this.topLevelType = e, this.nativeEvent = t, this.ancestors = []
  }

  function i( e ) {
    var t = d( e.nativeEvent ),
      n = f.getClosestInstanceFromNode( t ),
      o = n;
    do e.ancestors.push( o ), o = o && r( o ); while ( o );
    for ( var i = 0; i < e.ancestors.length; i++ ) n = e.ancestors[ i ], v._handleTopLevel( e.topLevelType, n, e.nativeEvent, d( e.nativeEvent ) )
  }

  function a( e ) {
    var t = h( window );
    e( t )
  }
  var s = n( 98 ),
    l = n( 337 ),
    u = n( 248 ),
    c = n( 250 ),
    f = n( 234 ),
    p = n( 256 ),
    d = n( 264 ),
    h = n( 338 );
  s( o.prototype, {
    destructor: function () {
      this.topLevelType = null, this.nativeEvent = null, this.ancestors.length = 0
    }
  } ), c.addPoolingTo( o, c.twoArgumentPooler );
  var v = {
    _enabled: !0,
    _handleTopLevel: null,
    WINDOW_HANDLE: u.canUseDOM ? window : null,
    setHandleTopLevel: function ( e ) {
      v._handleTopLevel = e
    },
    setEnabled: function ( e ) {
      v._enabled = !!e
    },
    isEnabled: function () {
      return v._enabled
    },
    trapBubbledEvent: function ( e, t, n ) {
      return n ? l.listen( n, t, v.dispatchEvent.bind( null, e ) ) : null
    },
    trapCapturedEvent: function ( e, t, n ) {
      return n ? l.capture( n, t, v.dispatchEvent.bind( null, e ) ) : null
    },
    monitorScrollValue: function ( e ) {
      var t = a.bind( null, e );
      l.listen( window, "scroll", t )
    },
    dispatchEvent: function ( e, t ) {
      if ( v._enabled ) {
        var n = o.getPooled( e, t );
        try {
          p.batchedUpdates( i, n )
        } finally {
          o.release( n )
        }
      }
    }
  };
  e.exports = v
}, function ( e, t, n ) {
  "use strict";
  var r = n( 106 ),
    o = {
      listen: function ( e, t, n ) {
        return e.addEventListener ? ( e.addEventListener( t, n, !1 ), {
          remove: function () {
            e.removeEventListener( t, n, !1 )
          }
        } ) : e.attachEvent ? ( e.attachEvent( "on" + t, n ), {
          remove: function () {
            e.detachEvent( "on" + t, n )
          }
        } ) : void 0
      },
      capture: function ( e, t, n ) {
        return e.addEventListener ? ( e.addEventListener( t, n, !0 ), {
          remove: function () {
            e.removeEventListener( t, n, !0 )
          }
        } ) : {
          remove: r
        }
      },
      registerDefault: function () {}
    };
  e.exports = o
}, function ( e, t ) {
  "use strict";

  function n( e ) {
    return e === window ? {
      x: window.pageXOffset || document.documentElement.scrollLeft,
      y: window.pageYOffset || document.documentElement.scrollTop
    } : {
      x: e.scrollLeft,
      y: e.scrollTop
    }
  }
  e.exports = n
}, function ( e, t, n ) {
  "use strict";
  var r = n( 236 ),
    o = n( 242 ),
    i = n( 244 ),
    a = n( 310 ),
    s = n( 319 ),
    l = n( 300 ),
    u = n( 320 ),
    c = n( 256 ),
    f = {
      Component: a.injection,
      DOMProperty: r.injection,
      EmptyComponent: s.injection,
      EventPluginHub: o.injection,
      EventPluginUtils: i.injection,
      EventEmitter: l.injection,
      HostComponent: u.injection,
      Updates: c.injection
    };
  e.exports = f
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    this.reinitializeTransaction(), this.renderToStaticMarkup = !1, this.reactMountReady = i.getPooled( null ), this.useCreateElement = e
  }
  var o = n( 98 ),
    i = n( 257 ),
    a = n( 250 ),
    s = n( 300 ),
    l = n( 341 ),
    u = ( n( 262 ), n( 263 ) ),
    c = n( 330 ),
    f = {
      initialize: l.getSelectionInformation,
      close: l.restoreSelection
    },
    p = {
      initialize: function () {
        var e = s.isEnabled();
        return s.setEnabled( !1 ), e
      },
      close: function ( e ) {
        s.setEnabled( e )
      }
    },
    d = {
      initialize: function () {
        this.reactMountReady.reset()
      },
      close: function () {
        this.reactMountReady.notifyAll()
      }
    },
    h = [ f, p, d ],
    v = {
      getTransactionWrappers: function () {
        return h
      },
      getReactMountReady: function () {
        return this.reactMountReady
      },
      getUpdateQueue: function () {
        return c
      },
      checkpoint: function () {
        return this.reactMountReady.checkpoint()
      },
      rollback: function ( e ) {
        this.reactMountReady.rollback( e )
      },
      destructor: function () {
        i.release( this.reactMountReady ), this.reactMountReady = null
      }
    };
  o( r.prototype, u, v ), a.addPoolingTo( r ), e.exports = r
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    return i( document.documentElement, e )
  }
  var o = n( 342 ),
    i = n( 344 ),
    a = n( 289 ),
    s = n( 347 ),
    l = {
      hasSelectionCapabilities: function ( e ) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && ( "input" === t && "text" === e.type || "textarea" === t || "true" === e.contentEditable )
      },
      getSelectionInformation: function () {
        var e = s();
        return {
          focusedElem: e,
          selectionRange: l.hasSelectionCapabilities( e ) ? l.getSelection( e ) : null
        }
      },
      restoreSelection: function ( e ) {
        var t = s(),
          n = e.focusedElem,
          o = e.selectionRange;
        t !== n && r( n ) && ( l.hasSelectionCapabilities( n ) && l.setSelection( n, o ), a( n ) )
      },
      getSelection: function ( e ) {
        var t;
        if ( "selectionStart" in e ) t = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
        else if ( document.selection && e.nodeName && "input" === e.nodeName.toLowerCase() ) {
          var n = document.selection.createRange();
          n.parentElement() === e && ( t = {
            start: -n.moveStart( "character", -e.value.length ),
            end: -n.moveEnd( "character", -e.value.length )
          } )
        } else t = o.getOffsets( e );
        return t || {
          start: 0,
          end: 0
        }
      },
      setSelection: function ( e, t ) {
        var n = t.start,
          r = t.end;
        if ( void 0 === r && ( r = n ), "selectionStart" in e ) e.selectionStart = n, e.selectionEnd = Math.min( r, e.value.length );
        else if ( document.selection && e.nodeName && "input" === e.nodeName.toLowerCase() ) {
          var i = e.createTextRange();
          i.collapse( !0 ), i.moveStart( "character", n ), i.moveEnd( "character", r - n ), i.select()
        } else o.setOffsets( e, t )
      }
    };
  e.exports = l
}, function ( e, t, n ) {
  "use strict";

  function r( e, t, n, r ) {
    return e === n && t === r
  }

  function o( e ) {
    var t = document.selection,
      n = t.createRange(),
      r = n.text.length,
      o = n.duplicate();
    o.moveToElementText( e ), o.setEndPoint( "EndToStart", n );
    var i = o.text.length,
      a = i + r;
    return {
      start: i,
      end: a
    }
  }

  function i( e ) {
    var t = window.getSelection && window.getSelection();
    if ( !t || 0 === t.rangeCount ) return null;
    var n = t.anchorNode,
      o = t.anchorOffset,
      i = t.focusNode,
      a = t.focusOffset,
      s = t.getRangeAt( 0 );
    try {
      s.startContainer.nodeType, s.endContainer.nodeType
    } catch ( e ) {
      return null
    }
    var l = r( t.anchorNode, t.anchorOffset, t.focusNode, t.focusOffset ),
      u = l ? 0 : s.toString().length,
      c = s.cloneRange();
    c.selectNodeContents( e ), c.setEnd( s.startContainer, s.startOffset );
    var f = r( c.startContainer, c.startOffset, c.endContainer, c.endOffset ),
      p = f ? 0 : c.toString().length,
      d = p + u,
      h = document.createRange();
    h.setStart( n, o ), h.setEnd( i, a );
    var v = h.collapsed;
    return {
      start: v ? d : p,
      end: v ? p : d
    }
  }

  function a( e, t ) {
    var n, r, o = document.selection.createRange().duplicate();
    void 0 === t.end ? ( n = t.start, r = n ) : t.start > t.end ? ( n = t.end, r = t.start ) : ( n = t.start, r = t.end ), o.moveToElementText( e ), o.moveStart( "character", n ), o.setEndPoint( "EndToStart", o ), o.moveEnd( "character", r - n ), o.select()
  }

  function s( e, t ) {
    if ( window.getSelection ) {
      var n = window.getSelection(),
        r = e[ c() ].length,
        o = Math.min( t.start, r ),
        i = void 0 === t.end ? o : Math.min( t.end, r );
      if ( !n.extend && o > i ) {
        var a = i;
        i = o, o = a
      }
      var s = u( e, o ),
        l = u( e, i );
      if ( s && l ) {
        var f = document.createRange();
        f.setStart( s.node, s.offset ), n.removeAllRanges(), o > i ? ( n.addRange( f ), n.extend( l.node, l.offset ) ) : ( f.setEnd( l.node, l.offset ), n.addRange( f ) )
      }
    }
  }
  var l = n( 248 ),
    u = n( 343 ),
    c = n( 251 ),
    f = l.canUseDOM && "selection" in document && !( "getSelection" in window ),
    p = {
      getOffsets: f ? o : i,
      setOffsets: f ? a : s
    };
  e.exports = p
}, function ( e, t ) {
  "use strict";

  function n( e ) {
    for ( ; e && e.firstChild; ) e = e.firstChild;
    return e
  }

  function r( e ) {
    for ( ; e; ) {
      if ( e.nextSibling ) return e.nextSibling;
      e = e.parentNode
    }
  }

  function o( e, t ) {
    for ( var o = n( e ), i = 0, a = 0; o; ) {
      if ( 3 === o.nodeType ) {
        if ( a = i + o.textContent.length, i <= t && a >= t ) return {
          node: o,
          offset: t - i
        };
        i = a
      }
      o = n( r( o ) )
    }
  }
  e.exports = o
}, function ( e, t, n ) {
  "use strict";

  function r( e, t ) {
    return !( !e || !t ) && ( e === t || !o( e ) && ( o( t ) ? r( e, t.parentNode ) : "contains" in e ? e.contains( t ) : !!e.compareDocumentPosition && !!( 16 & e.compareDocumentPosition( t ) ) ) )
  }
  var o = n( 345 );
  e.exports = r
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    return o( e ) && 3 == e.nodeType
  }
  var o = n( 346 );
  e.exports = r
}, function ( e, t ) {
  "use strict";

  function n( e ) {
    return !( !e || !( "function" == typeof Node ? e instanceof Node : "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName ) )
  }
  e.exports = n
}, function ( e, t ) {
  "use strict";

  function n() {
    if ( "undefined" == typeof document ) return null;
    try {
      return document.activeElement || document.body
    } catch ( e ) {
      return document.body
    }
  }
  e.exports = n
}, function ( e, t ) {
  "use strict";
  var n = {
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace"
    },
    r = {
      accentHeight: "accent-height",
      accumulate: 0,
      additive: 0,
      alignmentBaseline: "alignment-baseline",
      allowReorder: "allowReorder",
      alphabetic: 0,
      amplitude: 0,
      arabicForm: "arabic-form",
      ascent: 0,
      attributeName: "attributeName",
      attributeType: "attributeType",
      autoReverse: "autoReverse",
      azimuth: 0,
      baseFrequency: "baseFrequency",
      baseProfile: "baseProfile",
      baselineShift: "baseline-shift",
      bbox: 0,
      begin: 0,
      bias: 0,
      by: 0,
      calcMode: "calcMode",
      capHeight: "cap-height",
      clip: 0,
      clipPath: "clip-path",
      clipRule: "clip-rule",
      clipPathUnits: "clipPathUnits",
      colorInterpolation: "color-interpolation",
      colorInterpolationFilters: "color-interpolation-filters",
      colorProfile: "color-profile",
      colorRendering: "color-rendering",
      contentScriptType: "contentScriptType",
      contentStyleType: "contentStyleType",
      cursor: 0,
      cx: 0,
      cy: 0,
      d: 0,
      decelerate: 0,
      descent: 0,
      diffuseConstant: "diffuseConstant",
      direction: 0,
      display: 0,
      divisor: 0,
      dominantBaseline: "dominant-baseline",
      dur: 0,
      dx: 0,
      dy: 0,
      edgeMode: "edgeMode",
      elevation: 0,
      enableBackground: "enable-background",
      end: 0,
      exponent: 0,
      externalResourcesRequired: "externalResourcesRequired",
      fill: 0,
      fillOpacity: "fill-opacity",
      fillRule: "fill-rule",
      filter: 0,
      filterRes: "filterRes",
      filterUnits: "filterUnits",
      floodColor: "flood-color",
      floodOpacity: "flood-opacity",
      focusable: 0,
      fontFamily: "font-family",
      fontSize: "font-size",
      fontSizeAdjust: "font-size-adjust",
      fontStretch: "font-stretch",
      fontStyle: "font-style",
      fontVariant: "font-variant",
      fontWeight: "font-weight",
      format: 0,
      from: 0,
      fx: 0,
      fy: 0,
      g1: 0,
      g2: 0,
      glyphName: "glyph-name",
      glyphOrientationHorizontal: "glyph-orientation-horizontal",
      glyphOrientationVertical: "glyph-orientation-vertical",
      glyphRef: "glyphRef",
      gradientTransform: "gradientTransform",
      gradientUnits: "gradientUnits",
      hanging: 0,
      horizAdvX: "horiz-adv-x",
      horizOriginX: "horiz-origin-x",
      ideographic: 0,
      imageRendering: "image-rendering",
      in: 0,
      in2: 0,
      intercept: 0,
      k: 0,
      k1: 0,
      k2: 0,
      k3: 0,
      k4: 0,
      kernelMatrix: "kernelMatrix",
      kernelUnitLength: "kernelUnitLength",
      kerning: 0,
      keyPoints: "keyPoints",
      keySplines: "keySplines",
      keyTimes: "keyTimes",
      lengthAdjust: "lengthAdjust",
      letterSpacing: "letter-spacing",
      lightingColor: "lighting-color",
      limitingConeAngle: "limitingConeAngle",
      local: 0,
      markerEnd: "marker-end",
      markerMid: "marker-mid",
      markerStart: "marker-start",
      markerHeight: "markerHeight",
      markerUnits: "markerUnits",
      markerWidth: "markerWidth",
      mask: 0,
      maskContentUnits: "maskContentUnits",
      maskUnits: "maskUnits",
      mathematical: 0,
      mode: 0,
      numOctaves: "numOctaves",
      offset: 0,
      opacity: 0,
      operator: 0,
      order: 0,
      orient: 0,
      orientation: 0,
      origin: 0,
      overflow: 0,
      overlinePosition: "overline-position",
      overlineThickness: "overline-thickness",
      paintOrder: "paint-order",
      panose1: "panose-1",
      pathLength: "pathLength",
      patternContentUnits: "patternContentUnits",
      patternTransform: "patternTransform",
      patternUnits: "patternUnits",
      pointerEvents: "pointer-events",
      points: 0,
      pointsAtX: "pointsAtX",
      pointsAtY: "pointsAtY",
      pointsAtZ: "pointsAtZ",
      preserveAlpha: "preserveAlpha",
      preserveAspectRatio: "preserveAspectRatio",
      primitiveUnits: "primitiveUnits",
      r: 0,
      radius: 0,
      refX: "refX",
      refY: "refY",
      renderingIntent: "rendering-intent",
      repeatCount: "repeatCount",
      repeatDur: "repeatDur",
      requiredExtensions: "requiredExtensions",
      requiredFeatures: "requiredFeatures",
      restart: 0,
      result: 0,
      rotate: 0,
      rx: 0,
      ry: 0,
      scale: 0,
      seed: 0,
      shapeRendering: "shape-rendering",
      slope: 0,
      spacing: 0,
      specularConstant: "specularConstant",
      specularExponent: "specularExponent",
      speed: 0,
      spreadMethod: "spreadMethod",
      startOffset: "startOffset",
      stdDeviation: "stdDeviation",
      stemh: 0,
      stemv: 0,
      stitchTiles: "stitchTiles",
      stopColor: "stop-color",
      stopOpacity: "stop-opacity",
      strikethroughPosition: "strikethrough-position",
      strikethroughThickness: "strikethrough-thickness",
      string: 0,
      stroke: 0,
      strokeDasharray: "stroke-dasharray",
      strokeDashoffset: "stroke-dashoffset",
      strokeLinecap: "stroke-linecap",
      strokeLinejoin: "stroke-linejoin",
      strokeMiterlimit: "stroke-miterlimit",
      strokeOpacity: "stroke-opacity",
      strokeWidth: "stroke-width",
      surfaceScale: "surfaceScale",
      systemLanguage: "systemLanguage",
      tableValues: "tableValues",
      targetX: "targetX",
      targetY: "targetY",
      textAnchor: "text-anchor",
      textDecoration: "text-decoration",
      textRendering: "text-rendering",
      textLength: "textLength",
      to: 0,
      transform: 0,
      u1: 0,
      u2: 0,
      underlinePosition: "underline-position",
      underlineThickness: "underline-thickness",
      unicode: 0,
      unicodeBidi: "unicode-bidi",
      unicodeRange: "unicode-range",
      unitsPerEm: "units-per-em",
      vAlphabetic: "v-alphabetic",
      vHanging: "v-hanging",
      vIdeographic: "v-ideographic",
      vMathematical: "v-mathematical",
      values: 0,
      vectorEffect: "vector-effect",
      version: 0,
      vertAdvY: "vert-adv-y",
      vertOriginX: "vert-origin-x",
      vertOriginY: "vert-origin-y",
      viewBox: "viewBox",
      viewTarget: "viewTarget",
      visibility: 0,
      widths: 0,
      wordSpacing: "word-spacing",
      writingMode: "writing-mode",
      x: 0,
      xHeight: "x-height",
      x1: 0,
      x2: 0,
      xChannelSelector: "xChannelSelector",
      xlinkActuate: "xlink:actuate",
      xlinkArcrole: "xlink:arcrole",
      xlinkHref: "xlink:href",
      xlinkRole: "xlink:role",
      xlinkShow: "xlink:show",
      xlinkTitle: "xlink:title",
      xlinkType: "xlink:type",
      xmlBase: "xml:base",
      xmlns: 0,
      xmlnsXlink: "xmlns:xlink",
      xmlLang: "xml:lang",
      xmlSpace: "xml:space",
      y: 0,
      y1: 0,
      y2: 0,
      yChannelSelector: "yChannelSelector",
      z: 0,
      zoomAndPan: "zoomAndPan"
    },
    o = {
      Properties: {},
      DOMAttributeNamespaces: {
        xlinkActuate: n.xlink,
        xlinkArcrole: n.xlink,
        xlinkHref: n.xlink,
        xlinkRole: n.xlink,
        xlinkShow: n.xlink,
        xlinkTitle: n.xlink,
        xlinkType: n.xlink,
        xmlBase: n.xml,
        xmlLang: n.xml,
        xmlSpace: n.xml
      },
      DOMAttributeNames: {}
    };
  Object.keys( r ).forEach( function ( e ) {
    o.Properties[ e ] = 0, r[ e ] && ( o.DOMAttributeNames[ e ] = r[ e ] )
  } ), e.exports = o
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    if ( "selectionStart" in e && l.hasSelectionCapabilities( e ) ) return {
      start: e.selectionStart,
      end: e.selectionEnd
    };
    if ( window.getSelection ) {
      var t = window.getSelection();
      return {
        anchorNode: t.anchorNode,
        anchorOffset: t.anchorOffset,
        focusNode: t.focusNode,
        focusOffset: t.focusOffset
      }
    }
    if ( document.selection ) {
      var n = document.selection.createRange();
      return {
        parentElement: n.parentElement(),
        text: n.text,
        top: n.boundingTop,
        left: n.boundingLeft
      }
    }
  }

  function o( e, t ) {
    if ( y || null == v || v !== c() ) return null;
    var n = r( v );
    if ( !m || !p( m, n ) ) {
      m = n;
      var o = u.getPooled( h.select, g, e, t );
      return o.type = "select", o.target = v, i.accumulateTwoPhaseDispatches( o ), o
    }
    return null
  }
  var i = n( 241 ),
    a = n( 248 ),
    s = n( 234 ),
    l = n( 341 ),
    u = n( 253 ),
    c = n( 347 ),
    f = n( 266 ),
    p = n( 317 ),
    d = a.canUseDOM && "documentMode" in document && document.documentMode <= 11,
    h = {
      select: {
        phasedRegistrationNames: {
          bubbled: "onSelect",
          captured: "onSelectCapture"
        },
        dependencies: [ "topBlur", "topContextMenu", "topFocus", "topKeyDown", "topKeyUp", "topMouseDown", "topMouseUp", "topSelectionChange" ]
      }
    },
    v = null,
    g = null,
    m = null,
    y = !1,
    b = !1,
    x = {
      eventTypes: h,
      extractEvents: function ( e, t, n, r ) {
        if ( !b ) return null;
        var i = t ? s.getNodeFromInstance( t ) : window;
        switch ( e ) {
          case "topFocus":
            ( f( i ) || "true" === i.contentEditable ) && ( v = i, g = t, m = null );
            break;
          case "topBlur":
            v = null, g = null, m = null;
            break;
          case "topMouseDown":
            y = !0;
            break;
          case "topContextMenu":
          case "topMouseUp":
            return y = !1, o( n, r );
          case "topSelectionChange":
            if ( d ) break;
          case "topKeyDown":
          case "topKeyUp":
            return o( n, r )
        }
        return null
      },
      didPutListener: function ( e, t, n ) {
        "onSelect" === t && ( b = !0 )
      }
    };
  e.exports = x
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    return "." + e._rootNodeID
  }

  function o( e ) {
    return "button" === e || "input" === e || "select" === e || "textarea" === e
  }
  var i = n( 235 ),
    a = n( 337 ),
    s = n( 241 ),
    l = n( 234 ),
    u = n( 351 ),
    c = n( 352 ),
    f = n( 253 ),
    p = n( 353 ),
    d = n( 354 ),
    h = n( 269 ),
    v = n( 357 ),
    g = n( 358 ),
    m = n( 359 ),
    y = n( 270 ),
    b = n( 360 ),
    x = n( 106 ),
    w = n( 355 ),
    _ = ( n( 102 ), {} ),
    C = {};
  [ "abort", "animationEnd", "animationIteration", "animationStart", "blur", "canPlay", "canPlayThrough", "click", "contextMenu", "copy", "cut", "doubleClick", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "focus", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "progress", "rateChange", "reset", "scroll", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchMove", "touchStart", "transitionEnd", "volumeChange", "waiting", "wheel" ].forEach( function ( e ) {
    var t = e[ 0 ].toUpperCase() + e.slice( 1 ),
      n = "on" + t,
      r = "top" + t,
      o = {
        phasedRegistrationNames: {
          bubbled: n,
          captured: n + "Capture"
        },
        dependencies: [ r ]
      };
    _[ e ] = o, C[ r ] = o
  } );
  var k = {},
    E = {
      eventTypes: _,
      extractEvents: function ( e, t, n, r ) {
        var o = C[ e ];
        if ( !o ) return null;
        var a;
        switch ( e ) {
          case "topAbort":
          case "topCanPlay":
          case "topCanPlayThrough":
          case "topDurationChange":
          case "topEmptied":
          case "topEncrypted":
          case "topEnded":
          case "topError":
          case "topInput":
          case "topInvalid":
          case "topLoad":
          case "topLoadedData":
          case "topLoadedMetadata":
          case "topLoadStart":
          case "topPause":
          case "topPlay":
          case "topPlaying":
          case "topProgress":
          case "topRateChange":
          case "topReset":
          case "topSeeked":
          case "topSeeking":
          case "topStalled":
          case "topSubmit":
          case "topSuspend":
          case "topTimeUpdate":
          case "topVolumeChange":
          case "topWaiting":
            a = f;
            break;
          case "topKeyPress":
            if ( 0 === w( n ) ) return null;
          case "topKeyDown":
          case "topKeyUp":
            a = d;
            break;
          case "topBlur":
          case "topFocus":
            a = p;
            break;
          case "topClick":
            if ( 2 === n.button ) return null;
          case "topDoubleClick":
          case "topMouseDown":
          case "topMouseMove":
          case "topMouseUp":
          case "topMouseOut":
          case "topMouseOver":
          case "topContextMenu":
            a = h;
            break;
          case "topDrag":
          case "topDragEnd":
          case "topDragEnter":
          case "topDragExit":
          case "topDragLeave":
          case "topDragOver":
          case "topDragStart":
          case "topDrop":
            a = v;
            break;
          case "topTouchCancel":
          case "topTouchEnd":
          case "topTouchMove":
          case "topTouchStart":
            a = g;
            break;
          case "topAnimationEnd":
          case "topAnimationIteration":
          case "topAnimationStart":
            a = u;
            break;
          case "topTransitionEnd":
            a = m;
            break;
          case "topScroll":
            a = y;
            break;
          case "topWheel":
            a = b;
            break;
          case "topCopy":
          case "topCut":
          case "topPaste":
            a = c
        }
        a ? void 0 : i( "86", e );
        var l = a.getPooled( o, t, n, r );
        return s.accumulateTwoPhaseDispatches( l ), l
      },
      didPutListener: function ( e, t, n ) {
        if ( "onClick" === t && !o( e._tag ) ) {
          var i = r( e ),
            s = l.getNodeFromInstance( e );
          k[ i ] || ( k[ i ] = a.listen( s, "click", x ) )
        }
      },
      willDeleteListener: function ( e, t ) {
        if ( "onClick" === t && !o( e._tag ) ) {
          var n = r( e );
          k[ n ].remove(), delete k[ n ]
        }
      }
    };
  e.exports = E
}, function ( e, t, n ) {
  "use strict";

  function r( e, t, n, r ) {
    return o.call( this, e, t, n, r )
  }
  var o = n( 253 ),
    i = {
      animationName: null,
      elapsedTime: null,
      pseudoElement: null
    };
  o.augmentClass( r, i ), e.exports = r
}, function ( e, t, n ) {
  "use strict";

  function r( e, t, n, r ) {
    return o.call( this, e, t, n, r )
  }
  var o = n( 253 ),
    i = {
      clipboardData: function ( e ) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData
      }
    };
  o.augmentClass( r, i ), e.exports = r
}, function ( e, t, n ) {
  "use strict";

  function r( e, t, n, r ) {
    return o.call( this, e, t, n, r )
  }
  var o = n( 270 ),
    i = {
      relatedTarget: null
    };
  o.augmentClass( r, i ), e.exports = r
}, function ( e, t, n ) {
  "use strict";

  function r( e, t, n, r ) {
    return o.call( this, e, t, n, r )
  }
  var o = n( 270 ),
    i = n( 355 ),
    a = n( 356 ),
    s = n( 272 ),
    l = {
      key: a,
      location: null,
      ctrlKey: null,
      shiftKey: null,
      altKey: null,
      metaKey: null,
      repeat: null,
      locale: null,
      getModifierState: s,
      charCode: function ( e ) {
        return "keypress" === e.type ? i( e ) : 0
      },
      keyCode: function ( e ) {
        return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
      },
      which: function ( e ) {
        return "keypress" === e.type ? i( e ) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
      }
    };
  o.augmentClass( r, l ), e.exports = r
}, function ( e, t ) {
  "use strict";

  function n( e ) {
    var t, n = e.keyCode;
    return "charCode" in e ? ( t = e.charCode, 0 === t && 13 === n && ( t = 13 ) ) : t = n, t >= 32 || 13 === t ? t : 0
  }
  e.exports = n
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    if ( e.key ) {
      var t = i[ e.key ] || e.key;
      if ( "Unidentified" !== t ) return t
    }
    if ( "keypress" === e.type ) {
      var n = o( e );
      return 13 === n ? "Enter" : String.fromCharCode( n )
    }
    return "keydown" === e.type || "keyup" === e.type ? a[ e.keyCode ] || "Unidentified" : ""
  }
  var o = n( 355 ),
    i = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    },
    a = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
  e.exports = r
}, function ( e, t, n ) {
  "use strict";

  function r( e, t, n, r ) {
    return o.call( this, e, t, n, r )
  }
  var o = n( 269 ),
    i = {
      dataTransfer: null
    };
  o.augmentClass( r, i ), e.exports = r
}, function ( e, t, n ) {
  "use strict";

  function r( e, t, n, r ) {
    return o.call( this, e, t, n, r )
  }
  var o = n( 270 ),
    i = n( 272 ),
    a = {
      touches: null,
      targetTouches: null,
      changedTouches: null,
      altKey: null,
      metaKey: null,
      ctrlKey: null,
      shiftKey: null,
      getModifierState: i
    };
  o.augmentClass( r, a ), e.exports = r
}, function ( e, t, n ) {
  "use strict";

  function r( e, t, n, r ) {
    return o.call( this, e, t, n, r )
  }
  var o = n( 253 ),
    i = {
      propertyName: null,
      elapsedTime: null,
      pseudoElement: null
    };
  o.augmentClass( r, i ), e.exports = r
}, function ( e, t, n ) {
  "use strict";

  function r( e, t, n, r ) {
    return o.call( this, e, t, n, r )
  }
  var o = n( 269 ),
    i = {
      deltaX: function ( e ) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
      },
      deltaY: function ( e ) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
      },
      deltaZ: null,
      deltaMode: null
    };
  o.augmentClass( r, i ), e.exports = r
}, function ( e, t, n ) {
  "use strict";

  function r( e, t ) {
    for ( var n = Math.min( e.length, t.length ), r = 0; r < n; r++ )
      if ( e.charAt( r ) !== t.charAt( r ) ) return r;
    return e.length === t.length ? -1 : n
  }

  function o( e ) {
    return e ? e.nodeType === L ? e.documentElement : e.firstChild : null
  }

  function i( e ) {
    return e.getAttribute && e.getAttribute( N ) || ""
  }

  function a( e, t, n, r, o ) {
    var i;
    if ( w.logTopLevelRenders ) {
      var a = e._currentElement.props.child,
        s = a.type;
      i = "React mount: " + ( "string" == typeof s ? s : s.displayName || s.name ), console.time( i )
    }
    var l = k.mountComponent( e, n, null, b( e, t ), o, 0 );
    i && console.timeEnd( i ), e._renderedComponent._topLevelWrapper = e, U._mountImageIntoNode( l, t, e, r, n )
  }

  function s( e, t, n, r ) {
    var o = S.ReactReconcileTransaction.getPooled( !n && x.useCreateElement );
    o.perform( a, null, e, t, o, n, r ), S.ReactReconcileTransaction.release( o )
  }

  function l( e, t, n ) {
    for ( k.unmountComponent( e, n ), t.nodeType === L && ( t = t.documentElement ); t.lastChild; ) t.removeChild( t.lastChild )
  }

  function u( e ) {
    var t = o( e );
    if ( t ) {
      var n = y.getInstanceFromNode( t );
      return !( !n || !n._hostParent )
    }
  }

  function c( e ) {
    return !( !e || e.nodeType !== D && e.nodeType !== L && e.nodeType !== I )
  }

  function f( e ) {
    var t = o( e ),
      n = t && y.getInstanceFromNode( t );
    return n && !n._hostParent ? n : null
  }

  function p( e ) {
    var t = f( e );
    return t ? t._hostContainerInfo._topLevelWrapper : null
  }
  var d = n( 235 ),
    h = n( 276 ),
    v = n( 236 ),
    g = n( 97 ),
    m = n( 300 ),
    y = ( n( 104 ), n( 234 ) ),
    b = n( 362 ),
    x = n( 363 ),
    w = n( 258 ),
    _ = n( 311 ),
    C = ( n( 262 ), n( 364 ) ),
    k = n( 259 ),
    E = n( 330 ),
    S = n( 256 ),
    T = n( 114 ),
    A = n( 314 ),
    M = ( n( 102 ), n( 278 ) ),
    O = n( 318 ),
    N = ( n( 105 ), v.ID_ATTRIBUTE_NAME ),
    P = v.ROOT_ATTRIBUTE_NAME,
    D = 1,
    L = 9,
    I = 11,
    R = {},
    j = 1,
    F = function () {
      this.rootID = j++
    };
  F.prototype.isReactComponent = {}, F.prototype.render = function () {
    return this.props.child
  }, F.isReactTopLevelWrapper = !0;
  var U = {
    TopLevelWrapper: F,
    _instancesByReactRootID: R,
    scrollMonitor: function ( e, t ) {
      t()
    },
    _updateRootComponent: function ( e, t, n, r, o ) {
      return U.scrollMonitor( r, function () {
        E.enqueueElementInternal( e, t, n ), o && E.enqueueCallbackInternal( e, o )
      } ), e
    },
    _renderNewRootComponent: function ( e, t, n, r ) {
      c( t ) ? void 0 : d( "37" ), m.ensureScrollValueMonitoring();
      var o = A( e, !1 );
      S.batchedUpdates( s, o, t, n, r );
      var i = o._instance.rootID;
      return R[ i ] = o, o
    },
    renderSubtreeIntoContainer: function ( e, t, n, r ) {
      return null != e && _.has( e ) ? void 0 : d( "38" ), U._renderSubtreeIntoContainer( e, t, n, r )
    },
    _renderSubtreeIntoContainer: function ( e, t, n, r ) {
      E.validateCallback( r, "ReactDOM.render" ), g.isValidElement( t ) ? void 0 : d( "39", "string" == typeof t ? " Instead of passing a string like 'div', pass React.createElement('div') or <div />." : "function" == typeof t ? " Instead of passing a class like Foo, pass React.createElement(Foo) or <Foo />." : null != t && void 0 !== t.props ? " This may be caused by unintentionally loading two independent copies of React." : "" );
      var a, s = g.createElement( F, {
        child: t
      } );
      if ( e ) {
        var l = _.get( e );
        a = l._processChildContext( l._context )
      } else a = T;
      var c = p( n );
      if ( c ) {
        var f = c._currentElement,
          h = f.props.child;
        if ( O( h, t ) ) {
          var v = c._renderedComponent.getPublicInstance(),
            m = r && function () {
              r.call( v )
            };
          return U._updateRootComponent( c, s, a, n, m ), v
        }
        U.unmountComponentAtNode( n )
      }
      var y = o( n ),
        b = y && !!i( y ),
        x = u( n ),
        w = b && !c && !x,
        C = U._renderNewRootComponent( s, n, w, a )._renderedComponent.getPublicInstance();
      return r && r.call( C ), C
    },
    render: function ( e, t, n ) {
      return U._renderSubtreeIntoContainer( null, e, t, n )
    },
    unmountComponentAtNode: function ( e ) {
      c( e ) ? void 0 : d( "40" );
      var t = p( e );
      if ( !t ) {
        u( e ), 1 === e.nodeType && e.hasAttribute( P );
        return !1
      }
      return delete R[ t._instance.rootID ], S.batchedUpdates( l, t, e, !1 ), !0
    },
    _mountImageIntoNode: function ( e, t, n, i, a ) {
      if ( c( t ) ? void 0 : d( "41" ), i ) {
        var s = o( t );
        if ( C.canReuseMarkup( e, s ) ) return void y.precacheNode( n, s );
        var l = s.getAttribute( C.CHECKSUM_ATTR_NAME );
        s.removeAttribute( C.CHECKSUM_ATTR_NAME );
        var u = s.outerHTML;
        s.setAttribute( C.CHECKSUM_ATTR_NAME, l );
        var f = e,
          p = r( f, u ),
          v = " (client) " + f.substring( p - 20, p + 20 ) + "\n (server) " + u.substring( p - 20, p + 20 );
        t.nodeType === L ? d( "42", v ) : void 0
      }
      if ( t.nodeType === L ? d( "43" ) : void 0, a.useCreateElement ) {
        for ( ; t.lastChild; ) t.removeChild( t.lastChild );
        h.insertTreeBefore( t, e, null )
      } else M( t, e ), y.precacheNode( n, t.firstChild )
    }
  };
  e.exports = U
}, function ( e, t, n ) {
  "use strict";

  function r( e, t ) {
    var n = {
      _topLevelWrapper: e,
      _idCounter: 1,
      _ownerDocument: t ? t.nodeType === o ? t : t.ownerDocument : null,
      _node: t,
      _tag: t ? t.nodeName.toLowerCase() : null,
      _namespaceURI: t ? t.namespaceURI : null
    };
    return n
  }
  var o = ( n( 331 ), 9 );
  e.exports = r
}, function ( e, t ) {
  "use strict";
  var n = {
    useCreateElement: !0,
    useFiber: !1
  };
  e.exports = n
}, function ( e, t, n ) {
  "use strict";
  var r = n( 365 ),
    o = /\/?>/,
    i = /^<\!\-\-/,
    a = {
      CHECKSUM_ATTR_NAME: "data-react-checksum",
      addChecksumToMarkup: function ( e ) {
        var t = r( e );
        return i.test( e ) ? e : e.replace( o, " " + a.CHECKSUM_ATTR_NAME + '="' + t + '"$&' )
      },
      canReuseMarkup: function ( e, t ) {
        var n = t.getAttribute( a.CHECKSUM_ATTR_NAME );
        n = n && parseInt( n, 10 );
        var o = r( e );
        return o === n
      }
    };
  e.exports = a
}, function ( e, t ) {
  "use strict";

  function n( e ) {
    for ( var t = 1, n = 0, o = 0, i = e.length, a = i & -4; o < a; ) {
      for ( var s = Math.min( o + 4096, a ); o < s; o += 4 ) n += ( t += e.charCodeAt( o ) ) + ( t += e.charCodeAt( o + 1 ) ) + ( t += e.charCodeAt( o + 2 ) ) + ( t += e.charCodeAt( o + 3 ) );
      t %= r, n %= r
    }
    for ( ; o < i; o++ ) n += t += e.charCodeAt( o );
    return t %= r, n %= r, t | n << 16
  }
  var r = 65521;
  e.exports = n
}, function ( e, t ) {
  "use strict";
  e.exports = "15.4.2"
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    if ( null == e ) return null;
    if ( 1 === e.nodeType ) return e;
    var t = a.get( e );
    return t ? ( t = s( t ), t ? i.getNodeFromInstance( t ) : null ) : void( "function" == typeof e.render ? o( "44" ) : o( "45", Object.keys( e ) ) )
  }
  var o = n( 235 ),
    i = ( n( 104 ), n( 234 ) ),
    a = n( 311 ),
    s = n( 368 );
  n( 102 ), n( 105 );
  e.exports = r
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    for ( var t;
      ( t = e._renderedNodeType ) === o.COMPOSITE; ) e = e._renderedComponent;
    return t === o.HOST ? e._renderedComponent : t === o.EMPTY ? null : void 0
  }
  var o = n( 316 );
  e.exports = r
}, function ( e, t, n ) {
  "use strict";
  var r = n( 361 );
  e.exports = r.renderSubtreeIntoContainer
}, function ( e, t, n ) {
  ( function ( e ) {
    "use strict";

    function r( e ) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function o( t ) {
      var n = e.location.hash.substring( 2 );
      if ( isNaN( n ) )
        for ( var r = 0; r < t.length; r++ )
          if ( t[ r ].options.id === n ) return r;
      return Number( n ) || 0
    }

    function i( e ) {
      return e
    }

    function a( e ) {
      var t = ( e[ 0 ].options || {} ).defaults;
      return e.forEach( function ( e, n ) {
        e.options = ( 0, b.normalizeOptions )( {}, t, e.options ), e.url = "#/" + ( e.options.id || n ), e.contentConverter || ( e.contentConverter = i )
      } ), e
    }
    Object.defineProperty( t, "__esModule", {
      value: !0
    } );
    var s = n( 209 ),
      l = r( s ),
      u = n( 212 ),
      c = r( u ),
      f = n( 213 ),
      p = r( f ),
      d = n( 217 ),
      h = r( d ),
      v = n( 218 ),
      g = r( v ),
      m = n( 96 ),
      y = r( m ),
      b = n( 371 ),
      x = n( 227 ),
      w = function ( t ) {
        function n( e ) {
          ( 0, c.default )( this, n );
          var t = ( 0, h.default )( this, ( n.__proto__ || ( 0, l.default )( n ) ).call( this, e ) ),
            r = a( e.slides );
          return t.state = {
            slides: r,
            slideIndex: o( r )
          }, t.nextSlide = t.nextSlide.bind( t ), t.previousSlide = t.previousSlide.bind( t ), t.goToSlide = t.goToSlide.bind( t ), t
        }
        return ( 0, g.default )( n, t ), ( 0, p.default )( n, [ {
          key: "componentWillMount",
          value: function () {
            var t = this;
            e.onhashchange = function () {
              return t.goToSlide( o( t.state.slides ) )
            }
          }
        }, {
          key: "componentDidMount",
          value: function () {
            var e = this.state,
              t = e.slides,
              n = e.slideIndex;
            ( 0, x.publish )( "SITE.LOADED", {
              slide: t[ n ],
              slideIndex: n,
              slides: t
            } )
          }
        }, {
          key: "shouldComponentUpdate",
          value: function ( e, t ) {
            return this.props !== e || ( t.slides !== this.state.slides || t.slideIndex !== this.state.slideIndex )
          }
        }, {
          key: "componentDidUpdate",
          value: function () {
            var t = this.state,
              n = t.slides,
              r = t.slideIndex,
              i = n[ r ];
            o( n ) !== r && ( e.location.hash = i.url )
          }
        }, {
          key: "nextSlide",
          value: function () {
            this.state.slideIndex < this.state.slides.length - 1 && this.setState( {
              slideIndex: this.state.slideIndex + 1
            } )
          }
        }, {
          key: "previousSlide",
          value: function () {
            this.state.slideIndex > 0 && this.setState( {
              slideIndex: this.state.slideIndex - 1
            } )
          }
        }, {
          key: "goToSlide",
          value: function ( e ) {
            e >= this.state.slides.length || e < 0 || this.setState( {
              slideIndex: e
            } )
          }
        }, {
          key: "getChildContext",
          value: function () {
            var e = this.state,
              t = e.slides,
              n = e.slideIndex;
            return {
              slide: t[ n ],
              slideIndex: n,
              slides: t
            }
          }
        }, {
          key: "render",
          value: function () {
            var e = this.state,
              t = e.slides,
              n = e.slideIndex;
            return y.default.cloneElement( y.default.Children.only( this.props.children ), {
              slide: t[ n ],
              slideIndex: n,
              slides: t,
              nextSlide: this.nextSlide,
              previousSlide: this.previousSlide,
              goToSlide: this.goToSlide
            } )
          }
        } ] ), n
      }( m.Component );
    t.default = w, w.propTypes = {
      slides: m.PropTypes.arrayOf( m.PropTypes.object ).isRequired,
      children: m.PropTypes.node
    }, w.childContextTypes = {
      slides: m.PropTypes.arrayOf( m.PropTypes.object ).isRequired,
      slide: m.PropTypes.object,
      slideIndex: m.PropTypes.number
    }
  } ).call( t, function () {
    return this
  }() )
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function o( e, t ) {
    for ( var n in e )
      if ( t.hasOwnProperty( n ) ) {
        var r = e[ n ],
          o = void 0;
        switch ( ( 0, u.default )( t[ n ] ) ) {
          case "function":
            var i = t[ n ]( r ),
              a = ( 0, s.default )( i, 2 );
            o = a[ 0 ], r = a[ 1 ], delete e[ n ], e[ o ] = r;
            break;
          case "string":
            delete e[ n ], e[ t[ n ] ] = r
        }
      } return e
  }

  function i() {
    for ( var e = {}, t = arguments.length, n = Array( t ), r = 0; r < t; r++ ) n[ r ] = arguments[ r ];
    return n.forEach( function ( t ) {
      for ( var n in t ) n in e && p[ n ] ? e[ n ] = p[ n ]( e[ n ], t[ n ] ) : e[ n ] = t[ n ]
    } ), o( e, d )
  }
  Object.defineProperty( t, "__esModule", {
    value: !0
  } );
  var a = n( 372 ),
    s = r( a ),
    l = n( 42 ),
    u = r( l ),
    c = n( 203 ),
    f = r( c );
  t.normalizeOptions = i;
  var p = {
      class_names: function () {
        for ( var e = arguments.length, t = Array( e ), n = 0; n < e; n++ ) t[ n ] = arguments[ n ];
        return t.reduce( function ( e, t ) {
          return e.push.apply( e, ( 0, f.default )( t ) ), e
        }, [] )
      }
    },
    d = {
      class_names: "classNames",
      hide_toc: "hideTOC",
      layout_data: "layoutData",
      content_type: "contentType",
      scale: function ( e ) {
        return [ "scale", o( e, {
          content_width: "contentWidth",
          column_width: "columnWidth",
          max_font_size: "maxFontSize"
        } ) ]
      }
    }
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  t.__esModule = !0;
  var o = n( 373 ),
    i = r( o ),
    a = n( 376 ),
    s = r( a );
  t.default = function () {
    function e( e, t ) {
      var n = [],
        r = !0,
        o = !1,
        i = void 0;
      try {
        for ( var a, l = ( 0, s.default )( e ); !( r = ( a = l.next() ).done ) && ( n.push( a.value ), !t || n.length !== t ); r = !0 );
      } catch ( e ) {
        o = !0, i = e
      } finally {
        try {
          !r && l.return && l.return()
        } finally {
          if ( o ) throw i
        }
      }
      return n
    }
    return function ( t, n ) {
      if ( Array.isArray( t ) ) return t;
      if ( ( 0, i.default )( Object( t ) ) ) return e( t, n );
      throw new TypeError( "Invalid attempt to destructure non-iterable instance" )
    }
  }()
}, function ( e, t, n ) {
  e.exports = {
    default: n( 374 ),
    __esModule: !0
  }
}, function ( e, t, n ) {
  n( 58 ), n( 45 ), e.exports = n( 375 )
}, function ( e, t, n ) {
  var r = n( 87 ),
    o = n( 56 )( "iterator" ),
    i = n( 50 );
  e.exports = n( 10 ).isIterable = function ( e ) {
    var t = Object( e );
    return void 0 !== t[ o ] || "@@iterator" in t || i.hasOwnProperty( r( t ) )
  }
}, function ( e, t, n ) {
  e.exports = {
    default: n( 377 ),
    __esModule: !0
  }
}, function ( e, t, n ) {
  n( 58 ), n( 45 ), e.exports = n( 378 )
}, function ( e, t, n ) {
  var r = n( 15 ),
    o = n( 86 );
  e.exports = n( 10 ).getIterator = function ( e ) {
    var t = o( e );
    if ( "function" != typeof t ) throw TypeError( e + " is not iterable!" );
    return r( t.call( e ) )
  }
}, function ( e, t ) {
  ( function ( e ) {
    "use strict";
    Object.defineProperty( t, "__esModule", {
      value: !0
    } );
    var n = 768,
      r = e.document.documentElement.clientWidth;
    t.IS_MOBILE = r <= n
  } ).call( t, function () {
    return this
  }() )
}, function ( e, t ) {
  "use strict";

  function n( e, t, n ) {
    var o = void 0;
    return i.hasOwnProperty( e ) && i[ e ].hasOwnProperty( t ) && ( o = i[ e ][ t ] ), null == o && ( r( e, t, n ), o = n ), o
  }

  function r( e, t, n ) {
    var r = i[ e ];
    r || ( r = i[ e ] = {} ), r[ t ] = n
  }

  function o( e ) {
    return i.map( function ( t ) {
      return t[ e ]
    } ).filter( function ( e ) {
      return e
    } )
  }
  Object.defineProperty( t, "__esModule", {
    value: !0
  } ), t.getSlideCacheData = n, t.setSlideCacheData = r, t.getAllCacheData = o;
  var i = []
}, function ( e, t ) {
  "use strict";

  function n( e ) {
    return e.reduce( function ( e, t ) {
      var n = e[ e.length - 1 ];
      return Array.isArray( n ) && ( t.options.chapter === n[ 0 ].options.chapter || t.pathHash && t.pathHash === n[ 0 ].pathHash ) ? n.push( t ) : t.options.chapter ? e.push( [ t ] ) : e.push( t ), e
    }, [] )
  }
  Object.defineProperty( t, "__esModule", {
    value: !0
  } ), t.groupByChapter = n
}, function ( e, t ) {
  "use strict";

  function n( e ) {
    return r( e ) ? {
      src: e
    } : o( e ) ? e : null
  }

  function r( e ) {
    return "string" == typeof e && ( i.test( e ) || a.test( e ) )
  }

  function o( e ) {
    return Boolean( e ) && r( e.src )
  }
  Object.defineProperty( t, "__esModule", {
    value: !0
  } ), t.normalizeImageData = n, t.isPath = r, t.isImageObject = o;
  var i = /^https?:/,
    a = /(?:\.{0,2}\/)?(?:[^\/]\/)*[^\/.]+\.\w{2,}/
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    if ( e && e.__esModule ) return e;
    var t = {};
    if ( null != e )
      for ( var n in e ) Object.prototype.hasOwnProperty.call( e, n ) && ( t[ n ] = e[ n ] );
    return t.default = e, t
  }

  function o( e ) {
    if ( s.indexOf( e ) === -1 ) {
      for ( var t = arguments.length, n = Array( t > 1 ? t - 1 : 0 ), r = 1; r < t; r++ ) n[ r - 1 ] = arguments[ r ];
      e.apply( void 0, [ a ].concat( n ) ), s.push( e )
    }
  }
  Object.defineProperty( t, "__esModule", {
    value: !0
  } ), t.register = o;
  var i = n( 196 ),
    a = r( i ),
    s = []
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    var t = e.reduce( function ( e, t ) {
      return e[ t ] = !0, e
    }, {} );
    return s.filter( function ( e ) {
      return e.tags.some( function ( e ) {
        return t[ e ]
      } )
    } )
  }

  function o( e, t, n ) {
    if ( l.indexOf( t ) === -1 ) throw new Error( '"' + t + '" is not a valid mode for an extension.' );
    var r = {
      component: e,
      tags: n,
      mode: t
    };
    return s.push( r ), ( 0, a.publish )( "EXTENSIONS.UPDATE" ),
      function () {
        r && ( s.splice( s.indexOf( r ), 1 ), r = null, ( 0, a.publish )( "EXTENSIONS.UPDATE" ) )
      }
  }

  function i() {
    s.length = 0
  }
  Object.defineProperty( t, "__esModule", {
    value: !0
  } ), t.getRegisteredExtensions = r, t.registerExtension = o, t.clearAll_FOR_TESTS = i;
  var a = n( 227 ),
    s = [],
    l = [ "before", "after", "wrap", "replace" ]
}, function ( e, t ) {}, , , , function ( e, t, n ) {
  var r = n( 3 );
  r = r ? r.default || r : r;
  var o = n( 194 );
  o = o ? o.default || o : o, e.exports = {
    options: {
      title: "What this presentation is not about",
      layout: "Center",
      style: ".exerslide-slide .Center-wrapper {\n  text-align: left;\n}\n.exerslide-slide h1 {\n  text-align: center;\n}\n"
    },
    content: "JavaScript is predominantly run in browsers to make websites interactive. In\norder to do that, the browser provides access to other technologies, such as\n[CSS][] and the [DOM][].\n\nThis presentation is exclusively about JavaScript, the *language*, not the\nenvironment in which the JavaScript code runs!\n",
    pathHash: "c3b409b7b0d6295740fe55bc9bff4eb0",
    contentConverter: r,
    layout: o
  }
}, function ( e, t, n ) {
  var r = n( 3 );
  r = r ? r.default || r : r;
  var o = n( 194 );
  o = o ? o.default || o : o, e.exports = {
    options: {
      title: "ES5, ES2015 and beyond",
      layout: "Center",
      style: ".exerslide-slide .Center-wrapper {\n  text-align: left;\n}\n.exerslide-slide h1 {\n  text-align: center;\n}\n"
    },
    content: "\nThis tutorial primarily focuses on JavaScript following the [ECMAScript 5][es5] \n(ES5) specification. [ES2015][] (also known as ES6) was released in 2015 and \nbrings many new features to the language, including new syntax constructs.\n\nWhile this tutorial won't go into detail about new features in ES2015 and newer \nversions, it will point differences to/alternatives for certain ES5 features if \nthey exist.\n",
    pathHash: "c3b409b7b0d6295740fe55bc9bff4eb0",
    contentConverter: r,
    layout: o
  }
}, function ( e, t, n ) {
  n( 392 )( {
    javascript: n( 397 ),
    js: n( 397 )
  } );
  var r = n( 3 );
  r = r ? r.default || r : r, e.exports = {
    options: {
      title: "Variables",
      chapter: "Variables"
    },
    content: 'Variables are declared with the `var` keyword. JavaScript is\n*dynamically typed* so every variable can hold a value of any data type.\n\nVariables can be declared *without an initial value*.\n\nSome example declarations:\n\n```javascript\nvar foo;\nvar bar = 42;\nvar foo, bar, baz;\nvar foo = 42, bar = \'baz\', z;\n```\n\nVariables that don\'t explicitly get assigned an initial value have the value \n`undefined`.\n\n<div class="callout secondary">\n\n<i class="fa fa-info-circle" aria-hidden="true"></i> **ES2015**\n\nSince ES2015, `let` and `const` can be used in addition to `var`. We will learn \nhow they differ from `var` later. For now, lets have a look how `const` differs \nfrom `var` or `let`: `const` can be assigned a value only *once* (*const*ant).  \nReassigning a value will either throw an error (in strict mode, see below) or \nis silently ignored:\n\n```js\nconst foo = 42;\nfoo = 21; // error or ignored\n```\n\n`const`s *must* be initialized with a value:\n\n```js\nconst foo; // error\nfoo = 42;\n```\n\n</div>\n\n---\n\n## Variable names\n\nValid characters for variable names include [a wide range of *unicode \ncharacters*](http://mathiasbynens.be/notes/javascript-identifiers).\nHowever, the name *must* start with a letter, `_` or `$`. Not doing so will \nresult in a syntax error.\n\nExamples:\n\n```javascript\nvar π = 3.141;\nvar _foo = π;\nvar 0_bar = \'...\'; // Syntax error\n```\n\n---\n\n## Variable access\n\nTrying to *read* an *undeclared variable* results in a runtime error:\n\n```javascript\nvar foo;\nconsole.log(bar); // ReferenceError: bar is not defined.\n```\n\nHowever, *writing* to an undeclared variable is valid by default. It will\ncreate an *implicit global variable* and should thus be avoided:\n\n```javascript\nfunction foo() {\n  bar = 42;\n}\nfoo();\nconsole.log(bar); // no error\n```\n\n<div class="callout primary">\n\n  If code runs in *[strict mode][]*, assigning to an undeclared variable throws \n  an *error*.\n\n</div>\n\n<div class="callout primary">\n\n### Strict mode\n\n[Strict mode][] is a mode of evaluating JavaScript that enforces stricter \nrules. It was introduced to "deprecate" certain patterns/behaviors that are \nconsidered bad or confusing.\n\nStrict mode can be enabled for a JavaScript or a function by putting\n\n```js\n"use strict";\n```\n\nat the beginning of it.\n\n</div>\n\n[strict mode]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode\n',
    pathHash: "638eae785801816138173a0197e746bd",
    contentConverter: r
  }
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var o = n( 393 ),
    i = r( o ),
    a = n( 191 ),
    s = new i.default;
  e.exports = function ( e ) {
    for ( var t in e ) s.has( t ) || a.registerLanguage( t, e[ t ] )
  }
}, function ( e, t, n ) {
  e.exports = {
    default: n( 394 ),
    __esModule: !0
  }
}, function ( e, t, n ) {
  n( 74 ), n( 45 ), n( 58 ), n( 395 ), n( 396 ), e.exports = n( 10 ).Set
}, function ( e, t, n ) {
  "use strict";
  var r = n( 80 );
  e.exports = n( 89 )( "Set", function ( e ) {
    return function () {
      return e( this, arguments.length > 0 ? arguments[ 0 ] : void 0 )
    }
  }, {
    add: function ( e ) {
      return r.def( this, e = 0 === e ? 0 : e, e )
    }
  }, r )
}, function ( e, t, n ) {
  var r = n( 8 );
  r( r.P + r.R, "Set", {
    toJSON: n( 94 )( "Set" )
  } )
}, function ( e, t ) {
  e.exports = function ( e ) {
    var t = "[A-Za-z$_][0-9A-Za-z$_]*",
      n = {
        keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",
        literal: "true false null undefined NaN Infinity",
        built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
      },
      r = {
        className: "number",
        variants: [ {
          begin: "\\b(0[bB][01]+)"
        }, {
          begin: "\\b(0[oO][0-7]+)"
        }, {
          begin: e.C_NUMBER_RE
        } ],
        relevance: 0
      },
      o = {
        className: "subst",
        begin: "\\$\\{",
        end: "\\}",
        keywords: n,
        contains: []
      },
      i = {
        className: "string",
        begin: "`",
        end: "`",
        contains: [ e.BACKSLASH_ESCAPE, o ]
      };
    o.contains = [ e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, i, r, e.REGEXP_MODE ];
    var a = o.contains.concat( [ e.C_BLOCK_COMMENT_MODE, e.C_LINE_COMMENT_MODE ] );
    return {
      aliases: [ "js", "jsx" ],
      keywords: n,
      contains: [ {
        className: "meta",
        relevance: 10,
        begin: /^\s*['"]use (strict|asm)['"]/
      }, {
        className: "meta",
        begin: /^#!/,
        end: /$/
      }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, i, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, r, {
        begin: /[{,]\s*/,
        relevance: 0,
        contains: [ {
          begin: t + "\\s*:",
          returnBegin: !0,
          relevance: 0,
          contains: [ {
            className: "attr",
            begin: t,
            relevance: 0
          } ]
        } ]
      }, {
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        contains: [ e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.REGEXP_MODE, {
          className: "function",
          begin: "(\\(.*?\\)|" + t + ")\\s*=>",
          returnBegin: !0,
          end: "\\s*=>",
          contains: [ {
            className: "params",
            variants: [ {
              begin: t
            }, {
              begin: /\(\s*\)/
            }, {
              begin: /\(/,
              end: /\)/,
              excludeBegin: !0,
              excludeEnd: !0,
              keywords: n,
              contains: a
            } ]
          } ]
        }, {
          begin: /</,
          end: /(\/\w+|\w+\/)>/,
          subLanguage: "xml",
          contains: [ {
            begin: /<\w+\s*\/>/,
            skip: !0
          }, {
            begin: /<\w+/,
            end: /(\/\w+|\w+\/)>/,
            skip: !0,
            contains: [ {
              begin: /<\w+\s*\/>/,
              skip: !0
            }, "self" ]
          } ]
        } ],
        relevance: 0
      }, {
        className: "function",
        beginKeywords: "function",
        end: /\{/,
        excludeEnd: !0,
        contains: [ e.inherit( e.TITLE_MODE, {
          begin: t
        } ), {
          className: "params",
          begin: /\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          contains: a
        } ],
        illegal: /\[|%/
      }, {
        begin: /\$[(.]/
      }, e.METHOD_GUARD, {
        className: "class",
        beginKeywords: "class",
        end: /[{;=]/,
        excludeEnd: !0,
        illegal: /[:"\[\]]/,
        contains: [ {
          beginKeywords: "extends"
        }, e.UNDERSCORE_TITLE_MODE ]
      }, {
        beginKeywords: "constructor",
        end: /\{/,
        excludeEnd: !0
      } ],
      illegal: /#(?!!)/
    }
  }
}, function ( e, t, n ) {
  var r = n( 3 );
  r = r ? r.default || r : r;
  var o = n( 399 );
  o = o ? o.default || o : o, e.exports = {
    options: {
      title: "Exercise",
      layout_data: {
        description: "Create a local variable with name `foo` and value `42`.\nUse `log(foo)` to log the value of `foo`.\nRemember to open your browser's *developer tools* to view the log output.\n",
        assertion: 'assert(\n  /var foo\\s*=.+;?$/m.test(source),\n  "It doesn\'t look like you have declared a variable (hint: var)."\n);\nassert(output[0] === 42, "Don\'t forget to log the value");\n'
      }
    },
    content: "// Create variable\n\n//\nlog(foo);\n",
    pathHash: "638eae785801816138173a0197e746bd",
    contentConverter: r,
    layout: o
  }
}, function ( e, t, n ) {
  ( function ( e ) {
    "use strict";

    function r( e ) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function o( e ) {
      return new Function( "assert, source, output", e )
    }

    function i() {
      for ( var e = arguments.length, t = Array( e ), n = 0; n < e; n++ ) t[ n ] = arguments[ n ];
      return y.default.apply( Object, [ {} ].concat( t ) )
    }

    function a() {
      console.log.apply( console, arguments )
    }
    Object.defineProperty( t, "__esModule", {
      value: !0
    } );
    var s = n( 209 ),
      l = r( s ),
      u = n( 212 ),
      c = r( u ),
      f = n( 217 ),
      p = r( f ),
      d = n( 213 ),
      h = r( d ),
      v = n( 218 ),
      g = r( v ),
      m = n( 5 ),
      y = r( m ),
      b = n( 195 ),
      x = r( b ),
      w = n( 196 ),
      _ = n( 400 ),
      C = r( _ ),
      k = n( 96 ),
      E = r( k ),
      S = n( 406 ),
      T = r( S ),
      A = n( 446 ),
      M = r( A ),
      O = n( 447 ),
      N = r( O );
    n( 448 );
    var P = "exerslide-plugin-javascriptexercise-layout",
      D = {
        completed: !1,
        error: null,
        code: ""
      };
    e.log = a;
    var L = function ( e ) {
      function t( e ) {
        ( 0, c.default )( this, t );
        var n = ( 0, p.default )( this, ( t.__proto__ || ( 0, l.default )( t ) ).call( this, e ) );
        return n.state = {
          exercise: ( 0, w.getSlideCacheData )( e.slideIndex, P, D )
        }, n
      }
      return ( 0, g.default )( t, e ), ( 0, h.default )( t, null, [ {
        key: "getClassNames",
        value: function ( e ) {
          var t = e.slideIndex,
            n = ( 0, w.getSlideCacheData )( t, P );
          return ( 0, M.default )( {
            JavascriptExercise: !0,
            completed: n && n.completed,
            error: n && n.error
          } )
        }
      } ] ), ( 0, h.default )( t, [ {
        key: "shouldComponentUpdate",
        value: function ( e, t ) {
          if ( e.slideIndex !== this.props.slideIndex ) return !0;
          var n = this.state.exercise,
            r = t.exercise;
          return n.completed !== r.completed || n.error !== r.error
        }
      }, {
        key: "componentDidUpdate",
        value: function ( e ) {
          this.props.slideIndex !== e.slideIndex && this.refs.editor.setValue( this.state.exercise.code || this.props.content )
        }
      }, {
        key: "reset",
        value: function () {
          this.refs.editor.setValue( this.props.content );
          var e = i( this.state.exercise, {
            completed: !1,
            error: ""
          } );
          ( 0, w.setSlideCacheData )( this.props.slideIndex, P, e ), this.setState( {
            exercise: e
          } )
        }
      }, {
        key: "runCode",
        value: function () {
          var e = this.refs.editor.getValue(),
            t = new Function( "log, console", e );
          t( a, console )
        }
      }, {
        key: "submitCode",
        value: function () {
          var e = this.refs.editor.getValue(),
            t = o( this.props.layoutData.assertion ),
            n = [],
            r = this.state.exercise;
          try {
            ! function () {
              var o = new Function( "log, console", e ),
                a = console.log,
                s = function () {
                  n.push.apply( n, arguments ), a.apply( console, arguments )
                };
              console.log = s, o( s, console ), console.log = a, t( T.default.assert, ( 0, N.default )( e ), n ), r = i( r, {
                error: "",
                completed: !0
              } )
            }()
          } catch ( e ) {
            var a = e.name + ": " + e.message;
            r = i( r, {
              error: a,
              completed: !1
            } ), console.error( a )
          }( 0, w.setSlideCacheData )( this.props.slideIndex, P, r ), this.setState( {
            exercise: r
          } )
        }
      }, {
        key: "_onChange",
        value: function ( e ) {
          var t = i( this.state.exercise, {
            code: e
          } );
          ( 0, w.setSlideCacheData )( this.props.slideIndex, P, t ), this.setState( {
            exercise: t
          } )
        }
      }, {
        key: "componentWillReceiveProps",
        value: function ( e ) {
          this.setState( {
            exercise: ( 0, w.getSlideCacheData )( e.slideIndex, P, D )
          } )
        }
      }, {
        key: "render",
        value: function () {
          var e = this.props.title,
            t = this.state.exercise,
            n = this.props.layoutData,
            r = n.assertion,
            o = n.description;
          o && ( o = E.default.createElement( x.default, {
            value: o
          } ) );
          var i = void 0;
          return t.completed ? i = E.default.createElement( "div", {
            className: "callout success"
          }, E.default.createElement( "strong", null, "Well done!" ) ) : t.error && ( i = E.default.createElement( "div", {
            className: "callout alert"
          }, E.default.createElement( "strong", null, "Oh no :(" ), E.default.createElement( "br", null ), t.error ) ), E.default.createElement( "div", {
            className: "JavaScriptExercise"
          }, e, o, E.default.createElement( C.default, {
            ref: "editor",
            mode: "javascript",
            defaultValue: t.code || this.props.content,
            onChange: this._onChange.bind( this )
          } ), E.default.createElement( "div", {
            className: "toolbar",
            style: {
              marginTop: 5
            }
          }, E.default.createElement( "button", {
            style: {
              margin: 5,
              marginLeft: 0
            },
            className: "button primary",
            onClick: this.runCode.bind( this )
          }, "Run" ), E.default.createElement( "button", {
            style: {
              margin: 5
            },
            className: "button secondary",
            onClick: this.reset.bind( this )
          }, "Reset" ), r ? E.default.createElement( "button", {
            style: {
              margin: 5
            },
            className: "button success",
            onClick: this.submitCode.bind( this )
          }, "Submit" ) : null ), i ? E.default.createElement( "div", {
            style: {
              marginTop: 20
            }
          }, i ) : null )
        }
      } ] ), t
    }( E.default.Component );
    t.default = L
  } ).call( t, function () {
    return this
  }() )
}, function ( e, t, n ) {
  ( function ( e ) {
    "use strict";

    function r( e ) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty( t, "__esModule", {
      value: !0
    } );
    var o = n( 4 ),
      i = r( o ),
      a = n( 209 ),
      s = r( a ),
      l = n( 212 ),
      u = r( l ),
      c = n( 213 ),
      f = r( c ),
      p = n( 217 ),
      d = r( p ),
      h = n( 218 ),
      v = r( h ),
      g = n( 96 ),
      m = r( g ),
      y = n( 401 ),
      b = r( y );
    n( 402 ), n( 404 );
    var x = function ( t ) {
      function n( e ) {
        ( 0, u.default )( this, n );
        var t = ( 0, d.default )( this, ( n.__proto__ || ( 0, s.default )( n ) ).call( this, e ) );
        return t._toggleEditor = t._toggleEditor.bind( t ), t._onChange = t._onChange.bind( t ), t.state = {
          showTextarea: !1
        }, t
      }
      return ( 0, v.default )( n, t ), ( 0, f.default )( n, [ {
        key: "componentDidUpdate",
        value: function ( e, t ) {
          var n = this.refs.textarea;
          this.state.showTextarea && !t.showTextarea ? ( n.value = this.codeMirror.getValue(), n.focus() ) : !this.state.showTextarea && t.showTextarea && ( this.codeMirror.setValue( n.value ), this.codeMirror.focus() )
        }
      }, {
        key: "componentDidMount",
        value: function () {
          if ( this.codeMirror = ( 0, b.default )( this.refs.cm, ( 0, i.default )( {
              mode: this.props.mode,
              value: this.props.defaultValue,
              lineNumbers: !0,
              inputStyle: "contenteditable"
            }, this.props.config ) ), this.codeMirror.getInputField().setAttribute( "aria-multiline", "true" ), this.props.onChange && this.codeMirror.on( "change", this._onChange ), e.document.body.addEventListener ) {
            var t = this.codeMirror.getWrapperElement();
            t.addEventListener( "keypress", function ( e ) {
              9 === e.keyCode && e.stopPropagation()
            }, !0 )
          }
          var n = this.refs.textarea;
          this.props.onChange && ( n.oninput = this._onChange )
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          clearTimeout( this.timer )
        }
      }, {
        key: "_onChange",
        value: function () {
          var e = this;
          clearTimeout( this.timer ), this.timer = setTimeout( function () {
            return e.props.onChange( e.getValue() )
          }, 200 )
        }
      }, {
        key: "_toggleEditor",
        value: function () {
          this.setState( {
            showTextarea: !this.state.showTextarea
          } )
        }
      }, {
        key: "render",
        value: function () {
          var e = this.state.showTextarea ? "Use code editor" : "Use simple editor";
          return m.default.createElement( "div", {
            className: "editor " + this.props.className || "",
            role: "region",
            style: this.props.style,
            "aria-label": this.props.label
          }, m.default.createElement( "button", {
            className: "editor-toggle-button",
            title: e,
            "aria-label": e,
            onClick: this._toggleEditor
          }, m.default.createElement( "span", {
            className: "fa fa-exchange"
          } ) ), m.default.createElement( "textarea", {
            ref: "textarea",
            name: "simple editor",
            className: "CodeMirror",
            style: {
              display: this.state.showTextarea ? "block" : "none"
            },
            defaultValue: ""
          } ), m.default.createElement( "div", {
            ref: "cm",
            style: {
              height: "100%",
              display: this.state.showTextarea ? "none" : "block"
            }
          } ) )
        }
      }, {
        key: "reset",
        value: function () {
          this.codeMirror.setValue( this.props.defaultValue )
        }
      }, {
        key: "getValue",
        value: function () {
          return this.state.showTextarea ? this.refs.textarea.value : this.codeMirror.getValue()
        }
      }, {
        key: "setValue",
        value: function ( e ) {
          this.state.showTextarea ? this.refs.textarea.value = e : this.codeMirror.setValue( e )
        }
      } ] ), n
    }( m.default.Component );
    t.default = x, x.propTypes = {
      config: m.default.PropTypes.object,
      className: m.default.PropTypes.string,
      defaultValue: m.default.PropTypes.string,
      mode: m.default.PropTypes.string,
      readOnly: m.default.PropTypes.bool,
      onChange: m.default.PropTypes.func,
      label: m.default.PropTypes.string,
      style: m.default.PropTypes.object
    }, x.defaultProps = {
      label: "Editor",
      config: {},
      defaultValue: "",
      readOnly: !1
    }
  } ).call( t, function () {
    return this
  }() )
}, function ( e, t, n ) {
  ! function ( t, n ) {
    e.exports = n()
  }( this, function () {
    "use strict";

    function e( e ) {
      return new RegExp( "(^|\\s)" + e + "(?:$|\\s)\\s*" )
    }

    function t( e ) {
      for ( var t = e.childNodes.length; t > 0; --t ) e.removeChild( e.firstChild );
      return e
    }

    function n( e, n ) {
      return t( e ).appendChild( n )
    }

    function r( e, t, n, r ) {
      var o = document.createElement( e );
      if ( n && ( o.className = n ), r && ( o.style.cssText = r ), "string" == typeof t ) o.appendChild( document.createTextNode( t ) );
      else if ( t )
        for ( var i = 0; i < t.length; ++i ) o.appendChild( t[ i ] );
      return o
    }

    function o( e, t ) {
      if ( 3 == t.nodeType && ( t = t.parentNode ), e.contains ) return e.contains( t );
      do
        if ( 11 == t.nodeType && ( t = t.host ), t == e ) return !0; while ( t = t.parentNode )
    }

    function i() {
      var e;
      try {
        e = document.activeElement
      } catch ( t ) {
        e = document.body || null
      }
      for ( ; e && e.root && e.root.activeElement; ) e = e.root.activeElement;
      return e
    }

    function a( t, n ) {
      var r = t.className;
      e( n ).test( r ) || ( t.className += ( r ? " " : "" ) + n )
    }

    function s( t, n ) {
      for ( var r = t.split( " " ), o = 0; o < r.length; o++ ) r[ o ] && !e( r[ o ] ).test( n ) && ( n += " " + r[ o ] );
      return n
    }

    function l( e ) {
      var t = Array.prototype.slice.call( arguments, 1 );
      return function () {
        return e.apply( null, t )
      }
    }

    function u( e, t, n ) {
      t || ( t = {} );
      for ( var r in e ) !e.hasOwnProperty( r ) || n === !1 && t.hasOwnProperty( r ) || ( t[ r ] = e[ r ] );
      return t
    }

    function c( e, t, n, r, o ) {
      null == t && ( t = e.search( /[^\s\u00a0]/ ), t == -1 && ( t = e.length ) );
      for ( var i = r || 0, a = o || 0;; ) {
        var s = e.indexOf( "\t", i );
        if ( s < 0 || s >= t ) return a + ( t - i );
        a += s - i, a += n - a % n, i = s + 1
      }
    }

    function f() {
      this.id = null
    }

    function p( e, t ) {
      for ( var n = 0; n < e.length; ++n )
        if ( e[ n ] == t ) return n;
      return -1
    }

    function d( e, t, n ) {
      for ( var r = 0, o = 0;; ) {
        var i = e.indexOf( "\t", r );
        i == -1 && ( i = e.length );
        var a = i - r;
        if ( i == e.length || o + a >= t ) return r + Math.min( a, t - o );
        if ( o += i - r, o += n - o % n, r = i + 1, o >= t ) return r
      }
    }

    function h( e ) {
      for ( ; Ma.length <= e; ) Ma.push( v( Ma ) + " " );
      return Ma[ e ]
    }

    function v( e ) {
      return e[ e.length - 1 ]
    }

    function g( e, t ) {
      for ( var n = [], r = 0; r < e.length; r++ ) n[ r ] = t( e[ r ], r );
      return n
    }

    function m( e, t, n ) {
      for ( var r = 0, o = n( t ); r < e.length && n( e[ r ] ) <= o; ) r++;
      e.splice( r, 0, t )
    }

    function y() {}

    function b( e, t ) {
      var n;
      return Object.create ? n = Object.create( e ) : ( y.prototype = e, n = new y ), t && u( t, n ), n
    }

    function x( e ) {
      return /\w/.test( e ) || e > "" && ( e.toUpperCase() != e.toLowerCase() || Oa.test( e ) )
    }

    function w( e, t ) {
      return t ? !!( t.source.indexOf( "\\w" ) > -1 && x( e ) ) || t.test( e ) : x( e )
    }

    function _( e ) {
      for ( var t in e )
        if ( e.hasOwnProperty( t ) && e[ t ] ) return !1;
      return !0
    }

    function C( e ) {
      return e.charCodeAt( 0 ) >= 768 && Na.test( e )
    }

    function k( e, t, n ) {
      var o = this;
      this.input = n, o.scrollbarFiller = r( "div", null, "CodeMirror-scrollbar-filler" ), o.scrollbarFiller.setAttribute( "cm-not-content", "true" ), o.gutterFiller = r( "div", null, "CodeMirror-gutter-filler" ), o.gutterFiller.setAttribute( "cm-not-content", "true" ), o.lineDiv = r( "div", null, "CodeMirror-code" ), o.selectionDiv = r( "div", null, null, "position: relative; z-index: 1" ), o.cursorDiv = r( "div", null, "CodeMirror-cursors" ), o.measure = r( "div", null, "CodeMirror-measure" ), o.lineMeasure = r( "div", null, "CodeMirror-measure" ), o.lineSpace = r( "div", [ o.measure, o.lineMeasure, o.selectionDiv, o.cursorDiv, o.lineDiv ], null, "position: relative; outline: none" ), o.mover = r( "div", [ r( "div", [ o.lineSpace ], "CodeMirror-lines" ) ], null, "position: relative" ), o.sizer = r( "div", [ o.mover ], "CodeMirror-sizer" ), o.sizerWidth = null, o.heightForcer = r( "div", null, null, "position: absolute; height: " + ka + "px; width: 1px;" ), o.gutters = r( "div", null, "CodeMirror-gutters" ), o.lineGutter = null, o.scroller = r( "div", [ o.sizer, o.heightForcer, o.gutters ], "CodeMirror-scroll" ), o.scroller.setAttribute( "tabIndex", "-1" ), o.wrapper = r( "div", [ o.scrollbarFiller, o.gutterFiller, o.scroller ], "CodeMirror" ), na && ra < 8 && ( o.gutters.style.zIndex = -1, o.scroller.style.paddingRight = 0 ), oa || Qi && pa || ( o.scroller.draggable = !0 ), e && ( e.appendChild ? e.appendChild( o.wrapper ) : e( o.wrapper ) ), o.viewFrom = o.viewTo = t.first, o.reportedViewFrom = o.reportedViewTo = t.first, o.view = [], o.renderedView = null, o.externalMeasured = null, o.viewOffset = 0, o.lastWrapHeight = o.lastWrapWidth = 0, o.updateLineNumbers = null, o.nativeBarWidth = o.barHeight = o.barWidth = 0, o.scrollbarsClipped = !1, o.lineNumWidth = o.lineNumInnerWidth = o.lineNumChars = null, o.alignWidgets = !1, o.cachedCharWidth = o.cachedTextHeight = o.cachedPaddingH = null, o.maxLine = null, o.maxLineLength = 0, o.maxLineChanged = !1, o.wheelDX = o.wheelDY = o.wheelStartX = o.wheelStartY = null, o.shift = !1, o.selForContextMenu = null, o.activeTouch = null, n.init( o )
    }

    function E( e, t ) {
      if ( t -= e.first, t < 0 || t >= e.size ) throw new Error( "There is no line " + ( t + e.first ) + " in the document." );
      for ( var n = e; !n.lines; )
        for ( var r = 0;; ++r ) {
          var o = n.children[ r ],
            i = o.chunkSize();
          if ( t < i ) {
            n = o;
            break
          }
          t -= i
        }
      return n.lines[ t ]
    }

    function S( e, t, n ) {
      var r = [],
        o = t.line;
      return e.iter( t.line, n.line + 1, function ( e ) {
        var i = e.text;
        o == n.line && ( i = i.slice( 0, n.ch ) ), o == t.line && ( i = i.slice( t.ch ) ), r.push( i ), ++o
      } ), r
    }

    function T( e, t, n ) {
      var r = [];
      return e.iter( t, n, function ( e ) {
        r.push( e.text )
      } ), r
    }

    function A( e, t ) {
      var n = t - e.height;
      if ( n )
        for ( var r = e; r; r = r.parent ) r.height += n
    }

    function M( e ) {
      if ( null == e.parent ) return null;
      for ( var t = e.parent, n = p( t.lines, e ), r = t.parent; r; t = r, r = r.parent )
        for ( var o = 0; r.children[ o ] != t; ++o ) n += r.children[ o ].chunkSize();
      return n + t.first
    }

    function O( e, t ) {
      var n = e.first;
      e: do {
        for ( var r = 0; r < e.children.length; ++r ) {
          var o = e.children[ r ],
            i = o.height;
          if ( t < i ) {
            e = o;
            continue e
          }
          t -= i, n += o.chunkSize()
        }
        return n
      } while ( !e.lines );
      for ( var a = 0; a < e.lines.length; ++a ) {
        var s = e.lines[ a ],
          l = s.height;
        if ( t < l ) break;
        t -= l
      }
      return n + a
    }

    function N( e, t ) {
      return t >= e.first && t < e.first + e.size
    }

    function P( e, t ) {
      return String( e.lineNumberFormatter( t + e.firstLineNumber ) )
    }

    function D( e, t ) {
      return this instanceof D ? ( this.line = e, void( this.ch = t ) ) : new D( e, t )
    }

    function L( e, t ) {
      return e.line - t.line || e.ch - t.ch
    }

    function I( e ) {
      return D( e.line, e.ch )
    }

    function R( e, t ) {
      return L( e, t ) < 0 ? t : e
    }

    function j( e, t ) {
      return L( e, t ) < 0 ? e : t
    }

    function F( e, t ) {
      return Math.max( e.first, Math.min( t, e.first + e.size - 1 ) )
    }

    function U( e, t ) {
      if ( t.line < e.first ) return D( e.first, 0 );
      var n = e.first + e.size - 1;
      return t.line > n ? D( n, E( e, n ).text.length ) : B( t, E( e, t.line ).text.length )
    }

    function B( e, t ) {
      var n = e.ch;
      return null == n || n > t ? D( e.line, t ) : n < 0 ? D( e.line, 0 ) : e
    }

    function z( e, t ) {
      for ( var n = [], r = 0; r < t.length; r++ ) n[ r ] = U( e, t[ r ] );
      return n
    }

    function q() {
      Pa = !0
    }

    function H() {
      Da = !0
    }

    function W( e, t, n ) {
      this.marker = e, this.from = t, this.to = n
    }

    function V( e, t ) {
      if ( e )
        for ( var n = 0; n < e.length; ++n ) {
          var r = e[ n ];
          if ( r.marker == t ) return r
        }
    }

    function G( e, t ) {
      for ( var n, r = 0; r < e.length; ++r ) e[ r ] != t && ( n || ( n = [] ) ).push( e[ r ] );
      return n
    }

    function Y( e, t ) {
      e.markedSpans = e.markedSpans ? e.markedSpans.concat( [ t ] ) : [ t ], t.marker.attachLine( e )
    }

    function K( e, t, n ) {
      var r;
      if ( e )
        for ( var o = 0; o < e.length; ++o ) {
          var i = e[ o ],
            a = i.marker,
            s = null == i.from || ( a.inclusiveLeft ? i.from <= t : i.from < t );
          if ( s || i.from == t && "bookmark" == a.type && ( !n || !i.marker.insertLeft ) ) {
            var l = null == i.to || ( a.inclusiveRight ? i.to >= t : i.to > t );
            ( r || ( r = [] ) ).push( new W( a, i.from, l ? null : i.to ) )
          }
        }
      return r
    }

    function $( e, t, n ) {
      var r;
      if ( e )
        for ( var o = 0; o < e.length; ++o ) {
          var i = e[ o ],
            a = i.marker,
            s = null == i.to || ( a.inclusiveRight ? i.to >= t : i.to > t );
          if ( s || i.from == t && "bookmark" == a.type && ( !n || i.marker.insertLeft ) ) {
            var l = null == i.from || ( a.inclusiveLeft ? i.from <= t : i.from < t );
            ( r || ( r = [] ) ).push( new W( a, l ? null : i.from - t, null == i.to ? null : i.to - t ) )
          }
        }
      return r
    }

    function J( e, t ) {
      if ( t.full ) return null;
      var n = N( e, t.from.line ) && E( e, t.from.line ).markedSpans,
        r = N( e, t.to.line ) && E( e, t.to.line ).markedSpans;
      if ( !n && !r ) return null;
      var o = t.from.ch,
        i = t.to.ch,
        a = 0 == L( t.from, t.to ),
        s = K( n, o, a ),
        l = $( r, i, a ),
        u = 1 == t.text.length,
        c = v( t.text ).length + ( u ? o : 0 );
      if ( s )
        for ( var f = 0; f < s.length; ++f ) {
          var p = s[ f ];
          if ( null == p.to ) {
            var d = V( l, p.marker );
            d ? u && ( p.to = null == d.to ? null : d.to + c ) : p.to = o
          }
        }
      if ( l )
        for ( var h = 0; h < l.length; ++h ) {
          var g = l[ h ];
          if ( null != g.to && ( g.to += c ), null == g.from ) {
            var m = V( s, g.marker );
            m || ( g.from = c, u && ( s || ( s = [] ) ).push( g ) )
          } else g.from += c, u && ( s || ( s = [] ) ).push( g )
        }
      s && ( s = X( s ) ), l && l != s && ( l = X( l ) );
      var y = [ s ];
      if ( !u ) {
        var b, x = t.text.length - 2;
        if ( x > 0 && s )
          for ( var w = 0; w < s.length; ++w ) null == s[ w ].to && ( b || ( b = [] ) ).push( new W( s[ w ].marker, null, null ) );
        for ( var _ = 0; _ < x; ++_ ) y.push( b );
        y.push( l )
      }
      return y
    }

    function X( e ) {
      for ( var t = 0; t < e.length; ++t ) {
        var n = e[ t ];
        null != n.from && n.from == n.to && n.marker.clearWhenEmpty !== !1 && e.splice( t--, 1 )
      }
      return e.length ? e : null
    }

    function Z( e, t, n ) {
      var r = null;
      if ( e.iter( t.line, n.line + 1, function ( e ) {
          if ( e.markedSpans )
            for ( var t = 0; t < e.markedSpans.length; ++t ) {
              var n = e.markedSpans[ t ].marker;
              !n.readOnly || r && p( r, n ) != -1 || ( r || ( r = [] ) ).push( n )
            }
        } ), !r ) return null;
      for ( var o = [ {
          from: t,
          to: n
        } ], i = 0; i < r.length; ++i )
        for ( var a = r[ i ], s = a.find( 0 ), l = 0; l < o.length; ++l ) {
          var u = o[ l ];
          if ( !( L( u.to, s.from ) < 0 || L( u.from, s.to ) > 0 ) ) {
            var c = [ l, 1 ],
              f = L( u.from, s.from ),
              d = L( u.to, s.to );
            ( f < 0 || !a.inclusiveLeft && !f ) && c.push( {
              from: u.from,
              to: s.from
            } ), ( d > 0 || !a.inclusiveRight && !d ) && c.push( {
              from: s.to,
              to: u.to
            } ), o.splice.apply( o, c ), l += c.length - 1
          }
        }
      return o
    }

    function Q( e ) {
      var t = e.markedSpans;
      if ( t ) {
        for ( var n = 0; n < t.length; ++n ) t[ n ].marker.detachLine( e );
        e.markedSpans = null
      }
    }

    function ee( e, t ) {
      if ( t ) {
        for ( var n = 0; n < t.length; ++n ) t[ n ].marker.attachLine( e );
        e.markedSpans = t
      }
    }

    function te( e ) {
      return e.inclusiveLeft ? -1 : 0
    }

    function ne( e ) {
      return e.inclusiveRight ? 1 : 0
    }

    function re( e, t ) {
      var n = e.lines.length - t.lines.length;
      if ( 0 != n ) return n;
      var r = e.find(),
        o = t.find(),
        i = L( r.from, o.from ) || te( e ) - te( t );
      if ( i ) return -i;
      var a = L( r.to, o.to ) || ne( e ) - ne( t );
      return a ? a : t.id - e.id
    }

    function oe( e, t ) {
      var n, r = Da && e.markedSpans;
      if ( r )
        for ( var o = void 0, i = 0; i < r.length; ++i ) o = r[ i ], o.marker.collapsed && null == ( t ? o.from : o.to ) && ( !n || re( n, o.marker ) < 0 ) && ( n = o.marker );
      return n
    }

    function ie( e ) {
      return oe( e, !0 )
    }

    function ae( e ) {
      return oe( e, !1 )
    }

    function se( e, t, n, r, o ) {
      var i = E( e, t ),
        a = Da && i.markedSpans;
      if ( a )
        for ( var s = 0; s < a.length; ++s ) {
          var l = a[ s ];
          if ( l.marker.collapsed ) {
            var u = l.marker.find( 0 ),
              c = L( u.from, n ) || te( l.marker ) - te( o ),
              f = L( u.to, r ) || ne( l.marker ) - ne( o );
            if ( !( c >= 0 && f <= 0 || c <= 0 && f >= 0 ) && ( c <= 0 && ( l.marker.inclusiveRight && o.inclusiveLeft ? L( u.to, n ) >= 0 : L( u.to, n ) > 0 ) || c >= 0 && ( l.marker.inclusiveRight && o.inclusiveLeft ? L( u.from, r ) <= 0 : L( u.from, r ) < 0 ) ) ) return !0
          }
        }
    }

    function le( e ) {
      for ( var t; t = ie( e ); ) e = t.find( -1, !0 ).line;
      return e
    }

    function ue( e ) {
      for ( var t, n; t = ae( e ); ) e = t.find( 1, !0 ).line, ( n || ( n = [] ) ).push( e );
      return n
    }

    function ce( e, t ) {
      var n = E( e, t ),
        r = le( n );
      return n == r ? t : M( r )
    }

    function fe( e, t ) {
      if ( t > e.lastLine() ) return t;
      var n, r = E( e, t );
      if ( !pe( e, r ) ) return t;
      for ( ; n = ae( r ); ) r = n.find( 1, !0 ).line;
      return M( r ) + 1
    }

    function pe( e, t ) {
      var n = Da && t.markedSpans;
      if ( n )
        for ( var r = void 0, o = 0; o < n.length; ++o )
          if ( r = n[ o ], r.marker.collapsed ) {
            if ( null == r.from ) return !0;
            if ( !r.marker.widgetNode && 0 == r.from && r.marker.inclusiveLeft && de( e, t, r ) ) return !0
          }
    }

    function de( e, t, n ) {
      if ( null == n.to ) {
        var r = n.marker.find( 1, !0 );
        return de( e, r.line, V( r.line.markedSpans, n.marker ) )
      }
      if ( n.marker.inclusiveRight && n.to == t.text.length ) return !0;
      for ( var o = void 0, i = 0; i < t.markedSpans.length; ++i )
        if ( o = t.markedSpans[ i ], o.marker.collapsed && !o.marker.widgetNode && o.from == n.to && ( null == o.to || o.to != n.from ) && ( o.marker.inclusiveLeft || n.marker.inclusiveRight ) && de( e, t, o ) ) return !0
    }

    function he( e ) {
      e = le( e );
      for ( var t = 0, n = e.parent, r = 0; r < n.lines.length; ++r ) {
        var o = n.lines[ r ];
        if ( o == e ) break;
        t += o.height
      }
      for ( var i = n.parent; i; n = i, i = n.parent )
        for ( var a = 0; a < i.children.length; ++a ) {
          var s = i.children[ a ];
          if ( s == n ) break;
          t += s.height
        }
      return t
    }

    function ve( e ) {
      if ( 0 == e.height ) return 0;
      for ( var t, n = e.text.length, r = e; t = ie( r ); ) {
        var o = t.find( 0, !0 );
        r = o.from.line, n += o.from.ch - o.to.ch
      }
      for ( r = e; t = ae( r ); ) {
        var i = t.find( 0, !0 );
        n -= r.text.length - i.from.ch, r = i.to.line, n += r.text.length - i.to.ch
      }
      return n
    }

    function ge( e ) {
      var t = e.display,
        n = e.doc;
      t.maxLine = E( n, n.first ), t.maxLineLength = ve( t.maxLine ), t.maxLineChanged = !0, n.iter( function ( e ) {
        var n = ve( e );
        n > t.maxLineLength && ( t.maxLineLength = n, t.maxLine = e )
      } )
    }

    function me( e, t, n, r ) {
      if ( !e ) return r( t, n, "ltr" );
      for ( var o = !1, i = 0; i < e.length; ++i ) {
        var a = e[ i ];
        ( a.from < n && a.to > t || t == n && a.to == t ) && ( r( Math.max( a.from, t ), Math.min( a.to, n ), 1 == a.level ? "rtl" : "ltr" ), o = !0 )
      }
      o || r( t, n, "ltr" )
    }

    function ye( e ) {
      return e.level % 2 ? e.to : e.from
    }

    function be( e ) {
      return e.level % 2 ? e.from : e.to
    }

    function xe( e ) {
      var t = Te( e );
      return t ? ye( t[ 0 ] ) : 0
    }

    function we( e ) {
      var t = Te( e );
      return t ? be( v( t ) ) : e.text.length
    }

    function _e( e, t, n ) {
      var r = e[ 0 ].level;
      return t == r || n != r && t < n
    }

    function Ce( e, t ) {
      var n;
      La = null;
      for ( var r = 0; r < e.length; ++r ) {
        var o = e[ r ];
        if ( o.from < t && o.to > t ) return r;
        if ( o.from == t || o.to == t ) {
          if ( null != n ) return _e( e, o.level, e[ n ].level ) ? ( o.from != o.to && ( La = n ), r ) : ( o.from != o.to && ( La = r ), n );
          n = r
        }
      }
      return n
    }

    function ke( e, t, n, r ) {
      if ( !r ) return t + n;
      do t += n; while ( t > 0 && C( e.text.charAt( t ) ) );
      return t
    }

    function Ee( e, t, n, r ) {
      var o = Te( e );
      if ( !o ) return Se( e, t, n, r );
      for ( var i = Ce( o, t ), a = o[ i ], s = ke( e, t, a.level % 2 ? -n : n, r );; ) {
        if ( s > a.from && s < a.to ) return s;
        if ( s == a.from || s == a.to ) return Ce( o, s ) == i ? s : ( a = o[ i += n ], n > 0 == a.level % 2 ? a.to : a.from );
        if ( a = o[ i += n ], !a ) return null;
        s = n > 0 == a.level % 2 ? ke( e, a.to, -1, r ) : ke( e, a.from, 1, r )
      }
    }

    function Se( e, t, n, r ) {
      var o = t + n;
      if ( r )
        for ( ; o > 0 && C( e.text.charAt( o ) ); ) o += n;
      return o < 0 || o > e.text.length ? null : o
    }

    function Te( e ) {
      var t = e.order;
      return null == t && ( t = e.order = Ia( e.text ) ), t
    }

    function Ae( e, t ) {
      return e._handlers && e._handlers[ t ] || Ra
    }

    function Me( e, t, n ) {
      if ( e.removeEventListener ) e.removeEventListener( t, n, !1 );
      else if ( e.detachEvent ) e.detachEvent( "on" + t, n );
      else {
        var r = e._handlers,
          o = r && r[ t ];
        if ( o ) {
          var i = p( o, n );
          i > -1 && ( r[ t ] = o.slice( 0, i ).concat( o.slice( i + 1 ) ) )
        }
      }
    }

    function Oe( e, t ) {
      var n = Ae( e, t );
      if ( n.length )
        for ( var r = Array.prototype.slice.call( arguments, 2 ), o = 0; o < n.length; ++o ) n[ o ].apply( null, r )
    }

    function Ne( e, t, n ) {
      return "string" == typeof t && ( t = {
        type: t,
        preventDefault: function () {
          this.defaultPrevented = !0
        }
      } ), Oe( e, n || t.type, e, t ), je( t ) || t.codemirrorIgnore
    }

    function Pe( e ) {
      var t = e._handlers && e._handlers.cursorActivity;
      if ( t )
        for ( var n = e.curOp.cursorActivityHandlers || ( e.curOp.cursorActivityHandlers = [] ), r = 0; r < t.length; ++r ) p( n, t[ r ] ) == -1 && n.push( t[ r ] )
    }

    function De( e, t ) {
      return Ae( e, t ).length > 0;
    }

    function Le( e ) {
      e.prototype.on = function ( e, t ) {
        ja( this, e, t )
      }, e.prototype.off = function ( e, t ) {
        Me( this, e, t )
      }
    }

    function Ie( e ) {
      e.preventDefault ? e.preventDefault() : e.returnValue = !1
    }

    function Re( e ) {
      e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
    }

    function je( e ) {
      return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue
    }

    function Fe( e ) {
      Ie( e ), Re( e )
    }

    function Ue( e ) {
      return e.target || e.srcElement
    }

    function Be( e ) {
      var t = e.which;
      return null == t && ( 1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && ( t = 2 ) ), da && e.ctrlKey && 1 == t && ( t = 3 ), t
    }

    function ze( e ) {
      if ( null == _a ) {
        var t = r( "span", "​" );
        n( e, r( "span", [ t, document.createTextNode( "x" ) ] ) ), 0 != e.firstChild.offsetHeight && ( _a = t.offsetWidth <= 1 && t.offsetHeight > 2 && !( na && ra < 8 ) )
      }
      var o = _a ? r( "span", "​" ) : r( "span", " ", null, "display: inline-block; width: 1px; margin-right: -1px" );
      return o.setAttribute( "cm-text", "" ), o
    }

    function qe( e ) {
      if ( null != Ca ) return Ca;
      var r = n( e, document.createTextNode( "AخA" ) ),
        o = ma( r, 0, 1 ).getBoundingClientRect(),
        i = ma( r, 1, 2 ).getBoundingClientRect();
      return t( e ), !( !o || o.left == o.right ) && ( Ca = i.right - o.right < 3 )
    }

    function He( e ) {
      if ( null != qa ) return qa;
      var t = n( e, r( "span", "x" ) ),
        o = t.getBoundingClientRect(),
        i = ma( t, 0, 1 ).getBoundingClientRect();
      return qa = Math.abs( o.left - i.left ) > 1
    }

    function We( e, t ) {
      arguments.length > 2 && ( t.dependencies = Array.prototype.slice.call( arguments, 2 ) ), Ha[ e ] = t
    }

    function Ve( e, t ) {
      Wa[ e ] = t
    }

    function Ge( e ) {
      if ( "string" == typeof e && Wa.hasOwnProperty( e ) ) e = Wa[ e ];
      else if ( e && "string" == typeof e.name && Wa.hasOwnProperty( e.name ) ) {
        var t = Wa[ e.name ];
        "string" == typeof t && ( t = {
          name: t
        } ), e = b( t, e ), e.name = t.name
      } else {
        if ( "string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test( e ) ) return Ge( "application/xml" );
        if ( "string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test( e ) ) return Ge( "application/json" )
      }
      return "string" == typeof e ? {
        name: e
      } : e || {
        name: "null"
      }
    }

    function Ye( e, t ) {
      t = Ge( t );
      var n = Ha[ t.name ];
      if ( !n ) return Ye( e, "text/plain" );
      var r = n( e, t );
      if ( Va.hasOwnProperty( t.name ) ) {
        var o = Va[ t.name ];
        for ( var i in o ) o.hasOwnProperty( i ) && ( r.hasOwnProperty( i ) && ( r[ "_" + i ] = r[ i ] ), r[ i ] = o[ i ] )
      }
      if ( r.name = t.name, t.helperType && ( r.helperType = t.helperType ), t.modeProps )
        for ( var a in t.modeProps ) r[ a ] = t.modeProps[ a ];
      return r
    }

    function Ke( e, t ) {
      var n = Va.hasOwnProperty( e ) ? Va[ e ] : Va[ e ] = {};
      u( t, n )
    }

    function $e( e, t ) {
      if ( t === !0 ) return t;
      if ( e.copyState ) return e.copyState( t );
      var n = {};
      for ( var r in t ) {
        var o = t[ r ];
        o instanceof Array && ( o = o.concat( [] ) ), n[ r ] = o
      }
      return n
    }

    function Je( e, t ) {
      for ( var n; e.innerMode && ( n = e.innerMode( t ), n && n.mode != e ); ) t = n.state, e = n.mode;
      return n || {
        mode: e,
        state: t
      }
    }

    function Xe( e, t, n ) {
      return !e.startState || e.startState( t, n )
    }

    function Ze( e, t, n, r ) {
      var o = [ e.state.modeGen ],
        i = {};
      at( e, t.text, e.doc.mode, n, function ( e, t ) {
        return o.push( e, t )
      }, i, r );
      for ( var a = function ( n ) {
          var r = e.state.overlays[ n ],
            a = 1,
            s = 0;
          at( e, t.text, r.mode, !0, function ( e, t ) {
            for ( var n = a; s < e; ) {
              var i = o[ a ];
              i > e && o.splice( a, 1, e, o[ a + 1 ], i ), a += 2, s = Math.min( e, i )
            }
            if ( t )
              if ( r.opaque ) o.splice( n, a - n, e, "overlay " + t ), a = n + 2;
              else
                for ( ; n < a; n += 2 ) {
                  var l = o[ n + 1 ];
                  o[ n + 1 ] = ( l ? l + " " : "" ) + "overlay " + t
                }
          }, i )
        }, s = 0; s < e.state.overlays.length; ++s ) a( s );
      return {
        styles: o,
        classes: i.bgClass || i.textClass ? i : null
      }
    }

    function Qe( e, t, n ) {
      if ( !t.styles || t.styles[ 0 ] != e.state.modeGen ) {
        var r = et( e, M( t ) ),
          o = Ze( e, t, t.text.length > e.options.maxHighlightLength ? $e( e.doc.mode, r ) : r );
        t.stateAfter = r, t.styles = o.styles, o.classes ? t.styleClasses = o.classes : t.styleClasses && ( t.styleClasses = null ), n === e.doc.frontier && e.doc.frontier++
      }
      return t.styles
    }

    function et( e, t, n ) {
      var r = e.doc,
        o = e.display;
      if ( !r.mode.startState ) return !0;
      var i = st( e, t, n ),
        a = i > r.first && E( r, i - 1 ).stateAfter;
      return a = a ? $e( r.mode, a ) : Xe( r.mode ), r.iter( i, t, function ( n ) {
        tt( e, n.text, a );
        var s = i == t - 1 || i % 5 == 0 || i >= o.viewFrom && i < o.viewTo;
        n.stateAfter = s ? $e( r.mode, a ) : null, ++i
      } ), n && ( r.frontier = i ), a
    }

    function tt( e, t, n, r ) {
      var o = e.doc.mode,
        i = new Ga( t, e.options.tabSize );
      for ( i.start = i.pos = r || 0, "" == t && nt( o, n ); !i.eol(); ) rt( o, i, n ), i.start = i.pos
    }

    function nt( e, t ) {
      if ( e.blankLine ) return e.blankLine( t );
      if ( e.innerMode ) {
        var n = Je( e, t );
        return n.mode.blankLine ? n.mode.blankLine( n.state ) : void 0
      }
    }

    function rt( e, t, n, r ) {
      for ( var o = 0; o < 10; o++ ) {
        r && ( r[ 0 ] = Je( e, n ).mode );
        var i = e.token( t, n );
        if ( t.pos > t.start ) return i
      }
      throw new Error( "Mode " + e.name + " failed to advance stream." )
    }

    function ot( e, t, n, r ) {
      var o, i = function ( e ) {
          return {
            start: f.start,
            end: f.pos,
            string: f.current(),
            type: o || null,
            state: e ? $e( a.mode, c ) : c
          }
        },
        a = e.doc,
        s = a.mode;
      t = U( a, t );
      var l, u = E( a, t.line ),
        c = et( e, t.line, n ),
        f = new Ga( u.text, e.options.tabSize );
      for ( r && ( l = [] );
        ( r || f.pos < t.ch ) && !f.eol(); ) f.start = f.pos, o = rt( s, f, c ), r && l.push( i( !0 ) );
      return r ? l : i()
    }

    function it( e, t ) {
      if ( e )
        for ( ;; ) {
          var n = e.match( /(?:^|\s+)line-(background-)?(\S+)/ );
          if ( !n ) break;
          e = e.slice( 0, n.index ) + e.slice( n.index + n[ 0 ].length );
          var r = n[ 1 ] ? "bgClass" : "textClass";
          null == t[ r ] ? t[ r ] = n[ 2 ] : new RegExp( "(?:^|s)" + n[ 2 ] + "(?:$|s)" ).test( t[ r ] ) || ( t[ r ] += " " + n[ 2 ] )
        }
      return e
    }

    function at( e, t, n, r, o, i, a ) {
      var s = n.flattenSpans;
      null == s && ( s = e.options.flattenSpans );
      var l, u = 0,
        c = null,
        f = new Ga( t, e.options.tabSize ),
        p = e.options.addModeClass && [ null ];
      for ( "" == t && it( nt( n, r ), i ); !f.eol(); ) {
        if ( f.pos > e.options.maxHighlightLength ? ( s = !1, a && tt( e, t, r, f.pos ), f.pos = t.length, l = null ) : l = it( rt( n, f, r, p ), i ), p ) {
          var d = p[ 0 ].name;
          d && ( l = "m-" + ( l ? d + " " + l : d ) )
        }
        if ( !s || c != l ) {
          for ( ; u < f.start; ) u = Math.min( f.start, u + 5e3 ), o( u, c );
          c = l
        }
        f.start = f.pos
      }
      for ( ; u < f.pos; ) {
        var h = Math.min( f.pos, u + 5e3 );
        o( h, c ), u = h
      }
    }

    function st( e, t, n ) {
      for ( var r, o, i = e.doc, a = n ? -1 : t - ( e.doc.mode.innerMode ? 1e3 : 100 ), s = t; s > a; --s ) {
        if ( s <= i.first ) return i.first;
        var l = E( i, s - 1 );
        if ( l.stateAfter && ( !n || s <= i.frontier ) ) return s;
        var u = c( l.text, null, e.options.tabSize );
        ( null == o || r > u ) && ( o = s - 1, r = u )
      }
      return o
    }

    function lt( e, t, n ) {
      this.text = e, ee( this, t ), this.height = n ? n( this ) : 1
    }

    function ut( e, t, n, r ) {
      e.text = t, e.stateAfter && ( e.stateAfter = null ), e.styles && ( e.styles = null ), null != e.order && ( e.order = null ), Q( e ), ee( e, n );
      var o = r ? r( e ) : 1;
      o != e.height && A( e, o )
    }

    function ct( e ) {
      e.parent = null, Q( e )
    }

    function ft( e, t ) {
      if ( !e || /^\s*$/.test( e ) ) return null;
      var n = t.addModeClass ? $a : Ka;
      return n[ e ] || ( n[ e ] = e.replace( /\S+/g, "cm-$&" ) )
    }

    function pt( e, t ) {
      var n = r( "span", null, null, oa ? "padding-right: .1px" : null ),
        o = {
          pre: r( "pre", [ n ], "CodeMirror-line" ),
          content: n,
          col: 0,
          pos: 0,
          cm: e,
          trailingSpace: !1,
          splitSpaces: ( na || oa ) && e.getOption( "lineWrapping" )
        };
      t.measure = {};
      for ( var i = 0; i <= ( t.rest ? t.rest.length : 0 ); i++ ) {
        var a = i ? t.rest[ i - 1 ] : t.line,
          l = void 0;
        o.pos = 0, o.addToken = ht, qe( e.display.measure ) && ( l = Te( a ) ) && ( o.addToken = gt( o.addToken, l ) ), o.map = [];
        var u = t != e.display.externalMeasured && M( a );
        yt( a, o, Qe( e, a, u ) ), a.styleClasses && ( a.styleClasses.bgClass && ( o.bgClass = s( a.styleClasses.bgClass, o.bgClass || "" ) ), a.styleClasses.textClass && ( o.textClass = s( a.styleClasses.textClass, o.textClass || "" ) ) ), 0 == o.map.length && o.map.push( 0, 0, o.content.appendChild( ze( e.display.measure ) ) ), 0 == i ? ( t.measure.map = o.map, t.measure.cache = {} ) : ( ( t.measure.maps || ( t.measure.maps = [] ) ).push( o.map ), ( t.measure.caches || ( t.measure.caches = [] ) ).push( {} ) )
      }
      if ( oa ) {
        var c = o.content.lastChild;
        ( /\bcm-tab\b/.test( c.className ) || c.querySelector && c.querySelector( ".cm-tab" ) ) && ( o.content.className = "cm-tab-wrap-hack" )
      }
      return Oe( e, "renderLine", e, t.line, o.pre ), o.pre.className && ( o.textClass = s( o.pre.className, o.textClass || "" ) ), o
    }

    function dt( e ) {
      var t = r( "span", "•", "cm-invalidchar" );
      return t.title = "\\u" + e.charCodeAt( 0 ).toString( 16 ), t.setAttribute( "aria-label", t.title ), t
    }

    function ht( e, t, n, o, i, a, s ) {
      if ( t ) {
        var l, u = e.splitSpaces ? vt( t, e.trailingSpace ) : t,
          c = e.cm.state.specialChars,
          f = !1;
        if ( c.test( t ) ) {
          l = document.createDocumentFragment();
          for ( var p = 0;; ) {
            c.lastIndex = p;
            var d = c.exec( t ),
              v = d ? d.index - p : t.length - p;
            if ( v ) {
              var g = document.createTextNode( u.slice( p, p + v ) );
              na && ra < 9 ? l.appendChild( r( "span", [ g ] ) ) : l.appendChild( g ), e.map.push( e.pos, e.pos + v, g ), e.col += v, e.pos += v
            }
            if ( !d ) break;
            p += v + 1;
            var m = void 0;
            if ( "\t" == d[ 0 ] ) {
              var y = e.cm.options.tabSize,
                b = y - e.col % y;
              m = l.appendChild( r( "span", h( b ), "cm-tab" ) ), m.setAttribute( "role", "presentation" ), m.setAttribute( "cm-text", "\t" ), e.col += b
            } else "\r" == d[ 0 ] || "\n" == d[ 0 ] ? ( m = l.appendChild( r( "span", "\r" == d[ 0 ] ? "␍" : "␤", "cm-invalidchar" ) ), m.setAttribute( "cm-text", d[ 0 ] ), e.col += 1 ) : ( m = e.cm.options.specialCharPlaceholder( d[ 0 ] ), m.setAttribute( "cm-text", d[ 0 ] ), na && ra < 9 ? l.appendChild( r( "span", [ m ] ) ) : l.appendChild( m ), e.col += 1 );
            e.map.push( e.pos, e.pos + 1, m ), e.pos++
          }
        } else e.col += t.length, l = document.createTextNode( u ), e.map.push( e.pos, e.pos + t.length, l ), na && ra < 9 && ( f = !0 ), e.pos += t.length;
        if ( e.trailingSpace = 32 == u.charCodeAt( t.length - 1 ), n || o || i || f || s ) {
          var x = n || "";
          o && ( x += o ), i && ( x += i );
          var w = r( "span", [ l ], x, s );
          return a && ( w.title = a ), e.content.appendChild( w )
        }
        e.content.appendChild( l )
      }
    }

    function vt( e, t ) {
      if ( e.length > 1 && !/  /.test( e ) ) return e;
      for ( var n = t, r = "", o = 0; o < e.length; o++ ) {
        var i = e.charAt( o );
        " " != i || !n || o != e.length - 1 && 32 != e.charCodeAt( o + 1 ) || ( i = " " ), r += i, n = " " == i
      }
      return r
    }

    function gt( e, t ) {
      return function ( n, r, o, i, a, s, l ) {
        o = o ? o + " cm-force-border" : "cm-force-border";
        for ( var u = n.pos, c = u + r.length;; ) {
          for ( var f = void 0, p = 0; p < t.length && ( f = t[ p ], !( f.to > u && f.from <= u ) ); p++ );
          if ( f.to >= c ) return e( n, r, o, i, a, s, l );
          e( n, r.slice( 0, f.to - u ), o, i, null, s, l ), i = null, r = r.slice( f.to - u ), u = f.to
        }
      }
    }

    function mt( e, t, n, r ) {
      var o = !r && n.widgetNode;
      o && e.map.push( e.pos, e.pos + t, o ), !r && e.cm.display.input.needsContentAttribute && ( o || ( o = e.content.appendChild( document.createElement( "span" ) ) ), o.setAttribute( "cm-marker", n.id ) ), o && ( e.cm.display.input.setUneditable( o ), e.content.appendChild( o ) ), e.pos += t, e.trailingSpace = !1
    }

    function yt( e, t, n ) {
      var r = e.markedSpans,
        o = e.text,
        i = 0;
      if ( r )
        for ( var a, s, l, u, c, f, p, d = o.length, h = 0, v = 1, g = "", m = 0;; ) {
          if ( m == h ) {
            l = u = c = f = s = "", p = null, m = 1 / 0;
            for ( var y = [], b = void 0, x = 0; x < r.length; ++x ) {
              var w = r[ x ],
                _ = w.marker;
              "bookmark" == _.type && w.from == h && _.widgetNode ? y.push( _ ) : w.from <= h && ( null == w.to || w.to > h || _.collapsed && w.to == h && w.from == h ) ? ( null != w.to && w.to != h && m > w.to && ( m = w.to, u = "" ), _.className && ( l += " " + _.className ), _.css && ( s = ( s ? s + ";" : "" ) + _.css ), _.startStyle && w.from == h && ( c += " " + _.startStyle ), _.endStyle && w.to == m && ( b || ( b = [] ) ).push( _.endStyle, w.to ), _.title && !f && ( f = _.title ), _.collapsed && ( !p || re( p.marker, _ ) < 0 ) && ( p = w ) ) : w.from > h && m > w.from && ( m = w.from )
            }
            if ( b )
              for ( var C = 0; C < b.length; C += 2 ) b[ C + 1 ] == m && ( u += " " + b[ C ] );
            if ( !p || p.from == h )
              for ( var k = 0; k < y.length; ++k ) mt( t, 0, y[ k ] );
            if ( p && ( p.from || 0 ) == h ) {
              if ( mt( t, ( null == p.to ? d + 1 : p.to ) - h, p.marker, null == p.from ), null == p.to ) return;
              p.to == h && ( p = !1 )
            }
          }
          if ( h >= d ) break;
          for ( var E = Math.min( d, m );; ) {
            if ( g ) {
              var S = h + g.length;
              if ( !p ) {
                var T = S > E ? g.slice( 0, E - h ) : g;
                t.addToken( t, T, a ? a + l : l, c, h + T.length == m ? u : "", f, s )
              }
              if ( S >= E ) {
                g = g.slice( E - h ), h = E;
                break
              }
              h = S, c = ""
            }
            g = o.slice( i, i = n[ v++ ] ), a = ft( n[ v++ ], t.cm.options )
          }
        } else
          for ( var A = 1; A < n.length; A += 2 ) t.addToken( t, o.slice( i, i = n[ A ] ), ft( n[ A + 1 ], t.cm.options ) )
    }

    function bt( e, t, n ) {
      this.line = t, this.rest = ue( t ), this.size = this.rest ? M( v( this.rest ) ) - n + 1 : 1, this.node = this.text = null, this.hidden = pe( e, t )
    }

    function xt( e, t, n ) {
      for ( var r, o = [], i = t; i < n; i = r ) {
        var a = new bt( e.doc, E( e.doc, i ), i );
        r = i + a.size, o.push( a )
      }
      return o
    }

    function wt( e ) {
      Ja ? Ja.ops.push( e ) : e.ownsGroup = Ja = {
        ops: [ e ],
        delayedCallbacks: []
      }
    }

    function _t( e ) {
      var t = e.delayedCallbacks,
        n = 0;
      do {
        for ( ; n < t.length; n++ ) t[ n ].call( null );
        for ( var r = 0; r < e.ops.length; r++ ) {
          var o = e.ops[ r ];
          if ( o.cursorActivityHandlers )
            for ( ; o.cursorActivityCalled < o.cursorActivityHandlers.length; ) o.cursorActivityHandlers[ o.cursorActivityCalled++ ].call( null, o.cm )
        }
      } while ( n < t.length )
    }

    function Ct( e, t ) {
      var n = e.ownsGroup;
      if ( n ) try {
        _t( n )
      } finally {
        Ja = null, t( n )
      }
    }

    function kt( e, t ) {
      var n = Ae( e, t );
      if ( n.length ) {
        var r, o = Array.prototype.slice.call( arguments, 2 );
        Ja ? r = Ja.delayedCallbacks : Xa ? r = Xa : ( r = Xa = [], setTimeout( Et, 0 ) );
        for ( var i = function ( e ) {
            r.push( function () {
              return n[ e ].apply( null, o )
            } )
          }, a = 0; a < n.length; ++a ) i( a )
      }
    }

    function Et() {
      var e = Xa;
      Xa = null;
      for ( var t = 0; t < e.length; ++t ) e[ t ]()
    }

    function St( e, t, n, r ) {
      for ( var o = 0; o < t.changes.length; o++ ) {
        var i = t.changes[ o ];
        "text" == i ? Ot( e, t ) : "gutter" == i ? Pt( e, t, n, r ) : "class" == i ? Nt( t ) : "widget" == i && Dt( e, t, r )
      }
      t.changes = null
    }

    function Tt( e ) {
      return e.node == e.text && ( e.node = r( "div", null, null, "position: relative" ), e.text.parentNode && e.text.parentNode.replaceChild( e.node, e.text ), e.node.appendChild( e.text ), na && ra < 8 && ( e.node.style.zIndex = 2 ) ), e.node
    }

    function At( e ) {
      var t = e.bgClass ? e.bgClass + " " + ( e.line.bgClass || "" ) : e.line.bgClass;
      if ( t && ( t += " CodeMirror-linebackground" ), e.background ) t ? e.background.className = t : ( e.background.parentNode.removeChild( e.background ), e.background = null );
      else if ( t ) {
        var n = Tt( e );
        e.background = n.insertBefore( r( "div", null, t ), n.firstChild )
      }
    }

    function Mt( e, t ) {
      var n = e.display.externalMeasured;
      return n && n.line == t.line ? ( e.display.externalMeasured = null, t.measure = n.measure, n.built ) : pt( e, t )
    }

    function Ot( e, t ) {
      var n = t.text.className,
        r = Mt( e, t );
      t.text == t.node && ( t.node = r.pre ), t.text.parentNode.replaceChild( r.pre, t.text ), t.text = r.pre, r.bgClass != t.bgClass || r.textClass != t.textClass ? ( t.bgClass = r.bgClass, t.textClass = r.textClass, Nt( t ) ) : n && ( t.text.className = n )
    }

    function Nt( e ) {
      At( e ), e.line.wrapClass ? Tt( e ).className = e.line.wrapClass : e.node != e.text && ( e.node.className = "" );
      var t = e.textClass ? e.textClass + " " + ( e.line.textClass || "" ) : e.line.textClass;
      e.text.className = t || ""
    }

    function Pt( e, t, n, o ) {
      if ( t.gutter && ( t.node.removeChild( t.gutter ), t.gutter = null ), t.gutterBackground && ( t.node.removeChild( t.gutterBackground ), t.gutterBackground = null ), t.line.gutterClass ) {
        var i = Tt( t );
        t.gutterBackground = r( "div", null, "CodeMirror-gutter-background " + t.line.gutterClass, "left: " + ( e.options.fixedGutter ? o.fixedPos : -o.gutterTotalWidth ) + "px; width: " + o.gutterTotalWidth + "px" ), i.insertBefore( t.gutterBackground, t.text )
      }
      var a = t.line.gutterMarkers;
      if ( e.options.lineNumbers || a ) {
        var s = Tt( t ),
          l = t.gutter = r( "div", null, "CodeMirror-gutter-wrapper", "left: " + ( e.options.fixedGutter ? o.fixedPos : -o.gutterTotalWidth ) + "px" );
        if ( e.display.input.setUneditable( l ), s.insertBefore( l, t.text ), t.line.gutterClass && ( l.className += " " + t.line.gutterClass ), !e.options.lineNumbers || a && a[ "CodeMirror-linenumbers" ] || ( t.lineNumber = l.appendChild( r( "div", P( e.options, n ), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + o.gutterLeft[ "CodeMirror-linenumbers" ] + "px; width: " + e.display.lineNumInnerWidth + "px" ) ) ), a )
          for ( var u = 0; u < e.options.gutters.length; ++u ) {
            var c = e.options.gutters[ u ],
              f = a.hasOwnProperty( c ) && a[ c ];
            f && l.appendChild( r( "div", [ f ], "CodeMirror-gutter-elt", "left: " + o.gutterLeft[ c ] + "px; width: " + o.gutterWidth[ c ] + "px" ) )
          }
      }
    }

    function Dt( e, t, n ) {
      t.alignable && ( t.alignable = null );
      for ( var r = t.node.firstChild, o = void 0; r; r = o ) o = r.nextSibling, "CodeMirror-linewidget" == r.className && t.node.removeChild( r );
      It( e, t, n )
    }

    function Lt( e, t, n, r ) {
      var o = Mt( e, t );
      return t.text = t.node = o.pre, o.bgClass && ( t.bgClass = o.bgClass ), o.textClass && ( t.textClass = o.textClass ), Nt( t ), Pt( e, t, n, r ), It( e, t, r ), t.node
    }

    function It( e, t, n ) {
      if ( Rt( e, t.line, t, n, !0 ), t.rest )
        for ( var r = 0; r < t.rest.length; r++ ) Rt( e, t.rest[ r ], t, n, !1 )
    }

    function Rt( e, t, n, o, i ) {
      if ( t.widgets )
        for ( var a = Tt( n ), s = 0, l = t.widgets; s < l.length; ++s ) {
          var u = l[ s ],
            c = r( "div", [ u.node ], "CodeMirror-linewidget" );
          u.handleMouseEvents || c.setAttribute( "cm-ignore-events", "true" ), jt( u, c, n, o ), e.display.input.setUneditable( c ), i && u.above ? a.insertBefore( c, n.gutter || n.text ) : a.appendChild( c ), kt( u, "redraw" )
        }
    }

    function jt( e, t, n, r ) {
      if ( e.noHScroll ) {
        ( n.alignable || ( n.alignable = [] ) ).push( t );
        var o = r.wrapperWidth;
        t.style.left = r.fixedPos + "px", e.coverGutter || ( o -= r.gutterTotalWidth, t.style.paddingLeft = r.gutterTotalWidth + "px" ), t.style.width = o + "px"
      }
      e.coverGutter && ( t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || ( t.style.marginLeft = -r.gutterTotalWidth + "px" ) )
    }

    function Ft( e ) {
      if ( null != e.height ) return e.height;
      var t = e.doc.cm;
      if ( !t ) return 0;
      if ( !o( document.body, e.node ) ) {
        var i = "position: relative;";
        e.coverGutter && ( i += "margin-left: -" + t.display.gutters.offsetWidth + "px;" ), e.noHScroll && ( i += "width: " + t.display.wrapper.clientWidth + "px;" ), n( t.display.measure, r( "div", [ e.node ], null, i ) )
      }
      return e.height = e.node.parentNode.offsetHeight
    }

    function Ut( e, t ) {
      for ( var n = Ue( t ); n != e.wrapper; n = n.parentNode )
        if ( !n || 1 == n.nodeType && "true" == n.getAttribute( "cm-ignore-events" ) || n.parentNode == e.sizer && n != e.mover ) return !0
    }

    function Bt( e ) {
      return e.lineSpace.offsetTop
    }

    function zt( e ) {
      return e.mover.offsetHeight - e.lineSpace.offsetHeight
    }

    function qt( e ) {
      if ( e.cachedPaddingH ) return e.cachedPaddingH;
      var t = n( e.measure, r( "pre", "x" ) ),
        o = window.getComputedStyle ? window.getComputedStyle( t ) : t.currentStyle,
        i = {
          left: parseInt( o.paddingLeft ),
          right: parseInt( o.paddingRight )
        };
      return isNaN( i.left ) || isNaN( i.right ) || ( e.cachedPaddingH = i ), i
    }

    function Ht( e ) {
      return ka - e.display.nativeBarWidth
    }

    function Wt( e ) {
      return e.display.scroller.clientWidth - Ht( e ) - e.display.barWidth
    }

    function Vt( e ) {
      return e.display.scroller.clientHeight - Ht( e ) - e.display.barHeight
    }

    function Gt( e, t, n ) {
      var r = e.options.lineWrapping,
        o = r && Wt( e );
      if ( !t.measure.heights || r && t.measure.width != o ) {
        var i = t.measure.heights = [];
        if ( r ) {
          t.measure.width = o;
          for ( var a = t.text.firstChild.getClientRects(), s = 0; s < a.length - 1; s++ ) {
            var l = a[ s ],
              u = a[ s + 1 ];
            Math.abs( l.bottom - u.bottom ) > 2 && i.push( ( l.bottom + u.top ) / 2 - n.top )
          }
        }
        i.push( n.bottom - n.top )
      }
    }

    function Yt( e, t, n ) {
      if ( e.line == t ) return {
        map: e.measure.map,
        cache: e.measure.cache
      };
      for ( var r = 0; r < e.rest.length; r++ )
        if ( e.rest[ r ] == t ) return {
          map: e.measure.maps[ r ],
          cache: e.measure.caches[ r ]
        };
      for ( var o = 0; o < e.rest.length; o++ )
        if ( M( e.rest[ o ] ) > n ) return {
          map: e.measure.maps[ o ],
          cache: e.measure.caches[ o ],
          before: !0
        }
    }

    function Kt( e, t ) {
      t = le( t );
      var r = M( t ),
        o = e.display.externalMeasured = new bt( e.doc, t, r );
      o.lineN = r;
      var i = o.built = pt( e, o );
      return o.text = i.pre, n( e.display.lineMeasure, i.pre ), o
    }

    function $t( e, t, n, r ) {
      return Zt( e, Xt( e, t ), n, r )
    }

    function Jt( e, t ) {
      if ( t >= e.display.viewFrom && t < e.display.viewTo ) return e.display.view[ kn( e, t ) ];
      var n = e.display.externalMeasured;
      return n && t >= n.lineN && t < n.lineN + n.size ? n : void 0
    }

    function Xt( e, t ) {
      var n = M( t ),
        r = Jt( e, n );
      r && !r.text ? r = null : r && r.changes && ( St( e, r, n, bn( e ) ), e.curOp.forceUpdate = !0 ), r || ( r = Kt( e, t ) );
      var o = Yt( r, t, n );
      return {
        line: t,
        view: r,
        rect: null,
        map: o.map,
        cache: o.cache,
        before: o.before,
        hasHeights: !1
      }
    }

    function Zt( e, t, n, r, o ) {
      t.before && ( n = -1 );
      var i, a = n + ( r || "" );
      return t.cache.hasOwnProperty( a ) ? i = t.cache[ a ] : ( t.rect || ( t.rect = t.view.text.getBoundingClientRect() ), t.hasHeights || ( Gt( e, t.view, t.rect ), t.hasHeights = !0 ), i = tn( e, t, n, r ), i.bogus || ( t.cache[ a ] = i ) ), {
        left: i.left,
        right: i.right,
        top: o ? i.rtop : i.top,
        bottom: o ? i.rbottom : i.bottom
      }
    }

    function Qt( e, t, n ) {
      for ( var r, o, i, a, s, l, u = 0; u < e.length; u += 3 )
        if ( s = e[ u ], l = e[ u + 1 ], t < s ? ( o = 0, i = 1, a = "left" ) : t < l ? ( o = t - s, i = o + 1 ) : ( u == e.length - 3 || t == l && e[ u + 3 ] > t ) && ( i = l - s, o = i - 1, t >= l && ( a = "right" ) ), null != o ) {
          if ( r = e[ u + 2 ], s == l && n == ( r.insertLeft ? "left" : "right" ) && ( a = n ), "left" == n && 0 == o )
            for ( ; u && e[ u - 2 ] == e[ u - 3 ] && e[ u - 1 ].insertLeft; ) r = e[ ( u -= 3 ) + 2 ], a = "left";
          if ( "right" == n && o == l - s )
            for ( ; u < e.length - 3 && e[ u + 3 ] == e[ u + 4 ] && !e[ u + 5 ].insertLeft; ) r = e[ ( u += 3 ) + 2 ], a = "right";
          break
        } return {
        node: r,
        start: o,
        end: i,
        collapse: a,
        coverStart: s,
        coverEnd: l
      }
    }

    function en( e, t ) {
      var n = Za;
      if ( "left" == t )
        for ( var r = 0; r < e.length && ( n = e[ r ] ).left == n.right; r++ );
      else
        for ( var o = e.length - 1; o >= 0 && ( n = e[ o ] ).left == n.right; o-- );
      return n
    }

    function tn( e, t, n, r ) {
      var o, i = Qt( t.map, n, r ),
        a = i.node,
        s = i.start,
        l = i.end,
        u = i.collapse;
      if ( 3 == a.nodeType ) {
        for ( var c = 0; c < 4; c++ ) {
          for ( ; s && C( t.line.text.charAt( i.coverStart + s ) ); ) --s;
          for ( ; i.coverStart + l < i.coverEnd && C( t.line.text.charAt( i.coverStart + l ) ); ) ++l;
          if ( o = na && ra < 9 && 0 == s && l == i.coverEnd - i.coverStart ? a.parentNode.getBoundingClientRect() : en( ma( a, s, l ).getClientRects(), r ), o.left || o.right || 0 == s ) break;
          l = s, s -= 1, u = "right"
        }
        na && ra < 11 && ( o = nn( e.display.measure, o ) )
      } else {
        s > 0 && ( u = r = "right" );
        var f;
        o = e.options.lineWrapping && ( f = a.getClientRects() ).length > 1 ? f[ "right" == r ? f.length - 1 : 0 ] : a.getBoundingClientRect()
      }
      if ( na && ra < 9 && !s && ( !o || !o.left && !o.right ) ) {
        var p = a.parentNode.getClientRects()[ 0 ];
        o = p ? {
          left: p.left,
          right: p.left + yn( e.display ),
          top: p.top,
          bottom: p.bottom
        } : Za
      }
      for ( var d = o.top - t.rect.top, h = o.bottom - t.rect.top, v = ( d + h ) / 2, g = t.view.measure.heights, m = 0; m < g.length - 1 && !( v < g[ m ] ); m++ );
      var y = m ? g[ m - 1 ] : 0,
        b = g[ m ],
        x = {
          left: ( "right" == u ? o.right : o.left ) - t.rect.left,
          right: ( "left" == u ? o.left : o.right ) - t.rect.left,
          top: y,
          bottom: b
        };
      return o.left || o.right || ( x.bogus = !0 ), e.options.singleCursorHeightPerLine || ( x.rtop = d, x.rbottom = h ), x
    }

    function nn( e, t ) {
      if ( !window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !He( e ) ) return t;
      var n = screen.logicalXDPI / screen.deviceXDPI,
        r = screen.logicalYDPI / screen.deviceYDPI;
      return {
        left: t.left * n,
        right: t.right * n,
        top: t.top * r,
        bottom: t.bottom * r
      }
    }

    function rn( e ) {
      if ( e.measure && ( e.measure.cache = {}, e.measure.heights = null, e.rest ) )
        for ( var t = 0; t < e.rest.length; t++ ) e.measure.caches[ t ] = {}
    }

    function on( e ) {
      e.display.externalMeasure = null, t( e.display.lineMeasure );
      for ( var n = 0; n < e.display.view.length; n++ ) rn( e.display.view[ n ] )
    }

    function an( e ) {
      on( e ), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || ( e.display.maxLineChanged = !0 ), e.display.lineNumChars = null
    }

    function sn() {
      return window.pageXOffset || ( document.documentElement || document.body ).scrollLeft
    }

    function ln() {
      return window.pageYOffset || ( document.documentElement || document.body ).scrollTop
    }

    function un( e, t, n, r, o ) {
      if ( !o && t.widgets )
        for ( var i = 0; i < t.widgets.length; ++i )
          if ( t.widgets[ i ].above ) {
            var a = Ft( t.widgets[ i ] );
            n.top += a, n.bottom += a
          } if ( "line" == r ) return n;
      r || ( r = "local" );
      var s = he( t );
      if ( "local" == r ? s += Bt( e.display ) : s -= e.display.viewOffset, "page" == r || "window" == r ) {
        var l = e.display.lineSpace.getBoundingClientRect();
        s += l.top + ( "window" == r ? 0 : ln() );
        var u = l.left + ( "window" == r ? 0 : sn() );
        n.left += u, n.right += u
      }
      return n.top += s, n.bottom += s, n
    }

    function cn( e, t, n ) {
      if ( "div" == n ) return t;
      var r = t.left,
        o = t.top;
      if ( "page" == n ) r -= sn(), o -= ln();
      else if ( "local" == n || !n ) {
        var i = e.display.sizer.getBoundingClientRect();
        r += i.left, o += i.top
      }
      var a = e.display.lineSpace.getBoundingClientRect();
      return {
        left: r - a.left,
        top: o - a.top
      }
    }

    function fn( e, t, n, r, o ) {
      return r || ( r = E( e.doc, t.line ) ), un( e, r, $t( e, r, t.ch, o ), n )
    }

    function pn( e, t, n, r, o, i ) {
      function a( t, a ) {
        var s = Zt( e, o, t, a ? "right" : "left", i );
        return a ? s.left = s.right : s.right = s.left, un( e, r, s, n )
      }

      function s( e, t ) {
        var n = l[ t ],
          r = n.level % 2;
        return e == ye( n ) && t && n.level < l[ t - 1 ].level ? ( n = l[ --t ], e = be( n ) - ( n.level % 2 ? 0 : 1 ), r = !0 ) : e == be( n ) && t < l.length - 1 && n.level < l[ t + 1 ].level && ( n = l[ ++t ], e = ye( n ) - n.level % 2, r = !1 ), r && e == n.to && e > n.from ? a( e - 1 ) : a( e, r )
      }
      r = r || E( e.doc, t.line ), o || ( o = Xt( e, r ) );
      var l = Te( r ),
        u = t.ch;
      if ( !l ) return a( u );
      var c = Ce( l, u ),
        f = s( u, c );
      return null != La && ( f.other = s( u, La ) ), f
    }

    function dn( e, t ) {
      var n = 0;
      t = U( e.doc, t ), e.options.lineWrapping || ( n = yn( e.display ) * t.ch );
      var r = E( e.doc, t.line ),
        o = he( r ) + Bt( e.display );
      return {
        left: n,
        right: n,
        top: o,
        bottom: o + r.height
      }
    }

    function hn( e, t, n, r ) {
      var o = D( e, t );
      return o.xRel = r, n && ( o.outside = !0 ), o
    }

    function vn( e, t, n ) {
      var r = e.doc;
      if ( n += e.display.viewOffset, n < 0 ) return hn( r.first, 0, !0, -1 );
      var o = O( r, n ),
        i = r.first + r.size - 1;
      if ( o > i ) return hn( r.first + r.size - 1, E( r, i ).text.length, !0, 1 );
      t < 0 && ( t = 0 );
      for ( var a = E( r, o );; ) {
        var s = gn( e, a, o, t, n ),
          l = ae( a ),
          u = l && l.find( 0, !0 );
        if ( !l || !( s.ch > u.from.ch || s.ch == u.from.ch && s.xRel > 0 ) ) return s;
        o = M( a = u.to.line )
      }
    }

    function gn( e, t, n, r, o ) {
      function i( r ) {
        var o = pn( e, D( n, r ), "line", t, u );
        return s = !0, a > o.bottom ? o.left - l : a < o.top ? o.left + l : ( s = !1, o.left )
      }
      var a = o - he( t ),
        s = !1,
        l = 2 * e.display.wrapper.clientWidth,
        u = Xt( e, t ),
        c = Te( t ),
        f = t.text.length,
        p = xe( t ),
        d = we( t ),
        h = i( p ),
        v = s,
        g = i( d ),
        m = s;
      if ( r > g ) return hn( n, d, m, 1 );
      for ( ;; ) {
        if ( c ? d == p || d == Ee( t, p, 1 ) : d - p <= 1 ) {
          var y = r < h || r - h <= g - r ? p : d,
            b = y == p ? v : m,
            x = r - ( y == p ? h : g );
          if ( m && !c && !/\s/.test( t.text.charAt( y ) ) && x > 0 && y < t.text.length && u.view.measure.heights.length > 1 ) {
            var w = Zt( e, u, y, "right" );
            a <= w.bottom && a >= w.top && Math.abs( r - w.right ) < x && ( b = !1, y++, x = r - w.right )
          }
          for ( ; C( t.text.charAt( y ) ); ) ++y;
          var _ = hn( n, y, b, x < -1 ? -1 : x > 1 ? 1 : 0 );
          return _
        }
        var k = Math.ceil( f / 2 ),
          E = p + k;
        if ( c ) {
          E = p;
          for ( var S = 0; S < k; ++S ) E = Ee( t, E, 1 )
        }
        var T = i( E );
        T > r ? ( d = E, g = T, ( m = s ) && ( g += 1e3 ), f = k ) : ( p = E, h = T, v = s, f -= k )
      }
    }

    function mn( e ) {
      if ( null != e.cachedTextHeight ) return e.cachedTextHeight;
      if ( null == Ya ) {
        Ya = r( "pre" );
        for ( var o = 0; o < 49; ++o ) Ya.appendChild( document.createTextNode( "x" ) ), Ya.appendChild( r( "br" ) );
        Ya.appendChild( document.createTextNode( "x" ) )
      }
      n( e.measure, Ya );
      var i = Ya.offsetHeight / 50;
      return i > 3 && ( e.cachedTextHeight = i ), t( e.measure ), i || 1
    }

    function yn( e ) {
      if ( null != e.cachedCharWidth ) return e.cachedCharWidth;
      var t = r( "span", "xxxxxxxxxx" ),
        o = r( "pre", [ t ] );
      n( e.measure, o );
      var i = t.getBoundingClientRect(),
        a = ( i.right - i.left ) / 10;
      return a > 2 && ( e.cachedCharWidth = a ), a || 10
    }

    function bn( e ) {
      for ( var t = e.display, n = {}, r = {}, o = t.gutters.clientLeft, i = t.gutters.firstChild, a = 0; i; i = i.nextSibling, ++a ) n[ e.options.gutters[ a ] ] = i.offsetLeft + i.clientLeft + o, r[ e.options.gutters[ a ] ] = i.clientWidth;
      return {
        fixedPos: xn( t ),
        gutterTotalWidth: t.gutters.offsetWidth,
        gutterLeft: n,
        gutterWidth: r,
        wrapperWidth: t.wrapper.clientWidth
      }
    }

    function xn( e ) {
      return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left
    }

    function wn( e ) {
      var t = mn( e.display ),
        n = e.options.lineWrapping,
        r = n && Math.max( 5, e.display.scroller.clientWidth / yn( e.display ) - 3 );
      return function ( o ) {
        if ( pe( e.doc, o ) ) return 0;
        var i = 0;
        if ( o.widgets )
          for ( var a = 0; a < o.widgets.length; a++ ) o.widgets[ a ].height && ( i += o.widgets[ a ].height );
        return n ? i + ( Math.ceil( o.text.length / r ) || 1 ) * t : i + t
      }
    }

    function _n( e ) {
      var t = e.doc,
        n = wn( e );
      t.iter( function ( e ) {
        var t = n( e );
        t != e.height && A( e, t )
      } )
    }

    function Cn( e, t, n, r ) {
      var o = e.display;
      if ( !n && "true" == Ue( t ).getAttribute( "cm-not-content" ) ) return null;
      var i, a, s = o.lineSpace.getBoundingClientRect();
      try {
        i = t.clientX - s.left, a = t.clientY - s.top
      } catch ( e ) {
        return null
      }
      var l, u = vn( e, i, a );
      if ( r && 1 == u.xRel && ( l = E( e.doc, u.line ).text ).length == u.ch ) {
        var f = c( l, l.length, e.options.tabSize ) - l.length;
        u = D( u.line, Math.max( 0, Math.round( ( i - qt( e.display ).left ) / yn( e.display ) ) - f ) )
      }
      return u
    }

    function kn( e, t ) {
      if ( t >= e.display.viewTo ) return null;
      if ( t -= e.display.viewFrom, t < 0 ) return null;
      for ( var n = e.display.view, r = 0; r < n.length; r++ )
        if ( t -= n[ r ].size, t < 0 ) return r
    }

    function En( e ) {
      e.display.input.showSelection( e.display.input.prepareSelection() )
    }

    function Sn( e, t ) {
      for ( var n = e.doc, r = {}, o = r.cursors = document.createDocumentFragment(), i = r.selection = document.createDocumentFragment(), a = 0; a < n.sel.ranges.length; a++ )
        if ( t !== !1 || a != n.sel.primIndex ) {
          var s = n.sel.ranges[ a ];
          if ( !( s.from().line >= e.display.viewTo || s.to().line < e.display.viewFrom ) ) {
            var l = s.empty();
            ( l || e.options.showCursorWhenSelecting ) && Tn( e, s.head, o ), l || An( e, s, i )
          }
        } return r
    }

    function Tn( e, t, n ) {
      var o = pn( e, t, "div", null, null, !e.options.singleCursorHeightPerLine ),
        i = n.appendChild( r( "div", " ", "CodeMirror-cursor" ) );
      if ( i.style.left = o.left + "px", i.style.top = o.top + "px", i.style.height = Math.max( 0, o.bottom - o.top ) * e.options.cursorHeight + "px", o.other ) {
        var a = n.appendChild( r( "div", " ", "CodeMirror-cursor CodeMirror-secondarycursor" ) );
        a.style.display = "", a.style.left = o.other.left + "px", a.style.top = o.other.top + "px", a.style.height = .85 * ( o.other.bottom - o.other.top ) + "px"
      }
    }

    function An( e, t, n ) {
      function o( e, t, n, o ) {
        t < 0 && ( t = 0 ), t = Math.round( t ), o = Math.round( o ), l.appendChild( r( "div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px;\n                             top: " + t + "px; width: " + ( null == n ? f - e : n ) + "px;\n                             height: " + ( o - t ) + "px" ) )
      }

      function i( t, n, r ) {
        function i( n, r ) {
          return fn( e, D( t, n ), "div", u, r )
        }
        var a, l, u = E( s, t ),
          p = u.text.length;
        return me( Te( u ), n || 0, null == r ? p : r, function ( e, t, s ) {
          var u, d, h, v = i( e, "left" );
          if ( e == t ) u = v, d = h = v.left;
          else {
            if ( u = i( t - 1, "right" ), "rtl" == s ) {
              var g = v;
              v = u, u = g
            }
            d = v.left, h = u.right
          }
          null == n && 0 == e && ( d = c ), u.top - v.top > 3 && ( o( d, v.top, null, v.bottom ), d = c, v.bottom < u.top && o( d, v.bottom, null, u.top ) ), null == r && t == p && ( h = f ), ( !a || v.top < a.top || v.top == a.top && v.left < a.left ) && ( a = v ), ( !l || u.bottom > l.bottom || u.bottom == l.bottom && u.right > l.right ) && ( l = u ), d < c + 1 && ( d = c ), o( d, u.top, h - d, u.bottom )
        } ), {
          start: a,
          end: l
        }
      }
      var a = e.display,
        s = e.doc,
        l = document.createDocumentFragment(),
        u = qt( e.display ),
        c = u.left,
        f = Math.max( a.sizerWidth, Wt( e ) - a.sizer.offsetLeft ) - u.right,
        p = t.from(),
        d = t.to();
      if ( p.line == d.line ) i( p.line, p.ch, d.ch );
      else {
        var h = E( s, p.line ),
          v = E( s, d.line ),
          g = le( h ) == le( v ),
          m = i( p.line, p.ch, g ? h.text.length + 1 : null ).end,
          y = i( d.line, g ? 0 : null, d.ch ).start;
        g && ( m.top < y.top - 2 ? ( o( m.right, m.top, null, m.bottom ), o( c, y.top, y.left, y.bottom ) ) : o( m.right, m.top, y.left - m.right, m.bottom ) ), m.bottom < y.top && o( c, m.bottom, null, y.top )
      }
      n.appendChild( l )
    }

    function Mn( e ) {
      if ( e.state.focused ) {
        var t = e.display;
        clearInterval( t.blinker );
        var n = !0;
        t.cursorDiv.style.visibility = "", e.options.cursorBlinkRate > 0 ? t.blinker = setInterval( function () {
          return t.cursorDiv.style.visibility = ( n = !n ) ? "" : "hidden"
        }, e.options.cursorBlinkRate ) : e.options.cursorBlinkRate < 0 && ( t.cursorDiv.style.visibility = "hidden" )
      }
    }

    function On( e ) {
      e.state.focused || ( e.display.input.focus(), Pn( e ) )
    }

    function Nn( e ) {
      e.state.delayingBlurEvent = !0, setTimeout( function () {
        e.state.delayingBlurEvent && ( e.state.delayingBlurEvent = !1, Dn( e ) )
      }, 100 )
    }

    function Pn( e, t ) {
      e.state.delayingBlurEvent && ( e.state.delayingBlurEvent = !1 ), "nocursor" != e.options.readOnly && ( e.state.focused || ( Oe( e, "focus", e, t ), e.state.focused = !0, a( e.display.wrapper, "CodeMirror-focused" ), e.curOp || e.display.selForContextMenu == e.doc.sel || ( e.display.input.reset(), oa && setTimeout( function () {
        return e.display.input.reset( !0 )
      }, 20 ) ), e.display.input.receivedFocus() ), Mn( e ) )
    }

    function Dn( e, t ) {
      e.state.delayingBlurEvent || ( e.state.focused && ( Oe( e, "blur", e, t ), e.state.focused = !1, xa( e.display.wrapper, "CodeMirror-focused" ) ), clearInterval( e.display.blinker ), setTimeout( function () {
        e.state.focused || ( e.display.shift = !1 )
      }, 150 ) )
    }

    function Ln( e ) {
      var t = e.display,
        n = t.view;
      if ( t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter ) {
        for ( var r = xn( t ) - t.scroller.scrollLeft + e.doc.scrollLeft, o = t.gutters.offsetWidth, i = r + "px", a = 0; a < n.length; a++ )
          if ( !n[ a ].hidden ) {
            e.options.fixedGutter && ( n[ a ].gutter && ( n[ a ].gutter.style.left = i ), n[ a ].gutterBackground && ( n[ a ].gutterBackground.style.left = i ) );
            var s = n[ a ].alignable;
            if ( s )
              for ( var l = 0; l < s.length; l++ ) s[ l ].style.left = i
          } e.options.fixedGutter && ( t.gutters.style.left = r + o + "px" )
      }
    }

    function In( e ) {
      if ( !e.options.lineNumbers ) return !1;
      var t = e.doc,
        n = P( e.options, t.first + t.size - 1 ),
        o = e.display;
      if ( n.length != o.lineNumChars ) {
        var i = o.measure.appendChild( r( "div", [ r( "div", n ) ], "CodeMirror-linenumber CodeMirror-gutter-elt" ) ),
          a = i.firstChild.offsetWidth,
          s = i.offsetWidth - a;
        return o.lineGutter.style.width = "", o.lineNumInnerWidth = Math.max( a, o.lineGutter.offsetWidth - s ) + 1, o.lineNumWidth = o.lineNumInnerWidth + s, o.lineNumChars = o.lineNumInnerWidth ? n.length : -1, o.lineGutter.style.width = o.lineNumWidth + "px", Sr( e ), !0
      }
      return !1
    }

    function Rn( e ) {
      for ( var t = e.display, n = t.lineDiv.offsetTop, r = 0; r < t.view.length; r++ ) {
        var o = t.view[ r ],
          i = void 0;
        if ( !o.hidden ) {
          if ( na && ra < 8 ) {
            var a = o.node.offsetTop + o.node.offsetHeight;
            i = a - n, n = a
          } else {
            var s = o.node.getBoundingClientRect();
            i = s.bottom - s.top
          }
          var l = o.line.height - i;
          if ( i < 2 && ( i = mn( t ) ), ( l > .001 || l < -.001 ) && ( A( o.line, i ), jn( o.line ), o.rest ) )
            for ( var u = 0; u < o.rest.length; u++ ) jn( o.rest[ u ] )
        }
      }
    }

    function jn( e ) {
      if ( e.widgets )
        for ( var t = 0; t < e.widgets.length; ++t ) e.widgets[ t ].height = e.widgets[ t ].node.parentNode.offsetHeight
    }

    function Fn( e, t, n ) {
      var r = n && null != n.top ? Math.max( 0, n.top ) : e.scroller.scrollTop;
      r = Math.floor( r - Bt( e ) );
      var o = n && null != n.bottom ? n.bottom : r + e.wrapper.clientHeight,
        i = O( t, r ),
        a = O( t, o );
      if ( n && n.ensure ) {
        var s = n.ensure.from.line,
          l = n.ensure.to.line;
        s < i ? ( i = s, a = O( t, he( E( t, s ) ) + e.wrapper.clientHeight ) ) : Math.min( l, t.lastLine() ) >= a && ( i = O( t, he( E( t, l ) ) - e.wrapper.clientHeight ), a = l )
      }
      return {
        from: i,
        to: Math.max( a, i + 1 )
      }
    }

    function Un( e, t ) {
      Math.abs( e.doc.scrollTop - t ) < 2 || ( e.doc.scrollTop = t, Qi || kr( e, {
        top: t
      } ), e.display.scroller.scrollTop != t && ( e.display.scroller.scrollTop = t ), e.display.scrollbars.setScrollTop( t ), Qi && kr( e ), br( e, 100 ) )
    }

    function Bn( e, t, n ) {
      ( n ? t == e.doc.scrollLeft : Math.abs( e.doc.scrollLeft - t ) < 2 ) || ( t = Math.min( t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth ), e.doc.scrollLeft = t, Ln( e ), e.display.scroller.scrollLeft != t && ( e.display.scroller.scrollLeft = t ), e.display.scrollbars.setScrollLeft( t ) )
    }

    function zn( e ) {
      var t = e.wheelDeltaX,
        n = e.wheelDeltaY;
      return null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && ( t = e.detail ), null == n && e.detail && e.axis == e.VERTICAL_AXIS ? n = e.detail : null == n && ( n = e.wheelDelta ), {
        x: t,
        y: n
      }
    }

    function qn( e ) {
      var t = zn( e );
      return t.x *= es, t.y *= es, t
    }

    function Hn( e, t ) {
      var n = zn( t ),
        r = n.x,
        o = n.y,
        i = e.display,
        a = i.scroller,
        s = a.scrollWidth > a.clientWidth,
        l = a.scrollHeight > a.clientHeight;
      if ( r && s || o && l ) {
        if ( o && da && oa ) e: for ( var u = t.target, c = i.view; u != a; u = u.parentNode )
          for ( var f = 0; f < c.length; f++ )
            if ( c[ f ].node == u ) {
              e.display.currentWheelTarget = u;
              break e
            } if ( r && !Qi && !sa && null != es ) return o && l && Un( e, Math.max( 0, Math.min( a.scrollTop + o * es, a.scrollHeight - a.clientHeight ) ) ), Bn( e, Math.max( 0, Math.min( a.scrollLeft + r * es, a.scrollWidth - a.clientWidth ) ) ), ( !o || o && l ) && Ie( t ), void( i.wheelStartX = null );
        if ( o && null != es ) {
          var p = o * es,
            d = e.doc.scrollTop,
            h = d + i.wrapper.clientHeight;
          p < 0 ? d = Math.max( 0, d + p - 50 ) : h = Math.min( e.doc.height, h + p + 50 ), kr( e, {
            top: d,
            bottom: h
          } )
        }
        Qa < 20 && ( null == i.wheelStartX ? ( i.wheelStartX = a.scrollLeft, i.wheelStartY = a.scrollTop, i.wheelDX = r, i.wheelDY = o, setTimeout( function () {
          if ( null != i.wheelStartX ) {
            var e = a.scrollLeft - i.wheelStartX,
              t = a.scrollTop - i.wheelStartY,
              n = t && i.wheelDY && t / i.wheelDY || e && i.wheelDX && e / i.wheelDX;
            i.wheelStartX = i.wheelStartY = null,
              n && ( es = ( es * Qa + n ) / ( Qa + 1 ), ++Qa )
          }
        }, 200 ) ) : ( i.wheelDX += r, i.wheelDY += o ) )
      }
    }

    function Wn( e ) {
      var t = e.display,
        n = t.gutters.offsetWidth,
        r = Math.round( e.doc.height + zt( e.display ) );
      return {
        clientHeight: t.scroller.clientHeight,
        viewHeight: t.wrapper.clientHeight,
        scrollWidth: t.scroller.scrollWidth,
        clientWidth: t.scroller.clientWidth,
        viewWidth: t.wrapper.clientWidth,
        barLeft: e.options.fixedGutter ? n : 0,
        docHeight: r,
        scrollHeight: r + Ht( e ) + t.barHeight,
        nativeBarWidth: t.nativeBarWidth,
        gutterWidth: n
      }
    }

    function Vn( e, t ) {
      t || ( t = Wn( e ) );
      var n = e.display.barWidth,
        r = e.display.barHeight;
      Gn( e, t );
      for ( var o = 0; o < 4 && n != e.display.barWidth || r != e.display.barHeight; o++ ) n != e.display.barWidth && e.options.lineWrapping && Rn( e ), Gn( e, Wn( e ) ), n = e.display.barWidth, r = e.display.barHeight
    }

    function Gn( e, t ) {
      var n = e.display,
        r = n.scrollbars.update( t );
      n.sizer.style.paddingRight = ( n.barWidth = r.right ) + "px", n.sizer.style.paddingBottom = ( n.barHeight = r.bottom ) + "px", n.heightForcer.style.borderBottom = r.bottom + "px solid transparent", r.right && r.bottom ? ( n.scrollbarFiller.style.display = "block", n.scrollbarFiller.style.height = r.bottom + "px", n.scrollbarFiller.style.width = r.right + "px" ) : n.scrollbarFiller.style.display = "", r.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? ( n.gutterFiller.style.display = "block", n.gutterFiller.style.height = r.bottom + "px", n.gutterFiller.style.width = t.gutterWidth + "px" ) : n.gutterFiller.style.display = ""
    }

    function Yn( e ) {
      e.display.scrollbars && ( e.display.scrollbars.clear(), e.display.scrollbars.addClass && xa( e.display.wrapper, e.display.scrollbars.addClass ) ), e.display.scrollbars = new rs[ e.options.scrollbarStyle ]( function ( t ) {
        e.display.wrapper.insertBefore( t, e.display.scrollbarFiller ), ja( t, "mousedown", function () {
          e.state.focused && setTimeout( function () {
            return e.display.input.focus()
          }, 0 )
        } ), t.setAttribute( "cm-not-content", "true" )
      }, function ( t, n ) {
        "horizontal" == n ? Bn( e, t ) : Un( e, t )
      }, e ), e.display.scrollbars.addClass && a( e.display.wrapper, e.display.scrollbars.addClass )
    }

    function Kn( e, t ) {
      if ( !Ne( e, "scrollCursorIntoView" ) ) {
        var n = e.display,
          o = n.sizer.getBoundingClientRect(),
          i = null;
        if ( t.top + o.top < 0 ? i = !0 : t.bottom + o.top > ( window.innerHeight || document.documentElement.clientHeight ) && ( i = !1 ), null != i && !ca ) {
          var a = r( "div", "​", null, "position: absolute;\n                         top: " + ( t.top - n.viewOffset - Bt( e.display ) ) + "px;\n                         height: " + ( t.bottom - t.top + Ht( e ) + n.barHeight ) + "px;\n                         left: " + t.left + "px; width: 2px;" );
          e.display.lineSpace.appendChild( a ), a.scrollIntoView( i ), e.display.lineSpace.removeChild( a )
        }
      }
    }

    function $n( e, t, n, r ) {
      null == r && ( r = 0 );
      for ( var o, i = 0; i < 5; i++ ) {
        var a = !1;
        o = pn( e, t );
        var s = n && n != t ? pn( e, n ) : o,
          l = Xn( e, Math.min( o.left, s.left ), Math.min( o.top, s.top ) - r, Math.max( o.left, s.left ), Math.max( o.bottom, s.bottom ) + r ),
          u = e.doc.scrollTop,
          c = e.doc.scrollLeft;
        if ( null != l.scrollTop && ( Un( e, l.scrollTop ), Math.abs( e.doc.scrollTop - u ) > 1 && ( a = !0 ) ), null != l.scrollLeft && ( Bn( e, l.scrollLeft ), Math.abs( e.doc.scrollLeft - c ) > 1 && ( a = !0 ) ), !a ) break
      }
      return o
    }

    function Jn( e, t, n, r, o ) {
      var i = Xn( e, t, n, r, o );
      null != i.scrollTop && Un( e, i.scrollTop ), null != i.scrollLeft && Bn( e, i.scrollLeft )
    }

    function Xn( e, t, n, r, o ) {
      var i = e.display,
        a = mn( e.display );
      n < 0 && ( n = 0 );
      var s = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : i.scroller.scrollTop,
        l = Vt( e ),
        u = {};
      o - n > l && ( o = n + l );
      var c = e.doc.height + zt( i ),
        f = n < a,
        p = o > c - a;
      if ( n < s ) u.scrollTop = f ? 0 : n;
      else if ( o > s + l ) {
        var d = Math.min( n, ( p ? c : o ) - l );
        d != s && ( u.scrollTop = d )
      }
      var h = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : i.scroller.scrollLeft,
        v = Wt( e ) - ( e.options.fixedGutter ? i.gutters.offsetWidth : 0 ),
        g = r - t > v;
      return g && ( r = t + v ), t < 10 ? u.scrollLeft = 0 : t < h ? u.scrollLeft = Math.max( 0, t - ( g ? 0 : 10 ) ) : r > v + h - 3 && ( u.scrollLeft = r + ( g ? 0 : 10 ) - v ), u
    }

    function Zn( e, t, n ) {
      null == t && null == n || er( e ), null != t && ( e.curOp.scrollLeft = ( null == e.curOp.scrollLeft ? e.doc.scrollLeft : e.curOp.scrollLeft ) + t ), null != n && ( e.curOp.scrollTop = ( null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop ) + n )
    }

    function Qn( e ) {
      er( e );
      var t = e.getCursor(),
        n = t,
        r = t;
      e.options.lineWrapping || ( n = t.ch ? D( t.line, t.ch - 1 ) : t, r = D( t.line, t.ch + 1 ) ), e.curOp.scrollToPos = {
        from: n,
        to: r,
        margin: e.options.cursorScrollMargin,
        isCursor: !0
      }
    }

    function er( e ) {
      var t = e.curOp.scrollToPos;
      if ( t ) {
        e.curOp.scrollToPos = null;
        var n = dn( e, t.from ),
          r = dn( e, t.to ),
          o = Xn( e, Math.min( n.left, r.left ), Math.min( n.top, r.top ) - t.margin, Math.max( n.right, r.right ), Math.max( n.bottom, r.bottom ) + t.margin );
        e.scrollTo( o.scrollLeft, o.scrollTop )
      }
    }

    function tr( e ) {
      e.curOp = {
        cm: e,
        viewChanged: !1,
        startHeight: e.doc.height,
        forceUpdate: !1,
        updateInput: null,
        typing: !1,
        changeObjs: null,
        cursorActivityHandlers: null,
        cursorActivityCalled: 0,
        selectionChanged: !1,
        updateMaxLine: !1,
        scrollLeft: null,
        scrollTop: null,
        scrollToPos: null,
        focus: !1,
        id: ++os
      }, wt( e.curOp )
    }

    function nr( e ) {
      var t = e.curOp;
      Ct( t, function ( e ) {
        for ( var t = 0; t < e.ops.length; t++ ) e.ops[ t ].cm.curOp = null;
        rr( e )
      } )
    }

    function rr( e ) {
      for ( var t = e.ops, n = 0; n < t.length; n++ ) or( t[ n ] );
      for ( var r = 0; r < t.length; r++ ) ir( t[ r ] );
      for ( var o = 0; o < t.length; o++ ) ar( t[ o ] );
      for ( var i = 0; i < t.length; i++ ) sr( t[ i ] );
      for ( var a = 0; a < t.length; a++ ) lr( t[ a ] )
    }

    function or( e ) {
      var t = e.cm,
        n = t.display;
      wr( t ), e.updateMaxLine && ge( t ), e.mustUpdate = e.viewChanged || e.forceUpdate || null != e.scrollTop || e.scrollToPos && ( e.scrollToPos.from.line < n.viewFrom || e.scrollToPos.to.line >= n.viewTo ) || n.maxLineChanged && t.options.lineWrapping, e.update = e.mustUpdate && new is( t, e.mustUpdate && {
        top: e.scrollTop,
        ensure: e.scrollToPos
      }, e.forceUpdate )
    }

    function ir( e ) {
      e.updatedDisplay = e.mustUpdate && _r( e.cm, e.update )
    }

    function ar( e ) {
      var t = e.cm,
        n = t.display;
      e.updatedDisplay && Rn( t ), e.barMeasure = Wn( t ), n.maxLineChanged && !t.options.lineWrapping && ( e.adjustWidthTo = $t( t, n.maxLine, n.maxLine.text.length ).left + 3, t.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max( n.scroller.clientWidth, n.sizer.offsetLeft + e.adjustWidthTo + Ht( t ) + t.display.barWidth ), e.maxScrollLeft = Math.max( 0, n.sizer.offsetLeft + e.adjustWidthTo - Wt( t ) ) ), ( e.updatedDisplay || e.selectionChanged ) && ( e.preparedSelection = n.input.prepareSelection( e.focus ) )
    }

    function sr( e ) {
      var t = e.cm;
      null != e.adjustWidthTo && ( t.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < t.doc.scrollLeft && Bn( t, Math.min( t.display.scroller.scrollLeft, e.maxScrollLeft ), !0 ), t.display.maxLineChanged = !1 );
      var n = e.focus && e.focus == i() && ( !document.hasFocus || document.hasFocus() );
      e.preparedSelection && t.display.input.showSelection( e.preparedSelection, n ), ( e.updatedDisplay || e.startHeight != t.doc.height ) && Vn( t, e.barMeasure ), e.updatedDisplay && Tr( t, e.barMeasure ), e.selectionChanged && Mn( t ), t.state.focused && e.updateInput && t.display.input.reset( e.typing ), n && On( e.cm )
    }

    function lr( e ) {
      var t = e.cm,
        n = t.display,
        r = t.doc;
      if ( e.updatedDisplay && Cr( t, e.update ), null == n.wheelStartX || null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos || ( n.wheelStartX = n.wheelStartY = null ), null == e.scrollTop || n.scroller.scrollTop == e.scrollTop && !e.forceScroll || ( r.scrollTop = Math.max( 0, Math.min( n.scroller.scrollHeight - n.scroller.clientHeight, e.scrollTop ) ), n.scrollbars.setScrollTop( r.scrollTop ), n.scroller.scrollTop = r.scrollTop ), null == e.scrollLeft || n.scroller.scrollLeft == e.scrollLeft && !e.forceScroll || ( r.scrollLeft = Math.max( 0, Math.min( n.scroller.scrollWidth - n.scroller.clientWidth, e.scrollLeft ) ), n.scrollbars.setScrollLeft( r.scrollLeft ), n.scroller.scrollLeft = r.scrollLeft, Ln( t ) ), e.scrollToPos ) {
        var o = $n( t, U( r, e.scrollToPos.from ), U( r, e.scrollToPos.to ), e.scrollToPos.margin );
        e.scrollToPos.isCursor && t.state.focused && Kn( t, o )
      }
      var i = e.maybeHiddenMarkers,
        a = e.maybeUnhiddenMarkers;
      if ( i )
        for ( var s = 0; s < i.length; ++s ) i[ s ].lines.length || Oe( i[ s ], "hide" );
      if ( a )
        for ( var l = 0; l < a.length; ++l ) a[ l ].lines.length && Oe( a[ l ], "unhide" );
      n.wrapper.offsetHeight && ( r.scrollTop = t.display.scroller.scrollTop ), e.changeObjs && Oe( t, "changes", t, e.changeObjs ), e.update && e.update.finish()
    }

    function ur( e, t ) {
      if ( e.curOp ) return t();
      tr( e );
      try {
        return t()
      } finally {
        nr( e )
      }
    }

    function cr( e, t ) {
      return function () {
        if ( e.curOp ) return t.apply( e, arguments );
        tr( e );
        try {
          return t.apply( e, arguments )
        } finally {
          nr( e )
        }
      }
    }

    function fr( e ) {
      return function () {
        if ( this.curOp ) return e.apply( this, arguments );
        tr( this );
        try {
          return e.apply( this, arguments )
        } finally {
          nr( this )
        }
      }
    }

    function pr( e ) {
      return function () {
        var t = this.cm;
        if ( !t || t.curOp ) return e.apply( this, arguments );
        tr( t );
        try {
          return e.apply( this, arguments )
        } finally {
          nr( t )
        }
      }
    }

    function dr( e, t, n, r ) {
      null == t && ( t = e.doc.first ), null == n && ( n = e.doc.first + e.doc.size ), r || ( r = 0 );
      var o = e.display;
      if ( r && n < o.viewTo && ( null == o.updateLineNumbers || o.updateLineNumbers > t ) && ( o.updateLineNumbers = t ), e.curOp.viewChanged = !0, t >= o.viewTo ) Da && ce( e.doc, t ) < o.viewTo && vr( e );
      else if ( n <= o.viewFrom ) Da && fe( e.doc, n + r ) > o.viewFrom ? vr( e ) : ( o.viewFrom += r, o.viewTo += r );
      else if ( t <= o.viewFrom && n >= o.viewTo ) vr( e );
      else if ( t <= o.viewFrom ) {
        var i = gr( e, n, n + r, 1 );
        i ? ( o.view = o.view.slice( i.index ), o.viewFrom = i.lineN, o.viewTo += r ) : vr( e )
      } else if ( n >= o.viewTo ) {
        var a = gr( e, t, t, -1 );
        a ? ( o.view = o.view.slice( 0, a.index ), o.viewTo = a.lineN ) : vr( e )
      } else {
        var s = gr( e, t, t, -1 ),
          l = gr( e, n, n + r, 1 );
        s && l ? ( o.view = o.view.slice( 0, s.index ).concat( xt( e, s.lineN, l.lineN ) ).concat( o.view.slice( l.index ) ), o.viewTo += r ) : vr( e )
      }
      var u = o.externalMeasured;
      u && ( n < u.lineN ? u.lineN += r : t < u.lineN + u.size && ( o.externalMeasured = null ) )
    }

    function hr( e, t, n ) {
      e.curOp.viewChanged = !0;
      var r = e.display,
        o = e.display.externalMeasured;
      if ( o && t >= o.lineN && t < o.lineN + o.size && ( r.externalMeasured = null ), !( t < r.viewFrom || t >= r.viewTo ) ) {
        var i = r.view[ kn( e, t ) ];
        if ( null != i.node ) {
          var a = i.changes || ( i.changes = [] );
          p( a, n ) == -1 && a.push( n )
        }
      }
    }

    function vr( e ) {
      e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0
    }

    function gr( e, t, n, r ) {
      var o, i = kn( e, t ),
        a = e.display.view;
      if ( !Da || n == e.doc.first + e.doc.size ) return {
        index: i,
        lineN: n
      };
      for ( var s = e.display.viewFrom, l = 0; l < i; l++ ) s += a[ l ].size;
      if ( s != t ) {
        if ( r > 0 ) {
          if ( i == a.length - 1 ) return null;
          o = s + a[ i ].size - t, i++
        } else o = s - t;
        t += o, n += o
      }
      for ( ; ce( e.doc, n ) != n; ) {
        if ( i == ( r < 0 ? 0 : a.length - 1 ) ) return null;
        n += r * a[ i - ( r < 0 ? 1 : 0 ) ].size, i += r
      }
      return {
        index: i,
        lineN: n
      }
    }

    function mr( e, t, n ) {
      var r = e.display,
        o = r.view;
      0 == o.length || t >= r.viewTo || n <= r.viewFrom ? ( r.view = xt( e, t, n ), r.viewFrom = t ) : ( r.viewFrom > t ? r.view = xt( e, t, r.viewFrom ).concat( r.view ) : r.viewFrom < t && ( r.view = r.view.slice( kn( e, t ) ) ), r.viewFrom = t, r.viewTo < n ? r.view = r.view.concat( xt( e, r.viewTo, n ) ) : r.viewTo > n && ( r.view = r.view.slice( 0, kn( e, n ) ) ) ), r.viewTo = n
    }

    function yr( e ) {
      for ( var t = e.display.view, n = 0, r = 0; r < t.length; r++ ) {
        var o = t[ r ];
        o.hidden || o.node && !o.changes || ++n
      }
      return n
    }

    function br( e, t ) {
      e.doc.mode.startState && e.doc.frontier < e.display.viewTo && e.state.highlight.set( t, l( xr, e ) )
    }

    function xr( e ) {
      var t = e.doc;
      if ( t.frontier < t.first && ( t.frontier = t.first ), !( t.frontier >= e.display.viewTo ) ) {
        var n = +new Date + e.options.workTime,
          r = $e( t.mode, et( e, t.frontier ) ),
          o = [];
        t.iter( t.frontier, Math.min( t.first + t.size, e.display.viewTo + 500 ), function ( i ) {
          if ( t.frontier >= e.display.viewFrom ) {
            var a = i.styles,
              s = i.text.length > e.options.maxHighlightLength,
              l = Ze( e, i, s ? $e( t.mode, r ) : r, !0 );
            i.styles = l.styles;
            var u = i.styleClasses,
              c = l.classes;
            c ? i.styleClasses = c : u && ( i.styleClasses = null );
            for ( var f = !a || a.length != i.styles.length || u != c && ( !u || !c || u.bgClass != c.bgClass || u.textClass != c.textClass ), p = 0; !f && p < a.length; ++p ) f = a[ p ] != i.styles[ p ];
            f && o.push( t.frontier ), i.stateAfter = s ? r : $e( t.mode, r )
          } else i.text.length <= e.options.maxHighlightLength && tt( e, i.text, r ), i.stateAfter = t.frontier % 5 == 0 ? $e( t.mode, r ) : null;
          if ( ++t.frontier, +new Date > n ) return br( e, e.options.workDelay ), !0
        } ), o.length && ur( e, function () {
          for ( var t = 0; t < o.length; t++ ) hr( e, o[ t ], "text" )
        } )
      }
    }

    function wr( e ) {
      var t = e.display;
      !t.scrollbarsClipped && t.scroller.offsetWidth && ( t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth, t.heightForcer.style.height = Ht( e ) + "px", t.sizer.style.marginBottom = -t.nativeBarWidth + "px", t.sizer.style.borderRightWidth = Ht( e ) + "px", t.scrollbarsClipped = !0 )
    }

    function _r( e, n ) {
      var r = e.display,
        o = e.doc;
      if ( n.editorIsHidden ) return vr( e ), !1;
      if ( !n.force && n.visible.from >= r.viewFrom && n.visible.to <= r.viewTo && ( null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo ) && r.renderedView == r.view && 0 == yr( e ) ) return !1;
      In( e ) && ( vr( e ), n.dims = bn( e ) );
      var a = o.first + o.size,
        s = Math.max( n.visible.from - e.options.viewportMargin, o.first ),
        l = Math.min( a, n.visible.to + e.options.viewportMargin );
      r.viewFrom < s && s - r.viewFrom < 20 && ( s = Math.max( o.first, r.viewFrom ) ), r.viewTo > l && r.viewTo - l < 20 && ( l = Math.min( a, r.viewTo ) ), Da && ( s = ce( e.doc, s ), l = fe( e.doc, l ) );
      var u = s != r.viewFrom || l != r.viewTo || r.lastWrapHeight != n.wrapperHeight || r.lastWrapWidth != n.wrapperWidth;
      mr( e, s, l ), r.viewOffset = he( E( e.doc, r.viewFrom ) ), e.display.mover.style.top = r.viewOffset + "px";
      var c = yr( e );
      if ( !u && 0 == c && !n.force && r.renderedView == r.view && ( null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo ) ) return !1;
      var f = i();
      return c > 4 && ( r.lineDiv.style.display = "none" ), Er( e, r.updateLineNumbers, n.dims ), c > 4 && ( r.lineDiv.style.display = "" ), r.renderedView = r.view, f && i() != f && f.offsetHeight && f.focus(), t( r.cursorDiv ), t( r.selectionDiv ), r.gutters.style.height = r.sizer.style.minHeight = 0, u && ( r.lastWrapHeight = n.wrapperHeight, r.lastWrapWidth = n.wrapperWidth, br( e, 400 ) ), r.updateLineNumbers = null, !0
    }

    function Cr( e, t ) {
      for ( var n = t.viewport, r = !0;
        ( r && e.options.lineWrapping && t.oldDisplayWidth != Wt( e ) || ( n && null != n.top && ( n = {
          top: Math.min( e.doc.height + zt( e.display ) - Vt( e ), n.top )
        } ), t.visible = Fn( e.display, e.doc, n ), !( t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo ) ) ) && _r( e, t ); r = !1 ) {
        Rn( e );
        var o = Wn( e );
        En( e ), Vn( e, o ), Tr( e, o )
      }
      t.signal( e, "update", e ), e.display.viewFrom == e.display.reportedViewFrom && e.display.viewTo == e.display.reportedViewTo || ( t.signal( e, "viewportChange", e, e.display.viewFrom, e.display.viewTo ), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo )
    }

    function kr( e, t ) {
      var n = new is( e, t );
      if ( _r( e, n ) ) {
        Rn( e ), Cr( e, n );
        var r = Wn( e );
        En( e ), Vn( e, r ), Tr( e, r ), n.finish()
      }
    }

    function Er( e, n, r ) {
      function o( t ) {
        var n = t.nextSibling;
        return oa && da && e.display.currentWheelTarget == t ? t.style.display = "none" : t.parentNode.removeChild( t ), n
      }
      for ( var i = e.display, a = e.options.lineNumbers, s = i.lineDiv, l = s.firstChild, u = i.view, c = i.viewFrom, f = 0; f < u.length; f++ ) {
        var d = u[ f ];
        if ( d.hidden );
        else if ( d.node && d.node.parentNode == s ) {
          for ( ; l != d.node; ) l = o( l );
          var h = a && null != n && n <= c && d.lineNumber;
          d.changes && ( p( d.changes, "gutter" ) > -1 && ( h = !1 ), St( e, d, c, r ) ), h && ( t( d.lineNumber ), d.lineNumber.appendChild( document.createTextNode( P( e.options, c ) ) ) ), l = d.node.nextSibling
        } else {
          var v = Lt( e, d, c, r );
          s.insertBefore( v, l )
        }
        c += d.size
      }
      for ( ; l; ) l = o( l )
    }

    function Sr( e ) {
      var t = e.display.gutters.offsetWidth;
      e.display.sizer.style.marginLeft = t + "px"
    }

    function Tr( e, t ) {
      e.display.sizer.style.minHeight = t.docHeight + "px", e.display.heightForcer.style.top = t.docHeight + "px", e.display.gutters.style.height = t.docHeight + e.display.barHeight + Ht( e ) + "px"
    }

    function Ar( e ) {
      var n = e.display.gutters,
        o = e.options.gutters;
      t( n );
      for ( var i = 0; i < o.length; ++i ) {
        var a = o[ i ],
          s = n.appendChild( r( "div", null, "CodeMirror-gutter " + a ) );
        "CodeMirror-linenumbers" == a && ( e.display.lineGutter = s, s.style.width = ( e.display.lineNumWidth || 1 ) + "px" )
      }
      n.style.display = i ? "" : "none", Sr( e )
    }

    function Mr( e ) {
      var t = p( e.gutters, "CodeMirror-linenumbers" );
      t == -1 && e.lineNumbers ? e.gutters = e.gutters.concat( [ "CodeMirror-linenumbers" ] ) : t > -1 && !e.lineNumbers && ( e.gutters = e.gutters.slice( 0 ), e.gutters.splice( t, 1 ) )
    }

    function Or( e, t ) {
      this.ranges = e, this.primIndex = t
    }

    function Nr( e, t ) {
      this.anchor = e, this.head = t
    }

    function Pr( e, t ) {
      var n = e[ t ];
      e.sort( function ( e, t ) {
        return L( e.from(), t.from() )
      } ), t = p( e, n );
      for ( var r = 1; r < e.length; r++ ) {
        var o = e[ r ],
          i = e[ r - 1 ];
        if ( L( i.to(), o.from() ) >= 0 ) {
          var a = j( i.from(), o.from() ),
            s = R( i.to(), o.to() ),
            l = i.empty() ? o.from() == o.head : i.from() == i.head;
          r <= t && --t, e.splice( --r, 2, new Nr( l ? s : a, l ? a : s ) )
        }
      }
      return new Or( e, t )
    }

    function Dr( e, t ) {
      return new Or( [ new Nr( e, t || e ) ], 0 )
    }

    function Lr( e ) {
      return e.text ? D( e.from.line + e.text.length - 1, v( e.text ).length + ( 1 == e.text.length ? e.from.ch : 0 ) ) : e.to
    }

    function Ir( e, t ) {
      if ( L( e, t.from ) < 0 ) return e;
      if ( L( e, t.to ) <= 0 ) return Lr( t );
      var n = e.line + t.text.length - ( t.to.line - t.from.line ) - 1,
        r = e.ch;
      return e.line == t.to.line && ( r += Lr( t ).ch - t.to.ch ), D( n, r )
    }

    function Rr( e, t ) {
      for ( var n = [], r = 0; r < e.sel.ranges.length; r++ ) {
        var o = e.sel.ranges[ r ];
        n.push( new Nr( Ir( o.anchor, t ), Ir( o.head, t ) ) )
      }
      return Pr( n, e.sel.primIndex )
    }

    function jr( e, t, n ) {
      return e.line == t.line ? D( n.line, e.ch - t.ch + n.ch ) : D( n.line + ( e.line - t.line ), e.ch )
    }

    function Fr( e, t, n ) {
      for ( var r = [], o = D( e.first, 0 ), i = o, a = 0; a < t.length; a++ ) {
        var s = t[ a ],
          l = jr( s.from, o, i ),
          u = jr( Lr( s ), o, i );
        if ( o = s.to, i = u, "around" == n ) {
          var c = e.sel.ranges[ a ],
            f = L( c.head, c.anchor ) < 0;
          r[ a ] = new Nr( f ? u : l, f ? l : u )
        } else r[ a ] = new Nr( l, l )
      }
      return new Or( r, e.sel.primIndex )
    }

    function Ur( e ) {
      e.doc.mode = Ye( e.options, e.doc.modeOption ), Br( e )
    }

    function Br( e ) {
      e.doc.iter( function ( e ) {
        e.stateAfter && ( e.stateAfter = null ), e.styles && ( e.styles = null )
      } ), e.doc.frontier = e.doc.first, br( e, 100 ), e.state.modeGen++, e.curOp && dr( e )
    }

    function zr( e, t ) {
      return 0 == t.from.ch && 0 == t.to.ch && "" == v( t.text ) && ( !e.cm || e.cm.options.wholeLineUpdateBefore )
    }

    function qr( e, t, n, r ) {
      function o( e ) {
        return n ? n[ e ] : null
      }

      function i( e, n, o ) {
        ut( e, n, o, r ), kt( e, "change", e, t )
      }

      function a( e, t ) {
        for ( var n = [], i = e; i < t; ++i ) n.push( new lt( u[ i ], o( i ), r ) );
        return n
      }
      var s = t.from,
        l = t.to,
        u = t.text,
        c = E( e, s.line ),
        f = E( e, l.line ),
        p = v( u ),
        d = o( u.length - 1 ),
        h = l.line - s.line;
      if ( t.full ) e.insert( 0, a( 0, u.length ) ), e.remove( u.length, e.size - u.length );
      else if ( zr( e, t ) ) {
        var g = a( 0, u.length - 1 );
        i( f, f.text, d ), h && e.remove( s.line, h ), g.length && e.insert( s.line, g )
      } else if ( c == f )
        if ( 1 == u.length ) i( c, c.text.slice( 0, s.ch ) + p + c.text.slice( l.ch ), d );
        else {
          var m = a( 1, u.length - 1 );
          m.push( new lt( p + c.text.slice( l.ch ), d, r ) ), i( c, c.text.slice( 0, s.ch ) + u[ 0 ], o( 0 ) ), e.insert( s.line + 1, m )
        }
      else if ( 1 == u.length ) i( c, c.text.slice( 0, s.ch ) + u[ 0 ] + f.text.slice( l.ch ), o( 0 ) ), e.remove( s.line + 1, h );
      else {
        i( c, c.text.slice( 0, s.ch ) + u[ 0 ], o( 0 ) ), i( f, p + f.text.slice( l.ch ), d );
        var y = a( 1, u.length - 1 );
        h > 1 && e.remove( s.line + 1, h - 1 ), e.insert( s.line + 1, y )
      }
      kt( e, "change", e, t )
    }

    function Hr( e, t, n ) {
      function r( e, o, i ) {
        if ( e.linked )
          for ( var a = 0; a < e.linked.length; ++a ) {
            var s = e.linked[ a ];
            if ( s.doc != o ) {
              var l = i && s.sharedHist;
              n && !l || ( t( s.doc, l ), r( s.doc, e, l ) )
            }
          }
      }
      r( e, null, !0 )
    }

    function Wr( e, t ) {
      if ( t.cm ) throw new Error( "This document is already in use." );
      e.doc = t, t.cm = e, _n( e ), Ur( e ), e.options.lineWrapping || ge( e ), e.options.mode = t.modeOption, dr( e )
    }

    function Vr( e ) {
      this.done = [], this.undone = [], this.undoDepth = 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e || 1
    }

    function Gr( e, t ) {
      var n = {
        from: I( t.from ),
        to: Lr( t ),
        text: S( e, t.from, t.to )
      };
      return Qr( e, n, t.from.line, t.to.line + 1 ), Hr( e, function ( e ) {
        return Qr( e, n, t.from.line, t.to.line + 1 )
      }, !0 ), n
    }

    function Yr( e ) {
      for ( ; e.length; ) {
        var t = v( e );
        if ( !t.ranges ) break;
        e.pop()
      }
    }

    function Kr( e, t ) {
      return t ? ( Yr( e.done ), v( e.done ) ) : e.done.length && !v( e.done ).ranges ? v( e.done ) : e.done.length > 1 && !e.done[ e.done.length - 2 ].ranges ? ( e.done.pop(), v( e.done ) ) : void 0
    }

    function $r( e, t, n, r ) {
      var o = e.history;
      o.undone.length = 0;
      var i, a, s = +new Date;
      if ( ( o.lastOp == r || o.lastOrigin == t.origin && t.origin && ( "+" == t.origin.charAt( 0 ) && e.cm && o.lastModTime > s - e.cm.options.historyEventDelay || "*" == t.origin.charAt( 0 ) ) ) && ( i = Kr( o, o.lastOp == r ) ) ) a = v( i.changes ), 0 == L( t.from, t.to ) && 0 == L( t.from, a.to ) ? a.to = Lr( t ) : i.changes.push( Gr( e, t ) );
      else {
        var l = v( o.done );
        for ( l && l.ranges || Zr( e.sel, o.done ), i = {
            changes: [ Gr( e, t ) ],
            generation: o.generation
          }, o.done.push( i ); o.done.length > o.undoDepth; ) o.done.shift(), o.done[ 0 ].ranges || o.done.shift()
      }
      o.done.push( n ), o.generation = ++o.maxGeneration, o.lastModTime = o.lastSelTime = s, o.lastOp = o.lastSelOp = r, o.lastOrigin = o.lastSelOrigin = t.origin, a || Oe( e, "historyAdded" )
    }

    function Jr( e, t, n, r ) {
      var o = t.charAt( 0 );
      return "*" == o || "+" == o && n.ranges.length == r.ranges.length && n.somethingSelected() == r.somethingSelected() && new Date - e.history.lastSelTime <= ( e.cm ? e.cm.options.historyEventDelay : 500 )
    }

    function Xr( e, t, n, r ) {
      var o = e.history,
        i = r && r.origin;
      n == o.lastSelOp || i && o.lastSelOrigin == i && ( o.lastModTime == o.lastSelTime && o.lastOrigin == i || Jr( e, i, v( o.done ), t ) ) ? o.done[ o.done.length - 1 ] = t : Zr( t, o.done ), o.lastSelTime = +new Date, o.lastSelOrigin = i, o.lastSelOp = n, r && r.clearRedo !== !1 && Yr( o.undone )
    }

    function Zr( e, t ) {
      var n = v( t );
      n && n.ranges && n.equals( e ) || t.push( e )
    }

    function Qr( e, t, n, r ) {
      var o = t[ "spans_" + e.id ],
        i = 0;
      e.iter( Math.max( e.first, n ), Math.min( e.first + e.size, r ), function ( n ) {
        n.markedSpans && ( ( o || ( o = t[ "spans_" + e.id ] = {} ) )[ i ] = n.markedSpans ), ++i
      } )
    }

    function eo( e ) {
      if ( !e ) return null;
      for ( var t, n = 0; n < e.length; ++n ) e[ n ].marker.explicitlyCleared ? t || ( t = e.slice( 0, n ) ) : t && t.push( e[ n ] );
      return t ? t.length ? t : null : e
    }

    function to( e, t ) {
      var n = t[ "spans_" + e.id ];
      if ( !n ) return null;
      for ( var r = [], o = 0; o < t.text.length; ++o ) r.push( eo( n[ o ] ) );
      return r
    }

    function no( e, t ) {
      var n = to( e, t ),
        r = J( e, t );
      if ( !n ) return r;
      if ( !r ) return n;
      for ( var o = 0; o < n.length; ++o ) {
        var i = n[ o ],
          a = r[ o ];
        if ( i && a ) e: for ( var s = 0; s < a.length; ++s ) {
          for ( var l = a[ s ], u = 0; u < i.length; ++u )
            if ( i[ u ].marker == l.marker ) continue e;
          i.push( l )
        } else a && ( n[ o ] = a )
      }
      return n
    }

    function ro( e, t, n ) {
      for ( var r = [], o = 0; o < e.length; ++o ) {
        var i = e[ o ];
        if ( i.ranges ) r.push( n ? Or.prototype.deepCopy.call( i ) : i );
        else {
          var a = i.changes,
            s = [];
          r.push( {
            changes: s
          } );
          for ( var l = 0; l < a.length; ++l ) {
            var u = a[ l ],
              c = void 0;
            if ( s.push( {
                from: u.from,
                to: u.to,
                text: u.text
              } ), t )
              for ( var f in u )( c = f.match( /^spans_(\d+)$/ ) ) && p( t, Number( c[ 1 ] ) ) > -1 && ( v( s )[ f ] = u[ f ], delete u[ f ] )
          }
        }
      }
      return r
    }

    function oo( e, t, n, r ) {
      if ( e.cm && e.cm.display.shift || e.extend ) {
        var o = t.anchor;
        if ( r ) {
          var i = L( n, o ) < 0;
          i != L( r, o ) < 0 ? ( o = n, n = r ) : i != L( n, r ) < 0 && ( n = r )
        }
        return new Nr( o, n )
      }
      return new Nr( r || n, n )
    }

    function io( e, t, n, r ) {
      fo( e, new Or( [ oo( e, e.sel.primary(), t, n ) ], 0 ), r )
    }

    function ao( e, t, n ) {
      for ( var r = [], o = 0; o < e.sel.ranges.length; o++ ) r[ o ] = oo( e, e.sel.ranges[ o ], t[ o ], null );
      var i = Pr( r, e.sel.primIndex );
      fo( e, i, n )
    }

    function so( e, t, n, r ) {
      var o = e.sel.ranges.slice( 0 );
      o[ t ] = n, fo( e, Pr( o, e.sel.primIndex ), r )
    }

    function lo( e, t, n, r ) {
      fo( e, Dr( t, n ), r )
    }

    function uo( e, t, n ) {
      var r = {
        ranges: t.ranges,
        update: function ( t ) {
          var n = this;
          this.ranges = [];
          for ( var r = 0; r < t.length; r++ ) n.ranges[ r ] = new Nr( U( e, t[ r ].anchor ), U( e, t[ r ].head ) )
        },
        origin: n && n.origin
      };
      return Oe( e, "beforeSelectionChange", e, r ), e.cm && Oe( e.cm, "beforeSelectionChange", e.cm, r ), r.ranges != t.ranges ? Pr( r.ranges, r.ranges.length - 1 ) : t
    }

    function co( e, t, n ) {
      var r = e.history.done,
        o = v( r );
      o && o.ranges ? ( r[ r.length - 1 ] = t, po( e, t, n ) ) : fo( e, t, n )
    }

    function fo( e, t, n ) {
      po( e, t, n ), Xr( e, e.sel, e.cm ? e.cm.curOp.id : NaN, n )
    }

    function po( e, t, n ) {
      ( De( e, "beforeSelectionChange" ) || e.cm && De( e.cm, "beforeSelectionChange" ) ) && ( t = uo( e, t, n ) );
      var r = n && n.bias || ( L( t.primary().head, e.sel.primary().head ) < 0 ? -1 : 1 );
      ho( e, go( e, t, r, !0 ) ), n && n.scroll === !1 || !e.cm || Qn( e.cm )
    }

    function ho( e, t ) {
      t.equals( e.sel ) || ( e.sel = t, e.cm && ( e.cm.curOp.updateInput = e.cm.curOp.selectionChanged = !0, Pe( e.cm ) ), kt( e, "cursorActivity", e ) )
    }

    function vo( e ) {
      ho( e, go( e, e.sel, null, !1 ), Sa )
    }

    function go( e, t, n, r ) {
      for ( var o, i = 0; i < t.ranges.length; i++ ) {
        var a = t.ranges[ i ],
          s = t.ranges.length == e.sel.ranges.length && e.sel.ranges[ i ],
          l = yo( e, a.anchor, s && s.anchor, n, r ),
          u = yo( e, a.head, s && s.head, n, r );
        ( o || l != a.anchor || u != a.head ) && ( o || ( o = t.ranges.slice( 0, i ) ), o[ i ] = new Nr( l, u ) )
      }
      return o ? Pr( o, t.primIndex ) : t
    }

    function mo( e, t, n, r, o ) {
      var i = E( e, t.line );
      if ( i.markedSpans )
        for ( var a = 0; a < i.markedSpans.length; ++a ) {
          var s = i.markedSpans[ a ],
            l = s.marker;
          if ( ( null == s.from || ( l.inclusiveLeft ? s.from <= t.ch : s.from < t.ch ) ) && ( null == s.to || ( l.inclusiveRight ? s.to >= t.ch : s.to > t.ch ) ) ) {
            if ( o && ( Oe( l, "beforeCursorEnter" ), l.explicitlyCleared ) ) {
              if ( i.markedSpans ) {
                --a;
                continue
              }
              break
            }
            if ( !l.atomic ) continue;
            if ( n ) {
              var u = l.find( r < 0 ? 1 : -1 ),
                c = void 0;
              if ( ( r < 0 ? l.inclusiveRight : l.inclusiveLeft ) && ( u = bo( e, u, -r, u && u.line == t.line ? i : null ) ), u && u.line == t.line && ( c = L( u, n ) ) && ( r < 0 ? c < 0 : c > 0 ) ) return mo( e, u, t, r, o )
            }
            var f = l.find( r < 0 ? -1 : 1 );
            return ( r < 0 ? l.inclusiveLeft : l.inclusiveRight ) && ( f = bo( e, f, r, f.line == t.line ? i : null ) ), f ? mo( e, f, t, r, o ) : null
          }
        }
      return t
    }

    function yo( e, t, n, r, o ) {
      var i = r || 1,
        a = mo( e, t, n, i, o ) || !o && mo( e, t, n, i, !0 ) || mo( e, t, n, -i, o ) || !o && mo( e, t, n, -i, !0 );
      return a ? a : ( e.cantEdit = !0, D( e.first, 0 ) )
    }

    function bo( e, t, n, r ) {
      return n < 0 && 0 == t.ch ? t.line > e.first ? U( e, D( t.line - 1 ) ) : null : n > 0 && t.ch == ( r || E( e, t.line ) ).text.length ? t.line < e.first + e.size - 1 ? D( t.line + 1, 0 ) : null : new D( t.line, t.ch + n )
    }

    function xo( e ) {
      e.setSelection( D( e.firstLine(), 0 ), D( e.lastLine() ), Sa )
    }

    function wo( e, t, n ) {
      var r = {
        canceled: !1,
        from: t.from,
        to: t.to,
        text: t.text,
        origin: t.origin,
        cancel: function () {
          return r.canceled = !0
        }
      };
      return n && ( r.update = function ( t, n, o, i ) {
        t && ( r.from = U( e, t ) ), n && ( r.to = U( e, n ) ), o && ( r.text = o ), void 0 !== i && ( r.origin = i )
      } ), Oe( e, "beforeChange", e, r ), e.cm && Oe( e.cm, "beforeChange", e.cm, r ), r.canceled ? null : {
        from: r.from,
        to: r.to,
        text: r.text,
        origin: r.origin
      }
    }

    function _o( e, t, n ) {
      if ( e.cm ) {
        if ( !e.cm.curOp ) return cr( e.cm, _o )( e, t, n );
        if ( e.cm.state.suppressEdits ) return
      }
      if ( !( De( e, "beforeChange" ) || e.cm && De( e.cm, "beforeChange" ) ) || ( t = wo( e, t, !0 ) ) ) {
        var r = Pa && !n && Z( e, t.from, t.to );
        if ( r )
          for ( var o = r.length - 1; o >= 0; --o ) Co( e, {
            from: r[ o ].from,
            to: r[ o ].to,
            text: o ? [ "" ] : t.text
          } );
        else Co( e, t )
      }
    }

    function Co( e, t ) {
      if ( 1 != t.text.length || "" != t.text[ 0 ] || 0 != L( t.from, t.to ) ) {
        var n = Rr( e, t );
        $r( e, t, n, e.cm ? e.cm.curOp.id : NaN ), So( e, t, n, J( e, t ) );
        var r = [];
        Hr( e, function ( e, n ) {
          n || p( r, e.history ) != -1 || ( No( e.history, t ), r.push( e.history ) ), So( e, t, null, J( e, t ) )
        } )
      }
    }

    function ko( e, t, n ) {
      if ( !e.cm || !e.cm.state.suppressEdits || n ) {
        for ( var r, o = e.history, i = e.sel, a = "undo" == t ? o.done : o.undone, s = "undo" == t ? o.undone : o.done, l = 0; l < a.length && ( r = a[ l ], n ? !r.ranges || r.equals( e.sel ) : r.ranges ); l++ );
        if ( l != a.length ) {
          for ( o.lastOrigin = o.lastSelOrigin = null; r = a.pop(), r.ranges; ) {
            if ( Zr( r, s ), n && !r.equals( e.sel ) ) return void fo( e, r, {
              clearRedo: !1
            } );
            i = r
          }
          var u = [];
          Zr( i, s ), s.push( {
            changes: u,
            generation: o.generation
          } ), o.generation = r.generation || ++o.maxGeneration;
          for ( var c = De( e, "beforeChange" ) || e.cm && De( e.cm, "beforeChange" ), f = function ( n ) {
              var o = r.changes[ n ];
              if ( o.origin = t, c && !wo( e, o, !1 ) ) return a.length = 0, {};
              u.push( Gr( e, o ) );
              var i = n ? Rr( e, o ) : v( a );
              So( e, o, i, no( e, o ) ), !n && e.cm && e.cm.scrollIntoView( {
                from: o.from,
                to: Lr( o )
              } );
              var s = [];
              Hr( e, function ( e, t ) {
                t || p( s, e.history ) != -1 || ( No( e.history, o ), s.push( e.history ) ), So( e, o, null, no( e, o ) )
              } )
            }, d = r.changes.length - 1; d >= 0; --d ) {
            var h = f( d );
            if ( h ) return h.v
          }
        }
      }
    }

    function Eo( e, t ) {
      if ( 0 != t && ( e.first += t, e.sel = new Or( g( e.sel.ranges, function ( e ) {
          return new Nr( D( e.anchor.line + t, e.anchor.ch ), D( e.head.line + t, e.head.ch ) )
        } ), e.sel.primIndex ), e.cm ) ) {
        dr( e.cm, e.first, e.first - t, t );
        for ( var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++ ) hr( e.cm, r, "gutter" )
      }
    }

    function So( e, t, n, r ) {
      if ( e.cm && !e.cm.curOp ) return cr( e.cm, So )( e, t, n, r );
      if ( t.to.line < e.first ) return void Eo( e, t.text.length - 1 - ( t.to.line - t.from.line ) );
      if ( !( t.from.line > e.lastLine() ) ) {
        if ( t.from.line < e.first ) {
          var o = t.text.length - 1 - ( e.first - t.from.line );
          Eo( e, o ), t = {
            from: D( e.first, 0 ),
            to: D( t.to.line + o, t.to.ch ),
            text: [ v( t.text ) ],
            origin: t.origin
          }
        }
        var i = e.lastLine();
        t.to.line > i && ( t = {
          from: t.from,
          to: D( i, E( e, i ).text.length ),
          text: [ t.text[ 0 ] ],
          origin: t.origin
        } ), t.removed = S( e, t.from, t.to ), n || ( n = Rr( e, t ) ), e.cm ? To( e.cm, t, r ) : qr( e, t, r ), po( e, n, Sa )
      }
    }

    function To( e, t, n ) {
      var r = e.doc,
        o = e.display,
        i = t.from,
        a = t.to,
        s = !1,
        l = i.line;
      e.options.lineWrapping || ( l = M( le( E( r, i.line ) ) ), r.iter( l, a.line + 1, function ( e ) {
        if ( e == o.maxLine ) return s = !0, !0
      } ) ), r.sel.contains( t.from, t.to ) > -1 && Pe( e ), qr( r, t, n, wn( e ) ), e.options.lineWrapping || ( r.iter( l, i.line + t.text.length, function ( e ) {
        var t = ve( e );
        t > o.maxLineLength && ( o.maxLine = e, o.maxLineLength = t, o.maxLineChanged = !0, s = !1 )
      } ), s && ( e.curOp.updateMaxLine = !0 ) ), r.frontier = Math.min( r.frontier, i.line ), br( e, 400 );
      var u = t.text.length - ( a.line - i.line ) - 1;
      t.full ? dr( e ) : i.line != a.line || 1 != t.text.length || zr( e.doc, t ) ? dr( e, i.line, a.line + 1, u ) : hr( e, i.line, "text" );
      var c = De( e, "changes" ),
        f = De( e, "change" );
      if ( f || c ) {
        var p = {
          from: i,
          to: a,
          text: t.text,
          removed: t.removed,
          origin: t.origin
        };
        f && kt( e, "change", e, p ), c && ( e.curOp.changeObjs || ( e.curOp.changeObjs = [] ) ).push( p )
      }
      e.display.selForContextMenu = null
    }

    function Ao( e, t, n, r, o ) {
      if ( r || ( r = n ), L( r, n ) < 0 ) {
        var i = r;
        r = n, n = i
      }
      "string" == typeof t && ( t = e.splitLines( t ) ), _o( e, {
        from: n,
        to: r,
        text: t,
        origin: o
      } )
    }

    function Mo( e, t, n, r ) {
      n < e.line ? e.line += r : t < e.line && ( e.line = t, e.ch = 0 )
    }

    function Oo( e, t, n, r ) {
      for ( var o = 0; o < e.length; ++o ) {
        var i = e[ o ],
          a = !0;
        if ( i.ranges ) {
          i.copied || ( i = e[ o ] = i.deepCopy(), i.copied = !0 );
          for ( var s = 0; s < i.ranges.length; s++ ) Mo( i.ranges[ s ].anchor, t, n, r ), Mo( i.ranges[ s ].head, t, n, r )
        } else {
          for ( var l = 0; l < i.changes.length; ++l ) {
            var u = i.changes[ l ];
            if ( n < u.from.line ) u.from = D( u.from.line + r, u.from.ch ), u.to = D( u.to.line + r, u.to.ch );
            else if ( t <= u.to.line ) {
              a = !1;
              break
            }
          }
          a || ( e.splice( 0, o + 1 ), o = 0 )
        }
      }
    }

    function No( e, t ) {
      var n = t.from.line,
        r = t.to.line,
        o = t.text.length - ( r - n ) - 1;
      Oo( e.done, n, r, o ), Oo( e.undone, n, r, o )
    }

    function Po( e, t, n, r ) {
      var o = t,
        i = t;
      return "number" == typeof t ? i = E( e, F( e, t ) ) : o = M( t ), null == o ? null : ( r( i, o ) && e.cm && hr( e.cm, o, n ), i )
    }

    function Do( e ) {
      var t = this;
      this.lines = e, this.parent = null;
      for ( var n = 0, r = 0; r < e.length; ++r ) e[ r ].parent = t, n += e[ r ].height;
      this.height = n
    }

    function Lo( e ) {
      var t = this;
      this.children = e;
      for ( var n = 0, r = 0, o = 0; o < e.length; ++o ) {
        var i = e[ o ];
        n += i.chunkSize(), r += i.height, i.parent = t
      }
      this.size = n, this.height = r, this.parent = null
    }

    function Io( e, t, n ) {
      var r = this;
      if ( n )
        for ( var o in n ) n.hasOwnProperty( o ) && ( r[ o ] = n[ o ] );
      this.doc = e, this.node = t
    }

    function Ro( e, t, n ) {
      he( t ) < ( e.curOp && e.curOp.scrollTop || e.doc.scrollTop ) && Zn( e, null, n )
    }

    function jo( e, t, n, r ) {
      var o = new Io( e, n, r ),
        i = e.cm;
      return i && o.noHScroll && ( i.display.alignWidgets = !0 ), Po( e, t, "widget", function ( t ) {
        var n = t.widgets || ( t.widgets = [] );
        if ( null == o.insertAt ? n.push( o ) : n.splice( Math.min( n.length - 1, Math.max( 0, o.insertAt ) ), 0, o ), o.line = t, i && !pe( e, t ) ) {
          var r = he( t ) < e.scrollTop;
          A( t, t.height + Ft( o ) ), r && Zn( i, null, o.height ), i.curOp.forceUpdate = !0
        }
        return !0
      } ), o
    }

    function Fo( e, t ) {
      this.lines = [], this.type = t, this.doc = e, this.id = ++as
    }

    function Uo( e, t, n, o, i ) {
      if ( o && o.shared ) return zo( e, t, n, o, i );
      if ( e.cm && !e.cm.curOp ) return cr( e.cm, Uo )( e, t, n, o, i );
      var a = new Fo( e, i ),
        s = L( t, n );
      if ( o && u( o, a, !1 ), s > 0 || 0 == s && a.clearWhenEmpty !== !1 ) return a;
      if ( a.replacedWith && ( a.collapsed = !0, a.widgetNode = r( "span", [ a.replacedWith ], "CodeMirror-widget" ), o.handleMouseEvents || a.widgetNode.setAttribute( "cm-ignore-events", "true" ), o.insertLeft && ( a.widgetNode.insertLeft = !0 ) ), a.collapsed ) {
        if ( se( e, t.line, t, n, a ) || t.line != n.line && se( e, n.line, t, n, a ) ) throw new Error( "Inserting collapsed marker partially overlapping an existing one" );
        H()
      }
      a.addToHistory && $r( e, {
        from: t,
        to: n,
        origin: "markText"
      }, e.sel, NaN );
      var l, c = t.line,
        f = e.cm;
      if ( e.iter( c, n.line + 1, function ( e ) {
          f && a.collapsed && !f.options.lineWrapping && le( e ) == f.display.maxLine && ( l = !0 ), a.collapsed && c != t.line && A( e, 0 ), Y( e, new W( a, c == t.line ? t.ch : null, c == n.line ? n.ch : null ) ), ++c
        } ), a.collapsed && e.iter( t.line, n.line + 1, function ( t ) {
          pe( e, t ) && A( t, 0 )
        } ), a.clearOnEnter && ja( a, "beforeCursorEnter", function () {
          return a.clear()
        } ), a.readOnly && ( q(), ( e.history.done.length || e.history.undone.length ) && e.clearHistory() ), a.collapsed && ( a.id = ++as, a.atomic = !0 ), f ) {
        if ( l && ( f.curOp.updateMaxLine = !0 ), a.collapsed ) dr( f, t.line, n.line + 1 );
        else if ( a.className || a.title || a.startStyle || a.endStyle || a.css )
          for ( var p = t.line; p <= n.line; p++ ) hr( f, p, "text" );
        a.atomic && vo( f.doc ), kt( f, "markerAdded", f, a )
      }
      return a
    }

    function Bo( e, t ) {
      var n = this;
      this.markers = e, this.primary = t;
      for ( var r = 0; r < e.length; ++r ) e[ r ].parent = n
    }

    function zo( e, t, n, r, o ) {
      r = u( r ), r.shared = !1;
      var i = [ Uo( e, t, n, r, o ) ],
        a = i[ 0 ],
        s = r.widgetNode;
      return Hr( e, function ( e ) {
        s && ( r.widgetNode = s.cloneNode( !0 ) ), i.push( Uo( e, U( e, t ), U( e, n ), r, o ) );
        for ( var l = 0; l < e.linked.length; ++l )
          if ( e.linked[ l ].isParent ) return;
        a = v( i )
      } ), new Bo( i, a )
    }

    function qo( e ) {
      return e.findMarks( D( e.first, 0 ), e.clipPos( D( e.lastLine() ) ), function ( e ) {
        return e.parent
      } )
    }

    function Ho( e, t ) {
      for ( var n = 0; n < t.length; n++ ) {
        var r = t[ n ],
          o = r.find(),
          i = e.clipPos( o.from ),
          a = e.clipPos( o.to );
        if ( L( i, a ) ) {
          var s = Uo( e, i, a, r.primary, r.primary.type );
          r.markers.push( s ), s.parent = r
        }
      }
    }

    function Wo( e ) {
      for ( var t = function ( t ) {
          var n = e[ t ],
            r = [ n.primary.doc ];
          Hr( n.primary.doc, function ( e ) {
            return r.push( e )
          } );
          for ( var o = 0; o < n.markers.length; o++ ) {
            var i = n.markers[ o ];
            p( r, i.doc ) == -1 && ( i.parent = null, n.markers.splice( o--, 1 ) )
          }
        }, n = 0; n < e.length; n++ ) t( n )
    }

    function Vo( e ) {
      var t = this;
      if ( Ko( t ), !Ne( t, e ) && !Ut( t.display, e ) ) {
        Ie( e ), na && ( us = +new Date );
        var n = Cn( t, e, !0 ),
          r = e.dataTransfer.files;
        if ( n && !t.isReadOnly() )
          if ( r && r.length && window.FileReader && window.File )
            for ( var o = r.length, i = Array( o ), a = 0, s = function ( e, r ) {
                if ( !t.options.allowDropFileTypes || p( t.options.allowDropFileTypes, e.type ) != -1 ) {
                  var s = new FileReader;
                  s.onload = cr( t, function () {
                    var e = s.result;
                    if ( /[\x00-\x08\x0e-\x1f]{2}/.test( e ) && ( e = "" ), i[ r ] = e, ++a == o ) {
                      n = U( t.doc, n );
                      var l = {
                        from: n,
                        to: n,
                        text: t.doc.splitLines( i.join( t.doc.lineSeparator() ) ),
                        origin: "paste"
                      };
                      _o( t.doc, l ), co( t.doc, Dr( n, Lr( l ) ) )
                    }
                  } ), s.readAsText( e )
                }
              }, l = 0; l < o; ++l ) s( r[ l ], l );
          else {
            if ( t.state.draggingText && t.doc.sel.contains( n ) > -1 ) return t.state.draggingText( e ), void setTimeout( function () {
              return t.display.input.focus()
            }, 20 );
            try {
              var u = e.dataTransfer.getData( "Text" );
              if ( u ) {
                var c;
                if ( t.state.draggingText && !t.state.draggingText.copy && ( c = t.listSelections() ), po( t.doc, Dr( n, n ) ), c )
                  for ( var f = 0; f < c.length; ++f ) Ao( t.doc, "", c[ f ].anchor, c[ f ].head, "drag" );
                t.replaceSelection( u, "around", "paste" ), t.display.input.focus()
              }
            } catch ( e ) {}
          }
      }
    }

    function Go( e, t ) {
      if ( na && ( !e.state.draggingText || +new Date - us < 100 ) ) return void Fe( t );
      if ( !Ne( e, t ) && !Ut( e.display, t ) && ( t.dataTransfer.setData( "Text", e.getSelection() ), t.dataTransfer.effectAllowed = "copyMove", t.dataTransfer.setDragImage && !la ) ) {
        var n = r( "img", null, null, "position: fixed; left: 0; top: 0;" );
        n.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", sa && ( n.width = n.height = 1, e.display.wrapper.appendChild( n ), n._top = n.offsetTop ), t.dataTransfer.setDragImage( n, 0, 0 ), sa && n.parentNode.removeChild( n )
      }
    }

    function Yo( e, t ) {
      var o = Cn( e, t );
      if ( o ) {
        var i = document.createDocumentFragment();
        Tn( e, o, i ), e.display.dragCursor || ( e.display.dragCursor = r( "div", null, "CodeMirror-cursors CodeMirror-dragcursors" ), e.display.lineSpace.insertBefore( e.display.dragCursor, e.display.cursorDiv ) ), n( e.display.dragCursor, i )
      }
    }

    function Ko( e ) {
      e.display.dragCursor && ( e.display.lineSpace.removeChild( e.display.dragCursor ), e.display.dragCursor = null )
    }

    function $o( e ) {
      if ( document.body.getElementsByClassName )
        for ( var t = document.body.getElementsByClassName( "CodeMirror" ), n = 0; n < t.length; n++ ) {
          var r = t[ n ].CodeMirror;
          r && e( r )
        }
    }

    function Jo() {
      cs || ( Xo(), cs = !0 )
    }

    function Xo() {
      var e;
      ja( window, "resize", function () {
        null == e && ( e = setTimeout( function () {
          e = null, $o( Zo )
        }, 100 ) )
      } ), ja( window, "blur", function () {
        return $o( Dn )
      } )
    }

    function Zo( e ) {
      var t = e.display;
      t.lastWrapHeight == t.wrapper.clientHeight && t.lastWrapWidth == t.wrapper.clientWidth || ( t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null, t.scrollbarsClipped = !1, e.setSize() )
    }

    function Qo( e ) {
      var t = e.split( /-(?!$)/ );
      e = t[ t.length - 1 ];
      for ( var n, r, o, i, a = 0; a < t.length - 1; a++ ) {
        var s = t[ a ];
        if ( /^(cmd|meta|m)$/i.test( s ) ) i = !0;
        else if ( /^a(lt)?$/i.test( s ) ) n = !0;
        else if ( /^(c|ctrl|control)$/i.test( s ) ) r = !0;
        else {
          if ( !/^s(hift)?$/i.test( s ) ) throw new Error( "Unrecognized modifier name: " + s );
          o = !0
        }
      }
      return n && ( e = "Alt-" + e ), r && ( e = "Ctrl-" + e ), i && ( e = "Cmd-" + e ), o && ( e = "Shift-" + e ), e
    }

    function ei( e ) {
      var t = {};
      for ( var n in e )
        if ( e.hasOwnProperty( n ) ) {
          var r = e[ n ];
          if ( /^(name|fallthrough|(de|at)tach)$/.test( n ) ) continue;
          if ( "..." == r ) {
            delete e[ n ];
            continue
          }
          for ( var o = g( n.split( " " ), Qo ), i = 0; i < o.length; i++ ) {
            var a = void 0,
              s = void 0;
            i == o.length - 1 ? ( s = o.join( " " ), a = r ) : ( s = o.slice( 0, i + 1 ).join( " " ), a = "..." );
            var l = t[ s ];
            if ( l ) {
              if ( l != a ) throw new Error( "Inconsistent bindings for " + s )
            } else t[ s ] = a
          }
          delete e[ n ]
        } for ( var u in t ) e[ u ] = t[ u ];
      return e
    }

    function ti( e, t, n, r ) {
      t = oi( t );
      var o = t.call ? t.call( e, r ) : t[ e ];
      if ( o === !1 ) return "nothing";
      if ( "..." === o ) return "multi";
      if ( null != o && n( o ) ) return "handled";
      if ( t.fallthrough ) {
        if ( "[object Array]" != Object.prototype.toString.call( t.fallthrough ) ) return ti( e, t.fallthrough, n, r );
        for ( var i = 0; i < t.fallthrough.length; i++ ) {
          var a = ti( e, t.fallthrough[ i ], n, r );
          if ( a ) return a
        }
      }
    }

    function ni( e ) {
      var t = "string" == typeof e ? e : fs[ e.keyCode ];
      return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t
    }

    function ri( e, t ) {
      if ( sa && 34 == e.keyCode && e.char ) return !1;
      var n = fs[ e.keyCode ],
        r = n;
      return null != r && !e.altGraphKey && ( e.altKey && "Alt" != n && ( r = "Alt-" + r ), ( ya ? e.metaKey : e.ctrlKey ) && "Ctrl" != n && ( r = "Ctrl-" + r ), ( ya ? e.ctrlKey : e.metaKey ) && "Cmd" != n && ( r = "Cmd-" + r ), !t && e.shiftKey && "Shift" != n && ( r = "Shift-" + r ), r )
    }

    function oi( e ) {
      return "string" == typeof e ? vs[ e ] : e
    }

    function ii( e, t ) {
      for ( var n = e.doc.sel.ranges, r = [], o = 0; o < n.length; o++ ) {
        for ( var i = t( n[ o ] ); r.length && L( i.from, v( r ).to ) <= 0; ) {
          var a = r.pop();
          if ( L( a.from, i.from ) < 0 ) {
            i.from = a.from;
            break
          }
        }
        r.push( i )
      }
      ur( e, function () {
        for ( var t = r.length - 1; t >= 0; t-- ) Ao( e.doc, "", r[ t ].from, r[ t ].to, "+delete" );
        Qn( e )
      } )
    }

    function ai( e, t ) {
      var n = E( e.doc, t ),
        r = le( n );
      r != n && ( t = M( r ) );
      var o = Te( r ),
        i = o ? o[ 0 ].level % 2 ? we( r ) : xe( r ) : 0;
      return D( t, i )
    }

    function si( e, t ) {
      for ( var n, r = E( e.doc, t ); n = ae( r ); ) r = n.find( 1, !0 ).line, t = null;
      var o = Te( r ),
        i = o ? o[ 0 ].level % 2 ? xe( r ) : we( r ) : r.text.length;
      return D( null == t ? M( r ) : t, i )
    }

    function li( e, t ) {
      var n = ai( e, t.line ),
        r = E( e.doc, n.line ),
        o = Te( r );
      if ( !o || 0 == o[ 0 ].level ) {
        var i = Math.max( 0, r.text.search( /\S/ ) ),
          a = t.line == n.line && t.ch <= i && t.ch;
        return D( n.line, a ? 0 : i )
      }
      return n
    }

    function ui( e, t, n ) {
      if ( "string" == typeof t && ( t = ys[ t ], !t ) ) return !1;
      e.display.input.ensurePolled();
      var r = e.display.shift,
        o = !1;
      try {
        e.isReadOnly() && ( e.state.suppressEdits = !0 ), n && ( e.display.shift = !1 ), o = t( e ) != Ea
      } finally {
        e.display.shift = r, e.state.suppressEdits = !1
      }
      return o
    }

    function ci( e, t, n ) {
      for ( var r = 0; r < e.state.keyMaps.length; r++ ) {
        var o = ti( t, e.state.keyMaps[ r ], n, e );
        if ( o ) return o
      }
      return e.options.extraKeys && ti( t, e.options.extraKeys, n, e ) || ti( t, e.options.keyMap, n, e )
    }

    function fi( e, t, n, r ) {
      var o = e.state.keySeq;
      if ( o ) {
        if ( ni( t ) ) return "handled";
        bs.set( 50, function () {
          e.state.keySeq == o && ( e.state.keySeq = null, e.display.input.reset() )
        } ), t = o + " " + t
      }
      var i = ci( e, t, r );
      return "multi" == i && ( e.state.keySeq = t ), "handled" == i && kt( e, "keyHandled", e, t, n ), "handled" != i && "multi" != i || ( Ie( n ), Mn( e ) ), o && !i && /\'$/.test( t ) ? ( Ie( n ), !0 ) : !!i
    }

    function pi( e, t ) {
      var n = ri( t, !0 );
      return !!n && ( t.shiftKey && !e.state.keySeq ? fi( e, "Shift-" + n, t, function ( t ) {
        return ui( e, t, !0 )
      } ) || fi( e, n, t, function ( t ) {
        if ( "string" == typeof t ? /^go[A-Z]/.test( t ) : t.motion ) return ui( e, t )
      } ) : fi( e, n, t, function ( t ) {
        return ui( e, t )
      } ) )
    }

    function di( e, t, n ) {
      return fi( e, "'" + n + "'", t, function ( t ) {
        return ui( e, t, !0 )
      } )
    }

    function hi( e ) {
      var t = this;
      if ( t.curOp.focus = i(), !Ne( t, e ) ) {
        na && ra < 11 && 27 == e.keyCode && ( e.returnValue = !1 );
        var n = e.keyCode;
        t.display.shift = 16 == n || e.shiftKey;
        var r = pi( t, e );
        sa && ( xs = r ? n : null, !r && 88 == n && !za && ( da ? e.metaKey : e.ctrlKey ) && t.replaceSelection( "", null, "cut" ) ), 18 != n || /\bCodeMirror-crosshair\b/.test( t.display.lineDiv.className ) || vi( t )
      }
    }

    function vi( e ) {
      function t( e ) {
        18 != e.keyCode && e.altKey || ( xa( n, "CodeMirror-crosshair" ), Me( document, "keyup", t ), Me( document, "mouseover", t ) )
      }
      var n = e.display.lineDiv;
      a( n, "CodeMirror-crosshair" ), ja( document, "keyup", t ), ja( document, "mouseover", t )
    }

    function gi( e ) {
      16 == e.keyCode && ( this.doc.sel.shift = !1 ), Ne( this, e )
    }

    function mi( e ) {
      var t = this;
      if ( !( Ut( t.display, e ) || Ne( t, e ) || e.ctrlKey && !e.altKey || da && e.metaKey ) ) {
        var n = e.keyCode,
          r = e.charCode;
        if ( sa && n == xs ) return xs = null, void Ie( e );
        if ( !sa || e.which && !( e.which < 10 ) || !pi( t, e ) ) {
          var o = String.fromCharCode( null == r ? n : r );
          "\b" != o && ( di( t, e, o ) || t.display.input.onKeyPress( e ) )
        }
      }
    }

    function yi( e ) {
      var t = this,
        n = t.display;
      if ( !( Ne( t, e ) || n.activeTouch && n.input.supportsTouch() ) ) {
        if ( n.input.ensurePolled(), n.shift = e.shiftKey, Ut( n, e ) ) return void( oa || ( n.scroller.draggable = !1, setTimeout( function () {
          return n.scroller.draggable = !0
        }, 100 ) ) );
        if ( !Ci( t, e ) ) {
          var r = Cn( t, e );
          switch ( window.focus(), Be( e ) ) {
            case 1:
              t.state.selectingText ? t.state.selectingText( e ) : r ? bi( t, e, r ) : Ue( e ) == n.scroller && Ie( e );
              break;
            case 2:
              oa && ( t.state.lastMiddleDown = +new Date ), r && io( t.doc, r ), setTimeout( function () {
                return n.input.focus()
              }, 20 ), Ie( e );
              break;
            case 3:
              ba ? ki( t, e ) : Nn( t )
          }
        }
      }
    }

    function bi( e, t, n ) {
      na ? setTimeout( l( On, e ), 0 ) : e.curOp.focus = i();
      var r, o = +new Date;
      ms && ms.time > o - 400 && 0 == L( ms.pos, n ) ? r = "triple" : gs && gs.time > o - 400 && 0 == L( gs.pos, n ) ? ( r = "double", ms = {
        time: o,
        pos: n
      } ) : ( r = "single", gs = {
        time: o,
        pos: n
      } );
      var a, s = e.doc.sel,
        u = da ? t.metaKey : t.ctrlKey;
      e.options.dragDrop && Fa && !e.isReadOnly() && "single" == r && ( a = s.contains( n ) ) > -1 && ( L( ( a = s.ranges[ a ] ).from(), n ) < 0 || n.xRel > 0 ) && ( L( a.to(), n ) > 0 || n.xRel < 0 ) ? xi( e, t, n, u ) : wi( e, t, n, r, u )
    }

    function xi( e, t, n, r ) {
      var o = e.display,
        i = +new Date,
        a = cr( e, function ( s ) {
          oa && ( o.scroller.draggable = !1 ), e.state.draggingText = !1, Me( document, "mouseup", a ), Me( o.scroller, "drop", a ), Math.abs( t.clientX - s.clientX ) + Math.abs( t.clientY - s.clientY ) < 10 && ( Ie( s ), !r && +new Date - 200 < i && io( e.doc, n ), oa || na && 9 == ra ? setTimeout( function () {
            document.body.focus(), o.input.focus()
          }, 20 ) : o.input.focus() )
        } );
      oa && ( o.scroller.draggable = !0 ), e.state.draggingText = a, a.copy = da ? t.altKey : t.ctrlKey, o.scroller.dragDrop && o.scroller.dragDrop(), ja( document, "mouseup", a ), ja( o.scroller, "drop", a )
    }

    function wi( e, t, n, r, o ) {
      function a( t ) {
        if ( 0 != L( b, t ) )
          if ( b = t, "rect" == r ) {
            for ( var o = [], i = e.options.tabSize, a = c( E( f, n.line ).text, n.ch, i ), s = c( E( f, t.line ).text, t.ch, i ), l = Math.min( a, s ), u = Math.max( a, s ), g = Math.min( n.line, t.line ), m = Math.min( e.lastLine(), Math.max( n.line, t.line ) ); g <= m; g++ ) {
              var y = E( f, g ).text,
                x = d( y, l, i );
              l == u ? o.push( new Nr( D( g, x ), D( g, x ) ) ) : y.length > x && o.push( new Nr( D( g, x ), D( g, d( y, u, i ) ) ) )
            }
            o.length || o.push( new Nr( n, n ) ), fo( f, Pr( v.ranges.slice( 0, h ).concat( o ), h ), {
              origin: "*mouse",
              scroll: !1
            } ), e.scrollIntoView( t )
          } else {
            var w = p,
              _ = w.anchor,
              C = t;
            if ( "single" != r ) {
              var k;
              k = "double" == r ? e.findWordAt( t ) : new Nr( D( t.line, 0 ), U( f, D( t.line + 1, 0 ) ) ), L( k.anchor, _ ) > 0 ? ( C = k.head, _ = j( w.from(), k.anchor ) ) : ( C = k.anchor, _ = R( w.to(), k.head ) )
            }
            var S = v.ranges.slice( 0 );
            S[ h ] = new Nr( U( f, _ ), C ), fo( f, Pr( S, h ), Ta )
          }
      }

      function s( t ) {
        var n = ++w,
          o = Cn( e, t, !0, "rect" == r );
        if ( o )
          if ( 0 != L( o, b ) ) {
            e.curOp.focus = i(), a( o );
            var l = Fn( u, f );
            ( o.line >= l.to || o.line < l.from ) && setTimeout( cr( e, function () {
              w == n && s( t )
            } ), 150 )
          } else {
            var c = t.clientY < x.top ? -20 : t.clientY > x.bottom ? 20 : 0;
            c && setTimeout( cr( e, function () {
              w == n && ( u.scroller.scrollTop += c, s( t ) )
            } ), 50 )
          }
      }

      function l( t ) {
        e.state.selectingText = !1, w = 1 / 0, Ie( t ), u.input.focus(), Me( document, "mousemove", _ ), Me( document, "mouseup", C ), f.history.lastSelOrigin = null
      }
      var u = e.display,
        f = e.doc;
      Ie( t );
      var p, h, v = f.sel,
        g = v.ranges;
      if ( o && !t.shiftKey ? ( h = f.sel.contains( n ), p = h > -1 ? g[ h ] : new Nr( n, n ) ) : ( p = f.sel.primary(), h = f.sel.primIndex ), ha ? t.shiftKey && t.metaKey : t.altKey ) r = "rect", o || ( p = new Nr( n, n ) ), n = Cn( e, t, !0, !0 ), h = -1;
      else if ( "double" == r ) {
        var m = e.findWordAt( n );
        p = e.display.shift || f.extend ? oo( f, p, m.anchor, m.head ) : m
      } else if ( "triple" == r ) {
        var y = new Nr( D( n.line, 0 ), U( f, D( n.line + 1, 0 ) ) );
        p = e.display.shift || f.extend ? oo( f, p, y.anchor, y.head ) : y
      } else p = oo( f, p, n );
      o ? h == -1 ? ( h = g.length, fo( f, Pr( g.concat( [ p ] ), h ), {
        scroll: !1,
        origin: "*mouse"
      } ) ) : g.length > 1 && g[ h ].empty() && "single" == r && !t.shiftKey ? ( fo( f, Pr( g.slice( 0, h ).concat( g.slice( h + 1 ) ), 0 ), {
        scroll: !1,
        origin: "*mouse"
      } ), v = f.sel ) : so( f, h, p, Ta ) : ( h = 0, fo( f, new Or( [ p ], 0 ), Ta ), v = f.sel );
      var b = n,
        x = u.wrapper.getBoundingClientRect(),
        w = 0,
        _ = cr( e, function ( e ) {
          Be( e ) ? s( e ) : l( e )
        } ),
        C = cr( e, l );
      e.state.selectingText = C, ja( document, "mousemove", _ ), ja( document, "mouseup", C )
    }

    function _i( e, t, n, r ) {
      var o, i;
      try {
        o = t.clientX, i = t.clientY
      } catch ( e ) {
        return !1
      }
      if ( o >= Math.floor( e.display.gutters.getBoundingClientRect().right ) ) return !1;
      r && Ie( t );
      var a = e.display,
        s = a.lineDiv.getBoundingClientRect();
      if ( i > s.bottom || !De( e, n ) ) return je( t );
      i -= s.top - a.viewOffset;
      for ( var l = 0; l < e.options.gutters.length; ++l ) {
        var u = a.gutters.childNodes[ l ];
        if ( u && u.getBoundingClientRect().right >= o ) {
          var c = O( e.doc, i ),
            f = e.options.gutters[ l ];
          return Oe( e, n, e, c, f, t ), je( t )
        }
      }
    }

    function Ci( e, t ) {
      return _i( e, t, "gutterClick", !0 )
    }

    function ki( e, t ) {
      Ut( e.display, t ) || Ei( e, t ) || Ne( e, t, "contextmenu" ) || e.display.input.onContextMenu( t )
    }

    function Ei( e, t ) {
      return !!De( e, "gutterContextMenu" ) && _i( e, t, "gutterContextMenu", !1 )
    }

    function Si( e ) {
      e.display.wrapper.className = e.display.wrapper.className.replace( /\s*cm-s-\S+/g, "" ) + e.options.theme.replace( /(^|\s)\s*/g, " cm-s-" ), an( e )
    }

    function Ti( e ) {
      function t( t, r, o, i ) {
        e.defaults[ t ] = r, o && ( n[ t ] = i ? function ( e, t, n ) {
          n != ws && o( e, t, n )
        } : o )
      }
      var n = e.optionHandlers;
      e.defineOption = t, e.Init = ws, t( "value", "", function ( e, t ) {
        return e.setValue( t )
      }, !0 ), t( "mode", null, function ( e, t ) {
        e.doc.modeOption = t, Ur( e )
      }, !0 ), t( "indentUnit", 2, Ur, !0 ), t( "indentWithTabs", !1 ), t( "smartIndent", !0 ), t( "tabSize", 4, function ( e ) {
        Br( e ), an( e ), dr( e )
      }, !0 ), t( "lineSeparator", null, function ( e, t ) {
        if ( e.doc.lineSep = t, t ) {
          var n = [],
            r = e.doc.first;
          e.doc.iter( function ( e ) {
            for ( var o = 0;; ) {
              var i = e.text.indexOf( t, o );
              if ( i == -1 ) break;
              o = i + t.length, n.push( D( r, i ) )
            }
            r++
          } );
          for ( var o = n.length - 1; o >= 0; o-- ) Ao( e.doc, t, n[ o ], D( n[ o ].line, n[ o ].ch + t.length ) )
        }
      } ), t( "specialChars", /[\u0000-\u001f\u007f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g, function ( e, t, n ) {
        e.state.specialChars = new RegExp( t.source + ( t.test( "\t" ) ? "" : "|\t" ), "g" ), n != ws && e.refresh()
      } ), t( "specialCharPlaceholder", dt, function ( e ) {
        return e.refresh()
      }, !0 ), t( "electricChars", !0 ), t( "inputStyle", pa ? "contenteditable" : "textarea", function () {
        throw new Error( "inputStyle can not (yet) be changed in a running editor" )
      }, !0 ), t( "spellcheck", !1, function ( e, t ) {
        return e.getInputField().spellcheck = t
      }, !0 ), t( "rtlMoveVisually", !va ), t( "wholeLineUpdateBefore", !0 ), t( "theme", "default", function ( e ) {
        Si( e ), Ai( e )
      }, !0 ), t( "keyMap", "default", function ( e, t, n ) {
        var r = oi( t ),
          o = n != ws && oi( n );
        o && o.detach && o.detach( e, r ), r.attach && r.attach( e, o || null )
      } ), t( "extraKeys", null ), t( "lineWrapping", !1, Oi, !0 ), t( "gutters", [], function ( e ) {
        Mr( e.options ), Ai( e )
      }, !0 ), t( "fixedGutter", !0, function ( e, t ) {
        e.display.gutters.style.left = t ? xn( e.display ) + "px" : "0", e.refresh()
      }, !0 ), t( "coverGutterNextToScrollbar", !1, function ( e ) {
        return Vn( e )
      }, !0 ), t( "scrollbarStyle", "native", function ( e ) {
        Yn( e ), Vn( e ), e.display.scrollbars.setScrollTop( e.doc.scrollTop ), e.display.scrollbars.setScrollLeft( e.doc.scrollLeft )
      }, !0 ), t( "lineNumbers", !1, function ( e ) {
        Mr( e.options ), Ai( e )
      }, !0 ), t( "firstLineNumber", 1, Ai, !0 ), t( "lineNumberFormatter", function ( e ) {
        return e
      }, Ai, !0 ), t( "showCursorWhenSelecting", !1, En, !0 ), t( "resetSelectionOnContextMenu", !0 ), t( "lineWiseCopyCut", !0 ), t( "readOnly", !1, function ( e, t ) {
        "nocursor" == t ? ( Dn( e ), e.display.input.blur(), e.display.disabled = !0 ) : e.display.disabled = !1, e.display.input.readOnlyChanged( t )
      } ), t( "disableInput", !1, function ( e, t ) {
        t || e.display.input.reset()
      }, !0 ), t( "dragDrop", !0, Mi ), t( "allowDropFileTypes", null ), t( "cursorBlinkRate", 530 ), t( "cursorScrollMargin", 0 ), t( "cursorHeight", 1, En, !0 ), t( "singleCursorHeightPerLine", !0, En, !0 ), t( "workTime", 100 ), t( "workDelay", 100 ), t( "flattenSpans", !0, Br, !0 ), t( "addModeClass", !1, Br, !0 ), t( "pollInterval", 100 ), t( "undoDepth", 200, function ( e, t ) {
        return e.doc.history.undoDepth = t
      } ), t( "historyEventDelay", 1250 ), t( "viewportMargin", 10, function ( e ) {
        return e.refresh()
      }, !0 ), t( "maxHighlightLength", 1e4, Br, !0 ), t( "moveInputWithCursor", !0, function ( e, t ) {
        t || e.display.input.resetPosition()
      } ), t( "tabindex", null, function ( e, t ) {
        return e.display.input.getField().tabIndex = t || ""
      } ), t( "autofocus", null )
    }

    function Ai( e ) {
      Ar( e ), dr( e ), Ln( e )
    }

    function Mi( e, t, n ) {
      var r = n && n != ws;
      if ( !t != !r ) {
        var o = e.display.dragFunctions,
          i = t ? ja : Me;
        i( e.display.scroller, "dragstart", o.start ), i( e.display.scroller, "dragenter", o.enter ), i( e.display.scroller, "dragover", o.over ), i( e.display.scroller, "dragleave", o.leave ), i( e.display.scroller, "drop", o.drop )
      }
    }

    function Oi( e ) {
      e.options.lineWrapping ? ( a( e.display.wrapper, "CodeMirror-wrap" ), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null ) : ( xa( e.display.wrapper, "CodeMirror-wrap" ), ge( e ) ), _n( e ), dr( e ), an( e ), setTimeout( function () {
        return Vn( e )
      }, 100 )
    }

    function Ni( e, t ) {
      var n = this;
      if ( !( this instanceof Ni ) ) return new Ni( e, t );
      this.options = t = t ? u( t ) : {}, u( _s, t, !1 ), Mr( t );
      var r = t.value;
      "string" == typeof r && ( r = new ls( r, t.mode, null, t.lineSeparator ) ), this.doc = r;
      var o = new Ni.inputStyles[ t.inputStyle ]( this ),
        i = this.display = new k( e, r, o );
      i.wrapper.CodeMirror = this, Ar( this ), Si( this ), t.lineWrapping && ( this.display.wrapper.className += " CodeMirror-wrap" ), Yn( this ), this.state = {
        keyMaps: [],
        overlays: [],
        modeGen: 0,
        overwrite: !1,
        delayingBlurEvent: !1,
        focused: !1,
        suppressEdits: !1,
        pasteIncoming: !1,
        cutIncoming: !1,
        selectingText: !1,
        draggingText: !1,
        highlight: new f,
        keySeq: null,
        specialChars: null
      }, t.autofocus && !pa && i.input.focus(), na && ra < 11 && setTimeout( function () {
        return n.display.input.reset( !0 )
      }, 20 ), Pi( this ), Jo(), tr( this ), this.curOp.forceUpdate = !0, Wr( this, r ), t.autofocus && !pa || this.hasFocus() ? setTimeout( l( Pn, this ), 20 ) : Dn( this );
      for ( var a in Cs ) Cs.hasOwnProperty( a ) && Cs[ a ]( n, t[ a ], ws );
      In( this ), t.finishInit && t.finishInit( this );
      for ( var s = 0; s < ks.length; ++s ) ks[ s ]( n );
      nr( this ), oa && t.lineWrapping && "optimizelegibility" == getComputedStyle( i.lineDiv ).textRendering && ( i.lineDiv.style.textRendering = "auto" )
    }

    function Pi( e ) {
      function t() {
        o.activeTouch && ( i = setTimeout( function () {
          return o.activeTouch = null
        }, 1e3 ), a = o.activeTouch, a.end = +new Date )
      }

      function n( e ) {
        if ( 1 != e.touches.length ) return !1;
        var t = e.touches[ 0 ];
        return t.radiusX <= 1 && t.radiusY <= 1
      }

      function r( e, t ) {
        if ( null == t.left ) return !0;
        var n = t.left - e.left,
          r = t.top - e.top;
        return n * n + r * r > 400
      }
      var o = e.display;
      ja( o.scroller, "mousedown", cr( e, yi ) ), na && ra < 11 ? ja( o.scroller, "dblclick", cr( e, function ( t ) {
        if ( !Ne( e, t ) ) {
          var n = Cn( e, t );
          if ( n && !Ci( e, t ) && !Ut( e.display, t ) ) {
            Ie( t );
            var r = e.findWordAt( n );
            io( e.doc, r.anchor, r.head )
          }
        }
      } ) ) : ja( o.scroller, "dblclick", function ( t ) {
        return Ne( e, t ) || Ie( t )
      } ), ba || ja( o.scroller, "contextmenu", function ( t ) {
        return ki( e, t )
      } );
      var i, a = {
        end: 0
      };
      ja( o.scroller, "touchstart", function ( t ) {
        if ( !Ne( e, t ) && !n( t ) ) {
          o.input.ensurePolled(), clearTimeout( i );
          var r = +new Date;
          o.activeTouch = {
            start: r,
            moved: !1,
            prev: r - a.end <= 300 ? a : null
          }, 1 == t.touches.length && ( o.activeTouch.left = t.touches[ 0 ].pageX, o.activeTouch.top = t.touches[ 0 ].pageY )
        }
      } ), ja( o.scroller, "touchmove", function () {
        o.activeTouch && ( o.activeTouch.moved = !0 )
      } ), ja( o.scroller, "touchend", function ( n ) {
        var i = o.activeTouch;
        if ( i && !Ut( o, n ) && null != i.left && !i.moved && new Date - i.start < 300 ) {
          var a, s = e.coordsChar( o.activeTouch, "page" );
          a = !i.prev || r( i, i.prev ) ? new Nr( s, s ) : !i.prev.prev || r( i, i.prev.prev ) ? e.findWordAt( s ) : new Nr( D( s.line, 0 ), U( e.doc, D( s.line + 1, 0 ) ) ), e.setSelection( a.anchor, a.head ), e.focus(), Ie( n )
        }
        t()
      } ), ja( o.scroller, "touchcancel", t ), ja( o.scroller, "scroll", function () {
        o.scroller.clientHeight && ( Un( e, o.scroller.scrollTop ), Bn( e, o.scroller.scrollLeft, !0 ), Oe( e, "scroll", e ) )
      } ), ja( o.scroller, "mousewheel", function ( t ) {
        return Hn( e, t )
      } ), ja( o.scroller, "DOMMouseScroll", function ( t ) {
        return Hn( e, t )
      } ), ja( o.wrapper, "scroll", function () {
        return o.wrapper.scrollTop = o.wrapper.scrollLeft = 0
      } ), o.dragFunctions = {
        enter: function ( t ) {
          Ne( e, t ) || Fe( t )
        },
        over: function ( t ) {
          Ne( e, t ) || ( Yo( e, t ), Fe( t ) )
        },
        start: function ( t ) {
          return Go( e, t )
        },
        drop: cr( e, Vo ),
        leave: function ( t ) {
          Ne( e, t ) || Ko( e )
        }
      };
      var s = o.input.getField();
      ja( s, "keyup", function ( t ) {
        return gi.call( e, t )
      } ), ja( s, "keydown", cr( e, hi ) ), ja( s, "keypress", cr( e, mi ) ), ja( s, "focus", function ( t ) {
        return Pn( e, t )
      } ), ja( s, "blur", function ( t ) {
        return Dn( e, t )
      } )
    }

    function Di( e, t, n, r ) {
      var o, i = e.doc;
      null == n && ( n = "add" ), "smart" == n && ( i.mode.indent ? o = et( e, t ) : n = "prev" );
      var a = e.options.tabSize,
        s = E( i, t ),
        l = c( s.text, null, a );
      s.stateAfter && ( s.stateAfter = null );
      var u, f = s.text.match( /^\s*/ )[ 0 ];
      if ( r || /\S/.test( s.text ) ) {
        if ( "smart" == n && ( u = i.mode.indent( o, s.text.slice( f.length ), s.text ), u == Ea || u > 150 ) ) {
          if ( !r ) return;
          n = "prev"
        }
      } else u = 0, n = "not";
      "prev" == n ? u = t > i.first ? c( E( i, t - 1 ).text, null, a ) : 0 : "add" == n ? u = l + e.options.indentUnit : "subtract" == n ? u = l - e.options.indentUnit : "number" == typeof n && ( u = l + n ), u = Math.max( 0, u );
      var p = "",
        d = 0;
      if ( e.options.indentWithTabs )
        for ( var v = Math.floor( u / a ); v; --v ) d += a, p += "\t";
      if ( d < u && ( p += h( u - d ) ), p != f ) return Ao( i, p, D( t, 0 ), D( t, f.length ), "+input" ), s.stateAfter = null, !0;
      for ( var g = 0; g < i.sel.ranges.length; g++ ) {
        var m = i.sel.ranges[ g ];
        if ( m.head.line == t && m.head.ch < f.length ) {
          var y = D( t, f.length );
          so( i, g, new Nr( y, y ) );
          break
        }
      }
    }

    function Li( e ) {
      Es = e
    }

    function Ii( e, t, n, r, o ) {
      var i = e.doc;
      e.display.shift = !1, r || ( r = i.sel );
      var a = e.state.pasteIncoming || "paste" == o,
        s = Ua( t ),
        l = null;
      if ( a && r.ranges.length > 1 )
        if ( Es && Es.text.join( "\n" ) == t ) {
          if ( r.ranges.length % Es.text.length == 0 ) {
            l = [];
            for ( var u = 0; u < Es.text.length; u++ ) l.push( i.splitLines( Es.text[ u ] ) )
          }
        } else s.length == r.ranges.length && ( l = g( s, function ( e ) {
          return [ e ]
        } ) );
      for ( var c, f = r.ranges.length - 1; f >= 0; f-- ) {
        var p = r.ranges[ f ],
          d = p.from(),
          h = p.to();
        p.empty() && ( n && n > 0 ? d = D( d.line, d.ch - n ) : e.state.overwrite && !a ? h = D( h.line, Math.min( E( i, h.line ).text.length, h.ch + v( s ).length ) ) : Es && Es.lineWise && Es.text.join( "\n" ) == t && ( d = h = D( d.line, 0 ) ) ), c = e.curOp.updateInput;
        var m = {
          from: d,
          to: h,
          text: l ? l[ f % l.length ] : s,
          origin: o || ( a ? "paste" : e.state.cutIncoming ? "cut" : "+input" )
        };
        _o( e.doc, m ), kt( e, "inputRead", e, m )
      }
      t && !a && ji( e, t ), Qn( e ), e.curOp.updateInput = c, e.curOp.typing = !0, e.state.pasteIncoming = e.state.cutIncoming = !1
    }

    function Ri( e, t ) {
      var n = e.clipboardData && e.clipboardData.getData( "Text" );
      if ( n ) return e.preventDefault(), t.isReadOnly() || t.options.disableInput || ur( t, function () {
        return Ii( t, n, 0, null, "paste" )
      } ), !0
    }

    function ji( e, t ) {
      if ( e.options.electricChars && e.options.smartIndent )
        for ( var n = e.doc.sel, r = n.ranges.length - 1; r >= 0; r-- ) {
          var o = n.ranges[ r ];
          if ( !( o.head.ch > 100 || r && n.ranges[ r - 1 ].head.line == o.head.line ) ) {
            var i = e.getModeAt( o.head ),
              a = !1;
            if ( i.electricChars ) {
              for ( var s = 0; s < i.electricChars.length; s++ )
                if ( t.indexOf( i.electricChars.charAt( s ) ) > -1 ) {
                  a = Di( e, o.head.line, "smart" );
                  break
                }
            } else i.electricInput && i.electricInput.test( E( e.doc, o.head.line ).text.slice( 0, o.head.ch ) ) && ( a = Di( e, o.head.line, "smart" ) );
            a && kt( e, "electricInput", e, o.head.line )
          }
        }
    }

    function Fi( e ) {
      for ( var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++ ) {
        var o = e.doc.sel.ranges[ r ].head.line,
          i = {
            anchor: D( o, 0 ),
            head: D( o + 1, 0 )
          };
        n.push( i ), t.push( e.getRange( i.anchor, i.head ) )
      }
      return {
        text: t,
        ranges: n
      }
    }

    function Ui( e, t ) {
      e.setAttribute( "autocorrect", "off" ), e.setAttribute( "autocapitalize", "off" ), e.setAttribute( "spellcheck", !!t )
    }

    function Bi() {
      var e = r( "textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none" ),
        t = r( "div", [ e ], null, "overflow: hidden; position: relative; width: 3px; height: 0px;" );
      return oa ? e.style.width = "1000px" : e.setAttribute( "wrap", "off" ), fa && ( e.style.border = "1px solid black" ), Ui( e ), t
    }

    function zi( e ) {
      var t = e.optionHandlers,
        n = e.helpers = {};
      e.prototype = {
        constructor: e,
        focus: function () {
          window.focus(), this.display.input.focus()
        },
        setOption: function ( e, n ) {
          var r = this.options,
            o = r[ e ];
          r[ e ] == n && "mode" != e || ( r[ e ] = n, t.hasOwnProperty( e ) && cr( this, t[ e ] )( this, n, o ), Oe( this, "optionChange", this, e ) )
        },
        getOption: function ( e ) {
          return this.options[ e ]
        },
        getDoc: function () {
          return this.doc
        },
        addKeyMap: function ( e, t ) {
          this.state.keyMaps[ t ? "push" : "unshift" ]( oi( e ) )
        },
        removeKeyMap: function ( e ) {
          for ( var t = this.state.keyMaps, n = 0; n < t.length; ++n )
            if ( t[ n ] == e || t[ n ].name == e ) return t.splice( n, 1 ), !0
        },
        addOverlay: fr( function ( t, n ) {
          var r = t.token ? t : e.getMode( this.options, t );
          if ( r.startState ) throw new Error( "Overlays may not be stateful." );
          m( this.state.overlays, {
            mode: r,
            modeSpec: t,
            opaque: n && n.opaque,
            priority: n && n.priority || 0
          }, function ( e ) {
            return e.priority
          } ), this.state.modeGen++, dr( this )
        } ),
        removeOverlay: fr( function ( e ) {
          for ( var t = this, n = this.state.overlays, r = 0; r < n.length; ++r ) {
            var o = n[ r ].modeSpec;
            if ( o == e || "string" == typeof e && o.name == e ) return n.splice( r, 1 ), t.state.modeGen++, void dr( t )
          }
        } ),
        indentLine: fr( function ( e, t, n ) {
          "string" != typeof t && "number" != typeof t && ( t = null == t ? this.options.smartIndent ? "smart" : "prev" : t ? "add" : "subtract" ), N( this.doc, e ) && Di( this, e, t, n )
        } ),
        indentSelection: fr( function ( e ) {
          for ( var t = this, n = this.doc.sel.ranges, r = -1, o = 0; o < n.length; o++ ) {
            var i = n[ o ];
            if ( i.empty() ) i.head.line > r && ( Di( t, i.head.line, e, !0 ), r = i.head.line, o == t.doc.sel.primIndex && Qn( t ) );
            else {
              var a = i.from(),
                s = i.to(),
                l = Math.max( r, a.line );
              r = Math.min( t.lastLine(), s.line - ( s.ch ? 0 : 1 ) ) + 1;
              for ( var u = l; u < r; ++u ) Di( t, u, e );
              var c = t.doc.sel.ranges;
              0 == a.ch && n.length == c.length && c[ o ].from().ch > 0 && so( t.doc, o, new Nr( a, c[ o ].to() ), Sa )
            }
          }
        } ),
        getTokenAt: function ( e, t ) {
          return ot( this, e, t )
        },
        getLineTokens: function ( e, t ) {
          return ot( this, D( e ), t, !0 )
        },
        getTokenTypeAt: function ( e ) {
          e = U( this.doc, e );
          var t, n = Qe( this, E( this.doc, e.line ) ),
            r = 0,
            o = ( n.length - 1 ) / 2,
            i = e.ch;
          if ( 0 == i ) t = n[ 2 ];
          else
            for ( ;; ) {
              var a = r + o >> 1;
              if ( ( a ? n[ 2 * a - 1 ] : 0 ) >= i ) o = a;
              else {
                if ( !( n[ 2 * a + 1 ] < i ) ) {
                  t = n[ 2 * a + 2 ];
                  break
                }
                r = a + 1
              }
            }
          var s = t ? t.indexOf( "overlay " ) : -1;
          return s < 0 ? t : 0 == s ? null : t.slice( 0, s - 1 )
        },
        getModeAt: function ( t ) {
          var n = this.doc.mode;
          return n.innerMode ? e.innerMode( n, this.getTokenAt( t ).state ).mode : n
        },
        getHelper: function ( e, t ) {
          return this.getHelpers( e, t )[ 0 ]
        },
        getHelpers: function ( e, t ) {
          var r = this,
            o = [];
          if ( !n.hasOwnProperty( t ) ) return o;
          var i = n[ t ],
            a = this.getModeAt( e );
          if ( "string" == typeof a[ t ] ) i[ a[ t ] ] && o.push( i[ a[ t ] ] );
          else if ( a[ t ] )
            for ( var s = 0; s < a[ t ].length; s++ ) {
              var l = i[ a[ t ][ s ] ];
              l && o.push( l )
            } else a.helperType && i[ a.helperType ] ? o.push( i[ a.helperType ] ) : i[ a.name ] && o.push( i[ a.name ] );
          for ( var u = 0; u < i._global.length; u++ ) {
            var c = i._global[ u ];
            c.pred( a, r ) && p( o, c.val ) == -1 && o.push( c.val )
          }
          return o
        },
        getStateAfter: function ( e, t ) {
          var n = this.doc;
          return e = F( n, null == e ? n.first + n.size - 1 : e ), et( this, e + 1, t )
        },
        cursorCoords: function ( e, t ) {
          var n, r = this.doc.sel.primary();
          return n = null == e ? r.head : "object" == typeof e ? U( this.doc, e ) : e ? r.from() : r.to(), pn( this, n, t || "page" )
        },
        charCoords: function ( e, t ) {
          return fn( this, U( this.doc, e ), t || "page" )
        },
        coordsChar: function ( e, t ) {
          return e = cn( this, e, t || "page" ), vn( this, e.left, e.top )
        },
        lineAtHeight: function ( e, t ) {
          return e = cn( this, {
            top: e,
            left: 0
          }, t || "page" ).top, O( this.doc, e + this.display.viewOffset )
        },
        heightAtLine: function ( e, t, n ) {
          var r, o = !1;
          if ( "number" == typeof e ) {
            var i = this.doc.first + this.doc.size - 1;
            e < this.doc.first ? e = this.doc.first : e > i && ( e = i, o = !0 ), r = E( this.doc, e )
          } else r = e;
          return un( this, r, {
            top: 0,
            left: 0
          }, t || "page", n ).top + ( o ? this.doc.height - he( r ) : 0 )
        },
        defaultTextHeight: function () {
          return mn( this.display )
        },
        defaultCharWidth: function () {
          return yn( this.display )
        },
        getViewport: function () {
          return {
            from: this.display.viewFrom,
            to: this.display.viewTo
          }
        },
        addWidget: function ( e, t, n, r, o ) {
          var i = this.display;
          e = pn( this, U( this.doc, e ) );
          var a = e.bottom,
            s = e.left;
          if ( t.style.position = "absolute", t.setAttribute( "cm-ignore-events", "true" ), this.display.input.setUneditable( t ), i.sizer.appendChild( t ), "over" == r ) a = e.top;
          else if ( "above" == r || "near" == r ) {
            var l = Math.max( i.wrapper.clientHeight, this.doc.height ),
              u = Math.max( i.sizer.clientWidth, i.lineSpace.clientWidth );
            ( "above" == r || e.bottom + t.offsetHeight > l ) && e.top > t.offsetHeight ? a = e.top - t.offsetHeight : e.bottom + t.offsetHeight <= l && ( a = e.bottom ), s + t.offsetWidth > u && ( s = u - t.offsetWidth )
          }
          t.style.top = a + "px", t.style.left = t.style.right = "", "right" == o ? ( s = i.sizer.clientWidth - t.offsetWidth, t.style.right = "0px" ) : ( "left" == o ? s = 0 : "middle" == o && ( s = ( i.sizer.clientWidth - t.offsetWidth ) / 2 ), t.style.left = s + "px" ), n && Jn( this, s, a, s + t.offsetWidth, a + t.offsetHeight )
        },
        triggerOnKeyDown: fr( hi ),
        triggerOnKeyPress: fr( mi ),
        triggerOnKeyUp: gi,
        execCommand: function ( e ) {
          if ( ys.hasOwnProperty( e ) ) return ys[ e ].call( null, this )
        },
        triggerElectric: fr( function ( e ) {
          ji( this, e )
        } ),
        findPosH: function ( e, t, n, r ) {
          var o = this,
            i = 1;
          t < 0 && ( i = -1, t = -t );
          for ( var a = U( this.doc, e ), s = 0; s < t && ( a = qi( o.doc, a, i, n, r ), !a.hitSide ); ++s );
          return a
        },
        moveH: fr( function ( e, t ) {
          var n = this;
          this.extendSelectionsBy( function ( r ) {
            return n.display.shift || n.doc.extend || r.empty() ? qi( n.doc, r.head, e, t, n.options.rtlMoveVisually ) : e < 0 ? r.from() : r.to()
          }, Aa )
        } ),
        deleteH: fr( function ( e, t ) {
          var n = this.doc.sel,
            r = this.doc;
          n.somethingSelected() ? r.replaceSelection( "", null, "+delete" ) : ii( this, function ( n ) {
            var o = qi( r, n.head, e, t, !1 );
            return e < 0 ? {
              from: o,
              to: n.head
            } : {
              from: n.head,
              to: o
            }
          } )
        } ),
        findPosV: function ( e, t, n, r ) {
          var o = this,
            i = 1,
            a = r;
          t < 0 && ( i = -1, t = -t );
          for ( var s = U( this.doc, e ), l = 0; l < t; ++l ) {
            var u = pn( o, s, "div" );
            if ( null == a ? a = u.left : u.left = a, s = Hi( o, u, i, n ), s.hitSide ) break
          }
          return s
        },
        moveV: fr( function ( e, t ) {
          var n = this,
            r = this.doc,
            o = [],
            i = !this.display.shift && !r.extend && r.sel.somethingSelected();
          if ( r.extendSelectionsBy( function ( a ) {
              if ( i ) return e < 0 ? a.from() : a.to();
              var s = pn( n, a.head, "div" );
              null != a.goalColumn && ( s.left = a.goalColumn ), o.push( s.left );
              var l = Hi( n, s, e, t );
              return "page" == t && a == r.sel.primary() && Zn( n, null, fn( n, l, "div" ).top - s.top ), l
            }, Aa ), o.length )
            for ( var a = 0; a < r.sel.ranges.length; a++ ) r.sel.ranges[ a ].goalColumn = o[ a ]
        } ),
        findWordAt: function ( e ) {
          var t = this.doc,
            n = E( t, e.line ).text,
            r = e.ch,
            o = e.ch;
          if ( n ) {
            var i = this.getHelper( e, "wordChars" );
            ( e.xRel < 0 || o == n.length ) && r ? --r : ++o;
            for ( var a = n.charAt( r ), s = w( a, i ) ? function ( e ) {
                return w( e, i )
              } : /\s/.test( a ) ? function ( e ) {
                return /\s/.test( e )
              } : function ( e ) {
                return !/\s/.test( e ) && !w( e )
              }; r > 0 && s( n.charAt( r - 1 ) ); ) --r;
            for ( ; o < n.length && s( n.charAt( o ) ); ) ++o
          }
          return new Nr( D( e.line, r ), D( e.line, o ) )
        },
        toggleOverwrite: function ( e ) {
          null != e && e == this.state.overwrite || ( ( this.state.overwrite = !this.state.overwrite ) ? a( this.display.cursorDiv, "CodeMirror-overwrite" ) : xa( this.display.cursorDiv, "CodeMirror-overwrite" ), Oe( this, "overwriteToggle", this, this.state.overwrite ) )
        },
        hasFocus: function () {
          return this.display.input.getField() == i()
        },
        isReadOnly: function () {
          return !( !this.options.readOnly && !this.doc.cantEdit )
        },
        scrollTo: fr( function ( e, t ) {
          null == e && null == t || er( this ), null != e && ( this.curOp.scrollLeft = e ), null != t && ( this.curOp.scrollTop = t )
        } ),
        getScrollInfo: function () {
          var e = this.display.scroller;
          return {
            left: e.scrollLeft,
            top: e.scrollTop,
            height: e.scrollHeight - Ht( this ) - this.display.barHeight,
            width: e.scrollWidth - Ht( this ) - this.display.barWidth,
            clientHeight: Vt( this ),
            clientWidth: Wt( this )
          }
        },
        scrollIntoView: fr( function ( e, t ) {
          if ( null == e ? ( e = {
              from: this.doc.sel.primary().head,
              to: null
            }, null == t && ( t = this.options.cursorScrollMargin ) ) : "number" == typeof e ? e = {
              from: D( e, 0 ),
              to: null
            } : null == e.from && ( e = {
              from: e,
              to: null
            } ), e.to || ( e.to = e.from ), e.margin = t || 0, null != e.from.line ) er( this ), this.curOp.scrollToPos = e;
          else {
            var n = Xn( this, Math.min( e.from.left, e.to.left ), Math.min( e.from.top, e.to.top ) - e.margin, Math.max( e.from.right, e.to.right ), Math.max( e.from.bottom, e.to.bottom ) + e.margin );
            this.scrollTo( n.scrollLeft, n.scrollTop )
          }
        } ),
        setSize: fr( function ( e, t ) {
          var n = this,
            r = function ( e ) {
              return "number" == typeof e || /^\d+$/.test( String( e ) ) ? e + "px" : e
            };
          null != e && ( this.display.wrapper.style.width = r( e ) ), null != t && ( this.display.wrapper.style.height = r( t ) ), this.options.lineWrapping && on( this );
          var o = this.display.viewFrom;
          this.doc.iter( o, this.display.viewTo, function ( e ) {
            if ( e.widgets )
              for ( var t = 0; t < e.widgets.length; t++ )
                if ( e.widgets[ t ].noHScroll ) {
                  hr( n, o, "widget" );
                  break
                }++ o
          } ), this.curOp.forceUpdate = !0, Oe( this, "refresh", this )
        } ),
        operation: function ( e ) {
          return ur( this, e )
        },
        refresh: fr( function () {
          var e = this.display.cachedTextHeight;
          dr( this ), this.curOp.forceUpdate = !0, an( this ), this.scrollTo( this.doc.scrollLeft, this.doc.scrollTop ), Sr( this ), ( null == e || Math.abs( e - mn( this.display ) ) > .5 ) && _n( this ), Oe( this, "refresh", this )
        } ),
        swapDoc: fr( function ( e ) {
          var t = this.doc;
          return t.cm = null, Wr( this, e ), an( this ), this.display.input.reset(), this.scrollTo( e.scrollLeft, e.scrollTop ), this.curOp.forceScroll = !0, kt( this, "swapDoc", this, t ), t
        } ),
        getInputField: function () {
          return this.display.input.getField()
        },
        getWrapperElement: function () {
          return this.display.wrapper
        },
        getScrollerElement: function () {
          return this.display.scroller
        },
        getGutterElement: function () {
          return this.display.gutters
        }
      }, Le( e ), e.registerHelper = function ( t, r, o ) {
        n.hasOwnProperty( t ) || ( n[ t ] = e[ t ] = {
          _global: []
        } ), n[ t ][ r ] = o
      }, e.registerGlobalHelper = function ( t, r, o, i ) {
        e.registerHelper( t, r, i ), n[ t ]._global.push( {
          pred: o,
          val: i
        } )
      }
    }

    function qi( e, t, n, r, o ) {
      function i() {
        var t = s + n;
        return !( t < e.first || t >= e.first + e.size ) && ( s = t, c = E( e, t ) )
      }

      function a( e ) {
        var t = ( o ? Ee : Se )( c, l, n, !0 );
        if ( null == t ) {
          if ( e || !i() ) return !1;
          l = o ? ( n < 0 ? we : xe )( c ) : n < 0 ? c.text.length : 0
        } else l = t;
        return !0
      }
      var s = t.line,
        l = t.ch,
        u = n,
        c = E( e, s );
      if ( "char" == r ) a();
      else if ( "column" == r ) a( !0 );
      else if ( "word" == r || "group" == r )
        for ( var f = null, p = "group" == r, d = e.cm && e.cm.getHelper( t, "wordChars" ), h = !0; !( n < 0 ) || a( !h ); h = !1 ) {
          var v = c.text.charAt( l ) || "\n",
            g = w( v, d ) ? "w" : p && "\n" == v ? "n" : !p || /\s/.test( v ) ? null : "p";
          if ( !p || h || g || ( g = "s" ), f && f != g ) {
            n < 0 && ( n = 1, a() );
            break
          }
          if ( g && ( f = g ), n > 0 && !a( !h ) ) break
        }
      var m = yo( e, D( s, l ), t, u, !0 );
      return L( t, m ) || ( m.hitSide = !0 ), m
    }

    function Hi( e, t, n, r ) {
      var o, i = e.doc,
        a = t.left;
      if ( "page" == r ) {
        var s = Math.min( e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight ),
          l = Math.max( s - .5 * mn( e.display ), 3 );
        o = ( n > 0 ? t.bottom : t.top ) + n * l
      } else "line" == r && ( o = n > 0 ? t.bottom + 3 : t.top - 3 );
      for ( var u; u = vn( e, a, o ), u.outside; ) {
        if ( n < 0 ? o <= 0 : o >= i.height ) {
          u.hitSide = !0;
          break
        }
        o += 5 * n
      }
      return u
    }

    function Wi( e, t ) {
      var n = Jt( e, t.line );
      if ( !n || n.hidden ) return null;
      var r = E( e.doc, t.line ),
        o = Yt( n, r, t.line ),
        i = Te( r ),
        a = "left";
      if ( i ) {
        var s = Ce( i, t.ch );
        a = s % 2 ? "right" : "left"
      }
      var l = Qt( o.map, t.ch, a );
      return l.offset = "right" == l.collapse ? l.end : l.start, l
    }

    function Vi( e, t ) {
      return t && ( e.bad = !0 ), e
    }

    function Gi( e, t, n, r, o ) {
      function i( e ) {
        return function ( t ) {
          return t.id == e
        }
      }

      function a( t ) {
        if ( 1 == t.nodeType ) {
          var n = t.getAttribute( "cm-text" );
          if ( null != n ) return void( s += "" == n ? t.textContent.replace( /\u200b/g, "" ) : n );
          var c, f = t.getAttribute( "cm-marker" );
          if ( f ) {
            var p = e.findMarks( D( r, 0 ), D( o + 1, 0 ), i( +f ) );
            return void( p.length && ( c = p[ 0 ].find() ) && ( s += S( e.doc, c.from, c.to ).join( u ) ) )
          }
          if ( "false" == t.getAttribute( "contenteditable" ) ) return;
          for ( var d = 0; d < t.childNodes.length; d++ ) a( t.childNodes[ d ] );
          /^(pre|div|p)$/i.test( t.nodeName ) && ( l = !0 )
        } else if ( 3 == t.nodeType ) {
          var h = t.nodeValue;
          if ( !h ) return;
          l && ( s += u, l = !1 ), s += h
        }
      }
      for ( var s = "", l = !1, u = e.doc.lineSeparator(); a( t ), t != n; ) t = t.nextSibling;
      return s
    }

    function Yi( e, t, n ) {
      var r;
      if ( t == e.display.lineDiv ) {
        if ( r = e.display.lineDiv.childNodes[ n ], !r ) return Vi( e.clipPos( D( e.display.viewTo - 1 ) ), !0 );
        t = null, n = 0
      } else
        for ( r = t;; r = r.parentNode ) {
          if ( !r || r == e.display.lineDiv ) return null;
          if ( r.parentNode && r.parentNode == e.display.lineDiv ) break
        }
      for ( var o = 0; o < e.display.view.length; o++ ) {
        var i = e.display.view[ o ];
        if ( i.node == r ) return Ki( i, t, n )
      }
    }

    function Ki( e, t, n ) {
      function r( t, n, r ) {
        for ( var o = -1; o < ( f ? f.length : 0 ); o++ )
          for ( var i = o < 0 ? c.map : f[ o ], a = 0; a < i.length; a += 3 ) {
            var s = i[ a + 2 ];
            if ( s == t || s == n ) {
              var l = M( o < 0 ? e.line : e.rest[ o ] ),
                u = i[ a ] + r;
              return ( r < 0 || s != t ) && ( u = i[ a + ( r ? 1 : 0 ) ] ), D( l, u )
            }
          }
      }
      var i = e.text.firstChild,
        a = !1;
      if ( !t || !o( i, t ) ) return Vi( D( M( e.line ), 0 ), !0 );
      if ( t == i && ( a = !0, t = i.childNodes[ n ], n = 0, !t ) ) {
        var s = e.rest ? v( e.rest ) : e.line;
        return Vi( D( M( s ), s.text.length ), a )
      }
      var l = 3 == t.nodeType ? t : null,
        u = t;
      for ( l || 1 != t.childNodes.length || 3 != t.firstChild.nodeType || ( l = t.firstChild, n && ( n = l.nodeValue.length ) ); u.parentNode != i; ) u = u.parentNode;
      var c = e.measure,
        f = c.maps,
        p = r( l, u, n );
      if ( p ) return Vi( p, a );
      for ( var d = u.nextSibling, h = l ? l.nodeValue.length - n : 0; d; d = d.nextSibling ) {
        if ( p = r( d, d.firstChild, 0 ) ) return Vi( D( p.line, p.ch - h ), a );
        h += d.textContent.length
      }
      for ( var g = u.previousSibling, m = n; g; g = g.previousSibling ) {
        if ( p = r( g, g.firstChild, -1 ) ) return Vi( D( p.line, p.ch + m ), a );
        m += g.textContent.length
      }
    }

    function $i( e, t ) {
      function n() {
        e.value = l.getValue()
      }
      if ( t = t ? u( t ) : {}, t.value = e.value, !t.tabindex && e.tabIndex && ( t.tabindex = e.tabIndex ), !t.placeholder && e.placeholder && ( t.placeholder = e.placeholder ), null == t.autofocus ) {
        var r = i();
        t.autofocus = r == e || null != e.getAttribute( "autofocus" ) && r == document.body
      }
      var o;
      if ( e.form && ( ja( e.form, "submit", n ), !t.leaveSubmitMethodAlone ) ) {
        var a = e.form;
        o = a.submit;
        try {
          var s = a.submit = function () {
            n(), a.submit = o, a.submit(), a.submit = s
          }
        } catch ( e ) {}
      }
      t.finishInit = function ( t ) {
        t.save = n, t.getTextArea = function () {
          return e
        }, t.toTextArea = function () {
          t.toTextArea = isNaN, n(), e.parentNode.removeChild( t.getWrapperElement() ), e.style.display = "", e.form && ( Me( e.form, "submit", n ), "function" == typeof e.form.submit && ( e.form.submit = o ) )
        }
      }, e.style.display = "none";
      var l = Ni( function ( t ) {
        return e.parentNode.insertBefore( t, e.nextSibling )
      }, t );
      return l
    }

    function Ji( e ) {
      e.off = Me, e.on = ja, e.wheelEventPixels = qn, e.Doc = ls, e.splitLines = Ua, e.countColumn = c, e.findColumn = d, e.isWordChar = x, e.Pass = Ea, e.signal = Oe, e.Line = lt, e.changeEnd = Lr, e.scrollbarModel = rs, e.Pos = D, e.cmpPos = L, e.modes = Ha, e.mimeModes = Wa, e.resolveMode = Ge, e.getMode = Ye, e.modeExtensions = Va, e.extendMode = Ke, e.copyState = $e, e.startState = Xe, e.innerMode = Je, e.commands = ys, e.keyMap = vs, e.keyName = ri, e.isModifierKey = ni, e.lookupKey = ti, e.normalizeKeyMap = ei, e.StringStream = Ga, e.SharedTextMarker = Bo, e.TextMarker = Fo, e.LineWidget = Io, e.e_preventDefault = Ie, e.e_stopPropagation = Re, e.e_stop = Fe, e.addClass = a, e.contains = o, e.rmClass = xa, e.keyNames = fs
    }
    var Xi = navigator.userAgent,
      Zi = navigator.platform,
      Qi = /gecko\/\d/i.test( Xi ),
      ea = /MSIE \d/.test( Xi ),
      ta = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec( Xi ),
      na = ea || ta,
      ra = na && ( ea ? document.documentMode || 6 : ta[ 1 ] ),
      oa = /WebKit\//.test( Xi ),
      ia = oa && /Qt\/\d+\.\d+/.test( Xi ),
      aa = /Chrome\//.test( Xi ),
      sa = /Opera\//.test( Xi ),
      la = /Apple Computer/.test( navigator.vendor ),
      ua = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test( Xi ),
      ca = /PhantomJS/.test( Xi ),
      fa = /AppleWebKit/.test( Xi ) && /Mobile\/\w+/.test( Xi ),
      pa = fa || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test( Xi ),
      da = fa || /Mac/.test( Zi ),
      ha = /\bCrOS\b/.test( Xi ),
      va = /win/i.test( Zi ),
      ga = sa && Xi.match( /Version\/(\d*\.\d*)/ );
    ga && ( ga = Number( ga[ 1 ] ) ), ga && ga >= 15 && ( sa = !1, oa = !0 );
    var ma, ya = da && ( ia || sa && ( null == ga || ga < 12.11 ) ),
      ba = Qi || na && ra >= 9,
      xa = function ( t, n ) {
        var r = t.className,
          o = e( n ).exec( r );
        if ( o ) {
          var i = r.slice( o.index + o[ 0 ].length );
          t.className = r.slice( 0, o.index ) + ( i ? o[ 1 ] + i : "" )
        }
      };
    ma = document.createRange ? function ( e, t, n, r ) {
      var o = document.createRange();
      return o.setEnd( r || e, n ), o.setStart( e, t ), o
    } : function ( e, t, n ) {
      var r = document.body.createTextRange();
      try {
        r.moveToElementText( e.parentNode )
      } catch ( e ) {
        return r
      }
      return r.collapse( !0 ), r.moveEnd( "character", n ), r.moveStart( "character", t ), r
    };
    var wa = function ( e ) {
      e.select()
    };
    fa ? wa = function ( e ) {
      e.selectionStart = 0, e.selectionEnd = e.value.length
    } : na && ( wa = function ( e ) {
      try {
        e.select()
      } catch ( e ) {}
    } ), f.prototype.set = function ( e, t ) {
      clearTimeout( this.id ), this.id = setTimeout( t, e )
    };
    var _a, Ca, ka = 30,
      Ea = {
        toString: function () {
          return "CodeMirror.Pass"
        }
      },
      Sa = {
        scroll: !1
      },
      Ta = {
        origin: "*mouse"
      },
      Aa = {
        origin: "+move"
      },
      Ma = [ "" ],
      Oa = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,
      Na = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/,
      Pa = !1,
      Da = !1,
      La = null,
      Ia = function () {
        function e( e ) {
          return e <= 247 ? n.charAt( e ) : 1424 <= e && e <= 1524 ? "R" : 1536 <= e && e <= 1785 ? r.charAt( e - 1536 ) : 1774 <= e && e <= 2220 ? "r" : 8192 <= e && e <= 8203 ? "w" : 8204 == e ? "b" : "L"
        }

        function t( e, t, n ) {
          this.level = e, this.from = t, this.to = n
        }
        var n = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
          r = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111",
          o = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
          i = /[stwN]/,
          a = /[LRr]/,
          s = /[Lb1n]/,
          l = /[1n]/,
          u = "L";
        return function ( n ) {
          if ( !o.test( n ) ) return !1;
          for ( var r = n.length, c = [], f = 0; f < r; ++f ) c.push( e( n.charCodeAt( f ) ) );
          for ( var p = 0, d = u; p < r; ++p ) {
            var h = c[ p ];
            "m" == h ? c[ p ] = d : d = h
          }
          for ( var g = 0, m = u; g < r; ++g ) {
            var y = c[ g ];
            "1" == y && "r" == m ? c[ g ] = "n" : a.test( y ) && ( m = y, "r" == y && ( c[ g ] = "R" ) )
          }
          for ( var b = 1, x = c[ 0 ]; b < r - 1; ++b ) {
            var w = c[ b ];
            "+" == w && "1" == x && "1" == c[ b + 1 ] ? c[ b ] = "1" : "," != w || x != c[ b + 1 ] || "1" != x && "n" != x || ( c[ b ] = x ), x = w
          }
          for ( var _ = 0; _ < r; ++_ ) {
            var C = c[ _ ];
            if ( "," == C ) c[ _ ] = "N";
            else if ( "%" == C ) {
              var k = void 0;
              for ( k = _ + 1; k < r && "%" == c[ k ]; ++k );
              for ( var E = _ && "!" == c[ _ - 1 ] || k < r && "1" == c[ k ] ? "1" : "N", S = _; S < k; ++S ) c[ S ] = E;
              _ = k - 1
            }
          }
          for ( var T = 0, A = u; T < r; ++T ) {
            var M = c[ T ];
            "L" == A && "1" == M ? c[ T ] = "L" : a.test( M ) && ( A = M )
          }
          for ( var O = 0; O < r; ++O )
            if ( i.test( c[ O ] ) ) {
              var N = void 0;
              for ( N = O + 1; N < r && i.test( c[ N ] ); ++N );
              for ( var P = "L" == ( O ? c[ O - 1 ] : u ), D = "L" == ( N < r ? c[ N ] : u ), L = P || D ? "L" : "R", I = O; I < N; ++I ) c[ I ] = L;
              O = N - 1
            } for ( var R, j = [], F = 0; F < r; )
            if ( s.test( c[ F ] ) ) {
              var U = F;
              for ( ++F; F < r && s.test( c[ F ] ); ++F );
              j.push( new t( 0, U, F ) )
            } else {
              var B = F,
                z = j.length;
              for ( ++F; F < r && "L" != c[ F ]; ++F );
              for ( var q = B; q < F; )
                if ( l.test( c[ q ] ) ) {
                  B < q && j.splice( z, 0, new t( 1, B, q ) );
                  var H = q;
                  for ( ++q; q < F && l.test( c[ q ] ); ++q );
                  j.splice( z, 0, new t( 2, H, q ) ), B = q
                } else ++q;
              B < F && j.splice( z, 0, new t( 1, B, F ) )
            } return 1 == j[ 0 ].level && ( R = n.match( /^\s+/ ) ) && ( j[ 0 ].from = R[ 0 ].length, j.unshift( new t( 0, 0, R[ 0 ].length ) ) ), 1 == v( j ).level && ( R = n.match( /\s+$/ ) ) && ( v( j ).to -= R[ 0 ].length, j.push( new t( 0, r - R[ 0 ].length, r ) ) ), 2 == j[ 0 ].level && j.unshift( new t( 1, j[ 0 ].to, j[ 0 ].to ) ), j[ 0 ].level != v( j ).level && j.push( new t( j[ 0 ].level, r, r ) ), j
        }
      }(),
      Ra = [],
      ja = function ( e, t, n ) {
        if ( e.addEventListener ) e.addEventListener( t, n, !1 );
        else if ( e.attachEvent ) e.attachEvent( "on" + t, n );
        else {
          var r = e._handlers || ( e._handlers = {} );
          r[ t ] = ( r[ t ] || Ra ).concat( n )
        }
      },
      Fa = function () {
        if ( na && ra < 9 ) return !1;
        var e = r( "div" );
        return "draggable" in e || "dragDrop" in e
      }(),
      Ua = 3 != "\n\nb".split( /\n/ ).length ? function ( e ) {
        for ( var t = 0, n = [], r = e.length; t <= r; ) {
          var o = e.indexOf( "\n", t );
          o == -1 && ( o = e.length );
          var i = e.slice( t, "\r" == e.charAt( o - 1 ) ? o - 1 : o ),
            a = i.indexOf( "\r" );
          a != -1 ? ( n.push( i.slice( 0, a ) ), t += a + 1 ) : ( n.push( i ), t = o + 1 )
        }
        return n
      } : function ( e ) {
        return e.split( /\r\n?|\n/ )
      },
      Ba = window.getSelection ? function ( e ) {
        try {
          return e.selectionStart != e.selectionEnd
        } catch ( e ) {
          return !1
        }
      } : function ( e ) {
        var t;
        try {
          t = e.ownerDocument.selection.createRange()
        } catch ( e ) {}
        return !( !t || t.parentElement() != e ) && 0 != t.compareEndPoints( "StartToEnd", t )
      },
      za = function () {
        var e = r( "div" );
        return "oncopy" in e || ( e.setAttribute( "oncopy", "return;" ), "function" == typeof e.oncopy )
      }(),
      qa = null,
      Ha = {},
      Wa = {},
      Va = {},
      Ga = function ( e, t ) {
        this.pos = this.start = 0, this.string = e, this.tabSize = t || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0
      };
    Ga.prototype = {
      eol: function () {
        return this.pos >= this.string.length
      },
      sol: function () {
        return this.pos == this.lineStart
      },
      peek: function () {
        return this.string.charAt( this.pos ) || void 0
      },
      next: function () {
        if ( this.pos < this.string.length ) return this.string.charAt( this.pos++ )
      },
      eat: function ( e ) {
        var t, n = this.string.charAt( this.pos );
        if ( t = "string" == typeof e ? n == e : n && ( e.test ? e.test( n ) : e( n ) ) ) return ++this.pos, n
      },
      eatWhile: function ( e ) {
        for ( var t = this.pos; this.eat( e ); );
        return this.pos > t
      },
      eatSpace: function () {
        for ( var e = this, t = this.pos;
          /[\s\u00a0]/.test( this.string.charAt( this.pos ) ); ) ++e.pos;
        return this.pos > t
      },
      skipToEnd: function () {
        this.pos = this.string.length
      },
      skipTo: function ( e ) {
        var t = this.string.indexOf( e, this.pos );
        if ( t > -1 ) return this.pos = t, !0
      },
      backUp: function ( e ) {
        this.pos -= e
      },
      column: function () {
        return this.lastColumnPos < this.start && ( this.lastColumnValue = c( this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue ), this.lastColumnPos = this.start ), this.lastColumnValue - ( this.lineStart ? c( this.string, this.lineStart, this.tabSize ) : 0 )
      },
      indentation: function () {
        return c( this.string, null, this.tabSize ) - ( this.lineStart ? c( this.string, this.lineStart, this.tabSize ) : 0 )
      },
      match: function ( e, t, n ) {
        if ( "string" != typeof e ) {
          var r = this.string.slice( this.pos ).match( e );
          return r && r.index > 0 ? null : ( r && t !== !1 && ( this.pos += r[ 0 ].length ), r )
        }
        var o = function ( e ) {
            return n ? e.toLowerCase() : e
          },
          i = this.string.substr( this.pos, e.length );
        if ( o( i ) == o( e ) ) return t !== !1 && ( this.pos += e.length ), !0
      },
      current: function () {
        return this.string.slice( this.start, this.pos )
      },
      hideFirstChars: function ( e, t ) {
        this.lineStart += e;
        try {
          return t()
        } finally {
          this.lineStart -= e
        }
      }
    }, Le( lt ), lt.prototype.lineNo = function () {
      return M( this )
    };
    var Ya, Ka = {},
      $a = {},
      Ja = null,
      Xa = null,
      Za = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      },
      Qa = 0,
      es = null;
    na ? es = -.53 : Qi ? es = 15 : aa ? es = -.7 : la && ( es = -1 / 3 );
    var ts = function ( e, t, n ) {
      this.cm = n;
      var o = this.vert = r( "div", [ r( "div", null, null, "min-width: 1px" ) ], "CodeMirror-vscrollbar" ),
        i = this.horiz = r( "div", [ r( "div", null, null, "height: 100%; min-height: 1px" ) ], "CodeMirror-hscrollbar" );
      e( o ), e( i ), ja( o, "scroll", function () {
        o.clientHeight && t( o.scrollTop, "vertical" )
      } ), ja( i, "scroll", function () {
        i.clientWidth && t( i.scrollLeft, "horizontal" )
      } ), this.checkedZeroWidth = !1, na && ra < 8 && ( this.horiz.style.minHeight = this.vert.style.minWidth = "18px" )
    };
    ts.prototype.update = function ( e ) {
      var t = e.scrollWidth > e.clientWidth + 1,
        n = e.scrollHeight > e.clientHeight + 1,
        r = e.nativeBarWidth;
      if ( n ) {
        this.vert.style.display = "block", this.vert.style.bottom = t ? r + "px" : "0";
        var o = e.viewHeight - ( t ? r : 0 );
        this.vert.firstChild.style.height = Math.max( 0, e.scrollHeight - e.clientHeight + o ) + "px"
      } else this.vert.style.display = "", this.vert.firstChild.style.height = "0";
      if ( t ) {
        this.horiz.style.display = "block", this.horiz.style.right = n ? r + "px" : "0", this.horiz.style.left = e.barLeft + "px";
        var i = e.viewWidth - e.barLeft - ( n ? r : 0 );
        this.horiz.firstChild.style.width = e.scrollWidth - e.clientWidth + i + "px"
      } else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
      return !this.checkedZeroWidth && e.clientHeight > 0 && ( 0 == r && this.zeroWidthHack(), this.checkedZeroWidth = !0 ), {
        right: n ? r : 0,
        bottom: t ? r : 0
      }
    }, ts.prototype.setScrollLeft = function ( e ) {
      this.horiz.scrollLeft != e && ( this.horiz.scrollLeft = e ), this.disableHoriz && this.enableZeroWidthBar( this.horiz, this.disableHoriz )
    }, ts.prototype.setScrollTop = function ( e ) {
      this.vert.scrollTop != e && ( this.vert.scrollTop = e ), this.disableVert && this.enableZeroWidthBar( this.vert, this.disableVert )
    }, ts.prototype.zeroWidthHack = function () {
      var e = da && !ua ? "12px" : "18px";
      this.horiz.style.height = this.vert.style.width = e, this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none", this.disableHoriz = new f, this.disableVert = new f
    }, ts.prototype.enableZeroWidthBar = function ( e, t ) {
      function n() {
        var r = e.getBoundingClientRect(),
          o = document.elementFromPoint( r.left + 1, r.bottom - 1 );
        o != e ? e.style.pointerEvents = "none" : t.set( 1e3, n )
      }
      e.style.pointerEvents = "auto", t.set( 1e3, n )
    }, ts.prototype.clear = function () {
      var e = this.horiz.parentNode;
      e.removeChild( this.horiz ), e.removeChild( this.vert )
    };
    var ns = function () {};
    ns.prototype.update = function () {
      return {
        bottom: 0,
        right: 0
      }
    }, ns.prototype.setScrollLeft = function () {}, ns.prototype.setScrollTop = function () {}, ns.prototype.clear = function () {};
    var rs = {
        native: ts,
        null: ns
      },
      os = 0,
      is = function ( e, t, n ) {
        var r = e.display;
        this.viewport = t, this.visible = Fn( r, e.doc, t ), this.editorIsHidden = !r.wrapper.offsetWidth, this.wrapperHeight = r.wrapper.clientHeight, this.wrapperWidth = r.wrapper.clientWidth, this.oldDisplayWidth = Wt( e ), this.force = n, this.dims = bn( e ), this.events = []
      };
    is.prototype.signal = function ( e, t ) {
      De( e, t ) && this.events.push( arguments )
    }, is.prototype.finish = function () {
      for ( var e = this, t = 0; t < this.events.length; t++ ) Oe.apply( null, e.events[ t ] )
    }, Or.prototype = {
      primary: function () {
        return this.ranges[ this.primIndex ]
      },
      equals: function ( e ) {
        var t = this;
        if ( e == this ) return !0;
        if ( e.primIndex != this.primIndex || e.ranges.length != this.ranges.length ) return !1;
        for ( var n = 0; n < this.ranges.length; n++ ) {
          var r = t.ranges[ n ],
            o = e.ranges[ n ];
          if ( 0 != L( r.anchor, o.anchor ) || 0 != L( r.head, o.head ) ) return !1
        }
        return !0
      },
      deepCopy: function () {
        for ( var e = this, t = [], n = 0; n < this.ranges.length; n++ ) t[ n ] = new Nr( I( e.ranges[ n ].anchor ), I( e.ranges[ n ].head ) );
        return new Or( t, this.primIndex )
      },
      somethingSelected: function () {
        for ( var e = this, t = 0; t < this.ranges.length; t++ )
          if ( !e.ranges[ t ].empty() ) return !0;
        return !1
      },
      contains: function ( e, t ) {
        var n = this;
        t || ( t = e );
        for ( var r = 0; r < this.ranges.length; r++ ) {
          var o = n.ranges[ r ];
          if ( L( t, o.from() ) >= 0 && L( e, o.to() ) <= 0 ) return r
        }
        return -1
      }
    }, Nr.prototype = {
      from: function () {
        return j( this.anchor, this.head )
      },
      to: function () {
        return R( this.anchor, this.head )
      },
      empty: function () {
        return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
      }
    }, Do.prototype = {
      chunkSize: function () {
        return this.lines.length
      },
      removeInner: function ( e, t ) {
        for ( var n = this, r = e, o = e + t; r < o; ++r ) {
          var i = n.lines[ r ];
          n.height -= i.height, ct( i ), kt( i, "delete" )
        }
        this.lines.splice( e, t )
      },
      collapse: function ( e ) {
        e.push.apply( e, this.lines )
      },
      insertInner: function ( e, t, n ) {
        var r = this;
        this.height += n, this.lines = this.lines.slice( 0, e ).concat( t ).concat( this.lines.slice( e ) );
        for ( var o = 0; o < t.length; ++o ) t[ o ].parent = r
      },
      iterN: function ( e, t, n ) {
        for ( var r = this, o = e + t; e < o; ++e )
          if ( n( r.lines[ e ] ) ) return !0
      }
    }, Lo.prototype = {
      chunkSize: function () {
        return this.size
      },
      removeInner: function ( e, t ) {
        var n = this;
        this.size -= t;
        for ( var r = 0; r < this.children.length; ++r ) {
          var o = n.children[ r ],
            i = o.chunkSize();
          if ( e < i ) {
            var a = Math.min( t, i - e ),
              s = o.height;
            if ( o.removeInner( e, a ), n.height -= s - o.height, i == a && ( n.children.splice( r--, 1 ), o.parent = null ), 0 == ( t -= a ) ) break;
            e = 0
          } else e -= i
        }
        if ( this.size - t < 25 && ( this.children.length > 1 || !( this.children[ 0 ] instanceof Do ) ) ) {
          var l = [];
          this.collapse( l ), this.children = [ new Do( l ) ], this.children[ 0 ].parent = this
        }
      },
      collapse: function ( e ) {
        for ( var t = this, n = 0; n < this.children.length; ++n ) t.children[ n ].collapse( e )
      },
      insertInner: function ( e, t, n ) {
        var r = this;
        this.size += t.length, this.height += n;
        for ( var o = 0; o < this.children.length; ++o ) {
          var i = r.children[ o ],
            a = i.chunkSize();
          if ( e <= a ) {
            if ( i.insertInner( e, t, n ), i.lines && i.lines.length > 50 ) {
              for ( var s = i.lines.length % 25 + 25, l = s; l < i.lines.length; ) {
                var u = new Do( i.lines.slice( l, l += 25 ) );
                i.height -= u.height, r.children.splice( ++o, 0, u ), u.parent = r
              }
              i.lines = i.lines.slice( 0, s ), r.maybeSpill()
            }
            break
          }
          e -= a
        }
      },
      maybeSpill: function () {
        if ( !( this.children.length <= 10 ) ) {
          var e = this;
          do {
            var t = e.children.splice( e.children.length - 5, 5 ),
              n = new Lo( t );
            if ( e.parent ) {
              e.size -= n.size, e.height -= n.height;
              var r = p( e.parent.children, e );
              e.parent.children.splice( r + 1, 0, n )
            } else {
              var o = new Lo( e.children );
              o.parent = e, e.children = [ o, n ], e = o
            }
            n.parent = e.parent
          } while ( e.children.length > 10 );
          e.parent.maybeSpill()
        }
      },
      iterN: function ( e, t, n ) {
        for ( var r = this, o = 0; o < this.children.length; ++o ) {
          var i = r.children[ o ],
            a = i.chunkSize();
          if ( e < a ) {
            var s = Math.min( t, a - e );
            if ( i.iterN( e, s, n ) ) return !0;
            if ( 0 == ( t -= s ) ) break;
            e = 0
          } else e -= a
        }
      }
    }, Le( Io ), Io.prototype.clear = function () {
      var e = this,
        t = this.doc.cm,
        n = this.line.widgets,
        r = this.line,
        o = M( r );
      if ( null != o && n ) {
        for ( var i = 0; i < n.length; ++i ) n[ i ] == e && n.splice( i--, 1 );
        n.length || ( r.widgets = null );
        var a = Ft( this );
        A( r, Math.max( 0, r.height - a ) ), t && ur( t, function () {
          Ro( t, r, -a ), hr( t, o, "widget" )
        } )
      }
    }, Io.prototype.changed = function () {
      var e = this.height,
        t = this.doc.cm,
        n = this.line;
      this.height = null;
      var r = Ft( this ) - e;
      r && ( A( n, n.height + r ), t && ur( t, function () {
        t.curOp.forceUpdate = !0, Ro( t, n, r )
      } ) )
    };
    var as = 0;
    Le( Fo ), Fo.prototype.clear = function () {
      var e = this;
      if ( !this.explicitlyCleared ) {
        var t = this.doc.cm,
          n = t && !t.curOp;
        if ( n && tr( t ), De( this, "clear" ) ) {
          var r = this.find();
          r && kt( this, "clear", r.from, r.to )
        }
        for ( var o = null, i = null, a = 0; a < this.lines.length; ++a ) {
          var s = e.lines[ a ],
            l = V( s.markedSpans, e );
          t && !e.collapsed ? hr( t, M( s ), "text" ) : t && ( null != l.to && ( i = M( s ) ), null != l.from && ( o = M( s ) ) ), s.markedSpans = G( s.markedSpans, l ), null == l.from && e.collapsed && !pe( e.doc, s ) && t && A( s, mn( t.display ) )
        }
        if ( t && this.collapsed && !t.options.lineWrapping )
          for ( var u = 0; u < this.lines.length; ++u ) {
            var c = le( e.lines[ u ] ),
              f = ve( c );
            f > t.display.maxLineLength && ( t.display.maxLine = c, t.display.maxLineLength = f, t.display.maxLineChanged = !0 )
          }
        null != o && t && this.collapsed && dr( t, o, i + 1 ), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && ( this.doc.cantEdit = !1, t && vo( t.doc ) ), t && kt( t, "markerCleared", t, this ), n && nr( t ), this.parent && this.parent.clear()
      }
    }, Fo.prototype.find = function ( e, t ) {
      var n = this;
      null == e && "bookmark" == this.type && ( e = 1 );
      for ( var r, o, i = 0; i < this.lines.length; ++i ) {
        var a = n.lines[ i ],
          s = V( a.markedSpans, n );
        if ( null != s.from && ( r = D( t ? a : M( a ), s.from ), e == -1 ) ) return r;
        if ( null != s.to && ( o = D( t ? a : M( a ), s.to ), 1 == e ) ) return o
      }
      return r && {
        from: r,
        to: o
      }
    }, Fo.prototype.changed = function () {
      var e = this.find( -1, !0 ),
        t = this,
        n = this.doc.cm;
      e && n && ur( n, function () {
        var r = e.line,
          o = M( e.line ),
          i = Jt( n, o );
        if ( i && ( rn( i ), n.curOp.selectionChanged = n.curOp.forceUpdate = !0 ), n.curOp.updateMaxLine = !0, !pe( t.doc, r ) && null != t.height ) {
          var a = t.height;
          t.height = null;
          var s = Ft( t ) - a;
          s && A( r, r.height + s )
        }
      } )
    }, Fo.prototype.attachLine = function ( e ) {
      if ( !this.lines.length && this.doc.cm ) {
        var t = this.doc.cm.curOp;
        t.maybeHiddenMarkers && p( t.maybeHiddenMarkers, this ) != -1 || ( t.maybeUnhiddenMarkers || ( t.maybeUnhiddenMarkers = [] ) ).push( this )
      }
      this.lines.push( e )
    }, Fo.prototype.detachLine = function ( e ) {
      if ( this.lines.splice( p( this.lines, e ), 1 ), !this.lines.length && this.doc.cm ) {
        var t = this.doc.cm.curOp;
        ( t.maybeHiddenMarkers || ( t.maybeHiddenMarkers = [] ) ).push( this )
      }
    }, Le( Bo ), Bo.prototype.clear = function () {
      var e = this;
      if ( !this.explicitlyCleared ) {
        this.explicitlyCleared = !0;
        for ( var t = 0; t < this.markers.length; ++t ) e.markers[ t ].clear();
        kt( this, "clear" )
      }
    }, Bo.prototype.find = function ( e, t ) {
      return this.primary.find( e, t )
    };
    var ss = 0,
      ls = function ( e, t, n, r ) {
        if ( !( this instanceof ls ) ) return new ls( e, t, n, r );
        null == n && ( n = 0 ), Lo.call( this, [ new Do( [ new lt( "", null ) ] ) ] ), this.first = n, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.frontier = n;
        var o = D( n, 0 );
        this.sel = Dr( o ), this.history = new Vr( null ), this.id = ++ss, this.modeOption = t, this.lineSep = r, this.extend = !1, "string" == typeof e && ( e = this.splitLines( e ) ), qr( this, {
          from: o,
          to: o,
          text: e
        } ), fo( this, Dr( o ), Sa )
      };
    ls.prototype = b( Lo.prototype, {
      constructor: ls,
      iter: function ( e, t, n ) {
        n ? this.iterN( e - this.first, t - e, n ) : this.iterN( this.first, this.first + this.size, e )
      },
      insert: function ( e, t ) {
        for ( var n = 0, r = 0; r < t.length; ++r ) n += t[ r ].height;
        this.insertInner( e - this.first, t, n )
      },
      remove: function ( e, t ) {
        this.removeInner( e - this.first, t )
      },
      getValue: function ( e ) {
        var t = T( this, this.first, this.first + this.size );
        return e === !1 ? t : t.join( e || this.lineSeparator() )
      },
      setValue: pr( function ( e ) {
        var t = D( this.first, 0 ),
          n = this.first + this.size - 1;
        _o( this, {
          from: t,
          to: D( n, E( this, n ).text.length ),
          text: this.splitLines( e ),
          origin: "setValue",
          full: !0
        }, !0 ), fo( this, Dr( t ) )
      } ),
      replaceRange: function ( e, t, n, r ) {
        t = U( this, t ), n = n ? U( this, n ) : t, Ao( this, e, t, n, r )
      },
      getRange: function ( e, t, n ) {
        var r = S( this, U( this, e ), U( this, t ) );
        return n === !1 ? r : r.join( n || this.lineSeparator() )
      },
      getLine: function ( e ) {
        var t = this.getLineHandle( e );
        return t && t.text
      },
      getLineHandle: function ( e ) {
        if ( N( this, e ) ) return E( this, e )
      },
      getLineNumber: function ( e ) {
        return M( e )
      },
      getLineHandleVisualStart: function ( e ) {
        return "number" == typeof e && ( e = E( this, e ) ), le( e )
      },
      lineCount: function () {
        return this.size
      },
      firstLine: function () {
        return this.first
      },
      lastLine: function () {
        return this.first + this.size - 1
      },
      clipPos: function ( e ) {
        return U( this, e )
      },
      getCursor: function ( e ) {
        var t, n = this.sel.primary();
        return t = null == e || "head" == e ? n.head : "anchor" == e ? n.anchor : "end" == e || "to" == e || e === !1 ? n.to() : n.from()
      },
      listSelections: function () {
        return this.sel.ranges
      },
      somethingSelected: function () {
        return this.sel.somethingSelected()
      },
      setCursor: pr( function ( e, t, n ) {
        lo( this, U( this, "number" == typeof e ? D( e, t || 0 ) : e ), null, n )
      } ),
      setSelection: pr( function ( e, t, n ) {
        lo( this, U( this, e ), U( this, t || e ), n )
      } ),
      extendSelection: pr( function ( e, t, n ) {
        io( this, U( this, e ), t && U( this, t ), n )
      } ),
      extendSelections: pr( function ( e, t ) {
        ao( this, z( this, e ), t )
      } ),
      extendSelectionsBy: pr( function ( e, t ) {
        var n = g( this.sel.ranges, e );
        ao( this, z( this, n ), t )
      } ),
      setSelections: pr( function ( e, t, n ) {
        var r = this;
        if ( e.length ) {
          for ( var o = [], i = 0; i < e.length; i++ ) o[ i ] = new Nr( U( r, e[ i ].anchor ), U( r, e[ i ].head ) );
          null == t && ( t = Math.min( e.length - 1, this.sel.primIndex ) ), fo( this, Pr( o, t ), n )
        }
      } ),
      addSelection: pr( function ( e, t, n ) {
        var r = this.sel.ranges.slice( 0 );
        r.push( new Nr( U( this, e ), U( this, t || e ) ) ), fo( this, Pr( r, r.length - 1 ), n )
      } ),
      getSelection: function ( e ) {
        for ( var t, n = this, r = this.sel.ranges, o = 0; o < r.length; o++ ) {
          var i = S( n, r[ o ].from(), r[ o ].to() );
          t = t ? t.concat( i ) : i
        }
        return e === !1 ? t : t.join( e || this.lineSeparator() )
      },
      getSelections: function ( e ) {
        for ( var t = this, n = [], r = this.sel.ranges, o = 0; o < r.length; o++ ) {
          var i = S( t, r[ o ].from(), r[ o ].to() );
          e !== !1 && ( i = i.join( e || t.lineSeparator() ) ), n[ o ] = i
        }
        return n
      },
      replaceSelection: function ( e, t, n ) {
        for ( var r = [], o = 0; o < this.sel.ranges.length; o++ ) r[ o ] = e;
        this.replaceSelections( r, t, n || "+input" )
      },
      replaceSelections: pr( function ( e, t, n ) {
        for ( var r = this, o = [], i = this.sel, a = 0; a < i.ranges.length; a++ ) {
          var s = i.ranges[ a ];
          o[ a ] = {
            from: s.from(),
            to: s.to(),
            text: r.splitLines( e[ a ] ),
            origin: n
          }
        }
        for ( var l = t && "end" != t && Fr( this, o, t ), u = o.length - 1; u >= 0; u-- ) _o( r, o[ u ] );
        l ? co( this, l ) : this.cm && Qn( this.cm )
      } ),
      undo: pr( function () {
        ko( this, "undo" )
      } ),
      redo: pr( function () {
        ko( this, "redo" )
      } ),
      undoSelection: pr( function () {
        ko( this, "undo", !0 )
      } ),
      redoSelection: pr( function () {
        ko( this, "redo", !0 )
      } ),
      setExtending: function ( e ) {
        this.extend = e
      },
      getExtending: function () {
        return this.extend
      },
      historySize: function () {
        for ( var e = this.history, t = 0, n = 0, r = 0; r < e.done.length; r++ ) e.done[ r ].ranges || ++t;
        for ( var o = 0; o < e.undone.length; o++ ) e.undone[ o ].ranges || ++n;
        return {
          undo: t,
          redo: n
        }
      },
      clearHistory: function () {
        this.history = new Vr( this.history.maxGeneration )
      },
      markClean: function () {
        this.cleanGeneration = this.changeGeneration( !0 )
      },
      changeGeneration: function ( e ) {
        return e && ( this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null ), this.history.generation
      },
      isClean: function ( e ) {
        return this.history.generation == ( e || this.cleanGeneration )
      },
      getHistory: function () {
        return {
          done: ro( this.history.done ),
          undone: ro( this.history.undone )
        }
      },
      setHistory: function ( e ) {
        var t = this.history = new Vr( this.history.maxGeneration );
        t.done = ro( e.done.slice( 0 ), null, !0 ), t.undone = ro( e.undone.slice( 0 ), null, !0 )
      },
      setGutterMarker: pr( function ( e, t, n ) {
        return Po( this, e, "gutter", function ( e ) {
          var r = e.gutterMarkers || ( e.gutterMarkers = {} );
          return r[ t ] = n, !n && _( r ) && ( e.gutterMarkers = null ), !0
        } )
      } ),
      clearGutter: pr( function ( e ) {
        var t = this,
          n = this.first;
        this.iter( function ( r ) {
          r.gutterMarkers && r.gutterMarkers[ e ] && Po( t, r, "gutter", function () {
            return r.gutterMarkers[ e ] = null, _( r.gutterMarkers ) && ( r.gutterMarkers = null ), !0
          } ), ++n
        } )
      } ),
      lineInfo: function ( e ) {
        var t;
        if ( "number" == typeof e ) {
          if ( !N( this, e ) ) return null;
          if ( t = e, e = E( this, e ), !e ) return null
        } else if ( t = M( e ), null == t ) return null;
        return {
          line: t,
          handle: e,
          text: e.text,
          gutterMarkers: e.gutterMarkers,
          textClass: e.textClass,
          bgClass: e.bgClass,
          wrapClass: e.wrapClass,
          widgets: e.widgets
        }
      },
      addLineClass: pr( function ( t, n, r ) {
        return Po( this, t, "gutter" == n ? "gutter" : "class", function ( t ) {
          var o = "text" == n ? "textClass" : "background" == n ? "bgClass" : "gutter" == n ? "gutterClass" : "wrapClass";
          if ( t[ o ] ) {
            if ( e( r ).test( t[ o ] ) ) return !1;
            t[ o ] += " " + r
          } else t[ o ] = r;
          return !0
        } )
      } ),
      removeLineClass: pr( function ( t, n, r ) {
        return Po( this, t, "gutter" == n ? "gutter" : "class", function ( t ) {
          var o = "text" == n ? "textClass" : "background" == n ? "bgClass" : "gutter" == n ? "gutterClass" : "wrapClass",
            i = t[ o ];
          if ( !i ) return !1;
          if ( null == r ) t[ o ] = null;
          else {
            var a = i.match( e( r ) );
            if ( !a ) return !1;
            var s = a.index + a[ 0 ].length;
            t[ o ] = i.slice( 0, a.index ) + ( a.index && s != i.length ? " " : "" ) + i.slice( s ) || null
          }
          return !0
        } )
      } ),
      addLineWidget: pr( function ( e, t, n ) {
        return jo( this, e, t, n )
      } ),
      removeLineWidget: function ( e ) {
        e.clear()
      },
      markText: function ( e, t, n ) {
        return Uo( this, U( this, e ), U( this, t ), n, n && n.type || "range" )
      },
      setBookmark: function ( e, t ) {
        var n = {
          replacedWith: t && ( null == t.nodeType ? t.widget : t ),
          insertLeft: t && t.insertLeft,
          clearWhenEmpty: !1,
          shared: t && t.shared,
          handleMouseEvents: t && t.handleMouseEvents
        };
        return e = U( this, e ), Uo( this, e, e, n, "bookmark" )
      },
      findMarksAt: function ( e ) {
        e = U( this, e );
        var t = [],
          n = E( this, e.line ).markedSpans;
        if ( n )
          for ( var r = 0; r < n.length; ++r ) {
            var o = n[ r ];
            ( null == o.from || o.from <= e.ch ) && ( null == o.to || o.to >= e.ch ) && t.push( o.marker.parent || o.marker )
          }
        return t
      },
      findMarks: function ( e, t, n ) {
        e = U( this, e ), t = U( this, t );
        var r = [],
          o = e.line;
        return this.iter( e.line, t.line + 1, function ( i ) {
          var a = i.markedSpans;
          if ( a )
            for ( var s = 0; s < a.length; s++ ) {
              var l = a[ s ];
              null != l.to && o == e.line && e.ch >= l.to || null == l.from && o != e.line || null != l.from && o == t.line && l.from >= t.ch || n && !n( l.marker ) || r.push( l.marker.parent || l.marker )
            }++o
        } ), r
      },
      getAllMarks: function () {
        var e = [];
        return this.iter( function ( t ) {
          var n = t.markedSpans;
          if ( n )
            for ( var r = 0; r < n.length; ++r ) null != n[ r ].from && e.push( n[ r ].marker )
        } ), e
      },
      posFromIndex: function ( e ) {
        var t, n = this.first,
          r = this.lineSeparator().length;
        return this.iter( function ( o ) {
          var i = o.text.length + r;
          return i > e ? ( t = e, !0 ) : ( e -= i, void++n )
        } ), U( this, D( n, t ) )
      },
      indexFromPos: function ( e ) {
        e = U( this, e );
        var t = e.ch;
        if ( e.line < this.first || e.ch < 0 ) return 0;
        var n = this.lineSeparator().length;
        return this.iter( this.first, e.line, function ( e ) {
          t += e.text.length + n
        } ), t
      },
      copy: function ( e ) {
        var t = new ls( T( this, this.first, this.first + this.size ), this.modeOption, this.first, this.lineSep );
        return t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, t.sel = this.sel, t.extend = !1, e && ( t.history.undoDepth = this.history.undoDepth, t.setHistory( this.getHistory() ) ), t
      },
      linkedDoc: function ( e ) {
        e || ( e = {} );
        var t = this.first,
          n = this.first + this.size;
        null != e.from && e.from > t && ( t = e.from ), null != e.to && e.to < n && ( n = e.to );
        var r = new ls( T( this, t, n ), e.mode || this.modeOption, t, this.lineSep );
        return e.sharedHist && ( r.history = this.history ), ( this.linked || ( this.linked = [] ) ).push( {
          doc: r,
          sharedHist: e.sharedHist
        } ), r.linked = [ {
          doc: this,
          isParent: !0,
          sharedHist: e.sharedHist
        } ], Ho( r, qo( this ) ), r
      },
      unlinkDoc: function ( e ) {
        var t = this;
        if ( e instanceof Ni && ( e = e.doc ), this.linked )
          for ( var n = 0; n < this.linked.length; ++n ) {
            var r = t.linked[ n ];
            if ( r.doc == e ) {
              t.linked.splice( n, 1 ), e.unlinkDoc( t ), Wo( qo( t ) );
              break
            }
          }
        if ( e.history == this.history ) {
          var o = [ e.id ];
          Hr( e, function ( e ) {
            return o.push( e.id )
          }, !0 ), e.history = new Vr( null ), e.history.done = ro( this.history.done, o ), e.history.undone = ro( this.history.undone, o )
        }
      },
      iterLinkedDocs: function ( e ) {
        Hr( this, e )
      },
      getMode: function () {
        return this.mode
      },
      getEditor: function () {
        return this.cm
      },
      splitLines: function ( e ) {
        return this.lineSep ? e.split( this.lineSep ) : Ua( e )
      },
      lineSeparator: function () {
        return this.lineSep || "\n"
      }
    } ), ls.prototype.eachLine = ls.prototype.iter;
    for ( var us = 0, cs = !1, fs = {
        3: "Enter",
        8: "Backspace",
        9: "Tab",
        13: "Enter",
        16: "Shift",
        17: "Ctrl",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Esc",
        32: "Space",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "Left",
        38: "Up",
        39: "Right",
        40: "Down",
        44: "PrintScrn",
        45: "Insert",
        46: "Delete",
        59: ";",
        61: "=",
        91: "Mod",
        92: "Mod",
        93: "Mod",
        106: "*",
        107: "=",
        109: "-",
        110: ".",
        111: "/",
        127: "Delete",
        173: "-",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'",
        63232: "Up",
        63233: "Down",
        63234: "Left",
        63235: "Right",
        63272: "Delete",
        63273: "Home",
        63275: "End",
        63276: "PageUp",
        63277: "PageDown",
        63302: "Insert"
      }, ps = 0; ps < 10; ps++ ) fs[ ps + 48 ] = fs[ ps + 96 ] = String( ps );
    for ( var ds = 65; ds <= 90; ds++ ) fs[ ds ] = String.fromCharCode( ds );
    for ( var hs = 1; hs <= 12; hs++ ) fs[ hs + 111 ] = fs[ hs + 63235 ] = "F" + hs;
    var vs = {};
    vs.basic = {
      Left: "goCharLeft",
      Right: "goCharRight",
      Up: "goLineUp",
      Down: "goLineDown",
      End: "goLineEnd",
      Home: "goLineStartSmart",
      PageUp: "goPageUp",
      PageDown: "goPageDown",
      Delete: "delCharAfter",
      Backspace: "delCharBefore",
      "Shift-Backspace": "delCharBefore",
      Tab: "defaultTab",
      "Shift-Tab": "indentAuto",
      Enter: "newlineAndIndent",
      Insert: "toggleOverwrite",
      Esc: "singleSelection"
    }, vs.pcDefault = {
      "Ctrl-A": "selectAll",
      "Ctrl-D": "deleteLine",
      "Ctrl-Z": "undo",
      "Shift-Ctrl-Z": "redo",
      "Ctrl-Y": "redo",
      "Ctrl-Home": "goDocStart",
      "Ctrl-End": "goDocEnd",
      "Ctrl-Up": "goLineUp",
      "Ctrl-Down": "goLineDown",
      "Ctrl-Left": "goGroupLeft",
      "Ctrl-Right": "goGroupRight",
      "Alt-Left": "goLineStart",
      "Alt-Right": "goLineEnd",
      "Ctrl-Backspace": "delGroupBefore",
      "Ctrl-Delete": "delGroupAfter",
      "Ctrl-S": "save",
      "Ctrl-F": "find",
      "Ctrl-G": "findNext",
      "Shift-Ctrl-G": "findPrev",
      "Shift-Ctrl-F": "replace",
      "Shift-Ctrl-R": "replaceAll",
      "Ctrl-[": "indentLess",
      "Ctrl-]": "indentMore",
      "Ctrl-U": "undoSelection",
      "Shift-Ctrl-U": "redoSelection",
      "Alt-U": "redoSelection",
      fallthrough: "basic"
    }, vs.emacsy = {
      "Ctrl-F": "goCharRight",
      "Ctrl-B": "goCharLeft",
      "Ctrl-P": "goLineUp",
      "Ctrl-N": "goLineDown",
      "Alt-F": "goWordRight",
      "Alt-B": "goWordLeft",
      "Ctrl-A": "goLineStart",
      "Ctrl-E": "goLineEnd",
      "Ctrl-V": "goPageDown",
      "Shift-Ctrl-V": "goPageUp",
      "Ctrl-D": "delCharAfter",
      "Ctrl-H": "delCharBefore",
      "Alt-D": "delWordAfter",
      "Alt-Backspace": "delWordBefore",
      "Ctrl-K": "killLine",
      "Ctrl-T": "transposeChars",
      "Ctrl-O": "openLine"
    }, vs.macDefault = {
      "Cmd-A": "selectAll",
      "Cmd-D": "deleteLine",
      "Cmd-Z": "undo",
      "Shift-Cmd-Z": "redo",
      "Cmd-Y": "redo",
      "Cmd-Home": "goDocStart",
      "Cmd-Up": "goDocStart",
      "Cmd-End": "goDocEnd",
      "Cmd-Down": "goDocEnd",
      "Alt-Left": "goGroupLeft",
      "Alt-Right": "goGroupRight",
      "Cmd-Left": "goLineLeft",
      "Cmd-Right": "goLineRight",
      "Alt-Backspace": "delGroupBefore",
      "Ctrl-Alt-Backspace": "delGroupAfter",
      "Alt-Delete": "delGroupAfter",
      "Cmd-S": "save",
      "Cmd-F": "find",
      "Cmd-G": "findNext",
      "Shift-Cmd-G": "findPrev",
      "Cmd-Alt-F": "replace",
      "Shift-Cmd-Alt-F": "replaceAll",
      "Cmd-[": "indentLess",
      "Cmd-]": "indentMore",
      "Cmd-Backspace": "delWrappedLineLeft",
      "Cmd-Delete": "delWrappedLineRight",
      "Cmd-U": "undoSelection",
      "Shift-Cmd-U": "redoSelection",
      "Ctrl-Up": "goDocStart",
      "Ctrl-Down": "goDocEnd",
      fallthrough: [ "basic", "emacsy" ]
    }, vs.default = da ? vs.macDefault : vs.pcDefault;
    var gs, ms, ys = {
        selectAll: xo,
        singleSelection: function ( e ) {
          return e.setSelection( e.getCursor( "anchor" ), e.getCursor( "head" ), Sa )
        },
        killLine: function ( e ) {
          return ii( e, function ( t ) {
            if ( t.empty() ) {
              var n = E( e.doc, t.head.line ).text.length;
              return t.head.ch == n && t.head.line < e.lastLine() ? {
                from: t.head,
                to: D( t.head.line + 1, 0 )
              } : {
                from: t.head,
                to: D( t.head.line, n )
              }
            }
            return {
              from: t.from(),
              to: t.to()
            }
          } )
        },
        deleteLine: function ( e ) {
          return ii( e, function ( t ) {
            return {
              from: D( t.from().line, 0 ),
              to: U( e.doc, D( t.to().line + 1, 0 ) )
            }
          } )
        },
        delLineLeft: function ( e ) {
          return ii( e, function ( e ) {
            return {
              from: D( e.from().line, 0 ),
              to: e.from()
            }
          } )
        },
        delWrappedLineLeft: function ( e ) {
          return ii( e, function ( t ) {
            var n = e.charCoords( t.head, "div" ).top + 5,
              r = e.coordsChar( {
                left: 0,
                top: n
              }, "div" );
            return {
              from: r,
              to: t.from()
            }
          } )
        },
        delWrappedLineRight: function ( e ) {
          return ii( e, function ( t ) {
            var n = e.charCoords( t.head, "div" ).top + 5,
              r = e.coordsChar( {
                left: e.display.lineDiv.offsetWidth + 100,
                top: n
              }, "div" );
            return {
              from: t.from(),
              to: r
            }
          } )
        },
        undo: function ( e ) {
          return e.undo()
        },
        redo: function ( e ) {
          return e.redo()
        },
        undoSelection: function ( e ) {
          return e.undoSelection()
        },
        redoSelection: function ( e ) {
          return e.redoSelection()
        },
        goDocStart: function ( e ) {
          return e.extendSelection( D( e.firstLine(), 0 ) )
        },
        goDocEnd: function ( e ) {
          return e.extendSelection( D( e.lastLine() ) )
        },
        goLineStart: function ( e ) {
          return e.extendSelectionsBy( function ( t ) {
            return ai( e, t.head.line )
          }, {
            origin: "+move",
            bias: 1
          } )
        },
        goLineStartSmart: function ( e ) {
          return e.extendSelectionsBy( function ( t ) {
            return li( e, t.head )
          }, {
            origin: "+move",
            bias: 1
          } )
        },
        goLineEnd: function ( e ) {
          return e.extendSelectionsBy( function ( t ) {
            return si( e, t.head.line )
          }, {
            origin: "+move",
            bias: -1
          } )
        },
        goLineRight: function ( e ) {
          return e.extendSelectionsBy( function ( t ) {
            var n = e.charCoords( t.head, "div" ).top + 5;
            return e.coordsChar( {
              left: e.display.lineDiv.offsetWidth + 100,
              top: n
            }, "div" )
          }, Aa )
        },
        goLineLeft: function ( e ) {
          return e.extendSelectionsBy( function ( t ) {
            var n = e.charCoords( t.head, "div" ).top + 5;
            return e.coordsChar( {
              left: 0,
              top: n
            }, "div" )
          }, Aa )
        },
        goLineLeftSmart: function ( e ) {
          return e.extendSelectionsBy( function ( t ) {
            var n = e.charCoords( t.head, "div" ).top + 5,
              r = e.coordsChar( {
                left: 0,
                top: n
              }, "div" );
            return r.ch < e.getLine( r.line ).search( /\S/ ) ? li( e, t.head ) : r
          }, Aa )
        },
        goLineUp: function ( e ) {
          return e.moveV( -1, "line" )
        },
        goLineDown: function ( e ) {
          return e.moveV( 1, "line" )
        },
        goPageUp: function ( e ) {
          return e.moveV( -1, "page" )
        },
        goPageDown: function ( e ) {
          return e.moveV( 1, "page" )
        },
        goCharLeft: function ( e ) {
          return e.moveH( -1, "char" )
        },
        goCharRight: function ( e ) {
          return e.moveH( 1, "char" )
        },
        goColumnLeft: function ( e ) {
          return e.moveH( -1, "column" )
        },
        goColumnRight: function ( e ) {
          return e.moveH( 1, "column" )
        },
        goWordLeft: function ( e ) {
          return e.moveH( -1, "word" )
        },
        goGroupRight: function ( e ) {
          return e.moveH( 1, "group" )
        },
        goGroupLeft: function ( e ) {
          return e.moveH( -1, "group" )
        },
        goWordRight: function ( e ) {
          return e.moveH( 1, "word" )
        },
        delCharBefore: function ( e ) {
          return e.deleteH( -1, "char" )
        },
        delCharAfter: function ( e ) {
          return e.deleteH( 1, "char" )
        },
        delWordBefore: function ( e ) {
          return e.deleteH( -1, "word" )
        },
        delWordAfter: function ( e ) {
          return e.deleteH( 1, "word" )
        },
        delGroupBefore: function ( e ) {
          return e.deleteH( -1, "group" )
        },
        delGroupAfter: function ( e ) {
          return e.deleteH( 1, "group" )
        },
        indentAuto: function ( e ) {
          return e.indentSelection( "smart" )
        },
        indentMore: function ( e ) {
          return e.indentSelection( "add" )
        },
        indentLess: function ( e ) {
          return e.indentSelection( "subtract" )
        },
        insertTab: function ( e ) {
          return e.replaceSelection( "\t" )
        },
        insertSoftTab: function ( e ) {
          for ( var t = [], n = e.listSelections(), r = e.options.tabSize, o = 0; o < n.length; o++ ) {
            var i = n[ o ].from(),
              a = c( e.getLine( i.line ), i.ch, r );
            t.push( h( r - a % r ) )
          }
          e.replaceSelections( t )
        },
        defaultTab: function ( e ) {
          e.somethingSelected() ? e.indentSelection( "add" ) : e.execCommand( "insertTab" )
        },
        transposeChars: function ( e ) {
          return ur( e, function () {
            for ( var t = e.listSelections(), n = [], r = 0; r < t.length; r++ )
              if ( t[ r ].empty() ) {
                var o = t[ r ].head,
                  i = E( e.doc, o.line ).text;
                if ( i )
                  if ( o.ch == i.length && ( o = new D( o.line, o.ch - 1 ) ), o.ch > 0 ) o = new D( o.line, o.ch + 1 ), e.replaceRange( i.charAt( o.ch - 1 ) + i.charAt( o.ch - 2 ), D( o.line, o.ch - 2 ), o, "+transpose" );
                  else if ( o.line > e.doc.first ) {
                  var a = E( e.doc, o.line - 1 ).text;
                  a && ( o = new D( o.line, 1 ), e.replaceRange( i.charAt( 0 ) + e.doc.lineSeparator() + a.charAt( a.length - 1 ), D( o.line - 1, a.length - 1 ), o, "+transpose" ) )
                }
                n.push( new Nr( o, o ) )
              } e.setSelections( n )
          } )
        },
        newlineAndIndent: function ( e ) {
          return ur( e, function () {
            for ( var t = e.listSelections(), n = t.length - 1; n >= 0; n-- ) e.replaceRange( e.doc.lineSeparator(), t[ n ].anchor, t[ n ].head, "+input" );
            t = e.listSelections();
            for ( var r = 0; r < t.length; r++ ) e.indentLine( t[ r ].from().line, null, !0 );
            Qn( e )
          } )
        },
        openLine: function ( e ) {
          return e.replaceSelection( "\n", "start" )
        },
        toggleOverwrite: function ( e ) {
          return e.toggleOverwrite()
        }
      },
      bs = new f,
      xs = null,
      ws = {
        toString: function () {
          return "CodeMirror.Init"
        }
      },
      _s = {},
      Cs = {};
    Ni.defaults = _s, Ni.optionHandlers = Cs;
    var ks = [];
    Ni.defineInitHook = function ( e ) {
      return ks.push( e )
    };
    var Es = null,
      Ss = function ( e ) {
        this.cm = e, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new f, this.composing = null, this.gracePeriod = !1, this.readDOMTimeout = null
      };
    Ss.prototype.init = function ( e ) {
      function t( e ) {
        if ( !Ne( o, e ) ) {
          if ( o.somethingSelected() ) Li( {
            lineWise: !1,
            text: o.getSelections()
          } ), "cut" == e.type && o.replaceSelection( "", null, "cut" );
          else {
            if ( !o.options.lineWiseCopyCut ) return;
            var t = Fi( o );
            Li( {
              lineWise: !0,
              text: t.text
            } ), "cut" == e.type && o.operation( function () {
              o.setSelections( t.ranges, 0, Sa ), o.replaceSelection( "", null, "cut" )
            } )
          }
          if ( e.clipboardData ) {
            e.clipboardData.clearData();
            var n = Es.text.join( "\n" );
            if ( e.clipboardData.setData( "Text", n ), e.clipboardData.getData( "Text" ) == n ) return void e.preventDefault()
          }
          var a = Bi(),
            s = a.firstChild;
          o.display.lineSpace.insertBefore( a, o.display.lineSpace.firstChild ), s.value = Es.text.join( "\n" );
          var l = document.activeElement;
          wa( s ), setTimeout( function () {
            o.display.lineSpace.removeChild( a ), l.focus(), l == i && r.showPrimarySelection()
          }, 50 )
        }
      }
      var n = this,
        r = this,
        o = r.cm,
        i = r.div = e.lineDiv;
      Ui( i, o.options.spellcheck ), ja( i, "paste", function ( e ) {
        Ne( o, e ) || Ri( e, o ) || ra <= 11 && setTimeout( cr( o, function () {
          r.pollContent() || dr( o )
        } ), 20 )
      } ), ja( i, "compositionstart", function ( e ) {
        n.composing = {
          data: e.data,
          done: !1
        }
      } ), ja( i, "compositionupdate", function ( e ) {
        n.composing || ( n.composing = {
          data: e.data,
          done: !1
        } )
      } ), ja( i, "compositionend", function ( e ) {
        n.composing && ( e.data != n.composing.data && n.readFromDOMSoon(), n.composing.done = !0 )
      } ), ja( i, "touchstart", function () {
        return r.forceCompositionEnd()
      } ), ja( i, "input", function () {
        n.composing || n.readFromDOMSoon()
      } ), ja( i, "copy", t ), ja( i, "cut", t )
    }, Ss.prototype.prepareSelection = function () {
      var e = Sn( this.cm, !1 );
      return e.focus = this.cm.state.focused, e
    }, Ss.prototype.showSelection = function ( e, t ) {
      e && this.cm.display.view.length && ( ( e.focus || t ) && this.showPrimarySelection(), this.showMultipleSelections( e ) )
    }, Ss.prototype.showPrimarySelection = function () {
      var e = window.getSelection(),
        t = this.cm.doc.sel.primary(),
        n = Yi( this.cm, e.anchorNode, e.anchorOffset ),
        r = Yi( this.cm, e.focusNode, e.focusOffset );
      if ( !n || n.bad || !r || r.bad || 0 != L( j( n, r ), t.from() ) || 0 != L( R( n, r ), t.to() ) ) {
        var o = Wi( this.cm, t.from() ),
          i = Wi( this.cm, t.to() );
        if ( o || i ) {
          var a = this.cm.display.view,
            s = e.rangeCount && e.getRangeAt( 0 );
          if ( o ) {
            if ( !i ) {
              var l = a[ a.length - 1 ].measure,
                u = l.maps ? l.maps[ l.maps.length - 1 ] : l.map;
              i = {
                node: u[ u.length - 1 ],
                offset: u[ u.length - 2 ] - u[ u.length - 3 ]
              }
            }
          } else o = {
            node: a[ 0 ].measure.map[ 2 ],
            offset: 0
          };
          var c;
          try {
            c = ma( o.node, o.offset, i.offset, i.node )
          } catch ( e ) {}
          c && ( !Qi && this.cm.state.focused ? ( e.collapse( o.node, o.offset ), c.collapsed || ( e.removeAllRanges(), e.addRange( c ) ) ) : ( e.removeAllRanges(), e.addRange( c ) ), s && null == e.anchorNode ? e.addRange( s ) : Qi && this.startGracePeriod() ), this.rememberSelection()
        }
      }
    }, Ss.prototype.startGracePeriod = function () {
      var e = this;
      clearTimeout( this.gracePeriod ), this.gracePeriod = setTimeout( function () {
        e.gracePeriod = !1, e.selectionChanged() && e.cm.operation( function () {
          return e.cm.curOp.selectionChanged = !0
        } )
      }, 20 )
    }, Ss.prototype.showMultipleSelections = function ( e ) {
      n( this.cm.display.cursorDiv, e.cursors ), n( this.cm.display.selectionDiv, e.selection )
    }, Ss.prototype.rememberSelection = function () {
      var e = window.getSelection();
      this.lastAnchorNode = e.anchorNode, this.lastAnchorOffset = e.anchorOffset, this.lastFocusNode = e.focusNode, this.lastFocusOffset = e.focusOffset
    }, Ss.prototype.selectionInEditor = function () {
      var e = window.getSelection();
      if ( !e.rangeCount ) return !1;
      var t = e.getRangeAt( 0 ).commonAncestorContainer;
      return o( this.div, t )
    }, Ss.prototype.focus = function () {
      "nocursor" != this.cm.options.readOnly && ( this.selectionInEditor() || this.showSelection( this.prepareSelection(), !0 ), this.div.focus() )
    }, Ss.prototype.blur = function () {
      this.div.blur()
    }, Ss.prototype.getField = function () {
      return this.div
    }, Ss.prototype.supportsTouch = function () {
      return !0
    }, Ss.prototype.receivedFocus = function () {
      function e() {
        t.cm.state.focused && ( t.pollSelection(), t.polling.set( t.cm.options.pollInterval, e ) )
      }
      var t = this;
      this.selectionInEditor() ? this.pollSelection() : ur( this.cm, function () {
        return t.cm.curOp.selectionChanged = !0
      } ), this.polling.set( this.cm.options.pollInterval, e )
    }, Ss.prototype.selectionChanged = function () {
      var e = window.getSelection();
      return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset
    }, Ss.prototype.pollSelection = function () {
      if ( !this.composing && null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged() ) {
        var e = window.getSelection(),
          t = this.cm;
        this.rememberSelection();
        var n = Yi( t, e.anchorNode, e.anchorOffset ),
          r = Yi( t, e.focusNode, e.focusOffset );
        n && r && ur( t, function () {
          fo( t.doc, Dr( n, r ), Sa ), ( n.bad || r.bad ) && ( t.curOp.selectionChanged = !0 )
        } )
      }
    }, Ss.prototype.pollContent = function () {
      null != this.readDOMTimeout && ( clearTimeout( this.readDOMTimeout ), this.readDOMTimeout = null );
      var e = this.cm,
        t = e.display,
        n = e.doc.sel.primary(),
        r = n.from(),
        o = n.to();
      if ( 0 == r.ch && r.line > e.firstLine() && ( r = D( r.line - 1, E( e.doc, r.line - 1 ).length ) ), o.ch == E( e.doc, o.line ).text.length && o.line < e.lastLine() && ( o = D( o.line + 1, 0 ) ), r.line < t.viewFrom || o.line > t.viewTo - 1 ) return !1;
      var i, a, s;
      r.line == t.viewFrom || 0 == ( i = kn( e, r.line ) ) ? ( a = M( t.view[ 0 ].line ), s = t.view[ 0 ].node ) : ( a = M( t.view[ i ].line ), s = t.view[ i - 1 ].node.nextSibling );
      var l, u, c = kn( e, o.line );
      if ( c == t.view.length - 1 ? ( l = t.viewTo - 1, u = t.lineDiv.lastChild ) : ( l = M( t.view[ c + 1 ].line ) - 1, u = t.view[ c + 1 ].node.previousSibling ), !s ) return !1;
      for ( var f = e.doc.splitLines( Gi( e, s, u, a, l ) ), p = S( e.doc, D( a, 0 ), D( l, E( e.doc, l ).text.length ) ); f.length > 1 && p.length > 1; )
        if ( v( f ) == v( p ) ) f.pop(), p.pop(), l--;
        else {
          if ( f[ 0 ] != p[ 0 ] ) break;
          f.shift(), p.shift(), a++
        } for ( var d = 0, h = 0, g = f[ 0 ], m = p[ 0 ], y = Math.min( g.length, m.length ); d < y && g.charCodeAt( d ) == m.charCodeAt( d ); ) ++d;
      for ( var b = v( f ), x = v( p ), w = Math.min( b.length - ( 1 == f.length ? d : 0 ), x.length - ( 1 == p.length ? d : 0 ) ); h < w && b.charCodeAt( b.length - h - 1 ) == x.charCodeAt( x.length - h - 1 ); ) ++h;
      f[ f.length - 1 ] = b.slice( 0, b.length - h ).replace( /^\u200b+/, "" ), f[ 0 ] = f[ 0 ].slice( d ).replace( /\u200b+$/, "" );
      var _ = D( a, d ),
        C = D( l, p.length ? v( p ).length - h : 0 );
      return f.length > 1 || f[ 0 ] || L( _, C ) ? ( Ao( e.doc, f, _, C, "+input" ), !0 ) : void 0
    }, Ss.prototype.ensurePolled = function () {
      this.forceCompositionEnd()
    }, Ss.prototype.reset = function () {
      this.forceCompositionEnd()
    }, Ss.prototype.forceCompositionEnd = function () {
      this.composing && ( clearTimeout( this.readDOMTimeout ), this.composing = null, this.pollContent() || dr( this.cm ), this.div.blur(), this.div.focus() )
    }, Ss.prototype.readFromDOMSoon = function () {
      var e = this;
      null == this.readDOMTimeout && ( this.readDOMTimeout = setTimeout( function () {
        if ( e.readDOMTimeout = null, e.composing ) {
          if ( !e.composing.done ) return;
          e.composing = null
        }!e.cm.isReadOnly() && e.pollContent() || ur( e.cm, function () {
          return dr( e.cm )
        } )
      }, 80 ) )
    }, Ss.prototype.setUneditable = function ( e ) {
      e.contentEditable = "false"
    }, Ss.prototype.onKeyPress = function ( e ) {
      e.preventDefault(), this.cm.isReadOnly() || cr( this.cm, Ii )( this.cm, String.fromCharCode( null == e.charCode ? e.keyCode : e.charCode ), 0 )
    }, Ss.prototype.readOnlyChanged = function ( e ) {
      this.div.contentEditable = String( "nocursor" != e )
    }, Ss.prototype.onContextMenu = function () {}, Ss.prototype.resetPosition = function () {}, Ss.prototype.needsContentAttribute = !0;
    var Ts = function ( e ) {
      this.cm = e, this.prevInput = "", this.pollingFast = !1, this.polling = new f, this.inaccurateSelection = !1, this.hasSelection = !1, this.composing = null
    };
    Ts.prototype.init = function ( e ) {
      function t( e ) {
        if ( !Ne( o, e ) ) {
          if ( o.somethingSelected() ) Li( {
            lineWise: !1,
            text: o.getSelections()
          } ), r.inaccurateSelection && ( r.prevInput = "", r.inaccurateSelection = !1, a.value = Es.text.join( "\n" ), wa( a ) );
          else {
            if ( !o.options.lineWiseCopyCut ) return;
            var t = Fi( o );
            Li( {
              lineWise: !0,
              text: t.text
            } ), "cut" == e.type ? o.setSelections( t.ranges, null, Sa ) : ( r.prevInput = "", a.value = t.text.join( "\n" ), wa( a ) )
          }
          "cut" == e.type && ( o.state.cutIncoming = !0 )
        }
      }
      var n = this,
        r = this,
        o = this.cm,
        i = this.wrapper = Bi(),
        a = this.textarea = i.firstChild;
      e.wrapper.insertBefore( i, e.wrapper.firstChild ), fa && ( a.style.width = "0px" ), ja( a, "input", function () {
        na && ra >= 9 && n.hasSelection && ( n.hasSelection = null ), r.poll()
      } ), ja( a, "paste", function ( e ) {
        Ne( o, e ) || Ri( e, o ) || ( o.state.pasteIncoming = !0, r.fastPoll() )
      } ), ja( a, "cut", t ), ja( a, "copy", t ), ja( e.scroller, "paste", function ( t ) {
        Ut( e, t ) || Ne( o, t ) || ( o.state.pasteIncoming = !0, r.focus() )
      } ), ja( e.lineSpace, "selectstart", function ( t ) {
        Ut( e, t ) || Ie( t )
      } ), ja( a, "compositionstart", function () {
        var e = o.getCursor( "from" );
        r.composing && r.composing.range.clear(), r.composing = {
          start: e,
          range: o.markText( e, o.getCursor( "to" ), {
            className: "CodeMirror-composing"
          } )
        }
      } ), ja( a, "compositionend", function () {
        r.composing && ( r.poll(), r.composing.range.clear(), r.composing = null )
      } )
    }, Ts.prototype.prepareSelection = function () {
      var e = this.cm,
        t = e.display,
        n = e.doc,
        r = Sn( e );
      if ( e.options.moveInputWithCursor ) {
        var o = pn( e, n.sel.primary().head, "div" ),
          i = t.wrapper.getBoundingClientRect(),
          a = t.lineDiv.getBoundingClientRect();
        r.teTop = Math.max( 0, Math.min( t.wrapper.clientHeight - 10, o.top + a.top - i.top ) ), r.teLeft = Math.max( 0, Math.min( t.wrapper.clientWidth - 10, o.left + a.left - i.left ) )
      }
      return r
    }, Ts.prototype.showSelection = function ( e ) {
      var t = this.cm,
        r = t.display;
      n( r.cursorDiv, e.cursors ), n( r.selectionDiv, e.selection ), null != e.teTop && ( this.wrapper.style.top = e.teTop + "px", this.wrapper.style.left = e.teLeft + "px" )
    }, Ts.prototype.reset = function ( e ) {
      if ( !this.contextMenuPending ) {
        var t, n, r = this.cm,
          o = r.doc;
        if ( r.somethingSelected() ) {
          this.prevInput = "";
          var i = o.sel.primary();
          t = za && ( i.to().line - i.from().line > 100 || ( n = r.getSelection() ).length > 1e3 );
          var a = t ? "-" : n || r.getSelection();
          this.textarea.value = a, r.state.focused && wa( this.textarea ), na && ra >= 9 && ( this.hasSelection = a )
        } else e || ( this.prevInput = this.textarea.value = "", na && ra >= 9 && ( this.hasSelection = null ) );
        this.inaccurateSelection = t
      }
    }, Ts.prototype.getField = function () {
      return this.textarea
    }, Ts.prototype.supportsTouch = function () {
      return !1
    }, Ts.prototype.focus = function () {
      if ( "nocursor" != this.cm.options.readOnly && ( !pa || i() != this.textarea ) ) try {
        this.textarea.focus()
      } catch ( e ) {}
    }, Ts.prototype.blur = function () {
      this.textarea.blur()
    }, Ts.prototype.resetPosition = function () {
      this.wrapper.style.top = this.wrapper.style.left = 0
    }, Ts.prototype.receivedFocus = function () {
      this.slowPoll()
    }, Ts.prototype.slowPoll = function () {
      var e = this;
      this.pollingFast || this.polling.set( this.cm.options.pollInterval, function () {
        e.poll(), e.cm.state.focused && e.slowPoll()
      } )
    }, Ts.prototype.fastPoll = function () {
      function e() {
        var r = n.poll();
        r || t ? ( n.pollingFast = !1, n.slowPoll() ) : ( t = !0, n.polling.set( 60, e ) )
      }
      var t = !1,
        n = this;
      n.pollingFast = !0, n.polling.set( 20, e )
    }, Ts.prototype.poll = function () {
      var e = this,
        t = this.cm,
        n = this.textarea,
        r = this.prevInput;
      if ( this.contextMenuPending || !t.state.focused || Ba( n ) && !r && !this.composing || t.isReadOnly() || t.options.disableInput || t.state.keySeq ) return !1;
      var o = n.value;
      if ( o == r && !t.somethingSelected() ) return !1;
      if ( na && ra >= 9 && this.hasSelection === o || da && /[\uf700-\uf7ff]/.test( o ) ) return t.display.input.reset(), !1;
      if ( t.doc.sel == t.display.selForContextMenu ) {
        var i = o.charCodeAt( 0 );
        if ( 8203 != i || r || ( r = "​" ), 8666 == i ) return this.reset(), this.cm.execCommand( "undo" )
      }
      for ( var a = 0, s = Math.min( r.length, o.length ); a < s && r.charCodeAt( a ) == o.charCodeAt( a ); ) ++a;
      return ur( t, function () {
        Ii( t, o.slice( a ), r.length - a, null, e.composing ? "*compose" : null ), o.length > 1e3 || o.indexOf( "\n" ) > -1 ? n.value = e.prevInput = "" : e.prevInput = o, e.composing && ( e.composing.range.clear(), e.composing.range = t.markText( e.composing.start, t.getCursor( "to" ), {
          className: "CodeMirror-composing"
        } ) )
      } ), !0
    }, Ts.prototype.ensurePolled = function () {
      this.pollingFast && this.poll() && ( this.pollingFast = !1 )
    }, Ts.prototype.onKeyPress = function () {
      na && ra >= 9 && ( this.hasSelection = null ), this.fastPoll()
    }, Ts.prototype.onContextMenu = function ( e ) {
      function t() {
        if ( null != a.selectionStart ) {
          var e = o.somethingSelected(),
            t = "​" + ( e ? a.value : "" );
          a.value = "⇚", a.value = t, r.prevInput = e ? "" : "​", a.selectionStart = 1, a.selectionEnd = t.length, i.selForContextMenu = o.doc.sel
        }
      }

      function n() {
        if ( r.contextMenuPending = !1, r.wrapper.style.cssText = f, a.style.cssText = c, na && ra < 9 && i.scrollbars.setScrollTop( i.scroller.scrollTop = l ), null != a.selectionStart ) {
          ( !na || na && ra < 9 ) && t();
          var e = 0,
            n = function () {
              i.selForContextMenu == o.doc.sel && 0 == a.selectionStart && a.selectionEnd > 0 && "​" == r.prevInput ? cr( o, xo )( o ) : e++ < 10 ? i.detectingSelectAll = setTimeout( n, 500 ) : i.input.reset()
            };
          i.detectingSelectAll = setTimeout( n, 200 )
        }
      }
      var r = this,
        o = r.cm,
        i = o.display,
        a = r.textarea,
        s = Cn( o, e ),
        l = i.scroller.scrollTop;
      if ( s && !sa ) {
        var u = o.options.resetSelectionOnContextMenu;
        u && o.doc.sel.contains( s ) == -1 && cr( o, fo )( o.doc, Dr( s ), Sa );
        var c = a.style.cssText,
          f = r.wrapper.style.cssText;
        r.wrapper.style.cssText = "position: absolute";
        var p = r.wrapper.getBoundingClientRect();
        a.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + ( e.clientY - p.top - 5 ) + "px; left: " + ( e.clientX - p.left - 5 ) + "px;\n      z-index: 1000; background: " + ( na ? "rgba(255, 255, 255, .05)" : "transparent" ) + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
        var d;
        if ( oa && ( d = window.scrollY ), i.input.focus(), oa && window.scrollTo( null, d ), i.input.reset(), o.somethingSelected() || ( a.value = r.prevInput = " " ), r.contextMenuPending = !0, i.selForContextMenu = o.doc.sel, clearTimeout( i.detectingSelectAll ), na && ra >= 9 && t(), ba ) {
          Fe( e );
          var h = function () {
            Me( window, "mouseup", h ), setTimeout( n, 20 )
          };
          ja( window, "mouseup", h )
        } else setTimeout( n, 50 )
      }
    }, Ts.prototype.readOnlyChanged = function ( e ) {
      e || this.reset()
    }, Ts.prototype.setUneditable = function () {}, Ts.prototype.needsContentAttribute = !1, Ti( Ni ), zi( Ni );
    var As = "iter insert remove copy getEditor constructor".split( " " );
    for ( var Ms in ls.prototype ) ls.prototype.hasOwnProperty( Ms ) && p( As, Ms ) < 0 && ( Ni.prototype[ Ms ] = function ( e ) {
      return function () {
        return e.apply( this.doc, arguments )
      }
    }( ls.prototype[ Ms ] ) );
    return Le( ls ), Ni.inputStyles = {
      textarea: Ts,
      contenteditable: Ss
    }, Ni.defineMode = function ( e ) {
      Ni.defaults.mode || "null" == e || ( Ni.defaults.mode = e ), We.apply( this, arguments )
    }, Ni.defineMIME = Ve, Ni.defineMode( "null", function () {
      return {
        token: function ( e ) {
          return e.skipToEnd()
        }
      }
    } ), Ni.defineMIME( "text/plain", "null" ), Ni.defineExtension = function ( e, t ) {
      Ni.prototype[ e ] = t
    }, Ni.defineDocExtension = function ( e, t ) {
      ls.prototype[ e ] = t
    }, Ni.fromTextArea = $i, Ji( Ni ), Ni.version = "5.22.2", Ni
  } )
}, function ( e, t ) {}, , function ( e, t ) {}, , function ( e, t, n ) {
  e.exports = n( 407 )
}, function ( e, t, n ) {
  /*!
   * chai
   * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  var r = [],
    t = e.exports = {};
  /*!
   * Chai version
   */
  t.version = "3.5.0",
    /*!
     * Assertion Error
     */
    t.AssertionError = n( 408 );
  /*!
   * Utils for plugins (not exported)
   */
  var o = n( 409 );
  t.use = function ( e ) {
      return ~r.indexOf( e ) || ( e( this, o ), r.push( e ) ), this
    },
    /*!
     * Utility Functions
     */
    t.util = o;
  /*!
   * Configuration
   */
  var i = n( 422 );
  t.config = i;
  /*!
   * Primary `Assertion` prototype
   */
  var a = n( 441 );
  t.use( a );
  /*!
   * Core Assertions
   */
  var s = n( 442 );
  t.use( s );
  /*!
   * Expect interface
   */
  var l = n( 443 );
  t.use( l );
  /*!
   * Should interface
   */
  var u = n( 444 );
  t.use( u );
  /*!
   * Assert interface
   */
  var c = n( 445 );
  t.use( c )
}, function ( e, t ) {
  /*!
   * assertion-error
   * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
   * MIT Licensed
   */
  /*!
   * Return a function that will copy properties from
   * one object to another excluding any originally
   * listed. Returned function will create a new `{}`.
   *
   * @param {String} excluded properties ...
   * @return {Function}
   */
  function n() {
    function e( e, n ) {
      Object.keys( n ).forEach( function ( r ) {
        ~t.indexOf( r ) || ( e[ r ] = n[ r ] )
      } )
    }
    var t = [].slice.call( arguments );
    return function () {
      for ( var t = [].slice.call( arguments ), n = 0, r = {}; n < t.length; n++ ) e( r, t[ n ] );
      return r
    }
  }

  function r( e, t, r ) {
    var o = n( "name", "message", "stack", "constructor", "toJSON" ),
      i = o( t || {} );
    this.message = e || "Unspecified AssertionError", this.showDiff = !1;
    for ( var a in i ) this[ a ] = i[ a ];
    if ( r = r || arguments.callee, r && Error.captureStackTrace ) Error.captureStackTrace( this, r );
    else try {
      throw new Error
    } catch ( e ) {
      this.stack = e.stack
    }
  }
  /*!
   * Primary Exports
   */
  e.exports = r,
    /*!
     * Inherit from Error.prototype
     */
    r.prototype = Object.create( Error.prototype ),
    /*!
     * Statically set name
     */
    r.prototype.name = "AssertionError",
    /*!
     * Ensure correct constructor
     */
    r.prototype.constructor = r, r.prototype.toJSON = function ( e ) {
      var t = n( "constructor", "toJSON", "stack" ),
        r = t( {
          name: this.name
        }, this );
      return !1 !== e && this.stack && ( r.stack = this.stack ), r
    }
}, function ( e, t, n ) {
  /*!
   * chai
   * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  /*!
   * Main exports
   */
  var t = e.exports = {};
  /*!
   * test utility
   */
  t.test = n( 410 ),
    /*!
     * type utility
     */
    t.type = n( 412 ),
    /*!
     * expectTypes utility
     */
    t.expectTypes = n( 414 ),
    /*!
     * message utility
     */
    t.getMessage = n( 415 ),
    /*!
     * actual utility
     */
    t.getActual = n( 416 ),
    /*!
     * Inspect util
     */
    t.inspect = n( 417 ),
    /*!
     * Object Display util
     */
    t.objDisplay = n( 421 ),
    /*!
     * Flag utility
     */
    t.flag = n( 411 ),
    /*!
     * Flag transferring utility
     */
    t.transferFlags = n( 423 ),
    /*!
     * Deep equal utility
     */
    t.eql = n( 424 ),
    /*!
     * Deep path value
     */
    t.getPathValue = n( 432 ),
    /*!
     * Deep path info
     */
    t.getPathInfo = n( 433 ),
    /*!
     * Check if a property exists
     */
    t.hasProperty = n( 434 ),
    /*!
     * Function name
     */
    t.getName = n( 418 ),
    /*!
     * add Property
     */
    t.addProperty = n( 435 ),
    /*!
     * add Method
     */
    t.addMethod = n( 436 ),
    /*!
     * overwrite Property
     */
    t.overwriteProperty = n( 437 ),
    /*!
     * overwrite Method
     */
    t.overwriteMethod = n( 438 ),
    /*!
     * Add a chainable method
     */
    t.addChainableMethod = n( 439 ),
    /*!
     * Overwrite chainable method
     */
    t.overwriteChainableMethod = n( 440 )
}, function ( e, t, n ) {
  /*!
   * Chai - test utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  /*!
   * Module dependancies
   */
  var r = n( 411 );
  e.exports = function ( e, t ) {
    var n = r( e, "negate" ),
      o = t[ 0 ];
    return n ? !o : o
  }
}, function ( e, t ) {
  /*!
   * Chai - flag utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  e.exports = function ( e, t, n ) {
    var r = e.__flags || ( e.__flags = Object.create( null ) );
    return 3 !== arguments.length ? r[ t ] : void( r[ t ] = n )
  }
}, function ( e, t, n ) {
  e.exports = n( 413 )
}, function ( e, t ) {
  function n( e ) {
    var t = Object.prototype.toString.call( e ).match( o )[ 1 ].toLowerCase();
    return "function" == typeof Promise && e instanceof Promise ? "promise" : null === e ? "null" : void 0 === e ? "undefined" : t
  }

  function r() {
    return this instanceof r ? void( this.tests = {} ) : new r
  }
  /*!
   * type-detect
   * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  /*!
   * Primary Exports
   */
  var t = e.exports = n,
    o = /^\[object (.*)\]$/;
  t.Library = r, r.prototype.of = n, r.prototype.define = function ( e, t ) {
    return 1 === arguments.length ? this.tests[ e ] : ( this.tests[ e ] = t, this )
  }, r.prototype.test = function ( e, t ) {
    if ( t === n( e ) ) return !0;
    var r = this.tests[ t ];
    if ( r && "regexp" === n( r ) ) return r.test( e );
    if ( r && "function" === n( r ) ) return r( e );
    throw new ReferenceError( 'Type test "' + t + '" not defined or invalid.' )
  }
}, function ( e, t, n ) {
  /*!
   * Chai - expectTypes utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  var r = n( 408 ),
    o = n( 411 ),
    i = n( 412 );
  e.exports = function ( e, t ) {
    var e = o( e, "object" );
    t = t.map( function ( e ) {
      return e.toLowerCase()
    } ), t.sort();
    var n = t.map( function ( e, n ) {
      var r = ~[ "a", "e", "i", "o", "u" ].indexOf( e.charAt( 0 ) ) ? "an" : "a",
        o = t.length > 1 && n === t.length - 1 ? "or " : "";
      return o + r + " " + e
    } ).join( ", " );
    if ( !t.some( function ( t ) {
        return i( e ) === t
      } ) ) throw new r( "object tested must be " + n + ", but " + i( e ) + " given" )
  }
}, function ( e, t, n ) {
  /*!
   * Chai - message composition utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  /*!
   * Module dependancies
   */
  var r = n( 411 ),
    o = n( 416 ),
    i = ( n( 417 ), n( 421 ) );
  e.exports = function ( e, t ) {
    var n = r( e, "negate" ),
      a = r( e, "object" ),
      s = t[ 3 ],
      l = o( e, t ),
      u = n ? t[ 2 ] : t[ 1 ],
      c = r( e, "message" );
    return "function" == typeof u && ( u = u() ), u = u || "", u = u.replace( /#\{this\}/g, function () {
      return i( a )
    } ).replace( /#\{act\}/g, function () {
      return i( l )
    } ).replace( /#\{exp\}/g, function () {
      return i( s )
    } ), c ? c + ": " + u : u
  }
}, function ( e, t ) {
  /*!
   * Chai - getActual utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  e.exports = function ( e, t ) {
    return t.length > 4 ? t[ 4 ] : e._obj
  }
}, function ( e, t, n ) {
  function r( e, t, n, r ) {
    var i = {
      showHidden: t,
      seen: [],
      stylize: function ( e ) {
        return e
      }
    };
    return o( i, e, "undefined" == typeof n ? 2 : n )
  }

  function o( e, n, r ) {
    if ( n && "function" == typeof n.inspect && n.inspect !== t.inspect && ( !n.constructor || n.constructor.prototype !== n ) ) {
      var h = n.inspect( r );
      return "string" != typeof h && ( h = o( e, h, r ) ), h
    }
    var b = i( e, n );
    if ( b ) return b;
    if ( y( n ) ) {
      if ( "outerHTML" in n ) return n.outerHTML;
      try {
        if ( document.xmlVersion ) {
          var x = new XMLSerializer;
          return x.serializeToString( n )
        }
        var w = "http://www.w3.org/1999/xhtml",
          _ = document.createElementNS( w, "_" );
        return _.appendChild( n.cloneNode( !1 ) ), html = _.innerHTML.replace( "><", ">" + n.innerHTML + "<" ), _.innerHTML = "", html
      } catch ( e ) {}
    }
    var C = m( n ),
      k = e.showHidden ? g( n ) : C;
    if ( 0 === k.length || d( n ) && ( 1 === k.length && "stack" === k[ 0 ] || 2 === k.length && "description" === k[ 0 ] && "stack" === k[ 1 ] ) ) {
      if ( "function" == typeof n ) {
        var E = v( n ),
          S = E ? ": " + E : "";
        return e.stylize( "[Function" + S + "]", "special" )
      }
      if ( f( n ) ) return e.stylize( RegExp.prototype.toString.call( n ), "regexp" );
      if ( p( n ) ) return e.stylize( Date.prototype.toUTCString.call( n ), "date" );
      if ( d( n ) ) return a( n )
    }
    var T = "",
      A = !1,
      M = [ "{", "}" ];
    if ( c( n ) && ( A = !0, M = [ "[", "]" ] ), "function" == typeof n ) {
      var E = v( n ),
        S = E ? ": " + E : "";
      T = " [Function" + S + "]"
    }
    if ( f( n ) && ( T = " " + RegExp.prototype.toString.call( n ) ), p( n ) && ( T = " " + Date.prototype.toUTCString.call( n ) ), d( n ) ) return a( n );
    if ( 0 === k.length && ( !A || 0 == n.length ) ) return M[ 0 ] + T + M[ 1 ];
    if ( r < 0 ) return f( n ) ? e.stylize( RegExp.prototype.toString.call( n ), "regexp" ) : e.stylize( "[Object]", "special" );
    e.seen.push( n );
    var O;
    return O = A ? s( e, n, r, C, k ) : k.map( function ( t ) {
      return l( e, n, r, C, t, A )
    } ), e.seen.pop(), u( O, T, M )
  }

  function i( e, t ) {
    switch ( typeof t ) {
      case "undefined":
        return e.stylize( "undefined", "undefined" );
      case "string":
        var n = "'" + JSON.stringify( t ).replace( /^"|"$/g, "" ).replace( /'/g, "\\'" ).replace( /\\"/g, '"' ) + "'";
        return e.stylize( n, "string" );
      case "number":
        return 0 === t && 1 / t === -( 1 / 0 ) ? e.stylize( "-0", "number" ) : e.stylize( "" + t, "number" );
      case "boolean":
        return e.stylize( "" + t, "boolean" )
    }
    if ( null === t ) return e.stylize( "null", "null" )
  }

  function a( e ) {
    return "[" + Error.prototype.toString.call( e ) + "]"
  }

  function s( e, t, n, r, o ) {
    for ( var i = [], a = 0, s = t.length; a < s; ++a ) Object.prototype.hasOwnProperty.call( t, String( a ) ) ? i.push( l( e, t, n, r, String( a ), !0 ) ) : i.push( "" );
    return o.forEach( function ( o ) {
      o.match( /^\d+$/ ) || i.push( l( e, t, n, r, o, !0 ) )
    } ), i
  }

  function l( e, t, n, r, i, a ) {
    var s, l;
    if ( t.__lookupGetter__ && ( t.__lookupGetter__( i ) ? l = t.__lookupSetter__( i ) ? e.stylize( "[Getter/Setter]", "special" ) : e.stylize( "[Getter]", "special" ) : t.__lookupSetter__( i ) && ( l = e.stylize( "[Setter]", "special" ) ) ), r.indexOf( i ) < 0 && ( s = "[" + i + "]" ), l || ( e.seen.indexOf( t[ i ] ) < 0 ? ( l = null === n ? o( e, t[ i ], null ) : o( e, t[ i ], n - 1 ), l.indexOf( "\n" ) > -1 && ( l = a ? l.split( "\n" ).map( function ( e ) {
        return "  " + e
      } ).join( "\n" ).substr( 2 ) : "\n" + l.split( "\n" ).map( function ( e ) {
        return "   " + e
      } ).join( "\n" ) ) ) : l = e.stylize( "[Circular]", "special" ) ), "undefined" == typeof s ) {
      if ( a && i.match( /^\d+$/ ) ) return l;
      s = JSON.stringify( "" + i ), s.match( /^"([a-zA-Z_][a-zA-Z_0-9]*)"$/ ) ? ( s = s.substr( 1, s.length - 2 ), s = e.stylize( s, "name" ) ) : ( s = s.replace( /'/g, "\\'" ).replace( /\\"/g, '"' ).replace( /(^"|"$)/g, "'" ), s = e.stylize( s, "string" ) )
    }
    return s + ": " + l
  }

  function u( e, t, n ) {
    var r = 0,
      o = e.reduce( function ( e, t ) {
        return r++, t.indexOf( "\n" ) >= 0 && r++, e + t.length + 1
      }, 0 );
    return o > 60 ? n[ 0 ] + ( "" === t ? "" : t + "\n " ) + " " + e.join( ",\n  " ) + " " + n[ 1 ] : n[ 0 ] + t + " " + e.join( ", " ) + " " + n[ 1 ]
  }

  function c( e ) {
    return Array.isArray( e ) || "object" == typeof e && "[object Array]" === h( e )
  }

  function f( e ) {
    return "object" == typeof e && "[object RegExp]" === h( e )
  }

  function p( e ) {
    return "object" == typeof e && "[object Date]" === h( e )
  }

  function d( e ) {
    return "object" == typeof e && "[object Error]" === h( e )
  }

  function h( e ) {
    return Object.prototype.toString.call( e )
  }
  var v = n( 418 ),
    g = n( 419 ),
    m = n( 420 );
  e.exports = r;
  var y = function ( e ) {
    return "object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && 1 === e.nodeType && "string" == typeof e.nodeName
  }
}, function ( e, t ) {
  /*!
   * Chai - getName utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  e.exports = function ( e ) {
    if ( e.name ) return e.name;
    var t = /^\s?function ([^(]*)\(/.exec( e );
    return t && t[ 1 ] ? t[ 1 ] : ""
  }
}, function ( e, t ) {
  /*!
   * Chai - getProperties utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  e.exports = function ( e ) {
    function t( e ) {
      n.indexOf( e ) === -1 && n.push( e )
    }
    for ( var n = Object.getOwnPropertyNames( e ), r = Object.getPrototypeOf( e ); null !== r; ) Object.getOwnPropertyNames( r ).forEach( t ), r = Object.getPrototypeOf( r );
    return n
  }
}, function ( e, t ) {
  /*!
   * Chai - getEnumerableProperties utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  e.exports = function ( e ) {
    var t = [];
    for ( var n in e ) t.push( n );
    return t
  }
}, function ( e, t, n ) {
  /*!
   * Chai - flag utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  /*!
   * Module dependancies
   */
  var r = n( 417 ),
    o = n( 422 );
  e.exports = function ( e ) {
    var t = r( e ),
      n = Object.prototype.toString.call( e );
    if ( o.truncateThreshold && t.length >= o.truncateThreshold ) {
      if ( "[object Function]" === n ) return e.name && "" !== e.name ? "[Function: " + e.name + "]" : "[Function]";
      if ( "[object Array]" === n ) return "[ Array(" + e.length + ") ]";
      if ( "[object Object]" === n ) {
        var i = Object.keys( e ),
          a = i.length > 2 ? i.splice( 0, 2 ).join( ", " ) + ", ..." : i.join( ", " );
        return "{ Object (" + a + ") }"
      }
      return t
    }
    return t
  }
}, function ( e, t ) {
  e.exports = {
    includeStack: !1,
    showDiff: !0,
    truncateThreshold: 40
  }
}, function ( e, t ) {
  /*!
   * Chai - transferFlags utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  e.exports = function ( e, t, n ) {
    var r = e.__flags || ( e.__flags = Object.create( null ) );
    t.__flags || ( t.__flags = Object.create( null ) ), n = 3 !== arguments.length || n;
    for ( var o in r )( n || "object" !== o && "ssfi" !== o && "message" != o ) && ( t.__flags[ o ] = r[ o ] )
  }
}, function ( e, t, n ) {
  e.exports = n( 425 )
}, function ( e, t, n ) {
  function r( e, t, n ) {
    return !!o( e, t ) || ( "date" === v( e ) ? a( e, t ) : "regexp" === v( e ) ? s( e, t ) : h.isBuffer( e ) ? f( e, t ) : "arguments" === v( e ) ? l( e, t, n ) : !!i( e, t ) && ( "object" !== v( e ) && "object" !== v( t ) && "array" !== v( e ) && "array" !== v( t ) ? o( e, t ) : d( e, t, n ) ) )
  }
  /*!
   * Strict (egal) equality test. Ensures that NaN always
   * equals NaN and `-0` does not equal `+0`.
   *
   * @param {Mixed} a
   * @param {Mixed} b
   * @return {Boolean} equal match
   */
  function o( e, t ) {
    return e === t ? 0 !== e || 1 / e === 1 / t : e !== e && t !== t
  }
  /*!
   * Compare the types of two given objects and
   * return if they are equal. Note that an Array
   * has a type of `array` (not `object`) and arguments
   * have a type of `arguments` (not `array`/`object`).
   *
   * @param {Mixed} a
   * @param {Mixed} b
   * @return {Boolean} result
   */
  function i( e, t ) {
    return v( e ) === v( t )
  }
  /*!
   * Compare two Date objects by asserting that
   * the time values are equal using `saveValue`.
   *
   * @param {Date} a
   * @param {Date} b
   * @return {Boolean} result
   */
  function a( e, t ) {
    return "date" === v( t ) && o( e.getTime(), t.getTime() )
  }
  /*!
   * Compare two regular expressions by converting them
   * to string and checking for `sameValue`.
   *
   * @param {RegExp} a
   * @param {RegExp} b
   * @return {Boolean} result
   */
  function s( e, t ) {
    return "regexp" === v( t ) && o( e.toString(), t.toString() )
  }
  /*!
   * Assert deep equality of two `arguments` objects.
   * Unfortunately, these must be sliced to arrays
   * prior to test to ensure no bad behavior.
   *
   * @param {Arguments} a
   * @param {Arguments} b
   * @param {Array} memoize (optional)
   * @return {Boolean} result
   */
  function l( e, t, n ) {
    return "arguments" === v( t ) && ( e = [].slice.call( e ), t = [].slice.call( t ), r( e, t, n ) )
  }
  /*!
   * Get enumerable properties of a given object.
   *
   * @param {Object} a
   * @return {Array} property names
   */
  function u( e ) {
    var t = [];
    for ( var n in e ) t.push( n );
    return t
  }
  /*!
   * Simple equality for flat iterable objects
   * such as Arrays or Node.js buffers.
   *
   * @param {Iterable} a
   * @param {Iterable} b
   * @return {Boolean} result
   */
  function c( e, t ) {
    if ( e.length !== t.length ) return !1;
    for ( var n = 0, r = !0; n < e.length; n++ )
      if ( e[ n ] !== t[ n ] ) {
        r = !1;
        break
      } return r
  }
  /*!
   * Extension to `iterableEqual` specifically
   * for Node.js Buffers.
   *
   * @param {Buffer} a
   * @param {Mixed} b
   * @return {Boolean} result
   */
  function f( e, t ) {
    return !!h.isBuffer( t ) && c( e, t )
  }
  /*!
   * Block for `objectEqual` ensuring non-existing
   * values don't get in.
   *
   * @param {Mixed} object
   * @return {Boolean} result
   */
  function p( e ) {
    return null !== e && void 0 !== e
  }
  /*!
   * Recursively check the equality of two objects.
   * Once basic sameness has been established it will
   * defer to `deepEqual` for each enumerable key
   * in the object.
   *
   * @param {Mixed} a
   * @param {Mixed} b
   * @return {Boolean} result
   */
  function d( e, t, n ) {
    if ( !p( e ) || !p( t ) ) return !1;
    if ( e.prototype !== t.prototype ) return !1;
    var o;
    if ( n ) {
      for ( o = 0; o < n.length; o++ )
        if ( n[ o ][ 0 ] === e && n[ o ][ 1 ] === t || n[ o ][ 0 ] === t && n[ o ][ 1 ] === e ) return !0
    } else n = [];
    try {
      var i = u( e ),
        a = u( t )
    } catch ( e ) {
      return !1
    }
    if ( i.sort(), a.sort(), !c( i, a ) ) return !1;
    n.push( [ e, t ] );
    var s;
    for ( o = i.length - 1; o >= 0; o-- )
      if ( s = i[ o ], !r( e[ s ], t[ s ], n ) ) return !1;
    return !0
  }
  /*!
   * deep-eql
   * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  /*!
   * Module dependencies
   */
  var h, v = n( 426 );
  try {
    h = n( 428 ).Buffer
  } catch ( e ) {
    h = {}, h.isBuffer = function () {
      return !1
    }
  }
  /*!
   * Primary Export
   */
  e.exports = r
}, function ( e, t, n ) {
  e.exports = n( 427 )
}, function ( e, t ) {
  function n( e ) {
    var t = Object.prototype.toString.call( e );
    return o[ t ] ? o[ t ] : null === e ? "null" : void 0 === e ? "undefined" : e === Object( e ) ? "object" : typeof e
  }

  function r() {
    this.tests = {}
  }
  /*!
   * type-detect
   * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  /*!
   * Primary Exports
   */
  var t = e.exports = n,
    o = {
      "[object Array]": "array",
      "[object RegExp]": "regexp",
      "[object Function]": "function",
      "[object Arguments]": "arguments",
      "[object Date]": "date"
    };
  t.Library = r, r.prototype.of = n, r.prototype.define = function ( e, t ) {
    return 1 === arguments.length ? this.tests[ e ] : ( this.tests[ e ] = t, this )
  }, r.prototype.test = function ( e, t ) {
    if ( t === n( e ) ) return !0;
    var r = this.tests[ t ];
    if ( r && "regexp" === n( r ) ) return r.test( e );
    if ( r && "function" === n( r ) ) return r( e );
    throw new ReferenceError( 'Type test "' + t + '" not defined or invalid.' )
  }
}, function ( e, t, n ) {
  ( function ( e ) {
    /*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
     * @license  MIT
     */
    "use strict";

    function r() {
      try {
        var e = new Uint8Array( 1 );
        return e.__proto__ = {
          __proto__: Uint8Array.prototype,
          foo: function () {
            return 42
          }
        }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray( 1, 1 ).byteLength
      } catch ( e ) {
        return !1
      }
    }

    function o() {
      return a.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
    }

    function i( e, t ) {
      if ( o() < t ) throw new RangeError( "Invalid typed array length" );
      return a.TYPED_ARRAY_SUPPORT ? ( e = new Uint8Array( t ), e.__proto__ = a.prototype ) : ( null === e && ( e = new a( t ) ), e.length = t ), e
    }

    function a( e, t, n ) {
      if ( !( a.TYPED_ARRAY_SUPPORT || this instanceof a ) ) return new a( e, t, n );
      if ( "number" == typeof e ) {
        if ( "string" == typeof t ) throw new Error( "If encoding is specified then the first argument must be a string" );
        return c( this, e )
      }
      return s( this, e, t, n )
    }

    function s( e, t, n, r ) {
      if ( "number" == typeof t ) throw new TypeError( '"value" argument must not be a number' );
      return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? d( e, t, n, r ) : "string" == typeof t ? f( e, t, n ) : h( e, t )
    }

    function l( e ) {
      if ( "number" != typeof e ) throw new TypeError( '"size" argument must be a number' );
      if ( e < 0 ) throw new RangeError( '"size" argument must not be negative' )
    }

    function u( e, t, n, r ) {
      return l( t ), t <= 0 ? i( e, t ) : void 0 !== n ? "string" == typeof r ? i( e, t ).fill( n, r ) : i( e, t ).fill( n ) : i( e, t )
    }

    function c( e, t ) {
      if ( l( t ), e = i( e, t < 0 ? 0 : 0 | v( t ) ), !a.TYPED_ARRAY_SUPPORT )
        for ( var n = 0; n < t; ++n ) e[ n ] = 0;
      return e
    }

    function f( e, t, n ) {
      if ( "string" == typeof n && "" !== n || ( n = "utf8" ), !a.isEncoding( n ) ) throw new TypeError( '"encoding" must be a valid string encoding' );
      var r = 0 | m( t, n );
      e = i( e, r );
      var o = e.write( t, n );
      return o !== r && ( e = e.slice( 0, o ) ), e
    }

    function p( e, t ) {
      var n = t.length < 0 ? 0 : 0 | v( t.length );
      e = i( e, n );
      for ( var r = 0; r < n; r += 1 ) e[ r ] = 255 & t[ r ];
      return e
    }

    function d( e, t, n, r ) {
      if ( t.byteLength, n < 0 || t.byteLength < n ) throw new RangeError( "'offset' is out of bounds" );
      if ( t.byteLength < n + ( r || 0 ) ) throw new RangeError( "'length' is out of bounds" );
      return t = void 0 === n && void 0 === r ? new Uint8Array( t ) : void 0 === r ? new Uint8Array( t, n ) : new Uint8Array( t, n, r ), a.TYPED_ARRAY_SUPPORT ? ( e = t, e.__proto__ = a.prototype ) : e = p( e, t ), e
    }

    function h( e, t ) {
      if ( a.isBuffer( t ) ) {
        var n = 0 | v( t.length );
        return e = i( e, n ), 0 === e.length ? e : ( t.copy( e, 0, 0, n ), e )
      }
      if ( t ) {
        if ( "undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t ) return "number" != typeof t.length || J( t.length ) ? i( e, 0 ) : p( e, t );
        if ( "Buffer" === t.type && Q( t.data ) ) return p( e, t.data )
      }
      throw new TypeError( "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object." )
    }

    function v( e ) {
      if ( e >= o() ) throw new RangeError( "Attempt to allocate Buffer larger than maximum size: 0x" + o().toString( 16 ) + " bytes" );
      return 0 | e
    }

    function g( e ) {
      return +e != e && ( e = 0 ), a.alloc( +e )
    }

    function m( e, t ) {
      if ( a.isBuffer( e ) ) return e.length;
      if ( "undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && ( ArrayBuffer.isView( e ) || e instanceof ArrayBuffer ) ) return e.byteLength;
      "string" != typeof e && ( e = "" + e );
      var n = e.length;
      if ( 0 === n ) return 0;
      for ( var r = !1;; ) switch ( t ) {
        case "ascii":
        case "latin1":
        case "binary":
          return n;
        case "utf8":
        case "utf-8":
        case void 0:
          return V( e ).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return 2 * n;
        case "hex":
          return n >>> 1;
        case "base64":
          return K( e ).length;
        default:
          if ( r ) return V( e ).length;
          t = ( "" + t ).toLowerCase(), r = !0
      }
    }

    function y( e, t, n ) {
      var r = !1;
      if ( ( void 0 === t || t < 0 ) && ( t = 0 ), t > this.length ) return "";
      if ( ( void 0 === n || n > this.length ) && ( n = this.length ), n <= 0 ) return "";
      if ( n >>>= 0, t >>>= 0, n <= t ) return "";
      for ( e || ( e = "utf8" );; ) switch ( e ) {
        case "hex":
          return D( this, t, n );
        case "utf8":
        case "utf-8":
          return M( this, t, n );
        case "ascii":
          return N( this, t, n );
        case "latin1":
        case "binary":
          return P( this, t, n );
        case "base64":
          return A( this, t, n );
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return L( this, t, n );
        default:
          if ( r ) throw new TypeError( "Unknown encoding: " + e );
          e = ( e + "" ).toLowerCase(), r = !0
      }
    }

    function b( e, t, n ) {
      var r = e[ t ];
      e[ t ] = e[ n ], e[ n ] = r
    }

    function x( e, t, n, r, o ) {
      if ( 0 === e.length ) return -1;
      if ( "string" == typeof n ? ( r = n, n = 0 ) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && ( n = -2147483648 ), n = +n, isNaN( n ) && ( n = o ? 0 : e.length - 1 ), n < 0 && ( n = e.length + n ), n >= e.length ) {
        if ( o ) return -1;
        n = e.length - 1
      } else if ( n < 0 ) {
        if ( !o ) return -1;
        n = 0
      }
      if ( "string" == typeof t && ( t = a.from( t, r ) ), a.isBuffer( t ) ) return 0 === t.length ? -1 : w( e, t, n, r, o );
      if ( "number" == typeof t ) return t &= 255, a.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call( e, t, n ) : Uint8Array.prototype.lastIndexOf.call( e, t, n ) : w( e, [ t ], n, r, o );
      throw new TypeError( "val must be string, number or Buffer" )
    }

    function w( e, t, n, r, o ) {
      function i( e, t ) {
        return 1 === a ? e[ t ] : e.readUInt16BE( t * a )
      }
      var a = 1,
        s = e.length,
        l = t.length;
      if ( void 0 !== r && ( r = String( r ).toLowerCase(), "ucs2" === r || "ucs-2" === r || "utf16le" === r || "utf-16le" === r ) ) {
        if ( e.length < 2 || t.length < 2 ) return -1;
        a = 2, s /= 2, l /= 2, n /= 2
      }
      var u;
      if ( o ) {
        var c = -1;
        for ( u = n; u < s; u++ )
          if ( i( e, u ) === i( t, c === -1 ? 0 : u - c ) ) {
            if ( c === -1 && ( c = u ), u - c + 1 === l ) return c * a
          } else c !== -1 && ( u -= u - c ), c = -1
      } else
        for ( n + l > s && ( n = s - l ), u = n; u >= 0; u-- ) {
          for ( var f = !0, p = 0; p < l; p++ )
            if ( i( e, u + p ) !== i( t, p ) ) {
              f = !1;
              break
            } if ( f ) return u
        }
      return -1
    }

    function _( e, t, n, r ) {
      n = Number( n ) || 0;
      var o = e.length - n;
      r ? ( r = Number( r ), r > o && ( r = o ) ) : r = o;
      var i = t.length;
      if ( i % 2 !== 0 ) throw new TypeError( "Invalid hex string" );
      r > i / 2 && ( r = i / 2 );
      for ( var a = 0; a < r; ++a ) {
        var s = parseInt( t.substr( 2 * a, 2 ), 16 );
        if ( isNaN( s ) ) return a;
        e[ n + a ] = s
      }
      return a
    }

    function C( e, t, n, r ) {
      return $( V( t, e.length - n ), e, n, r )
    }

    function k( e, t, n, r ) {
      return $( G( t ), e, n, r )
    }

    function E( e, t, n, r ) {
      return k( e, t, n, r )
    }

    function S( e, t, n, r ) {
      return $( K( t ), e, n, r )
    }

    function T( e, t, n, r ) {
      return $( Y( t, e.length - n ), e, n, r )
    }

    function A( e, t, n ) {
      return 0 === t && n === e.length ? X.fromByteArray( e ) : X.fromByteArray( e.slice( t, n ) )
    }

    function M( e, t, n ) {
      n = Math.min( e.length, n );
      for ( var r = [], o = t; o < n; ) {
        var i = e[ o ],
          a = null,
          s = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
        if ( o + s <= n ) {
          var l, u, c, f;
          switch ( s ) {
            case 1:
              i < 128 && ( a = i );
              break;
            case 2:
              l = e[ o + 1 ], 128 === ( 192 & l ) && ( f = ( 31 & i ) << 6 | 63 & l, f > 127 && ( a = f ) );
              break;
            case 3:
              l = e[ o + 1 ], u = e[ o + 2 ], 128 === ( 192 & l ) && 128 === ( 192 & u ) && ( f = ( 15 & i ) << 12 | ( 63 & l ) << 6 | 63 & u, f > 2047 && ( f < 55296 || f > 57343 ) && ( a = f ) );
              break;
            case 4:
              l = e[ o + 1 ], u = e[ o + 2 ], c = e[ o + 3 ], 128 === ( 192 & l ) && 128 === ( 192 & u ) && 128 === ( 192 & c ) && ( f = ( 15 & i ) << 18 | ( 63 & l ) << 12 | ( 63 & u ) << 6 | 63 & c, f > 65535 && f < 1114112 && ( a = f ) )
          }
        }
        null === a ? ( a = 65533, s = 1 ) : a > 65535 && ( a -= 65536, r.push( a >>> 10 & 1023 | 55296 ), a = 56320 | 1023 & a ), r.push( a ), o += s
      }
      return O( r )
    }

    function O( e ) {
      var t = e.length;
      if ( t <= ee ) return String.fromCharCode.apply( String, e );
      for ( var n = "", r = 0; r < t; ) n += String.fromCharCode.apply( String, e.slice( r, r += ee ) );
      return n
    }

    function N( e, t, n ) {
      var r = "";
      n = Math.min( e.length, n );
      for ( var o = t; o < n; ++o ) r += String.fromCharCode( 127 & e[ o ] );
      return r
    }

    function P( e, t, n ) {
      var r = "";
      n = Math.min( e.length, n );
      for ( var o = t; o < n; ++o ) r += String.fromCharCode( e[ o ] );
      return r
    }

    function D( e, t, n ) {
      var r = e.length;
      ( !t || t < 0 ) && ( t = 0 ), ( !n || n < 0 || n > r ) && ( n = r );
      for ( var o = "", i = t; i < n; ++i ) o += W( e[ i ] );
      return o
    }

    function L( e, t, n ) {
      for ( var r = e.slice( t, n ), o = "", i = 0; i < r.length; i += 2 ) o += String.fromCharCode( r[ i ] + 256 * r[ i + 1 ] );
      return o
    }

    function I( e, t, n ) {
      if ( e % 1 !== 0 || e < 0 ) throw new RangeError( "offset is not uint" );
      if ( e + t > n ) throw new RangeError( "Trying to access beyond buffer length" )
    }

    function R( e, t, n, r, o, i ) {
      if ( !a.isBuffer( e ) ) throw new TypeError( '"buffer" argument must be a Buffer instance' );
      if ( t > o || t < i ) throw new RangeError( '"value" argument is out of bounds' );
      if ( n + r > e.length ) throw new RangeError( "Index out of range" )
    }

    function j( e, t, n, r ) {
      t < 0 && ( t = 65535 + t + 1 );
      for ( var o = 0, i = Math.min( e.length - n, 2 ); o < i; ++o ) e[ n + o ] = ( t & 255 << 8 * ( r ? o : 1 - o ) ) >>> 8 * ( r ? o : 1 - o )
    }

    function F( e, t, n, r ) {
      t < 0 && ( t = 4294967295 + t + 1 );
      for ( var o = 0, i = Math.min( e.length - n, 4 ); o < i; ++o ) e[ n + o ] = t >>> 8 * ( r ? o : 3 - o ) & 255
    }

    function U( e, t, n, r, o, i ) {
      if ( n + r > e.length ) throw new RangeError( "Index out of range" );
      if ( n < 0 ) throw new RangeError( "Index out of range" )
    }

    function B( e, t, n, r, o ) {
      return o || U( e, t, n, 4, 3.4028234663852886e38, -3.4028234663852886e38 ), Z.write( e, t, n, r, 23, 4 ), n + 4
    }

    function z( e, t, n, r, o ) {
      return o || U( e, t, n, 8, 1.7976931348623157e308, -1.7976931348623157e308 ), Z.write( e, t, n, r, 52, 8 ), n + 8
    }

    function q( e ) {
      if ( e = H( e ).replace( te, "" ), e.length < 2 ) return "";
      for ( ; e.length % 4 !== 0; ) e += "=";
      return e
    }

    function H( e ) {
      return e.trim ? e.trim() : e.replace( /^\s+|\s+$/g, "" )
    }

    function W( e ) {
      return e < 16 ? "0" + e.toString( 16 ) : e.toString( 16 )
    }

    function V( e, t ) {
      t = t || 1 / 0;
      for ( var n, r = e.length, o = null, i = [], a = 0; a < r; ++a ) {
        if ( n = e.charCodeAt( a ), n > 55295 && n < 57344 ) {
          if ( !o ) {
            if ( n > 56319 ) {
              ( t -= 3 ) > -1 && i.push( 239, 191, 189 );
              continue
            }
            if ( a + 1 === r ) {
              ( t -= 3 ) > -1 && i.push( 239, 191, 189 );
              continue
            }
            o = n;
            continue
          }
          if ( n < 56320 ) {
            ( t -= 3 ) > -1 && i.push( 239, 191, 189 ), o = n;
            continue
          }
          n = ( o - 55296 << 10 | n - 56320 ) + 65536
        } else o && ( t -= 3 ) > -1 && i.push( 239, 191, 189 );
        if ( o = null, n < 128 ) {
          if ( ( t -= 1 ) < 0 ) break;
          i.push( n )
        } else if ( n < 2048 ) {
          if ( ( t -= 2 ) < 0 ) break;
          i.push( n >> 6 | 192, 63 & n | 128 )
        } else if ( n < 65536 ) {
          if ( ( t -= 3 ) < 0 ) break;
          i.push( n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128 )
        } else {
          if ( !( n < 1114112 ) ) throw new Error( "Invalid code point" );
          if ( ( t -= 4 ) < 0 ) break;
          i.push( n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128 )
        }
      }
      return i
    }

    function G( e ) {
      for ( var t = [], n = 0; n < e.length; ++n ) t.push( 255 & e.charCodeAt( n ) );
      return t
    }

    function Y( e, t ) {
      for ( var n, r, o, i = [], a = 0; a < e.length && !( ( t -= 2 ) < 0 ); ++a ) n = e.charCodeAt( a ), r = n >> 8, o = n % 256, i.push( o ), i.push( r );
      return i
    }

    function K( e ) {
      return X.toByteArray( q( e ) )
    }

    function $( e, t, n, r ) {
      for ( var o = 0; o < r && !( o + n >= t.length || o >= e.length ); ++o ) t[ o + n ] = e[ o ];
      return o
    }

    function J( e ) {
      return e !== e
    }
    var X = n( 429 ),
      Z = n( 430 ),
      Q = n( 431 );
    t.Buffer = a, t.SlowBuffer = g, t.INSPECT_MAX_BYTES = 50, a.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : r(), t.kMaxLength = o(), a.poolSize = 8192, a._augment = function ( e ) {
      return e.__proto__ = a.prototype, e
    }, a.from = function ( e, t, n ) {
      return s( null, e, t, n )
    }, a.TYPED_ARRAY_SUPPORT && ( a.prototype.__proto__ = Uint8Array.prototype, a.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && a[ Symbol.species ] === a && Object.defineProperty( a, Symbol.species, {
      value: null,
      configurable: !0
    } ) ), a.alloc = function ( e, t, n ) {
      return u( null, e, t, n )
    }, a.allocUnsafe = function ( e ) {
      return c( null, e )
    }, a.allocUnsafeSlow = function ( e ) {
      return c( null, e )
    }, a.isBuffer = function ( e ) {
      return !( null == e || !e._isBuffer )
    }, a.compare = function ( e, t ) {
      if ( !a.isBuffer( e ) || !a.isBuffer( t ) ) throw new TypeError( "Arguments must be Buffers" );
      if ( e === t ) return 0;
      for ( var n = e.length, r = t.length, o = 0, i = Math.min( n, r ); o < i; ++o )
        if ( e[ o ] !== t[ o ] ) {
          n = e[ o ], r = t[ o ];
          break
        } return n < r ? -1 : r < n ? 1 : 0
    }, a.isEncoding = function ( e ) {
      switch ( String( e ).toLowerCase() ) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;
        default:
          return !1
      }
    }, a.concat = function ( e, t ) {
      if ( !Q( e ) ) throw new TypeError( '"list" argument must be an Array of Buffers' );
      if ( 0 === e.length ) return a.alloc( 0 );
      var n;
      if ( void 0 === t )
        for ( t = 0, n = 0; n < e.length; ++n ) t += e[ n ].length;
      var r = a.allocUnsafe( t ),
        o = 0;
      for ( n = 0; n < e.length; ++n ) {
        var i = e[ n ];
        if ( !a.isBuffer( i ) ) throw new TypeError( '"list" argument must be an Array of Buffers' );
        i.copy( r, o ), o += i.length
      }
      return r
    }, a.byteLength = m, a.prototype._isBuffer = !0, a.prototype.swap16 = function () {
      var e = this.length;
      if ( e % 2 !== 0 ) throw new RangeError( "Buffer size must be a multiple of 16-bits" );
      for ( var t = 0; t < e; t += 2 ) b( this, t, t + 1 );
      return this
    }, a.prototype.swap32 = function () {
      var e = this.length;
      if ( e % 4 !== 0 ) throw new RangeError( "Buffer size must be a multiple of 32-bits" );
      for ( var t = 0; t < e; t += 4 ) b( this, t, t + 3 ), b( this, t + 1, t + 2 );
      return this
    }, a.prototype.swap64 = function () {
      var e = this.length;
      if ( e % 8 !== 0 ) throw new RangeError( "Buffer size must be a multiple of 64-bits" );
      for ( var t = 0; t < e; t += 8 ) b( this, t, t + 7 ), b( this, t + 1, t + 6 ), b( this, t + 2, t + 5 ), b( this, t + 3, t + 4 );
      return this
    }, a.prototype.toString = function () {
      var e = 0 | this.length;
      return 0 === e ? "" : 0 === arguments.length ? M( this, 0, e ) : y.apply( this, arguments )
    }, a.prototype.equals = function ( e ) {
      if ( !a.isBuffer( e ) ) throw new TypeError( "Argument must be a Buffer" );
      return this === e || 0 === a.compare( this, e )
    }, a.prototype.inspect = function () {
      var e = "",
        n = t.INSPECT_MAX_BYTES;
      return this.length > 0 && ( e = this.toString( "hex", 0, n ).match( /.{2}/g ).join( " " ), this.length > n && ( e += " ... " ) ), "<Buffer " + e + ">"
    }, a.prototype.compare = function ( e, t, n, r, o ) {
      if ( !a.isBuffer( e ) ) throw new TypeError( "Argument must be a Buffer" );
      if ( void 0 === t && ( t = 0 ), void 0 === n && ( n = e ? e.length : 0 ), void 0 === r && ( r = 0 ), void 0 === o && ( o = this.length ), t < 0 || n > e.length || r < 0 || o > this.length ) throw new RangeError( "out of range index" );
      if ( r >= o && t >= n ) return 0;
      if ( r >= o ) return -1;
      if ( t >= n ) return 1;
      if ( t >>>= 0, n >>>= 0, r >>>= 0, o >>>= 0, this === e ) return 0;
      for ( var i = o - r, s = n - t, l = Math.min( i, s ), u = this.slice( r, o ), c = e.slice( t, n ), f = 0; f < l; ++f )
        if ( u[ f ] !== c[ f ] ) {
          i = u[ f ], s = c[ f ];
          break
        } return i < s ? -1 : s < i ? 1 : 0
    }, a.prototype.includes = function ( e, t, n ) {
      return this.indexOf( e, t, n ) !== -1
    }, a.prototype.indexOf = function ( e, t, n ) {
      return x( this, e, t, n, !0 )
    }, a.prototype.lastIndexOf = function ( e, t, n ) {
      return x( this, e, t, n, !1 )
    }, a.prototype.write = function ( e, t, n, r ) {
      if ( void 0 === t ) r = "utf8", n = this.length, t = 0;
      else if ( void 0 === n && "string" == typeof t ) r = t, n = this.length, t = 0;
      else {
        if ( !isFinite( t ) ) throw new Error( "Buffer.write(string, encoding, offset[, length]) is no longer supported" );
        t |= 0, isFinite( n ) ? ( n |= 0, void 0 === r && ( r = "utf8" ) ) : ( r = n, n = void 0 )
      }
      var o = this.length - t;
      if ( ( void 0 === n || n > o ) && ( n = o ), e.length > 0 && ( n < 0 || t < 0 ) || t > this.length ) throw new RangeError( "Attempt to write outside buffer bounds" );
      r || ( r = "utf8" );
      for ( var i = !1;; ) switch ( r ) {
        case "hex":
          return _( this, e, t, n );
        case "utf8":
        case "utf-8":
          return C( this, e, t, n );
        case "ascii":
          return k( this, e, t, n );
        case "latin1":
        case "binary":
          return E( this, e, t, n );
        case "base64":
          return S( this, e, t, n );
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return T( this, e, t, n );
        default:
          if ( i ) throw new TypeError( "Unknown encoding: " + r );
          r = ( "" + r ).toLowerCase(), i = !0
      }
    }, a.prototype.toJSON = function () {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call( this._arr || this, 0 )
      }
    };
    var ee = 4096;
    a.prototype.slice = function ( e, t ) {
      var n = this.length;
      e = ~~e, t = void 0 === t ? n : ~~t, e < 0 ? ( e += n, e < 0 && ( e = 0 ) ) : e > n && ( e = n ), t < 0 ? ( t += n, t < 0 && ( t = 0 ) ) : t > n && ( t = n ), t < e && ( t = e );
      var r;
      if ( a.TYPED_ARRAY_SUPPORT ) r = this.subarray( e, t ), r.__proto__ = a.prototype;
      else {
        var o = t - e;
        r = new a( o, void 0 );
        for ( var i = 0; i < o; ++i ) r[ i ] = this[ i + e ]
      }
      return r
    }, a.prototype.readUIntLE = function ( e, t, n ) {
      e |= 0, t |= 0, n || I( e, t, this.length );
      for ( var r = this[ e ], o = 1, i = 0; ++i < t && ( o *= 256 ); ) r += this[ e + i ] * o;
      return r
    }, a.prototype.readUIntBE = function ( e, t, n ) {
      e |= 0, t |= 0, n || I( e, t, this.length );
      for ( var r = this[ e + --t ], o = 1; t > 0 && ( o *= 256 ); ) r += this[ e + --t ] * o;
      return r
    }, a.prototype.readUInt8 = function ( e, t ) {
      return t || I( e, 1, this.length ), this[ e ]
    }, a.prototype.readUInt16LE = function ( e, t ) {
      return t || I( e, 2, this.length ), this[ e ] | this[ e + 1 ] << 8
    }, a.prototype.readUInt16BE = function ( e, t ) {
      return t || I( e, 2, this.length ), this[ e ] << 8 | this[ e + 1 ]
    }, a.prototype.readUInt32LE = function ( e, t ) {
      return t || I( e, 4, this.length ), ( this[ e ] | this[ e + 1 ] << 8 | this[ e + 2 ] << 16 ) + 16777216 * this[ e + 3 ]
    }, a.prototype.readUInt32BE = function ( e, t ) {
      return t || I( e, 4, this.length ), 16777216 * this[ e ] + ( this[ e + 1 ] << 16 | this[ e + 2 ] << 8 | this[ e + 3 ] )
    }, a.prototype.readIntLE = function ( e, t, n ) {
      e |= 0, t |= 0, n || I( e, t, this.length );
      for ( var r = this[ e ], o = 1, i = 0; ++i < t && ( o *= 256 ); ) r += this[ e + i ] * o;
      return o *= 128, r >= o && ( r -= Math.pow( 2, 8 * t ) ), r
    }, a.prototype.readIntBE = function ( e, t, n ) {
      e |= 0, t |= 0, n || I( e, t, this.length );
      for ( var r = t, o = 1, i = this[ e + --r ]; r > 0 && ( o *= 256 ); ) i += this[ e + --r ] * o;
      return o *= 128, i >= o && ( i -= Math.pow( 2, 8 * t ) ), i
    }, a.prototype.readInt8 = function ( e, t ) {
      return t || I( e, 1, this.length ), 128 & this[ e ] ? ( 255 - this[ e ] + 1 ) * -1 : this[ e ]
    }, a.prototype.readInt16LE = function ( e, t ) {
      t || I( e, 2, this.length );
      var n = this[ e ] | this[ e + 1 ] << 8;
      return 32768 & n ? 4294901760 | n : n
    }, a.prototype.readInt16BE = function ( e, t ) {
      t || I( e, 2, this.length );
      var n = this[ e + 1 ] | this[ e ] << 8;
      return 32768 & n ? 4294901760 | n : n
    }, a.prototype.readInt32LE = function ( e, t ) {
      return t || I( e, 4, this.length ), this[ e ] | this[ e + 1 ] << 8 | this[ e + 2 ] << 16 | this[ e + 3 ] << 24
    }, a.prototype.readInt32BE = function ( e, t ) {
      return t || I( e, 4, this.length ), this[ e ] << 24 | this[ e + 1 ] << 16 | this[ e + 2 ] << 8 | this[ e + 3 ]
    }, a.prototype.readFloatLE = function ( e, t ) {
      return t || I( e, 4, this.length ), Z.read( this, e, !0, 23, 4 )
    }, a.prototype.readFloatBE = function ( e, t ) {
      return t || I( e, 4, this.length ), Z.read( this, e, !1, 23, 4 )
    }, a.prototype.readDoubleLE = function ( e, t ) {
      return t || I( e, 8, this.length ), Z.read( this, e, !0, 52, 8 )
    }, a.prototype.readDoubleBE = function ( e, t ) {
      return t || I( e, 8, this.length ), Z.read( this, e, !1, 52, 8 )
    }, a.prototype.writeUIntLE = function ( e, t, n, r ) {
      if ( e = +e, t |= 0, n |= 0, !r ) {
        var o = Math.pow( 2, 8 * n ) - 1;
        R( this, e, t, n, o, 0 )
      }
      var i = 1,
        a = 0;
      for ( this[ t ] = 255 & e; ++a < n && ( i *= 256 ); ) this[ t + a ] = e / i & 255;
      return t + n
    }, a.prototype.writeUIntBE = function ( e, t, n, r ) {
      if ( e = +e, t |= 0, n |= 0, !r ) {
        var o = Math.pow( 2, 8 * n ) - 1;
        R( this, e, t, n, o, 0 )
      }
      var i = n - 1,
        a = 1;
      for ( this[ t + i ] = 255 & e; --i >= 0 && ( a *= 256 ); ) this[ t + i ] = e / a & 255;
      return t + n
    }, a.prototype.writeUInt8 = function ( e, t, n ) {
      return e = +e, t |= 0, n || R( this, e, t, 1, 255, 0 ), a.TYPED_ARRAY_SUPPORT || ( e = Math.floor( e ) ), this[ t ] = 255 & e, t + 1
    }, a.prototype.writeUInt16LE = function ( e, t, n ) {
      return e = +e, t |= 0, n || R( this, e, t, 2, 65535, 0 ), a.TYPED_ARRAY_SUPPORT ? ( this[ t ] = 255 & e, this[ t + 1 ] = e >>> 8 ) : j( this, e, t, !0 ), t + 2
    }, a.prototype.writeUInt16BE = function ( e, t, n ) {
      return e = +e, t |= 0, n || R( this, e, t, 2, 65535, 0 ), a.TYPED_ARRAY_SUPPORT ? ( this[ t ] = e >>> 8, this[ t + 1 ] = 255 & e ) : j( this, e, t, !1 ), t + 2
    }, a.prototype.writeUInt32LE = function ( e, t, n ) {
      return e = +e, t |= 0, n || R( this, e, t, 4, 4294967295, 0 ), a.TYPED_ARRAY_SUPPORT ? ( this[ t + 3 ] = e >>> 24, this[ t + 2 ] = e >>> 16, this[ t + 1 ] = e >>> 8, this[ t ] = 255 & e ) : F( this, e, t, !0 ), t + 4
    }, a.prototype.writeUInt32BE = function ( e, t, n ) {
      return e = +e, t |= 0, n || R( this, e, t, 4, 4294967295, 0 ), a.TYPED_ARRAY_SUPPORT ? ( this[ t ] = e >>> 24, this[ t + 1 ] = e >>> 16, this[ t + 2 ] = e >>> 8, this[ t + 3 ] = 255 & e ) : F( this, e, t, !1 ), t + 4
    }, a.prototype.writeIntLE = function ( e, t, n, r ) {
      if ( e = +e, t |= 0, !r ) {
        var o = Math.pow( 2, 8 * n - 1 );
        R( this, e, t, n, o - 1, -o )
      }
      var i = 0,
        a = 1,
        s = 0;
      for ( this[ t ] = 255 & e; ++i < n && ( a *= 256 ); ) e < 0 && 0 === s && 0 !== this[ t + i - 1 ] && ( s = 1 ), this[ t + i ] = ( e / a >> 0 ) - s & 255;
      return t + n
    }, a.prototype.writeIntBE = function ( e, t, n, r ) {
      if ( e = +e, t |= 0, !r ) {
        var o = Math.pow( 2, 8 * n - 1 );
        R( this, e, t, n, o - 1, -o )
      }
      var i = n - 1,
        a = 1,
        s = 0;
      for ( this[ t + i ] = 255 & e; --i >= 0 && ( a *= 256 ); ) e < 0 && 0 === s && 0 !== this[ t + i + 1 ] && ( s = 1 ), this[ t + i ] = ( e / a >> 0 ) - s & 255;
      return t + n
    }, a.prototype.writeInt8 = function ( e, t, n ) {
      return e = +e, t |= 0, n || R( this, e, t, 1, 127, -128 ), a.TYPED_ARRAY_SUPPORT || ( e = Math.floor( e ) ), e < 0 && ( e = 255 + e + 1 ), this[ t ] = 255 & e, t + 1
    }, a.prototype.writeInt16LE = function ( e, t, n ) {
      return e = +e, t |= 0, n || R( this, e, t, 2, 32767, -32768 ), a.TYPED_ARRAY_SUPPORT ? ( this[ t ] = 255 & e, this[ t + 1 ] = e >>> 8 ) : j( this, e, t, !0 ), t + 2
    }, a.prototype.writeInt16BE = function ( e, t, n ) {
      return e = +e, t |= 0, n || R( this, e, t, 2, 32767, -32768 ), a.TYPED_ARRAY_SUPPORT ? ( this[ t ] = e >>> 8, this[ t + 1 ] = 255 & e ) : j( this, e, t, !1 ), t + 2
    }, a.prototype.writeInt32LE = function ( e, t, n ) {
      return e = +e, t |= 0, n || R( this, e, t, 4, 2147483647, -2147483648 ), a.TYPED_ARRAY_SUPPORT ? ( this[ t ] = 255 & e, this[ t + 1 ] = e >>> 8, this[ t + 2 ] = e >>> 16, this[ t + 3 ] = e >>> 24 ) : F( this, e, t, !0 ), t + 4
    }, a.prototype.writeInt32BE = function ( e, t, n ) {
      return e = +e, t |= 0, n || R( this, e, t, 4, 2147483647, -2147483648 ), e < 0 && ( e = 4294967295 + e + 1 ), a.TYPED_ARRAY_SUPPORT ? ( this[ t ] = e >>> 24, this[ t + 1 ] = e >>> 16, this[ t + 2 ] = e >>> 8, this[ t + 3 ] = 255 & e ) : F( this, e, t, !1 ), t + 4
    }, a.prototype.writeFloatLE = function ( e, t, n ) {
      return B( this, e, t, !0, n )
    }, a.prototype.writeFloatBE = function ( e, t, n ) {
      return B( this, e, t, !1, n )
    }, a.prototype.writeDoubleLE = function ( e, t, n ) {
      return z( this, e, t, !0, n )
    }, a.prototype.writeDoubleBE = function ( e, t, n ) {
      return z( this, e, t, !1, n )
    }, a.prototype.copy = function ( e, t, n, r ) {
      if ( n || ( n = 0 ), r || 0 === r || ( r = this.length ), t >= e.length && ( t = e.length ), t || ( t = 0 ), r > 0 && r < n && ( r = n ), r === n ) return 0;
      if ( 0 === e.length || 0 === this.length ) return 0;
      if ( t < 0 ) throw new RangeError( "targetStart out of bounds" );
      if ( n < 0 || n >= this.length ) throw new RangeError( "sourceStart out of bounds" );
      if ( r < 0 ) throw new RangeError( "sourceEnd out of bounds" );
      r > this.length && ( r = this.length ), e.length - t < r - n && ( r = e.length - t + n );
      var o, i = r - n;
      if ( this === e && n < t && t < r )
        for ( o = i - 1; o >= 0; --o ) e[ o + t ] = this[ o + n ];
      else if ( i < 1e3 || !a.TYPED_ARRAY_SUPPORT )
        for ( o = 0; o < i; ++o ) e[ o + t ] = this[ o + n ];
      else Uint8Array.prototype.set.call( e, this.subarray( n, n + i ), t );
      return i
    }, a.prototype.fill = function ( e, t, n, r ) {
      if ( "string" == typeof e ) {
        if ( "string" == typeof t ? ( r = t, t = 0, n = this.length ) : "string" == typeof n && ( r = n, n = this.length ), 1 === e.length ) {
          var o = e.charCodeAt( 0 );
          o < 256 && ( e = o )
        }
        if ( void 0 !== r && "string" != typeof r ) throw new TypeError( "encoding must be a string" );
        if ( "string" == typeof r && !a.isEncoding( r ) ) throw new TypeError( "Unknown encoding: " + r )
      } else "number" == typeof e && ( e &= 255 );
      if ( t < 0 || this.length < t || this.length < n ) throw new RangeError( "Out of range index" );
      if ( n <= t ) return this;
      t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || ( e = 0 );
      var i;
      if ( "number" == typeof e )
        for ( i = t; i < n; ++i ) this[ i ] = e;
      else {
        var s = a.isBuffer( e ) ? e : V( new a( e, r ).toString() ),
          l = s.length;
        for ( i = 0; i < n - t; ++i ) this[ i + t ] = s[ i % l ]
      }
      return this
    };
    var te = /[^+\/0-9A-Za-z-_]/g
  } ).call( t, function () {
    return this
  }() )
}, function ( e, t ) {
  "use strict";

  function n( e ) {
    var t = e.length;
    if ( t % 4 > 0 ) throw new Error( "Invalid string. Length must be a multiple of 4" );
    return "=" === e[ t - 2 ] ? 2 : "=" === e[ t - 1 ] ? 1 : 0
  }

  function r( e ) {
    return 3 * e.length / 4 - n( e )
  }

  function o( e ) {
    var t, r, o, i, a, s, l = e.length;
    a = n( e ), s = new c( 3 * l / 4 - a ), o = a > 0 ? l - 4 : l;
    var f = 0;
    for ( t = 0, r = 0; t < o; t += 4, r += 3 ) i = u[ e.charCodeAt( t ) ] << 18 | u[ e.charCodeAt( t + 1 ) ] << 12 | u[ e.charCodeAt( t + 2 ) ] << 6 | u[ e.charCodeAt( t + 3 ) ], s[ f++ ] = i >> 16 & 255, s[ f++ ] = i >> 8 & 255, s[ f++ ] = 255 & i;
    return 2 === a ? ( i = u[ e.charCodeAt( t ) ] << 2 | u[ e.charCodeAt( t + 1 ) ] >> 4, s[ f++ ] = 255 & i ) : 1 === a && ( i = u[ e.charCodeAt( t ) ] << 10 | u[ e.charCodeAt( t + 1 ) ] << 4 | u[ e.charCodeAt( t + 2 ) ] >> 2, s[ f++ ] = i >> 8 & 255, s[ f++ ] = 255 & i ), s
  }

  function i( e ) {
    return l[ e >> 18 & 63 ] + l[ e >> 12 & 63 ] + l[ e >> 6 & 63 ] + l[ 63 & e ]
  }

  function a( e, t, n ) {
    for ( var r, o = [], a = t; a < n; a += 3 ) r = ( e[ a ] << 16 ) + ( e[ a + 1 ] << 8 ) + e[ a + 2 ], o.push( i( r ) );
    return o.join( "" )
  }

  function s( e ) {
    for ( var t, n = e.length, r = n % 3, o = "", i = [], s = 16383, u = 0, c = n - r; u < c; u += s ) i.push( a( e, u, u + s > c ? c : u + s ) );
    return 1 === r ? ( t = e[ n - 1 ], o += l[ t >> 2 ], o += l[ t << 4 & 63 ], o += "==" ) : 2 === r && ( t = ( e[ n - 2 ] << 8 ) + e[ n - 1 ], o += l[ t >> 10 ], o += l[ t >> 4 & 63 ], o += l[ t << 2 & 63 ], o += "=" ), i.push( o ), i.join( "" )
  }
  t.byteLength = r, t.toByteArray = o, t.fromByteArray = s;
  for ( var l = [], u = [], c = "undefined" != typeof Uint8Array ? Uint8Array : Array, f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", p = 0, d = f.length; p < d; ++p ) l[ p ] = f[ p ], u[ f.charCodeAt( p ) ] = p;
  u[ "-".charCodeAt( 0 ) ] = 62, u[ "_".charCodeAt( 0 ) ] = 63
}, function ( e, t ) {
  t.read = function ( e, t, n, r, o ) {
    var i, a, s = 8 * o - r - 1,
      l = ( 1 << s ) - 1,
      u = l >> 1,
      c = -7,
      f = n ? o - 1 : 0,
      p = n ? -1 : 1,
      d = e[ t + f ];
    for ( f += p, i = d & ( 1 << -c ) - 1, d >>= -c, c += s; c > 0; i = 256 * i + e[ t + f ], f += p, c -= 8 );
    for ( a = i & ( 1 << -c ) - 1, i >>= -c, c += r; c > 0; a = 256 * a + e[ t + f ], f += p, c -= 8 );
    if ( 0 === i ) i = 1 - u;
    else {
      if ( i === l ) return a ? NaN : ( d ? -1 : 1 ) * ( 1 / 0 );
      a += Math.pow( 2, r ), i -= u
    }
    return ( d ? -1 : 1 ) * a * Math.pow( 2, i - r )
  }, t.write = function ( e, t, n, r, o, i ) {
    var a, s, l, u = 8 * i - o - 1,
      c = ( 1 << u ) - 1,
      f = c >> 1,
      p = 23 === o ? Math.pow( 2, -24 ) - Math.pow( 2, -77 ) : 0,
      d = r ? 0 : i - 1,
      h = r ? 1 : -1,
      v = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
    for ( t = Math.abs( t ), isNaN( t ) || t === 1 / 0 ? ( s = isNaN( t ) ? 1 : 0, a = c ) : ( a = Math.floor( Math.log( t ) / Math.LN2 ), t * ( l = Math.pow( 2, -a ) ) < 1 && ( a--, l *= 2 ), t += a + f >= 1 ? p / l : p * Math.pow( 2, 1 - f ), t * l >= 2 && ( a++, l /= 2 ), a + f >= c ? ( s = 0, a = c ) : a + f >= 1 ? ( s = ( t * l - 1 ) * Math.pow( 2, o ), a += f ) : ( s = t * Math.pow( 2, f - 1 ) * Math.pow( 2, o ), a = 0 ) ); o >= 8; e[ n + d ] = 255 & s, d += h, s /= 256, o -= 8 );
    for ( a = a << o | s, u += o; u > 0; e[ n + d ] = 255 & a, d += h, a /= 256, u -= 8 );
    e[ n + d - h ] |= 128 * v
  }
}, function ( e, t ) {
  var n = {}.toString;
  e.exports = Array.isArray || function ( e ) {
    return "[object Array]" == n.call( e )
  }
}, function ( e, t, n ) {
  /*!
   * Chai - getPathValue utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * @see https://github.com/logicalparadox/filtr
   * MIT Licensed
   */
  var r = n( 433 );
  e.exports = function ( e, t ) {
    var n = r( e, t );
    return n.value
  }
}, function ( e, t, n ) {
  /*!
   * ## parsePath(path)
   *
   * Helper function used to parse string object
   * paths. Use in conjunction with `_getPathValue`.
   *
   *      var parsed = parsePath('myobject.property.subprop');
   *
   * ### Paths:
   *
   * * Can be as near infinitely deep and nested
   * * Arrays are also valid using the formal `myobject.document[3].property`.
   * * Literal dots and brackets (not delimiter) must be backslash-escaped.
   *
   * @param {String} path
   * @returns {Object} parsed
   * @api private
   */
  function r( e ) {
    var t = e.replace( /([^\\])\[/g, "$1.[" ),
      n = t.match( /(\\\.|[^.]+?)+/g );
    return n.map( function ( e ) {
      var t = /^\[(\d+)\]$/,
        n = t.exec( e );
      return n ? {
        i: parseFloat( n[ 1 ] )
      } : {
        p: e.replace( /\\([.\[\]])/g, "$1" )
      }
    } )
  }
  /*!
   * ## _getPathValue(parsed, obj)
   *
   * Helper companion function for `.parsePath` that returns
   * the value located at the parsed address.
   *
   *      var value = getPathValue(parsed, obj);
   *
   * @param {Object} parsed definition from `parsePath`.
   * @param {Object} object to search against
   * @param {Number} object to search against
   * @returns {Object|Undefined} value
   * @api private
   */
  function o( e, t, n ) {
    var r, o = t;
    n = void 0 === n ? e.length : n;
    for ( var i = 0, a = n; i < a; i++ ) {
      var s = e[ i ];
      o ? ( "undefined" != typeof s.p ? o = o[ s.p ] : "undefined" != typeof s.i && ( o = o[ s.i ] ), i == a - 1 && ( r = o ) ) : r = void 0
    }
    return r
  }
  /*!
   * Chai - getPathInfo utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  var i = n( 434 );
  e.exports = function ( e, t ) {
    var n = r( e ),
      a = n[ n.length - 1 ],
      s = {
        parent: n.length > 1 ? o( n, t, n.length - 1 ) : t,
        name: a.p || a.i,
        value: o( n, t )
      };
    return s.exists = i( s.name, s.parent ), s
  }
}, function ( e, t, n ) {
  /*!
   * Chai - hasProperty utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  var r = n( 412 ),
    o = {
      number: Number,
      string: String
    };
  e.exports = function ( e, t ) {
    var n = r( t );
    return "null" !== n && "undefined" !== n && ( o[ n ] && "object" != typeof t && ( t = new o[ n ]( t ) ), e in t )
  }
}, function ( e, t, n ) {
  /*!
   * Chai - addProperty utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  var r = n( 422 ),
    o = n( 411 );
  e.exports = function ( e, t, n ) {
    Object.defineProperty( e, t, {
      get: function e() {
        var t = o( this, "ssfi" );
        t && r.includeStack === !1 && o( this, "ssfi", e );
        var i = n.call( this );
        return void 0 === i ? this : i
      },
      configurable: !0
    } )
  }
}, function ( e, t, n ) {
  /*!
   * Chai - addMethod utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  var r = n( 422 ),
    o = n( 411 );
  e.exports = function ( e, t, n ) {
    e[ t ] = function () {
      var i = o( this, "ssfi" );
      i && r.includeStack === !1 && o( this, "ssfi", e[ t ] );
      var a = n.apply( this, arguments );
      return void 0 === a ? this : a
    }
  }
}, function ( e, t ) {
  /*!
   * Chai - overwriteProperty utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  e.exports = function ( e, t, n ) {
    var r = Object.getOwnPropertyDescriptor( e, t ),
      o = function () {};
    r && "function" == typeof r.get && ( o = r.get ), Object.defineProperty( e, t, {
      get: function () {
        var e = n( o ).call( this );
        return void 0 === e ? this : e
      },
      configurable: !0
    } )
  }
}, function ( e, t ) {
  /*!
   * Chai - overwriteMethod utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  e.exports = function ( e, t, n ) {
    var r = e[ t ],
      o = function () {
        return this
      };
    r && "function" == typeof r && ( o = r ), e[ t ] = function () {
      var e = n( o ).apply( this, arguments );
      return void 0 === e ? this : e
    }
  }
}, function ( e, t, n ) {
  /*!
   * Chai - addChainingMethod utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  /*!
   * Module dependencies
   */
  var r = n( 423 ),
    o = n( 411 ),
    i = n( 422 ),
    a = "__proto__" in Object,
    s = /^(?:length|name|arguments|caller)$/,
    l = Function.prototype.call,
    u = Function.prototype.apply;
  e.exports = function ( e, t, n, c ) {
    "function" != typeof c && ( c = function () {} );
    var f = {
      method: n,
      chainingBehavior: c
    };
    e.__methods || ( e.__methods = {} ), e.__methods[ t ] = f, Object.defineProperty( e, t, {
      get: function () {
        f.chainingBehavior.call( this );
        var t = function e() {
          var t = o( this, "ssfi" );
          t && i.includeStack === !1 && o( this, "ssfi", e );
          var n = f.method.apply( this, arguments );
          return void 0 === n ? this : n
        };
        if ( a ) {
          var n = t.__proto__ = Object.create( this );
          n.call = l, n.apply = u
        } else {
          var c = Object.getOwnPropertyNames( e );
          c.forEach( function ( n ) {
            if ( !s.test( n ) ) {
              var r = Object.getOwnPropertyDescriptor( e, n );
              Object.defineProperty( t, n, r )
            }
          } )
        }
        return r( this, t ), t
      },
      configurable: !0
    } )
  }
}, function ( e, t ) {
  /*!
   * Chai - overwriteChainableMethod utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  e.exports = function ( e, t, n, r ) {
    var o = e.__methods[ t ],
      i = o.chainingBehavior;
    o.chainingBehavior = function () {
      var e = r( i ).call( this );
      return void 0 === e ? this : e
    };
    var a = o.method;
    o.method = function () {
      var e = n( a ).apply( this, arguments );
      return void 0 === e ? this : e
    }
  }
}, function ( e, t, n ) {
  /*!
   * chai
   * http://chaijs.com
   * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  var r = n( 422 );
  e.exports = function ( e, t ) {
    /*!
     * Assertion Constructor
     *
     * Creates object for chaining.
     *
     * @api private
     */
    function n( e, t, n ) {
      i( this, "ssfi", n || arguments.callee ), i( this, "object", e ), i( this, "message", t )
    }
    /*!
     * Module dependencies.
     */
    var o = e.AssertionError,
      i = t.flag;
    /*!
     * Module export.
     */
    e.Assertion = n, Object.defineProperty( n, "includeStack", {
        get: function () {
          return console.warn( "Assertion.includeStack is deprecated, use chai.config.includeStack instead." ), r.includeStack
        },
        set: function ( e ) {
          console.warn( "Assertion.includeStack is deprecated, use chai.config.includeStack instead." ), r.includeStack = e
        }
      } ), Object.defineProperty( n, "showDiff", {
        get: function () {
          return console.warn( "Assertion.showDiff is deprecated, use chai.config.showDiff instead." ), r.showDiff
        },
        set: function ( e ) {
          console.warn( "Assertion.showDiff is deprecated, use chai.config.showDiff instead." ), r.showDiff = e
        }
      } ), n.addProperty = function ( e, n ) {
        t.addProperty( this.prototype, e, n )
      }, n.addMethod = function ( e, n ) {
        t.addMethod( this.prototype, e, n )
      }, n.addChainableMethod = function ( e, n, r ) {
        t.addChainableMethod( this.prototype, e, n, r )
      }, n.overwriteProperty = function ( e, n ) {
        t.overwriteProperty( this.prototype, e, n )
      }, n.overwriteMethod = function ( e, n ) {
        t.overwriteMethod( this.prototype, e, n )
      }, n.overwriteChainableMethod = function ( e, n, r ) {
        t.overwriteChainableMethod( this.prototype, e, n, r )
      }, n.prototype.assert = function ( e, n, a, s, l, u ) {
        var c = t.test( this, arguments );
        if ( !0 !== u && ( u = !1 ), !0 !== r.showDiff && ( u = !1 ), !c ) {
          var n = t.getMessage( this, arguments ),
            f = t.getActual( this, arguments );
          throw new o( n, {
            actual: f,
            expected: s,
            showDiff: u
          }, r.includeStack ? this.assert : i( this, "ssfi" ) )
        }
      },
      /*!
       * ### ._obj
       *
       * Quick reference to stored `actual` value for plugin developers.
       *
       * @api private
       */
      Object.defineProperty( n.prototype, "_obj", {
        get: function () {
          return i( this, "object" )
        },
        set: function ( e ) {
          i( this, "object", e )
        }
      } )
  }
}, function ( e, t ) {
  /*!
   * chai
   * http://chaijs.com
   * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  e.exports = function ( e, t ) {
    function n( e, n ) {
      n && M( this, "message", n ), e = e.toLowerCase();
      var r = M( this, "object" ),
        o = ~[ "a", "e", "i", "o", "u" ].indexOf( e.charAt( 0 ) ) ? "an " : "a ";
      this.assert( e === t.type( r ), "expected #{this} to be " + o + e, "expected #{this} not to be " + o + e )
    }

    function r() {
      M( this, "contains", !0 )
    }

    function o( e, n ) {
      t.expectTypes( this, [ "array", "object", "string" ] ), n && M( this, "message", n );
      var r = M( this, "object" ),
        o = !1;
      if ( "array" === t.type( r ) && "object" === t.type( e ) ) {
        for ( var i in r )
          if ( t.eql( r[ i ], e ) ) {
            o = !0;
            break
          }
      } else if ( "object" === t.type( e ) ) {
        if ( !M( this, "negate" ) ) {
          for ( var a in e ) new A( r ).property( a, e[ a ] );
          return
        }
        var s = {};
        for ( var a in e ) s[ a ] = r[ a ];
        o = t.eql( s, e )
      } else o = void 0 != r && ~r.indexOf( e );
      this.assert( o, "expected #{this} to include " + t.inspect( e ), "expected #{this} to not include " + t.inspect( e ) )
    }

    function i() {
      var e = M( this, "object" ),
        t = Object.prototype.toString.call( e );
      this.assert( "[object Arguments]" === t, "expected #{this} to be arguments but got " + t, "expected #{this} to not be arguments" )
    }

    function a( e, t ) {
      t && M( this, "message", t );
      var n = M( this, "object" );
      return M( this, "deep" ) ? this.eql( e ) : void this.assert( e === n, "expected #{this} to equal #{exp}", "expected #{this} to not equal #{exp}", e, this._obj, !0 )
    }

    function s( e, n ) {
      n && M( this, "message", n ), this.assert( t.eql( e, M( this, "object" ) ), "expected #{this} to deeply equal #{exp}", "expected #{this} to not deeply equal #{exp}", e, this._obj, !0 )
    }

    function l( e, t ) {
      t && M( this, "message", t );
      var n = M( this, "object" );
      if ( M( this, "doLength" ) ) {
        new A( n, t ).to.have.property( "length" );
        var r = n.length;
        this.assert( r > e, "expected #{this} to have a length above #{exp} but got #{act}", "expected #{this} to not have a length above #{exp}", e, r )
      } else this.assert( n > e, "expected #{this} to be above " + e, "expected #{this} to be at most " + e )
    }

    function u( e, t ) {
      t && M( this, "message", t );
      var n = M( this, "object" );
      if ( M( this, "doLength" ) ) {
        new A( n, t ).to.have.property( "length" );
        var r = n.length;
        this.assert( r >= e, "expected #{this} to have a length at least #{exp} but got #{act}", "expected #{this} to have a length below #{exp}", e, r )
      } else this.assert( n >= e, "expected #{this} to be at least " + e, "expected #{this} to be below " + e )
    }

    function c( e, t ) {
      t && M( this, "message", t );
      var n = M( this, "object" );
      if ( M( this, "doLength" ) ) {
        new A( n, t ).to.have.property( "length" );
        var r = n.length;
        this.assert( r < e, "expected #{this} to have a length below #{exp} but got #{act}", "expected #{this} to not have a length below #{exp}", e, r )
      } else this.assert( n < e, "expected #{this} to be below " + e, "expected #{this} to be at least " + e )
    }

    function f( e, t ) {
      t && M( this, "message", t );
      var n = M( this, "object" );
      if ( M( this, "doLength" ) ) {
        new A( n, t ).to.have.property( "length" );
        var r = n.length;
        this.assert( r <= e, "expected #{this} to have a length at most #{exp} but got #{act}", "expected #{this} to have a length above #{exp}", e, r )
      } else this.assert( n <= e, "expected #{this} to be at most " + e, "expected #{this} to be above " + e )
    }

    function p( e, n ) {
      n && M( this, "message", n );
      var r = t.getName( e );
      this.assert( M( this, "object" ) instanceof e, "expected #{this} to be an instance of " + r, "expected #{this} to not be an instance of " + r )
    }

    function d( e, n ) {
      n && M( this, "message", n );
      var r = M( this, "object" );
      this.assert( r.hasOwnProperty( e ), "expected #{this} to have own property " + t.inspect( e ), "expected #{this} to not have own property " + t.inspect( e ) )
    }

    function h( e, n, r ) {
      "string" == typeof n && ( r = n, n = null ), r && M( this, "message", r );
      var o = M( this, "object" ),
        i = Object.getOwnPropertyDescriptor( Object( o ), e );
      i && n ? this.assert( t.eql( n, i ), "expected the own property descriptor for " + t.inspect( e ) + " on #{this} to match " + t.inspect( n ) + ", got " + t.inspect( i ), "expected the own property descriptor for " + t.inspect( e ) + " on #{this} to not match " + t.inspect( n ), n, i, !0 ) : this.assert( i, "expected #{this} to have an own property descriptor for " + t.inspect( e ), "expected #{this} to not have an own property descriptor for " + t.inspect( e ) ), M( this, "object", i )
    }

    function v() {
      M( this, "doLength", !0 )
    }

    function g( e, t ) {
      t && M( this, "message", t );
      var n = M( this, "object" );
      new A( n, t ).to.have.property( "length" );
      var r = n.length;
      this.assert( r == e, "expected #{this} to have a length of #{exp} but got #{act}", "expected #{this} to not have a length of #{act}", e, r )
    }

    function m( e, t ) {
      t && M( this, "message", t );
      var n = M( this, "object" );
      this.assert( e.exec( n ), "expected #{this} to match " + e, "expected #{this} not to match " + e )
    }

    function y( e ) {
      var n, r = M( this, "object" ),
        o = !0,
        i = "keys must be given single argument of Array|Object|String, or multiple String arguments";
      switch ( t.type( e ) ) {
        case "array":
          if ( arguments.length > 1 ) throw new Error( i );
          break;
        case "object":
          if ( arguments.length > 1 ) throw new Error( i );
          e = Object.keys( e );
          break;
        default:
          e = Array.prototype.slice.call( arguments )
      }
      if ( !e.length ) throw new Error( "keys required" );
      var a = Object.keys( r ),
        s = e,
        l = e.length,
        u = M( this, "any" ),
        c = M( this, "all" );
      if ( u || c || ( c = !0 ), u ) {
        var f = s.filter( function ( e ) {
          return ~a.indexOf( e )
        } );
        o = f.length > 0
      }
      if ( c && ( o = e.every( function ( e ) {
          return ~a.indexOf( e )
        } ), M( this, "negate" ) || M( this, "contains" ) || ( o = o && e.length == a.length ) ), l > 1 ) {
        e = e.map( function ( e ) {
          return t.inspect( e )
        } );
        var p = e.pop();
        c && ( n = e.join( ", " ) + ", and " + p ), u && ( n = e.join( ", " ) + ", or " + p )
      } else n = t.inspect( e[ 0 ] );
      n = ( l > 1 ? "keys " : "key " ) + n, n = ( M( this, "contains" ) ? "contain " : "have " ) + n, this.assert( o, "expected #{this} to " + n, "expected #{this} to not " + n, s.slice( 0 ).sort(), a.sort(), !0 )
    }

    function b( e, n, r ) {
      r && M( this, "message", r );
      var o = M( this, "object" );
      new A( o, r ).is.a( "function" );
      var i = !1,
        a = null,
        s = null,
        l = null;
      0 === arguments.length ? ( n = null, e = null ) : e && ( e instanceof RegExp || "string" == typeof e ) ? ( n = e, e = null ) : e && e instanceof Error ? ( a = e, e = null, n = null ) : "function" == typeof e ? ( s = e.prototype.name, ( !s || "Error" === s && e !== Error ) && ( s = e.name || ( new e ).name ) ) : e = null;
      try {
        o()
      } catch ( r ) {
        if ( a ) return this.assert( r === a, "expected #{this} to throw #{exp} but #{act} was thrown", "expected #{this} to not throw #{exp}", a instanceof Error ? a.toString() : a, r instanceof Error ? r.toString() : r ), M( this, "object", r ), this;
        if ( e && ( this.assert( r instanceof e, "expected #{this} to throw #{exp} but #{act} was thrown", "expected #{this} to not throw #{exp} but #{act} was thrown", s, r instanceof Error ? r.toString() : r ), !n ) ) return M( this, "object", r ), this;
        var u = "error" === t.type( r ) && "message" in r ? r.message : "" + r;
        if ( null != u && n && n instanceof RegExp ) return this.assert( n.exec( u ), "expected #{this} to throw error matching #{exp} but got #{act}", "expected #{this} to throw error not matching #{exp}", n, u ), M( this, "object", r ), this;
        if ( null != u && n && "string" == typeof n ) return this.assert( ~u.indexOf( n ), "expected #{this} to throw error including #{exp} but got #{act}", "expected #{this} to throw error not including #{act}", n, u ), M( this, "object", r ), this;
        i = !0, l = r
      }
      var c = "",
        f = null !== s ? s : a ? "#{exp}" : "an error";
      i && ( c = " but #{act} was thrown" ), this.assert( i === !0, "expected #{this} to throw " + f + c, "expected #{this} to not throw " + f + c, a instanceof Error ? a.toString() : a, l instanceof Error ? l.toString() : l ), M( this, "object", l )
    }

    function x( e, n ) {
      n && M( this, "message", n );
      var r = M( this, "object" ),
        o = M( this, "itself" ),
        i = "function" !== t.type( r ) || o ? r[ e ] : r.prototype[ e ];
      this.assert( "function" == typeof i, "expected #{this} to respond to " + t.inspect( e ), "expected #{this} to not respond to " + t.inspect( e ) )
    }

    function w( e, n ) {
      n && M( this, "message", n );
      var r = M( this, "object" ),
        o = e( r );
      this.assert( o, "expected #{this} to satisfy " + t.objDisplay( e ), "expected #{this} to not satisfy" + t.objDisplay( e ), !this.negate, o )
    }

    function _( e, n, r ) {
      r && M( this, "message", r );
      var o = M( this, "object" );
      if ( new A( o, r ).is.a( "number" ), "number" !== t.type( e ) || "number" !== t.type( n ) ) throw new Error( "the arguments to closeTo or approximately must be numbers" );
      this.assert( Math.abs( o - e ) <= n, "expected #{this} to be close to " + e + " +/- " + n, "expected #{this} not to be close to " + e + " +/- " + n )
    }

    function C( e, t, n ) {
      return e.every( function ( e ) {
        return n ? t.some( function ( t ) {
          return n( e, t )
        } ) : t.indexOf( e ) !== -1
      } )
    }

    function k( e, t ) {
      t && M( this, "message", t );
      var n = M( this, "object" );
      new A( e ).to.be.an( "array" ), this.assert( e.indexOf( n ) > -1, "expected #{this} to be one of #{exp}", "expected #{this} to not be one of #{exp}", e, n )
    }

    function E( e, t, n ) {
      n && M( this, "message", n );
      var r = M( this, "object" );
      new A( e, n ).to.have.property( t ), new A( r ).is.a( "function" );
      var o = e[ t ];
      r(), this.assert( o !== e[ t ], "expected ." + t + " to change", "expected ." + t + " to not change" )
    }

    function S( e, t, n ) {
      n && M( this, "message", n );
      var r = M( this, "object" );
      new A( e, n ).to.have.property( t ), new A( r ).is.a( "function" );
      var o = e[ t ];
      r(), this.assert( e[ t ] - o > 0, "expected ." + t + " to increase", "expected ." + t + " to not increase" )
    }

    function T( e, t, n ) {
      n && M( this, "message", n );
      var r = M( this, "object" );
      new A( e, n ).to.have.property( t ), new A( r ).is.a( "function" );
      var o = e[ t ];
      r(), this.assert( e[ t ] - o < 0, "expected ." + t + " to decrease", "expected ." + t + " to not decrease" )
    }
    var A = e.Assertion,
      M = ( Object.prototype.toString, t.flag );
    [ "to", "be", "been", "is", "and", "has", "have", "with", "that", "which", "at", "of", "same" ].forEach( function ( e ) {
      A.addProperty( e, function () {
        return this
      } )
    } ), A.addProperty( "not", function () {
      M( this, "negate", !0 )
    } ), A.addProperty( "deep", function () {
      M( this, "deep", !0 )
    } ), A.addProperty( "any", function () {
      M( this, "any", !0 ), M( this, "all", !1 )
    } ), A.addProperty( "all", function () {
      M( this, "all", !0 ), M( this, "any", !1 )
    } ), A.addChainableMethod( "an", n ), A.addChainableMethod( "a", n ), A.addChainableMethod( "include", o, r ), A.addChainableMethod( "contain", o, r ), A.addChainableMethod( "contains", o, r ), A.addChainableMethod( "includes", o, r ), A.addProperty( "ok", function () {
      this.assert( M( this, "object" ), "expected #{this} to be truthy", "expected #{this} to be falsy" )
    } ), A.addProperty( "true", function () {
      this.assert( !0 === M( this, "object" ), "expected #{this} to be true", "expected #{this} to be false", !this.negate )
    } ), A.addProperty( "false", function () {
      this.assert( !1 === M( this, "object" ), "expected #{this} to be false", "expected #{this} to be true", !!this.negate )
    } ), A.addProperty( "null", function () {
      this.assert( null === M( this, "object" ), "expected #{this} to be null", "expected #{this} not to be null" )
    } ), A.addProperty( "undefined", function () {
      this.assert( void 0 === M( this, "object" ), "expected #{this} to be undefined", "expected #{this} not to be undefined" )
    } ), A.addProperty( "NaN", function () {
      this.assert( isNaN( M( this, "object" ) ), "expected #{this} to be NaN", "expected #{this} not to be NaN" )
    } ), A.addProperty( "exist", function () {
      this.assert( null != M( this, "object" ), "expected #{this} to exist", "expected #{this} to not exist" )
    } ), A.addProperty( "empty", function () {
      var e = M( this, "object" ),
        t = e;
      Array.isArray( e ) || "string" == typeof object ? t = e.length : "object" == typeof e && ( t = Object.keys( e ).length ), this.assert( !t, "expected #{this} to be empty", "expected #{this} not to be empty" )
    } ), A.addProperty( "arguments", i ), A.addProperty( "Arguments", i ), A.addMethod( "equal", a ), A.addMethod( "equals", a ), A.addMethod( "eq", a ), A.addMethod( "eql", s ), A.addMethod( "eqls", s ), A.addMethod( "above", l ), A.addMethod( "gt", l ), A.addMethod( "greaterThan", l ), A.addMethod( "least", u ), A.addMethod( "gte", u ), A.addMethod( "below", c ), A.addMethod( "lt", c ), A.addMethod( "lessThan", c ), A.addMethod( "most", f ), A.addMethod( "lte", f ), A.addMethod( "within", function ( e, t, n ) {
      n && M( this, "message", n );
      var r = M( this, "object" ),
        o = e + ".." + t;
      if ( M( this, "doLength" ) ) {
        new A( r, n ).to.have.property( "length" );
        var i = r.length;
        this.assert( i >= e && i <= t, "expected #{this} to have a length within " + o, "expected #{this} to not have a length within " + o )
      } else this.assert( r >= e && r <= t, "expected #{this} to be within " + o, "expected #{this} to not be within " + o )
    } ), A.addMethod( "instanceof", p ), A.addMethod( "instanceOf", p ), A.addMethod( "property", function ( e, n, r ) {
      r && M( this, "message", r );
      var o = !!M( this, "deep" ),
        i = o ? "deep property " : "property ",
        a = M( this, "negate" ),
        s = M( this, "object" ),
        l = o ? t.getPathInfo( e, s ) : null,
        u = o ? l.exists : t.hasProperty( e, s ),
        c = o ? l.value : s[ e ];
      if ( a && arguments.length > 1 ) {
        if ( void 0 === c ) throw r = null != r ? r + ": " : "", new Error( r + t.inspect( s ) + " has no " + i + t.inspect( e ) )
      } else this.assert( u, "expected #{this} to have a " + i + t.inspect( e ), "expected #{this} to not have " + i + t.inspect( e ) );
      arguments.length > 1 && this.assert( n === c, "expected #{this} to have a " + i + t.inspect( e ) + " of #{exp}, but got #{act}", "expected #{this} to not have a " + i + t.inspect( e ) + " of #{act}", n, c ), M( this, "object", c )
    } ), A.addMethod( "ownProperty", d ), A.addMethod( "haveOwnProperty", d ), A.addMethod( "ownPropertyDescriptor", h ), A.addMethod( "haveOwnPropertyDescriptor", h ), A.addChainableMethod( "length", g, v ), A.addMethod( "lengthOf", g ), A.addMethod( "match", m ), A.addMethod( "matches", m ), A.addMethod( "string", function ( e, n ) {
      n && M( this, "message", n );
      var r = M( this, "object" );
      new A( r, n ).is.a( "string" ), this.assert( ~r.indexOf( e ), "expected #{this} to contain " + t.inspect( e ), "expected #{this} to not contain " + t.inspect( e ) )
    } ), A.addMethod( "keys", y ), A.addMethod( "key", y ), A.addMethod( "throw", b ), A.addMethod( "throws", b ), A.addMethod( "Throw", b ), A.addMethod( "respondTo", x ), A.addMethod( "respondsTo", x ), A.addProperty( "itself", function () {
      M( this, "itself", !0 )
    } ), A.addMethod( "satisfy", w ), A.addMethod( "satisfies", w ), A.addMethod( "closeTo", _ ), A.addMethod( "approximately", _ ), A.addMethod( "members", function ( e, n ) {
      n && M( this, "message", n );
      var r = M( this, "object" );
      new A( r ).to.be.an( "array" ), new A( e ).to.be.an( "array" );
      var o = M( this, "deep" ) ? t.eql : void 0;
      return M( this, "contains" ) ? this.assert( C( e, r, o ), "expected #{this} to be a superset of #{act}", "expected #{this} to not be a superset of #{act}", r, e ) : void this.assert( C( r, e, o ) && C( e, r, o ), "expected #{this} to have the same members as #{act}", "expected #{this} to not have the same members as #{act}", r, e )
    } ), A.addMethod( "oneOf", k ), A.addChainableMethod( "change", E ), A.addChainableMethod( "changes", E ), A.addChainableMethod( "increase", S ), A.addChainableMethod( "increases", S ), A.addChainableMethod( "decrease", T ), A.addChainableMethod( "decreases", T ), A.addProperty( "extensible", function () {
      var e, t = M( this, "object" );
      try {
        e = Object.isExtensible( t )
      } catch ( t ) {
        if ( !( t instanceof TypeError ) ) throw t;
        e = !1
      }
      this.assert( e, "expected #{this} to be extensible", "expected #{this} to not be extensible" )
    } ), A.addProperty( "sealed", function () {
      var e, t = M( this, "object" );
      try {
        e = Object.isSealed( t )
      } catch ( t ) {
        if ( !( t instanceof TypeError ) ) throw t;
        e = !0
      }
      this.assert( e, "expected #{this} to be sealed", "expected #{this} to not be sealed" )
    } ), A.addProperty( "frozen", function () {
      var e, t = M( this, "object" );
      try {
        e = Object.isFrozen( t )
      } catch ( t ) {
        if ( !( t instanceof TypeError ) ) throw t;
        e = !0
      }
      this.assert( e, "expected #{this} to be frozen", "expected #{this} to not be frozen" )
    } )
  }
}, function ( e, t ) {
  /*!
   * chai
   * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  e.exports = function ( e, t ) {
    e.expect = function ( t, n ) {
      return new e.Assertion( t, n )
    }, e.expect.fail = function ( t, n, r, o ) {
      throw r = r || "expect.fail()", new e.AssertionError( r, {
        actual: t,
        expected: n,
        operator: o
      }, e.expect.fail )
    }
  }
}, function ( e, t ) {
  /*!
   * chai
   * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  e.exports = function ( e, t ) {
    function n() {
      function t() {
        return this instanceof String || this instanceof Number || this instanceof Boolean ? new r( this.valueOf(), null, t ) : new r( this, null, t )
      }

      function n( e ) {
        Object.defineProperty( this, "should", {
          value: e,
          enumerable: !0,
          configurable: !0,
          writable: !0
        } )
      }
      Object.defineProperty( Object.prototype, "should", {
        set: n,
        get: t,
        configurable: !0
      } );
      var o = {};
      return o.fail = function ( t, n, r, i ) {
        throw r = r || "should.fail()", new e.AssertionError( r, {
          actual: t,
          expected: n,
          operator: i
        }, o.fail )
      }, o.equal = function ( e, t, n ) {
        new r( e, n ).to.equal( t )
      }, o.Throw = function ( e, t, n, o ) {
        new r( e, o ).to.Throw( t, n )
      }, o.exist = function ( e, t ) {
        new r( e, t ).to.exist
      }, o.not = {}, o.not.equal = function ( e, t, n ) {
        new r( e, n ).to.not.equal( t )
      }, o.not.Throw = function ( e, t, n, o ) {
        new r( e, o ).to.not.Throw( t, n )
      }, o.not.exist = function ( e, t ) {
        new r( e, t ).to.not.exist
      }, o.throw = o.Throw, o.not.throw = o.not.Throw, o
    }
    var r = e.Assertion;
    e.should = n, e.Should = n
  }
}, function ( e, t ) {
  /*!
   * chai
   * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */
  e.exports = function ( e, t ) {
    /*!
     * Chai dependencies.
     */
    var n = e.Assertion,
      r = t.flag,
      o = e.assert = function ( t, r ) {
        var o = new n( null, null, e.assert );
        o.assert( t, r, "[ negation message unavailable ]" )
      };
    o.fail = function ( t, n, r, i ) {
        throw r = r || "assert.fail()", new e.AssertionError( r, {
          actual: t,
          expected: n,
          operator: i
        }, o.fail )
      }, o.isOk = function ( e, t ) {
        new n( e, t ).is.ok
      }, o.isNotOk = function ( e, t ) {
        new n( e, t ).is.not.ok
      }, o.equal = function ( e, t, i ) {
        var a = new n( e, i, o.equal );
        a.assert( t == r( a, "object" ), "expected #{this} to equal #{exp}", "expected #{this} to not equal #{act}", t, e )
      }, o.notEqual = function ( e, t, i ) {
        var a = new n( e, i, o.notEqual );
        a.assert( t != r( a, "object" ), "expected #{this} to not equal #{exp}", "expected #{this} to equal #{act}", t, e )
      }, o.strictEqual = function ( e, t, r ) {
        new n( e, r ).to.equal( t )
      }, o.notStrictEqual = function ( e, t, r ) {
        new n( e, r ).to.not.equal( t )
      }, o.deepEqual = function ( e, t, r ) {
        new n( e, r ).to.eql( t )
      }, o.notDeepEqual = function ( e, t, r ) {
        new n( e, r ).to.not.eql( t )
      }, o.isAbove = function ( e, t, r ) {
        new n( e, r ).to.be.above( t )
      }, o.isAtLeast = function ( e, t, r ) {
        new n( e, r ).to.be.least( t )
      }, o.isBelow = function ( e, t, r ) {
        new n( e, r ).to.be.below( t )
      }, o.isAtMost = function ( e, t, r ) {
        new n( e, r ).to.be.most( t )
      }, o.isTrue = function ( e, t ) {
        new n( e, t ).is.true
      }, o.isNotTrue = function ( e, t ) {
        new n( e, t ).to.not.equal( !0 )
      }, o.isFalse = function ( e, t ) {
        new n( e, t ).is.false
      }, o.isNotFalse = function ( e, t ) {
        new n( e, t ).to.not.equal( !1 )
      }, o.isNull = function ( e, t ) {
        new n( e, t ).to.equal( null )
      }, o.isNotNull = function ( e, t ) {
        new n( e, t ).to.not.equal( null )
      }, o.isNaN = function ( e, t ) {
        new n( e, t ).to.be.NaN
      }, o.isNotNaN = function ( e, t ) {
        new n( e, t ).not.to.be.NaN
      }, o.isUndefined = function ( e, t ) {
        new n( e, t ).to.equal( void 0 )
      }, o.isDefined = function ( e, t ) {
        new n( e, t ).to.not.equal( void 0 )
      }, o.isFunction = function ( e, t ) {
        new n( e, t ).to.be.a( "function" )
      }, o.isNotFunction = function ( e, t ) {
        new n( e, t ).to.not.be.a( "function" )
      }, o.isObject = function ( e, t ) {
        new n( e, t ).to.be.a( "object" )
      }, o.isNotObject = function ( e, t ) {
        new n( e, t ).to.not.be.a( "object" )
      }, o.isArray = function ( e, t ) {
        new n( e, t ).to.be.an( "array" )
      }, o.isNotArray = function ( e, t ) {
        new n( e, t ).to.not.be.an( "array" )
      }, o.isString = function ( e, t ) {
        new n( e, t ).to.be.a( "string" )
      }, o.isNotString = function ( e, t ) {
        new n( e, t ).to.not.be.a( "string" )
      }, o.isNumber = function ( e, t ) {
        new n( e, t ).to.be.a( "number" )
      }, o.isNotNumber = function ( e, t ) {
        new n( e, t ).to.not.be.a( "number" )
      }, o.isBoolean = function ( e, t ) {
        new n( e, t ).to.be.a( "boolean" )
      }, o.isNotBoolean = function ( e, t ) {
        new n( e, t ).to.not.be.a( "boolean" )
      }, o.typeOf = function ( e, t, r ) {
        new n( e, r ).to.be.a( t )
      }, o.notTypeOf = function ( e, t, r ) {
        new n( e, r ).to.not.be.a( t )
      }, o.instanceOf = function ( e, t, r ) {
        new n( e, r ).to.be.instanceOf( t )
      }, o.notInstanceOf = function ( e, t, r ) {
        new n( e, r ).to.not.be.instanceOf( t )
      }, o.include = function ( e, t, r ) {
        new n( e, r, o.include ).include( t )
      }, o.notInclude = function ( e, t, r ) {
        new n( e, r, o.notInclude ).not.include( t )
      }, o.match = function ( e, t, r ) {
        new n( e, r ).to.match( t )
      }, o.notMatch = function ( e, t, r ) {
        new n( e, r ).to.not.match( t )
      }, o.property = function ( e, t, r ) {
        new n( e, r ).to.have.property( t )
      }, o.notProperty = function ( e, t, r ) {
        new n( e, r ).to.not.have.property( t )
      }, o.deepProperty = function ( e, t, r ) {
        new n( e, r ).to.have.deep.property( t )
      }, o.notDeepProperty = function ( e, t, r ) {
        new n( e, r ).to.not.have.deep.property( t )
      }, o.propertyVal = function ( e, t, r, o ) {
        new n( e, o ).to.have.property( t, r )
      }, o.propertyNotVal = function ( e, t, r, o ) {
        new n( e, o ).to.not.have.property( t, r )
      }, o.deepPropertyVal = function ( e, t, r, o ) {
        new n( e, o ).to.have.deep.property( t, r )
      }, o.deepPropertyNotVal = function ( e, t, r, o ) {
        new n( e, o ).to.not.have.deep.property( t, r )
      }, o.lengthOf = function ( e, t, r ) {
        new n( e, r ).to.have.length( t )
      }, o.throws = function ( e, t, o, i ) {
        ( "string" == typeof t || t instanceof RegExp ) && ( o = t, t = null );
        var a = new n( e, i ).to.throw( t, o );
        return r( a, "object" )
      }, o.doesNotThrow = function ( e, t, r ) {
        "string" == typeof t && ( r = t, t = null ), new n( e, r ).to.not.Throw( t )
      }, o.operator = function ( e, o, i, a ) {
        var s;
        switch ( o ) {
          case "==":
            s = e == i;
            break;
          case "===":
            s = e === i;
            break;
          case ">":
            s = e > i;
            break;
          case ">=":
            s = e >= i;
            break;
          case "<":
            s = e < i;
            break;
          case "<=":
            s = e <= i;
            break;
          case "!=":
            s = e != i;
            break;
          case "!==":
            s = e !== i;
            break;
          default:
            throw new Error( 'Invalid operator "' + o + '"' )
        }
        var l = new n( s, a );
        l.assert( !0 === r( l, "object" ), "expected " + t.inspect( e ) + " to be " + o + " " + t.inspect( i ), "expected " + t.inspect( e ) + " to not be " + o + " " + t.inspect( i ) )
      }, o.closeTo = function ( e, t, r, o ) {
        new n( e, o ).to.be.closeTo( t, r )
      }, o.approximately = function ( e, t, r, o ) {
        new n( e, o ).to.be.approximately( t, r )
      }, o.sameMembers = function ( e, t, r ) {
        new n( e, r ).to.have.same.members( t )
      }, o.sameDeepMembers = function ( e, t, r ) {
        new n( e, r ).to.have.same.deep.members( t )
      }, o.includeMembers = function ( e, t, r ) {
        new n( e, r ).to.include.members( t )
      }, o.includeDeepMembers = function ( e, t, r ) {
        new n( e, r ).to.include.deep.members( t )
      }, o.oneOf = function ( e, t, r ) {
        new n( e, r ).to.be.oneOf( t )
      }, o.changes = function ( e, t, r ) {
        new n( e ).to.change( t, r )
      }, o.doesNotChange = function ( e, t, r ) {
        new n( e ).to.not.change( t, r )
      }, o.increases = function ( e, t, r ) {
        new n( e ).to.increase( t, r )
      }, o.doesNotIncrease = function ( e, t, r ) {
        new n( e ).to.not.increase( t, r )
      }, o.decreases = function ( e, t, r ) {
        new n( e ).to.decrease( t, r )
      }, o.doesNotDecrease = function ( e, t, r ) {
        new n( e ).to.not.decrease( t, r )
      },
      /*!
       * ### .ifError(object)
       *
       * Asserts if value is not a false value, and throws if it is a true value.
       * This is added to allow for chai to be a drop-in replacement for Node's
       * assert class.
       *
       *     var err = new Error('I am a custom error');
       *     assert.ifError(err); // Rethrows err!
       *
       * @name ifError
       * @param {Object} object
       * @namespace Assert
       * @api public
       */
      o.ifError = function ( e ) {
        if ( e ) throw e
      }, o.isExtensible = function ( e, t ) {
        new n( e, t ).to.be.extensible
      }, o.isNotExtensible = function ( e, t ) {
        new n( e, t ).to.not.be.extensible
      }, o.isSealed = function ( e, t ) {
        new n( e, t ).to.be.sealed
      }, o.isNotSealed = function ( e, t ) {
        new n( e, t ).to.not.be.sealed
      }, o.isFrozen = function ( e, t ) {
        new n( e, t ).to.be.frozen
      }, o.isNotFrozen = function ( e, t ) {
        new n( e, t ).to.not.be.frozen
      },
      /*!
       * Aliases.
       */
      function e( t, n ) {
        return o[ n ] = o[ t ], e
      }( "isOk", "ok" )( "isNotOk", "notOk" )( "throws", "throw" )( "throws", "Throw" )( "isExtensible", "extensible" )( "isNotExtensible", "notExtensible" )( "isSealed", "sealed" )( "isNotSealed", "notSealed" )( "isFrozen", "frozen" )( "isNotFrozen", "notFrozen" )
  }
}, function ( e, t, n ) {
  var r, o;
  /*!
  	  Copyright (c) 2016 Jed Watson.
  	  Licensed under the MIT License (MIT), see
  	  http://jedwatson.github.io/classnames
  	*/
  ! function () {
    "use strict";

    function n() {
      for ( var e = [], t = 0; t < arguments.length; t++ ) {
        var r = arguments[ t ];
        if ( r ) {
          var o = typeof r;
          if ( "string" === o || "number" === o ) e.push( r );
          else if ( Array.isArray( r ) ) e.push( n.apply( null, r ) );
          else if ( "object" === o )
            for ( var a in r ) i.call( r, a ) && r[ a ] && e.push( a )
        }
      }
      return e.join( " " )
    }
    var i = {}.hasOwnProperty;
    "undefined" != typeof e && e.exports ? e.exports = n : ( r = [], o = function () {
      return n
    }.apply( t, r ), !( void 0 !== o && ( e.exports = o ) ) )
  }()
}, function ( e, t ) {
  "use strict";

  function n( e ) {
    var t = "%%" + Date.now(),
      n = {},
      r = 0;
    return e = e.replace( /(['"])(?:(?:\\\1|[^\1])*)\1/g, function ( e ) {
      var o = t + "_" + r++;
      return n[ o ] = e, o
    } ), e = e.replace( /\/\/.*$/gm, "" ), e = e.replace( /\/\*(?:(?!\*\/)[\S\s])+\*\//g, "" ), e.replace( new RegExp( t + "_\\d+", "g" ), function ( e ) {
      return n[ e ]
    } )
  }
  Object.defineProperty( t, "__esModule", {
    value: !0
  } ), t.default = n
}, function ( e, t, n ) {
  ! function ( e ) {
    e( n( 401 ) )
  }( function ( e ) {
    "use strict";

    function t( e, t, n ) {
      return /^(?:operator|sof|keyword c|case|new|export|default|[\[{}\(,;:]|=>)$/.test( t.lastType ) || "quasi" == t.lastType && /\{\s*$/.test( e.string.slice( 0, e.pos - ( n || 0 ) ) )
    }
    e.defineMode( "javascript", function ( n, r ) {
      function o( e ) {
        for ( var t, n = !1, r = !1; null != ( t = e.next() ); ) {
          if ( !n ) {
            if ( "/" == t && !r ) return;
            "[" == t ? r = !0 : r && "]" == t && ( r = !1 )
          }
          n = !n && "\\" == t
        }
      }

      function i( e, t, n ) {
        return Ee = e, Se = n, t
      }

      function a( e, n ) {
        var r = e.next();
        if ( '"' == r || "'" == r ) return n.tokenize = s( r ), n.tokenize( e, n );
        if ( "." == r && e.match( /^\d+(?:[eE][+\-]?\d+)?/ ) ) return i( "number", "number" );
        if ( "." == r && e.match( ".." ) ) return i( "spread", "meta" );
        if ( /[\[\]{}\(\),;\:\.]/.test( r ) ) return i( r );
        if ( "=" == r && e.eat( ">" ) ) return i( "=>", "operator" );
        if ( "0" == r && e.eat( /x/i ) ) return e.eatWhile( /[\da-f]/i ), i( "number", "number" );
        if ( "0" == r && e.eat( /o/i ) ) return e.eatWhile( /[0-7]/i ), i( "number", "number" );
        if ( "0" == r && e.eat( /b/i ) ) return e.eatWhile( /[01]/i ), i( "number", "number" );
        if ( /\d/.test( r ) ) return e.match( /^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/ ), i( "number", "number" );
        if ( "/" == r ) return e.eat( "*" ) ? ( n.tokenize = l, l( e, n ) ) : e.eat( "/" ) ? ( e.skipToEnd(), i( "comment", "comment" ) ) : t( e, n, 1 ) ? ( o( e ), e.match( /^\b(([gimyu])(?![gimyu]*\2))+\b/ ), i( "regexp", "string-2" ) ) : ( e.eatWhile( Le ), i( "operator", "operator", e.current() ) );
        if ( "`" == r ) return n.tokenize = u, u( e, n );
        if ( "#" == r ) return e.skipToEnd(), i( "error", "error" );
        if ( Le.test( r ) ) return ">" == r && n.lexical && ">" == n.lexical.type || e.eatWhile( Le ), i( "operator", "operator", e.current() );
        if ( Pe.test( r ) ) {
          e.eatWhile( Pe );
          var a = e.current(),
            c = De.propertyIsEnumerable( a ) && De[ a ];
          return c && "." != n.lastType ? i( c.type, c.style, a ) : i( "variable", "variable", a )
        }
      }

      function s( e ) {
        return function ( t, n ) {
          var r, o = !1;
          if ( Me && "@" == t.peek() && t.match( Ie ) ) return n.tokenize = a, i( "jsonld-keyword", "meta" );
          for ( ; null != ( r = t.next() ) && ( r != e || o ); ) o = !o && "\\" == r;
          return o || ( n.tokenize = a ), i( "string", "string" )
        }
      }

      function l( e, t ) {
        for ( var n, r = !1; n = e.next(); ) {
          if ( "/" == n && r ) {
            t.tokenize = a;
            break
          }
          r = "*" == n
        }
        return i( "comment", "comment" )
      }

      function u( e, t ) {
        for ( var n, r = !1; null != ( n = e.next() ); ) {
          if ( !r && ( "`" == n || "$" == n && e.eat( "{" ) ) ) {
            t.tokenize = a;
            break
          }
          r = !r && "\\" == n
        }
        return i( "quasi", "string-2", e.current() )
      }

      function c( e, t ) {
        t.fatArrowAt && ( t.fatArrowAt = null );
        var n = e.string.indexOf( "=>", e.start );
        if ( !( n < 0 ) ) {
          if ( Ne ) {
            var r = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec( e.string.slice( e.start, n ) );
            r && ( n = r.index )
          }
          for ( var o = 0, i = !1, a = n - 1; a >= 0; --a ) {
            var s = e.string.charAt( a ),
              l = Re.indexOf( s );
            if ( l >= 0 && l < 3 ) {
              if ( !o ) {
                ++a;
                break
              }
              if ( 0 == --o ) {
                "(" == s && ( i = !0 );
                break
              }
            } else if ( l >= 3 && l < 6 ) ++o;
            else if ( Pe.test( s ) ) i = !0;
            else {
              if ( /["'\/]/.test( s ) ) return;
              if ( i && !o ) {
                ++a;
                break
              }
            }
          }
          i && !o && ( t.fatArrowAt = a )
        }
      }

      function f( e, t, n, r, o, i ) {
        this.indented = e, this.column = t, this.type = n, this.prev = o, this.info = i, null != r && ( this.align = r )
      }

      function p( e, t ) {
        for ( var n = e.localVars; n; n = n.next )
          if ( n.name == t ) return !0;
        for ( var r = e.context; r; r = r.prev )
          for ( var n = r.vars; n; n = n.next )
            if ( n.name == t ) return !0
      }

      function d( e, t, n, r, o ) {
        var i = e.cc;
        for ( Fe.state = e, Fe.stream = o, Fe.marked = null, Fe.cc = i, Fe.style = t, e.lexical.hasOwnProperty( "align" ) || ( e.lexical.align = !0 );; ) {
          var a = i.length ? i.pop() : Oe ? C : _;
          if ( a( n, r ) ) {
            for ( ; i.length && i[ i.length - 1 ].lex; ) i.pop()();
            return Fe.marked ? Fe.marked : "variable" == n && p( e, r ) ? "variable-2" : t
          }
        }
      }

      function h() {
        for ( var e = arguments.length - 1; e >= 0; e-- ) Fe.cc.push( arguments[ e ] )
      }

      function v() {
        return h.apply( null, arguments ), !0
      }

      function g( e ) {
        function t( t ) {
          for ( var n = t; n; n = n.next )
            if ( n.name == e ) return !0;
          return !1
        }
        var n = Fe.state;
        if ( Fe.marked = "def", n.context ) {
          if ( t( n.localVars ) ) return;
          n.localVars = {
            name: e,
            next: n.localVars
          }
        } else {
          if ( t( n.globalVars ) ) return;
          r.globalVars && ( n.globalVars = {
            name: e,
            next: n.globalVars
          } )
        }
      }

      function m() {
        Fe.state.context = {
          prev: Fe.state.context,
          vars: Fe.state.localVars
        }, Fe.state.localVars = Ue
      }

      function y() {
        Fe.state.localVars = Fe.state.context.vars, Fe.state.context = Fe.state.context.prev
      }

      function b( e, t ) {
        var n = function () {
          var n = Fe.state,
            r = n.indented;
          if ( "stat" == n.lexical.type ) r = n.lexical.indented;
          else
            for ( var o = n.lexical; o && ")" == o.type && o.align; o = o.prev ) r = o.indented;
          n.lexical = new f( r, Fe.stream.column(), e, null, n.lexical, t )
        };
        return n.lex = !0, n
      }

      function x() {
        var e = Fe.state;
        e.lexical.prev && ( ")" == e.lexical.type && ( e.indented = e.lexical.indented ), e.lexical = e.lexical.prev )
      }

      function w( e ) {
        function t( n ) {
          return n == e ? v() : ";" == e ? h() : v( t )
        }
        return t
      }

      function _( e, t ) {
        return "var" == e ? v( b( "vardef", t.length ), Z, w( ";" ), x ) : "keyword a" == e ? v( b( "form" ), E, _, x ) : "keyword b" == e ? v( b( "form" ), _, x ) : "{" == e ? v( b( "}" ), V, x ) : ";" == e ? v() : "if" == e ? ( "else" == Fe.state.lexical.info && Fe.state.cc[ Fe.state.cc.length - 1 ] == x && Fe.state.cc.pop()(), v( b( "form" ), E, _, x, re ) ) : "function" == e ? v( ue ) : "for" == e ? v( b( "form" ), oe, _, x ) : "variable" == e ? v( b( "stat" ), F ) : "switch" == e ? v( b( "form" ), E, b( "}", "switch" ), w( "{" ), V, x, x ) : "case" == e ? v( C, w( ":" ) ) : "default" == e ? v( w( ":" ) ) : "catch" == e ? v( b( "form" ), m, w( "(" ), ce, w( ")" ), _, x, y ) : "class" == e ? v( b( "form" ), pe, x ) : "export" == e ? v( b( "stat" ), ge, x ) : "import" == e ? v( b( "stat" ), ye, x ) : "module" == e ? v( b( "form" ), Q, b( "}" ), w( "{" ), V, x, x ) : "type" == e ? v( Y, w( "operator" ), Y, w( ";" ) ) : "async" == e ? v( _ ) : h( b( "stat" ), C, w( ";" ), x )
      }

      function C( e ) {
        return S( e, !1 )
      }

      function k( e ) {
        return S( e, !0 )
      }

      function E( e ) {
        return "(" != e ? h() : v( b( ")" ), C, w( ")" ), x )
      }

      function S( e, t ) {
        if ( Fe.state.fatArrowAt == Fe.stream.start ) {
          var n = t ? L : D;
          if ( "(" == e ) return v( m, b( ")" ), H( Q, ")" ), x, w( "=>" ), n, y );
          if ( "variable" == e ) return h( m, Q, w( "=>" ), n, y )
        }
        var r = t ? O : M;
        return je.hasOwnProperty( e ) ? v( r ) : "function" == e ? v( ue, r ) : "class" == e ? v( b( "form" ), fe, x ) : "keyword c" == e || "async" == e ? v( t ? A : T ) : "(" == e ? v( b( ")" ), T, w( ")" ), x, r ) : "operator" == e || "spread" == e ? v( t ? k : C ) : "[" == e ? v( b( "]" ), Ce, x, r ) : "{" == e ? W( B, "}", null, r ) : "quasi" == e ? h( N, r ) : "new" == e ? v( I( t ) ) : v()
      }

      function T( e ) {
        return e.match( /[;\}\)\],]/ ) ? h() : h( C )
      }

      function A( e ) {
        return e.match( /[;\}\)\],]/ ) ? h() : h( k )
      }

      function M( e, t ) {
        return "," == e ? v( C ) : O( e, t, !1 )
      }

      function O( e, t, n ) {
        var r = 0 == n ? M : O,
          o = 0 == n ? C : k;
        return "=>" == e ? v( m, n ? L : D, y ) : "operator" == e ? /\+\+|--/.test( t ) ? v( r ) : "?" == t ? v( C, w( ":" ), o ) : v( o ) : "quasi" == e ? h( N, r ) : ";" != e ? "(" == e ? W( k, ")", "call", r ) : "." == e ? v( U, r ) : "[" == e ? v( b( "]" ), T, w( "]" ), x, r ) : void 0 : void 0
      }

      function N( e, t ) {
        return "quasi" != e ? h() : "${" != t.slice( t.length - 2 ) ? v( N ) : v( C, P )
      }

      function P( e ) {
        if ( "}" == e ) return Fe.marked = "string-2", Fe.state.tokenize = u, v( N )
      }

      function D( e ) {
        return c( Fe.stream, Fe.state ), h( "{" == e ? _ : C )
      }

      function L( e ) {
        return c( Fe.stream, Fe.state ), h( "{" == e ? _ : k )
      }

      function I( e ) {
        return function ( t ) {
          return "." == t ? v( e ? j : R ) : h( e ? k : C )
        }
      }

      function R( e, t ) {
        if ( "target" == t ) return Fe.marked = "keyword", v( M )
      }

      function j( e, t ) {
        if ( "target" == t ) return Fe.marked = "keyword", v( O )
      }

      function F( e ) {
        return ":" == e ? v( x, _ ) : h( M, w( ";" ), x )
      }

      function U( e ) {
        if ( "variable" == e ) return Fe.marked = "property", v()
      }

      function B( e, t ) {
        return "async" == e ? ( Fe.marked = "property", v( B ) ) : "variable" == e || "keyword" == Fe.style ? ( Fe.marked = "property", v( "get" == t || "set" == t ? z : q ) ) : "number" == e || "string" == e ? ( Fe.marked = Me ? "property" : Fe.style + " property", v( q ) ) : "jsonld-keyword" == e ? v( q ) : "modifier" == e ? v( B ) : "[" == e ? v( C, w( "]" ), q ) : "spread" == e ? v( C ) : ":" == e ? h( q ) : void 0
      }

      function z( e ) {
        return "variable" != e ? h( q ) : ( Fe.marked = "property", v( ue ) )
      }

      function q( e ) {
        return ":" == e ? v( k ) : "(" == e ? h( ue ) : void 0
      }

      function H( e, t ) {
        function n( r, o ) {
          if ( "," == r ) {
            var i = Fe.state.lexical;
            return "call" == i.info && ( i.pos = ( i.pos || 0 ) + 1 ), v( function ( n, r ) {
              return n == t || r == t ? h() : h( e )
            }, n )
          }
          return r == t || o == t ? v() : v( w( t ) )
        }
        return function ( r, o ) {
          return r == t || o == t ? v() : h( e, n )
        }
      }

      function W( e, t, n ) {
        for ( var r = 3; r < arguments.length; r++ ) Fe.cc.push( arguments[ r ] );
        return v( b( t, n ), H( e, t ), x )
      }

      function V( e ) {
        return "}" == e ? v() : h( _, V )
      }

      function G( e, t ) {
        if ( Ne ) {
          if ( ":" == e ) return v( Y );
          if ( "?" == t ) return v( G )
        }
      }

      function Y( e ) {
        return "variable" == e ? ( Fe.marked = "variable-3", v( X ) ) : "string" == e || "number" == e || "atom" == e ? v( X ) : "{" == e ? v( H( $, "}" ) ) : "(" == e ? v( H( J, ")" ), K ) : void 0
      }

      function K( e ) {
        if ( "=>" == e ) return v( Y )
      }

      function $( e ) {
        return "variable" == e || "keyword" == Fe.style ? ( Fe.marked = "property", v( $ ) ) : ":" == e ? v( Y ) : void 0
      }

      function J( e ) {
        return "variable" == e ? v( J ) : ":" == e ? v( Y ) : void 0
      }

      function X( e, t ) {
        return "<" == t ? v( b( ">" ), H( Y, ">" ), x, X ) : "|" == t || "." == e ? v( Y ) : "[" == e ? v( w( "]" ), X ) : void 0
      }

      function Z() {
        return h( Q, G, te, ne )
      }

      function Q( e, t ) {
        return "modifier" == e ? v( Q ) : "variable" == e ? ( g( t ), v() ) : "spread" == e ? v( Q ) : "[" == e ? W( Q, "]" ) : "{" == e ? W( ee, "}" ) : void 0
      }

      function ee( e, t ) {
        return "variable" != e || Fe.stream.match( /^\s*:/, !1 ) ? ( "variable" == e && ( Fe.marked = "property" ), "spread" == e ? v( Q ) : "}" == e ? h() : v( w( ":" ), Q, te ) ) : ( g( t ), v( te ) )
      }

      function te( e, t ) {
        if ( "=" == t ) return v( k )
      }

      function ne( e ) {
        if ( "," == e ) return v( Z )
      }

      function re( e, t ) {
        if ( "keyword b" == e && "else" == t ) return v( b( "form", "else" ), _, x )
      }

      function oe( e ) {
        if ( "(" == e ) return v( b( ")" ), ie, w( ")" ), x )
      }

      function ie( e ) {
        return "var" == e ? v( Z, w( ";" ), se ) : ";" == e ? v( se ) : "variable" == e ? v( ae ) : h( C, w( ";" ), se )
      }

      function ae( e, t ) {
        return "in" == t || "of" == t ? ( Fe.marked = "keyword", v( C ) ) : v( M, se )
      }

      function se( e, t ) {
        return ";" == e ? v( le ) : "in" == t || "of" == t ? ( Fe.marked = "keyword", v( C ) ) : h( C, w( ";" ), le )
      }

      function le( e ) {
        ")" != e && v( C )
      }

      function ue( e, t ) {
        return "*" == t ? ( Fe.marked = "keyword", v( ue ) ) : "variable" == e ? ( g( t ), v( ue ) ) : "(" == e ? v( m, b( ")" ), H( ce, ")" ), x, G, _, y ) : void 0
      }

      function ce( e ) {
        return "spread" == e ? v( ce ) : h( Q, G, te )
      }

      function fe( e, t ) {
        return "variable" == e ? pe( e, t ) : de( e, t )
      }

      function pe( e, t ) {
        if ( "variable" == e ) return g( t ), v( de )
      }

      function de( e, t ) {
        return "extends" == t || "implements" == t ? v( Ne ? Y : C, de ) : "{" == e ? v( b( "}" ), he, x ) : void 0
      }

      function he( e, t ) {
        return "variable" == e || "keyword" == Fe.style ? ( "static" == t || "get" == t || "set" == t || Ne && ( "public" == t || "private" == t || "protected" == t || "readonly" == t || "abstract" == t ) ) && Fe.stream.match( /^\s+[\w$\xa1-\uffff]/, !1 ) ? ( Fe.marked = "keyword", v( he ) ) : ( Fe.marked = "property", v( Ne ? ve : ue, he ) ) : "*" == t ? ( Fe.marked = "keyword", v( he ) ) : ";" == e ? v( he ) : "}" == e ? v() : void 0
      }

      function ve( e, t ) {
        return "?" == t ? v( ve ) : ":" == e ? v( Y, te ) : h( ue )
      }

      function ge( e, t ) {
        return "*" == t ? ( Fe.marked = "keyword", v( _e, w( ";" ) ) ) : "default" == t ? ( Fe.marked = "keyword", v( C, w( ";" ) ) ) : "{" == e ? v( H( me, "}" ), _e, w( ";" ) ) : h( _ )
      }

      function me( e, t ) {
        return "as" == t ? ( Fe.marked = "keyword", v( w( "variable" ) ) ) : "variable" == e ? h( k, me ) : void 0
      }

      function ye( e ) {
        return "string" == e ? v() : h( be, xe, _e )
      }

      function be( e, t ) {
        return "{" == e ? W( be, "}" ) : ( "variable" == e && g( t ), "*" == t && ( Fe.marked = "keyword" ), v( we ) )
      }

      function xe( e ) {
        if ( "," == e ) return v( be, xe )
      }

      function we( e, t ) {
        if ( "as" == t ) return Fe.marked = "keyword", v( be )
      }

      function _e( e, t ) {
        if ( "from" == t ) return Fe.marked = "keyword", v( C )
      }

      function Ce( e ) {
        return "]" == e ? v() : h( H( k, "]" ) )
      }

      function ke( e, t ) {
        return "operator" == e.lastType || "," == e.lastType || Le.test( t.charAt( 0 ) ) || /[,.]/.test( t.charAt( 0 ) )
      }
      var Ee, Se, Te = n.indentUnit,
        Ae = r.statementIndent,
        Me = r.jsonld,
        Oe = r.json || Me,
        Ne = r.typescript,
        Pe = r.wordCharacters || /[\w$\xa1-\uffff]/,
        De = function () {
          function e( e ) {
            return {
              type: e,
              style: "keyword"
            }
          }
          var t = e( "keyword a" ),
            n = e( "keyword b" ),
            r = e( "keyword c" ),
            o = e( "operator" ),
            i = {
              type: "atom",
              style: "atom"
            },
            a = {
              if: e( "if" ),
              while: t,
              with: t,
              else: n,
              do: n,
              try: n,
              finally: n,
              return: r,
              break: r,
              continue: r,
              new: e( "new" ),
              delete: r,
              throw: r,
              debugger: r,
              var: e( "var" ),
              const: e( "var" ),
              let: e( "var" ),
              function: e( "function" ),
              catch: e( "catch" ),
              for: e( "for" ),
              switch: e( "switch" ),
              case: e( "case" ),
              default: e( "default" ),
              in: o,
              typeof: o,
              instanceof: o,
              true: i,
              false: i,
              null: i,
              undefined: i,
              NaN: i,
              Infinity: i,
              this: e( "this" ),
              class: e( "class" ),
              super: e( "atom" ),
              yield: r,
              export: e( "export" ),
              import: e( "import" ),
              extends: r,
              await: r,
              async: e( "async" )
            };
          if ( Ne ) {
            var s = {
                type: "variable",
                style: "variable-3"
              },
              l = {
                interface: e( "class" ),
                implements: r,
                namespace: r,
                module: e( "module" ),
                enum: e( "module" ),
                type: e( "type" ),
                public: e( "modifier" ),
                private: e( "modifier" ),
                protected: e( "modifier" ),
                abstract: e( "modifier" ),
                as: o,
                string: s,
                number: s,
                boolean: s,
                any: s
              };
            for ( var u in l ) a[ u ] = l[ u ]
          }
          return a
        }(),
        Le = /[+\-*&%=<>!?|~^]/,
        Ie = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/,
        Re = "([{}])",
        je = {
          atom: !0,
          number: !0,
          variable: !0,
          string: !0,
          regexp: !0,
          this: !0,
          "jsonld-keyword": !0
        },
        Fe = {
          state: null,
          column: null,
          marked: null,
          cc: null
        },
        Ue = {
          name: "this",
          next: {
            name: "arguments"
          }
        };
      return x.lex = !0, {
        startState: function ( e ) {
          var t = {
            tokenize: a,
            lastType: "sof",
            cc: [],
            lexical: new f( ( e || 0 ) - Te, 0, "block", !1 ),
            localVars: r.localVars,
            context: r.localVars && {
              vars: r.localVars
            },
            indented: e || 0
          };
          return r.globalVars && "object" == typeof r.globalVars && ( t.globalVars = r.globalVars ), t
        },
        token: function ( e, t ) {
          if ( e.sol() && ( t.lexical.hasOwnProperty( "align" ) || ( t.lexical.align = !1 ), t.indented = e.indentation(), c( e, t ) ), t.tokenize != l && e.eatSpace() ) return null;
          var n = t.tokenize( e, t );
          return "comment" == Ee ? n : ( t.lastType = "operator" != Ee || "++" != Se && "--" != Se ? Ee : "incdec", d( t, n, Ee, Se, e ) )
        },
        indent: function ( t, n ) {
          if ( t.tokenize == l ) return e.Pass;
          if ( t.tokenize != a ) return 0;
          var o, i = n && n.charAt( 0 ),
            s = t.lexical;
          if ( !/^\s*else\b/.test( n ) )
            for ( var u = t.cc.length - 1; u >= 0; --u ) {
              var c = t.cc[ u ];
              if ( c == x ) s = s.prev;
              else if ( c != re ) break
            }
          for ( ;
            ( "stat" == s.type || "form" == s.type ) && ( "}" == i || ( o = t.cc[ t.cc.length - 1 ] ) && ( o == M || o == O ) && !/^[,\.=+\-*:?[\(]/.test( n ) ); ) s = s.prev;
          Ae && ")" == s.type && "stat" == s.prev.type && ( s = s.prev );
          var f = s.type,
            p = i == f;
          return "vardef" == f ? s.indented + ( "operator" == t.lastType || "," == t.lastType ? s.info + 1 : 0 ) : "form" == f && "{" == i ? s.indented : "form" == f ? s.indented + Te : "stat" == f ? s.indented + ( ke( t, n ) ? Ae || Te : 0 ) : "switch" != s.info || p || 0 == r.doubleIndentSwitch ? s.align ? s.column + ( p ? 0 : 1 ) : s.indented + ( p ? 0 : Te ) : s.indented + ( /^(?:case|default)\b/.test( n ) ? Te : 2 * Te )
        },
        electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
        blockCommentStart: Oe ? null : "/*",
        blockCommentEnd: Oe ? null : "*/",
        lineComment: Oe ? null : "//",
        fold: "brace",
        closeBrackets: "()[]{}''\"\"``",
        helperType: Oe ? "json" : "javascript",
        jsonldMode: Me,
        jsonMode: Oe,
        expressionAllowed: t,
        skipExpression: function ( e ) {
          var t = e.cc[ e.cc.length - 1 ];
          t != C && t != k || e.cc.pop()
        }
      }
    } ), e.registerHelper( "wordChars", "javascript", /[\w$]/ ), e.defineMIME( "text/javascript", "javascript" ), e.defineMIME( "text/ecmascript", "javascript" ), e.defineMIME( "application/javascript", "javascript" ), e.defineMIME( "application/x-javascript", "javascript" ), e.defineMIME( "application/ecmascript", "javascript" ), e.defineMIME( "application/json", {
      name: "javascript",
      json: !0
    } ), e.defineMIME( "application/x-json", {
      name: "javascript",
      json: !0
    } ), e.defineMIME( "application/ld+json", {
      name: "javascript",
      jsonld: !0
    } ), e.defineMIME( "text/typescript", {
      name: "javascript",
      typescript: !0
    } ), e.defineMIME( "application/typescript", {
      name: "javascript",
      typescript: !0
    } )
  } )
}, function ( e, t, n ) {
  var r = n( 3 );
  r = r ? r.default || r : r, e.exports = {
    options: {
      title: "Data types",
      chapter: "Datatypes"
    },
    content: 'JavaScript has *6* data types. Five of those are so called *primitive* data\ntypes:\n\n- Boolean\n- Number\n- String\n- Null\n- Undefined\n\nEverything else that is not a value of one of the above types is an\n\n- Object\n\nAs we will see in the following slides, objects belong to different kinds of\n"classes" of objects.\n\n<div class="callout secondary">\n\n<i class="fa fa-info-circle" aria-hidden="true"></i> **ES2015**\n\nES2015 introduces a 6th primitive data type: *[Symbol][]*. Symbols are *unique* \nand *immutable* values. \n\n</div>\n',
    pathHash: "4de19bc8ab711854da185d68e4766de0",
    contentConverter: r
  }
}, function ( e, t, n ) {
  n( 392 )( {
    js: n( 397 ),
    javascript: n( 397 )
  } );
  var r = n( 3 );
  r = r ? r.default || r : r, e.exports = {
    options: {
      title: "Booleans, numbers and strings"
    },
    content: '\nThe **Boolean** data type has two values, `true` and `false`.\n\n```js\nvar foo = true;\nvar bar = false;\n```\n\n---\n**Numbers** are [double precision floating point][float] numbers, following the\n[IEEE 754 standard][ieee754]\n\nThis makes it very easy to work with them, since you don\'t have to \ndifferentiate between integer values and floating point values.\n\nThere are various ways that numeric value can be expressed:\n\n```javascript\nvar x = 5;    // "integer"\nvar y = -4.2; // "float"\nvar z = 5e3;  // = 5 * 10^3\n```\n\nAn issue with floating point numbers is the loss of precision, which of course \noccurs in JavaScript as well:\n\n```javascript\n0.1 + 0.2 // 0.30000000000000004\n```\n\nThe maximum integer value that can be used without loss of precision is \n2<sup>53</sup>.\n\n```javascript\nMath.pow(2, 53)     // 9007199254740992\nMath.pow(2, 53) + 1 // 9007199254740992\n```\n\n---\n\n**Strings** are sequences of unicode characters and can either be delimited with\na **single** or **double** quotation mark. Unlike in other languages, such as PHP,\nboth are interpreted in the exact same way.\n\nExample:\n\n```javascript\nvar foo = "bar";\nvar bar = \'baz\';\n```\n\n[float]: http://en.wikipedia.org/wiki/Double-precision_floating-point_format \n[ieee754]: http://en.wikipedia.org/wiki/IEEE_floating_point\n',
    pathHash: "4de19bc8ab711854da185d68e4766de0",
    contentConverter: r
  }
}, function ( e, t, n ) {
  var r = n( 3 );
  r = r ? r.default || r : r;
  var o = n( 399 );
  o = o ? o.default || o : o, e.exports = {
    options: {
      title: "Exercise",
      layout_data: {
        description: "Create three variables `x`, `y`, `z`, where `x` contains a string value, `y` a number and `z` a boolean value. Log the values with `log`.",
        assertion: "assert(\n  output.some(function(x) { return typeof x === 'string' }),\n  'Your log must contain a string.'\n);\nassert(\n  output.some(function(x) { return typeof x === 'number' }),\n  'Your log must contain a number.'\n);\nassert(\n  output.some(function(x) { return typeof x === 'boolean' }),\n  'Your log must contain a boolean.'\n);\n"
      }
    },
    content: "// Hint: You can pass multiple arguments to log:\n// log(a, b)\n",
    pathHash: "4de19bc8ab711854da185d68e4766de0",
    contentConverter: r,
    layout: o
  }
}, function ( e, t, n ) {
  n( 392 )( {
    javascript: n( 397 ),
    js: n( 397 )
  } );
  var r = n( 3 );
  r = r ? r.default || r : r, e.exports = {
    options: {
      title: "null and undefined"
    },
    content: 'JavaScript has two data types to express the **absence of a value**, null and\nundefined.\n\n**null** has the only value `null` and **undefined** has the only value\n`undefined`.\n\nThe difference between those two is subtle and is best explained by how to use\nthem:\n\n- `undefined` is the value JavaScript itself uses to indicate the absence of a\n  value.\n- `null` is the value the engineer should use to indicate the absence of a\n  value.\n\nExamples:\n\n```javascript\nvar foo; // no value is assigned, foo has the value undefined\nvar bar = null; // bar is explicitly set to null\nconsole.log(foo); // logs "undefined"\nconsole.log(bar); // logs "null"\n```\n\nThere are other native occurrence of `undefined` which we will mention later.\n\n<div class="callout primary">\n\n**Remember:** A variable that doesn\'t exist cannot be accessed at all (it will \nthrow a reference error). Instead of saying "the variable is undefined" we \nrather say "the variable is not *declared*" to avoid confusion.\n\n```js\nvar foo;\nconsole.log(foo); // logs `undefined`\nconsole.log(bar); // reference error\n```\n\n</div>\n',
    pathHash: "4de19bc8ab711854da185d68e4766de0",
    contentConverter: r
  }
}, function ( e, t, n ) {
  var r = n( 3 );
  r = r ? r.default || r : r;
  var o = n( 399 );
  o = o ? o.default || o : o, e.exports = {
    options: {
      title: "Exercise",
      layout_data: {
        description: "Log the values `null` and `undefined`.",
        assertion: "assert(\n  output.some(function(x) { return x === null }),\n  'Your log must contain null.'\n);\nassert(\n  output.some(function(x) { return x === void 0; }),\n  'Your log must contain undefined.'\n);\nassert(\n  source.indexOf('undefined') === -1,\n  'Try to log undefined without writing it in the source code.'\n);\n"
      }
    },
    content: "\n",
    pathHash: "4de19bc8ab711854da185d68e4766de0",
    contentConverter: r,
    layout: o
  }
}, function ( e, t, n ) {
  n( 392 )( {
    javascript: n( 397 ),
    js: n( 397 )
  } );
  var r = n( 3 );
  r = r ? r.default || r : r, e.exports = {
    options: {
      title: "Objects"
    },
    content: 'Everything else besides primitive data type values is an *object*.\n\nObjects are *key-value* stores, more specifically *stringkey-value* stores. The \n"keys" of an object are called *properties*.\n\nThe syntax to create a plain object is `{key: value, ...}`, which is called an \nobject literal.  For example:\n\n```javascript\nvar obj = {\n  foo: \'bar\',\n  baz: 42\n};\n```\n\nNote that the above example doesn\'t use *quotation marks* around the property \nnames.  In an object literal, quotation marks can be be omitted if the property \nname would also be a *valid variable name*. If not, they need to be quoted. \n*Number literals* are valid an object literal as  well.\n\nHere are some more examples of valid and invalid property names in object \nliterals:\n\n```js\nvar obj = {\n  foo: 0,        // valid, could be variable name\n  \'bar\': 0,      // string literals are always valid\n  123: 0,        // number literals are always valid\n  1.5: 0,        // ^\n  foo-bar: 0,    // invalid, would not be a valid variable name\n  \'foo-bar\': 0,  // string literals are alwaus valid\n};\n```\n\n<div class="callout warning">\n\n**Important:** No matter which value or syntax you use for a property name, the \nvalue will always be converted to a **string**. \n\n</div>\n\n<div class="callout secondary">\n\n<i class="fa fa-info-circle" aria-hidden="true"></i> **ES2015**\n\nES2015 adds two extensions to object values and object literals:\n\n- *Symbols* are can be used as property names. They are not converted to \nstrings.\n\n- Object literals can contain *[computed property names][computed properties]*:\n    ```js\n    var foo = 42;\n    var obj = {\n      [foo]: 0,\n    };\n    // creates {42: 0}\n    ```\n\n</div>\n\n## References\n\nJust like in Java and other object-oriented programming languages, objects are\nrepresented as *references*. That means if a variable has an object as a value, \nit really has a reference to that object.\n\n```js\nvar user = {name: \'Tom\'}:\n```\n\n:::ascii\n```\n                         ┌──────────────┐\n┌─────┬──────────┐       │  Object#123  │\n│user │ ref:123 ◆┼──────▶├──────┬───────┤\n└─────┴──────────┘       │ name │ "Tom" │\n                         └──────┴───────┘\n```\n:::\n\nAssigning the value to another variable makes both variables point to the same\nobject:\n\n```js\nvar owner = user;\n```\n\n:::ascii\n```\n┌─────┬──────────┐       ┌──────────────┐\n│user │ ref:123 ◆┼──┐    │  Object#123  │\n├─────┼──────────┤  ├───▶├──────┬───────┤\n│owner│ ref:123 ◆┼──┘    │ name │ "Tom" │\n└─────┴──────────┘       └──────┴───────┘\n```\n:::\n\nAssigning to `user.name` will therefore also "change" `owner.name`:\n\n```js\nuser.name = \'Joe\';\nconsole.log(user.name, owner.name);\n// Joe, Joe\n```\n\n:::ascii\n```\n┌─────┬──────────┐       ┌──────────────┐\n│user │ ref:123 ◆┼──┐    │  Object#123  │\n├─────┼──────────┤  ├───▶├──────┬───────┤\n│owner│ ref:123 ◆┼──┘    │ name │ "Joe" │\n└─────┴──────────┘       └──────┴───────┘\n```\n:::\n\nBut assigning a new value to either `user` or `owner` will result in only that\nvariable referring to the new value. The other variable will still refer to the\nsame value.\n\n```js\nowner = {name: \'Kim\'};\n```\n\n:::ascii\n```\n                         ┌──────────────┐\n                         │  Object#123  │\n                    ┌───▶├──────┬───────┤\n┌─────┬──────────┐  │    │ name │ "Joe" │\n│user │ ref:123 ◆┼──┘    └──────┴───────┘\n├─────┼──────────┤                       \n│owner│ ref:456 ◆┼──┐    ┌──────────────┐\n└─────┴──────────┘  │    │  Object#456  │\n                    └───▶├──────┬───────┤\n                         │ name │ "Kim" │\n                         └──────┴───────┘\n```\n:::\n\n---\n\nThe JavaScript standard defines a couple of [built-in objects][] with additional\nproperties and special internal behavior, must notably *arrays* and\n*functions*, which are explained in the next slides.\n\n[built-in objects]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects\n',
    pathHash: "4de19bc8ab711854da185d68e4766de0",
    contentConverter: r
  }
}, function ( e, t, n ) {
  n( 392 )( {
    js: n( 397 )
  } );
  var r = n( 3 );
  r = r ? r.default || r : r, e.exports = {
    options: {
      title: "Prototypes (1)"
    },
    content: 'You may have heard that JavaScript is a *"[prototype-based \nlanguage][prototype]"*, unlike other languages, such as Java, which are \n*"[class-based languages][class]"*.\n\n## What exactly is a prototype?\n\nIn short: A prototype is just another object. If an object `A` has this special \nconnection to object `B`, then we say that "`B` is the prototype of `A`".\n\nIn addition to having "external" properties that can be accessed from code, \nobjects also have *internal/private* properties/state. These cannot be accessed \nfrom code and their concrete implementation depends on the JavaScript engine.\n\nEvery object has an *internal* property `[[Prototype]]` (internal properties \nare usually denoted with `[[...]]` around the name). This property points to \nanother object.\n\n:::ascii\n```\n┌───────────────────────┐       ┌────────────────────────┐\n│           A           │       │           B            │\n├───────────────┬───────┤       ├───────────────┬────────┤\n│ name          │ "Tom" │   ┌──▶│ toString      │ <func> │\n├───────────────┼───────┤   │   ├───────────────┼────────┤\n│ [[Prototype]] │   ◆───┼───┘   │ [[Prototype]] │  null  │\n└───────────────┴───────┘       └───────────────┴────────┘\n```\n:::\n\nMultiple objects can have the same prototype.\n\n:::ascii\n```\n┌───────────────────────┐       ┌────────────────────────┐\n│           A           │       │           B            │\n├───────────────┬───────┤       ├───────────────┬────────┤\n│ name          │ "Tom" │   ┌──▶│ toString      │ <func> │\n├───────────────┼───────┤   │   ├───────────────┼────────┤\n│ [[Prototype]] │   ◆───┼───┘   │ [[Prototype]] │  null  │\n└───────────────┴───────┘       └───────────────┴────────┘\n                                             ▲            \n┌───────────────────────┐                    │            \n│           C           │                    │            \n├───────────────┬───────┤                    │            \n│ time          │ "day" │                    │            \n├───────────────┼───────┤                    │            \n│ [[Prototype]] │   ◆───┼────────────────────┘            \n└───────────────┴───────┘                                 \n```\n:::\n\nSince a prototype is an object, it might itself have a prototype, which may have\na prototype, and so forth.\n\n:::ascii\n```\n┌───────────────────┐                                     \n│         A         │                                     \n├───────────────┬───┤                                     \n│ [[Prototype]] │ ◆─┼────┐                                \n└───────────────┴───┘    │                                \n                         ▼                                \n               ┌───────────────────┐                      \n               │         B         │                      \n               ├───────────────┬───┤                      \n               │ [[Prototype]] │ ◆─┼────┐                 \n               └───────────────┴───┘    │                 \n                                        ▼                 \n                              ┌───────────────────┐       \n                              │         C         │       \n                              ├───────────────┬───┤       \n                              │ [[Prototype]] │ ◆─│─ ─ ─ ▷\n                              └───────────────┴───┘       \n```\n:::\n\nThis is called the *prototype chain*. Almost all objects have the same object \nat the end of the prototype chain, which doesn\'t have a prototype itself.\n\nAn object created using literal notation will have the object \n`Object.prototype` as its prototype. You can verify this using the following \ncommands:\n\n```js\nvar testObject = {};\nObject.getPrototypeOf(testObject) === Object.prototype; // true\n```\n\n:::ascii\n```\n                            ┌────────────────────────┐\n┌───────────────────┐       │    Object.prototype    │\n│    testObject     │       ├───────────────┬────────┤\n├───────────────┬───┤       │ toString      │ <func> │\n│ [[Prototype]] │ ◆─┼──────▶├───────────────┼────────┤\n└───────────────┴───┘       │ hasOwnProperty│ <func> │\n                            ├───────────────┼────────┤\n                            │ [[Prototype]] │  null  │\n                            └───────────────┴────────┘\n```\n:::\n\nIn order to create an object with an object other than `Object.prototype` as \nprototype, one can use [`Object.create`][object.create]:\n\n```js\nvar a = {};\nvar b = Object.create(a);\nObject.getPrototypeOf(b) === a; // true\n```\n\n[prototype]: https://en.wikipedia.org/wiki/Prototype-based_programming\n[class]: https://en.wikipedia.org/wiki/Class-based_programming\n[object.create]: \nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create\n',
    pathHash: "4de19bc8ab711854da185d68e4766de0",
    contentConverter: r
  }
}, function ( e, t, n ) {
  n( 392 )( {
    js: n( 397 )
  } );
  var r = n( 3 );
  r = r ? r.default || r : r, e.exports = {
    options: {
      title: "Prototypes (2)"
    },
    content: '\nNow we know what prototypes are, but not what they *do* or which problem they \nsolve.\n\n## What does a prototype do?\n\nPrototypes come in play when we are accessing the property of an object.\n\n<div class="callout">\n\nWhenver an object property is accessed, the object and its prototype chain are \ntraversed until the property is found. If the end of the prototype chain is \nreached without finding the property, `undefined` is returned.\n\n</div>\n\nConsider the following structure:\n\n:::ascii\n```\n┌───────────────────────┐                                \n│           a           │                                \n├───────────────┬───────┤                                \n│ name          │ "Tom" │                                \n├───────────────┼───────┤                                \n│ [[Prototype]] │   ◆───┼───┐                            \n└───────────────┴───────┘   │                            \n                            ▼                            \n                ┌───────────────────────┐                \n                │           b           │                \n                ├───────────────┬───────┤                \n                │ name          │ "Joe" │                \n                ├───────────────┼───────┤                \n                │ age           │   42  │                \n                ├───────────────┼───────┤                \n                │ [[Prototype]] │   ◆───┼───┐            \n                └───────────────┴───────┘   │            \n                                            ▼            \n                                ┌───────────────────────┐\n                                │           c           │\n                                ├───────────────┬───────┤\n                                │ height        │  180  │\n                                ├───────────────┼───────┤\n                                │ [[Prototype]] │  null │\n                                └───────────────┴───────┘\n```\n:::\n\nThese are the results for accessing different properties on A:\n\n```js\na.name     // Tom        `a` itself has this property, it shadows `b.name`\na.age      // 42         `a`\'s prototype has this property\na.height   // 180        `a`\'s prototype\'s prototype has this property\na.eyeColor // undefined  this property doesn\'t exist\n```\n\n---\n\nThis is also the reason why we can access `.toString()` on almost every object: \nIt is defined in `Object.prototype`, which sits at the end of every prototype \nchain.\n\n```js\nvar user = {name: \'Tom\'};\nuser.toString()\n// "[object Object]"\n```\n\n<div class="callout primary">\n\n**Note**: *Assignments* to properties will (almost) always\ncreate or update a property on object itself, even if a property with the same\nname already exists in the prototype chain. The property in the prototype\nchain is then *shadowed*, similar to variable shadowing in scopes.\n\n</div>\n',
    pathHash: "4de19bc8ab711854da185d68e4766de0",
    contentConverter: r
  }
}, function ( e, t, n ) {
  n( 392 )( {
    javascript: n( 397 )
  } );
  var r = n( 3 );
  r = r ? r.default || r : r, e.exports = {
    options: {
      title: "Built-in objects: Arrays and functions"
    },
    content: '\n## Arrays\n\nArrays are objects, which treat properties with numeric keys (i.e. `0`,\n`1`, `2`, ...) in a special way. For all purposes, they behave like arrays in\nother languages.\n\nJavaScript has a special syntax for creating arrays, `[value, value, ...]`:\n\n```javascript\nvar arr = [1, 2];\n```\n\nIf you run `console.dir([1, 2])` in your browser\'s console, you can inspect the\nstructure of the array object in more detail.\n\nUnlike "plain" objects, array objects have `Array.prototype` as prototype, \nwhich provides all the array methods, such as `.push`, `.map`, etc.\n\n:::ascii\n```\n┌──────────┐       [[Prototype]]        ┌──────────────────┐\n│  obj {}  │───────────────────────────▶│ Object.prototype │\n└──────────┘                            └──────────────────┘\n                                                  ▲         \n                                                  │         \n                                            [[Prototype]]   \n                                                  │         \n┌──────────┐ [[Prototype]]  ┌─────────────────┐   │         \n│  arr []  │───────────────▶│ Array.prototype │───┘         \n└──────────┘                └─────────────────┘             \n```\n:::\n\n---\n\n## Functions\n\nFunctions are the only kind of objects that are *callable*, and JavaScript\nalso has a special syntax for defining them:\n\n```javascript\nfunction foo() {\n  console.log("I\'m a function");\n}\n```\n\nThere are other ways to create functions, which will be explained later.\n\n<div class="callout">\n\nThe most important implication of functions being objects is that "work" just \nlike any other value. Functions can be *passed to* functions and *returned \nfrom* functions, allowing to creation of **higher-order functions**.\n\n</div>\n\nSimilar to arrays, function objects also have a dedicated prototype, \n`Function.prototype`:\n\n:::ascii\n```\n┌──────────┐         [[Prototype]]          ┌──────────────────┐  \n│  obj {}  │───────────────────────────────▶│ Object.prototype │  \n└──────────┘                                └──────────────────┘  \n                                                ▲         ▲       \n                                                │         │       \n                                          [[Prototype]]   │       \n┌──────────┐ [[Prototype]]  ┌─────────────────┐ │         │       \n│  arr []  │───────────────▶│ Array.prototype │─┘         │       \n└──────────┘                └─────────────────┘     [[Prototype]] \n                                                          │       \n                                                          │       \n┌──────────────────┐ [[Prototype]]  ┌──────────────────┐  │       \n│func function(){} │───────────────▶│Function.prototype│──┘       \n└──────────────────┘                └──────────────────┘          \n```\n:::\n',
    pathHash: "4de19bc8ab711854da185d68e4766de0",
    contentConverter: r
  }
}, function ( e, t, n ) {
  var r = n( 3 );
  r = r ? r.default || r : r;
  var o = n( 399 );
  o = o ? o.default || o : o, e.exports = {
    options: {
      title: "Exercise",
      layout_data: {
        description: 'Log two value: an object which has a property `foo` and a value `"bar"`,\nand an array with the values `1`, `2` and `42`.\n',
        assertion: "assert(\n  output.some(function(x) {\n    return JSON.stringify(x) === JSON.stringify({foo: 'bar'});\n  }),\n  'Your log must contain an object with property \"foo\" and value \"bar\". Hint: `{key: value}`.'\n);\n\nassert(\n  output.some(function(x) {\n    return JSON.stringify(x) === JSON.stringify([1, 2, 42]);\n  }),\n  'Your log must contain an array with values 1, 2 and 42. Hint: `[value, ...]`.'\n);\n"
      }
    },
    content: "\n",
    pathHash: "4de19bc8ab711854da185d68e4766de0",
    contentConverter: r,
    layout: o
  }
}, function ( e, t, n ) {
  n( 392 )( {
    js: n( 397 )
  } );
  var r = n( 3 );
  r = r ? r.default || r : r, e.exports = {
    options: {
      title: "Operators",
      chapter: "Expressions & Statements"
    },
    content: '\nLike many C-like programming languages, most operators JavaScript are binary or\nunary, and written in infix notation, i.e. `a op b`.\n\nHere is list of typical operations:\n\n- **[Assignment][]**: `a = b`, `a += b`, `a |= b`, and more\n\n- **[Arithmetic][]**: `a + b`, `a - b`, `a * b`, `a / b`, `a % b`, `+a`, `-a`\n\n- **String concatenation:** `a + b`\n\n- **[Boolean][]:** `a && b`, `a || b`, `!a`\n\n- **[Bitwise][]:** `a & b`, `a | b`, `a ^ b`, `~a`, `a << b`, `a >> b`, `a >>> \nb`\n\n- **Function calls**: `foo()`, `foo(a, b, c)`\n\n- **Increment/Decrement**: `a++`, `++a`, `a--`, `--a`\n\n- **[Conditional][]**: `foo ? bar : baz`\n\n- Others: [`in`][in], [`instanceof`][instanceof], [`typeof`][typeof], \n[`new`][new]\n\nJavaScript also has **comparison** operators and **property accessors**,\nboth of which are explained in more detail in the next slides.\n\n<div class="callout secondary">\n\n<i class="fa fa-info-circle" aria-hidden="true"></i> **ES2016**\n\nES2016 introduces the *[exponentiation operator][pow]*:\n\n```js\nvar result = 5 ** 2; // equivalent to Math.pow(5, 2)\n```\n\n</div>\n\n[assignment]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators\n[arithmetic]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators\n[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators\n[bitwise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators\n[conditional]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator\n\n[in]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in\n[instanceof]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof\n[typeof]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof\n[new]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new\n',
    pathHash: "5a52c91a30c6c2a68c91ce1597eed8fa",
    contentConverter: r
  }
}, function ( e, t, n ) {
  var r = n( 3 );
  r = r ? r.default || r : r;
  var o = n( 399 );
  o = o ? o.default || o : o, e.exports = {
    options: {
      title: "Demo",
      layout_data: {
        description: "Run the code and have a look at the output. Is it what you expect? Try some other values / operators and look at the output (remember to open the console)."
      }
    },
    content: 'var a = 10;\nvar b = 5;\nvar c = "1";\n\nlog(a + b);\nlog(a + c);\nlog(b + Number(c));\n',
    pathHash: "5a52c91a30c6c2a68c91ce1597eed8fa",
    contentConverter: r,
    layout: o
  }
}, function ( e, t, n ) {
  n( 392 )( {
    javascript: n( 397 )
  } );
  var r = n( 3 );
  r = r ? r.default || r : r, e.exports = {
    options: {
      title: "Comparison operators"
    },
    content: '\nAs already established at the beginning, JavaScript is *dynamically typed*. It\nalso performs *type conversion*, if a specific data type is expected and not\nprovided. For example in `a * b`, the values of `a` and `b` will be converted\nto numbers first.\n\nEven though there are [well defined rules][conversion rules] for converting one\ndata type into another, these rules can be quite surprising.\n\n[conversion rules]: http://www.ecma-international.org/ecma-262/5.1/#sec-9\n\nWhat does this have to do with comparison? JavaScript has two kind of comparison\noperators:\n\n- **Loose comparison** (`a == b`, `a != b`)\n- **Strict comparison** (`a === b`, `a !== b`)\n\nThe difference is that *loose* comparison will *convert both values* to the same\ndata type if they are of different data types. *Strict* comparison immediately\nreturns `false` if both values *don\'t have the same type*.\n\nExamples:\n```javascript\n"42" == 42  // true\n"42" === 42 // false\n\n// Objects are compared by reference\n[1,2] == [1,2]  // false\n[1,2] === [1,2] // false\n```\n\nThe following tool visualizes the steps of the *[abstract equality \ncomparison](http://www.ecma-international.org/ecma-262/7.0/#sec-abstract-equality-comparison)* \nalgorithm, which is used for loose comparison.  \n\nYou can select some predefined examples and see which steps are performed \nduring the comparison. The results will probably surprise you. You can also \nprovide your own values.\n\n~~~react comparison\n[\n  ["[1,2]", "\'1,2\'"],\n  ["[0]", "false"],\n  ["\'\\\\n\'", "false"],\n  ["\'0XA19\'", "2585"]\n]\n~~~\n\nAlso have a look at [this table][comparison table] to get a quick overview of \nthe differences between `==` and `===`.\n\nThe above examples hopefully showed you that loose comparison isn\'t that \n"simple" and it\'s not always clear what ends up being compared in the end. For \nthat reason you should follow this advice:\n\n<div class="callout warning">\n\n**You should *always* use strict comparison**, unless you\nexplicitly want to make use of the type conversion (i.e. you know what you are\ndoing).\n\nIf you write an API, make it clear which data type it expects (e.g. through\ncomments).\n\n</div>\n\n[comparison table]: https://dorey.github.io/JavaScript-Equality-Table/\n',
    pathHash: "5a52c91a30c6c2a68c91ce1597eed8fa",
    contentConverter: r
  }
}, function ( e, t, n ) {
  var r = n( 3 );
  r = r ? r.default || r : r;
  var o = n( 399 );
  o = o ? o.default || o : o, e.exports = {
    options: {
      title: "Exercise",
      layout_data: {
        description: "Run the code and have a look at the output. Is it what you expect? What are reasons for this output? Modify the code, so that it prints the result you would expect.",
        assertion: "var values = [\" \", \"0\", 0];\n\nvar c = 1;\nfor (var i = 0, l = values.length; i < l; i++) {\n  for (var j = i; j <  l; j++) {\n    var expectedResult = values[i] === values[j];\n    assert(\n      expectedResult === output[c],\n      'Comparing ' +  JSON.stringify(values[i]) + ' and ' +\n      JSON.stringify(values[j]) + ' should yield ' + expectedResult.toString() +\n      ' not ' + output[c]\n    );\n    c += 2;\n  }\n}\n"
      }
    },
    content: "var values = [\" \", \"0\", 0];\n\nfor (var i = 0, l = values.length; i < l; i++) {\n  for (var j = i; j < l; j++) {\n    log(\n      JSON.stringify(values[i]) + ' == ' + JSON.stringify(values[j]) + ': ',\n      values[i] == values[j]\n    );\n  }\n}\n",
    pathHash: "5a52c91a30c6c2a68c91ce1597eed8fa",
    contentConverter: r,
    layout: o
  }
}, function ( e, t, n ) {
  n( 392 )( {
    javascript: n( 397 )
  } );
  var r = n( 3 );
  r = r ? r.default || r : r, e.exports = {
    options: {
      title: "Property access"
    },
    content: "Properties of objects can be accessed in two ways:\n\n- **Dot notation** (`obj.prop`)\n- **Bracket notation** (`obj[\"prop\"]`)\n\nYou should always prefer dot notation, unless you *have* to use bracket notation.\nThis could be if the property name is not a valid identifier or if it comes from\na variable. You can use any *expression* inside the brackets.\n\nExamples:\n\n```javascript\nobj['test-field']; // test-field is not a valid identifier\nvar field = 'test';\nobj[field];\nobj['example' + i];\n```\n\nBecause you can only use dot notation if the property name is a valid identifier\nname, array objects can only be accessed via bracket notation, `arr[0]`, not dot\nnotation, `a.0`.\n\n---\n\nYou can **assign to properties** by putting the member expression on the left\nhand side of an assignment expression:\n```javascript\nobj.prop = value;\n```\n\n---\n\nIf you have nested objects/arrays, you simply use a valid property accessor\nrepeatedly:\n```javascript\nvar obj = {foo: {bar: [42, 21]}};\nconsole.log(obj.foo.bar[0]); // which is evaluated as ((obj.foo).bar)[0]\n```\n\n---\n\nAccessing a non existing property does not throw an error, it returns\n`undefined`:\n\n```javascript\nvar obj = {};\nconsole.log(obj.foo);\n```\n",
    pathHash: "5a52c91a30c6c2a68c91ce1597eed8fa",
    contentConverter: r
  }
}, function ( e, t, n ) {
  var r = n( 3 );
  r = r ? r.default || r : r;
  var o = n( 399 );
  o = o ? o.default || o : o, e.exports = {
    options: {
      title: "Exercise",
      layout_data: {
        description: "Log the two properties of the object using dot and bracket notation.",
        assertion: "assert( source.indexOf('obj.foo') > -1, 'Access property foo with dot notation' ); assert( /obj\\[(42|'42'|\"42\")\\]/.test(source), 'How exactly did you want to access property 42?' );"
      }
    },
    content: "var obj = {foo: 'bar', 42: 'answer'};\n",
    pathHash: "5a52c91a30c6c2a68c91ce1597eed8fa",
    contentConverter: r,
    layout: o
  }
}, function ( e, t, n ) {
  n( 392 )( {
    javascript: n( 397 ),
    js: n( 397 )
  } );
  var r = n( 3 );
  r = r ? r.default || r : r, e.exports = {
    options: {
      title: "Control structures"
    },
    content: 'JavaScript provides the same control structures known from other C-like\nlanguages:\n\n- `if (...) { ... } else if (...) { ... } else { ... }`\n\n- `while (...) { ... }` and `do { ... } while (...)`\n\n- `for (...; ...; ...)  { ... }`\n\n- `switch (...) { case ...: ... }`\n\nAdditionally, JavaScript provides the `for...in` loop to iterate over properties\nof objects:\n\n```javascript\nfor (var prop in obj) {\n  console.log(prop, obj[prop]);\n}\n```\n\n`prop` is a variable containing the property *name*. You can use bracket\nnotation to access the property values.\n\n<div class="callout secondary">\n\n<i class="fa fa-info-circle" aria-hidden="true"></i> **ES2015**\n\nES2015 introduces [`for/of`][forof] statements for iterating over \n*[iterables][]*:\n\n```js\nvar arr = [1,2,3];\nfor (var v of arr) {\n  console.log(v);\n}\n// 1\n// 2\n// 3\n```\n\n</div>\n',
    pathHash: "5a52c91a30c6c2a68c91ce1597eed8fa",
    contentConverter: r
  }
}, function ( e, t, n ) {
  var r = n( 3 );
  r = r ? r.default || r : r;
  var o = n( 399 );
  o = o ? o.default || o : o, e.exports = {
    options: {
      title: "Demo",
      layout_data: {
        description: "Run this code and look at the output. Do you notice anything unexpected? If yes, why do you think this is the case?"
      }
    },
    content: "var obj = {foo: 0, bar: 1, 42: 2};\n\nfor (var prop in obj) {\n  log('property: ' + prop, 'value: ' + obj[prop]);\n}\n",
    pathHash: "5a52c91a30c6c2a68c91ce1597eed8fa",
    contentConverter: r,
    layout: o
  }
}, function ( e, t, n ) {
  n( 392 )( {
    javascript: n( 397 )
  } );
  var r = n( 3 );
  r = r ? r.default || r : r, e.exports = {
    options: {
      title: "Function definitions"
    },
    content: 'There are two syntactic constructs to create functions: function **declaration**\nand function **expressions**.\n\n**Function declarations** start with the `function` keyword followed by a\n**name**, the parameter list and the function body:\n\n```javascript\nfunction foo(a, b, c) {\n  // do something\n}\n```\n\n**Function expressions** have the same structure, but their name is optional:\n\n```javascript\nvar foo = function(a, b, c) {\n  // do something\n};\n```\n<div class="callout primary">\n\n<strong>Note:</strong> Since functions are objects, they can be treated like any\nother value. They can be assigned to variables, passed to other functions and\nreturned from functions. The code above is just an assignment expression with a\nfunction as value.\n\n</div>\n\nAll function objects created either way behave exactly the same. Whether the\nparser treats a function definition as declaration or expression depends on\nwhere the definition is placed. If it is an expression context, it is\ninterpreted as an expression, otherwise as a declaration. That\'s why\n\n```javascript\nfunction () { }\n```\n\ngenerates an error (function declaration without name), but\n\n```javascript\n(function () { })\n```\n\ndoes not, because the grouping operator (`(...)`) can only contain expressions.\n',
    pathHash: "5a52c91a30c6c2a68c91ce1597eed8fa",
    contentConverter: r
  }
}, function ( e, t, n ) {
  n( 392 )( {
    javascript: n( 397 )
  } );
  var r = n( 3 );
  r = r ? r.default || r : r, e.exports = {
    options: {
      title: "Function Calls"
    },
    content: "\nLike other C-like languages, functions are called by putting `()` after the \nfunction reference:\n\n```javascript\nmyFunction()\n```\n\nUnlike other languages, functions can be called with any number of arguments, \nno matter how many formal parameters they have:\n\n```javascript\nfunction myFunction(foo, bar) {\n  console.log(foo, bar);\n}\n\nmyFunction();        // undefined undefined\nmyFunction(1);       // 1 undefined\nmyFunction(1, 2);    // 1 2\nmyFunction(1, 2, 3); // 1 2\n```\n\nEach function has access to the special [`arguments`][arguments] variable, \nwhich is an *array-like* value. This allows you to access all the arguments \npassed to a function, even if there are more than formal parameters:\n\n```javascript\nfunction myFunction(foo, bar) {\n  console.log(foo, bar, arguments);\n}\n\nmyFunction();        // undefined undefined []\nmyFunction(1);       // 1 undefined [1]\nmyFunction(1, 2);    // 1 2 [1, 2]\nmyFunction(1, 2, 3); // 1 2 [1, 2, 3]\n```\n\n[arguments]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments\n",
    pathHash: "5a52c91a30c6c2a68c91ce1597eed8fa",
    contentConverter: r
  }
}, function ( e, t, n ) {
  n( 392 )( {
    javascript: n( 397 )
  } );
  var r = n( 3 );
  r = r ? r.default || r : r, e.exports = {
    options: {
      title: "Scope",
      chapter: "Scope"
    },
    content: 'Unlike other programming languages, JavaScript only has **function scope**, not\nblock scope. In the following example, all variables are visible throughout the\nfunction:\n\n```javascript\nfunction foo() {\n   var bar = 42;\n   // loop\n   for (var i = 0; i < 10; i++) {\n     var j = i;\n   }\n\n   console.log(bar); // 42\n   console.log(i);   // 10\n   console.log(j);   // 9\n }\n```\n\nIn other languages, like Java, the variables `i` or `j` would not be available\nwhere the above code tries to access them.\n\n\n<div class="callout secondary">\n\n<i class="fa fa-info-circle" aria-hidden="true"></i> **ES2015**\n\nThe big difference between `let`, `const`, and `var` is that `let` and `const` \nare *[block scoped][block scope]*. If we would use `let` instead of `var` in \nthe above example, we would get the following result:\n\n```javascript\nfunction foo() {\n   let bar = 42;  // or var or const, doesn\'t matter\n   // loop\n   for (let i = 0; i < 10; i++) { // i is scoped to the loop body block\n     let j = i; // j is scoped to the loop body block\n   }\n\n   console.log(bar); // 42\n   console.log(i);   // ReferenceError\n   console.log(j);   // ReferneceError\n}\n```\n',
    pathHash: "c2ffd992658f73c9bf092ecb63608e03",
    contentConverter: r
  }
}, function ( e, t, n ) {
  n( 392 )( {
    javascript: n( 397 )
  } );
  var r = n( 3 );
  r = r ? r.default || r : r, e.exports = {
    options: {
      title: "Hoisting"
    },
    content: "\nThis behavior becomes more understandable after we introduce **hoisting**.\nBefore a JavaScript function is even executed, the engine finds all variable and\nfunction declarations and creates a binding for them in the functions scope.\n\nThus, the example of the previous slide is equivalent to the following:\n\n```javascript\nfunction foo() {\n   var bar, i, j;\n\n   bar = 42;\n   // loop\n   for (i = 0; i < 10; i++) {\n     j = i;\n   }\n\n   console.log(bar); // 42\n   console.log(i);   // 10\n   console.log(j);   // 9\n }\n```\n\nNote how all variable declarations are put at the top of the function. The\n*value* will still be assigned only when the execution reaches the line of the\nassignment expression.\n\nOne of the practical implications of the hoisting concept is *mutually recursive\nfunctions*. Consider the following example:\n\n```javascript\nfunction isEven(n) {\n if (n == 0) {\n   return true;\n }\n return isOdd(n - 1);\n}\n\n// Normally may call `isEven` even though it's mutually\n// dependent on the `isOdd` which is defined below.\nconsole.log(isEven(2)); // true\n\nfunction isOdd(n) {\n  if (n == 0) {\n    return false;\n  }\n  return isEven(n - 1);\n}\n```\n\nTo get more details on hoisting see [this article][hoisting].\n\n[hoisting]: http://dmitrysoshnikov.com/notes/note-4-two-words-about-hoisting/\n",
    pathHash: "c2ffd992658f73c9bf092ecb63608e03",
    contentConverter: r
  }
}, function ( e, t, n ) {
  var r = n( 3 );
  r = r ? r.default || r : r;
  var o = n( 399 );
  o = o ? o.default || o : o, e.exports = {
    options: {
      title: "Demo",
      layout_data: {
        description: "Which value does this code log and why? Think about the answer *before* you run the code."
      }
    },
    content: "var bar = 42;\nfunction foo() {\n  log(bar);\n  var bar = 21;\n  log(bar);\n}\nfoo();\n",
    pathHash: "c2ffd992658f73c9bf092ecb63608e03",
    contentConverter: r,
    layout: o
  }
}, function ( e, t, n ) {
  n( 392 )( {
    javascript: n( 397 )
  } );
  var r = n( 3 );
  r = r ? r.default || r : r, e.exports = {
    options: {
      title: "Closures"
    },
    content: '[Wikipedia describes closures as][closures]:\n\n> In programming languages, a closure (also lexical closure or function closure)\nis a function or reference to a function together with a referencing environment\n— a table storing a reference to each of the non-local variables (also called\nfree variables or upvalues) of that function.\n\nAccording to this definition, **every** function in JavaScript is a\nclosure, because [every function has an (internal) reference to the\nenvironment][functions] it was created in. The simplest example is:\n\n```javascript\nvar foo = 42;\n\nfunction bar() {\n  console.log(foo);\n}\n```\nHere the function `bar` has access to `foo`, which is defined outside of it.\n\n<div class="callout warning">\n\n**Important**: The value of a free variable is determined when the\nfunction is **executed**, not when the function is\n*defined*. Read the previous sentence three times to make sure you really\nunderstand what it implies.\n\n</div>\n\n[closures]: http://en.wikipedia.org/wiki/Closure_%28computer_programming%29\n[functions]: http://www.ecma-international.org/ecma-262/5.1/#sec-13\n',
    pathHash: "c2ffd992658f73c9bf092ecb63608e03",
    contentConverter: r
  }
}, function ( e, t, n ) {
  var r = n( 3 );
  r = r ? r.default || r : r;
  var o = n( 399 );
  o = o ? o.default || o : o, e.exports = {
    options: {
      title: "Demo",
      layout_data: {
        description: "Which value does this code log and why? Think about the solution *before* you run the code."
      }
    },
    content: "var foo = 42;\nfunction bar() {\n  log(foo);\n}\nfoo = 21;\nbar();\n",
    pathHash: "c2ffd992658f73c9bf092ecb63608e03",
    contentConverter: r,
    layout: o
  }
}, function ( e, t, n ) {
  var r = n( 3 );
  r = r ? r.default || r : r;
  var o = n( 399 );
  o = o ? o.default || o : o, e.exports = {
    options: {
      title: "Exercise",
      layout_data: {
        description: 'Which values does this code log and why? Modify the code so that it logs the values as "expected".',
        assertion: "assert( output.every(function(x, i) { return x === i; }), 'The code should output the loop variable of each iteration, i.e. 0, 1, 2' );"
      }
    },
    content: "var functionArray = [];\nfor (var i = 0; i < 3; i++) {\n  functionArray[i] = function() {\n    log(i);\n  };\n}\n\nfor (var j = 0; j < 3; j++) {\n  functionArray[j]();\n}\n",
    pathHash: "c2ffd992658f73c9bf092ecb63608e03",
    contentConverter: r,
    layout: o
  }
}, function ( e, t, n ) {
  n( 392 )( {
    javascript: n( 397 )
  } );
  var r = n( 3 );
  r = r ? r.default || r : r, e.exports = {
    options: {
      toc: "What is this?",
      chapter: "this",
      style: "h1 {\n  text-align: center\n}\n"
    },
    content: '# What is `this`?\n\n[**`this`**][mdn] is a special "variable" which implicitly exists in every\nfunction. It can be thought of being similar to Java\'s `this` and Python\'s\n`self`, but it\'s much more flexible than that.\n\n<div class="callout warning">\n\n**Important**: The value of `this` is determined when the\nfunction is **called**, not when the function is\n*defined*.\n\n</div>\n\nGiven the following function:\n\n```javascript\nfunction foo() { console.log(this); }\n```\n\nthese would be the values of `this` if called in those specific ways:\n\n```javascript\n// "normal call": global object / window in browsers\n//                undefined in strict mode\nfoo();\n\n// as object "method": to the object\nvar obj = {method: foo};\nobj.method();\n\n// via .call / .apply: To the value passed as first argument\nfoo.call(bar);\n```\n\n[mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this\n',
    pathHash: "c23e307ba8779a98e6f7e264a76a86f6",
    contentConverter: r
  }
}, function ( e, t, n ) {
  n( 392 )( {
    javascript: n( 397 )
  } );
  var r = n( 3 );
  r = r ? r.default || r : r, e.exports = {
    options: {
      toc: "this - an example",
      style: "h1 {\n  text-align: center\n}\n"
    },
    content: "# `this` - an example\n\n```javascript\nfunction say() {\n  console.log('My name is ' + this.name);\n}\n\nvar felix = {\n  name: 'Felix',\n  sayName: say\n};\n\nvar sarah = {\n  name: 'Sarah',\n  sayName: say\n};\n\nfelix.sayName(); // My name is Felix\nsarah.sayName(); // My name is Sarah\nsay.call({name: 'Anonymous'}); // My name is Anonymous\nsay(); // My names is undefined\n```\n\nIn this example we define a single function that uses `this` internally. The\nfunction is then assigned to different objects as property. The output the\nfunction produces depends on which object the function is called (*how* it is\ncalled).\n",
    pathHash: "c23e307ba8779a98e6f7e264a76a86f6",
    contentConverter: r
  }
}, function ( e, t, n ) {
  var r = n( 3 );
  r = r ? r.default || r : r;
  var o = n( 399 );
  o = o ? o.default || o : o, e.exports = {
    options: {
      title: "Exercise",
      layout_data: {
        description: "Which value does the code log and why? How can it be changed to log the value of `obj.foo`?",
        assertion: "assert(output[0] === 42, 'The code should only log 42');\nassert(/log\\s*\\(\\s*this\\.foo\\s*\\)/.test(source), \"Looks like you tried to be clever. Don't modify log(this.foo).\");\n"
      }
    },
    content: "var obj = {\n  foo: 42,\n  bar: function () {\n    log(this.foo);\n  }\n};\n\nvar foo = obj.bar;\nfoo();\n",
    pathHash: "c23e307ba8779a98e6f7e264a76a86f6",
    contentConverter: r,
    layout: o
  }
}, function ( e, t, n ) {
  n( 392 )( {
    javascript: n( 397 )
  } );
  var r = n( 3 );
  r = r ? r.default || r : r, e.exports = {
    options: {
      title: "Constructor functions",
      chapter: "Constructors/Classes"
    },
    content: "JavaScript doesn't have classes like class-based OOP languages have, but it has \nsomething similar: *constructor functions*.\n\nConstructor functions are functions which *construct objects*. Technically\n*every* function can be used as a constructor function, it just has to be \ncalled with the [`new` operator][new]:\n\n```javascript\nfunction Person(name) {\n   this.name = name;\n}\n\nvar felix = new Person('Felix');\nconsole.log(felix.name);\n```\n\nInside the constructor function, `this` refers to a new, empty object. The\nresult of the whole `new` expression (`new Person(...)`) is that object. You can\nthink about it as if the function would implicitly `return this;`.\n\nCalling a function with `new` has another effect: The prototype of the new object\nis the object referred to by the function's `prototype` property.\n\nExample:\n\n```javascript\nfunction Person(name) {\n   this.name = name;\n}\nPerson.prototype.sayName = function(){ return this.name; };\n\nvar felix = new Person('Felix');\nconsole.log(felix.sayName());\n```\n\nGiven the example above, use `console.dir(felix);` to get a better understanding\nof the structure of the object (including it's prototype chain).\n\n[new]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new\n",
    pathHash: "3d37a530ffc5d95eba2ab29047034022",
    contentConverter: r
  }
}, function ( e, t, n ) {
  n( 392 )( {
    javascript: n( 397 )
  } );
  var r = n( 3 );
  r = r ? r.default || r : r, e.exports = {
    options: {
      toc: "ES6's class declarations"
    },
    content: "\n# Syntactic sugar: ES6's `class` declarations\nSetting up more complex constructor functions with their prototypes can be\ncumbersome. For that reason ES2015 [introduced a new syntax][classes].\nWith the syntax, the example from the previous slide would look like\n\n```javascript\nclass Person {\n  constructor(name) {\n    this.name = name;\n  }\n\n  sayName() {\n    return name;\n  }\n}\n\nvar felix = new Person('Felix');\n```\n\n<div class=\"callout warning\">\n\nI want to be very clear that this is mostly just *syntactic\nsugar*. While there are some differences between `class` declarations\nand constructor functions + prototype, the underlying paradigm (prototypes)\ndoes not change.\n\n</div>\n\n[classes]: http://wiki.ecmascript.org/doku.php?id=strawman:maximally_minimal_classes\n",
    pathHash: "3d37a530ffc5d95eba2ab29047034022",
    contentConverter: r
  }
}, function ( e, t, n ) {
  var r = n( 3 );
  r = r ? r.default || r : r, e.exports = {
    options: {
      title: "Resources"
    },
    content: '- [MDN JavaScript Guide][mdn], [Eloquent JavaScript][eloquent] &mdash; basic \nJavaScript introduction.\n\n- [You don\'t know JS][ydkjs] &mdash; another JavaScript introduction, more \nfocus on advanced concepts and technical details\n\n- [ECMAScript 5 specification][ecma] &mdash; only if you *really* like\n  JavaScript.\n\n- [ECMAScript 2015 specification][ES2015]\n\n- [quirksmode.org - JavaScript][quirksmode] &mdash; basic introduction and\n  excellent explanation of event handling.\n\n- [Learning Advanced JavaScript][lajs] &mdash; "strange" JavaScript concepts\n  explored.\n\n- [jsFiddle][] &mdash; an online "editor" to quickly prototype JavaScript\n  examples (with HTML, CSS and a selection of JS libraries).\n\n- [Learn how to **debug** JavaScript][debug] &mdash; knowing how to debug a\n  program written in a specific language is as as important as knowing the\n  language itself.\n\n[mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide\n[eloquent]: http://eloquentjavascript.net/\n[ydkjs]: https://github.com/getify/You-Dont-Know-JS\n[quirksmode]: http://quirksmode.org/js/contents.html\n[lajs]: http://ejohn.org/apps/learn/\n[ecma]: http://www.ecma-international.org/ecma-262/5.1/\n[jsfiddle]: http://jsfiddle.net/\n[debug]: https://developers.google.com/chrome-developer-tools/docs/javascript-debugging\n',
    pathHash: "540b6851ad1c33d73445c67230d0ed82",
    contentConverter: r
  }
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function o( e ) {
    var t = e.className,
      n = e.children;
    return l.default.createElement( "div", {
      id: "exerslide-page",
      className: t
    }, l.default.createElement( c.default, {
      togglable: !0
    } ), l.default.createElement( a.default, {
      tags: [ "main" ]
    }, l.default.createElement( "div", {
      id: "exerslide-main",
      className: "flex-column"
    }, n, l.default.createElement( p.default, {
      className: "flex-item-fix"
    } ) ) ) )
  }
  Object.defineProperty( t, "__esModule", {
    value: !0
  } ), t.default = o;
  var i = n( 482 ),
    a = r( i ),
    s = n( 96 ),
    l = r( s ),
    u = n( 483 ),
    c = r( u ),
    f = n( 486 ),
    p = r( f );
  o.propTypes = {
    className: l.default.PropTypes.string,
    children: l.default.PropTypes.node
  }
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function o( e ) {
    var t = {};
    return ( 0, E.getRegisteredExtensions )( e ).forEach( function ( e ) {
      var n = e.component,
        r = e.mode;
      t[ r ] || ( t[ r ] = [] ), t[ r ].push( n )
    } ), t
  }

  function i( e, t ) {
    return ( 0, s.default )( e ).concat( ( 0, s.default )( t ) ).some( function ( n ) {
      return !e[ n ] || !t[ n ] || e[ n ].length !== t[ n ].length || e[ n ].some( function ( e, r ) {
        return e !== t[ n ][ r ]
      } )
    } )
  }
  Object.defineProperty( t, "__esModule", {
    value: !0
  } );
  var a = n( 198 ),
    s = r( a ),
    l = n( 4 ),
    u = r( l ),
    c = n( 203 ),
    f = r( c ),
    p = n( 209 ),
    d = r( p ),
    h = n( 212 ),
    v = r( h ),
    g = n( 213 ),
    m = r( g ),
    y = n( 217 ),
    b = r( y ),
    x = n( 218 ),
    w = r( x ),
    _ = n( 96 ),
    C = r( _ ),
    k = n( 227 ),
    E = n( 384 ),
    S = function ( e ) {
      function t( e ) {
        ( 0, v.default )( this, t );
        var n = ( 0, b.default )( this, ( t.__proto__ || ( 0, d.default )( t ) ).call( this, e ) );
        return n.state = {
          components: o( e.tags )
        }, n
      }
      return ( 0, w.default )( t, e ), ( 0, m.default )( t, [ {
        key: "componentDidMount",
        value: function () {
          var e = this;
          this._unsubscribe = ( 0, k.subscribe )( "EXTENSIONS.UPDATE", function () {
            var t = o( e.props.tags );
            i( e.state.components, t ) && e.setState( {
              components: t
            } )
          } )
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          this._unsubscribe()
        }
      }, {
        key: "render",
        value: function () {
          var e = this.state.components,
            t = {
              slide: this.context.slide,
              slideIndex: this.context.slideIndex,
              slides: this.context.slides
            };
          if ( e.replace ) return C.default.createElement( e.replace[ e.replace.length - 1 ], t );
          var n = this.props.children ? C.default.Children.only( this.props.children ) : C.default.createElement( "div", null );
          if ( e.before || e.after ) {
            var r = [];
            e.before && r.push.apply( r, ( 0, f.default )( e.before.map( function ( e ) {
              return C.default.createElement( e, t )
            } ) ) ), r.push( n.props.children ), e.after && r.push.apply( r, ( 0, f.default )( e.after.map( function ( e ) {
              return C.default.createElement( e, t )
            } ) ) ), n = C.default.cloneElement.apply( C.default, [ n, {} ].concat( r ) )
          }
          if ( e.wrap ) {
            var o = n.props;
            return n = e.wrap.slice( 0, -1 ).reduce( function ( e, n ) {
              return C.default.createElement( n, t, e )
            }, n ), C.default.createElement( e.wrap[ e.wrap.length - 1 ], ( 0, u.default )( {}, t, o ), n )
          }
          return n
        }
      } ] ), t
    }( C.default.Component );
  t.default = S, S.propTypes = {
    tags: C.default.PropTypes.arrayOf( C.default.PropTypes.string ).isRequired,
    children: C.default.PropTypes.node
  }, S.contextTypes = {
    slide: C.default.PropTypes.object.isRequired,
    slideIndex: C.default.PropTypes.number.isRequired,
    slides: C.default.PropTypes.arrayOf( C.default.PropTypes.object ).isRequired
  }
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    if ( e && e.__esModule ) return e;
    var t = {};
    if ( null != e )
      for ( var n in e ) Object.prototype.hasOwnProperty.call( e, n ) && ( t[ n ] = e[ n ] );
    return t.default = e, t
  }

  function o( e ) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty( t, "__esModule", {
    value: !0
  } );
  var i = n( 4 ),
    a = o( i ),
    s = n( 209 ),
    l = o( s ),
    u = n( 212 ),
    c = o( u ),
    f = n( 213 ),
    p = o( f ),
    d = n( 217 ),
    h = o( d ),
    v = n( 218 ),
    g = o( v ),
    m = n( 96 ),
    y = o( m ),
    b = n( 196 ),
    x = r( b );
  n( 484 );
  var w = x.groupByChapter,
    _ = x.IS_MOBILE,
    C = function ( e ) {
      function t() {
        return ( 0, c.default )( this, t ), ( 0, h.default )( this, ( t.__proto__ || ( 0, l.default )( t ) ).apply( this, arguments ) )
      }
      return ( 0, g.default )( t, e ), ( 0, p.default )( t, [ {
        key: "shouldComponentUpdate",
        value: function ( e ) {
          return e.slideIndex !== this.props.slideIndex || e.active !== this.props.active
        }
      }, {
        key: "componentDidUpdate",
        value: function () {
          this.props.active && this.refs.anchor.focus()
        }
      }, {
        key: "render",
        value: function () {
          var e = this.props,
            t = e.slideIndex,
            n = e.slides,
            r = e.active,
            o = n[ t ],
            i = o.options,
            s = [ "exerslide-toc-entry" ],
            l = o.layout;
          l && l.getClassNames && ( s = s.concat( l.getClassNames( t, x ) ) );
          var u = i.toc || i.title || "Slide " + ( t + 1 ),
            c = {};
          return r && ( s.push( "active" ), c[ "aria-current" ] = "page" ), y.default.createElement( "li", {
            className: s.join( " " )
          }, y.default.createElement( "a", ( 0, a.default )( {}, c, {
            ref: "anchor",
            tabIndex: r ? 0 : -1,
            title: u,
            href: o.url
          } ), y.default.createElement( "span", {
            className: "title"
          }, u ) ) )
        }
      } ] ), t
    }( y.default.Component );
  C.propTypes = {
    slideIndex: y.default.PropTypes.number,
    slides: y.default.PropTypes.array,
    active: y.default.PropTypes.bool
  };
  var k = function ( e ) {
    function t( e, n ) {
      ( 0, c.default )( this, t );
      var r = ( 0, h.default )( this, ( t.__proto__ || ( 0, l.default )( t ) ).call( this, e, n ) ),
        o = n.slide.options,
        i = !1;
      return e.togglable && ( _ ? i = !0 : o.hasOwnProperty( "hideTOC" ) && ( i = o.hideTOC ) ), r.state = {
        groupedSlides: w( n.slides ),
        collapsed: i,
        explicitlyToggled: !1
      }, r._onToggle = r._onToggle.bind( r ), r
    }
    return ( 0, g.default )( t, e ), ( 0, p.default )( t, [ {
      key: "componentWillReceiveProps",
      value: function ( e, t ) {
        var n = this;
        if ( t.slides !== this.context.slides && this.setState( {
            groupedSlides: w( t.slides )
          } ), t.slide !== this.context.slide ) {
          var r = t.slide.options;
          if ( !this.state.explicitlyToggled ) {
            var o = !!_ || Boolean( r.hideTOC );
            this.setState( {
              collapsed: o
            }, function () {
              return n.props.onToggle( !n.state.collapsed )
            } )
          }
        }
      }
    }, {
      key: "_onToggle",
      value: function () {
        var e = this;
        this.setState( {
          collapsed: !this.state.collapsed,
          explicitlyToggled: !0
        }, function () {
          return e.props.onToggle( !e.state.collapsed )
        } )
      }
    }, {
      key: "render",
      value: function () {
        var e = this,
          t = 0,
          n = this.props.togglable,
          r = this.context.slides,
          o = this.state.collapsed,
          i = this.state.groupedSlides.map( function ( n ) {
            var o = void 0;
            if ( Array.isArray( n ) ) {
              var i = e.context.slideIndex >= t && e.context.slideIndex < t + n.length;
              o = n.map( function ( n, o ) {
                return y.default.createElement( C, {
                  key: t + o,
                  slideIndex: t + o,
                  slides: r,
                  active: e.context.slideIndex === t + o
                } )
              } ), o = y.default.createElement( "li", {
                key: n[ 0 ].options.chapter,
                className: "exerslide-toc-chapter" + ( i ? " active" : "" )
              }, y.default.createElement( "h3", {
                className: "exerslide-toc-heading"
              }, n[ 0 ].options.chapter ), y.default.createElement( "ol", {
                className: "exerslide-toc-entries"
              }, o ) ), t += n.length
            } else o = y.default.createElement( C, {
              key: t,
              slideIndex: t,
              slides: r,
              active: e.context.slideIndex === t
            } ), t += 1;
            return o
          } ),
          a = y.default.createElement( "i", {
            className: "fa fa-lg " + ( o ? "fa-bars" : "fa-chevron-left" ),
            "aria-hidden": !0
          } );
        return y.default.createElement( "div", {
          role: "navigation",
          className: "exerslide-toc-container" + ( o ? " collapsed" : "" )
        }, y.default.createElement( "h2", {
          id: "exerslide-toc-title",
          className: "exerslide-toc-title"
        }, "Table of Contents" ), n ? y.default.createElement( "button", {
          className: "exerslide-toc-toggleButton",
          type: "button",
          "aria-controls": "exerslide-toc-list",
          "aria-expanded": !o,
          "aria-label": "Table of Contents",
          onClick: this._onToggle
        }, a ) : null, y.default.createElement( "ol", {
          id: "exerslide-toc-list",
          className: "exerslide-toc-list",
          "aria-controls": "main",
          "aria-labelledby": "exerrslide-toc-title"
        }, i ) )
      }
    } ] ), t
  }( y.default.Component );
  t.default = k, k.propTypes = {
    togglable: y.default.PropTypes.bool,
    onToggle: y.default.PropTypes.func
  }, k.contextTypes = {
    slide: y.default.PropTypes.object,
    slideIndex: y.default.PropTypes.number,
    slides: y.default.PropTypes.array
  }, k.defaultProps = {
    onToggle: function () {}
  }
}, function ( e, t ) {}, , function ( e, t, n ) {
  "use strict";

  function r( e ) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function o( e, t ) {
    var n = e.className,
      r = t.slideIndex,
      o = t.slides,
      i = o.length;
    return a.default.createElement( l.default, {
      tags: [ "toolbar", "content" ]
    }, a.default.createElement( "div", {
      role: "navigation",
      className: "exerslide-toolbar " + n,
      "aria-label": "Slide"
    }, a.default.createElement( "button", {
      className: "exerslide-toolbar-button",
      type: "button",
      "aria-label": "previous",
      onClick: u.back,
      disabled: 0 === r
    }, a.default.createElement( "i", {
      className: "fa fa-lg fa-chevron-left"
    } ) ), a.default.createElement( "span", {
      "aria-label": "Slide " + ( r + 1 ) + " of " + i,
      className: "exerslide-toolbar-text"
    }, " " + ( r + 1 ) + "/" + i + " " ), a.default.createElement( "button", {
      className: "exerslide-toolbar-button",
      type: "button",
      "aria-label": "next",
      onClick: u.forward,
      disabled: r + 1 === i
    }, a.default.createElement( "i", {
      className: "fa fa-lg fa-chevron-right"
    } ) ) ) )
  }
  Object.defineProperty( t, "__esModule", {
    value: !0
  } ), t.default = o;
  var i = n( 96 ),
    a = r( i ),
    s = n( 482 ),
    l = r( s ),
    u = n( 196 );
  n( 487 ), o.propTypes = {
    className: a.default.PropTypes.string
  }, o.contextTypes = {
    slideIndex: a.default.PropTypes.number.isRequired,
    slides: a.default.PropTypes.arrayOf( a.default.PropTypes.object ).isRequired
  }
}, function ( e, t ) {}, , function ( e, t, n ) {
  "use strict";

  function r( e ) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function o( e ) {
    var t = e.children;
    return l.default.createElement( a.default, {
      tags: [ "slide", "a11y-announce-content", "content" ]
    }, l.default.createElement( "div", null, t ) )
  }
  Object.defineProperty( t, "__esModule", {
    value: !0
  } ), t.default = o;
  var i = n( 482 ),
    a = r( i ),
    s = n( 96 ),
    l = r( s );
  o.propTypes = {
    children: l.default.PropTypes.node
  }
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function o( e, t ) {
    var n = e.forward,
      r = e.back,
      o = {
        forward: n,
        back: r
      };
    e.subscribe( "SITE.LOADED", function () {
      ( 0, a.default )( t ).forEach( function ( e ) {
        s.bind( e, function () {
          return t[ e ]( o )
        } )
      } )
    } )
  }
  Object.defineProperty( t, "__esModule", {
    value: !0
  } );
  var i = n( 198 ),
    a = r( i );
  t.default = o;
  var s = n( 491 )
}, function ( e, t, n ) {
  var r;
  ! function ( o, i, a ) {
    function s( e, t, n ) {
      return e.addEventListener ? void e.addEventListener( t, n, !1 ) : void e.attachEvent( "on" + t, n )
    }

    function l( e ) {
      if ( "keypress" == e.type ) {
        var t = String.fromCharCode( e.which );
        return e.shiftKey || ( t = t.toLowerCase() ), t
      }
      return w[ e.which ] ? w[ e.which ] : _[ e.which ] ? _[ e.which ] : String.fromCharCode( e.which ).toLowerCase()
    }

    function u( e, t ) {
      return e.sort().join( "," ) === t.sort().join( "," )
    }

    function c( e ) {
      var t = [];
      return e.shiftKey && t.push( "shift" ), e.altKey && t.push( "alt" ), e.ctrlKey && t.push( "ctrl" ), e.metaKey && t.push( "meta" ), t
    }

    function f( e ) {
      return e.preventDefault ? void e.preventDefault() : void( e.returnValue = !1 )
    }

    function p( e ) {
      return e.stopPropagation ? void e.stopPropagation() : void( e.cancelBubble = !0 )
    }

    function d( e ) {
      return "shift" == e || "ctrl" == e || "alt" == e || "meta" == e
    }

    function h() {
      if ( !x ) {
        x = {};
        for ( var e in w ) e > 95 && e < 112 || w.hasOwnProperty( e ) && ( x[ w[ e ] ] = e )
      }
      return x
    }

    function v( e, t, n ) {
      return n || ( n = h()[ e ] ? "keydown" : "keypress" ), "keypress" == n && t.length && ( n = "keydown" ), n
    }

    function g( e ) {
      return "+" === e ? [ "+" ] : ( e = e.replace( /\+{2}/g, "+plus" ), e.split( "+" ) )
    }

    function m( e, t ) {
      var n, r, o, i = [];
      for ( n = g( e ), o = 0; o < n.length; ++o ) r = n[ o ], k[ r ] && ( r = k[ r ] ), t && "keypress" != t && C[ r ] && ( r = C[ r ], i.push( "shift" ) ), d( r ) && i.push( r );
      return t = v( r, i, t ), {
        key: r,
        modifiers: i,
        action: t
      }
    }

    function y( e, t ) {
      return null !== e && e !== i && ( e === t || y( e.parentNode, t ) )
    }

    function b( e ) {
      function t( e ) {
        e = e || {};
        var t, n = !1;
        for ( t in x ) e[ t ] ? n = !0 : x[ t ] = 0;
        n || ( C = !1 )
      }

      function n( e, t, n, r, o, i ) {
        var a, s, l = [],
          c = n.type;
        if ( !g._callbacks[ e ] ) return [];
        for ( "keyup" == c && d( e ) && ( t = [ e ] ), a = 0; a < g._callbacks[ e ].length; ++a )
          if ( s = g._callbacks[ e ][ a ], ( r || !s.seq || x[ s.seq ] == s.level ) && c == s.action && ( "keypress" == c && !n.metaKey && !n.ctrlKey || u( t, s.modifiers ) ) ) {
            var f = !r && s.combo == o,
              p = r && s.seq == r && s.level == i;
            ( f || p ) && g._callbacks[ e ].splice( a, 1 ), l.push( s )
          } return l
      }

      function r( e, t, n, r ) {
        g.stopCallback( t, t.target || t.srcElement, n, r ) || e( t, n ) === !1 && ( f( t ), p( t ) )
      }

      function o( e ) {
        "number" != typeof e.which && ( e.which = e.keyCode );
        var t = l( e );
        if ( t ) return "keyup" == e.type && w === t ? void( w = !1 ) : void g.handleKey( t, c( e ), e )
      }

      function a() {
        clearTimeout( y ), y = setTimeout( t, 1e3 )
      }

      function h( e, n, o, i ) {
        function s( t ) {
          return function () {
            C = t, ++x[ e ], a()
          }
        }

        function u( n ) {
          r( o, n, e ), "keyup" !== i && ( w = l( n ) ), setTimeout( t, 10 )
        }
        x[ e ] = 0;
        for ( var c = 0; c < n.length; ++c ) {
          var f = c + 1 === n.length,
            p = f ? u : s( i || m( n[ c + 1 ] ).action );
          v( n[ c ], p, i, e, c )
        }
      }

      function v( e, t, r, o, i ) {
        g._directMap[ e + ":" + r ] = t, e = e.replace( /\s+/g, " " );
        var a, s = e.split( " " );
        return s.length > 1 ? void h( e, s, t, r ) : ( a = m( e, r ), g._callbacks[ a.key ] = g._callbacks[ a.key ] || [], n( a.key, a.modifiers, {
          type: a.action
        }, o, e, i ), void g._callbacks[ a.key ][ o ? "unshift" : "push" ]( {
          callback: t,
          modifiers: a.modifiers,
          action: a.action,
          seq: o,
          level: i,
          combo: e
        } ) )
      }
      var g = this;
      if ( e = e || i, !( g instanceof b ) ) return new b( e );
      g.target = e, g._callbacks = {}, g._directMap = {};
      var y, x = {},
        w = !1,
        _ = !1,
        C = !1;
      g._handleKey = function ( e, o, i ) {
        var a, s = n( e, o, i ),
          l = {},
          u = 0,
          c = !1;
        for ( a = 0; a < s.length; ++a ) s[ a ].seq && ( u = Math.max( u, s[ a ].level ) );
        for ( a = 0; a < s.length; ++a )
          if ( s[ a ].seq ) {
            if ( s[ a ].level != u ) continue;
            c = !0, l[ s[ a ].seq ] = 1, r( s[ a ].callback, i, s[ a ].combo, s[ a ].seq )
          } else c || r( s[ a ].callback, i, s[ a ].combo );
        var f = "keypress" == i.type && _;
        i.type != C || d( e ) || f || t( l ), _ = c && "keydown" == i.type
      }, g._bindMultiple = function ( e, t, n ) {
        for ( var r = 0; r < e.length; ++r ) v( e[ r ], t, n )
      }, s( e, "keypress", o ), s( e, "keydown", o ), s( e, "keyup", o )
    }
    if ( o ) {
      for ( var x, w = {
          8: "backspace",
          9: "tab",
          13: "enter",
          16: "shift",
          17: "ctrl",
          18: "alt",
          20: "capslock",
          27: "esc",
          32: "space",
          33: "pageup",
          34: "pagedown",
          35: "end",
          36: "home",
          37: "left",
          38: "up",
          39: "right",
          40: "down",
          45: "ins",
          46: "del",
          91: "meta",
          93: "meta",
          224: "meta"
        }, _ = {
          106: "*",
          107: "+",
          109: "-",
          110: ".",
          111: "/",
          186: ";",
          187: "=",
          188: ",",
          189: "-",
          190: ".",
          191: "/",
          192: "`",
          219: "[",
          220: "\\",
          221: "]",
          222: "'"
        }, C = {
          "~": "`",
          "!": "1",
          "@": "2",
          "#": "3",
          $: "4",
          "%": "5",
          "^": "6",
          "&": "7",
          "*": "8",
          "(": "9",
          ")": "0",
          _: "-",
          "+": "=",
          ":": ";",
          '"': "'",
          "<": ",",
          ">": ".",
          "?": "/",
          "|": "\\"
        }, k = {
          option: "alt",
          command: "meta",
          return: "enter",
          escape: "esc",
          plus: "+",
          mod: /Mac|iPod|iPhone|iPad/.test( navigator.platform ) ? "meta" : "ctrl"
        }, E = 1; E < 20; ++E ) w[ 111 + E ] = "f" + E;
      for ( E = 0; E <= 9; ++E ) w[ E + 96 ] = E;
      b.prototype.bind = function ( e, t, n ) {
        var r = this;
        return e = e instanceof Array ? e : [ e ], r._bindMultiple.call( r, e, t, n ), r
      }, b.prototype.unbind = function ( e, t ) {
        var n = this;
        return n.bind.call( n, e, function () {}, t )
      }, b.prototype.trigger = function ( e, t ) {
        var n = this;
        return n._directMap[ e + ":" + t ] && n._directMap[ e + ":" + t ]( {}, e ), n
      }, b.prototype.reset = function () {
        var e = this;
        return e._callbacks = {}, e._directMap = {}, e
      }, b.prototype.stopCallback = function ( e, t ) {
        var n = this;
        return !( ( " " + t.className + " " ).indexOf( " mousetrap " ) > -1 ) && ( !y( t, n.target ) && ( "INPUT" == t.tagName || "SELECT" == t.tagName || "TEXTAREA" == t.tagName || t.isContentEditable ) )
      }, b.prototype.handleKey = function () {
        var e = this;
        return e._handleKey.apply( e, arguments )
      }, b.addKeycodes = function ( e ) {
        for ( var t in e ) e.hasOwnProperty( t ) && ( w[ t ] = e[ t ] );
        x = null
      }, b.init = function () {
        var e = b( i );
        for ( var t in e ) "_" !== t.charAt( 0 ) && ( b[ t ] = function ( t ) {
          return function () {
            return e[ t ].apply( e, arguments )
          }
        }( t ) )
      }, b.init(), o.Mousetrap = b, "undefined" != typeof e && e.exports && ( e.exports = b ), r = function () {
        return b
      }.call( t, n, t, e ), !( r !== a && ( e.exports = r ) )
    }
  }( "undefined" != typeof window ? window : null, "undefined" != typeof window ? document : null )
}, function ( e, t, n ) {
  ( function ( e ) {
    "use strict";

    function r( e ) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function o( t ) {
      var n = arguments.length > 1 && void 0 !== arguments[ 1 ] ? arguments[ 1 ] : {};
      t.subscribe( "SITE.LOADED", function ( r ) {
        var o = r.slides,
          i = o[ 0 ] && o[ 0 ].options,
          l = n !== !1 && ( !i || i.scale !== !1 );
        l && ( n = i && i.scale || n, a( e.document.documentElement, ( 0, f.default )( {}, h, n ) ), t.registerExtension( s, "wrap", [ "content" ] ) )
      } )
    }

    function i() {
      return v ? {
        maxWidth: v + "em"
      } : {}
    }

    function a( t, n ) {
      var r = n.contentWidth,
        o = n.maxFontSize,
        i = n.columnWidth;
      v = r;
      var a = parseInt( e.getComputedStyle( t ).fontSize, 10 ),
        s = a * r,
        l = t.clientWidth;
      if ( s <= l ) {
        var u = l * i / r;
        u < a ? u = "" : o && u > o ? u = o + "px" : u += "px", t.style.fontSize = u
      }
    }

    function s( e ) {
      var t = e.children,
        n = ( e.slide, e.slideIndex, e.slides, e.style ),
        r = ( 0, u.default )( e, [ "children", "slide", "slideIndex", "slides", "style" ] ),
        o = d.default.Children.only( t );
      return d.default.cloneElement( o, ( 0, f.default )( {}, r, {
        style: ( 0, f.default )( {}, n, i() )
      } ) )
    }
    Object.defineProperty( t, "__esModule", {
      value: !0
    } );
    var l = n( 493 ),
      u = r( l ),
      c = n( 4 ),
      f = r( c );
    t.default = o;
    var p = n( 96 ),
      d = r( p ),
      h = {
        contentWidth: 38,
        columnWidth: .55
      },
      v = void 0
  } ).call( t, function () {
    return this
  }() )
}, function ( e, t ) {
  "use strict";
  t.__esModule = !0, t.default = function ( e, t ) {
    var n = {};
    for ( var r in e ) t.indexOf( r ) >= 0 || Object.prototype.hasOwnProperty.call( e, r ) && ( n[ r ] = e[ r ] );
    return n
  }
}, function ( e, t, n ) {
  ( function ( e ) {
    "use strict";

    function r( e ) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function o( e ) {
      e.registerExtension( k, "wrap", [ "a11y-announce-content" ] )
    }

    function i( t ) {
      var n = e.getComputedStyle( t );
      return parseInt( n.paddingBottom )
    }

    function a( e ) {
      var t = arguments.length > 1 && void 0 !== arguments[ 1 ] ? arguments[ 1 ] : 150,
        n = void 0,
        r = function () {
          var r = this;
          n || ( n = setTimeout( function () {
            e.call( r ), n = null
          }, t ) )
        };
      return r.cancel = function () {
        return clearTimeout( n )
      }, r
    }
    Object.defineProperty( t, "__esModule", {
      value: !0
    } );
    var s = n( 4 ),
      l = r( s ),
      u = n( 493 ),
      c = r( u ),
      f = n( 209 ),
      p = r( f ),
      d = n( 212 ),
      h = r( d ),
      v = n( 213 ),
      g = r( v ),
      m = n( 217 ),
      y = r( m ),
      b = n( 218 ),
      x = r( b );
    t.default = o;
    var w = n( 96 ),
      _ = r( w ),
      C = {
        position: "absolute",
        display: "block",
        left: "-10000px",
        width: "0px",
        height: "0px"
      },
      k = function ( t ) {
        function n( e ) {
          ( 0, h.default )( this, n );
          var t = ( 0, y.default )( this, ( n.__proto__ || ( 0, p.default )( n ) ).call( this, e ) );
          return t.state = {
            contentOverflow: !1
          }, t.analyze = a( t._analyzeContentHeight.bind( t ) ), t
        }
        return ( 0, x.default )( n, t ), ( 0, g.default )( n, [ {
          key: "componentDidMount",
          value: function () {
            e.addEventListener( "resize", this.analyze ), e.addEventListener( "zoom", this.analyze ), this.analyze()
          }
        }, {
          key: "componentWillUnmount",
          value: function () {
            e.removeEventListener( "resize", this.analyze ), e.removeEventListener( "zoom", this.analyze ), this.analyze.cancel()
          }
        }, {
          key: "_analyzeContentHeight",
          value: function () {
            if ( this._node ) {
              var e = this._node.scrollHeight - i( this._node ),
                t = this._node.clientHeight;
              if ( t < e - 10 ) {
                var n = Math.round( t / e * 100 );
                this.setState( {
                  contentOverflow: n
                } )
              } else this.setState( {
                contentOverflow: !1
              } )
            }
          }
        }, {
          key: "render",
          value: function () {
            var e = this,
              t = this.props,
              n = t.children,
              r = ( t.slide, t.slideIndex, t.slides, ( 0, c.default )( t, [ "children", "slide", "slideIndex", "slides" ] ) ),
              o = this.state.contentOverflow ? _.default.createElement( "span", {
                style: C,
                tabIndex: 0,
                role: "alert"
              }, "Attention: Only " + this.state.contentOverflow + "% of the slide\n          content is visible" ) : null,
              i = _.default.Children.only( n );
            return _.default.cloneElement( i, ( 0, l.default )( {}, r, {
              ref: function ( t ) {
                e._node = t, "function" == typeof i.ref && i.ref( t )
              }
            } ), o, i.props.children )
          }
        } ] ), n
      }( _.default.Component );
    k.propTypes = {
      children: _.default.PropTypes.node,
      slide: _.default.PropTypes.object,
      slideIndex: _.default.PropTypes.number,
      slides: _.default.PropTypes.arrayOf( _.default.PropTypes.object )
    }
  } ).call( t, function () {
    return this
  }() )
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function o( e ) {}
  Object.defineProperty( t, "__esModule", {
    value: !0
  } );
  var i = n( 209 ),
    a = r( i ),
    s = n( 212 ),
    l = r( s ),
    u = n( 213 ),
    c = r( u ),
    f = n( 217 ),
    p = r( f ),
    d = n( 218 ),
    h = r( d ),
    v = n( 4 );
  r( v );
  t.default = o;
  var g = n( 96 ),
    m = r( g ),
    y = {
      backgroundColor: "#EEE",
      boxSizing: "border-box",
      fontSize: "1rem",
      padding: "0.5em",
      width: "100%",
      position: "relative",
      textAlign: "center",
      display: "flex"
    },
    b = {
      overflow: "visible",
      overflowX: "auto"
    },
    x = function ( e ) {
      function t( e ) {
        ( 0, l.default )( this, t );
        var n = ( 0, p.default )( this, ( t.__proto__ || ( 0, a.default )( t ) ).call( this, e ) );
        return n.state = {
          showSource: !1
        }, n._toggleSource = n._toggleSource.bind( n ), n
      }
      return ( 0, h.default )( t, e ), ( 0, c.default )( t, [ {
        key: "_toggleSource",
        value: function () {
          var e = this.state.showSource;
          e ? this._unregister() : this._unregister = this.props.registerExtension( function ( e ) {
            var t = e.slide;
            return m.default.createElement( "pre", {
              style: {
                overflow: "visible",
                display: "block"
              }
            }, m.default.createElement( "code", {
              style: b
            }, t.__source__ ) )
          }, "replace", [ "slide" ] ), this.setState( {
            showSource: !e
          } )
        }
      }, {
        key: "render",
        value: function () {
          var e = this.props.slide;
          if ( !e.__path__ ) return null;
          var t = ( this.state.showSource ? "Hide" : "Show" ) + " Source";
          return m.default.createElement( "div", {
            role: "region",
            "aria-label": "File path of current slide",
            style: y,
            className: "flex-item-fix"
          }, m.default.createElement( "span", {
            style: {
              flexGrow: 2
            }
          }, "File path: ", e.__path__ ), m.default.createElement( "button", {
            onClick: this._toggleSource,
            "aria-label": t
          }, this.state.showSource ? m.default.createElement( "i", {
            className: "fa fa-times",
            "aria-hidden": !0
          } ) : m.default.createElement( "i", {
            className: "fa fa-file-code-o",
            "aria-hidden": !0,
            title: t
          } ) ) )
        }
      } ] ), t
    }( m.default.Component );
  x.propTypes = {
    registerExtension: m.default.PropTypes.func,
    slide: m.default.PropTypes.object
  }
}, function ( e, t ) {
  e.exports = {
    "developer tools": "https://developers.google.com/web/tools/chrome-devtools/debug/?hl=en",
    "jsbasics-issues": "https://github.com/fkling/jsbasics/issues",
    css: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    dom: "https://developer.mozilla.org/en-US/docs/DOM",
    es5: "http://www.ecma-international.org/ecma-262/5.1/",
    ES2015: "http://www.ecma-international.org/ecma-262/6.0/",
    symbol: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol",
    pow: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Exponentiation_(**)",
    "computed properties": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names",
    forof: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of",
    iterables: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols",
    "block scope": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Scoping_rules_2"
  }
}, function ( module, exports, __webpack_require__ ) {
  "use strict";

  function _interopRequireDefault( e ) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty( exports, "__esModule", {
    value: !0
  } );
  var _extends2 = __webpack_require__( 4 ),
    _extends3 = _interopRequireDefault( _extends2 ),
    _slicedToArray2 = __webpack_require__( 372 ),
    _slicedToArray3 = _interopRequireDefault( _slicedToArray2 ),
    _getPrototypeOf = __webpack_require__( 209 ),
    _getPrototypeOf2 = _interopRequireDefault( _getPrototypeOf ),
    _classCallCheck2 = __webpack_require__( 212 ),
    _classCallCheck3 = _interopRequireDefault( _classCallCheck2 ),
    _createClass2 = __webpack_require__( 213 ),
    _createClass3 = _interopRequireDefault( _createClass2 ),
    _possibleConstructorReturn2 = __webpack_require__( 217 ),
    _possibleConstructorReturn3 = _interopRequireDefault( _possibleConstructorReturn2 ),
    _inherits2 = __webpack_require__( 218 ),
    _inherits3 = _interopRequireDefault( _inherits2 ),
    _react = __webpack_require__( 96 ),
    _react2 = _interopRequireDefault( _react ),
    _abstractEqualityComparison = __webpack_require__( 498 ),
    _abstractEqualityComparison2 = _interopRequireDefault( _abstractEqualityComparison ),
    algorithmSteps = [
      [ 1, "If <code>Type(x)</code> is the same as <code>Type(y)</code>, then" ],
      [ "1.a", "Return the result of performing Strict Equality Comparison <code>x === y</code>.", !0 ],
      [ 2, "If <code>x</code> is <strong>null</strong> and <code>y</code> is <strong>undefined</strong>, return <strong>true</strong>" ],
      [ 3, "If <code>x</code> is <strong>undefined</strong> and <code>y</code> is <strong>null</strong>, return <strong>true</strong>" ],
      [ 4, "If <code>Type(x)</code> is Number and <code>Type(y)</code> is String, return the result of the comparison <code>x == ToNumber(y)</code>." ],
      [ 5, "If <code>Type(x)</code> is String and <code>Type(y)</code> is Number, return the result of the comparison <code>ToNumber(x) == y</code>." ],
      [ 6, "If <code>Type(x)</code> is Boolean, return the result of the comparison <code>ToNumber(x) == y</code>." ],
      [ 7, "If <code>Type(y)</code> is Boolean, return the result of the comparison <code>x == ToNumber(y)</code>." ],
      [ 8, "If <code>Type(x)</code> is either String, Number, or Symbol and <code>Type(y)</code> is Object, return the result of the comparison <code>x == ToPrimitive(y)</code>." ],
      [ 9, "If <code>Type(x)</code> is Object and <code>Type(y)</code> is either String, Number, or Symbol, return the result of the comparison <code>ToPrimitive(x) == y</code>." ],
      [ 10, "Return <strong>false</strong>." ]
    ],
    LooseComparison = function ( _React$Component ) {
      function LooseComparison( e ) {
        ( 0, _classCallCheck3.default )( this, LooseComparison );
        var t = ( 0, _possibleConstructorReturn3.default )( this, ( LooseComparison.__proto__ || ( 0, _getPrototypeOf2.default )( LooseComparison ) ).call( this, e ) );
        return t.state = {
          examples: e.examples,
          selectedExample: -1,
          left: "42",
          right: '"42"',
          iterations: []
        }, t._updateLeft = t._updateLeft.bind( t ), t._updateRight = t._updateRight.bind( t ), t._compare = t._compare.bind( t ), t._selectExample = t._selectExample.bind( t ), t
      }
      return ( 0, _inherits3.default )( LooseComparison, _React$Component ), ( 0, _createClass3.default )( LooseComparison, [ {
        key: "_selectExample",
        value: function _selectExample( event ) {
          var selectedExample = event.target.value,
            _state$examples$selec = ( 0, _slicedToArray3.default )( this.state.examples[ selectedExample ], 2 ),
            left = _state$examples$selec[ 0 ],
            right = _state$examples$selec[ 1 ],
            result = ( 0, _abstractEqualityComparison2.default )( eval( left ), eval( right ) );
          this.setState( {
            selectedExample: selectedExample,
            left: left,
            right: right,
            iterations: result
          } )
        }
      }, {
        key: "_updateLeft",
        value: function ( e ) {
          this.setState( {
            left: e.target.value,
            selectedExample: -1,
            iterations: []
          } )
        }
      }, {
        key: "_updateRight",
        value: function ( e ) {
          this.setState( {
            right: e.target.value,
            selectedExample: -1,
            iterations: []
          } )
        }
      }, {
        key: "_compare",
        value: function _compare() {
          var result = ( 0, _abstractEqualityComparison2.default )( eval( "(" + this.state.left + ")" ), eval( "(" + this.state.right + ")" ) );
          this.setState( {
            iterations: result
          } )
        }
      }, {
        key: "render",
        value: function () {
          var e = this.state.iterations,
            t = null;
          return this.state.iterations.length > 0 && ( t = e[ e.length - 1 ][ 2 ] ), _react2.default.createElement( "div", {
            className: "callout"
          }, _react2.default.createElement( "div", {
            style: {
              textAlign: "center"
            }
          }, _react2.default.createElement( "p", null, _react2.default.createElement( "select", {
            style: {
              width: "auto",
              padding: 0,
              paddingRight: "1.5rem",
              paddingLeft: "0.2rem",
              margin: 0,
              fontSize: "0.9rem"
            },
            value: this.state.selectedExample,
            onChange: this._selectExample
          }, _react2.default.createElement( "option", {
            value: -1
          }, "Select an example..." ), this.state.examples.map( function ( e, t ) {
            var n = ( 0, _slicedToArray3.default )( e, 2 ),
              r = n[ 0 ],
              o = n[ 1 ];
            return _react2.default.createElement( "option", {
              key: t,
              value: t
            }, r, " == ", o )
          } ) ) ), _react2.default.createElement( "p", null, _react2.default.createElement( "input", {
            style: {
              textAlign: "center"
            },
            value: this.state.left,
            onChange: this._updateLeft
          } ), " == ", _react2.default.createElement( "input", {
            style: {
              textAlign: "center"
            },
            value: this.state.right,
            onChange: this._updateRight
          } ) ), _react2.default.createElement( "button", {
            className: "primary button",
            onClick: this._compare
          }, "Compare" ) ), _react2.default.createElement( "div", {
            style: {
              fontSize: "0.9em"
            }
          }, this.state.iterations.map( function ( e, t ) {
            var n = ( 0, _slicedToArray3.default )( e, 2 ),
              r = n[ 0 ],
              o = n[ 1 ];
            return _react2.default.createElement( "details", {
              key: t
            }, _react2.default.createElement( "summary", {
              style: {
                cursor: "pointer"
              }
            }, _react2.default.createElement( "strong", null, r ) ), _react2.default.createElement( "ul", {
              className: "comparisonIteration"
            }, algorithmSteps.map( function ( e ) {
              var t = ( 0, _slicedToArray3.default )( e, 2 ),
                n = t[ 0 ],
                r = t[ 1 ],
                i = {
                  color: "#AAA"
                },
                a = o.indexOf( n ),
                s = a > -1,
                l = a === o.length - 1,
                u = void 0;
              return s && ( i.color = "#333", u = _react2.default.createElement( "i", {
                style: {
                  color: "red"
                },
                className: "fa fa-times",
                "aria-hidden": !0
              } ) ), l && ( u = _react2.default.createElement( "i", {
                style: {
                  color: "green"
                },
                className: "fa fa-check",
                "aria-hidden": !0
              } ) ), _react2.default.createElement( "li", {
                style: ( 0, _extends3.default )( {}, i, {
                  position: "relative",
                  listStyle: "none"
                } ),
                key: n
              }, _react2.default.createElement( "span", {
                style: {
                  position: "absolute",
                  left: "-1.2em"
                }
              }, u ), n, ". ", _react2.default.createElement( "span", {
                dangerouslySetInnerHTML: {
                  __html: r
                }
              } ) )
            } ) ) )
          } ) ), null !== t ? _react2.default.createElement( "div", null, _react2.default.createElement( "strong", null, "Result: " ), _react2.default.createElement( "code", null, t.toString() ) ) : null )
        }
      } ] ), LooseComparison
    }( _react2.default.Component );
  exports.default = LooseComparison
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function o( e, t ) {
    var n = "Performing " + l( e ) + " == " + l( t ),
      r = [],
      u = function ( e ) {
        return r.push( e )
      },
      c = function ( e ) {
        return [
          [ n, r, e ]
        ]
      },
      f = function ( e ) {
        return [
          [ n, r ]
        ].concat( ( 0, g.default )( e ) )
      };
    if ( u( 1 ), i( e ) === i( t ) ) return u( "1.a" ), c( e === t );
    if ( u( 2 ), null === e && void 0 === t ) return c( !0 );
    if ( u( 3 ), void 0 === e && null === t ) return c( !0 );
    if ( u( 4 ), "number" === i( e ) && "string" === i( t ) ) return f( o( e, s( t ) ) );
    if ( u( 5 ), "string" === i( e ) && "number" === i( t ) ) return f( o( s( e ), t ) );
    if ( u( 6 ), "boolean" === i( e ) ) return f( o( s( e ), t ) );
    if ( u( 7 ), "boolean" === i( t ) ) return f( o( e, s( t ) ) );
    u( 8 );
    var p = new h.default( [ "string", "number", "symbol" ] );
    return p.has( i( e ) ) && "object" === i( t ) ? f( o( e, a( t ) ) ) : ( u( 9 ), p.has( i( t ) ) && "object" === i( e ) ? f( o( a( e ), t ) ) : ( u( 10 ), c( !1 ) ) )
  }

  function i( e ) {
    var t = "undefined" == typeof e ? "undefined" : ( 0, p.default )( e );
    switch ( t ) {
      case "string":
      case "number":
      case "boolean":
      case "symbol":
        return t;
      case "object":
      case "function":
        return e ? "object" : "null"
    }
  }

  function a( e ) {
    var t = e.valueOf();
    if ( "object" !== i( t ) ) return t;
    if ( t = e.toString(), "object" !== i( t ) ) return t;
    throw new TypeError
  }

  function s( e ) {
    return Number( e )
  }

  function l( e ) {
    if ( "number" == typeof e && isNaN( e ) ) return "NaN";
    if ( void 0 === e ) return "undefined";
    if ( "function" == typeof e ) return "<function>";
    var t = "__" + Date.now();
    return ( 0, c.default )( e, function ( e, n ) {
      switch ( "undefined" == typeof n ? "undefined" : ( 0, p.default )( n ) ) {
        case "undefined":
          return t + "undefined";
        case "function":
          return t + "<function>";
        case "number":
          return isNaN( n ) ? t + "NaN" : n;
        case "object":
          return n ? n : t + "null";
        default:
          return n
      }
    } ).replace( new RegExp( '"' + t + '(<function>|undefined|NaN|null)"', "g" ), "$1" )
  }
  Object.defineProperty( t, "__esModule", {
    value: !0
  } );
  var u = n( 499 ),
    c = r( u ),
    f = n( 42 ),
    p = r( f ),
    d = n( 393 ),
    h = r( d ),
    v = n( 203 ),
    g = r( v );
  t.default = o
}, function ( e, t, n ) {
  e.exports = {
    default: n( 500 ),
    __esModule: !0
  }
}, function ( e, t, n ) {
  var r = n( 10 ),
    o = r.JSON || ( r.JSON = {
      stringify: JSON.stringify
    } );
  e.exports = function ( e ) {
    return o.stringify.apply( o, arguments )
  }
}, function ( e, t, n ) {
  "use strict";

  function r( e ) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function o( e, t ) {
    e.use( a.default ), e.subscribe( "CONFIG.SET", function ( e ) {
      var n = e[ "markdown-converter" ];
      e[ "markdown-converter" ] = function ( e ) {
        e.use( l.default, function ( e, n ) {
          var r = t( e.info, e.content, n );
          return r ? ( 0, i.renderIntoDOM )( n.slideIndex, r ) : ""
        } ), n && n( e )
      }
    } )
  }
  Object.defineProperty( t, "__esModule", {
    value: !0
  } ), t.default = o;
  var i = n( 502 ),
    a = r( i ),
    s = n( 504 ),
    l = r( s )
}, function ( e, t, n ) {
  ( function ( e ) {
    "use strict";

    function r( e ) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function o( e ) {
      e.use( u.default )
    }

    function i( t, n ) {
      var r = "r" + Date.now() + "-" + c++,
        o = '<div id="' + r + '"></div>';
      return ( 0, l.registerScript )( t, function () {
        return setTimeout( function () {
          return s.default.render( n, e.document.getElementById( r ) )
        }, 0 )
      }, function () {
        s.default.unmountComponentAtNode( e.document.getElementById( r ) )
      } ), o
    }
    Object.defineProperty( t, "__esModule", {
      value: !0
    } ), t.default = o, t.renderIntoDOM = i;
    var a = n( 232 ),
      s = r( a ),
      l = n( 503 ),
      u = r( l ),
      c = 0
  } ).call( t, function () {
    return this
  }() )
}, function ( e, t ) {
  "use strict";

  function n( e ) {
    e.subscribe( "SLIDE.DID_MOUNT", function ( e ) {
      var t = e.slideIndex,
        n = e.slide;
      if ( o[ t ] )
        for ( var r = o[ t ], i = 0; i < r.length; i += 2 ) r[ i ]( {
          slideIndex: t,
          slide: n
        } )
    } ), e.subscribe( "SLIDE.DID_UPDATE", function ( e ) {
      var t = e.slideIndex,
        n = e.slide;
      if ( o[ t ] )
        for ( var r = o[ t ], i = 1; i < r.length; i += 2 ) r[ i + 1 ]( {
          slideIndex: t,
          slide: n
        } ), r[ i ]( {
          slideIndex: t,
          slide: n
        } )
    } ), e.subscribe( "SLIDE.WILL_UNMOUNT", function ( e ) {
      var t = e.slideIndex,
        n = e.slide;
      if ( o[ t ] )
        for ( var r = o[ t ], i = 1; i < r.length; i += 2 ) r[ i ]( {
          slideIndex: t,
          slide: n
        } )
    } )
  }

  function r( e, t, n ) {
    o[ e ] || ( o[ e ] = [] ), o[ e ].push( t, n )
  }
  Object.defineProperty( t, "__esModule", {
    value: !0
  } ), t.default = n, t.registerScript = r;
  var o = {}
}, function ( e, t ) {
  "use strict";

  function n( e, t ) {
    var n = e.renderer.rules.fence || function ( e, t, n, r, o ) {
        return o.renderToken( e, t, n )
      },
      r = /\s*react\b\s*/i;
    e.renderer.rules.fence = function ( e, o, i, a, s ) {
      var l = e[ o ];
      return r.test( l.info ) ? ( l.info = l.info.replace( r, "" ), t( l, a ) ) : n( e, o, i, a, s )
    }
  }
  Object.defineProperty( t, "__esModule", {
    value: !0
  } ), t.default = n
}, function ( e, t ) {
  "use strict";
  e.exports = function ( e, t, n ) {
    function r( e ) {
      return e.trim().split( " ", 2 )[ 0 ] === t
    }

    function o( e, n, r, o, i ) {
      return 1 === e[ n ].nesting && e[ n ].attrPush( [ "class", t ] ), i.renderToken( e, n, r, o, i )
    }

    function i( e, n, r, o ) {
      var i, f, p, d, h, v, g, m, y = !1,
        b = e.bMarks[ n ] + e.tShift[ n ],
        x = e.eMarks[ n ];
      if ( l !== e.src.charCodeAt( b ) ) return !1;
      for ( i = b + 1; i <= x && s[ ( i - b ) % u ] === e.src[ i ]; i++ );
      if ( p = Math.floor( ( i - b ) / u ), p < a ) return !1;
      if ( i -= ( i - b ) % u, d = e.src.slice( b, i ), h = e.src.slice( i, x ), !c( h ) ) return !1;
      if ( o ) return !0;
      for ( f = n;
        ( f++, !( f >= r ) ) && ( b = e.bMarks[ f ] + e.tShift[ f ], x = e.eMarks[ f ], !( b < x && e.sCount[ f ] < e.blkIndent ) ); )
        if ( l === e.src.charCodeAt( b ) && !( e.sCount[ f ] - e.blkIndent >= 4 ) ) {
          for ( i = b + 1; i <= x && s[ ( i - b ) % u ] === e.src[ i ]; i++ );
          if ( !( Math.floor( ( i - b ) / u ) < p || ( i -= ( i - b ) % u, i = e.skipSpaces( i ), i < x ) ) ) {
            y = !0;
            break
          }
        } return g = e.parentType, m = e.lineMax, e.parentType = "container", e.lineMax = f, v = e.push( "container_" + t + "_open", "div", 1 ), v.markup = d, v.block = !0, v.info = h, v.map = [ n, f ], e.md.block.tokenize( e, n + 1, f ), v = e.push( "container_" + t + "_close", "div", -1 ), v.markup = e.src.slice( b, i ), v.block = !0, e.parentType = g, e.lineMax = m, e.line = f + ( y ? 1 : 0 ), !0
    }
    n = n || {};
    var a = 3,
      s = n.marker || ":",
      l = s.charCodeAt( 0 ),
      u = s.length,
      c = n.validate || r,
      f = n.render || o;
    e.block.ruler.before( "fence", "container_" + t, i, {
      alt: [ "paragraph", "reference", "blockquote", "list" ]
    } ), e.renderer.rules[ "container_" + t + "_open" ] = f, e.renderer.rules[ "container_" + t + "_close" ] = f
  }
} ] );