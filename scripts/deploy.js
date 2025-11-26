const { execSync } = require('child_process');

const BUCKET_NAME = 'david-barrera.com';
const DISTRIBUTION_ID = 'E2YLXAUIR4LTGE'; 

function deploy() {
  try {
    console.log('🗑️ Cleaning old files...');
    execSync(`aws s3 rm s3://${BUCKET_NAME} --recursive`, { stdio: 'inherit' });
    
    console.log('📦 Uploading new files...');
    execSync(`aws s3 sync build/ s3://${BUCKET_NAME}`, { stdio: 'inherit' });
    
    console.log('✅ Deployment completed!');
  } catch (error) {
    console.error('❌ Deployment failed:', error.message);
    process.exit(1);
  }
}

deploy();