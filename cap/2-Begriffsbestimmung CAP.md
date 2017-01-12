<!DOCTYPE html>
<html>
  <head>
      <meta charset="utf-8" />
      <title>Markdown to HTML</title>
      <style>.markdown-preview:not([data-use-github-style]) { padding: 2em; font-size: 1.2em; color: rgb(171, 178, 191); overflow: auto; background-color: rgb(40, 44, 52); }
.markdown-preview:not([data-use-github-style]) > :first-child { margin-top: 0px; }
.markdown-preview:not([data-use-github-style]) h1, .markdown-preview:not([data-use-github-style]) h2, .markdown-preview:not([data-use-github-style]) h3, .markdown-preview:not([data-use-github-style]) h4, .markdown-preview:not([data-use-github-style]) h5, .markdown-preview:not([data-use-github-style]) h6 { line-height: 1.2; margin-top: 1.5em; margin-bottom: 0.5em; color: rgb(255, 255, 255); }
.markdown-preview:not([data-use-github-style]) h1 { font-size: 2.4em; font-weight: 300; }
.markdown-preview:not([data-use-github-style]) h2 { font-size: 1.8em; font-weight: 400; }
.markdown-preview:not([data-use-github-style]) h3 { font-size: 1.5em; font-weight: 500; }
.markdown-preview:not([data-use-github-style]) h4 { font-size: 1.2em; font-weight: 600; }
.markdown-preview:not([data-use-github-style]) h5 { font-size: 1.1em; font-weight: 600; }
.markdown-preview:not([data-use-github-style]) h6 { font-size: 1em; font-weight: 600; }
.markdown-preview:not([data-use-github-style]) strong { color: rgb(255, 255, 255); }
.markdown-preview:not([data-use-github-style]) del { color: rgb(124, 135, 156); }
.markdown-preview:not([data-use-github-style]) a, .markdown-preview:not([data-use-github-style]) a code { color: rgb(82, 139, 255); }
.markdown-preview:not([data-use-github-style]) img { max-width: 100%; }
.markdown-preview:not([data-use-github-style]) > p { margin-top: 0px; margin-bottom: 1.5em; }
.markdown-preview:not([data-use-github-style]) > ul, .markdown-preview:not([data-use-github-style]) > ol { margin-bottom: 1.5em; }
.markdown-preview:not([data-use-github-style]) blockquote { margin: 1.5em 0px; font-size: inherit; color: rgb(124, 135, 156); border-color: rgb(75, 83, 98); border-width: 4px; }
.markdown-preview:not([data-use-github-style]) hr { margin: 3em 0px; border-top: 2px dashed rgb(75, 83, 98); background: none; }
.markdown-preview:not([data-use-github-style]) table { margin: 1.5em 0px; }
.markdown-preview:not([data-use-github-style]) th { color: rgb(255, 255, 255); }
.markdown-preview:not([data-use-github-style]) th, .markdown-preview:not([data-use-github-style]) td { padding: 0.66em 1em; border: 1px solid rgb(75, 83, 98); }
.markdown-preview:not([data-use-github-style]) code { color: rgb(255, 255, 255); background-color: rgb(58, 63, 75); }
.markdown-preview:not([data-use-github-style]) pre.editor-colors { margin: 1.5em 0px; padding: 1em; font-size: 0.92em; border-radius: 3px; background-color: rgb(49, 54, 63); }
.markdown-preview:not([data-use-github-style]) kbd { color: rgb(255, 255, 255); border-width: 1px 1px 2px; border-style: solid; border-color: rgb(75, 83, 98) rgb(75, 83, 98) rgb(62, 68, 81); background-color: rgb(58, 63, 75); }
.markdown-preview[data-use-github-style] { font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif; line-height: 1.6; word-wrap: break-word; padding: 30px; font-size: 16px; color: rgb(51, 51, 51); overflow: scroll; background-color: rgb(255, 255, 255); }
.markdown-preview[data-use-github-style] > :first-child { margin-top: 0px !important; }
.markdown-preview[data-use-github-style] > :last-child { margin-bottom: 0px !important; }
.markdown-preview[data-use-github-style] a:not([href]) { color: inherit; text-decoration: none; }
.markdown-preview[data-use-github-style] .absent { color: rgb(204, 0, 0); }
.markdown-preview[data-use-github-style] .anchor { position: absolute; top: 0px; left: 0px; display: block; padding-right: 6px; padding-left: 30px; margin-left: -30px; }
.markdown-preview[data-use-github-style] .anchor:focus { outline: none; }
.markdown-preview[data-use-github-style] h1, .markdown-preview[data-use-github-style] h2, .markdown-preview[data-use-github-style] h3, .markdown-preview[data-use-github-style] h4, .markdown-preview[data-use-github-style] h5, .markdown-preview[data-use-github-style] h6 { position: relative; margin-top: 1em; margin-bottom: 16px; font-weight: bold; line-height: 1.4; }
.markdown-preview[data-use-github-style] h1 .octicon-link, .markdown-preview[data-use-github-style] h2 .octicon-link, .markdown-preview[data-use-github-style] h3 .octicon-link, .markdown-preview[data-use-github-style] h4 .octicon-link, .markdown-preview[data-use-github-style] h5 .octicon-link, .markdown-preview[data-use-github-style] h6 .octicon-link { display: none; color: rgb(0, 0, 0); vertical-align: middle; }
.markdown-preview[data-use-github-style] h1:hover .anchor, .markdown-preview[data-use-github-style] h2:hover .anchor, .markdown-preview[data-use-github-style] h3:hover .anchor, .markdown-preview[data-use-github-style] h4:hover .anchor, .markdown-preview[data-use-github-style] h5:hover .anchor, .markdown-preview[data-use-github-style] h6:hover .anchor { padding-left: 8px; margin-left: -30px; text-decoration: none; }
.markdown-preview[data-use-github-style] h1:hover .anchor .octicon-link, .markdown-preview[data-use-github-style] h2:hover .anchor .octicon-link, .markdown-preview[data-use-github-style] h3:hover .anchor .octicon-link, .markdown-preview[data-use-github-style] h4:hover .anchor .octicon-link, .markdown-preview[data-use-github-style] h5:hover .anchor .octicon-link, .markdown-preview[data-use-github-style] h6:hover .anchor .octicon-link { display: inline-block; }
.markdown-preview[data-use-github-style] h1 tt, .markdown-preview[data-use-github-style] h2 tt, .markdown-preview[data-use-github-style] h3 tt, .markdown-preview[data-use-github-style] h4 tt, .markdown-preview[data-use-github-style] h5 tt, .markdown-preview[data-use-github-style] h6 tt, .markdown-preview[data-use-github-style] h1 code, .markdown-preview[data-use-github-style] h2 code, .markdown-preview[data-use-github-style] h3 code, .markdown-preview[data-use-github-style] h4 code, .markdown-preview[data-use-github-style] h5 code, .markdown-preview[data-use-github-style] h6 code { font-size: inherit; }
.markdown-preview[data-use-github-style] h1 { padding-bottom: 0.3em; font-size: 2.25em; line-height: 1.2; border-bottom: 1px solid rgb(238, 238, 238); }
.markdown-preview[data-use-github-style] h1 .anchor { line-height: 1; }
.markdown-preview[data-use-github-style] h2 { padding-bottom: 0.3em; font-size: 1.75em; line-height: 1.225; border-bottom: 1px solid rgb(238, 238, 238); }
.markdown-preview[data-use-github-style] h2 .anchor { line-height: 1; }
.markdown-preview[data-use-github-style] h3 { font-size: 1.5em; line-height: 1.43; }
.markdown-preview[data-use-github-style] h3 .anchor { line-height: 1.2; }
.markdown-preview[data-use-github-style] h4 { font-size: 1.25em; }
.markdown-preview[data-use-github-style] h4 .anchor { line-height: 1.2; }
.markdown-preview[data-use-github-style] h5 { font-size: 1em; }
.markdown-preview[data-use-github-style] h5 .anchor { line-height: 1.1; }
.markdown-preview[data-use-github-style] h6 { font-size: 1em; color: rgb(119, 119, 119); }
.markdown-preview[data-use-github-style] h6 .anchor { line-height: 1.1; }
.markdown-preview[data-use-github-style] p, .markdown-preview[data-use-github-style] blockquote, .markdown-preview[data-use-github-style] ul, .markdown-preview[data-use-github-style] ol, .markdown-preview[data-use-github-style] dl, .markdown-preview[data-use-github-style] table, .markdown-preview[data-use-github-style] pre { margin-top: 0px; margin-bottom: 16px; }
.markdown-preview[data-use-github-style] hr { height: 4px; padding: 0px; margin: 16px 0px; border: 0px none; background-color: rgb(231, 231, 231); }
.markdown-preview[data-use-github-style] ul, .markdown-preview[data-use-github-style] ol { padding-left: 2em; }
.markdown-preview[data-use-github-style] ul.no-list, .markdown-preview[data-use-github-style] ol.no-list { padding: 0px; list-style-type: none; }
.markdown-preview[data-use-github-style] ul ul, .markdown-preview[data-use-github-style] ul ol, .markdown-preview[data-use-github-style] ol ol, .markdown-preview[data-use-github-style] ol ul { margin-top: 0px; margin-bottom: 0px; }
.markdown-preview[data-use-github-style] li > p { margin-top: 16px; }
.markdown-preview[data-use-github-style] dl { padding: 0px; }
.markdown-preview[data-use-github-style] dl dt { padding: 0px; margin-top: 16px; font-size: 1em; font-style: italic; font-weight: bold; }
.markdown-preview[data-use-github-style] dl dd { padding: 0px 16px; margin-bottom: 16px; }
.markdown-preview[data-use-github-style] blockquote { padding: 0px 15px; color: rgb(119, 119, 119); border-left: 4px solid rgb(221, 221, 221); }
.markdown-preview[data-use-github-style] blockquote > :first-child { margin-top: 0px; }
.markdown-preview[data-use-github-style] blockquote > :last-child { margin-bottom: 0px; }
.markdown-preview[data-use-github-style] table { display: block; width: 100%; overflow: auto; word-break: keep-all; }
.markdown-preview[data-use-github-style] table th { font-weight: bold; }
.markdown-preview[data-use-github-style] table th, .markdown-preview[data-use-github-style] table td { padding: 6px 13px; border: 1px solid rgb(221, 221, 221); }
.markdown-preview[data-use-github-style] table tr { border-top: 1px solid rgb(204, 204, 204); background-color: rgb(255, 255, 255); }
.markdown-preview[data-use-github-style] table tr:nth-child(2n) { background-color: rgb(248, 248, 248); }
.markdown-preview[data-use-github-style] img { max-width: 100%; box-sizing: border-box; }
.markdown-preview[data-use-github-style] .emoji { max-width: none; }
.markdown-preview[data-use-github-style] span.frame { display: block; overflow: hidden; }
.markdown-preview[data-use-github-style] span.frame > span { display: block; float: left; width: auto; padding: 7px; margin: 13px 0px 0px; overflow: hidden; border: 1px solid rgb(221, 221, 221); }
.markdown-preview[data-use-github-style] span.frame span img { display: block; float: left; }
.markdown-preview[data-use-github-style] span.frame span span { display: block; padding: 5px 0px 0px; clear: both; color: rgb(51, 51, 51); }
.markdown-preview[data-use-github-style] span.align-center { display: block; overflow: hidden; clear: both; }
.markdown-preview[data-use-github-style] span.align-center > span { display: block; margin: 13px auto 0px; overflow: hidden; text-align: center; }
.markdown-preview[data-use-github-style] span.align-center span img { margin: 0px auto; text-align: center; }
.markdown-preview[data-use-github-style] span.align-right { display: block; overflow: hidden; clear: both; }
.markdown-preview[data-use-github-style] span.align-right > span { display: block; margin: 13px 0px 0px; overflow: hidden; text-align: right; }
.markdown-preview[data-use-github-style] span.align-right span img { margin: 0px; text-align: right; }
.markdown-preview[data-use-github-style] span.float-left { display: block; float: left; margin-right: 13px; overflow: hidden; }
.markdown-preview[data-use-github-style] span.float-left span { margin: 13px 0px 0px; }
.markdown-preview[data-use-github-style] span.float-right { display: block; float: right; margin-left: 13px; overflow: hidden; }
.markdown-preview[data-use-github-style] span.float-right > span { display: block; margin: 13px auto 0px; overflow: hidden; text-align: right; }
.markdown-preview[data-use-github-style] code, .markdown-preview[data-use-github-style] tt { padding: 0.2em 0px; margin: 0px; font-size: 85%; border-radius: 3px; background-color: rgba(0, 0, 0, 0.0392157); }
.markdown-preview[data-use-github-style] code::before, .markdown-preview[data-use-github-style] tt::before, .markdown-preview[data-use-github-style] code::after, .markdown-preview[data-use-github-style] tt::after { letter-spacing: -0.2em; content: " "; }
.markdown-preview[data-use-github-style] code br, .markdown-preview[data-use-github-style] tt br { display: none; }
.markdown-preview[data-use-github-style] del code { text-decoration: inherit; }
.markdown-preview[data-use-github-style] pre > code { padding: 0px; margin: 0px; font-size: 100%; word-break: normal; white-space: pre; border: 0px; background: transparent; }
.markdown-preview[data-use-github-style] .highlight { margin-bottom: 16px; }
.markdown-preview[data-use-github-style] .highlight pre, .markdown-preview[data-use-github-style] pre { padding: 16px; overflow: auto; font-size: 85%; line-height: 1.45; border-radius: 3px; background-color: rgb(247, 247, 247); }
.markdown-preview[data-use-github-style] .highlight pre { margin-bottom: 0px; word-break: normal; }
.markdown-preview[data-use-github-style] pre { word-wrap: normal; }
.markdown-preview[data-use-github-style] pre code, .markdown-preview[data-use-github-style] pre tt { display: inline; max-width: initial; padding: 0px; margin: 0px; overflow: initial; line-height: inherit; word-wrap: normal; border: 0px; background-color: transparent; }
.markdown-preview[data-use-github-style] pre code::before, .markdown-preview[data-use-github-style] pre tt::before, .markdown-preview[data-use-github-style] pre code::after, .markdown-preview[data-use-github-style] pre tt::after { content: normal; }
.markdown-preview[data-use-github-style] kbd { display: inline-block; padding: 3px 5px; font-size: 11px; line-height: 10px; color: rgb(85, 85, 85); vertical-align: middle; border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(204, 204, 204) rgb(187, 187, 187); border-radius: 3px; box-shadow: rgb(187, 187, 187) 0px -1px 0px inset; background-color: rgb(252, 252, 252); }
.markdown-preview[data-use-github-style] a { color: rgb(51, 122, 183); }
.markdown-preview[data-use-github-style] code { color: inherit; }
.markdown-preview[data-use-github-style] pre.editor-colors { padding: 0.8em 1em; margin-bottom: 1em; font-size: 0.85em; border-radius: 4px; overflow: auto; }
.scrollbars-visible-always .markdown-preview pre.editor-colors::shadow .vertical-scrollbar, .scrollbars-visible-always .markdown-preview pre.editor-colors::shadow .horizontal-scrollbar { visibility: hidden; }
.scrollbars-visible-always .markdown-preview pre.editor-colors:hover::shadow .vertical-scrollbar, .scrollbars-visible-always .markdown-preview pre.editor-colors:hover::shadow .horizontal-scrollbar { visibility: visible; }
.markdown-preview .task-list-item-checkbox { position: absolute; margin: 0.25em 0px 0px -1.4em; }
.bracket-matcher .region {
  border-bottom: 1px dotted lime;
  position: absolute;
}

