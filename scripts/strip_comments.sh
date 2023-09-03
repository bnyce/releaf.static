for file in /Users/bryce/releaf.static/releaf.site/*.html; do
  sed -i '' 's/ style="[^"]*"//g' "$file"
done

