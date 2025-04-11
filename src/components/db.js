export const initDB = () => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("HospitalDB", 1);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains("citas")) {
                db.createObjectStore("citas", { keyPath: "id", autoIncrement: true });
            }
        };

        request.onsuccess = (event) => {
            resolve(event.target.result);
        };

        request.onerror = (event) => {
            reject("Error al abrir la base de datos");
        };
    });
};

export const addCita = (db, cita) => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(["citas"], "readwrite");
        const store = transaction.objectStore("citas");
        const request = store.add(cita);

        request.onsuccess = () => {
            resolve();
        };

        request.onerror = (event) => {
            reject("Error al agregar la cita");
        };
    });
};

export const getCitas = (db) => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(["citas"], "readonly");
        const store = transaction.objectStore("citas");
        const request = store.getAll();

        request.onsuccess = () => {
            resolve(request.result);
        };

        request.onerror = (event) => {
            reject("Error al obtener las citas");
        };
    });
};