/// <reference path="seen.ts" />

try {
  seen.log("Hello,", seen.version);
  seen.log("GPU:", seen.gpu);

  seen.gpu?.requestAdapter((adapter) => {
    seen.log("Adapter:", adapter);
  });
} catch (error) {
  seen.log(`Error:`, error);
}
