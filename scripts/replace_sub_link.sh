find /Users/bryce/releaf.static/releaf.site -maxdepth 4 -name "*.html" | xargs -I {} sed -i '' -e 's|href="rep/tradescantia-pallida.html"|href="https://releaf.site/rep/tradescantia-pallida"|g' {}


