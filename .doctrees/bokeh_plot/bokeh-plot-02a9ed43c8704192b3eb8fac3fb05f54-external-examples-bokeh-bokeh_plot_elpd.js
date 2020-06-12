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
    
      
      
    
      var element = document.getElementById("f13d7707-dc8c-4212-86e2-3e5894c76f62");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f13d7707-dc8c-4212-86e2-3e5894c76f62' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;434497ac-0c39-404b-aacb-1f13aff15fc6&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;toolbars&quot;:[{&quot;id&quot;:&quot;59511&quot;}],&quot;tools&quot;:[{&quot;id&quot;:&quot;59501&quot;},{&quot;id&quot;:&quot;59502&quot;},{&quot;id&quot;:&quot;59503&quot;},{&quot;id&quot;:&quot;59504&quot;},{&quot;id&quot;:&quot;59505&quot;},{&quot;id&quot;:&quot;59506&quot;},{&quot;id&quot;:&quot;59507&quot;},{&quot;id&quot;:&quot;59508&quot;}]},&quot;id&quot;:&quot;59537&quot;,&quot;type&quot;:&quot;ProxyToolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59529&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;Centered eight - Non centered eight&quot;},&quot;id&quot;:&quot;59524&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59504&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;59493&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;59496&quot;},{&quot;id&quot;:&quot;59500&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;59497&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:288,&quot;plot_width&quot;:432,&quot;renderers&quot;:[{&quot;id&quot;:&quot;59522&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;59524&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;59511&quot;},&quot;toolbar_location&quot;:null,&quot;x_range&quot;:{&quot;id&quot;:&quot;59485&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;59489&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;59487&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;59491&quot;}},&quot;id&quot;:&quot;59484&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;59527&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59494&quot;}},&quot;id&quot;:&quot;59493&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[[{&quot;id&quot;:&quot;59484&quot;},0,0]]},&quot;id&quot;:&quot;59536&quot;,&quot;type&quot;:&quot;GridBox&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59485&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;59508&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{&quot;size&quot;:{&quot;field&quot;:&quot;sizes&quot;,&quot;units&quot;:&quot;screen&quot;},&quot;x&quot;:{&quot;field&quot;:&quot;xdata&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;ydata&quot;}},&quot;id&quot;:&quot;59520&quot;,&quot;type&quot;:&quot;Cross&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59493&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;59496&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59533&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;59510&quot;}},&quot;id&quot;:&quot;59505&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59498&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;59521&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;59520&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;59523&quot;}},&quot;id&quot;:&quot;59522&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59501&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59534&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;59501&quot;},{&quot;id&quot;:&quot;59502&quot;},{&quot;id&quot;:&quot;59503&quot;},{&quot;id&quot;:&quot;59504&quot;},{&quot;id&quot;:&quot;59505&quot;},{&quot;id&quot;:&quot;59506&quot;},{&quot;id&quot;:&quot;59507&quot;},{&quot;id&quot;:&quot;59508&quot;}]},&quot;id&quot;:&quot;59511&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59489&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59494&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59506&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59491&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;59521&quot;}},&quot;id&quot;:&quot;59523&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;59509&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59487&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59507&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;sizes&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[8]},&quot;xdata&quot;:[0,1,2,3,4,5,6,7],&quot;ydata&quot;:{&quot;__ndarray__&quot;:&quot;gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[8]}},&quot;selected&quot;:{&quot;id&quot;:&quot;59533&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;59534&quot;}},&quot;id&quot;:&quot;59521&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;59510&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59527&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;ELPD difference&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;59529&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59498&quot;}},&quot;id&quot;:&quot;59497&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59502&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59497&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;59500&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;59538&quot;},{&quot;id&quot;:&quot;59536&quot;}]},&quot;id&quot;:&quot;59539&quot;,&quot;type&quot;:&quot;Column&quot;},{&quot;attributes&quot;:{&quot;toolbar&quot;:{&quot;id&quot;:&quot;59537&quot;},&quot;toolbar_location&quot;:&quot;above&quot;},&quot;id&quot;:&quot;59538&quot;,&quot;type&quot;:&quot;ToolbarBox&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;59509&quot;}},&quot;id&quot;:&quot;59503&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;}],&quot;root_ids&quot;:[&quot;59539&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.2&quot;}}';
                  var render_items = [{"docid":"434497ac-0c39-404b-aacb-1f13aff15fc6","root_ids":["59539"],"roots":{"59539":"f13d7707-dc8c-4212-86e2-3e5894c76f62"}}];
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