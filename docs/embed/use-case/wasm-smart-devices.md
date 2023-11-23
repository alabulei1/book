---
sidebar_position: 3
---

# WasmEdge On Smart Devices

Smart device apps could embed WasmEdge as a middleware runtime to render interactive content on the UI, connect to native device drivers, and access specialized hardware features (i.e, the GPU for AI inference). The benefits of the WasmEdge runtime over native-compiled machine code include security, safety, portability, manageability, OTA upgradability, and developer productivity. WasmEdge runs on the following device OSes.

- [Android](/category/build-and-run-wasmedge-on-android)
- [OpenHarmony](/contribute/source/os/openharmony)
- [Raspberry Pi](/contribute/source/os/raspberrypi)
- [The seL4 RTOS](/contribute/source/os/sel4)

With WasmEdge on both the device and the edge server, we can support [isomorphic Server-Side Rendering (SSR)](/develop/rust/ssr) and [microservices](/develop/build-and-run/docker_wasm#deploy-the-microservice-example) for rich-client mobile applications that is both portable and upgradable.