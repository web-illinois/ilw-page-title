# ilw-page-title

Links: **[ilw-page-title in Builder](https://builder3.toolkit.illinois.edu/component/ilw-page-title/index.html)** | 
[Illinois Web Theme](https://webtheme.illinois.edu/) | 
[Toolkit Development](https://github.com/web-illinois/toolkit-management)

## Overview

The Illinois theme component ilw-page-title provides a background image and gradient overlay options for the text of the title of a particular web page. It is designed to accomodate the page breadcrumbs.

For a top-of-page component with more visual impact, see il-hero.

## Code Examples

```html
<ilw-page-title>
  <h1>Graduate Programs</h1>
</ilw-page-title>
```
Adding breadcrumbs

```html
<ilw-page-title>
    <ilw-breadcrumbs>
        <a href="/">Home</a>
        <a href="/academics">Academics</a>
        <a href="/academics/undergraduate">Undergraduate programs</a>
        <span>Degree programs</span>
    </ilw-breadcrumbs>
    <h1>Graduate Programs</h1>
</ilw-page-title>
```
Adding a background image

```html
<ilw-page-title>
  <img src="background.png" alt="" slot="background">
  <h1>Graduate Programs</h1>
</ilw-page-title>
```

## Accessibility Notes and Use

Consider accessibility, both for building the component and for its use:

- Is there sufficient color contrast?
- Can the component be fully understood without colors?
- Does the component need alt text or ARIA roles?
- Can the component be navigated with a keyboard? Is the tab order correct?
- Are focusable elements interactive, and interactive elements focusable?
- Are form fields, figures, fieldsets and other interactive elements labelled?

## External References
