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
    
      
      
    
      var element = document.getElementById("dfef7a34-73a6-4c95-92f2-5b552e6c1b66");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'dfef7a34-73a6-4c95-92f2-5b552e6c1b66' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;6311e7fe-7922-409e-910f-f5a89a7f30d9&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;59969&quot;},{&quot;id&quot;:&quot;59967&quot;}]},&quot;id&quot;:&quot;59970&quot;,&quot;type&quot;:&quot;Column&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59923&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;fill_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;size&quot;:{&quot;units&quot;:&quot;screen&quot;,&quot;value&quot;:6},&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59943&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59919&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;59922&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59911&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59964&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;59942&quot;}},&quot;id&quot;:&quot;59946&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59958&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;59931&quot;}},&quot;id&quot;:&quot;59925&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;size&quot;:{&quot;units&quot;:&quot;screen&quot;,&quot;value&quot;:6},&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59944&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;59915&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;59918&quot;},{&quot;id&quot;:&quot;59922&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;59919&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:288,&quot;plot_width&quot;:432,&quot;renderers&quot;:[{&quot;id&quot;:&quot;59945&quot;},{&quot;id&quot;:&quot;59949&quot;},{&quot;id&quot;:&quot;59951&quot;},{&quot;id&quot;:&quot;59952&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;59953&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;59933&quot;},&quot;toolbar_location&quot;:null,&quot;x_range&quot;:{&quot;id&quot;:&quot;59907&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;59911&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;59909&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;59913&quot;}},&quot;id&quot;:&quot;59906&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.7,&quot;line_width&quot;:1.5,&quot;location&quot;:0},&quot;id&quot;:&quot;59951&quot;,&quot;type&quot;:&quot;Span&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59915&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;59918&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;ESS for small intervals&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;59958&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59920&quot;}},&quot;id&quot;:&quot;59919&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59924&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;59932&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;59948&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;59947&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;59950&quot;}},&quot;id&quot;:&quot;59949&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;59931&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;mu&quot;},&quot;id&quot;:&quot;59953&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59926&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;rug_x&quot;:{&quot;__ndarray__&quot;:&quot;u/QnuP7V5z9SIsxa1SLgPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[2]},&quot;rug_y&quot;:{&quot;__ndarray__&quot;:&quot;nB0+wbWyacCcHT7BtbJpwA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[2]}},&quot;selected&quot;:{&quot;id&quot;:&quot;59964&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;59965&quot;}},&quot;id&quot;:&quot;59948&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59916&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;toolbars&quot;:[{&quot;id&quot;:&quot;59933&quot;}],&quot;tools&quot;:[{&quot;id&quot;:&quot;59923&quot;},{&quot;id&quot;:&quot;59924&quot;},{&quot;id&quot;:&quot;59925&quot;},{&quot;id&quot;:&quot;59926&quot;},{&quot;id&quot;:&quot;59927&quot;},{&quot;id&quot;:&quot;59928&quot;},{&quot;id&quot;:&quot;59929&quot;},{&quot;id&quot;:&quot;59930&quot;}]},&quot;id&quot;:&quot;59968&quot;,&quot;type&quot;:&quot;ProxyToolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59929&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59965&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[[{&quot;id&quot;:&quot;59906&quot;},0,0]]},&quot;id&quot;:&quot;59967&quot;,&quot;type&quot;:&quot;GridBox&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;59923&quot;},{&quot;id&quot;:&quot;59924&quot;},{&quot;id&quot;:&quot;59925&quot;},{&quot;id&quot;:&quot;59926&quot;},{&quot;id&quot;:&quot;59927&quot;},{&quot;id&quot;:&quot;59928&quot;},{&quot;id&quot;:&quot;59929&quot;},{&quot;id&quot;:&quot;59930&quot;}]},&quot;id&quot;:&quot;59933&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;59948&quot;}},&quot;id&quot;:&quot;59950&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59909&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:&quot;red&quot;,&quot;line_dash&quot;:[6],&quot;line_width&quot;:3,&quot;location&quot;:400},&quot;id&quot;:&quot;59952&quot;,&quot;type&quot;:&quot;Span&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[20]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[20]}},&quot;selected&quot;:{&quot;id&quot;:&quot;59962&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;59963&quot;}},&quot;id&quot;:&quot;59942&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59907&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;59932&quot;}},&quot;id&quot;:&quot;59927&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59962&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59928&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{&quot;angle&quot;:{&quot;units&quot;:&quot;rad&quot;,&quot;value&quot;:1.5707963267948966},&quot;line_alpha&quot;:{&quot;value&quot;:0.35},&quot;size&quot;:{&quot;units&quot;:&quot;screen&quot;,&quot;value&quot;:8},&quot;x&quot;:{&quot;field&quot;:&quot;rug_x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;rug_y&quot;}},&quot;id&quot;:&quot;59947&quot;,&quot;type&quot;:&quot;Dash&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59913&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;Quantile&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;59956&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59916&quot;}},&quot;id&quot;:&quot;59915&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59963&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59920&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;59942&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;59943&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;59944&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;59946&quot;}},&quot;id&quot;:&quot;59945&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;toolbar&quot;:{&quot;id&quot;:&quot;59968&quot;},&quot;toolbar_location&quot;:&quot;above&quot;},&quot;id&quot;:&quot;59969&quot;,&quot;type&quot;:&quot;ToolbarBox&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59956&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;59930&quot;,&quot;type&quot;:&quot;HoverTool&quot;}],&quot;root_ids&quot;:[&quot;59970&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.2&quot;}}';
                  var render_items = [{"docid":"6311e7fe-7922-409e-910f-f5a89a7f30d9","root_ids":["59970"],"roots":{"59970":"dfef7a34-73a6-4c95-92f2-5b552e6c1b66"}}];
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