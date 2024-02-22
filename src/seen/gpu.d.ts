// Created by Autokaka (qq1909698494@gmail.com) on 2024/02/23.

declare namespace seen {
  class GPU {
    private constructor();

    requestAdapter(options: GPU.RequestAdapterOptions, callback: GPU.RequestAdapterCallback): void;
    requestAdapter(callback: GPU.RequestAdapterCallback): void;

    readonly preferredDrawableFormat: seen.GPUTextureFormat | undefined;
  }

  namespace GPU {
    type RequestAdapterCallback = (this: void, adapter?: GPUAdapter) => void;
    type PowerPreference = "low-power" | "high-performance";
    type RequestAdapterOptions = {
      readonly powerPreference?: PowerPreference;
    };
  }
}
