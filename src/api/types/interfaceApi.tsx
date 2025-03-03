
export interface Project {
    id: number;
    title: string;
    description: string;
    timestamp: string;
}

// export interface Backlog extends Project {
//     storyPoints: number
// }


export interface Sprint extends Omit<Project, 'id'> {
    projectId: number,
}

export interface Tasks extends Omit<Project, 'id'>  {
    tasksID: number 
}

export interface IProjectsRequest {
    filter?: string
}