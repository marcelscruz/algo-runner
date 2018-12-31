// Default style for react-metismenu, found in /node_modules/react-metismenu/dist

export const sidebar = `.metismenu {
  background: #303336;
  font-family: 'Open Sans', sans-serif;
  font-size: 12pt;
  overflow: hidden;
  position: relative;
}

.metismenu > .metismenu-container > .metismenu-item > .metismenu-link {
  line-height: 2.5em;
}

.metismenu > .metismenu-container > .metismenu-item > .metismenu-link .metismenu-state-icon {
  line-height: 2.5em;
}

.metismenu-container,
.metismenu-item {
  margin: 0;
  padding: 0;
}

.metismenu-container {
  list-style: none;
}

.metismenu-container .metismenu-container {
  box-shadow: 0 0.3em 0.3em -0.3em #0c0d0e inset, 0 -0.3em 0.3em -0.3em #0c0d0e inset;
  -webkit-box-shadow: 0 0.3em 0.3em -0.3em #0c0d0e inset, 0 -0.3em 0.3em -0.3em #0c0d0e inset;
  transition: padding 300ms;
  -webkit-transition: padding 300ms;
  background: rgba(255, 255, 255, 0.05);
}

.metismenu-container .metismenu-container .metismenu-item > .metismenu-link {
  height: 0;
  overflow: hidden;
}

.metismenu-container .metismenu-container .metismenu-link {
  padding-left: 1em;
}

.metismenu-container .metismenu-container .metismenu-container .metismenu-link {
  padding-left: 2em;
}

.metismenu-container.visible {
  padding: .5em 0;
}

.metismenu-container.visible > .metismenu-item > .metismenu-link {
  height: 2.5em;
}

.metismenu-link {
  color: #DDD;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.5);
  -webkit-text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.5);
  transition: height 300ms, color 300ms, background-color 300ms;
  -webkit-transition: height 300ms, color 300ms, background-color 300ms;
  display: block;
  line-height: 2.5em;
  text-decoration: none;
  padding: 0 1rem;
}

.metismenu-link:hover {
  background: rgba(255, 255, 255, 0.05);
  color: #f7f7f7;
}

.metismenu-link.active {
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
  -webkit-text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
  background: #F53;
  color: #FFF;
}
.metismenu-link.has-active-child {
  color: #F53;
}

I.metismenu-icon {
  text-align: center;
  width: 3em;
}

I.metismenu-state-icon {
  transition: transform 300ms;
  -webkit-transition: transform 300ms;
  float: right;
  line-height: 2.5em;
  text-align: center;
  width: 3em;
}

I.metismenu-state-icon.rotate-minus-90 {
  transform: rotate(-90deg);
  -webkit-transform: rotate(-90deg);
}`
