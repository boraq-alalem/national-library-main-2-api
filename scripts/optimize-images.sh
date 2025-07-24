# Image Optimization Script
# This script will optimize all PNG and JPG images in the public/assets and public/v1_assets folders using the 'oxipng' and 'jpegoptim' tools.
# Usage: bash optimize-images.sh

find ./public/assets -type f -iname '*.png' -exec oxipng -o 4 --strip safe {} +
find ./public/assets -type f -iname '*.jpg' -exec jpegoptim --strip-all --max=85 {} +
find ./public/v1_assets -type f -iname '*.png' -exec oxipng -o 4 --strip safe {} +
find ./public/v1_assets -type f -iname '*.jpg' -exec jpegoptim --strip-all --max=85 {} +
