import { Injectable } from '@nestjs/common';
import { networkInterfaces } from 'os';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getIp(): string {
    const interfaces = networkInterfaces();
    for (const name of Object.keys(interfaces)) {
      for (const iface of interfaces[name]) {
        if (iface.family === 'IPv4' && !iface.internal) {
          return iface.address;
        }
      }
    }
    return 'IP not found';
  }

  /**
   * Extract client's public IP from request headers
   * Checks common proxy headers in order of priority:
   * 1. x-real-ip
   * 2. x-forwarded-for (takes first IP)
   * 3. cf-connecting-ip (Cloudflare)
   * 4. x-client-ip
   * 5. x-forwarded
   * 6. forwarded-for
   * 7. forwarded
   * 8. request.ip (fallback)
   */
  getClientPublicIp(headers: any, requestIp?: string): string {
    // Check x-real-ip (most reliable for reverse proxies like nginx)
    if (headers['x-real-ip']) {
      return headers['x-real-ip'];
    }

    // Check x-forwarded-for (can contain multiple IPs, take the first one)
    if (headers['x-forwarded-for']) {
      const ips = headers['x-forwarded-for'].split(',');
      return ips[0].trim();
    }

    // Check cf-connecting-ip (Cloudflare)
    if (headers['cf-connecting-ip']) {
      return headers['cf-connecting-ip'];
    }

    // Check x-client-ip
    if (headers['x-client-ip']) {
      return headers['x-client-ip'];
    }

    // Check other less common headers
    if (headers['x-forwarded']) {
      return headers['x-forwarded'];
    }

    if (headers['forwarded-for']) {
      return headers['forwarded-for'];
    }

    if (headers['forwarded']) {
      return headers['forwarded'];
    }

    // Fallback to request.ip if available
    if (requestIp) {
      return requestIp;
    }

    return '';
  }
}
