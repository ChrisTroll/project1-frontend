export interface PrettyTicket {
    id: number,
    amount: number,
    datesubmitted: Date,
    dateresolved: Date,
    description: string,
    imgaddr: string,
    resolver: number,
    status: string,
    type: string
}