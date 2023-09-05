#!/bin/zsh

# Navigate to the directory containing images
cd /Users/bryce/releaf.static/releaf.site/sites/default/files/img

# Optimize JPEG images
for img in *.jpg *.jpeg; do
  jpegoptim --max=80 $img
done

# Optimize PNG images
for img in *.png; do
  optipng -o7 $img
done
