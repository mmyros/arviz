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
    
      
      
    
      var element = document.getElementById("6fae9b68-8f26-4586-a1ac-2f94b13b29a3");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '6fae9b68-8f26-4586-a1ac-2f94b13b29a3' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;df0c4b42-5b78-4bab-99c4-3d896d1e8c2e&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[400]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[400]}},&quot;selected&quot;:{&quot;id&quot;:&quot;60863&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;60864&quot;}},&quot;id&quot;:&quot;60845&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;60857&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;60819&quot;}},&quot;id&quot;:&quot;60818&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60827&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;60818&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;60821&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60857&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60865&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;60850&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;60851&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;60852&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;60854&quot;}},&quot;id&quot;:&quot;60853&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60823&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;60818&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;60821&quot;},{&quot;id&quot;:&quot;60825&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;60822&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;60848&quot;},{&quot;id&quot;:&quot;60853&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;60856&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;60836&quot;},&quot;toolbar_location&quot;:&quot;above&quot;,&quot;x_range&quot;:{&quot;id&quot;:&quot;60810&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;60814&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;60812&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;60816&quot;}},&quot;id&quot;:&quot;60809&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;60859&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;60823&quot;}},&quot;id&quot;:&quot;60822&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60859&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;red&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;60847&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60814&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;red&quot;,&quot;line_alpha&quot;:0,&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;60846&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;60822&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;60825&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60810&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;60826&quot;},{&quot;id&quot;:&quot;60827&quot;},{&quot;id&quot;:&quot;60828&quot;},{&quot;id&quot;:&quot;60829&quot;},{&quot;id&quot;:&quot;60830&quot;},{&quot;id&quot;:&quot;60831&quot;},{&quot;id&quot;:&quot;60832&quot;},{&quot;id&quot;:&quot;60833&quot;}]},&quot;id&quot;:&quot;60836&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;60845&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;60846&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;60847&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;60849&quot;}},&quot;id&quot;:&quot;60848&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;c/G+1rPSBMAy81qnbR/+v94VbHgB1/2/Aq2+Niwt/b+AS4rwf+D8v/uxewg8fPe/VV0P0vdU9r++GSHZ2i70vz6uhfCTz/K/0SfsgACF8r/IzMfCKhjyv5rOhup1zu2/OTESf9RB67/KtSSJXC/rv857Ad6OJum/C2aWztwR6b9aljLz3EDov4HL5ekYg+W/Vgm7Lbwv5b/BZhgwVHjkv/BWevdJ/+K/dWygFpvf4r+07PPfKpbiv43LnwsWQ+G/JSqlegD24L8kfw8gFo3gvz3b89rOSt+/cp7fnKe5279WaF45SH3av/8Yf57Wcdq/VBG48U272b9v+Obl6erWv0hOWFjUCNa/NTekZzzo1b+ANL5UaL7VvyjtW1HtOtW/pd1YEjnp1L94k88HEMbTvztqdqlU5tG/BPMXky36yr+VIBEQ6KLHvzTr8E7qq8O/b3C96NQmvb9BbrvrpB28v4yul44gMqy/MYbL+tzzp79wZfNZVrCav/lgQZgYGHy/79xPzk+LbL8zJnKtd3dnP5VKpjYc/Zo/GDrxPqS2pj/b2vJ95wO6P7pKoKzH0L0/KM7sJzRMwz/zQDaQng/JP6Jrf+xWj84/bw+DMhYQzz/fU3pVO6/PP3FCBCZKVdE/eD2fQ0Zr0T+osQL5UOHRP9QrERRmtNI/3w0apatQ1T/2fYdLc4rVP7SM+ih7p9U/syXcYVuU2T+TGJy29q7aP79rdaQZv9o/cCR/BUtx3T9r0fwT2/TdP369YXPynt8/A/1HQky+3z+hVwypBvTgP1m+u150euI/v+DKN0XY4j/OGMiiJfPiPyNESu7ynuM/Yi+z1IEP5T+77AFVuD7mPz+fJAix/+Y/xQ9Ui+Td5z+YyRJm7XHoPySYP9M9dus/oCss5Uop7T9x3T3iR7rtP6Mze4eVi/A/vejEoqbJ8D8knRTQXdnwP9YBktogjfE/vU/sOL6+8j/vdb6OznbzP2BPCRUIRvQ/8HgPhzgL9T87gqak2x/1P1j6aNLMqfU/EpOX6KLh9z+5b2KTTGL6P8Mz1FRwfvw/FM05FIpECkA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[100]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;Gh2CUpha5j9nhlIsSfDwPxH1yUN/FPE/f6mg5Glp8T9A2roHwI/xPwInwvvhQfQ/VlH4FoTV9D8hc2+Tkuj1P+EovQc2mPY/GOyJv3+99j+cGZye6vP2P1pMXoVijPg/snM74Iov+T+O0rbdKDT5Pwyhf0hctvk/fWZazIi7+T9qWjPDyO/5PyCNhsU5n/o/qj2R9BC0+j9Q5vnz6uH6P0RqIYItQPs/4+RXOhlI+z/TBANIdVr7Px0NGH06r/s/d7VW4X/C+z83IPx3utz7P5iEoSSmFvw/MgxkDMuI/D/1MtT4VrD8P+AcMCzFsfw/1v3IQZbI/D/yIEPDoiL9Pzf29HTlPv0/GXkLc/hC/T9wOWj1Mkj9P1uC1FWiWP0/S+S03dhi/T+RDQb/PYf9P7ky0Wo1w/0/0IDOJl1Q/j/37f5+0YX+P03xEFtBxf4/fRS6WMkW/z+OJKLYEh//P0ahxX03j/8/59EUjDCg/z81GUxTn8r/P1Dfs/Pz8f8/CWwMLN34/z9FrvXu7gIAQEumNhz9GgBAdOJ9SG0tAEBry/edD2gAQCuBsh5DdwBAcWY/oWGaAEAIsoH0fMgAQF37Y7d69ABAexiUsYD4AECf0qvaef0AQCdEYKJUFQFA2PM5ZLQWAUAaK5APFR4BQL0SQWFGKwFA3qBRugpVAUDfd7g0p1gBQMuoj7J3WgFAW8IdtkWZAUCJwWlr76oBQLxWR5rxqwFAR/JXsBTXAUAXzT+xTd8BQNgbNifv+QFA0H8kxOT7AUD0iiHVgB4CQMt314tOTwJAGFz5pghbAkAaA1m0ZF4CQIRIyV3ecwJA7GWWOvChAkCXPaAK18cCQOiTBCH23wJA+YFqkbz7AkAzWcKsPQ4DQATzZ7rHbgNAdIWlXCmlA0Cuu0f8SLcDQOnM3mHlIgRALzqxqGkyBEBJJwV0VzYEQHaApDZIYwRA7xM7jq+vBEB8na+js90EQNhTQgWCEQVAPN7DIc5CBUCPoCnp9kcFQJY+mjRzagVAxOQlumj4BUDum9gkk5gGQPEMNRWcHwdAiuYcCkUiDUA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[100]}},&quot;selected&quot;:{&quot;id&quot;:&quot;60865&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;60866&quot;}},&quot;id&quot;:&quot;60850&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;60845&quot;}},&quot;id&quot;:&quot;60849&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;60850&quot;}},&quot;id&quot;:&quot;60854&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60812&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60826&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;60851&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;60856&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60816&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;60835&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60866&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60819&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60863&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;60852&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60829&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60832&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;60834&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60831&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60864&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;60835&quot;}},&quot;id&quot;:&quot;60830&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;60833&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;60834&quot;}},&quot;id&quot;:&quot;60828&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;}],&quot;root_ids&quot;:[&quot;60809&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.2&quot;}}';
                  var render_items = [{"docid":"df0c4b42-5b78-4bab-99c4-3d896d1e8c2e","root_ids":["60809"],"roots":{"60809":"6fae9b68-8f26-4586-a1ac-2f94b13b29a3"}}];
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