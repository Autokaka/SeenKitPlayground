import { seen } from "./seen";

seen.log(`Hello, ${seen.version}!`);

if (seen.gpu) {
  seen.log(`Seen GPU available, HAHAHA!`);
  seen.gpu!.requestAdapter();
} else {
  seen.log(`Seen GPU unavailable!`);
}
