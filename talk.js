


<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled emoji-size-boost">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>pandorabots/talk.js</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="pandorabots/talk.js" name="twitter:title" /><meta content="talk.js - Talk to a Pandorabot from the browser" name="twitter:description" /><meta content="https://avatars3.githubusercontent.com/u/5777618?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars3.githubusercontent.com/u/5777618?v=3&amp;s=400" property="og:image" /><meta content="pandorabots/talk.js" property="og:title" /><meta content="https://github.com/pandorabots/talk.js" property="og:url" /><meta content="talk.js - Talk to a Pandorabot from the browser" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/NzcxMTc4OmFlMTQyYTY4ZDFkOTYzYjhmZmQ2MGNiNDk1ODRmNmZkOjQ2YzA4MDE2NTNiOGFkMDA2MjExMzNmOWE1ZjU0ZWNiYTk5NmFiMWEyMGE4NzI2MGFlMzBhNzYyZDg4YjZiZjU=--c7f9fd012109da5f7be9f774295df9058ceda7cf">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="4DF3257A:09B2:37BE4502:564E3F2C" name="octolytics-dimension-request_id" /><meta content="771178" name="octolytics-actor-id" /><meta content="antlersanchors" name="octolytics-actor-login" /><meta content="91ba625eae94f00c34524b0f5d69303f025f73e8bacc3c2fef9646080abbbf32" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/files/disambiguate" data-pjax-transient="true" name="analytics-location" />
<meta content="Rails, view, files#disambiguate" data-pjax-transient="true" name="analytics-event" />


  <meta class="js-ga-set" name="dimension1" content="Logged In">
    <meta class="js-ga-set" name="dimension4" content="Current repo nav">




    <meta name="is-dotcom" content="true">
        <meta name="hostname" content="github.com">
    <meta name="user-login" content="antlersanchors">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="73177e1ce090e13d62654bc4ffa4204b9404f720" name="form-nonce" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-ceefdafe87b6f218cd93adcaec6a8878ed1f959f7f5937d308b4b0f6b251a7a0.css" integrity="sha256-zu/a/oe28hjNk63K7GqIeO0flZ9/WTfTCLSw9rJRp6A=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2-7048b51d8e88507e1babbe42418137bac3f5ef75f4b1957242327b23ebacd292.css" integrity="sha256-cEi1HY6IUH4bq75CQYE3usP173X0sZVyQjJ7I+us0pI=" media="all" rel="stylesheet" />
    
    
    


    <meta http-equiv="x-pjax-version" content="9ece15d68b9fa2b7ae955db58cbeba18">

      
  <meta name="description" content="talk.js - Talk to a Pandorabot from the browser">
  <meta name="go-import" content="github.com/pandorabots/talk.js git https://github.com/pandorabots/talk.js.git">

  <meta content="5777618" name="octolytics-dimension-user_id" /><meta content="pandorabots" name="octolytics-dimension-user_login" /><meta content="23640366" name="octolytics-dimension-repository_id" /><meta content="pandorabots/talk.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="23640366" name="octolytics-dimension-repository_network_root_id" /><meta content="pandorabots/talk.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/pandorabots/talk.js/commits/master.atom" rel="alternate" title="Recent Commits to talk.js:master" type="application/atom+xml">

  </head>


  <body class="logged_in   env-production macintosh vis-public">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/pandorabots/talk.js/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/pandorabots/talk.js/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
      </div>

      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
      <span class="js-socket-channel js-updatable-content"
        data-channel="notification-changed:antlersanchors"
        data-url="/notifications/header">
      <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
          <span class="mail-status all-read"></span>
          <span class="octicon octicon-bell"></span>
</a>  </span>

  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus left"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="pandorabots/talk.js">This repository</span>
  </div>
    <a class="dropdown-item" href="/pandorabots/talk.js/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-s js-menu-target" href="/antlersanchors"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@antlersanchors" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/771178?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu  dropdown-menu-sw">
        <div class=" dropdown-header header-nav-current-user css-truncate">
            Signed in as <strong class="css-truncate-target">antlersanchors</strong>

        </div>


        <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/antlersanchors" data-ga-click="Header, go to profile, text:your profile">
            Your profile
          </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>

          <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
            Settings
          </a>

          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="73177e1ce090e13d62654bc4ffa4204b9404f720" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="MOh3vuxiuAWUiCLzKc7wy5tBBKOO+Fc1uMXAypMqHLGj1gSyeTpxgY+VMN1zbJxmAk97WSiXhwGfH+3yKPiung==" /></div>
            <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
              Sign out
            </button>
