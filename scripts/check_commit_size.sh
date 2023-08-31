# Get the hash of the most recent commit
latest_commit=$(git rev-parse HEAD)

# Get the hash of the second most recent commit
previous_commit=$(git rev-parse HEAD~1)

# Generate the patch file for changes between the two commits
git diff $previous_commit $latest_commit > changes.patch

# Measure the size of the patch file
du -h changes.patch

