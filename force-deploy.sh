#!/bin/bash

# Force GitHub Pages deployment with cache busting
echo "🚀 Forcing GitHub Pages deployment..."

# Add a timestamp to force cache refresh
echo "<!-- Build timestamp: $(date) -->" >> index.html
echo "<!-- Force refresh: $(uuidgen) -->" >> index.html

# Commit and push the changes
git add .
git commit -m "Force cache refresh - $(date)"
git push origin TheCodeFather

echo "✅ Changes pushed! Check GitHub Actions for deployment status."
echo "📝 Note: It may take a few minutes for changes to appear on the live site."
echo "🔄 If you still see old content, try:"
echo "   1. Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R)"
echo "   2. Clear browser cache"
echo "   3. Wait 5-10 minutes for GitHub Pages to update"
