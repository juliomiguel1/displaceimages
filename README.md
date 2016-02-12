<h1>displaceimage.js</h1>

<h3>Why should I use this plugin?</h3>
<ul>
<li>Slides can contain images, video.</li>
<li>Uses CSS transitions for slide animation.</li>
<li>Small file size, fully themed, simple to implement.</li>
<li>Browser support: Firefox, Chrome.</li>
<li>Unlimited Images.</li>
</ul>
<h3>How to install</h3>

<div class="step">
    <h3>Step 1: Link required files</h3>
    <p>First and most important, the jQuery library needs to be included (no need to download - link directly from Google). 
Next, download the package from this site and link the "displaceimage" CSS file (for the theme) and the "displaceimage" 
Javascript file.</p>
    <pre><code data-language="html">&lt;!-- jQuery library (served from Google) --&gt;
&lt;script src=&quot;&#x2F;&#x2F;ajax.googleapis.com&#x2F;ajax&#x2F;libs&#x2F;jquery&#x2F;1.6.2&#x2F;jquery.min.js&quot;&gt;&lt;&#x2F;script&gt;
&lt;!-- displaceimage Javascript file --&gt;
&lt;script src=&quot;&#x2F;js&#x2F;displaceimage.js&quot;&gt;&lt;&#x2F;script&gt;
&lt;!-- displaceimage CSS file --&gt;
&lt;link href=&quot;&#x2F;lib&#x2F;displaceimage.css&quot; rel=&quot;stylesheet&quot; &#x2F;&gt;</code></pre>
  </div>

 <div class="step">
    <h3>Step 2: Create HTML markup</h3>
    <p>Create a <code>&lt;div class="marco" &lt;ul &gt;</code> element, with a <code>&lt;li&gt;</code> for each slide. Slides can contain images, video</p>
    <pre><code data-language="html">
  &lt;div class=&quot;marco&quot;&gt;
    &lt;ul&gt;
        &lt;li&gt;&lt;img src=&quot;&#x2F;imG&#x2F;1.jpg&quot; &#x2F;&gt;&lt;&#x2F;li&gt;
        &lt;li&gt;&lt;img src=&quot;&#x2F;img&#x2F;2.jpg&quot; &#x2F;&gt;&lt;&#x2F;li&gt;
        &lt;li&gt;&lt;img src=&quot;&#x2F;img&#x2F;3.jpg&quot; &#x2F;&gt;&lt;&#x2F;li&gt;
        &lt;li&gt;&lt;img src=&quot;&#x2F;img&#x2F;4.jpg&quot; &#x2F;&gt;&lt;&#x2F;li&gt;
        &lt;li&gt;&lt;img src=&quot;&#x2F;img&#x2F;5.jpg&quot; &#x2F;&gt;&lt;&#x2F;li&gt;
        &lt;li&gt;&lt;img src=&quot;&#x2F;img&#x2F;6.jpg&quot; &#x2F;&gt;&lt;&#x2F;li&gt;
    &lt;&#x2F;ul&gt;
  &lt;&#x2F;div&gt;
   </code></pre>
  </div>

 <div class="step">
    <h3>Step 3: Call the displaceimage</h3>
    <p>Call .displaceimage() on <code>&lt;ul class=".marco"&gt;</code>. Note that the call must be made inside of a                $(document).ready() call, or the plugin will not work!</p>
    <pre><code data-language="javascript">$(document).ready(function(){
  $(&#x27;.marco&#x27;).displaceimage();
});</code></pre>
  </div>
