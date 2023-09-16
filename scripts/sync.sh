bash /Users/bryce/releaf.git/scripts/httrack.sh
bash /Users/bryce/releaf.git/scripts/strip_comments.sh
bash /Users/bryce/releaf.git/scripts/replace_sub_link.sh
bash /Users/bryce/releaf.git/scripts/strip_link.sh
bash /Users/bryce/releaf.git/scripts/rsync.sh

cd /Users/bryce/releaf.git
git add .
git commit -m "updated: $(date '+%b%d-%I:%M%p')"

ssh-add ~/.ssh/pi_rsa
git push all main