</form>
      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>

      

      


    <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/WebPage">
    <div class="pagehead repohead instapaper_ignore readability-menu">
        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/site/enable_new_repo_nav" class="feature-banner" data-form-nonce="73177e1ce090e13d62654bc4ffa4204b9404f720" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="j/Z52ZOnUfM/KcuKdH7o2O1xG5tR18rKxUR7GnbKi5jN+gRTs1Fe1mBIYlU96I/ZmL3ZoweEIhx0qbsMoXraTw==" /></div>
          <div class="container">
            <button type="submit" class="btn btn-primary right">
              Switch to new design
            </button>
            <h3 class="feature-banner-heading">Introducing a new repository design</h3>
            Hey there! We're <a href="https://github.com/blog/2085-a-new-look-for-repositories" target="_blank">rolling out</a> a faster, more streamlined repository experience and would love to give you early access.
          </div>
</form>
      <div class="container">

        <div class="clearfix">
          

<ul class="pagehead-actions">

  <li>
        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="73177e1ce090e13d62654bc4ffa4204b9404f720" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="FMWomXcSvxfIAKinhQIbUD4ooAr3BrzLeZ52aXDIVqAU/t8QJxwWM3RCxqEtPtRGOKNWurIUhBkj4V86g9g3rg==" /></div>      <input id="repository_id" name="repository_id" type="hidden" value="23640366" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/pandorabots/talk.js/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:files#disambiguate">
            <span class="js-select-button">
              <span class="octicon octicon-eye"></span>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count" href="/pandorabots/talk.js/watchers">
            2
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <span class="octicon octicon-eye"></span>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <span class="octicon octicon-eye"></span>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <span class="octicon octicon-mute"></span>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/pandorabots/talk.js/unstar" class="js-toggler-form starred js-unstar-button" data-form-nonce="73177e1ce090e13d62654bc4ffa4204b9404f720" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="gNSZcZwuoTI4ZhnmBikwXIt7+A0GHApDsYGANSKQxd6kdTC/LjBSX3VFY8QOyJ2iSCRR4TBqK7RvIFyHIp0heQ==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar pandorabots/talk.js"
        data-ga-click="Repository, click unstar button, action:files#disambiguate; text:Unstar">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/pandorabots/talk.js/stargazers">
          1
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/pandorabots/talk.js/star" class="js-toggler-form unstarred js-star-button" data-form-nonce="73177e1ce090e13d62654bc4ffa4204b9404f720" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Ur347jbo0JVP9jFKaPDuyVLgPwcQnJ0HcYPTyURWug2PugZFZJkxW+IJTK2ao6SoiPXiinsa3MeSrvK7Qpr19Q==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star pandorabots/talk.js"
        data-ga-click="Repository, click star button, action:files#disambiguate; text:Star">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/pandorabots/talk.js/stargazers">
          1
        </a>
</form>  </div>

  </li>

  <li>
          <a href="#fork-destination-box" class="btn btn-sm btn-with-count"
              title="Fork your own copy of pandorabots/talk.js to your account"
              aria-label="Fork your own copy of pandorabots/talk.js to your account"
              rel="facebox"
              data-ga-click="Repository, show fork modal, action:files#disambiguate; text:Fork">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>

          <div id="fork-destination-box" style="display: none;">
            <h2 class="facebox-header" data-facebox-id="facebox-header">Where should we fork this repository?</h2>
            <include-fragment src=""
                class="js-fork-select-fragment fork-select-fragment"
                data-url="/pandorabots/talk.js/fork?fragment=1">
              <img alt="Loading" height="64" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-128.gif" width="64" />
            </include-fragment>
          </div>

    <a href="/pandorabots/talk.js/network" class="social-count">
      2
    </a>
  </li>
