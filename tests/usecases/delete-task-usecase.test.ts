import { DeleteTaskUseCase } from "../../src/application/usecases"
import { ApiService, StoreService } from "../../src/domain/services"
import { describe, expect, test } from "vitest";
import { mock } from "vitest-mock-extended"

const makeSut = () => {
  const storeService = mock<StoreService>();
  const apiService = mock<ApiService>();
  const usecase = new DeleteTaskUseCase(storeService, apiService);

  return { usecase, storeService, apiService };
}

describe('testing delete task usecase', () => {
  test('should delete a task', async () => {
    const { usecase, storeService, apiService } = makeSut();

    storeService.delete.mockResolvedValue(true);
    apiService.delete.mockResolvedValue(true);

    const result = await usecase.execute({ id: 1 });
    expect(result).toEqual(true);
  })
})