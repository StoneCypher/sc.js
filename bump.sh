
cd /c/projects/sc.js
echo $1
echo "  git adding"
git add . -A
git commit -m "$1"
echo "  npm version patching"
npm version patch -m "$1"
echo "  git re-adding"
git add . -A
echo "  git committing"
git commit --no-edit --amend