</ul>

          <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
  <span class="mega-octicon octicon-repo"></span>
  <span class="author"><a href="/pandorabots" class="url fn" itemprop="url" rel="author"><span itemprop="title">pandorabots</span></a></span><!--
--><span class="path-divider">/</span><!--
--><strong><a href="/pandorabots/talk.js" data-pjax="#js-repo-pjax-container">talk.js</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

</h1>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline with-full-navigation">
        <div class="repository-sidebar clearfix">
          
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/pandorabots/talk.js/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/pandorabots/talk.js" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /pandorabots/talk.js">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/pandorabots/talk.js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /pandorabots/talk.js/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/pandorabots/talk.js/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /pandorabots/talk.js/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/pandorabots/talk.js/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /pandorabots/talk.js/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/pandorabots/talk.js/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /pandorabots/talk.js/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/pandorabots/talk.js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /pandorabots/talk.js/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

            <div class="only-with-full-nav">
                
<div class="js-clone-url clone-url open"
  data-protocol-type="http">
  <h3 class="text-small text-muted"><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini text-small text-muted input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/pandorabots/talk.js.git" readonly="readonly" aria-label="HTTPS clone URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="ssh">
  <h3 class="text-small text-muted"><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini text-small text-muted input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:pandorabots/talk.js.git" readonly="readonly" aria-label="SSH clone URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="subversion">
  <h3 class="text-small text-muted"><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini text-small text-muted input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/pandorabots/talk.js" readonly="readonly" aria-label="Subversion checkout URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<div class="clone-options text-small text-muted">You can clone with
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-form-nonce="73177e1ce090e13d62654bc4ffa4204b9404f720" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="nW2+aKutUNAqkfg8NXD+vHBtRYGkQfaXjNBlTbxHQl3CEYXCToYBj5JJXGPMLhGVS57vDwqv4+PuV2bmXTj6yQ==" /></div><button class="btn-link js-clone-selector" data-protocol="http" type="submit">HTTPS</button></form>, <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-form-nonce="73177e1ce090e13d62654bc4ffa4204b9404f720" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="MQFrpW2MStqCFu/HnMZLHflTR6LsJj9C2CaPOqO2tC1jvLHtsQ6Y82P2lejqpB931OJ3ZkRDliMCoAq69Tk+0g==" /></div><button class="btn-link js-clone-selector" data-protocol="ssh" type="submit">SSH</button></form>, or <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-form-nonce="73177e1ce090e13d62654bc4ffa4204b9404f720" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="2s1T97Bzwi7HL6HkMrTmKjBxqxtuczHJ4fQ7q8gy3jZSr01n2Ruxh0uzV2hS5E8W7YjEVIRRNmyIiBe6pcoTeA==" /></div><button class="btn-link js-clone-selector" data-protocol="subversion" type="submit">Subversion</button></form>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</div>
  <a href="github-mac://openRepo/https://github.com/pandorabots/talk.js" class="btn btn-sm sidebar-button" title="Save pandorabots/talk.js to your computer and use it in GitHub Desktop." aria-label="Save pandorabots/talk.js to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-desktop-download"></span>
    Clone in Desktop
  </a>

              <a href="/pandorabots/talk.js/archive/master.zip"
                 class="btn btn-sm sidebar-button"
                 aria-label="Download the contents of pandorabots/talk.js as a zip file"
                 title="Download the contents of pandorabots/talk.js as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div>
        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>

          
<span id="js-show-full-navigation"></span>

  <div class="repository-meta js-details-container ">
    <div class="repository-description">
      Talk to a Pandorabot from the browser
    </div>


</div>


