import Config from '@/configs';

// default
let storagePolicy = localStorage;

// 存储策略
function setStoragePolicy(policy: Storage) {
  storagePolicy = policy;
}

function set(k: string, v: any) {
  storagePolicy.setItem(k, typeof v === 'object' ? JSON.stringify(v) : v);
}

// quick function
function setToken(token: string) {
  set(Config.tokenKey, token);
}

function getString(k: string): string | null {
  const v = storagePolicy.getItem(k);
  return v;
}

// quick function
function getToken() {
  return getString(Config.tokenKey);
}

function getNumber(k: string): number | undefined {
  const v = storagePolicy.getItem(k);
  if (v === null) {
    return undefined;
  }
  return Number(v);
}

function getBoolean(k: string): boolean | undefined {
  const v = storagePolicy.getItem(k);
  if (v === null) {
    return undefined;
  }
  return v === 'true';
}

function getObject<T = {}>(k: string): T | undefined {
  const v = storagePolicy.getItem(k);
  if (v === null) {
    return undefined;
  }
  return JSON.parse(v);
}

function has(k: string): boolean {
  return getString(k) !== null;
}

function remove(k: string) {
  storagePolicy.removeItem(k);
}

function removeToken() {
  remove(Config.tokenKey);
}

function clear() {
  storagePolicy.clear();
}

const Cache = {
  set,
  setToken,
  setStoragePolicy,
  getToken,
  has,
  getString,
  getObject,
  getBoolean,
  getNumber,
  remove,
  removeToken,
  clear
};

export default Cache;
