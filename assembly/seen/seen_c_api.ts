// @ts-ignore: decorator
@external("seen", "log")
export declare function log(message: ArrayBuffer): void;

// @ts-ignore: decorator
@external("seen", "get_version_byte_length")
export declare function get_version_byte_length(): i32;

// @ts-ignore: decorator
@external("seen", "get_version")
export declare function get_version(buf: ArrayBuffer, len: i32): void;

// @ts-ignore: decorator
@external("seen", "wgpu_create_instance")
export declare function wgpu_create_instance(): externref;

export type wgpu_instance_request_adapter_callback = (status: i32, adapter: externref, message: ArrayBuffer, message_length: i32, user_data: usize) => void;
export type wgpu_instance_request_adapter_callback_t = u32;

// @ts-ignore: decorator
@external("seen", "wgpu_instance_request_adapter")
export declare function wgpu_instance_request_adapter(
  instance: externref,
  options: externref,
  // indirect callback index in table (wgpu_instance_request_adapter_callback_t)
  callback: wgpu_instance_request_adapter_callback_t,
  user_data: usize,
): void;
