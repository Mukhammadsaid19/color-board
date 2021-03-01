# Color Fiesta
This app is my project about color theory. Throughout the development, I will be doing interesting things with colors - tints, shades, tones, luminance factors, grayscale etc.

Up to this moment, I have done only tints part.

##Tints

I have used this basic function for making the tint of a color, where `valueComponent` is one of the three compononents of RGB color scheme (red, blue, or green):

```js
valueComponent = value + factor * (255 - value)
```

