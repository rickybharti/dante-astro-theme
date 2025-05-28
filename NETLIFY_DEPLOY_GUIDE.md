# 🚀 Netlify Deployment Quick Guide

## Deployment Settings

```yaml
Base directory: dante-astro-theme
Build command: npm install && npm run build
Publish directory: ../public
```

## Important URLs

- **Live Blog:** `https://[your-site].netlify.app/blog/`
- **CMS Admin:** `https://[your-site].netlify.app/blog/admin/`
- **RSS Feed:** `https://[your-site].netlify.app/blog/rss.xml`

## Netlify Identity Setup

1. ✅ Enable Identity Service
2. ✅ Enable Git Gateway
3. ✅ Set registration to "Invite only"
4. ✅ Invite admin users

## Custom Domain Setup

If using custom domain (e.g., juicy.ag):

1. Go to Domain Settings
2. Add custom domain
3. Configure DNS:
   - Add CNAME record pointing to `[your-site].netlify.app`
   - Or use Netlify DNS

## Post-Deployment Checklist

- [ ] Test blog at `/blog/`
- [ ] Test CMS login at `/blog/admin/`
- [ ] Create first post via CMS
- [ ] Verify RSS feed works
- [ ] Check SEO meta tags
- [ ] Test mobile responsiveness

## Troubleshooting

### CMS Login Issues

- Clear browser cache
- Check Identity is enabled
- Verify Git Gateway is active
- Check invite email spam folder

### Build Failures

- Check build logs in Netlify
- Verify `package.json` exists
- Ensure base directory is correct

### 404 Errors

- Verify `netlify.toml` is in root
- Check redirect rules
- Ensure build output is correct

## Useful Netlify Features

- **Deploy Previews:** Automatic previews for PRs
- **Split Testing:** A/B test different versions
- **Analytics:** Built-in analytics (paid)
- **Forms:** Handle contact forms
- **Functions:** Serverless functions

## Support

- [Netlify Docs](https://docs.netlify.com)
- [Decap CMS Docs](https://decapcms.org/docs/)
- [Netlify Community](https://answers.netlify.com)
