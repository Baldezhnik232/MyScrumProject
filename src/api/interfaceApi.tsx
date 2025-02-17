
export interface Project {
    id: number;
    titleKey: string;
    description: string;
    timestamp: string;
}


export interface Sprint extends Project {
    TODO: [],
    DOING: [],
    DONE: []
}


export interface IProjectsRequest {
    filter?: string
}