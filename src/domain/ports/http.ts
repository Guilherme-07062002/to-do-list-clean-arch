export type Request<B = unknown, P = unknown, Q = unknown> = {
    body: B
    params: P
    query: Q
}

export type Response<B = unknown> = {
    status: number,
    body: B
}