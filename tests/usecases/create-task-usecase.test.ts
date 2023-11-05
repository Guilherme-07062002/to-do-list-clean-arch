import { StoreService } from '../../src/domain/services/store-service';
import { ApiService } from '../../src/domain/services'

import { mock } from 'vitest-mock-extended'
import { CreateTaskUseCase } from '../../src/application/usecases';
import { describe, expect, test } from 'vitest';

const makeSut = () => {
  const storeService = mock<StoreService>()
  const apiService = mock<ApiService>()
  const usecase = new CreateTaskUseCase(storeService, apiService)

  return { usecase, storeService, apiService }
}

const makeFakeTask = () => ({ id: 1, description: 'any_description' })

describe('testing create task usecase', () => {
  test('should create a task', async () => {
    const { usecase, storeService, apiService } = makeSut()

    storeService.create.mockResolvedValue(makeFakeTask())
    apiService.create.mockResolvedValue(makeFakeTask())

    const result = await usecase.execute(makeFakeTask())
    expect(result).toEqual(makeFakeTask())
  })
})