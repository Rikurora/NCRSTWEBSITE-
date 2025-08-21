#!/bin/bash

echo "🚀 Starting NCRST Website Deployment..."

# Clean up any existing build artifacts
echo "🧹 Cleaning up previous build artifacts..."
rm -rf index.html assets/ .nojekyll

# Build the website
echo "🔨 Building website..."
pnpm build:website

# Verify build output
if [ ! -f "index.html" ]; then
    echo "❌ Build failed - index.html not found"
    exit 1
fi

echo "✅ Build completed successfully!"

# Add cache busting comments
echo "📝 Adding cache busting..."
echo "<!-- Build timestamp: $(date) -->" >> index.html
echo "<!-- Commit: $(git rev-parse HEAD) -->" >> index.html
echo "<!-- Force refresh: $(uuidgen) -->" >> index.html

# Stage and commit changes
echo "📦 Staging changes..."
git add .

echo "💾 Committing changes..."
git commit -m "Deploy website - $(date) [$(git rev-parse --short HEAD)]"

echo "🚀 Pushing to GitHub..."
git push origin TheCodeFather

echo "✅ Deployment initiated!"
echo ""
echo "📋 Next steps:"
echo "1. Check GitHub Actions: https://github.com/[your-username]/NCRSTWEBSITE-/actions"
echo "2. Wait 2-5 minutes for deployment to complete"
echo "3. Visit your site: https://[your-username].github.io/NCRSTWEBSITE-/"
echo ""
echo "🔄 If you still see old content:"
echo "   - Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R)"
echo "   - Clear browser cache"
echo "   - Try incognito/private browsing mode"
echo "   - Wait 10-15 minutes for GitHub Pages to fully update"
