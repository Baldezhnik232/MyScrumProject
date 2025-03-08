
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
    tasksID: number;
    status: TaskStatus;
    sprintId: number; 
}   
// export interface SprintTask extends Tasks {
//     storyPoints: number;
//     description: string;
//     timestamp: string;
//   }



export interface IProjectsRequest {
    filter?: string
}