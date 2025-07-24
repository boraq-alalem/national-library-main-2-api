#!/bin/bash

# Image optimization script
echo "Starting image optimization..."

# Create optimized versions of images
find public -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" | while read img; do
    # Get file info
    filename=$(basename "$img")
    dirname=$(dirname "$img")
    name="${filename%.*}"
    ext="${filename##*.}"
    
    # Skip if WebP already exists
    if [ ! -f "$dirname/$name.webp" ]; then
        echo "Converting $img to WebP..."
        # Convert to WebP with quality 85
        if command -v cwebp &> /dev/null; then
            cwebp -q 85 "$img" -o "$dirname/$name.webp"
        else
            echo "cwebp not found, skipping WebP conversion"
        fi
    fi
    
    # Optimize original image
    if command -v jpegoptim &> /dev/null && [[ "$ext" == "jpg" || "$ext" == "jpeg" ]]; then
        jpegoptim --max=85 --strip-all "$img"
    fi
    
    if command -v optipng &> /dev/null && [[ "$ext" == "png" ]]; then
        optipng -o2 "$img"
    fi
done

echo "Image optimization completed!"