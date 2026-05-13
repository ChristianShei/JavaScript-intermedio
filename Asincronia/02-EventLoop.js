
// Even Loop (Bucle de eventos)

// Componentes del Even Loop

// 1. Call Stack (pila de ejecución)
// 2. wep APIs (APIs del navegador) o Node.js: setTimeout()...
// 3. Tas Queue (cola de tareas)

//Flujo de Event Loop:

//1. Call Stack
//2. Operasiones asincronas -> web APIs o Node.js
//3. Operación termina -> la cola en Task Queue o Microtask Queue
//4. Si Call Stack vacio-> Mueve tareas del Microtask Queue o Task Queue al Call Stack
//5. El proceso se repite