find /Users/bryce/releaf.static/releaf.site -maxdepth 3 -name "*.html" | xargs -I {} sed -i '' '/<!--/,/-->/d' {}

