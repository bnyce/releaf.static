
#httrack "https://releaf.site" -O "/Users/bryce/releaf.static" "+*.releaf.site/*.html" "+*.png" "+*.jpg" "+*.jpeg" "+*.gif" "--update" -v 2>> /Users/bryce/releaf-mirror-error-logfile.log | tee -a /Users/bryce/releaf-mirror-logfile.log
httrack "https://releaf.site" -O "/Users/bryce/releaf.static" "+*.releaf.site/*.html" "+*.png" "+*.jpg" "+*.jpeg" "+*.gif" -v 2>> /Users/bryce/releaf-mirror-error-logfile.log | tee -a /Users/bryce/releaf-mirror-logfile.log

