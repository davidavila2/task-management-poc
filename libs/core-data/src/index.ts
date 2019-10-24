export { CoreDataModule } from './lib/core-data.module';

export { TaskService } from './lib/tasks/task.service';
export { Task, emptyTask } from './lib/tasks/task';
export { User } from './lib/users/user';

// Auth
export { UserService } from './lib/users/user.service';
export { TokenInterceptorService} from './lib/users/token-interceptor.service';
export { UserGuard } from './lib/users/user.guard';

export { NotifyService } from './lib/notify.service';
