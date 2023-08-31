20 16 * * * /usr/local/bin/httrack "https://releaf.site" -O "/Users/bryce/releaf.static" "+*.releaf.site/*.html" "-*.png" "-*.jpg" "-*.jpeg" "-*.gif" "--update" >> /Users/bryce/releaf-mirror-logfile.log 2>&1

