export class FileStorage {
    constructor() {
        if (FileStorage.instance) {
            return FileStorage.instance;
        }

        this.databaseName = 'fileStorageDB';
        this.storeName = 'files';
        this.db = null;
        FileStorage.instance = this;
    }

    async init() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.databaseName, 1);

            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                if (!db.objectStoreNames.contains(this.storeName)) {
                    db.createObjectStore(this.storeName, { keyPath: 'id', autoIncrement: true });
                }
            };

            request.onsuccess = (event) => {
                this.db = event.target.result;
                resolve();
            };

            request.onerror = (event) => {
                reject('Error opening indexedDB:', event.target.error);
            };
        });
    }

    async saveFile(file) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(this.storeName, 'readwrite');
            const store = transaction.objectStore(this.storeName);

            const fileData = {
                name: file.name,
                type: file.type,
                content: file
            };

            const request = store.add(fileData);

            request.onsuccess = () => resolve('File saved!');
            request.onerror = (event) => reject('Error saveFile method:', event.target.error);
        });
    }

    async getAllFiles() {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(this.storeName, 'readonly');
            const store = transaction.objectStore(this.storeName);

            const request = store.getAll();

            request.onsuccess = (event) => resolve(event.target.result);
            request.onerror = (event) => reject('Error in getAllFiles method:', event.target.error);
        });
    }

    async deleteAllFiles() {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(this.storeName, 'readwrite');
            const store = transaction.objectStore(this.storeName);

            const request = store.clear();

            request.onsuccess = () => resolve('All files have been removed');
            request.onerror = (event) => reject('Error deleteAllFiles method:', event.target.error);
        });
    }
}