.spell-check-misspelling .region {
  border-bottom: 2px dotted rgba(255, 51, 51, 0.75);
}
.spell-check-corrections {
  width: 25em !important;
}

pre.editor-colors,
.host {
  background-color: #282c34;
  color: #abb2bf;
}
pre.editor-colors .line.cursor-line,
.host .line.cursor-line {
  background-color: rgba(153, 187, 255, 0.04);
}
pre.editor-colors .invisible,
.host .invisible {
  color: #abb2bf;
}
pre.editor-colors .cursor,
.host .cursor {
  border-left: 2px solid #528bff;
}
pre.editor-colors .selection .region,
.host .selection .region {
  background-color: #3e4451;
}
pre.editor-colors .bracket-matcher .region,
.host .bracket-matcher .region {
  border-bottom: 1px solid #528bff;
  box-sizing: border-box;
}
pre.editor-colors .invisible-character,
.host .invisible-character {
  color: rgba(171, 178, 191, 0.15);
}
pre.editor-colors .indent-guide,
.host .indent-guide {
  color: rgba(171, 178, 191, 0.15);
}
pre.editor-colors .wrap-guide,
.host .wrap-guide {
  background-color: rgba(171, 178, 191, 0.15);
}
pre.editor-colors .find-result .region.region.region,
.host .find-result .region.region.region,
pre.editor-colors .current-result .region.region.region,
.host .current-result .region.region.region {
  border-radius: 2px;
  background-color: rgba(82, 139, 255, 0.24);
  transition: border-color 0.4s;
}
pre.editor-colors .find-result .region.region.region,
.host .find-result .region.region.region {
  border: 2px solid transparent;
}
pre.editor-colors .current-result .region.region.region,
.host .current-result .region.region.region {
  border: 2px solid #528bff;
  transition-duration: .1s;
}
pre.editor-colors .gutter .line-number,
.host .gutter .line-number {
  color: #636d83;
  -webkit-font-smoothing: antialiased;
}
pre.editor-colors .gutter .line-number.cursor-line,
.host .gutter .line-number.cursor-line {
  color: #abb2bf;
  background-color: #2c313a;
}
pre.editor-colors .gutter .line-number.cursor-line-no-selection,
.host .gutter .line-number.cursor-line-no-selection {
  background-color: transparent;
}
pre.editor-colors .gutter .line-number .icon-right,
.host .gutter .line-number .icon-right {
  color: #abb2bf;
}
pre.editor-colors .gutter:not(.git-diff-icon) .line-number.git-line-removed.git-line-removed::before,
.host .gutter:not(.git-diff-icon) .line-number.git-line-removed.git-line-removed::before {
  bottom: -3px;
}
pre.editor-colors .gutter:not(.git-diff-icon) .line-number.git-line-removed::after,
.host .gutter:not(.git-diff-icon) .line-number.git-line-removed::after {
  content: "";
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 25px;
  border-bottom: 1px dotted rgba(224, 82, 82, 0.5);
  pointer-events: none;
}
pre.editor-colors .gutter .line-number.folded,
.host .gutter .line-number.folded,
pre.editor-colors .gutter .line-number:after,
.host .gutter .line-number:after,
pre.editor-colors .fold-marker:after,
.host .fold-marker:after {
  color: #abb2bf;
}
.comment {
  color: #5c6370;
  font-style: italic;
}
.comment .markup.link {
  color: #5c6370;
}
.entity.name.type {
  color: #e5c07b;
}
.entity.other.inherited-class {
  color: #98c379;
}
.keyword {
  color: #c678dd;
}
.keyword.control {
  color: #c678dd;
}
.keyword.operator {
  color: #abb2bf;
}
.keyword.other.special-method {
  color: #61afef;
}
.keyword.other.unit {
  color: #d19a66;
}
.storage {
  color: #c678dd;
}
.storage.type.annotation,
.storage.type.primitive {
  color: #c678dd;
}
.storage.modifier.package,
.storage.modifier.import {
  color: #abb2bf;
}
.constant {
  color: #d19a66;
}
.constant.variable {
  color: #d19a66;
}
.constant.character.escape {
  color: #56b6c2;
}
.constant.numeric {
  color: #d19a66;
}
.constant.other.color {
  color: #56b6c2;
}
.constant.other.symbol {
  color: #56b6c2;
}
.variable {
  color: #e06c75;
}
.variable.interpolation {
  color: #be5046;
}
.variable.parameter {
  color: #abb2bf;
}
.string {
  color: #98c379;
}
.string.regexp {
  color: #56b6c2;
}
.string.regexp .source.ruby.embedded {
  color: #e5c07b;
}
.string.other.link {
  color: #e06c75;
}
.punctuation.definition.comment {
  color: #5c6370;
}
.punctuation.definition.method-parameters,
.punctuation.definition.function-parameters,
.punctuation.definition.parameters,
.punctuation.definition.separator,
.punctuation.definition.seperator,
.punctuation.definition.array {
  color: #abb2bf;
}
.punctuation.definition.heading,
.punctuation.definition.identity {
  color: #61afef;
}
.punctuation.definition.bold {
  color: #e5c07b;
  font-weight: bold;
}
.punctuation.definition.italic {
  color: #c678dd;
  font-style: italic;
}
.punctuation.section.embedded {
  color: #be5046;
}
.punctuation.section.method,
.punctuation.section.class,
.punctuation.section.inner-class {
  color: #abb2bf;
}
.support.class {
  color: #e5c07b;
}
.support.type {
  color: #56b6c2;
}
.support.function {
  color: #56b6c2;
}
.support.function.any-method {
  color: #61afef;
}
.entity.name.function {
  color: #61afef;
}
.entity.name.class,
.entity.name.type.class {
  color: #e5c07b;
}
.entity.name.section {
  color: #61afef;
}
.entity.name.tag {
  color: #e06c75;
}
.entity.other.attribute-name {
  color: #d19a66;
}
.entity.other.attribute-name.id {
  color: #61afef;
}
.meta.class {
  color: #e5c07b;
}
.meta.class.body {
  color: #abb2bf;
}
.meta.method-call,
.meta.method {
  color: #abb2bf;
}
.meta.definition.variable {
  color: #e06c75;
}
.meta.link {
  color: #d19a66;
}
.meta.require {
  color: #61afef;
}
.meta.selector {
  color: #c678dd;
}
.meta.separator {
  background-color: #373b41;
  color: #abb2bf;
}
.meta.tag {
  color: #abb2bf;
}
.underline {
  text-decoration: underline;
}
.none {
  color: #abb2bf;
}
.invalid.deprecated {
  color: #523d14 !important;
  background-color: #e0c285 !important;
}
.invalid.illegal {
  color: #ffffff !important;
  background-color: #e05252 !important;
}
.markup.bold {
  color: #d19a66;
  font-weight: bold;
}
.markup.changed {
  color: #c678dd;
}
.markup.deleted {
  color: #e06c75;
}
.markup.italic {
  color: #c678dd;
  font-style: italic;
}
.markup.heading {
  color: #e06c75;
}
.markup.heading .punctuation.definition.heading {
  color: #61afef;
}
.markup.link {
  color: #c678dd;
}
.markup.inserted {
  color: #98c379;
}
.markup.quote {
  color: #d19a66;
}
.markup.raw {
  color: #98c379;
}
.source.c .keyword.operator {
  color: #c678dd;
}
.source.cpp .keyword.operator {
  color: #c678dd;
}
.source.cs .keyword.operator {
  color: #c678dd;
}
.source.css .property-name,
.source.css .property-value {
  color: #828997;
}
.source.css .property-name.support,
.source.css .property-value.support {
  color: #abb2bf;
}
.source.gfm .markup {
  -webkit-font-smoothing: auto;
}
.source.gfm .link .entity {
  color: #61afef;
}
.source.go .storage.type.string {
  color: #c678dd;
}
.source.ini .keyword.other.definition.ini {
  color: #e06c75;
}
.source.java .storage.modifier.import {
  color: #e5c07b;
}
.source.java .storage.type {
  color: #e5c07b;
}
.source.java .keyword.operator.instanceof {
  color: #c678dd;
}
.source.java-properties .meta.key-pair {
  color: #e06c75;
}
.source.java-properties .meta.key-pair > .punctuation {
  color: #abb2bf;
}
.source.js .keyword.operator {
  color: #56b6c2;
}
.source.js .keyword.operator.delete,
.source.js .keyword.operator.in,
.source.js .keyword.operator.of,
.source.js .keyword.operator.instanceof,
.source.js .keyword.operator.new,
.source.js .keyword.operator.typeof,
.source.js .keyword.operator.void {
  color: #c678dd;
}
.source.json .meta.structure.dictionary.json > .string.quoted.json {
  color: #e06c75;
}
.source.json .meta.structure.dictionary.json > .string.quoted.json > .punctuation.string {
  color: #e06c75;
}
.source.json .meta.structure.dictionary.json > .value.json > .string.quoted.json,
.source.json .meta.structure.array.json > .value.json > .string.quoted.json,
.source.json .meta.structure.dictionary.json > .value.json > .string.quoted.json > .punctuation,
.source.json .meta.structure.array.json > .value.json > .string.quoted.json > .punctuation {
  color: #98c379;
}
.source.json .meta.structure.dictionary.json > .constant.language.json,
.source.json .meta.structure.array.json > .constant.language.json {
  color: #56b6c2;
}
.source.ruby .constant.other.symbol > .punctuation {
  color: inherit;
}
.source.python .keyword.operator.logical.python {
  color: #c678dd;
}
.source.python .variable.parameter {
  color: #d19a66;
}
</style>
  </head>
  <body class='markdown-preview' data-use-github-style><h1 id="begriffsbestimmung">Begriffsbestimmung</h1>
