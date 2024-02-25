// Created by Autokaka (qq1909698494@gmail.com) on 2024/02/18.

/// <reference types="./seen" />

function main(this: unknown) {
  try {
    function test() {}
    seen.log("seen.className:", seen.className);
    seen.log("seen.version:", seen.version);
    seen.log("test:", test);
    seen.log("this:", this);
    seen.log("undefined:", undefined);
    seen.log("null:", null);
    seen.log("0:", 0);
    seen.log("true:", true);
    seen.log("seen.gpu:", seen.gpu);
    seen.log("seen.gpu?.className:", seen.gpu?.className);
    seen.log("typeof seen.gpu:", typeof seen.gpu);
    // seen.log("seen.gpu.prototype:", seen.gpu ? Reflect.getPrototypeOf(seen.gpu) : undefined);
    seen.log("seen.gpu?.constructor:", seen.gpu?.constructor);
    seen.log("Seen.GPU:", Seen.GPU);
    seen.log("typeof Seen.GPU:", typeof Seen.GPU);
    seen.log("Seen.GPU.prototype:", Seen.GPU.prototype);
    seen.log("Seen.GPU.constructor:", Seen.GPU.constructor);
    seen.log("seen.gpu instanceof Seen.GPU:", seen.gpu instanceof Seen.GPU);

    if (!seen.gpu) {
      return;
    }

    seen.gpu.requestAdapter((adapter) => {
      seen.log("adapter?.className:", adapter?.className);
      seen.log("adapter:", adapter);
    });

    // seen.log("seen.gpu.preferredDrawableFormat:", seen.gpu?.preferredDrawableFormat);
    seen.log("seen.isRunning", seen.isRunning);
    seen.log("seen.isDrawableAvailable:", seen.isDrawableAvailable);
    seen.log("seen.drawableMetrics:", seen.drawableMetrics);
    seen.log("seen.onRunningStateChanged", seen.onRunningStateChanged);
    seen.log("seen.onDrawableChanged", seen.onDrawableChanged);
    seen.log("seen.onDrawableMetricsChanged", seen.onDrawableMetricsChanged);
    seen.onRunningStateChanged = (isRunning) => {
      seen.log(`seen.onRunningStateChanged(isRunning=${isRunning})`);
    };
    seen.onDrawableChanged = (isAvailable) => {
      seen.log(`seen.onDrawableChanged(isAvailable=${isAvailable})`);
    };
    seen.onDrawableMetricsChanged = (metrics) => {
      seen.log(`seen.onDrawableMetricsChanged(metrics=${metrics})`);
    };
    seen.log("seen.onRunningStateChanged", seen.onRunningStateChanged);
    seen.log("seen.onDrawableChanged", seen.onDrawableChanged);
    seen.log("seen.onDrawableMetricsChanged", seen.onDrawableMetricsChanged);

    const framePacer = seen.createFramePacer();
    seen.log("framePacer:", framePacer);
    seen.log("framePacer.className:", framePacer.className);
    seen.log("framePacer.requestAnimationFrame:", framePacer.requestAnimationFrame);
    framePacer.requestAnimationFrame((prefFrameMillis, currentFrameDueMillis) => {
      seen.log(
        `framePacer.requestAnimationFrame(prefFrameMillis=${prefFrameMillis}, currentFrameDueMillis=${currentFrameDueMillis})`
      );
    });
  } catch (error) {
    seen.log(`Error:`, error);
  }
}

main();
