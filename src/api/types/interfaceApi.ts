
export interface Project {
    id: number;
    title: string;
    description: string;
    timestamp: string;
}

export interface Sprint extends Omit<Project, 'id'> {
    projectId: number,
    sprintId: number
}

export type TaskStatus = "todo" | "doing" | "done";

export interface Tasks  {  
    tasksID: number;
    title: string;
    storyPoints: number;
    description: string;
    timestamp: string;
    status: TaskStatus;
    sprintId: number;
    isLegacy: boolean;
    image?: File

}   


export interface IProjectsRequest {
    filter?: string
}