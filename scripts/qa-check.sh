#!/bin/bash
# Pre-deploy QA Check Script
# Blocks push if any check fails

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

ERRORS=0

echo "🔍 Running Pre-Deploy QA Checks..."
echo "=================================="

# 1. Build check
echo -e "\n${YELLOW}[1/6] Build check...${NC}"
if npm run build 2>&1 | tail -3 | grep -q "Complete!"; then
  echo -e "${GREEN}✅ Build succeeded${NC}"
else
  echo -e "${RED}❌ Build failed${NC}"
  ERRORS=$((ERRORS + 1))
fi

# 2. Hardcoded URLs check
echo -e "\n${YELLOW}[2/6] Checking for hardcoded URLs (missing BASE_URL)...${NC}"
HARDCODED=$(grep -r 'href="/' src/ --include="*.astro" --include="*.tsx" --include="*.ts" | grep -v 'BASE_URL' | grep -v 'https://' | grep -v 'node_modules' || true)
if [ -z "$HARDCODED" ]; then
  echo -e "${GREEN}✅ No hardcoded URLs found${NC}"
else
  echo -e "${RED}❌ Found hardcoded URLs:${NC}"
  echo "$HARDCODED"
  ERRORS=$((ERRORS + 1))
fi

# 3. Check all pages generated
echo -e "\n${YELLOW}[3/6] Checking generated pages...${NC}"
PAGE_COUNT=$(find dist -name "index.html" | wc -l)
if [ "$PAGE_COUNT" -gt 0 ]; then
  echo -e "${GREEN}✅ $PAGE_COUNT pages generated${NC}"
else
  echo -e "${RED}❌ No pages found in dist/${NC}"
  ERRORS=$((ERRORS + 1))
fi

# 4. Check all images exist
echo -e "\n${YELLOW}[4/6] Checking images in dist...${NC}"
IMG_COUNT=$(find dist -name "*.webp" -o -name "*.jpg" -o -name "*.png" -o -name "*.svg" | wc -l)
if [ "$IMG_COUNT" -gt 0 ]; then
  echo -e "${GREEN}✅ $IMG_COUNT images found${NC}"
else
  echo -e "${RED}❌ No images found in dist/${NC}"
  ERRORS=$((ERRORS + 1))
fi

# 5. Check for console errors in source
echo -e "\n${YELLOW}[5/6] Checking for debug artifacts...${NC}"
DEBUG=$(grep -r 'console\.log\|console\.error\|debugger' src/ --include="*.astro" --include="*.tsx" --include="*.ts" | grep -v 'node_modules' || true)
if [ -z "$DEBUG" ]; then
  echo -e "${GREEN}✅ No debug artifacts${NC}"
else
  echo -e "${YELLOW}⚠️  Found debug statements (review):${NC}"
  echo "$DEBUG"
fi

# 6. Check mobile menu exists and has JS
echo -e "\n${YELLOW}[6/6] Checking mobile menu implementation...${NC}"
if grep -q 'menu-toggle\|menuToggle' src/components/Header.astro 2>/dev/null; then
  if grep -q 'addEventListener\|onclick' src/components/Header.astro 2>/dev/null; then
    echo -e "${GREEN}✅ Mobile menu has toggle JS${NC}"
  else
    echo -e "${RED}❌ Mobile menu button exists but NO toggle JS${NC}"
    ERRORS=$((ERRORS + 1))
  fi
else
  echo -e "${YELLOW}⚠️  No mobile menu found (check if needed)${NC}"
fi

# Final result
echo -e "\n=================================="
if [ "$ERRORS" -gt 0 ]; then
  echo -e "${RED}❌ QA FAILED — $ERRORS error(s) found. Fix before deploying!${NC}"
  exit 1
else
  echo -e "${GREEN}✅ ALL AUTOMATED CHECKS PASSED${NC}"
  echo -e "${YELLOW}⚠️  Remember: Visual QA still required before deploy!${NC}"
  exit 0
fi
