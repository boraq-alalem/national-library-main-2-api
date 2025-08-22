#!/bin/bash
# Script to apply Nginx security headers on Hostinger VPS

echo "Setting up Nginx security headers..."

# Backup current config
sudo cp /etc/nginx/sites-available/c-library.org /etc/nginx/sites-available/c-library.org.backup

# Add security headers to Nginx config
sudo tee -a /etc/nginx/sites-available/c-library.org > /dev/null << 'EOF'

# Security Headers
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https:;" always;
add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "DENY" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;

EOF

# Test Nginx config
sudo nginx -t

# Reload Nginx if config is valid
if [ $? -eq 0 ]; then
    sudo systemctl reload nginx
    echo "✅ Nginx headers applied successfully!"
else
    echo "❌ Nginx config error. Restoring backup..."
    sudo cp /etc/nginx/sites-available/c-library.org.backup /etc/nginx/sites-available/c-library.org
fi