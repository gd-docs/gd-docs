import type { InjectionKey } from 'vue';

export type ParamInfoEntry = {
  symbol: string
  description: string
  kind: string
};

export type ParamInfoRegistry = {
  entries: ParamInfoEntry[]
  register: (entry: ParamInfoEntry) => void
};

export const paramInfoRegistryKey: InjectionKey<ParamInfoRegistry> =
  Symbol('param-info-registry');
