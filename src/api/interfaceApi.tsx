
export interface Project {
    id: number;
    titleKey: string;
    description: string;
    timestamp: string;
}

export interface Backlog extends Project {
    storyPoints: number
}

interface Task {
    id: number;
    title: string;
    description: string;
  }



export interface Sprint extends Project {
    projectId: number,
    TODO: Task[],
    DOING: Task[],
    DONE: Task[]
}




export interface IProjectsRequest {
    filter?: string
}