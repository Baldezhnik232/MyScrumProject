
export interface Project {
    id: number;
    titleKey: string;
    description: string;
    timestamp: string;
}

export interface Backlog extends Project {
    storyPoints: number
}


export interface Sprint extends Project {
    projectId: number,
    TODO: [],
    DOING: [],
    DONE: []
}


export interface IProjectsRequest {
    filter?: string
}