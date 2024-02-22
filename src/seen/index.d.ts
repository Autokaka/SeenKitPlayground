// Created by Autokaka (qq1909698494@gmail.com) on 2024/02/18.

/// <reference types="./gpu_texture_format" />
/// <reference types="./gpu" />
/// <reference types="./gpu_adapter" />

declare class seen {
  private constructor();

  static log(this: void, ...args: unknown[]): void;
  static readonly version: string;
  static readonly gpu: seen.GPU | undefined;
}
