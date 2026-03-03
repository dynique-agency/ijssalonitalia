# Security Setup Instructies

## Cloudflare Pages Security Headers Configuratie

### Stap 1: Ga naar Cloudflare Dashboard
1. Login bij [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Selecteer je account
3. Ga naar **Pages** → Selecteer **ijssalonitalia** project

### Stap 2: Configureer Custom Headers
1. Ga naar **Settings** → **Custom Headers**
2. Voeg de volgende headers toe (zie `cloudflare-security-headers.json` voor volledige lijst):

#### Essentiële Headers:

**X-Frame-Options**
```
DENY
```

**X-Content-Type-Options**
```
nosniff
```

**X-XSS-Protection**
```
1; mode=block
```

**Referrer-Policy**
```
strict-origin-when-cross-origin
```

**Strict-Transport-Security (HSTS)**
```
max-age=31536000; includeSubDomains; preload
```

**Content-Security-Policy**
```
default-src 'self'; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; script-src 'self' 'unsafe-inline' 'unsafe-eval'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests;
```

**Permissions-Policy**
```
geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()
```

### Stap 3: SSL/TLS Instellingen
1. Ga naar **SSL/TLS** in Cloudflare Dashboard
2. Zet SSL/TLS encryption mode op **Full (strict)**
3. Enable **Always Use HTTPS**
4. Enable **Automatic HTTPS Rewrites**

### Stap 4: Rate Limiting (Optioneel)
Voor extra bescherming tegen DDoS:
1. Ga naar **Security** → **WAF**
2. Enable **DDoS Protection**
3. Configureer rate limiting rules indien nodig

### Stap 5: Firewall Rules (Optioneel)
1. Ga naar **Security** → **WAF** → **Custom Rules**
2. Voeg regels toe om verdachte requests te blokkeren

---

## Automatische Security Checks

### NPM Security Audit
Voer regelmatig uit:
```bash
npm audit
npm audit fix
```

### Dependency Updates
Check voor updates:
```bash
npm outdated
npm update
```

### Automated Security Scanning
Overweeg tools zoals:
- Snyk
- Dependabot (GitHub)
- npm audit CI/CD integration

---

## Best Practices

1. ✅ **Regelmatige Updates**: Houd alle dependencies up-to-date
2. ✅ **Security Headers**: Altijd geconfigureerd via Cloudflare
3. ✅ **HTTPS Only**: Forceer altijd HTTPS
4. ✅ **No Secrets**: Geen credentials in code
5. ✅ **Static Export**: Minimale attack surface
6. ✅ **Content Security Policy**: Strikte CSP headers
7. ✅ **Security.txt**: Contact informatie voor security researchers

---

## Monitoring

### Security Monitoring Tools
- Cloudflare Analytics (automatisch)
- Google Search Console (security issues)
- Security Headers Check: https://securityheaders.com

### Regular Checks
- Maandelijks: `npm audit`
- Kwartaal: Dependency updates
- Jaarlijks: Security audit review

---

## Contact voor Security Issues

Voor security vulnerabilities, contact:
- Email: ijssalonitalia@me.com
- Security.txt: https://www.ijssalonitaliavaals.nl/.well-known/security.txt



