declare global {
  type S = string;
  type N = number;
  type B = boolean;
  type KV = Record<S, any>;
  type IdType = S | N;

  type AnyString = S & {};
  type AnyNumber = N & {};

  type TokenMeta<D> = {
    iat: number;
    exp: number;
    aud: string;
    iss: string;
    sub: string;
    data: D;
  };

  type TokenData = {
    uid: number;
  };

  type noop = () => void;
}

// 必须要导出,不然无效
export {};
