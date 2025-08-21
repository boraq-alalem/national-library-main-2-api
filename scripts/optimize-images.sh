#!/bin/bash
# Image Optimization Script
# This script will optimize all PNG and JPG images in the public/assets and public/v1_assets folders using the 'oxipng' and 'jpegoptim' tools.
# Usage: bash optimize-images.sh

set -e

# Check if required tools are available
if ! command -v oxipng &> /dev/null; then
    echo "Error: oxipng is not installed. Please install it first."
    exit 1
fi

if ! command -v jpegoptim &> /dev/null; then
    echo "Error: jpegoptim is not installed. Please install it first."
    exit 1
fi

# Check and optimize images in public/assets
if [ -d "./public/assets" ]; then
    find ./public/assets -type f -iname '*.png' -exec oxipng -o 4 --strip safe {} + 2>/dev/null || true
    find ./public/assets -type f -iname '*.jpg' -exec jpegoptim --strip-all --max=85 {} + 2>/dev/null || true
else
    echo "Warning: ./public/assets directory not found"
fi

# Check and optimize images in public/v1_assets
if [ -d "./public/v1_assets" ]; then
    find ./public/v1_assets -type f -iname '*.png' -exec oxipng -o 4 --strip safe {} + 2>/dev/null || true
    find ./public/v1_assets -type f -iname '*.jpg' -exec jpegoptim --strip-all --max=85 {} + 2>/dev/null || true
else
    echo "Warning: ./public/v1_assets directory not found"
fi

echo "Image optimization complete!"
