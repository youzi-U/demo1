export default async function tryCatch<T, E>(cb: () => T): Promise<[T, E]> {
  try {
    const result = await cb();
    return [result as T, null as unknown as E];
  } catch (err) {
    return [null as unknown as T, err as E];
  }
}
