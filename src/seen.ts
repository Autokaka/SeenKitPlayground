declare namespace seen {
  function log(this: void, ...args: unknown[]): void;
  const version: string;
  const gpu: seen.GPU | undefined;
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
