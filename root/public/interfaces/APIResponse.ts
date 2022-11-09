export default interface APIResponse<T> {
    data: T,
    errors: Array<string>
}