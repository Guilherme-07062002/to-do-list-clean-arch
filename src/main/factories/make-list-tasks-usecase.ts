import { ReduxAppStore } from "@/infra/services/redux/config/store/store";
import { MakeUsecase } from "../ports";
import { ReduxStoreService } from "@/infra/services/redux";
import { ListTasksUseCase } from "@/application/usecases";
import { FakeApiService } from "@/infra/services/api/fake";

export const makeListTasksUseCase: MakeUsecase = () => {
  const store = ReduxAppStore
  const storeService = new ReduxStoreService(store);
  const apiService = new FakeApiService();
  return new ListTasksUseCase(storeService, apiService);
}