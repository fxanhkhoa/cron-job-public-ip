export type CloudflareZone = {
  result: {
    id: string;
    name: string;
    status: string;
    paused: boolean;
    type: string;
    development_mode: number;
    name_servers: string[];
    original_name_servers: string[];
    original_registrar?: string;
    original_dnshost?: string;
    modified_on: Date;
    created_on: Date;
    activated_on: Date;
    meta: {
      step: number;
      custom_certificate_quota: number;
      page_rule_quota: number;
      phishing_detected: boolean;
      multiple_railguns_allowed: boolean;
    };
    owner: {
      id?: string;
      type: string;
      email?: string;
    };
    account: {
      id: string;
      name: string;
    };
    tenant: {
      id?: string;
      name?: string;
    };
    tenant_unit: {
      id?: string;
    };
    permissions: string[];
    plan: {
      id: string;
      name: string;
      price: number;
      currency: string;
      frequency: string;
      is_subscribed: boolean;
      can_subscribe: boolean;
      legacy_id: string;
      legacy_discount: boolean;
      externally_managed: boolean;
    };
  }[];

  result_info: {
    page: 1;
    per_page: 20;
    total_pages: 1;
    count: 3;
    total_count: 3;
  };
  success: true;
  errors: [];
  messages: [];
};

export type SingleCloudflareDomain = {
  id: string;
  zone_id: string;
  zone_name: string;
  name: string;
  type: string;
  content: string;
  proxiable: boolean;
  proxied: boolean;
  ttl: number;
  locked: boolean;
  meta: {
    auto_added: boolean;
    managed_by_apps: boolean;
    managed_by_argo_tunnel: boolean;
  };
  comment?: string;
  tags: string[];
  created_on: Date;
  modified_on: Date;
};

export type CloudflareDomain = {
  result: SingleCloudflareDomain[];

  success: true;
  errors: [];
  messages: [];
  result_info: {
    page: 1;
    per_page: 100;
    count: 50;
    total_count: 50;
    total_pages: 1;
  };
};

export type PatchDNSResponse = {
  result: {
    id: string;
    zone_id: string;
    zone_name: string;
    name: string;
    type: string;
    content: string;
    proxiable: boolean;
    proxied: boolean;
    ttl: number;
    locked: boolean;
    meta: {
      auto_added: boolean;
      managed_by_apps: boolean;
      managed_by_argo_tunnel: boolean;
    };
    comment?: string;
    tags: string[];
    created_on: Date;
    modified_on: Date;
  };
  success: boolean;
  errors: string[];
  messages: string[];
};
