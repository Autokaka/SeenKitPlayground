import * as seen_c_api from "./seen_c_api";

export class seen {
  static log(message: string): void {
    seen_c_api.log(String.UTF8.encode(message, true));
  }

  static get version(): string {
    if (!seen._version) {
      const buffer = new ArrayBuffer(seen_c_api.get_version_byte_length());
      seen_c_api.get_version(buffer, buffer.byteLength);
      seen._version = String.UTF8.decode(buffer);
    }
    return seen._version as string;
  }

  static get gpu(): seen.GPU | null {
    if (!seen._gpu) {
      seen._gpu = seen.GPU.create();
    }
    return seen._gpu;
  }

  private static _version: string | null = null;
  private static _gpu: seen.GPU | null = null;
}

export namespace seen {
  export namespace GPU {
    export type AdapterCallback = (adapter: GPUAdapter | null) => void;
  }

  export class GPU {
    static create(): GPU | null {
      const nativePtr = seen_c_api.wgpu_create_instance();
      return nativePtr ? new GPU(nativePtr) : null;
    }

    requestAdapter(callback: GPU.AdapterCallback = (_) => {}): void {
      const wgpu_instance_request_adapter_callback: seen_c_api.wgpu_instance_request_adapter_callback = (
        status: i32,
        adapter: externref,
        _messageBuffer: ArrayBuffer,
        _messageLength: i32,
        user_data: usize
      ): void => {
        const callback = changetype<GPU.AdapterCallback>(user_data);
        callback(status == 0 && adapter ? new GPUAdapter(adapter as ref_extern) : null);
      };
      seen_c_api.wgpu_instance_request_adapter(
        this._nativePtr,
        null,
        wgpu_instance_request_adapter_callback.index,
        changetype<usize>(callback)
      );
    }

    private constructor(private readonly _nativePtr: ref_extern) {}
  }

  export class GPUAdapter {
    constructor(private readonly _nativePtr: ref_extern) {}
  }
}
