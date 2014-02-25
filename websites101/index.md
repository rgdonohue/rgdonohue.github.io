#Websites 101 <small><br>web design, development, and deployment</small>

##content first!

**questions** you should be asking:

* what's the purpose of my wesbite?
* will it be a simple static website?
* will it be dynamic (i.e. do you want a blog?)

**prepare your content**

* what is web writing?

  Remember that writing for the web is different than writing for an academic journal:
  * break paragraphs up into smaller chunks
  * use more sub-headings
  * use more lists  
  
  Make your message simple and clear!
  
* images may need to be pre-processed (crop and downsample to reduce file size)

##options for building a website
options range from (most technically demanding to least):

1. "roll your own" 
2. use of templates/frameworks to build or hack a site together
3. use of a content management system (CMS), and some hacking
4. pay a professional web designer/developer to build it

#### important considerations before deciding a route forward: 

* maintainence
* accessibility
* cost (remember time == $)

#### what's hot and trendy?

*  minimialism
*  flat design (vs skeuomorphism)
*  big images!
*  slick transitions and effects
*  what is "responsive web design"?  examples: [Media Queries](http://mediaqueri.es/)

### 1. "roll your own"

Websites can be build for free with simple text editors!  Consider using [Sublime Text](http://www.sublimetext.com/) for mac or [Notepad++](http://notepad-plus-plus.org/) for PC. 

An iterated development environment (IDE) like Dreamweaver can be okay, though watch out for unnecessary html and style rules (page bloat).  Consider [alternative to Dreamweaver](http://www.onextrapixel.com/2013/06/18/10-best-alternatives-to-adobe-dreamweaver/) as well.

Places to play with code, share examples:

* [JSFiddle](http://jsfiddle.net/)
* [CodePen](http://codepen.io/)

**learning resources for html/CSS**

* Mozilla Developer Network (MDN) [Learn how to make websites](https://developer.mozilla.org/en-US/learn)
* Open Web Platform's [HTML tutorials](http://docs.webplatform.org/wiki/html/tutorials)
* Code Academy's [HTML & CSS Introduction](http://www.codecademy.com/tracks/web)
* [Lynda.com](http://www.lynda.com/) (free through your UW NetID!)
* DOIT's [Software Training for Students](http://sts.doit.wisc.edu/)

**pros**:

* full customization of site design and behavior
* html/css are a 'gateway drug' to programming 

**cons**:

* need them skills
* time-consuming


### 2. use of templates/frameworks to build or hack a site together

HTML/CSS **templates**, **boilerplates**, **scaffolding** and **frameworks** can be useful for reference, quickly building up a site, or hacking one from another build.

Note that there are many free website templates for you to download and modify, as well as many website "builder" or "wizard" services (try 'em out!?).

Some more robust frameworks to consider:
  
* [HTML5 Boilerplate](http://html5boilerplate.com/)
* [Twitter Bootstrap](http://getbootstrap.com/getting-started/)
* [Foundation](http://foundation.zurb.com/)
* [Initializr](http://www.initializr.com/)
  
Consider something minimal and simple like the "[The real HTML5 boilerplate](http://csswizardry.com/2011/01/the-real-html5-boilerplate/)."
 
**pros**:

* rapid production of site
* benefit from best practices and good code

**cons**:

* may be overkill for simple site (i.e. file bloat)
* "look and feel" of sites is all the same?

### 3. use of a content management system (CMS), and some hacking

Content management systems attempt to make web design/dev easy through


Lots of [choices for a CM]](http://www.webdesignerdepot.com/2011/10/top-10-content-management-systems/S), but some good options:

* [Wordpress](https://wordpress.org/) (note difference between [Wordpress.com](http://wordpress.com/)!)
* [Drupal](https://drupal.org/)
* [Joomla](http://www.joomla.org/)
* [Django](https://www.djangoproject.com/)  (runs off Python!)
 
* Note that some like [Expression Engine](http://expressionengine.com/) are quite good but cost $$$.

**pros**:

* easy, "out of the box functionality"
* large user groups, lots of documentation and support
* lots of neat plug-ins for extended functionality

**cons**: 

* unless you customize a theme, little control over aesthetics and layout of site
* (most likely) needs a database
* no CMS is perfect ... there are always trade-offs
  
**Rich's advice**:

* use Wordpress if you're unsure, and choose a [minimal theme](http://premium.wpmudev.org/blog/30-premium-yet-free-minimalist-wordpress-themes/)
* use Drupal if you're a coder/developer, want to fully extend the functionality, and know what you're doing
* consider using [Jekyll](http://jekyllrb.com/) for non-database, flat-file alternative

	 
### 4. pay a professional web designer/developer to build it
* expect to pay minimum $40 - $60 per hour for professional design and development (~$800 - $2500 for great, simple website)

##deployment and web hosting

Web **hosting** is still very competitive, which is good for the consumer in terms of the quality, support, and cost.


1. Read up on some latest reviews and pick one from the top 10  ([bluehost](http://www.bluehost.com/), [hostgator](http://www.hostgator.com/), etc): [web hosting reviews](http://webhostshield.com/reviews/)
	
	Note that some hosts buy the power for hosting their servers from renewable energy production (fatcow).

   Pro-tip: [avoid GoDaddy](http://www.forbes.com/sites/kellyclay/2012/09/10/5-reasons-you-should-leave-godaddy-and-how/)

1. When buying a host, it's advantageous to buy as many years as possible ($3 - $4/month, very cheap!).  Likely will **not** get cheaper than the initial signup rate, and renewal is generally about twice as much, so best to **buy 2+ years hosting** if possible at once.
2. Also, you need to buy and register a **domain name** (technically separate than the hosting).  

Rich's advice: 

*  It makes it a little easier to simply register the name with the host, but it's possible to register with a different registrar .  
   
   Obviously all the good domain names are taken (although new top-level domains are being released ... i.e. additions beyond the .com or .net) .  Best to avoid real obscure domain names.  It's also a common practice to buy the .com, .net, and .org domain names at once.

An alternative to dedicated hosting is an increasing number of "cloud" services which are cheaper (if not free) and operate a little differently:

* example: [Amazon Elastic Compute Cloud](http://aws.amazon.com/ec2/pricing/)
* Also, Github now has [free hosting](http://pages.github.com/)