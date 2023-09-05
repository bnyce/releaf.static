find /Users/bryce/releaf.static/releaf.site -maxdepth 4 -name "*.html" | xargs -I {} sed -i '' '/<a href="#main-content" class="visually-hidden focusable">/,/<\/a>/d' {}
