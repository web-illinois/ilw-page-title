# ilw-page-title

Links: **[ilw-page-title in Builder](https://builder3.toolkit.illinois.edu/component/ilw-page-title/index.html)** | 
[Illinois Web Theme](https://webtheme.illinois.edu/) | 
[Toolkit Development](https://github.com/web-illinois/toolkit-management)

## Overview

The Illinois theme component ilw-page-title provides a background image and gradient overlay options for the text of the title of a particular web page.

The page title should be added in an ```<h1>``` tag. The background image can be added using the slot "background". The image should be added as an ```<img>``` tag.

The default color theme is white text on a dark blue background. Other themes available are orange, blue, and white.

For a top-of-page component with more visual impact, see il-hero.

## Code Examples

```html
<ilw-page-title>
  <img src="background.png" alt="" slot="background">
  <h1>Graduate Programs</h1>
</ilw-page-title>
```
## Upgrade Process
* Rename ```il-page-title``` to ```ilw-page-title```.

## External References
https://www.nngroup.com/articles/text-over-images/

https://www.smashingmagazine.com/2023/08/designing-accessible-text-over-images-part1/
