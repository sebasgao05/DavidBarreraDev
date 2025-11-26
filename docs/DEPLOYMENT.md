# Deployment Manual

## Prerequisites
- AWS CLI configurado
- Node.js y npm instalados

## Deploy Completo
```bash
npm run deploy
```

## Pasos Manuales
1. **Build:** `npm run build:prod`
2. **Limpiar S3:** `aws s3 rm s3://david-barrera.com --recursive`
3. **Subir:** `aws s3 sync build/ s3://david-barrera.com`
4. **Invalidar:** `aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"`

## Configuración
Edita `scripts/deploy.js`:
- Nombre del bucket S3
- CloudFront distribution ID