<div class="overall-summary overall-summary-bottomless">

  <div class="stats-switcher-viewport js-stats-switcher-viewport">
    <div class="stats-switcher-wrapper">
    <ul class="numbers-summary">
      <li class="commits">
        <a data-pjax href="/pandorabots/talk.js/commits/master">
            <span class="octicon octicon-history"></span>
            <span class="num text-emphasized">
              8
            </span>
            commits
        </a>
      </li>
      <li>
        <a data-pjax href="/pandorabots/talk.js/branches">
          <span class="octicon octicon-git-branch"></span>
          <span class="num text-emphasized">
            1
          </span>
          branch
        </a>
      </li>

      <li>
        <a data-pjax href="/pandorabots/talk.js/releases">
          <span class="octicon octicon-tag"></span>
          <span class="num text-emphasized">
            0
          </span>
          releases
        </a>
      </li>

      <li>
        <include-fragment src="/pandorabots/talk.js/contributors_size">
          <a href="/pandorabots/talk.js/graphs/contributors">
            <span class="octicon octicon-organization"></span>
            <span class="num text-emphasized"></span>
            Fetching contributors
          </a>
</include-fragment>      </li>
    </ul>

      <div class="repository-lang-stats">
        <ol class="repository-lang-stats-numbers">
          <li>
              <a href="/pandorabots/talk.js/search?l=javascript">
                <span class="color-block language-color" style="background-color:#f1e05a;"></span>
                <span class="lang">JavaScript</span>
                <span class="percent">91.4%</span>
              </a>
          </li>
          <li>
              <a href="/pandorabots/talk.js/search?l=html">
                <span class="color-block language-color" style="background-color:#e44b23;"></span>
                <span class="lang">HTML</span>
                <span class="percent">8.6%</span>
              </a>
          </li>
        </ol>
      </div>
    </div>
  </div>

</div>

  <div class="repository-lang-stats-graph js-toggle-lang-stats" title="Click for language details">
    <span class="language-color" aria-label="JavaScript 91.4%" style="width:91.4%; background-color:#f1e05a;" itemprop="keywords">JavaScript</span>
    <span class="language-color" aria-label="HTML 8.6%" style="width:8.6%; background-color:#e44b23;" itemprop="keywords">HTML</span>
  </div>

<include-fragment src="/pandorabots/talk.js/show_partial?partial=tree%2Frecently_touched_branches_list"></include-fragment>

  <div class="file-navigation in-mid-page">
  <a href="/pandorabots/talk.js/find/master"
        class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-s right"
        data-pjax
        data-hotkey="t"
        aria-label="Quickly jump between files"
        data-ga-click="Repository, find file, location:repo overview">
    <span class="octicon octicon-list-unordered"></span>
  </a>

    <a href="/pandorabots/talk.js/compare" aria-label="Compare, review, create a pull request" class="btn btn-sm btn-primary tooltipped tooltipped-se left compare-button" aria-label="Compare &amp; review" data-pjax data-ga-click="Repository, go to compare view, location:repo overview; icon:git-compare">
      <span class="octicon octicon-git-compare"></span>
    </a>

  
<div class="select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/pandorabots/talk.js/tree/master"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>


  <div class="breadcrumb"><span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/pandorabots/talk.js" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">talk.js</span></a></span></span><span class="separator">/</span>
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/pandorabots/talk.js/new/master" class="js-new-blob-form inline-form" data-form-nonce="73177e1ce090e13d62654bc4ffa4204b9404f720" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="lwLhVwdCFIYFHTjw+5CCIKy9wWWze+A9jtAyLzFpFgD6BOqotT4mMS2i67vEAmuJlh0tcBmh5NBTunqdNc6efg==" /></div>
    <button class="btn-link tooltipped tooltipped-e" type="submit"
      data-disable-with="working…" aria-label="Fork this project and create a new file">
      <span class="js-new-blob-submit octicon octicon-plus"></span>
    </button>
</form></div>
</div>





  <div class="commit-tease js-details-container">
    <span class="right">
      Latest commit
      <a class="commit-tease-sha" href="/pandorabots/talk.js/commit/0e642d10a5b9368199563483e8e29bc9019b5639" data-pjax>
        0e642d1
      </a>
      <time datetime="2015-08-24T22:33:09Z" is="relative-time">Aug 24, 2015</time>
    </span>


    <span class="commit-author-section">
      <img alt="@djfdev" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/6677248?v=3&amp;s=40" width="20" />
      <a href="/djfdev" class="user-mention" rel="contributor">djfdev</a>
    </span>

        <a href="/pandorabots/talk.js/commit/0e642d10a5b9368199563483e8e29bc9019b5639" class="message" data-pjax="true" title="added note regarding future of this repo">added note regarding future of this repo</a>
    </span>

  </div>


