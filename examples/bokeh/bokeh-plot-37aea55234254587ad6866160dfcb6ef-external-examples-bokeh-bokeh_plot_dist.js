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
    
      
      
    
      var element = document.getElementById("ce39b147-4688-4d3d-8409-5f373ebca2ac");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ce39b147-4688-4d3d-8409-5f373ebca2ac' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;d2ab590f-c95f-4d20-bb11-fe0abf02d28c&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;59397&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59381&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59410&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;59402&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59353&quot;}},&quot;id&quot;:&quot;59352&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;left&quot;:[0,1,2,3,4,5,6,7,8,9,10],&quot;right&quot;:[1,2,3,4,5,6,7,8,9,10,11],&quot;top&quot;:{&quot;__ndarray__&quot;:&quot;/Knx0k1ikD9zaJHtfD+1P99PjZduEsM/9ihcj8L1yD8CK4cW2c7HPx+F61G4HsU/QmDl0CLbuT9MN4lBYOWwP5qZmZmZmZk/O99PjZdugj97FK5H4Xp0Pw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[11]}},&quot;selected&quot;:{&quot;id&quot;:&quot;59407&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;59408&quot;}},&quot;id&quot;:&quot;59374&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59365&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59352&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;59355&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59333&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59390&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;59312&quot;},{&quot;id&quot;:&quot;59343&quot;}]},&quot;id&quot;:&quot;59393&quot;,&quot;type&quot;:&quot;Row&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;59352&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;59355&quot;},{&quot;id&quot;:&quot;59359&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;59356&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;59391&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;59397&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;59367&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;59344&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;59348&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;59346&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;59350&quot;}},&quot;id&quot;:&quot;59343&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59319&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59350&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;59374&quot;}},&quot;id&quot;:&quot;59378&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59332&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59348&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;Poisson&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;59377&quot;}]},&quot;id&quot;:&quot;59387&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;59360&quot;},{&quot;id&quot;:&quot;59361&quot;},{&quot;id&quot;:&quot;59362&quot;},{&quot;id&quot;:&quot;59363&quot;},{&quot;id&quot;:&quot;59364&quot;},{&quot;id&quot;:&quot;59365&quot;}]},&quot;id&quot;:&quot;59367&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;59388&quot;}},&quot;id&quot;:&quot;59392&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;59376&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;59366&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59317&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59363&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59353&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59315&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59334&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59360&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59407&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;59375&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59356&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;59359&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;59335&quot;}},&quot;id&quot;:&quot;59331&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;items&quot;:[{&quot;id&quot;:&quot;59387&quot;}]},&quot;id&quot;:&quot;59386&quot;,&quot;type&quot;:&quot;Legend&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;59335&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;59321&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;59324&quot;},{&quot;id&quot;:&quot;59328&quot;},{&quot;id&quot;:&quot;59386&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;59325&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;59377&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;59380&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;59336&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;59313&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;59317&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;59315&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;59319&quot;}},&quot;id&quot;:&quot;59312&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59313&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;59380&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59330&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59402&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59411&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59321&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;59324&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59404&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59325&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;59328&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;59374&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;59375&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;59376&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;59378&quot;}},&quot;id&quot;:&quot;59377&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59389&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;59383&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59326&quot;}},&quot;id&quot;:&quot;59325&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59322&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59361&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;59381&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59322&quot;}},&quot;id&quot;:&quot;59321&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;59388&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;59389&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;59390&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;59392&quot;}},&quot;id&quot;:&quot;59391&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59326&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;59329&quot;},{&quot;id&quot;:&quot;59330&quot;},{&quot;id&quot;:&quot;59331&quot;},{&quot;id&quot;:&quot;59332&quot;},{&quot;id&quot;:&quot;59333&quot;},{&quot;id&quot;:&quot;59334&quot;}]},&quot;id&quot;:&quot;59336&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[200]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[200]}},&quot;selected&quot;:{&quot;id&quot;:&quot;59410&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;59411&quot;}},&quot;id&quot;:&quot;59388&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59346&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59408&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;59366&quot;}},&quot;id&quot;:&quot;59362&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59364&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59329&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59383&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59357&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59344&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;59404&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59357&quot;}},&quot;id&quot;:&quot;59356&quot;,&quot;type&quot;:&quot;LinearAxis&quot;}],&quot;root_ids&quot;:[&quot;59393&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.2&quot;}}';
                  var render_items = [{"docid":"d2ab590f-c95f-4d20-bb11-fe0abf02d28c","root_ids":["59393"],"roots":{"59393":"ce39b147-4688-4d3d-8409-5f373ebca2ac"}}];
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