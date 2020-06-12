(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("50f7c15f-864e-4379-91a2-8a800a7d450f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '50f7c15f-864e-4379-91a2-8a800a7d450f' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.0.2.min.js": "ufR9RFnRs6lniiaFvtJziE0YeidtAgBRH6ux2oUItHw5WTvE1zuk9uzhUU/FJXDp", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.0.2.min.js": "8QM/PGWBT+IssZuRcDcjzwIh1mkOmJSoNMmyYDZbCfXJg3Ap1lEvdVgFuSAwhb/J", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.0.2.min.js": "Jm8cH3Rg0P6UeZhVY5cLy1WzKajUT9KImCY+76hEqrcJt59/d8GPvFHjCkYgnSIn", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.0.2.min.js": "Ozhzj+SI7ywm74aOI/UajcWz+C0NjsPunEVyVIrxzYkB+jA+2tUw8x5xJCbVtK5I"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.0.2.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{&quot;37faff9f-1b4c-4374-a716-6d74874e0261&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;61859&quot;}},&quot;id&quot;:&quot;61854&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[[{&quot;id&quot;:&quot;61833&quot;},0,0]]},&quot;id&quot;:&quot;61906&quot;,&quot;type&quot;:&quot;GridBox&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61881&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61855&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;61879&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;61880&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;61881&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;61883&quot;}},&quot;id&quot;:&quot;61882&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61897&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;61846&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;61849&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;vsxyH0m/2D86wiFKcwHZP7a30HSdQ9k/Mq1/n8eF2T+toi7K8cfZPymY3fQbCto/pY2MH0ZM2j8hgztKcI7aP5x46nSa0No/GG6Zn8QS2z+UY0jK7lTbPxBZ9/QYl9s/jE6mH0PZ2z8HRFVKbRvcP4M5BHWXXdw//y6zn8Gf3D97JGLK6+HcP/YZEfUVJN0/cg/AH0Bm3T/uBG9KaqjdP2r6HXWU6t0/5u/Mn74s3j9h5XvK6G7eP93aKvUSsd4/WdDZHz3z3j/VxYhKZzXfP1G7N3WRd98/zLDmn7u53z9IppXK5fvfP0imlcrl+98/SKaVyuX73z/MsOafu7nfP1G7N3WRd98/1cWISmc13z9Z0NkfPfPeP93aKvUSsd4/YeV7yuhu3j/m78yfvizeP2r6HXWU6t0/7gRvSmqo3T9yD8AfQGbdP/YZEfUVJN0/eyRiyuvh3D//LrOfwZ/cP4M5BHWXXdw/B0RVSm0b3D+MTqYfQ9nbPxBZ9/QYl9s/lGNIyu5U2z8YbpmfxBLbP5x46nSa0No/IYM7SnCO2j+ljYwfRkzaPymY3fQbCto/raIuyvHH2T8yrX+fx4XZP7a30HSdQ9k/OsIhSnMB2T++zHIfSb/YP77Mch9Jv9g/&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[60]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKW7UGuj9/o/pbtQa6P3+j+uHOTD5m37PwYughSC5/s/5GIUz3Bl/D9xipIH6e38P2QyMDtQeP0/LYhu9YQH/j8uFrzFnZ/+P5pkkAvUPP8/kKz6eHvc/z8sPz+eUj8AQBAe0EOjjgBA91o59xffAEB7MHNLViwBQNJYdV2JdQFA4UGkPmq6AUCp4SnJ6PkBQASQrQsWMQJA2sZINj5gAkCUYEF6fYcCQH0diplDpwJAMuTvMki+AkA5tiKTgcsCQAAlTNGh0AJAvNg9mpzOAkCkvXhL5cUCQPJyeQ5ttgJAGd6R8VOhAkD3Y5n1KokCQAAAAAAAAAAA&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[60]}},&quot;selected&quot;:{&quot;id&quot;:&quot;61901&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;61902&quot;}},&quot;id&quot;:&quot;61879&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;61879&quot;}},&quot;id&quot;:&quot;61883&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61886&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61898&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61904&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61851&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61834&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;61859&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;61857&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;61884&quot;}},&quot;id&quot;:&quot;61888&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;61858&quot;}},&quot;id&quot;:&quot;61852&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;4k2i+gcf4D+gyPkPHUDgP15DUSUyYeA/HL6oOkeC4D/aOABQXKPgP5izV2VxxOA/Vi6veobl4D8TqQaQmwbhP9EjXqWwJ+E/j561usVI4T9NGQ3Q2mnhPwuUZOXviuE/yQ68+gSs4T+HiRMQGs3hP0UEayUv7uE/A3/COkQP4j/B+RlQWTDiP390cWVuUeI/PO/IeoNy4j/6aSCQmJPiP7jkd6WttOI/dl/PusLV4j802ibQ1/biP/JUfuXsF+M/sM/V+gE54z9uSi0QF1rjPyzFhCUse+M/6T/cOkGc4z+nujNQVr3jP2U1i2Vr3uM/I7DieoD/4z/hKjqQlSDkP5+lkaWqQeQ/XSDpur9i5D8bm0DQ1IPkP9kVmOXppOQ/lpDv+v7F5D9UC0cQFOfkPxKGniUpCOU/0AD2Oj4p5T+Oe01QU0rlP0z2pGVoa+U/CnH8en2M5T/I61OQkq3lP4Zmq6WnzuU/Q+ECu7zv5T8BXFrQ0RDmP7/WseXmMeY/fVEJ+/tS5j87zGAQEXTmP/lGuCUmleY/t8EPOzu25j91PGdQUNfmPzO3vmVl+OY/8TEWe3oZ5z+urG2QjzrnP2wnxaWkW+c/KqIcu7l85z/oHHTQzp3nP6aXy+Xjvuc/ZBIj+/jf5z8ijXoQDgHoP+AH0iUjIug/noIpOzhD6D9b/YBQTWToPxl42GViheg/1/Ive3em6D+VbYeQjMfoP1Po3qWh6Og/EWM2u7YJ6T/P3Y3QyyrpP41Y5eXgS+k/S9M8+/Vs6T8ITpQQC47pP8bI6yUgr+k/hENDOzXQ6T9CvppQSvHpPwA58mVfEuo/vrNJe3Qz6j98LqGQiVTqPzqp+KWedeo/+CNQu7OW6j+1nqfQyLfqP3MZ/+Xd2Oo/MpRW+/L56j8ylFb78vnqPzKUVvvy+eo/cxn/5d3Y6j+1nqfQyLfqP/gjULuzluo/Oqn4pZ516j98LqGQiVTqP76zSXt0M+o/ADnyZV8S6j9CvppQSvHpP4RDQzs10Ok/xsjrJSCv6T8ITpQQC47pP0vTPPv1bOk/jVjl5eBL6T/P3Y3QyyrpPxFjNru2Cek/U+jepaHo6D+VbYeQjMfoP9fyL3t3pug/GXjYZWKF6D9b/YBQTWToP56CKTs4Q+g/4AfSJSMi6D8ijXoQDgHoP2QSI/v43+c/ppfL5eO+5z/oHHTQzp3nPyqiHLu5fOc/bCfFpaRb5z+urG2QjzrnP/ExFnt6Gec/M7e+ZWX45j91PGdQUNfmP7fBDzs7tuY/+Ua4JSaV5j87zGAQEXTmP31RCfv7UuY/v9ax5eYx5j8BXFrQ0RDmP0PhAru87+U/hmarpafO5T/I61OQkq3lPwpx/Hp9jOU/TPakZWhr5T+Oe01QU0rlP9AA9jo+KeU/EoaeJSkI5T9UC0cQFOfkP5aQ7/r+xeQ/2RWY5emk5D8bm0DQ1IPkP10g6bq/YuQ/n6WRpapB5D/hKjqQlSDkPyOw4nqA/+M/ZTWLZWve4z+nujNQVr3jP+k/3DpBnOM/LMWEJSx74z9uSi0QF1rjP7DP1foBOeM/8lR+5ewX4z802ibQ1/biP3Zfz7rC1eI/uOR3pa204j/6aSCQmJPiPzzvyHqDcuI/f3RxZW5R4j/B+RlQWTDiPwN/wjpED+I/RQRrJS/u4T+HiRMQGs3hP8kOvPoErOE/C5Rk5e+K4T9NGQ3Q2mnhP4+etbrFSOE/0SNepbAn4T8TqQaQmwbhP1Yur3qG5eA/mLNXZXHE4D/aOABQXKPgPxy+qDpHguA/XkNRJTJh4D+gyPkPHUDgP+JNovoHH+A/4k2i+gcf4D8=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[172]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdBRbVZPq7Px0FFtVk+rs/+KnVnEw5vD/C+LuVFIC8P8t2ChsR77w/zxJobwSHvT9WEfjEcjW+P2YkSMZD/r4/HlAFOvT0vz/llpq14IXAP4rnXDFDGsE/NezH/pbUwT+u4VtUipLCPwXwKXMBXsM/9rc8HM46xD+/3YXH6h/FP+dA2eszFsY/54wNGwwixz//qviurEPIP6WRm2lvesk/wrmuJ8HByj9A/3n6kSLMP410EwGYoM0/ISVfu5w/zz8BN+IvznvQP9gdiJdQXNE/Vuu2MHRM0j/Y0ZNPzUzTP2EyctonVtQ/iUxG3E1p1T/EakqlYoXWPw12d/VvsNc/RDb4oVnp2D9y5SgD3jbaPzS+SXtjlNs/UQrd50YD3T9rEqs9TozeP4bsE/iXFuA/KkTrS3jw4D9hQr0DQdnhPxkp2EYbzuI/yjnR2K3N4z8MUI0L3NbkP7tAd6+36+U/5Dem6uQB5z/VvP0pLxjoP1Ej0d6rKuk//VkdBH836j+rMX5V9D7rP6Nv8/WjOew/YosSKnAl7T8z+Y7Z3gHuP54VyN5T0+4/bVw9tY2V7z9ddXB8tiTwP0G9Rg8cevA/1DxSI9fL8D/KFJpF6BbxP1KgZLbMX/E/s7/HFR2o8T/JG/s5fO3xP2ZkxBzINPI/+0vWHBZ98j/8kSFsHcjyPx5cS+icE/M/UmhlSxpg8z9VdAZKzqzzP4OIprXP+vM/N7YtxSFN9D/5HnDWFKD0P74OFB/i8/Q/8Tblg3xJ9T8QHXF07p/1P+hOO+Zc9vU/cBrKAYlQ9j8BH1EDoan2P15ZuJ+sBPc/o904Xy1g9z+4gC1rVL/3P2avs5GwH/g/Xqmk7+5/+D+scrkfmOL4P+ZrcxorR/k/A2joSvKu+T/8gfHLDhr6P5+AWUxThvo/AAAAAAAAAAA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[172]}},&quot;selected&quot;:{&quot;id&quot;:&quot;61903&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;61904&quot;}},&quot;id&quot;:&quot;61884&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;61874&quot;}},&quot;id&quot;:&quot;61878&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61885&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61903&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61856&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;toolbar&quot;:{&quot;id&quot;:&quot;61907&quot;},&quot;toolbar_location&quot;:&quot;above&quot;},&quot;id&quot;:&quot;61908&quot;,&quot;type&quot;:&quot;ToolbarBox&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61850&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;61842&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;61845&quot;},{&quot;id&quot;:&quot;61849&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;61846&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;61872&quot;},{&quot;id&quot;:&quot;61877&quot;},{&quot;id&quot;:&quot;61882&quot;},{&quot;id&quot;:&quot;61887&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;61890&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;61860&quot;},&quot;toolbar_location&quot;:null,&quot;x_range&quot;:{&quot;id&quot;:&quot;61834&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;61838&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;61836&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;61840&quot;}},&quot;id&quot;:&quot;61833&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;61893&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;61847&quot;}},&quot;id&quot;:&quot;61846&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;61884&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;61885&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;61886&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;61888&quot;}},&quot;id&quot;:&quot;61887&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61847&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61899&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61853&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;61890&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61900&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;61842&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;61845&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;61850&quot;},{&quot;id&quot;:&quot;61851&quot;},{&quot;id&quot;:&quot;61852&quot;},{&quot;id&quot;:&quot;61853&quot;},{&quot;id&quot;:&quot;61854&quot;},{&quot;id&quot;:&quot;61855&quot;},{&quot;id&quot;:&quot;61856&quot;},{&quot;id&quot;:&quot;61857&quot;}]},&quot;id&quot;:&quot;61860&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61843&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61901&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61870&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;SqliRfYopD8oVdqaRzqmPwYBUvCYS6g/5azJRepcqj/DWEGbO26sP6EEufCMf64/QFgYI29IsD8vLtTNF1GxPx4EkHjAWbI/DdpLI2lisz/8rwfOEWu0P+yFw3i6c7U/2lt/I2N8tj/KMTvOC4W3P7kH93i0jbg/qN2yI12WuT+Xs27OBZ+6P4aJKnmup7s/dV/mI1ewvD9kNaLO/7i9P1MLXnmowb4/Q+EZJFHKvz+Z22rnfGnAP5DGyDzR7cA/iLEmkiVywT+AnITnefbBP3eH4jzOesI/bnJAkiL/wj9mXZ7ndoPDP15I/DzLB8Q/VjNakh+MxD9MHrjncxDFP0QJFj3IlMU/PPRzkhwZxj8039HncJ3GPyzKLz3FIcc/IrWNkhmmxz8aoOvnbSrIPxKLST3Crsg/CnankhYzyT8AYQXoarfJP/hLYz2/O8o/8DbBkhPAyj/oIR/oZ0TLP+AMfT28yMs/1vfakhBNzD/O4jjoZNHMP8bNlj25Vc0/vrj0kg3azT+2o1LoYV7OP6yOsD224s4/pHkOkwpnzz+cZGzoXuvPP8on5Z7ZN9A/RR2UyQN60D/BEkP0LbzQP8ESQ/QtvNA/wRJD9C280D9FHZTJA3rQP8on5Z7ZN9A/nGRs6F7rzz+keQ6TCmfPP6yOsD224s4/tqNS6GFezj++uPSSDdrNP8bNlj25Vc0/zuI46GTRzD/W99qSEE3MP+AMfT28yMs/6CEf6GdEyz/wNsGSE8DKP/hLYz2/O8o/AGEF6Gq3yT8KdqeSFjPJPxKLST3Crsg/GqDr520qyD8itY2SGabHPyzKLz3FIcc/NN/R53Cdxj889HOSHBnGP0QJFj3IlMU/TB6453MQxT9WM1qSH4zEP15I/DzLB8Q/Zl2e53aDwz9uckCSIv/CP3eH4jzOesI/gJyE53n2wT+IsSaSJXLBP5DGyDzR7cA/mdtq53xpwD9D4RkkUcq/P1MLXnmowb4/ZDWizv+4vT91X+YjV7C8P4aJKnmup7s/l7NuzgWfuj+o3bIjXZa5P7kH93i0jbg/yjE7zguFtz/aW38jY3y2P+yFw3i6c7U//K8HzhFrtD8N2ksjaWKzPx4EkHjAWbI/Ly7UzRdRsT9AWBgjb0iwP6EEufCMf64/w1hBmzturD/lrMlF6lyqPwYBUvCYS6g/KFXamkc6pj9KqWJF9iikP0qpYkX2KKQ/&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[114]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI5YJgG8r/4/jlgmAbyv/j96MERLBzv+P9Dn3q0hwf0/J4iUGIBI/T/Dw+ntV878P7wrKWyoUvw/DDMn3b7X+z/euUoYlGL7P106W2qK7fo/L6WZXFt4+j9UUw7nngb6P5GXlh+Gl/k/41DRbwcr+T8SIOwMor/4P6//o2tsUvg/F9boFF7k9z+h+DChoXT3P3+3fPagA/c/21ioEk2L9j9Sf6n0EhD2P2YzRF0fivU/Pi/8oyP/9D/FT2WlMG70P/mUKFxA1fM/m86vx2018z+F1n7xbYzyPx0O7+2/3vE/tIW/D8sr8T+KXaKN4XfwP3X7iolXhu8/V9KAunEZ7j8NV23POLXsP49xmI6NW+s/LWRiiCwR6j8Vqyk8cNToP211KCVoruc/8bx/1s2d5j+CZHq37qHlP15vyyo6vOQ/cQJy7wbt4z/zjETYbjPjPysDcgz6juI/GSwyoi744T8pDZJobHbhP0FdoZZxBOE/If5LzAKh4D8LQHsc7UTgP2v4cvYp4t8/1IsJgYFS3z/brYCHoM/eP9GL4pUcZd4/UsifE7oL3j+TrjIbo8LdPzbgfsQ3i90/NrPIxt5t3T90248BFGndPwAAAAAAAAAA&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[114]}},&quot;selected&quot;:{&quot;id&quot;:&quot;61897&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;61898&quot;}},&quot;id&quot;:&quot;61869&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61902&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;61908&quot;},{&quot;id&quot;:&quot;61906&quot;}]},&quot;id&quot;:&quot;61909&quot;,&quot;type&quot;:&quot;Column&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61871&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61891&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;61869&quot;}},&quot;id&quot;:&quot;61873&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;PQjyHlj+0D+5/aBJgkDRPzXzT3SsgtE/sOj+ntbE0T8s3q3JAAfSP6jTXPQqSdI/I8kLH1WL0j+fvrpJf83SPxu0aXSpD9M/l6kYn9NR0z8Tn8fJ/ZPTP46UdvQn1tM/CoolH1IY1D+Gf9RJfFrUPwJ1g3SmnNQ/fWoyn9De1D/5X+HJ+iDVP3VVkPQkY9U/8Uo/H0+l1T9tQO5JeefVP+g1nXSjKdY/ZCtMn81r1j/gIPvJ963WP1wWqvQh8NY/1wtZH0wy1z9TAQhKdnTXP8/2tnSgttc/S+xln8r41z/H4RTK9DrYP0LXw/Qefdg/QtfD9B592D9C18P0Hn3YP8fhFMr0Otg/S+xln8r41z/P9rZ0oLbXP1MBCEp2dNc/1wtZH0wy1z9cFqr0IfDWP+Ag+8n3rdY/ZCtMn81r1j/oNZ10oynWP21A7kl559U/8Uo/H0+l1T91VZD0JGPVP/lf4cn6INU/fWoyn9De1D8CdYN0ppzUP4Z/1El8WtQ/CoolH1IY1D+OlHb0J9bTPxOfx8n9k9M/l6kYn9NR0z8btGl0qQ/TP5++ukl/zdI/I8kLH1WL0j+o01z0KknSPyzerckAB9I/sOj+ntbE0T818090rILRP7n9oEmCQNE/PQjyHlj+0D89CPIeWP7QPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[62]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANcjFLbhrAkA1yMUtuGsCQJvKT6WiTAJA8/RA8SIqAkC/9i2TIgYCQIM6iNpQ4QFAS2ILcyK8AUC1WwH+iJgBQKdJddLGdwFA3vizAcRYAUBnuTg6DzwBQI8flTLzIQFArGqATMkNAUD3xAc2lPwAQN/GYzG27wBAGVh0PzfmAEA+tcofzN8AQHR0X67X2QBAKHZh6+7UAEBMWu+oX88AQB7d/n5wyQBACfEJ+wjAAEAvkTQ+4bIAQE2/eCb3oABA0KvhyUWLAEDQbNohEW0AQNDFp96wSwBABYrTSEcjAED1fZ4M7ev/P7kZypTTif8/3MnyY6sf/z8AAAAAAAAAAA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[62]}},&quot;selected&quot;:{&quot;id&quot;:&quot;61899&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;61900&quot;}},&quot;id&quot;:&quot;61874&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;61869&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;61870&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;61871&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;61873&quot;}},&quot;id&quot;:&quot;61872&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61875&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;61891&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;61843&quot;}},&quot;id&quot;:&quot;61842&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;61858&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61880&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61876&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61836&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;61874&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;61875&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;61876&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;61878&quot;}},&quot;id&quot;:&quot;61877&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61893&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61838&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;toolbars&quot;:[{&quot;id&quot;:&quot;61860&quot;}],&quot;tools&quot;:[{&quot;id&quot;:&quot;61850&quot;},{&quot;id&quot;:&quot;61851&quot;},{&quot;id&quot;:&quot;61852&quot;},{&quot;id&quot;:&quot;61853&quot;},{&quot;id&quot;:&quot;61854&quot;},{&quot;id&quot;:&quot;61855&quot;},{&quot;id&quot;:&quot;61856&quot;},{&quot;id&quot;:&quot;61857&quot;}]},&quot;id&quot;:&quot;61907&quot;,&quot;type&quot;:&quot;ProxyToolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61840&quot;,&quot;type&quot;:&quot;LinearScale&quot;}],&quot;root_ids&quot;:[&quot;61909&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.2&quot;}}';
                  var render_items = [{"docid":"37faff9f-1b4c-4374-a716-6d74874e0261","root_ids":["61909"],"roots":{"61909":"50f7c15f-864e-4379-91a2-8a800a7d450f"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();