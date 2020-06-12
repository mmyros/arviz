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
    
      
      
    
      var element = document.getElementById("223c4b2f-d752-450f-bbc8-0c394305bd2b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '223c4b2f-d752-450f-bbc8-0c394305bd2b' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;84b6c243-0703-44da-9f1c-098da167998a&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;line_color&quot;:&quot;#1f77b4&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59791&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59766&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;fill_color&quot;:{&quot;value&quot;:&quot;orange&quot;},&quot;line_color&quot;:{&quot;value&quot;:&quot;orange&quot;},&quot;size&quot;:{&quot;units&quot;:&quot;screen&quot;,&quot;value&quot;:6},&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59801&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59769&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59823&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;click_policy&quot;:&quot;hide&quot;,&quot;items&quot;:[{&quot;id&quot;:&quot;59807&quot;},{&quot;id&quot;:&quot;59808&quot;}],&quot;location&quot;:&quot;center_right&quot;,&quot;orientation&quot;:&quot;horizontal&quot;},&quot;id&quot;:&quot;59806&quot;,&quot;type&quot;:&quot;Legend&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;59773&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;tail&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;59803&quot;},{&quot;id&quot;:&quot;59798&quot;}]},&quot;id&quot;:&quot;59808&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{&quot;above&quot;:[{&quot;id&quot;:&quot;59806&quot;}],&quot;below&quot;:[{&quot;id&quot;:&quot;59758&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;59761&quot;},{&quot;id&quot;:&quot;59765&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;59762&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:288,&quot;plot_width&quot;:432,&quot;renderers&quot;:[{&quot;id&quot;:&quot;59788&quot;},{&quot;id&quot;:&quot;59793&quot;},{&quot;id&quot;:&quot;59798&quot;},{&quot;id&quot;:&quot;59803&quot;},{&quot;id&quot;:&quot;59805&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;59809&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;59776&quot;},&quot;toolbar_location&quot;:null,&quot;x_range&quot;:{&quot;id&quot;:&quot;59750&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;59754&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;59752&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;59756&quot;}},&quot;id&quot;:&quot;59749&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59752&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;59774&quot;}},&quot;id&quot;:&quot;59768&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;toolbars&quot;:[{&quot;id&quot;:&quot;59776&quot;}],&quot;tools&quot;:[{&quot;id&quot;:&quot;59766&quot;},{&quot;id&quot;:&quot;59767&quot;},{&quot;id&quot;:&quot;59768&quot;},{&quot;id&quot;:&quot;59769&quot;},{&quot;id&quot;:&quot;59770&quot;},{&quot;id&quot;:&quot;59771&quot;},{&quot;id&quot;:&quot;59772&quot;},{&quot;id&quot;:&quot;59773&quot;}]},&quot;id&quot;:&quot;59828&quot;,&quot;type&quot;:&quot;ProxyToolbar&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;59790&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;59791&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;59792&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;59794&quot;}},&quot;id&quot;:&quot;59793&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[20]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;96FbKLyBMkDEFAnglsNWQBC5N3NCBm1AhSuZf4dmdECKE1YWcHt0QBw2aMPTi3lAiOdK+uWaeUAGhRKd9gZ9QNX3uUqhqIFAnLXIDxQMhUCr7PKl8U6JQLaUOqun4o1AoNLS679XkECU4/KXSGmSQCcpnoFLL5RACq31A5f5lUCcLj2ibHeWQF4U4M8TD5hAMc5SiTsFmkArYzxHIfWcQA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[20]}},&quot;selected&quot;:{&quot;id&quot;:&quot;59820&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;59821&quot;}},&quot;id&quot;:&quot;59790&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;59790&quot;}},&quot;id&quot;:&quot;59794&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;59785&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;59786&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;59787&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;59789&quot;}},&quot;id&quot;:&quot;59788&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59759&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:&quot;red&quot;,&quot;line_dash&quot;:[6],&quot;line_width&quot;:3,&quot;location&quot;:400},&quot;id&quot;:&quot;59805&quot;,&quot;type&quot;:&quot;Span&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59822&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;orange&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;value&quot;:&quot;orange&quot;},&quot;size&quot;:{&quot;units&quot;:&quot;screen&quot;,&quot;value&quot;:6},&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59802&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;59775&quot;}},&quot;id&quot;:&quot;59770&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59767&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;#1f77b4&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59792&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59820&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;59775&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;59795&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;59796&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;59797&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;59799&quot;}},&quot;id&quot;:&quot;59798&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59772&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;59800&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;59801&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;59802&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;59804&quot;}},&quot;id&quot;:&quot;59803&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59821&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59819&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;59785&quot;}},&quot;id&quot;:&quot;59789&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59771&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[[{&quot;id&quot;:&quot;59749&quot;},0,0]]},&quot;id&quot;:&quot;59827&quot;,&quot;type&quot;:&quot;GridBox&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59824&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[20]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;96FbKLyBMkDEFAnglsNWQBC5N3NCBm1AhSuZf4dmdECKE1YWcHt0QBw2aMPTi3lAiOdK+uWaeUAGhRKd9gZ9QNX3uUqhqIFAnLXIDxQMhUCr7PKl8U6JQLaUOqun4o1AoNLS679XkECU4/KXSGmSQCcpnoFLL5RACq31A5f5lUCcLj2ibHeWQF4U4M8TD5hAMc5SiTsFmkArYzxHIfWcQA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[20]}},&quot;selected&quot;:{&quot;id&quot;:&quot;59818&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;59819&quot;}},&quot;id&quot;:&quot;59785&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59814&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;59795&quot;}},&quot;id&quot;:&quot;59799&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59812&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;59774&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59825&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;Total number of draws&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;59812&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59759&quot;}},&quot;id&quot;:&quot;59758&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59750&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;bulk&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;59788&quot;},{&quot;id&quot;:&quot;59793&quot;}]},&quot;id&quot;:&quot;59807&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;59829&quot;},{&quot;id&quot;:&quot;59827&quot;}]},&quot;id&quot;:&quot;59830&quot;,&quot;type&quot;:&quot;Column&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;ESS&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;59814&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59763&quot;}},&quot;id&quot;:&quot;59762&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:&quot;orange&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59796&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59754&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;toolbar&quot;:{&quot;id&quot;:&quot;59828&quot;},&quot;toolbar_location&quot;:&quot;above&quot;},&quot;id&quot;:&quot;59829&quot;,&quot;type&quot;:&quot;ToolbarBox&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[20]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;efl4S7K5UECliF2aYsBdQM+3s3hpAWhA30PsAOxbckA9j+MdBmV5QCjkO/TQqHpAlo8qDuxxfUBhgLuJn9GBQDEicW5nj4VAmAm8VupRhkAL06Ie5C6GQBjMN1TJ+olARw25XLj/ikAxQOYiRzCOQGk5Bqm0MJBA5vBmnUCPkEAAWgBDqmmSQHF+IQeXypNAO/uxzEAolEDsjMUYoPKUQA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[20]}},&quot;selected&quot;:{&quot;id&quot;:&quot;59824&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;59825&quot;}},&quot;id&quot;:&quot;59800&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59762&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;59765&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;59800&quot;}},&quot;id&quot;:&quot;59804&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59818&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;b&quot;},&quot;id&quot;:&quot;59809&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59763&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;size&quot;:{&quot;units&quot;:&quot;screen&quot;,&quot;value&quot;:6},&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59787&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59758&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;59761&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[20]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;efl4S7K5UECliF2aYsBdQM+3s3hpAWhA30PsAOxbckA9j+MdBmV5QCjkO/TQqHpAlo8qDuxxfUBhgLuJn9GBQDEicW5nj4VAmAm8VupRhkAL06Ie5C6GQBjMN1TJ+olARw25XLj/ikAxQOYiRzCOQGk5Bqm0MJBA5vBmnUCPkEAAWgBDqmmSQHF+IQeXypNAO/uxzEAolEDsjMUYoPKUQA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[20]}},&quot;selected&quot;:{&quot;id&quot;:&quot;59822&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;59823&quot;}},&quot;id&quot;:&quot;59795&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;fill_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;size&quot;:{&quot;units&quot;:&quot;screen&quot;,&quot;value&quot;:6},&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59786&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;59766&quot;},{&quot;id&quot;:&quot;59767&quot;},{&quot;id&quot;:&quot;59768&quot;},{&quot;id&quot;:&quot;59769&quot;},{&quot;id&quot;:&quot;59770&quot;},{&quot;id&quot;:&quot;59771&quot;},{&quot;id&quot;:&quot;59772&quot;},{&quot;id&quot;:&quot;59773&quot;}]},&quot;id&quot;:&quot;59776&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59756&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;orange&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59797&quot;,&quot;type&quot;:&quot;Line&quot;}],&quot;root_ids&quot;:[&quot;59830&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.2&quot;}}';
                  var render_items = [{"docid":"84b6c243-0703-44da-9f1c-098da167998a","root_ids":["59830"],"roots":{"59830":"223c4b2f-d752-450f-bbc8-0c394305bd2b"}}];
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