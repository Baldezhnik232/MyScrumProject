
export interface Project {
    id: number;
    titleKey: string;
    description: string;
    timestamp: string;
}


export interface IProjectsRequest {
    filter?: string
}