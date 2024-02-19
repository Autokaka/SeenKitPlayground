// Created by Autokaka (qq1909698494@gmail.com) on 2024/02/18.

declare class seen {
  private constructor();

  static log(this: void, ...args: unknown[]): void;
  static readonly version: string;
  static readonly gpu: seen.GPU | undefined;
}

declare namespace seen {
  class GPU {
    private constructor();

    requestAdapter(options: GPU.RequestAdapterOptions, callback: GPU.RequestAdapterCallback): void;
    requestAdapter(callback: GPU.RequestAdapterCallback): void;
  }

  namespace GPU {
    type RequestAdapterCallback = (this: void, adapter?: GPUAdapter) => void;
    type PowerPreference = "low-power" | "high-performance";
    type RequestAdapterOptions = {
      readonly powerPreference?: PowerPreference;
    };
  }

  class GPUAdapter {
    private constructor();
  }
}
