# Deployment Configuration

## Cloudflare Pages Setup (E0-T8)

### Prerequisites
- Cloudflare account (free tier sufficient)
- Domain: redocted.com
- GitHub personal access token (repo scope)

### Configuration Steps

1. **Connect repository to Cloudflare Pages:**
   - Go to Cloudflare dashboard → Pages
   - Click "Create a project" → "Connect to Git"
   - Authorize GitHub and select this repository
   - Select branch: `main`

2. **Build settings:**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/` (default)

3. **Environment variables:**
   Set the following in Cloudflare Pages project settings:
   - `PUBLIC_CALENDLY_URL` (from `.env.example`)
   - `RESEND_API_KEY` (from `.env.example`)
   - `WAITLIST_KV_NAMESPACE` (namespace binding, see KV setup below)
   - `PUBLIC_PLAUSIBLE_DOMAIN` (optional, for analytics)

4. **Cloudflare KV Namespace Setup:**
   - Go to Workers & Pages → KV
   - Create namespace: `redocted-waitlist`
   - Bind it in Pages project settings:
     - Variable name: `WAITLIST_KV_NAMESPACE`
     - KV Namespace: `redocted-waitlist`

5. **Custom Domain:**
   - In Pages project → Custom domain
   - Add `redocted.com`
   - Follow Cloudflare's domain nameserver instructions
   - Verify DNS records are set up correctly

6. **SSL/TLS:**
   - Cloudflare automatically provisions free SSL certificates
   - Verify HTTPS is enforced (Pages → Settings → SSL/TLS)

### Verification Checklist

- [ ] Repository connected and builds succeed on each push to `main`
- [ ] Site is reachable at redocted.com with valid certificate
- [ ] Environment variables are accessible in deployed pages
- [ ] KV namespace is bound and functional
- [ ] Preview deploys generate unique URLs for PRs

## Preview Deploy Workflow (E0-T9)

Cloudflare Pages automatically creates preview deployments for PRs. Once the site is connected:

1. Every PR automatically gets a unique preview URL
2. URL format: `https://<pr-number>.<repo-name>.pages.dev`
3. Preview environments have access to the same environment variables
4. KV namespace is shared (use scoped keys to separate data by environment)

### GitHub Actions Integration

The existing CI workflow (`.github/workflows/ci.yml`) runs tests on all PRs. Cloudflare Pages automatically deploys on push to `main`.

For additional preview deploy comments on PRs, you can configure Cloudflare's GitHub integration:
- Go to Pages project → Integrations → GitHub
- Enable "Comments on pull requests"

This will post the preview URL directly in PR comments once deployment is complete.

## Production Checklist

Before launch:
- [ ] Custom domain redocted.com resolves correctly
- [ ] SSL/TLS certificate is valid and enforced
- [ ] All environment variables configured
- [ ] Plausible analytics is tracking page views
- [ ] Resend API is functional for email sends
- [ ] KV namespace contains test data
- [ ] Performance is acceptable (run Lighthouse)
- [ ] All E0-E18 tasks completed
