httrack "https://releaf.site" -O "/Users/bryce/releaf.static" "+*.releaf.site/*.html" -N '%n.%t' "--update" -v 2>> /Users/bryce/releaf-mirror-error-logfile.log | tee -a /Users/bryce/releaf-mirror-logfile.log

