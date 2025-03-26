import { projectsMocks } from "./moks/projects.mock.ts";
import {Project, IProjectsRequest, Sprint, Tasks} from './types/interfaceApi.ts'
import {sprintsMoks} from './moks/sprints.mock.ts'
import {backlogMocks} from './moks/backlog.mock.ts'
import {tasksMocks} from './moks/tasks.mock.ts'


export const projectsAPI = {
  getProjects: async(_filters:IProjectsRequest ): Promise< Project[]> => {
    return new Promise ((resolve): void=> {
      setTimeout((): void => {
        resolve(projectsMocks)
      }, 1000)
    })
  }
}

let localSprints = [...sprintsMoks]

export const sprintsMoksApi = {
  getSprints: async (_filters: IProjectsRequest): Promise<Sprint[]> => {
    return new Promise((resolve): void => {
      setTimeout((): void => {
        resolve(sprintsMoks);
      }, 1000);
    });
  },

  deleteSprints: async (projectId: number): Promise<void> => {
    return new Promise((resolve): void => {
      setTimeout((): void => {
        localSprints = sprintsMoks.filter((sprint) => sprint.projectId !== projectId);
        resolve();
      }, 500);
    });
  },
};

export const backlogMoksApi = {
  getBacklog: async(_filters:IProjectsRequest ): Promise<Backlog[]> => {
    return new Promise((resolve): void => {
      setTimeout((): void=> {
        resolve(backlogMocks)
      },1000 )
    })
  }
}

export const tasksMocksApi = {
  getTasks: async(_filters:IProjectsRequest ): Promise<Tasks[]> => {
    return new Promise((resolve):void => {
      setTimeout((): void => {
        resolve(tasksMocks)
      },1000)
    })
  }
}
