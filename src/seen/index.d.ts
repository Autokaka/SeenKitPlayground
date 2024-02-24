// Created by Autokaka (qq1909698494@gmail.com) on 2024/02/18.

/// <reference types="./gpu_texture_format" />
/// <reference types="./gpu" />
/// <reference types="./gpu_adapter" />
/// <reference types="./drawable_metrics" />

declare class Seen {
  private constructor();

  onRunningStateChanged?: Seen.RunningStateChangedCallback;
  onDrawableChanged?: Seen.DrawableChangedCallback;
  onDrawableMetricsChanged?: Seen.DrawableMetricsChangedCallback;

  log(...args: unknown[]): void;
  readonly version: string;
  readonly gpu: Seen.GPU | undefined;
}

declare namespace Seen {
  type RunningStateChangedCallback = (isRunning: boolean) => void;
  type DrawableChangedCallback = (isAvailable: boolean) => void;
  type DrawableMetricsChangedCallback = (metrics: Seen.DrawableMetrics) => void;
}

declare const seen: Seen;
