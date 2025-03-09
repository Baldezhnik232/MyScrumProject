
export interface Project {
    id: number;
    title: string;
    description: string;
    timestamp: string;
}

export interface Sprint extends Omit<Project, 'id'> {
    projectId: number,
    tasksID: number
}

export type TaskStatus = "📝 To Do" | "🚀 Doing" | "🚀 Done";

export interface Tasks  {
    id: number;
    status: TaskStatus;
    sprintId: number; 
}   



export interface IProjectsRequest {
    filter?: string
}