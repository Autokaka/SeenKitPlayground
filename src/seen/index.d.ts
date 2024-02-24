// Created by Autokaka (qq1909698494@gmail.com) on 2024/02/18.

/// <reference types="./gpu_texture_format" />
/// <reference types="./gpu" />
/// <reference types="./gpu_adapter" />

declare class Seen {
  private constructor();

  log(...args: unknown[]): void;
  readonly version: string;
  readonly gpu: Seen.GPU | undefined;
}

declare const seen: Seen;
