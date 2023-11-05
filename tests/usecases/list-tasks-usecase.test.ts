import { describe, expect, test } from "vitest";
import { ListTasksUseCase } from "../../src/application/usecases";
import { ApiService, StoreService } from "../../src/domain/services";
import { mock } from "vitest-mock-extended";

const makeSut = () => {
  const storeService = mock<StoreService>();
  const apiService = mock<ApiService>();
  const usecase = new ListTasksUseCase(storeService, apiService);

  return { usecase, storeService, apiService };
}

describe('testing list tasks usecase', () => {
  test('should list tasks', async () => {
    const { usecase, storeService, apiService } = makeSut();

    storeService.list.mockResolvedValue([]);
    apiService.list.mockResolvedValue([]);

    const result = await usecase.execute();
    expect(result).toEqual([]);
  })
})