export default () => ({
  discord: {
    webhook: process.env.DISCORD_CHANNEL_WEBHOOK ?? '',
  },
  serverName: process.env.SERVER_NAME ?? '',
  cloudflare: {
    dnsEditToken: process.env.CLOUDFLARE_DNS_EDIT_TOKEN ?? '',
    zoneNames: process.env.CLOUDFLARE_ZONES ?? '',
    domains: process.env.CLOUDFLARE_DOMAINS_EDIT ?? '',
  },
});
