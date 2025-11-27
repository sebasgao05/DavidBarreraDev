const { execSync } = require('child_process');

const bucketName = process.env.DEPLOY_BUCKET_NAME;
const distributionId = process.env.DEPLOY_DISTRIBUTION_ID;

if (!bucketName) {
  console.error('DEPLOY_BUCKET_NAME no esta definido. Establece el bucket destino como variable de entorno.');
  process.exit(1);
}

function deploy() {
  try {
    console.log('Cleaning old files...');
    execSync(`aws s3 rm s3://${bucketName} --recursive`, { stdio: 'inherit' });

    console.log('Uploading new files...');
    execSync(`aws s3 sync build/ s3://${bucketName}`, { stdio: 'inherit' });

    if (distributionId) {
      console.log('Creating CloudFront invalidation...');
      execSync(`aws cloudfront create-invalidation --distribution-id ${distributionId} --paths "/*"`, { stdio: 'inherit' });
    }

    console.log('Deployment completed!');
  } catch (error) {
    console.error('Deployment failed:', error.message);
    process.exit(1);
  }
}

deploy();