<div class="file-wrap">
  <a href="/pandorabots/talk.js/tree/0e642d10a5b9368199563483e8e29bc9019b5639" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <table class="files js-navigation-container js-active-navigation-container" data-pjax>


    <tbody>
      <tr class="warning include-fragment-error">
        <td class="icon"><span class="octicon octicon-alert"></span></td>
        <td class="content" colspan="3">Failed to load latest commit information.</td>
      </tr>

        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-directory"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/pandorabots/talk.js/tree/master/example" class="js-directory-link js-navigation-open" id="1a79a4d60de6718e8e5b326e338ae533-d202d6e5bdc9532fcc8b11537fb0600d5128127b" title="example">example</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/pandorabots/talk.js/commit/8feca31de2b7c891b47514eda5edc4cf7ae5aa5b" class="message" data-pjax="true" title="changed username to app_id">changed username to app_id</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-09-12T20:02:56Z" is="time-ago">Sep 12, 2014</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/pandorabots/talk.js/blob/master/LICENSE" class="js-directory-link js-navigation-open" id="9879d6db96fd29134fc802214163b95a-5622796a0227fe471d0cb8acc719a3123f8e688c" title="LICENSE">LICENSE</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/pandorabots/talk.js/commit/eb1c7965fb463ca67eabad3c011c0156fd41111c" class="message" data-pjax="true" title="init">init</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-09-03T22:00:48Z" is="time-ago">Sep 3, 2014</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/pandorabots/talk.js/blob/master/README.md" class="js-directory-link js-navigation-open" id="04c6e90faac2675aa89e2176d2eec7d8-1c6048d3eec982b05729286ff4988ca4c6b14460" title="README.md">README.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/pandorabots/talk.js/commit/0e642d10a5b9368199563483e8e29bc9019b5639" class="message" data-pjax="true" title="added note regarding future of this repo">added note regarding future of this repo</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-08-24T22:33:09Z" is="time-ago">Aug 24, 2015</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/pandorabots/talk.js/blob/master/talk.js" class="js-directory-link js-navigation-open" id="d00708a53da32c607a89f95de6675c02-c4ff03a5b09411d20a14853b383d9246b2beb99d" title="talk.js">talk.js</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/pandorabots/talk.js/commit/a3352e7058fd69c90d2e7d9c6e2ae9161bbf954f" class="message" data-pjax="true" title="added extra">added extra</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-10-23T23:15:18Z" is="time-ago">Oct 23, 2014</time></span>
          </td>
        </tr>
    </tbody>
  </table>

</div>


  <div id="readme" class="boxed-group flush clearfix announce instapaper_body md">
    <h3>
      <span class="octicon octicon-book"></span>
      README.md
    </h3>

    <article class="markdown-body entry-content" itemprop="mainContentOfPage"><blockquote>
<p><strong>NOTE:</strong> this repository is no longer being maintained. For an example of how to talk to the Pandorabots Talk API from the browser, please see <a href="https://gist.github.com/djfdev/150192b3c3934516f4cc">this gist</a>.</p>
</blockquote>
</article>
  </div>


        </div>
      </div>
      <div class="modal-backdrop"></div>
    </div>
  </div>


    </div>

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.15252s from github-fe137-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <span class="octicon octicon-x"></span>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" integrity="sha256-fRgMK7V3nst6tdBM6K+ZnnODbc8N8ajES2nGKh3gcy8=" src="https://assets-cdn.github.com/assets/frameworks-7d180c2bb5779ecb7ab5d04ce8af999e73836dcf0df1a8c44b69c62a1de0732f.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-4KCQ02TxeL/ZW7LmA7szx7KVrWPr9/ncCSBdqqx7T2Y=" src="https://assets-cdn.github.com/assets/github-e0a090d364f178bfd95bb2e603bb33c7b295ad63ebf7f9dc09205daaac7b4f66.js"></script>
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
  </body>
</html>

