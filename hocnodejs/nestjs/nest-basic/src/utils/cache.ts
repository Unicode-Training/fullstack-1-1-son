import { Cache } from "@nestjs/cache-manager";

export const cache = async  <T>(cacheManager: Cache, key: string, callback: () => Promise<T>) => {
    const dataFromCache = await cacheManager.get(key);
    if (!dataFromCache) {
        const dataFromDb = await callback();
        await cacheManager.set(key, dataFromDb);
        return dataFromDb;
    }
    return dataFromCache;
}

export const incrementCache = async (cacheManager: Cache, key: string) => {
    const dataFromCache = await cacheManager.get(key);
    if (!dataFromCache) {
        await cacheManager.set(key, 1);
        return 1;
    }
    await cacheManager.set(key, +dataFromCache + 1);
    return +dataFromCache + 1;
}
