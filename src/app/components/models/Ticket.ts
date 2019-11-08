export interface Ticket {
    id: number,
    amount: number,
    datesubmitted: Date,
    dateresolved: Date,
    description: string,
    imgaddr: string,
    author: number,
    resolver: number,
    status: number,
    type: number
}
