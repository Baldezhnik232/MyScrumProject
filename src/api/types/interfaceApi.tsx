
export interface Project {
    id: number;
    title: string;
    description: string;
    timestamp: string;
}

export interface Sprint extends Omit<Project, 'id'> {
    projectId: number,
}

export type TaskStatus = "todo" | "doing" | "done";

export interface Tasks  {
    tasksID: number,
    title: string,
    status: TaskStatus,
    sprintId: number | null
}



export interface IProjectsRequest {
    filter?: string
}