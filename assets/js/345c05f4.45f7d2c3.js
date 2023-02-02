"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[8576],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=r.createContext({}),l=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(m.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),f=a,d=p["".concat(m,".").concat(f)]||p[f]||c[f]||o;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var m in n)hasOwnProperty.call(n,m)&&(s[m]=n[m]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7356:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:4},i="6.4 Pass Complex Data",s={unversionedId:"embed-guide/go/data",id:"embed-guide/go/data",title:"6.4 Pass Complex Data",description:"An issue with the WebAssembly spec is that it only supports a very limited number of data types. If you want to embed a WebAssembly function with complex call parameters or return values, you will need to manage memory pointers both on Go SDK and WebAssembly function sides.",source:"@site/docs/embed-guide/go/data.md",sourceDirName:"embed-guide/go",slug:"/embed-guide/go/data",permalink:"/book/embed-guide/go/data",draft:!1,editUrl:"https://github.com/alabulei1/book/docs/embed-guide/go/data.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"embedSidebar",previous:{title:"6.3 Embed Wasm Functions",permalink:"/book/embed-guide/go/function"},next:{title:"6.5 AI Inference with TensorFlow",permalink:"/book/embed-guide/go/ai"}},m={},l=[{value:"Pass strings to Rust functions",id:"pass-strings-to-rust-functions",level:2},{value:"Pass strings to TinyGo functions",id:"pass-strings-to-tinygo-functions",level:2},{value:"Pass bytes to Rust functions",id:"pass-bytes-to-rust-functions",level:2},{value:"Pass bytes to TinyGo functions",id:"pass-bytes-to-tinygo-functions",level:2}],u={toc:l};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"64-pass-complex-data"},"6.4 Pass Complex Data"),(0,a.kt)("h1",{id:"pass-complex-parameters-to-wasm-functions"},"Pass complex parameters to Wasm functions"),(0,a.kt)("p",null,"An issue with the WebAssembly spec is that it only supports a very limited number of data types. If you want to embed a WebAssembly function with complex call parameters or return values, you will need to manage memory pointers both on Go SDK and WebAssembly function sides.\nSuch complex call parameters and return values include dynamic memory structures such as strings and byte arrays.\nIn this section, we will discuss several examples."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#pass-strings-to-rust-functions"},"Pass strings to Rust functions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#pass-strings-to-tinygo-functions"},"Pass strings to TinyGo functions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#pass-bytes-to-rust-functions"},"Pass bytes to Rust functions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#pass-bytes-to-tinygo-functions"},"Pass bytes to TinyGo functions"))),(0,a.kt)("h2",{id:"pass-strings-to-rust-functions"},"Pass strings to Rust functions"),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-go-examples/tree/master/go_MemoryGreet"},"this example"),", we will demonstrate how to call ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-go-examples/blob/master/go_MemoryGreet/rust_memory_greet/src/lib.rs"},"a Rust-based WebAssembly function")," from a Go app.\nSpecially, we will discuss how to pass string data."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"An alternative approach to pass and return complex values to Rust functions in WebAssembly is to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"wasmedge_bindgen")," compiler tool. You can ",(0,a.kt)("a",{parentName:"p",href:"/book/embed-guide/go/function"},"learn more here"),".")),(0,a.kt)("p",null,"The Rust function takes a memory pointer for the string, and constructs the Rust string itself."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"use std::ffi::{CStr, CString};\nuse std::mem;\nuse std::os::raw::{c_char, c_void};\n\n#[no_mangle]\npub extern fn allocate(size: usize) -> *mut c_void {\n  let mut buffer = Vec::with_capacity(size);\n  let pointer = buffer.as_mut_ptr();\n  mem::forget(buffer);\n\n  pointer as *mut c_void\n}\n\n#[no_mangle]\npub extern fn deallocate(pointer: *mut c_void, capacity: usize) {\n  unsafe {\n    let _ = Vec::from_raw_parts(pointer, 0, capacity);\n  }\n}\n\n#[no_mangle]\npub extern fn greet(subject: *mut c_char) -> *mut c_char {\n  let subject = unsafe { CStr::from_ptr(subject).to_bytes().to_vec() };\n  let mut output = b\"Hello, \".to_vec();\n  output.extend(&subject);\n  output.extend(&[b'!']);\n\n  unsafe { CString::from_vec_unchecked(output) }.into_raw()\n}\n")),(0,a.kt)("p",null,"Use standard Rust compiler tools to compile the Rust source code into a WebAssembly bytecode application."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd rust_memory_greet\ncargo build --target wasm32-wasi\n# The output WASM will be `target/wasm32-wasi/debug/rust_memory_greet_lib.wasm`.\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-go-examples/blob/master/go_MemoryGreet/greet_memory.go"},"Go SDK application")," must call ",(0,a.kt)("inlineCode",{parentName:"p"},"allocate")," from the WasmEdge VM to get a pointer to the string parameter.\nIt will then call the ",(0,a.kt)("inlineCode",{parentName:"p"},"greet")," function in Rust with the pointer.\nAfter the function returns, the Go application will call ",(0,a.kt)("inlineCode",{parentName:"p"},"deallocate")," to free the memory space."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n  "fmt"\n  "os"\n  "strings"\n\n  "github.com/second-state/WasmEdge-go/wasmedge"\n)\n\nfunc main() {\n  wasmedge.SetLogErrorLevel()\n  conf := wasmedge.NewConfigure(wasmedge.WASI)\n  vm := wasmedge.NewVMWithConfig(conf)\n\n  wasi := vm.GetImportModule(wasmedge.WASI)\n  wasi.InitWasi(\n    os.Args[1:],\n    os.Environ(),\n    []string{".:."},\n  )\n\n  err := vm.LoadWasmFile(os.Args[1])\n  if err != nil {\n    fmt.Println("failed to load wasm")\n  }\n  vm.Validate()\n  vm.Instantiate()\n\n  subject := "WasmEdge"\n  lengthOfSubject := len(subject)\n\n  // Allocate memory for the subject, and get a pointer to it.\n  // Include a byte for the NULL terminator we add below.\n  allocateResult, _ := vm.Execute("allocate", int32(lengthOfSubject + 1))\n  inputPointer := allocateResult[0].(int32)\n\n  // Write the subject into the memory.\n  mod := vm.GetActiveModule()\n  mem := mod.FindMemory("memory")\n  memData, _ := mem.GetData(uint(inputPointer), uint(lengthOfSubject+1))\n  copy(memData, subject)\n\n  // C-string terminates by NULL.\n  memData[lengthOfSubject] = 0\n\n  // Run the `greet` function. Given the pointer to the subject.\n  greetResult, _ := vm.Execute("greet", inputPointer)\n  outputPointer := greetResult[0].(int32)\n\n  pageSize := mem.GetPageSize()\n  // Read the result of the `greet` function.\n  memData, _ = mem.GetData(uint(0), uint(pageSize * 65536))\n  nth := 0\n  var output strings.Builder\n\n  for {\n    if memData[int(outputPointer) + nth] == 0 {\n      break\n    }\n\n    output.WriteByte(memData[int(outputPointer) + nth])\n    nth++\n  }\n\n  lengthOfOutput := nth\n\n  fmt.Println(output.String())\n\n  // Deallocate the subject, and the output.\n  vm.Execute("deallocate", inputPointer, int32(lengthOfSubject+1))\n  vm.Execute("deallocate", outputPointer, int32(lengthOfOutput+1))\n\n  vm.Release()\n  conf.Release()\n}\n')),(0,a.kt)("p",null,"To build the Go SDK example, run the following commands."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/second-state/WasmEdge-go/wasmedge@v{{ wasmedge_version }}\ngo build greet_memory.go\n")),(0,a.kt)("p",null,"Now you can use the Go application to run the WebAssembly plug-in compiled from Rust."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./greet_memory rust_memory_greet_lib.wasm\nHello, WasmEdge!\n")),(0,a.kt)("h2",{id:"pass-strings-to-tinygo-functions"},"Pass strings to TinyGo functions"),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-go-examples/tree/master/go_MemoryGreetTinyGo"},"this example"),", we will demonstrate how to call ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-go-examples/blob/master/go_MemoryGreetTinyGo/greet.go"},"a TinyGo-based WebAssembly function")," from a Go app."),(0,a.kt)("p",null,"The TinyGo function takes a memory pointer for the string, and constructs the TinyGo string itself."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The empty ",(0,a.kt)("inlineCode",{parentName:"p"},"main()")," is needed to the compiled WebAssembly program to set up WASI properly.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n  "strings"\n  "unsafe"\n)\n\nfunc main() {}\n\n//export greet\nfunc greet(subject *int32) *int32 {\n  nth := 0\n  var subjectStr strings.Builder\n  pointer := uintptr(unsafe.Pointer(subject))\n  for {\n    s := *(*int32)(unsafe.Pointer(pointer + uintptr(nth)))\n    if s == 0 {\n      break\n    }\n\n    subjectStr.WriteByte(byte(s))\n    nth++\n  }\n\n  output := []byte("Hello, " + subjectStr.String() + "!")\n\n  r := make([]int32, 2)\n  r[0] = int32(uintptr(unsafe.Pointer(&(output[0]))))\n  r[1] = int32(len(output))\n\n  return &r[0]\n}\n')),(0,a.kt)("p",null,"Use the TinyGo compiler tools to compile the Go source code into a WebAssembly bytecode application."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tinygo build -o greet.wasm -target wasi greet.go\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-go-examples/blob/master/go_MemoryGreetTinyGo/greet_memory.go"},"Go SDK application")," must call ",(0,a.kt)("inlineCode",{parentName:"p"},"malloc")," from the WasmEdge VM to get a pointer to the string parameter.\nIt will then call the ",(0,a.kt)("inlineCode",{parentName:"p"},"greet")," function in TinyGo with the pointer.\nAfter the function returns, the Go application will call ",(0,a.kt)("inlineCode",{parentName:"p"},"free")," to free the memory space."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n  "fmt"\n  "os"\n  "encoding/binary"\n\n  "github.com/second-state/WasmEdge-go/wasmedge"\n)\n\nfunc main() {\n  wasmedge.SetLogErrorLevel()\n  conf := wasmedge.NewConfigure(wasmedge.WASI)\n  vm := wasmedge.NewVMWithConfig(conf)\n\n  wasi := vm.GetImportModule(wasmedge.WASI)\n  wasi.InitWasi(\n    os.Args[1:],\n    os.Environ(),\n    []string{".:."},\n  )\n\n  err := vm.LoadWasmFile(os.Args[1])\n  if err != nil {\n    fmt.Println("failed to load wasm")\n  }\n  vm.Validate()\n  vm.Instantiate()\n\n  subject := "WasmEdge"\n  lengthOfSubject := len(subject)\n\n  // Allocate memory for the subject, and get a pointer to it.\n  // Include a byte for the NULL terminator we add below.\n  allocateResult, _ := vm.Execute("malloc", int32(lengthOfSubject+1))\n  inputPointer := allocateResult[0].(int32)\n\n  // Write the subject into the memory.\n  mod := vm.GetActiveModule()\n  mem := mod.FindMemory("memory")\n  memData, _ := mem.GetData(uint(inputPointer), uint(lengthOfSubject+1))\n  copy(memData, subject)\n\n  // C-string terminates by NULL.\n  memData[lengthOfSubject] = 0\n\n  // Run the `greet` function. Given the pointer to the subject.\n  greetResult, _ := vm.Execute("greet", inputPointer)\n  outputPointer := greetResult[0].(int32)\n\n  memData, _ = mem.GetData(uint(outputPointer), 8)\n  resultPointer := binary.LittleEndian.Uint32(memData[:4])\n  resultLength := binary.LittleEndian.Uint32(memData[4:])\n\n  // Read the result of the `greet` function.\n  memData, _ = mem.GetData(uint(resultPointer), uint(resultLength))\n  fmt.Println(string(memData))\n\n  // Deallocate the subject, and the output.\n  vm.Execute("free", inputPointer)\n\n  vm.Release()\n  conf.Release()\n}\n')),(0,a.kt)("p",null,"To build the Go SDK example, run the following commands."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/second-state/WasmEdge-go/wasmedge@v{{ wasmedge_version }}\ngo build greet_memory.go\n")),(0,a.kt)("p",null,"Now you can use the Go application to run the WebAssembly plug-in compiled from TinyGo."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./greet_memory greet.wasm\nHello, WasmEdge!\n")),(0,a.kt)("h2",{id:"pass-bytes-to-rust-functions"},"Pass bytes to Rust functions"),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-go-examples/tree/master/go_AccessMemory"},"this example"),", we will demonstrate how to call ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-go-examples/blob/master/go_AccessMemory/rust_access_memory/src/lib.rs"},"Rust-based WebAssembly functions")," and pass arrays to and from a Go app."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"An alternative approach to pass and return complex values to Rust functions in WebAssembly is to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"wasmedge_bindgen")," compiler tool. You can ",(0,a.kt)("a",{parentName:"p",href:"/book/embed-guide/go/function"},"learn more here"),".")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"fib_array()")," function takes a array as a call parameter and fill it with a fibonacci sequence of numbers. Alternatively, the ",(0,a.kt)("inlineCode",{parentName:"p"},"fib_array_return_memory()")," function returns a array of fibonacci sequence of numbers."),(0,a.kt)("p",null,"For the array in the call parameter, the Rust function ",(0,a.kt)("inlineCode",{parentName:"p"},"fib_array()")," takes a memory pointer and constructs the Rust ",(0,a.kt)("inlineCode",{parentName:"p"},"Vec")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"from_raw_parts"),". For the array return value, the Rust function ",(0,a.kt)("inlineCode",{parentName:"p"},"fib_array_return_memory()")," simply returns the pointer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"use std::mem;\nuse std::os::raw::{c_void, c_int};\n\n#[no_mangle]\npub extern fn allocate(size: usize) -> *mut c_void {\n  let mut buffer = Vec::with_capacity(size);\n  let pointer = buffer.as_mut_ptr();\n  mem::forget(buffer);\n\n  pointer as *mut c_void\n}\n\n#[no_mangle]\npub extern fn deallocate(pointer: *mut c_void, capacity: usize) {\n  unsafe {\n    let _ = Vec::from_raw_parts(pointer, 0, capacity);\n  }\n}\n\n#[no_mangle]\npub extern fn fib_array(n: i32, p: *mut c_int) -> i32 {\n  unsafe {\n    let mut arr = Vec::<i32>::from_raw_parts(p, 0, (4*n) as usize);\n    for i in 0..n {\n      if i < 2 {\n        arr.push(i);\n      } else {\n        arr.push(arr[(i - 1) as usize] + arr[(i - 2) as usize]);\n      }\n    }\n    let r = arr[(n - 1) as usize];\n    mem::forget(arr);\n    r\n  }\n}\n\n#[no_mangle]\npub extern fn fib_array_return_memory(n: i32) -> *mut c_int {\n  let mut arr = Vec::with_capacity((4 * n) as usize);\n  let pointer = arr.as_mut_ptr();\n  for i in 0..n {\n    if i < 2 {\n      arr.push(i);\n    } else {\n      arr.push(arr[(i - 1) as usize] + arr[(i - 2) as usize]);\n    }\n  }\n  mem::forget(arr);\n  pointer\n}\n")),(0,a.kt)("p",null,"Use standard Rust compiler tools to compile the Rust source code into a WebAssembly bytecode application."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd rust_access_memory\ncargo build --target wasm32-wasi\n# The output WASM will be target/wasm32-wasi/debug/rust_access_memory_lib.wasm.\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-go-examples/blob/master/go_AccessMemory/run.go"},"Go SDK application")," must call ",(0,a.kt)("inlineCode",{parentName:"p"},"allocate")," from the WasmEdge VM to get a pointer to the array.\nIt will then call the ",(0,a.kt)("inlineCode",{parentName:"p"},"fib_array()")," function in Rust and pass in the pointer.\nAfter the functions return, the Go application will use the WasmEdge ",(0,a.kt)("inlineCode",{parentName:"p"},"store")," API to construct an array from the pointer in the call parameter (",(0,a.kt)("inlineCode",{parentName:"p"},"fib_array()"),") or in the return value (",(0,a.kt)("inlineCode",{parentName:"p"},"fib_array_return_memory()"),").\nThe Go app will eventually call ",(0,a.kt)("inlineCode",{parentName:"p"},"deallocate")," to free the memory space."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n  "fmt"\n  "os"\n  "unsafe"\n\n  "github.com/second-state/WasmEdge-go/wasmedge"\n)\n\nfunc main() {\n  wasmedge.SetLogErrorLevel()\n  conf := wasmedge.NewConfigure(wasmedge.WASI)\n  vm := wasmedge.NewVMWithConfig(conf)\n\n  wasi := vm.GetImportModule(wasmedge.WASI)\n  wasi.InitWasi(\n    os.Args[1:],\n    os.Environ(),\n    []string{".:."},\n  )\n\n  err := vm.LoadWasmFile(os.Args[1])\n  if err != nil {\n    fmt.Println("failed to load wasm")\n  }\n  vm.Validate()\n  vm.Instantiate()\n\n  n := int32(10)\n\n  p, err := vm.Execute("allocate", 4 * n)\n  if err != nil {\n    fmt.Println("allocate failed:", err)\n  }\n\n  fib, err := vm.Execute("fib_array", n, p[0])\n  if err != nil {\n    fmt.Println("fib_rray failed:", err)\n  } else {\n    fmt.Println("fib_array() returned:", fib[0])\n    fmt.Printf("fib_array memory at: %p\\n", unsafe.Pointer((uintptr)(p[0].(int32))))\n    mod := vm.GetActiveModule()\n    mem := mod.FindMemory("memory")\n    if mem != nil {\n      // int32 occupies 4 bytes\n      fibArray, err := mem.GetData(uint(p[0].(int32)), uint(n * 4))\n      if err == nil && fibArray != nil {\n        fmt.Println("fibArray:", fibArray)\n      }\n    }\n  }\n\n  fibP, err := vm.Execute("fib_array_return_memory", n)\n  if err != nil {\n    fmt.Println("fib_array_return_memory failed:", err)\n  } else {\n    fmt.Printf("fib_array_return_memory memory at: %p\\n", unsafe.Pointer((uintptr)(fibP[0].(int32))))\n    mod := vm.GetActiveModule()\n    mem := mod.FindMemory("memory")\n    if mem != nil {\n      // int32 occupies 4 bytes\n      fibArrayReturnMemory, err := mem.GetData(uint(fibP[0].(int32)), uint(n * 4))\n      if err == nil && fibArrayReturnMemory != nil {\n        fmt.Println("fibArrayReturnMemory:", fibArrayReturnMemory)\n      }\n    }\n  }\n\n  _, err = vm.Execute("deallocate", p[0].(int32), 4 * n)\n  if err != nil {\n    fmt.Println("free failed:", err)\n  }\n\n\n  exitcode := wasi.WasiGetExitCode()\n  if exitcode != 0 {\n    fmt.Println("Go: Running wasm failed, exit code:", exitcode)\n  }\n\n  vm.Release()\n  conf.Release()\n}\n')),(0,a.kt)("p",null,"To build the Go SDK example, run the following commands."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/second-state/WasmEdge-go/wasmedge@v{{ wasmedge_version }}\ngo build run.go\n")),(0,a.kt)("p",null,"Now you can use the Go application to run the WebAssembly plug-in compiled from Rust."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./run rust_access_memory_lib.wasm\nfib_array() returned: 34\nfib_array memory at: 0x102d80\nfibArray: [0 0 0 0 1 0 0 0 1 0 0 0 2 0 0 0 3 0 0 0 5 0 0 0 8 0 0 0 13 0 0 0 21 0 0 0 34 0 0 0]\nfib_array_return_memory memory at: 0x105430\nfibArrayReturnMemory: [0 0 0 0 1 0 0 0 1 0 0 0 2 0 0 0 3 0 0 0 5 0 0 0 8 0 0 0 13 0 0 0 21 0 0 0 34 0 0 0]\n")),(0,a.kt)("h2",{id:"pass-bytes-to-tinygo-functions"},"Pass bytes to TinyGo functions"),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-go-examples/tree/master/go_AccessMemoryTinyGo"},"this example"),", we will demonstrate how to call ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-go-examples/blob/master/go_AccessMemoryTinyGo/fib.go"},"TinyGo-based WebAssembly functions")," and pass arrays to and from a Go app."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"fibArray")," function takes a array as a call parameter and fill it with\na fibonacci sequence of numbers. Alternatively, the ",(0,a.kt)("inlineCode",{parentName:"p"},"fibArrayReturnMemory")," function returns\na array of fibonacci sequence of numbers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n  "fmt"\n  "unsafe"\n)\n\nfunc main() {\n  println("in main")\n  n := int32(10)\n  arr := make([]int32, n)\n  arrP := &arr[0]\n  fmt.Printf("call fibArray(%d, %p) = %d\\n", n, arrP, fibArray(n, arrP))\n  fmt.Printf("call fibArrayReturnMemory(%d) return %p\\n", n, fibArrayReturnMemory(n))\n}\n\n// export fibArray\nfunc fibArray(n int32, p *int32) int32 {\n  arr := unsafe.Slice(p, n)\n  for i := int32(0); i < n; i++ {\n    switch {\n    case i < 2:\n      arr[i] = i\n    default:\n      arr[i] = arr[i-1] + arr[i-2]\n    }\n  }\n  return arr[n-1]\n}\n\n// export fibArrayReturnMemory\nfunc fibArrayReturnMemory(n int32) *int32 {\n  arr := make([]int32, n)\n  for i := int32(0); i < n; i++ {\n    switch {\n    case i < 2:\n      arr[i] = i\n    default:\n      arr[i] = arr[i-1] + arr[i-2]\n    }\n  }\n  return &arr[0]\n}\n')),(0,a.kt)("p",null,"Use the TinyGo compiler tools to compile the Go source code into a WebAssembly bytecode application."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tinygo build -o fib.wasm -target wasi fib.go\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-go-examples/blob/master/go_AccessMemoryTinyGo/run.go"},"Go SDK application")," must call ",(0,a.kt)("inlineCode",{parentName:"p"},"malloc")," from the WasmEdge VM to get a pointer to the array.\nIt will then call the ",(0,a.kt)("inlineCode",{parentName:"p"},"fibArray()")," function in TinyGo with the pointer.\nAfter the functions return, the Go app uses the WasmEdge SDK's ",(0,a.kt)("inlineCode",{parentName:"p"},"store")," API to construct an array from the pointer in the call parameter (",(0,a.kt)("inlineCode",{parentName:"p"},"fibArray()"),") or in the return value (",(0,a.kt)("inlineCode",{parentName:"p"},"fibArrayReturnMemory()"),").\nThe Go application will eventually call ",(0,a.kt)("inlineCode",{parentName:"p"},"free")," to free the memory space."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n  "fmt"\n  "os"\n  "unsafe"\n\n  "github.com/second-state/WasmEdge-go/wasmedge"\n)\n\nfunc main() {\n  wasmedge.SetLogErrorLevel()\n  conf := wasmedge.NewConfigure(wasmedge.WASI)\n  vm := wasmedge.NewVMWithConfig(conf)\n\n  wasi := vm.GetImportModule(wasmedge.WASI)\n  wasi.InitWasi(\n    os.Args[1:],\n    os.Environ(),\n    []string{".:."},\n  )\n\n  err := vm.LoadWasmFile(os.Args[1])\n  if err != nil {\n    fmt.Println("failed to load wasm")\n  }\n  vm.Validate()\n  vm.Instantiate()\n\n  n := int32(10)\n\n  p, err := vm.Execute("malloc", n)\n  if err != nil {\n    fmt.Println("malloc failed:", err)\n  }\n\n  fib, err := vm.Execute("fibArray", n, p[0])\n  if err != nil {\n    fmt.Println("fibArray failed:", err)\n  } else {\n    fmt.Println("fibArray() returned:", fib[0])\n    fmt.Printf("fibArray memory at: %p\\n", unsafe.Pointer((uintptr)(p[0].(int32))))\n    mod := vm.GetActiveModule()\n    mem := mod.FindMemory("memory")\n    if mem != nil {\n      // int32 occupies 4 bytes\n      fibArray, err := mem.GetData(uint(p[0].(int32)), uint(n * 4))\n      if err == nil && fibArray != nil {\n        fmt.Println("fibArray:", fibArray)\n      }\n    }\n  }\n\n  fibP, err := vm.Execute("fibArrayReturnMemory", n)\n  if err != nil {\n    fmt.Println("fibArrayReturnMemory failed:", err)\n  } else {\n    fmt.Printf("fibArrayReturnMemory memory at: %p\\n", unsafe.Pointer((uintptr)(fibP[0].(int32))))\n    mod := vm.GetActiveModule()\n    mem := mod.FindMemory("memory")\n    if mem != nil {\n      // int32 occupies 4 bytes\n      fibArrayReturnMemory, err := mem.GetData(uint(fibP[0].(int32)), uint(n * 4))\n      if err == nil && fibArrayReturnMemory != nil {\n        fmt.Println("fibArrayReturnMemory:", fibArrayReturnMemory)\n      }\n    }\n  }\n\n  _, err = vm.Execute("free", p...)\n  if err != nil {\n    fmt.Println("free failed:", err)\n  }\n\n  exitcode := wasi.WasiGetExitCode()\n  if exitcode != 0 {\n    fmt.Println("Go: Running wasm failed, exit code:", exitcode)\n  }\n\n  vm.Release()\n  conf.Release()\n}\n')),(0,a.kt)("p",null,"To build the Go SDK example, run the following commands."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/second-state/WasmEdge-go/wasmedge@v{{ wasmedge_version }}\ngo build run.go\n")),(0,a.kt)("p",null,"Now you can use the Go application to run the WebAssembly plug-in compiled from TinyGo."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./run fib.wasm\nfibArray() returned: 34\nfibArray memory at: 0x14d3c\nfibArray: [0 0 0 0 1 0 0 0 1 0 0 0 2 0 0 0 3 0 0 0 5 0 0 0 8 0 0 0 13 0 0 0 21 0 0 0 34 0 0 0]\nfibArrayReturnMemory memory at: 0x14d4c\nfibArrayReturnMemory: [0 0 0 0 1 0 0 0 1 0 0 0 2 0 0 0 3 0 0 0 5 0 0 0 8 0 0 0 13 0 0 0 21 0 0 0 34 0 0 0]\n")))}p.isMDXComponent=!0}}]);