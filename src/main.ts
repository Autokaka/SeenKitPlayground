// Created by Autokaka (qq1909698494@gmail.com) on 2024/02/18.

/// <reference types="./seen" />

function main(this: unknown) {
  try {
    function test() {}
    seen.log("seen.version:", seen.version);
    seen.log("test:", test);
    seen.log("this:", this);
    seen.log("undefined:", undefined);
    seen.log("null:", null);
    seen.log("0:", 0);
    seen.log("true:", true);
    seen.log("seen.gpu:", seen.gpu);
    seen.log("typeof seen.gpu:", typeof seen.gpu);
    // seen.log("seen.gpu.prototype:", seen.gpu ? Reflect.getPrototypeOf(seen.gpu) : undefined);
    seen.log("seen.gpu.constructor:", seen.gpu?.constructor);
    seen.log("seen.GPU:", seen.GPU);
    seen.log("typeof seen.GPU:", typeof seen.GPU);
    seen.log("seen.GPU.prototype:", seen.GPU.prototype);
    seen.log("seen.GPU.constructor:", seen.GPU.constructor);
    seen.log("seen.gpu instanceof seen.GPU:", seen.gpu instanceof seen.GPU);

    if (!seen.gpu) {
      return;
    }

    seen.gpu.requestAdapter((adapter) => {
      seen.log("seen.gpu.requestAdapter:", adapter);
    });
    seen.log("seen.gpu.preferredDrawableFormat:", seen.gpu?.preferredDrawableFormat);
  } catch (error) {
    seen.log(`Error:`, error);
  }
}

main();