<p>In den folgenden Abschnitten werden die Begriffe „CAP-Theorem“ und „verteilte Systeme“ erläutert. </p>
<h2 id="cap">CAP</h2>
<p>Das Akronym „CAP“ bezeichnet drei englischsprachige Eigenschaften. Das C steht für die „Consistency“ (Konsistenz), das A für „Availability“ (Verfügbarkeit) und das P für „Partition Tolerance“ (Ausfalltoleranz).  </p>
<p>Die „Consistency“ bezeichnet die Konsistenz der gespeicherten Daten. Damit wird in verteilten Systemen mit replizierten Daten gewährleistet, dass eine Aktualisierung aller Replikate des manipulierten Datensatzes, nachdem die Transaktion abgeschlossen ist, stattfindet [6]. Demnach erfolgt eine Operation, die sich aus vielen Teiloperationen zusammensetzt, entweder ganz oder gar nicht. Die ausgelösten Veränderungen sind danach für alle anschließenden Operationen vollständig oder gar nicht sichtbar. Alle Benutzer sehen immer die gleichen Daten [5].  </p>
<p>Bei der „Availability“ muss jede Anfrage an einen non-failing Knoten beantwortet werden [7]. Ein Knotenausfall beeinflusst nicht die Verfügbarkeit der Daten des Gesamtsystems. Die Clients haben stets einen Lese- und Schreibzugang [5].</p>
<p>Die „Partition tolerance“ bezeichnet das System als partitionstolerant. Dabei funktioniert das System trotz einem Nachrichtenverlust zwischen zwei Teilsystemen. Es können beide Teile mäßig weiterarbeiten [5].  </p>
<p>Die Erkenntnisse des CAP-Theorems sind in verteilten Datenbanksystemen von relevanter Bedeutung. In verteilen Systemen sind die Anforderungen nach der Konsistenz, Verfügbarkeit, Ausfalltoleranz nicht gleichzeitig erreichbar und nur maximal zwei von dreien sind erfüllbar [6]. Zum besseren Verständnis werden im darauffolgenden die verteilten Datensysteme beschrieben. </p>
<h2 id="verteilte-datenbanksysteme">Verteilte Datenbanksysteme</h2>
<p>Bei verteilten Datenbanksystemen erfolgt die Ausführung auf verschiedenen Rechnern. Die Speicherung der Daten findet somit verteilt auf mehreren Rechnern statt [6].  </p>
<p>Es gibt keine zentrale Datenbank, da jeder mit dem Netz verbundene Computer über eine lokale Datenbank verfügt. Von jedem Computer aus kann somit eine Datenabfrage oder Datenverarbeitung erfolgen. Bei einer verteilten Datenbank muss das System in der Lage sein, lokale Transaktionen und mindestens eine globale Transaktion auszuführen. Eine lokale Transaktion braucht nur die Datenbank des jeweiligen Computers. Bei einer globalen Transaktion wird außer der Datenbank des jeweiligen Computers mindestens noch eine weitere benötigt. Bei dem verteilten Datenbanksystem besteht eine Autonomie der verschiedenen Rechner und ihrer jeweiligen lokalen Datenbank. Bei einem Ausfall eines Rechners liegen die anderen Rechner mit ihrer Datenbank vor. Des Weiteren stehen die verschiedenen lokalen Rechner bei einem Netzwerkausfall zur Verfügung [4]. </p>
<h2 id="systeme-und-prinzipien">Systeme und Prinzipien</h2>
<p>Zunächst erfolgt nun in diesem Kapitel eine Darstellung der relationalen Datenbankmanagementsysteme und der NoSQL-Systeme, bevor dann die dabei jeweils verwendeten Prinzipien unterschieden werden. Hierbei handelt es sich um das ACID-Prinzip und das BASE-Prinzip.  </p>
<h3 id="relationale-datenbankmanagementsysteme">Relationale Datenbankmanagementsysteme</h3>
<p>Ein relationales Datenbankmanagementsystem ist ein System von relationalen Datenbanken, welches Daten in Verhältnisse und Beziehungen zueinander stellt. Dabei handelt es sich um eine sehr flexible Speicherung der Daten. Diese werden in Tabellen mit einfacher Struktur gespeichert und können in verschiedenen Gruppierungen miteinander kombiniert werden. Komplexe Datenobjekte werden hierbei in einfache Datenobjekte zerteilt und in einer Tabelle in Spalten und Zeilen abgelegt. Dabei wird der Zugriff  über Beziehungen untereinander generiert. Mit Hilfe der einfach strukturierten Tabellen können schematische Änderungen auf einfache Art und Weise vollbracht werden. Dafür wird im kommerziellen Bereich meist SQL verwendet. Durch die Implementierung von RDBMS-Systeme ist es möglich aus großen Datensätzen große Transaktionen in kurzer Zeit durchzuführen (Bsp. Online Transaction Processing), sowie nach bestimmten Kriterien der Selektion Informationen abzurufen (Bsp. Decision Support System). Zu den geläufigsten Herstellern der DBMS zählen Oracle, IBM und DB2. Die SQL-Datenbanken MySQL und PostgreSQL gehören mit zu den bekanntesten ihrer Art, im PC-Bereich sind es Access, Paradox und Focpro [8].  </p>
<p>Für die klassischen RDBMS, wie DB2 oder Oracle gilt es vor allem, die Konsistenz zu gewährleisten. Die Grundlage dieser Systeme bildet das sogenannte „ACID-Prinzip“, was an späterer Stelle detaillierter erläutert wird. Dabei sind die Zugriffe immer atomar, konsistent, isoliert und dauerhaft. Ein RDBMS gehört hinsichtlich des CAP Theorems zu der Kategorie „CA“, was bedeutet, dass Konsistenz und Verfügbarkeit bei diesem System meist sehr hoch ist. Die Verfügbarkeit sinkt jedoch sobald ein Datenbank-Cluster mit Replikation zwischen den Knoten eingesetzt wird. Denn in diesem Fall dauert die konsistente Transaktion länger als zuvor. Die Dauer der Transaktion verlängert sich immer weiter, je mehr Knoten vorhanden sind [9].  </p>
<h3 id="nosql-systeme">NoSQL Systeme</h3>
<p>Neben den relationalen existieren mittlerweile auch schemafreie Datenbanken. Diese werden auch als NoSQL-Datenbanken bezeichnet, wobei NoSQL für „not only Structured Query Language“ steht. Da der Aufwand zur Anpassung der Daten in RDBMS enorm hoch ist, sollte dies nur dann zum Einsatz kommen, wenn es dem relationalen Gedanken entspricht. In Web 2.0 Applikationen findet sich ein dynamisch steigendes Datenvolumen, das flexible Datenbanken notwendig werden lässt [5].  </p>
<p>In weiteren Quellen werden NoSQL-Datenbanken ebenfalls beschrieben als ein nicht relationales Datenmodell, das sich für Systeme mit verteilter und horizontaler Skalierbarkeit eignet und das schemafrei ist oder nur schwächere Schemarestriktionen besitzt. Ebenso sollte eine NoSQL-Datenbank eine einfache Datenreplikation zur Unterstützung der verteilten Architektur, sowie eine einfache API (application programming interface; Programmierschnittstelle) ermöglichen. Kennzeichnend für eine NoSQL-Datenbank ist zudem das Nichtvorhandensein des ACID als Konsistenzmodell, da deren Einhaltung die Datenhaltung verlangsamt [10].  </p>
<h3 id="acid-prinzip">ACID-Prinzip</h3>
<p>Da im Rahmen der Web 2.0 Applikationen ein dynamisch steigendes Datenvolumen notwendig ist, müssen hier flexible Datenbanken zum Einsatz kommen. Diese sind dann im Stande die Speicherung der großen Datenmengen auf verschiedenster Hardware durchzuführen. Eine relationale Datenbank mit kompletter Unterstützung des ACID-Prinzips eignet sich nicht für diesen Fall. Weitere Forderungen wie Ausfallsicherheit und leichte Reproduzierbarkeit sind ebenfalls allgegenwärtig. Durch diese Restriktionen entstehen die schemafreien Datenmodelle, die das ACID jedoch vernachlässigt [5]. </p>
<p>Denn das ACID-Prinzip steht für Atomarität bzw. Ununterbrechbarkeit (Atomicity), Konsistenz bzw. Integritätserhaltung (Consistency), Isolation bzw. isolierter Ablauf (Isolation) und Dauerhaftigkeit bzw. Persistenz der Daten (Durability) und stellt wichtige Eigenschaften für Datenbanksysteme und deren Zuverlässigkeit dar. Anhand dieser vier Kriterien kann ein DBMS beurteilt werden [5, 11].   </p>
<p>Der Begriff Atomarität beschreibt das „Alles oder Nichts-Prinzip“. Alle zur Transaktion gehörenden Datenbankoperationen werden entweder ganz oder gar nicht ausgeführt. Die einzelnen Anweisungen der Transaktionen werden dabei stets nacheinander ausgeführt und über einen Commit dann erst für gültig erklärt, wenn sie erfolgreich abgeschlossen wurden. Ist dies nicht der Fall, werden die kompletten betreffenden Transaktionen zurück abgewickelt und die Konsistenz wird wiederhergestellt [11].  </p>
<p>Des Weiteren muss die Konsistenz der Datenbank gewähreistet sein. Konsistenz bedeutet, dass eine Sequenz von Daten-Operationen einen Zustand hinterlässt, der konsistent ist. Dies gilt jedoch nur, wenn die Datenbank zuvor bereits konsistent war. Bei RDBMS wie zum Beispiel Oracle oder DB2 wird unter dem Begriff Konsistenz die Integrität der Daten verstanden, welche dadurch definiert wird, dass Integritätsbedingungen aufgestellt werden. Zu diesen zählen Bereichsintegrität, Entitätsintegrität, referentielle Integrität und logische Konsistenz. Wenn in einem System keine Konsistenzgarantien abgegeben werden spricht man von schwacher Konsistenz oder von der sogenannten eventual Consistency oder auch BASE. Dieses Prinzip wird an späterer Stelle genauer erläutert. BASE nimmt in Kauf, dass sich die Datenbankkonsistenz im fließenden Status befindet und stellt somit die Alternative zu ACID dar, welches Konsistenz immer am Ende jeder Operation erwartet. Eventual Consistency steht also deshalb dafür, dass alle Änderungen auf allen Maschinen stattfinden, wenn viel Zeit verfügbar ist, ohne dabei Schreibzugriffe zu erwarten oder Fehler hervorzurufen. Des Weiteren existieren Zwischenstufen der Konsistenz, die zwischen der eventual und strict Consistency liegen. Dabei handelt es sich um client-centric Consistency und data-centric Consistency. Client-centric bedeutet aus Sicht des Clients und umfasst die Monotonic Read Consistency, Monotonic Write Consistency, Read Your Writes Consistency und Write Follows Reads Consistency. Data-centric meint zudem die interne Konsistenz. Hierzu gehören die Causal Consistency, Sequential Consistency und Linearizability [11].   </p>
<p>Des Weiteren gehört zum ACID-Prinzip das Kriterium der Isolation. Das bedeutet, dass alle Transaktionen isoliert, also getrennt voneinander, ablaufen und parallel laufende Transaktionen sich nicht gegenseitig beeinflussen können, was durch Serialisierbarkeit umsetzbar ist. Isolation ist das am schwersten umzusetzende Kriterium. Problematisch ist es deshalb, weil es zu sogenannten Lost Updates führen kann (Überschreibung und dadurch Verlust von Änderungen). Weitere Probleme sind das Dirty Read (Lesen von Daten von noch nicht abgeschlossener Transaktion, die verändert wurden), Non-Repeatable Read (Unterschiedliche Ergebnisse bei Wiederholung von Lesevorgängen) und Phantom Read (Änderung der Datensätze führt dazu, dass Suchkriterien auf unterschiedliche Datensätze zutreffen). Dafür sind im ANSI/ISO SQL-Standard die Transaktionsisolationsebenen Read Uncommitted, Read Committed, Repeatable Read und Serializable vorgesehen [11].  </p>
<p>Zuletzt beschreibt das Kriterium der Dauerhaftigkeit, dass nach erfolgreichem Abschluss von Transaktionen eine Speicherung der Daten dauerhaft gewährleistet ist, auch wenn es zu Systemfehlern kommen sollte. Es darf hierbei zu keinerlei Datenverlust im Hauptspeicher kommen. Dem entgegenwirken kann man durch die Implementierung eines Transaktionslogs im persistenten Speicher. Dieser lässt zu, dass die fehlenden Operationen nach einem Ausfall wieder reproduziert werden [11].  </p>
<h3 id="base-prinzip">BASE-Prinzip</h3>
<p>Das Pendant zum ACID-Prinzip der relationalen Datenbanken stellt das BASE-Prinzip dar, welches oftmals bei NoSQL-Datenbanken herangezogen wird. Es umfasst die Kriterien Basically Available (grundsätzliche Verfügbarkeit), Soft State (periodische Speicherung der Datenmenge) und Eventual Consistency (Konsistenz wird irgendwann erreicht). Im Rahmen der NoSQL-Datenbanken wird eine hohe Performance sowie hohe Verfügbarkeit ermöglicht, allerdings nicht die ständige Konsistenz. Dies trifft zum Beispiel auf soziale Netzwerke zu. Hierbei  wird die Performance und Verfugbarkeit benötigt, Updates können hingegen auch inkonsistent stattfinden. Bei Finanzapplikationen hingegen zählt die Konsistenz als wichtigstes Feature. Systeme, die auf dem BASE-Prinzip beruhen, sind also in diesem Fall nicht geeignet. Es zeigt sich damit, dass das benötigte System je nach Anwendung unterschiedlich gewählt werden muss. Die meisten NoSQL-Datenbanken sind nicht vollkommen einem der beiden Prinzipien (BASE oder ACID) zuzuordnen. Viele dieser Systeme bieten die Option eine benutzergerechte Anpassung von Verfügbarkeit und Konsistenz zu tätigen, indem die für den Schreibprozess verantwortliche Knotenanzahl begrenzt wird. Dadurch kann der Client entscheiden, welches der beiden Schemen er für seine Daten verwenden möchte [5, 9]. </p></body>
</html>
