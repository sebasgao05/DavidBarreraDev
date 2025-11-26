@echo off
echo 🏗️ Building application...
call npm run build

echo 📦 Uploading to S3...
aws s3 sync build/ s3://david-barrera.com --delete

echo 🔄 Invalidating CloudFront cache...
aws cloudfront create-invalidation --distribution-id E1234567890123 --paths "/*"

echo ✅ Deployment completed!
pause