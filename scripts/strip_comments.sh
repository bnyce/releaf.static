find /Users/bryce/releaf.static/releaf.site -maxdepth 2 -name "*.html" | xargs -I {} sed -i '' '/<!--/,/-->/d' {}

