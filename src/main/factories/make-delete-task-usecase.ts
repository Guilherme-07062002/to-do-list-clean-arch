import { DeleteTaskUseCase } from "@/application/usecases/delete-task-usecase";
import { FakeApiService } from "@/infra/services/api/fake";
import { ReduxStoreService } from "@/infra/services/redux";
import { ReduxAppStore } from "@/infra/services/redux/config/store/store";

export const MakeDeleteTaskUseCase = () => {
  const store = ReduxAppStore
  const storeService = new ReduxStoreService(store);
  const apiService = new FakeApiService();
  return new DeleteTaskUseCase(storeService, apiService);
}