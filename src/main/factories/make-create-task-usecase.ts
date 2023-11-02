import { ReduxStoreService } from "@/infra/services/redux";
import { MakeUsecase } from "../ports";
import { ReduxAppStore } from "@/infra/services/redux/config/store/store";
import { FakeApiService } from "@/infra/services/api/fake";
import { CreateTaskUseCase } from "@/application/usecases";

export const makeCreateTaskUseCase: MakeUsecase = () => {
  const store = ReduxAppStore
  const storeService = new ReduxStoreService(store);
  const apiService = new FakeApiService();
  return new CreateTaskUseCase(storeService, apiService);
}